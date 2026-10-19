/* Application installable : service worker, détection de mise à jour, état hors ligne, réparation.
   Principes : jamais de rechargement automatique (pas de boucle, pas de saisie perdue) ; la mise à jour est proposée
   par un bandeau et appliquée quand l'utilisatrice le décide, après sauvegarde des saisies en cours. */
(function () {
  'use strict';
  const A = window.CAApp;
  const { h } = A;
  const P = A.pwa = { reg: null, swVersion: null, serverVersion: null, supported: 'serviceWorker' in navigator, lastCheck: 0, pending: null };
  const isDev = () => !A.VERSION || A.VERSION === 'dev' || A.VERSION === '__V__';

  P.init = () => {
    updateOnline();
    window.addEventListener('online', updateOnline);
    window.addEventListener('offline', updateOnline);
    if (!P.supported) return;
    const sw = navigator.serviceWorker;
    const hadController = !!sw.controller;
    sw.addEventListener('message', ev => {
      const d = ev.data || {};
      if (d.type === 'sw-activated') { P.swVersion = d.version; if (d.version && d.version !== A.VERSION && !isDev()) showUpdate(d.version); refreshBox(); }
      if (d.type === 'sw-version') { P.swVersion = d.version; refreshBox(); }
    });
    sw.addEventListener('controllerchange', () => {
      // Un nouveau service worker a pris le contrôle. On NE recharge PAS : on propose la mise à jour.
      if (hadController || P.pending) askVersion().then(v => { if (v && v !== A.VERSION && !isDev()) showUpdate(v); });
    });
    sw.register('sw.js', { scope: './' }).then(reg => {
      P.reg = reg;
      askVersion();
      reg.addEventListener('updatefound', () => { P.pending = reg.installing; });
    }).catch(err => { P.error = String(err && err.message ? err.message : err); refreshBox(); });
    setTimeout(() => P.check(false), 4000);
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && Date.now() - P.lastCheck > 30 * 60000) P.check(false); });
  };

  function askVersion() {
    const c = P.supported && navigator.serviceWorker.controller;
    if (!c) return Promise.resolve(null);
    return new Promise(resolve => {
      const ch = new MessageChannel();
      const t = setTimeout(() => resolve(null), 2000);
      ch.port1.onmessage = ev => { clearTimeout(t); P.swVersion = ev.data && ev.data.version; refreshBox(); resolve(P.swVersion); };
      try { c.postMessage({ type: 'get-version' }, [ch.port2]); } catch (e) { clearTimeout(t); resolve(null); }
    });
  }
  P.askVersion = askVersion;

  /** Vérifie la version publiée (assets/version.json, jamais servi par le cache) et demande au SW de se mettre à jour. */
  P.check = manual => {
    P.lastCheck = Date.now();
    const jobs = [];
    if (P.reg) jobs.push(P.reg.update().catch(() => null));
    jobs.push(fetch('assets/version.json?t=' + Date.now(), { cache: 'no-store' }).then(r => (r.ok ? r.json() : null)).then(j => { P.serverVersion = j && j.version ? String(j.version) : null; return P.serverVersion; }).catch(() => null));
    return Promise.all(jobs).then(() => {
      refreshBox();
      const v = P.serverVersion;
      if (v && v !== A.VERSION && !isDev()) { showUpdate(v); if (manual) A.notify('Une nouvelle version est disponible.'); return 'update'; }
      if (manual) A.notify(v ? 'Tu as la dernière version.' : navigator.onLine === false ? 'Hors ligne : vérification impossible pour l’instant.' : 'Vérification impossible pour l’instant.');
      return v ? 'current' : 'unknown';
    });
  };
  A.actions.checkupdate = () => P.check(true);

  function showUpdate(v) {
    A.ui.banner('update', {
      kind: 'info', icon: 'refresh', title: 'Nouvelle version disponible.', text: 'Tes données sont conservées.',
      actions: [h('button', { type: 'button', class: 'ca-btn is-primary is-small', dataset: { act: 'applyupdate' } }, A.icon('refresh', { size: 18 }), h('span', null, 'Mettre à jour'))],
    });
    P.available = v;
  }
  P.showUpdate = showUpdate;

  /** Applique la mise à jour : sauvegarde des saisies, activation du SW en attente s'il y en a un, puis UN rechargement. */
  P.apply = () => {
    A.router.saveNow();
    const reg = P.reg;
    const go = () => { try { sessionStorage.setItem('rmbd-ca:updated-from', A.VERSION); } catch (e) { /* rien */ } location.reload(); };
    const inst = reg && reg.installing;
    if (inst) {
      // Le nouveau service worker télécharge encore la version : on attend qu'il soit prêt (sinon la page
      // rechargée serait servie par l'ancien, puis la mise à jour se terminerait en arrière-plan).
      A.ui.banner('update', { kind: 'info', icon: 'refresh', title: 'Mise à jour en cours…', text: 'Téléchargement de la nouvelle version. Tes données sont conservées.' });
      let done = false;
      const fin = () => { if (!done) { done = true; go(); } };
      inst.addEventListener('statechange', () => { if (inst.state === 'activated' || inst.state === 'redundant') fin(); });
      setTimeout(fin, 20000);
      return;
    }
    if (reg && reg.waiting) {
      let done = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => { if (!done) { done = true; go(); } });
      reg.waiting.postMessage({ type: 'skip-waiting' });
      setTimeout(() => { if (!done) { done = true; go(); } }, 3000);
    } else go();
  };
  A.actions.applyupdate = el => { el.disabled = true; P.apply(); };

  /** Réparation : désinscrit le SW, vide les caches de l'application, recharge. Le localStorage n'est jamais touché. */
  A.actions.repair = async () => {
    if (!(await A.confirm({ title: 'Réparer l’application ?', text: ['Les fichiers de l’application gardés par le navigateur seront supprimés puis téléchargés à nouveau (connexion nécessaire).', 'Tes données (progression, carnet, notes) ne sont pas touchées.'], ok: 'Réparer' }))) return;
    A.router.saveNow();
    if (window.CA_REPAIR) window.CA_REPAIR(); else location.reload();
  };

  function updateOnline() {
    const off = navigator.onLine === false;
    const chip = A.qs('#ca-offline');
    if (chip) chip.hidden = !off;
    document.documentElement.classList.toggle('is-offline', off);
    refreshBox();
  }

  function refreshBox() {
    const box = A.qs('#ver-box');
    if (box) P.fillVersions(box);
  }
  P.fillVersions = box => {
    const row = (k, v) => h('div', null, h('dt', null, k), h('dd', null, v));
    let sw;
    if (!P.supported) sw = 'non pris en charge par ce navigateur (pas de mode hors ligne)';
    else if (P.error) sw = 'inscription impossible : ' + P.error;
    else if (!navigator.serviceWorker.controller) sw = 'en cours d’installation (le mode hors ligne sera prêt à la prochaine ouverture)';
    else sw = P.swVersion ? `actif · version ${P.swVersion}` : 'actif';
    A.replace(box,
      row('Version affichée', A.VERSION),
      row('Version publiée', P.serverVersion || (P.lastCheck ? 'inconnue (hors ligne ?)' : 'non vérifiée')),
      row('Mode hors ligne', sw),
      row('Connexion', navigator.onLine === false ? 'hors ligne' : 'en ligne'));
    if (!P.lastCheck || Date.now() - P.lastCheck > 60000) { P.lastCheck = Date.now(); P.check(false); }
  };
})();

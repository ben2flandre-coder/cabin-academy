/* Démarrage : contenu, stockage, réglages, coquille, délégation des actions, premier écran, service worker. */
(function () {
  'use strict';
  const A = window.CAApp;
  const boot = window.CA_BOOT || { fail() {} };
  const { h } = A;
  try {
    if (!window.CA_CONTENT || !Array.isArray(window.CA_CONTENT.chapters)) {
      boot.fail('Le contenu des chapitres (assets/content.js) n’a pas pu être chargé. Vérifie ta connexion, puis réessaie.', 'window.CA_CONTENT absent');
      return;
    }
    A.store.load();
    A.applySettings();
    const root = document.getElementById('ca-app');
    A.ui.shell(root);

    // Délégation globale : tout élément data-act="nom" appelle A.actions[nom](élément, événement).
    document.addEventListener('click', ev => {
      const el = ev.target instanceof Element ? ev.target.closest('[data-act]') : null;
      if (!el) return;
      const fn = A.actions[el.dataset.act];
      if (!fn) return;
      try { const r = fn(el, ev); if (r && typeof r.catch === 'function') r.catch(e => { console.error(e); A.notify('Une erreur est survenue : action non terminée.', 'ko'); }); }
      catch (e) { console.error(e); A.notify('Une erreur est survenue : action non terminée.', 'ko'); }
    });

    storageBanners();
    A.store.subscribe(what => {
      if (what === 'status') storageBanners();
      if (what === 'external') { A.notify('Tes données ont été modifiées dans un autre onglet : affichage mis à jour.'); A.router.render(); }
    });
    A.events.on('progress', () => A.ui.updateDueBadge());

    root.hidden = false;
    const wait = document.getElementById('ca-boot');
    if (wait) wait.hidden = true;
    A.router.render();
    boot.done = true;
    try { const from = sessionStorage.getItem('rmbd-ca:updated-from'); if (from) { sessionStorage.removeItem('rmbd-ca:updated-from'); if (from !== A.VERSION) A.notify('Application mise à jour. Tes données sont conservées.', 'ok'); } } catch (e) { /* rien */ }
    window.addEventListener('error', ev => { console.error(ev.error || ev.message); });
    A.pwa.init();
  } catch (e) {
    console.error(e);
    boot.fail('Une erreur a interrompu le démarrage de l’application.', String(e && e.stack ? e.stack : e));
  }

  function storageBanners() {
    const st = A.store.status;
    if (st.mode === 'memory') {
      A.ui.banner('storage', { kind: 'warn', title: 'Stockage indisponible.', text: 'Tes progrès ne seront pas conservés après la fermeture (navigation privée ?). Exporte tes données depuis les réglages.', actions: [A.ui.btn('Réglages', { href: '#/reglages', class: 'is-small' }, 'settings')] });
    } else if (st.quota) {
      A.ui.banner('storage', { kind: 'warn', title: 'Mémoire du navigateur pleine.', text: 'La dernière modification n’a pas pu être enregistrée. Exporte tes données, puis libère de l’espace.', actions: [A.ui.btn('Exporter', { href: '#/reglages', class: 'is-small' }, 'download')] });
    } else A.ui.banner('storage', null);
    if (st.corruptKey && !A.ui.bannerShown) {
      A.ui.bannerShown = true;
      const dismiss = h('button', { type: 'button', class: 'ca-btn is-small', dataset: { act: 'dismissbanner', banner: 'corrupt' } }, 'J’ai compris');
      A.ui.banner('corrupt', {
        kind: 'warn',
        title: st.newer ? 'Données d’une version plus récente.' : 'Données illisibles mises de côté.',
        text: st.newer ? 'Elles ont été copiées telles quelles ; l’application lit ce qu’elle comprend.' : (st.restoredBackup ? 'Une copie a été conservée et la dernière sauvegarde automatique a été restaurée.' : 'Une copie a été conservée ; l’application repart de zéro.'),
        actions: [dismiss],
      });
    }
  }
  A.actions.dismissbanner = el => A.ui.banner(el.dataset.banner, null);
})();

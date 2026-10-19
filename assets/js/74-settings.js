/* Réglages, menu « Plus » et guide d'utilisation. */
(function () {
  'use strict';
  const A = window.CAApp;
  const { h, arr } = A;

  /** Applique thème et taille du texte à la racine du document. */
  A.applySettings = () => {
    const s = A.state.settings;
    const root = document.documentElement;
    if (s.theme === 'light' || s.theme === 'dark') root.setAttribute('data-theme', s.theme); else root.removeAttribute('data-theme');
    root.setAttribute('data-size', s.textSize || 'm');
    const dark = s.theme === 'dark' || (s.theme !== 'light' && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#0f1a26' : '#14283d');
  };
  if (window.matchMedia) { try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => A.applySettings()); } catch (e) { /* ancien navigateur */ } }

  const radios = (name, list, value, act) => h('div', { class: 'ca-seg', role: 'radiogroup', 'aria-labelledby': name + '-l' },
    list.map(([v, label]) => h('label', { class: 'ca-seg-l' }, h('input', { type: 'radio', name, value: v, class: 'ca-seg-in', checked: v === value, dataset: { act } }), h('span', null, label))));

  A.screens.reglages = () => {
    const s = A.state.settings;
    const st = A.store.status;
    const date = h('input', { type: 'date', class: 'ca-input', value: A.isDay(s.startDate) ? s.startDate : '', id: 'set-date' });
    date.addEventListener('change', () => {
      if (date.value && !A.isDay(date.value)) return;
      s.startDate = date.value || '';
      A.store.save();
      A.notify(date.value ? `Date d’entrée enregistrée : ${A.fmtDay(date.value)}.` : 'Date d’entrée effacée.');
    });
    const file = h('input', { type: 'file', accept: '.json,application/json', class: 'ca-file', id: 'imp-file' });
    const impBox = h('div', { class: 'ca-import', 'aria-live': 'polite' });
    file.addEventListener('change', () => importPreview(file, impBox));
    const bk = A.store.readBackup();
    const legacy = A.store.legacy();
    const storage = st.mode === 'memory'
      ? h('p', { class: 'ca-mention is-warn' }, A.icon('alert', { size: 20 }), h('span', null, `Stockage indisponible (${st.reason}) : l’application fonctionne en mode mémoire. Tes progrès seront perdus à la fermeture de l’onglet. Vérifie que tu n’es pas en navigation privée, puis exporte tes données régulièrement.`))
      : h('p', { class: 'ca-small' }, A.icon('check', { size: 18 }), ` Données enregistrées sur cet appareil (navigateur)${st.lastSaved ? ` · dernière écriture : ${A.fmtDateTime(st.lastSaved)}` : ''}${st.quota ? ' · ⚠ mémoire pleine : la dernière modification n’a pas pu être écrite' : ''}.`);
    const sum = A.store.summary(A.state);
    const verBox = h('dl', { class: 'ca-meta', id: 'ver-box' });
    const node = h('div', { class: 'ca-page' },
      A.ui.head('Réglages', { crumbs: [['Plus', '#/plus'], ['Réglages', null]] }),
      A.ui.card(null, h('h2', null, 'Affichage'),
        h('p', { id: 'theme-l', class: 'ca-label' }, 'Thème'),
        radios('theme', [['auto', 'Automatique'], ['light', 'Clair'], ['dark', 'Sombre']], s.theme, 'settheme'),
        h('p', { id: 'size-l', class: 'ca-label' }, 'Taille du texte'),
        radios('size', [['m', 'Normal'], ['l', 'Grand'], ['xl', 'Très grand'], ['xxl', 'Maximal']], s.textSize, 'setsize'),
        h('p', { class: 'ca-hint' }, 'Aperçu : les rubriques se lisent avec cette taille. Le zoom du navigateur reste disponible.')),
      A.ui.card(null, h('h2', null, 'Formation'),
        A.ui.field('Date d’entrée en formation', date, 'Date communiquée, modifiable. Elle sert au compte à rebours de l’accueil.'),
        h('div', { class: 'ca-field' }, h('p', { class: 'ca-label', id: 'sess-l' }, 'Taille habituelle d’une session de révision'), radios('sessz', [['5', '5 cartes'], ['10', '10 cartes'], ['20', '20 cartes']], String(s.session), 'setsession'))),
      A.ui.card(null, h('h2', null, 'Mes données'),
        storage,
        h('p', { class: 'ca-small ca-muted' }, `${sum.exercices} exercices tentés (${sum.reussis} réussis) · ${sum.cartes} cartes de révision · ${sum.carnet} entrées de carnet · ${sum.notes} notes de chapitre · ${sum.cas} cas terminés.`),
        h('h3', null, 'Sauvegarder'),
        A.P('Exporte régulièrement tes données dans un fichier : c’est ta sauvegarde si tu changes de téléphone ou si le navigateur efface ses données.'),
        h('button', { type: 'button', class: 'ca-btn is-primary', dataset: { act: 'exportall' } }, A.icon('download'), h('span', null, 'Exporter mes données (JSON)')),
        h('h3', null, 'Importer'),
        A.ui.field('Fichier d’export (.json)', file, 'Le fichier est vérifié et résumé avant tout changement. Une sauvegarde automatique est faite avant d’importer.'),
        impBox,
        bk ? h('div', null, h('h3', null, 'Sauvegarde automatique'), h('p', { class: 'ca-small' }, `Faite le ${bk.savedAt ? A.fmtDateTime(bk.savedAt) : '?'}${bk.reason ? ' (' + bk.reason + ')' : ''}.`),
          h('button', { type: 'button', class: 'ca-btn', dataset: { act: 'restorebk' } }, A.icon('refresh'), h('span', null, 'Restaurer cette sauvegarde'))) : null,
        legacy.present ? h('div', null, h('h3', null, 'Ancienne version de l’application'),
          A.P(`Des données de l’ancienne version sont présentes sur cet appareil (${legacy.keys.join(', ')}). Elles ne sont jamais modifiées ni effacées.`),
          legacy.logs.length ? h('button', { type: 'button', class: 'ca-btn', dataset: { act: 'legacylogs' } }, A.icon('upload'), h('span', null, `Copier ${A.count(legacy.logs.length, 'entrée', 'entrées')} de l’ancien carnet`)) : null) : null,
        h('h3', null, 'Tout effacer'),
        A.P('Remet l’application à zéro sur cet appareil (progression, révisions, carnet, notes). Une sauvegarde automatique est faite juste avant.'),
        h('button', { type: 'button', class: 'ca-btn is-danger', dataset: { act: 'resetall' } }, A.icon('trash'), h('span', null, 'Réinitialiser mes données'))),
      A.ui.card(null, h('h2', null, 'Application'),
        verBox,
        h('div', { class: 'ca-row' },
          h('button', { type: 'button', class: 'ca-btn', dataset: { act: 'checkupdate' } }, A.icon('refresh'), h('span', null, 'Vérifier les mises à jour')),
          h('button', { type: 'button', class: 'ca-btn', dataset: { act: 'repair' } }, A.icon('wrench'), h('span', null, 'Réparer l’appli'))),
        h('p', { class: 'ca-hint' }, '« Réparer » supprime les fichiers de l’application gardés par le navigateur et les télécharge à nouveau (connexion nécessaire). Tes données ne sont pas touchées.'),
        h('p', null, h('a', { href: '#/guide' }, 'Guide d’utilisation'), ' · ', h('a', { href: '#/sources' }, 'Sources'))));
    A.pwa.fillVersions(verBox);
    return { title: 'Réglages', node };
  };
  A.actions.settheme = el => { A.state.settings.theme = el.value; A.store.save(); A.applySettings(); };
  A.actions.setsize = el => { A.state.settings.textSize = el.value; A.store.save(); A.applySettings(); };
  A.actions.setsession = el => { A.state.settings.session = Number(el.value); A.store.save(); };
  A.actions.exportall = () => {
    const data = A.store.exportData();
    const ok = A.download(`rmbd-cabin-academy-${A.today()}.json`, 'application/json', JSON.stringify(data, null, 1));
    A.notify(ok ? 'Export téléchargé. Range ce fichier en lieu sûr.' : 'L’export a échoué sur ce navigateur.', ok ? 'ok' : 'ko');
  };
  A.actions.restorebk = async () => {
    const bk = A.store.readBackup();
    if (!bk) return;
    if (!(await A.confirm({ title: 'Restaurer la sauvegarde ?', text: `Tes données actuelles seront remplacées par la sauvegarde du ${bk.savedAt ? A.fmtDateTime(bk.savedAt) : '?'}. Les données actuelles deviennent à leur tour la sauvegarde : tu peux revenir en arrière.`, ok: 'Restaurer' }))) return;
    A.store.restoreBackup(); A.applySettings();
    A.notify('Sauvegarde restaurée.', 'ok');
    A.router.render();
  };
  A.actions.resetall = async () => {
    if (!(await A.confirm({ title: 'Réinitialiser toutes tes données ?', text: ['Progression, révisions, carnet, notes et cas pratiques seront effacés de cet appareil.', 'Une sauvegarde automatique est faite juste avant ; pense aussi à exporter tes données.'], ok: 'Tout effacer', danger: true }))) return;
    A.store.reset(); A.applySettings();
    A.notify('Données réinitialisées. La sauvegarde automatique permet de revenir en arrière.');
    A.router.render();
  };
  A.actions.legacylogs = async () => {
    const lg = A.store.legacy();
    const t = new Date().toISOString();
    const pick = (o, keys) => { for (const k of keys) if (typeof o[k] === 'string' && o[k].trim()) return o[k].trim(); return ''; };
    const mapped = lg.logs.map(o => {
      const d = pick(o, ['date', 'day', 'jour']).slice(0, 10);
      return { id: 'legacy-' + A.slug(pick(o, ['id']) || A.uid()).slice(0, 40), date: d, task: pick(o, ['task', 'tache', 'tâche', 'title', 'titre', 'activity', 'activite']).slice(0, 200), zone: pick(o, ['zone', 'equipment', 'equipement', 'lieu']).slice(0, 200), notes: pick(o, ['notes', 'note', 'comment', 'commentaire', 'text']).slice(0, 6000), tutor: pick(o, ['tutor', 'tuteur']).slice(0, 200), level: 'observe', ch: '', created: t, updated: t };
    }).filter(e => A.isDay(e.date) && e.task);
    if (!mapped.length) { A.notify('Les entrées de l’ancien carnet n’ont pas un format reconnu : rien n’a été copié.', 'ko'); return; }
    if (!(await A.confirm({ title: 'Copier l’ancien carnet ?', text: `${A.count(mapped.length, 'entrée lisible', 'entrées lisibles')} sur ${lg.logs.length} seront ajoutées à ton carnet avec le niveau « Observé » (à corriger si besoin). Les anciennes données restent intactes.`, ok: 'Copier' }))) return;
    A.store.backup('avant copie de l’ancien carnet');
    const ids = new Set(A.state.journal.map(e => e.id));
    let n = 0;
    for (const e of mapped) if (!ids.has(e.id)) { A.state.journal.push(e); n++; }
    A.store.save(); A.store.flush();
    A.notify(`${A.count(n, 'entrée copiée', 'entrées copiées')} dans le carnet.`, 'ok');
  };

  function importPreview(file, box) {
    const f = file.files && file.files[0];
    A.clear(box);
    if (!f) return;
    if (f.size > A.store.LIMITS.importBytes) { A.replace(box, h('p', { class: 'ca-mention is-warn', role: 'alert' }, 'Ce fichier est trop volumineux pour être un export de cette application.')); return; }
    const reader = new FileReader();
    reader.onerror = () => A.replace(box, h('p', { class: 'ca-mention is-warn', role: 'alert' }, 'Le fichier n’a pas pu être lu.'));
    reader.onload = () => {
      const r = A.store.inspectImport(String(reader.result || ''));
      if (!r.ok) {
        A.replace(box, h('div', { class: 'ca-mention is-warn', role: 'alert' }, A.icon('alert', { size: 20 }), h('div', null, h('p', null, h('strong', null, 'Import refusé — aucune donnée n’a été modifiée.')), h('ul', null, r.errors.map(e => h('li', null, e))))));
        file.value = '';
        return;
      }
      const s = r.summary;
      const merge = h('button', { type: 'button', class: 'ca-btn is-primary' }, A.icon('layers'), h('span', null, 'Fusionner avec mes données'));
      const replace = h('button', { type: 'button', class: 'ca-btn is-danger' }, A.icon('upload'), h('span', null, 'Remplacer mes données'));
      const cancel = h('button', { type: 'button', class: 'ca-btn' }, A.icon('x'), h('span', null, 'Annuler'));
      A.replace(box, h('div', { class: 'ca-card is-inner' },
        h('p', null, h('strong', null, 'Aperçu du fichier'), r.exportedAt ? ` — exporté le ${A.fmtDateTime(r.exportedAt)}` : ''),
        h('ul', { class: 'ca-small' }, h('li', null, `${s.exercices} exercices tentés (${s.reussis} réussis)`), h('li', null, `${s.cartes} cartes de révision`), h('li', null, `${s.carnet} entrées de carnet`), h('li', null, `${s.notes} notes de chapitre`), h('li', null, `${s.cas} cas terminés`)),
        r.warnings.length ? h('ul', { class: 'ca-small ca-warnlist' }, r.warnings.map(w => h('li', null, w))) : null,
        A.P('**Fusionner** garde tes données et ajoute celles du fichier (le plus récent l’emporte). **Remplacer** efface tes données actuelles au profit du fichier. Dans les deux cas, une sauvegarde automatique est faite avant.'),
        h('div', { class: 'ca-row' }, merge, replace, cancel)));
      const done = mode => {
        const out = A.store.applyImport(r.data, mode);
        A.applySettings();
        A.notify(`Import terminé (${mode === 'replace' ? 'remplacement' : 'fusion'})${out.backup ? ' — sauvegarde automatique faite avant' : ''}.`, 'ok');
        A.router.render();
      };
      merge.addEventListener('click', () => done('merge'));
      replace.addEventListener('click', async () => { if (await A.confirm({ title: 'Remplacer toutes tes données ?', text: 'Tes données actuelles seront remplacées par celles du fichier. Une sauvegarde automatique est faite avant.', ok: 'Remplacer', danger: true })) done('replace'); });
      cancel.addEventListener('click', () => { A.clear(box); file.value = ''; });
    };
    reader.readAsText(f);
  }

  // ---------- Plus ----------
  A.screens.plus = () => {
    const links = [
      ['#/glossaire', 'book', 'Glossaire', 'Tous les termes français / anglais, avec recherche.'],
      ['#/mediatheque', 'image', 'Médiathèque', 'Tous les schémas, avec leur légende.'],
      ['#/cas', 'briefcase', 'Cas pratiques', 'Des interventions fictives en plusieurs décisions.'],
      ['#/certification', 'award', 'Certification', 'La matrice des compétences du CQP et où tu en es.'],
      ['#/sources', 'link', 'Sources', 'Les références publiques utilisées.'],
      ['#/reglages', 'settings', 'Réglages', 'Affichage, sauvegarde, mise à jour.'],
      ['#/guide', 'help', 'Guide', 'Comment utiliser l’application.'],
    ];
    return { title: 'Plus', node: h('div', { class: 'ca-page' }, A.ui.head('Plus'),
      h('ul', { class: 'ca-menu' }, links.map(([href, ic, t, d]) => h('li', null, h('a', { href, class: 'ca-menu-a' }, A.icon(ic), h('span', null, h('strong', null, t), h('span', { class: 'ca-small ca-muted' }, d)), A.icon('right'))))),
      h('p', { class: 'ca-small ca-muted ca-center' }, `Version ${A.VERSION}`)) };
  };

  // ---------- Guide ----------
  A.screens.guide = () => ({
    title: 'Guide',
    node: h('div', { class: 'ca-page ca-prose' },
      A.ui.head('Guide d’utilisation', { crumbs: [['Plus', '#/plus'], ['Guide', null]], lead: 'Comment tirer le meilleur de l’application en 10 à 20 minutes par jour.' }),
      A.ui.card(null, h('h2', null, 'Le parcours'),
        A.P('Le parcours suit l’ordre du métier : le **métier** (M), l’**avion** (A), la **cabine** (B), l’**environnement industriel** (C), les **outils** (D), les **gestes** (E), les **systèmes** (F), puis **FOD, qualité et sécurité** (G). Les chapitres « à venir » sont en cours de rédaction.'),
        A.P('Chaque chapitre a **13 rubriques** courtes : objectifs, pourquoi, découverte visuelle, explication, vocabulaire, exemple, démonstration, activités, erreurs fréquentes, situation professionnelle, mini-évaluation, à retenir, puis oral blanc et suite. En haut de chaque rubrique, « À faire » et « Pour vérifier » te disent quoi faire.')),
      A.ui.card(null, h('h2', null, 'Ta progression'),
        A.P('La progression compte les **exercices réalisés**, jamais les pages lues. Un chapitre passe par : *Non commencé* → *En cours* → *Quiz à passer* → *Solide* (ou *À revoir*).'),
        A.P('Pour chaque exercice, l’application garde le nombre de tentatives, si tu as réussi **du premier coup** ou **après erreur**, et la date. Tu peux toujours retenter : les options sont alors mélangées.')),
      A.ui.card(null, h('h2', null, 'Réviser'),
        A.P('Chaque exercice fait, chaque terme ou phrase que tu ajoutes devient une **carte de révision**. Une carte réussie revient de plus en plus tard (1, 3, 7, 14, 30 puis 60 jours) ; une carte ratée revient dès le lendemain et dans la session en cours.')),
      A.ui.card(null, h('h2', null, 'Figures'),
        A.P('Touche « Agrandir » sous une figure pour l’ouvrir en plein écran : pince pour zoomer, glisse pour te déplacer, double-touche pour zoomer d’un coup. Les numéros renvoient à la légende sous la figure.')),
      A.ui.card(null, h('h2', null, 'Carnet de bord'),
        A.P('Le carnet sert à noter ce que tu observes et fais **vraiment** en atelier, avec ton niveau : observé, réalisé avec aide, réalisé sous contrôle, autonomie constatée (validée par ton tuteur). Les exercices de l’application ne sont pas des expériences réalisées.')),
      A.ui.card(null, h('h2', null, 'Tes données'),
        A.P('Tout reste sur ton téléphone, dans le navigateur. Rien n’est envoyé sur Internet. Pense à **exporter tes données** de temps en temps (Réglages) : c’est ta sauvegarde.'),
        A.P('L’application fonctionne **hors ligne** après la première visite. Quand une nouvelle version est publiée, un bandeau « Nouvelle version » te propose de mettre à jour : tes données sont conservées.')),
      A.ui.card(null, h('h2', null, 'Ce que l’application n’est pas'),
        A.P('Une auto-évaluation n’est pas une certification, et un score n’est pas une preuve de maîtrise professionnelle. Les documents et références `EX-…` sont **fictifs** et pédagogiques. Les valeurs réelles (couples, jeux, références) se lisent toujours dans le dossier de travail applicable.'))),
  });
})();

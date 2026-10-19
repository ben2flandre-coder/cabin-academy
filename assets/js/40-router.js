/* Routeur par fragment (#/…) : ne construit que l'écran courant ; gère titre, onglet actif, focus et défilement.
   Une erreur dans un écran n'efface jamais l'application : un message utile s'affiche à la place. */
(function () {
  'use strict';
  const A = window.CAApp;
  const { h } = A;
  A.screens = {};
  const TAB_OF = { accueil: 'accueil', parcours: 'parcours', chapitre: 'parcours', reviser: 'reviser', carnet: 'carnet' };
  let leave = [];
  let current = null;

  function parse() {
    const raw = (location.hash || '').replace(/^#\/?/, '');
    const segs = raw.split('/').filter(Boolean).map(s => { try { return decodeURIComponent(s); } catch (e) { return s; } });
    return { name: segs[0] || 'accueil', args: segs.slice(1), raw };
  }

  function render() {
    const r = parse();
    const main = A.qs('#ca-main');
    if (!main) return;
    savers.forEach(fn => { try { fn(); } catch (e) { /* rien */ } });
    savers = [];
    leave.forEach(fn => { try { fn(); } catch (e) { /* rien */ } });
    leave = [];
    A.store.flush();
    if (A.ui.modalOpen()) A.ui.closeAllModals();
    const screen = A.screens[r.name] || A.screens.introuvable;
    const sameScreen = current && current.name === r.name && current.args[0] === r.args[0];
    let out;
    try {
      out = screen(r.args, r) || {};
    } catch (e) {
      console.error(e);
      out = { title: 'Erreur d’affichage', node: errorPanel(e) };
    }
    A.replace(main, out.node || null);
    document.title = (out.title ? out.title + ' · ' : '') + 'RMBD Cabin Academy';
    A.ui.setTab(TAB_OF[r.name] || 'plus');
    main.classList.toggle('is-wide', !!out.wide);
    current = r;
    if (!out.keepScroll || !sameScreen) window.scrollTo(0, 0);
    const target = out.focus || A.qs('h1', main);
    if (target && A.router.focusOnRender) {
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      try { target.focus({ preventScroll: true }); } catch (e) { target.focus(); }
    }
    A.router.focusOnRender = true;
    A.ui.updateDueBadge();
    A.events.emit('route', r);
  }
  function errorPanel(e) {
    return h('div', { class: 'ca-page' },
      A.ui.head('Cet écran n’a pas pu s’afficher', { lead: 'Tes données ne sont pas touchées.' }),
      A.ui.card('is-warn', A.P("Une erreur inattendue a empêché l'affichage de cet écran. Tu peux revenir à l'accueil ou au parcours ; si le problème revient, utilise « Réparer l'appli » dans les réglages."),
        h('div', { class: 'ca-row' }, A.ui.btn("Retour à l'accueil", { href: '#/', class: 'is-primary' }, 'home'), A.ui.btn('Parcours', { href: '#/parcours' }, 'route')),
        h('details', null, h('summary', null, 'Détail technique'), h('pre', { class: 'ca-pre' }, String(e && e.stack ? e.stack : e)))));
  }

  /** Les écrans enregistrent ici leurs sauvegardes de saisie (notes, brouillons) : appelées en quittant l'écran,
      quand la page passe en arrière-plan et avant un rechargement de mise à jour. */
  let savers = [];
  const saveNow = () => { savers.forEach(fn => { try { fn(); } catch (e) { /* rien */ } }); A.store.flush(); };
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') saveNow(); });
  window.addEventListener('pagehide', saveNow);
  A.router = {
    parse, render, focusOnRender: false, saveNow,
    onSave(fn) { savers.push(fn); },
    go(hash) { if (location.hash === hash) render(); else location.hash = hash; },
    onLeave(fn) { leave.push(fn); },
    current: () => current,
  };
  window.addEventListener('hashchange', () => render());

  A.screens.introuvable = (args, r) => ({
    title: 'Page introuvable',
    node: h('div', { class: 'ca-page' }, A.ui.head('Page introuvable', { lead: `L'adresse « #/${r.raw} » ne correspond à aucun écran de l'application.` }),
      A.ui.card(null, A.P('Le lien est peut-être ancien ou incomplet. Choisis où aller :'),
        h('div', { class: 'ca-row' }, A.ui.btn("Accueil", { href: '#/', class: 'is-primary' }, 'home'), A.ui.btn('Parcours', { href: '#/parcours' }, 'route'), A.ui.btn('Toutes les rubriques', { href: '#/plus' }, 'more')))),
  });
})();

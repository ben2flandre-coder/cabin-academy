/* Interface commune : coquille (en-tête, zone principale, barre d'onglets), bandeaux, annonces, fenêtres modales
   (élément <dialog> natif : focus piégé, Échap, bouton « retour » du téléphone), composants réutilisables. */
(function () {
  'use strict';
  const A = window.CAApp;
  const { h, arr } = A;

  const TABS = [
    { id: 'accueil', href: '#/', label: 'Accueil', icon: 'home' },
    { id: 'parcours', href: '#/parcours', label: 'Parcours', icon: 'route' },
    { id: 'reviser', href: '#/reviser', label: 'Réviser', icon: 'cards' },
    { id: 'carnet', href: '#/carnet', label: 'Carnet', icon: 'notebook' },
    { id: 'plus', href: '#/plus', label: 'Plus', icon: 'more' },
  ];

  A.ui = {};
  /** Construit la coquille une seule fois. */
  A.ui.shell = root => {
    const badge = h('span', { class: 'ca-tab-badge', id: 'ca-due-badge', hidden: true });
    const tabs = h('nav', { class: 'ca-tabs', 'aria-label': 'Navigation principale' },
      h('ul', null, TABS.map(t => h('li', null,
        h('a', { href: t.href, class: 'ca-tab', dataset: { tab: t.id } }, A.icon(t.icon), h('span', { class: 'ca-tab-l' }, t.label), t.id === 'reviser' ? badge : null)))));
    A.replace(root,
      h('a', { class: 'ca-skip', href: '#ca-main', dataset: { act: 'skip' } }, 'Aller au contenu'),
      h('header', { class: 'ca-top' },
        h('div', { class: 'ca-top-in' },
          h('a', { class: 'ca-brand', href: '#/', 'aria-label': 'RMBD Cabin Integration Academy — accueil' },
            h('img', { src: 'assets/icons/icon.svg', alt: '', width: 32, height: 32, class: 'ca-brand-ico' }),
            h('span', { class: 'ca-brand-t' }, h('span', { class: 'ca-brand-a' }, 'RMBD'), ' Cabin Academy')),
          h('span', { class: 'ca-chip ca-chip-off', id: 'ca-offline', hidden: true }, A.icon('offline', { size: 18 }), 'Hors ligne'),
          h('a', { class: 'ca-iconbtn', href: '#/reglages', 'aria-label': 'Réglages', title: 'Réglages' }, A.icon('settings')))),
      h('div', { class: 'ca-banners', id: 'ca-banners' }),
      h('main', { class: 'ca-main', id: 'ca-main', tabindex: '-1' }),
      tabs,
      h('div', { class: 'ca-sr', id: 'ca-live', 'aria-live': 'polite', 'aria-atomic': 'true' }),
      h('div', { class: 'ca-toast', id: 'ca-toast', role: 'status', 'aria-live': 'polite', hidden: true }));
    A.ui.updateDueBadge();
  };
  A.ui.setTab = id => {
    for (const a of A.qsa('.ca-tab')) {
      if (a.dataset.tab === id) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    }
  };
  A.ui.updateDueBadge = () => {
    const b = A.qs('#ca-due-badge');
    if (!b) return;
    let n = 0;
    try { n = A.srs.dueCards().length; } catch (e) { n = 0; }
    b.hidden = n === 0;
    b.textContent = n > 99 ? '99+' : String(n);
    b.setAttribute('aria-label', `${n} à réviser`);
  };

  // ---------- annonces ----------
  /** Annonce pour lecteur d'écran + message visible bref (non bloquant, au-dessus de la barre d'onglets). */
  let toastT = 0;
  A.notify = (msg, kind) => {
    const live = A.qs('#ca-live');
    if (live) { live.textContent = ''; setTimeout(() => { live.textContent = msg; }, 30); }
    const t = A.qs('#ca-toast');
    if (!t) return;
    t.className = 'ca-toast' + (kind ? ' is-' + kind : '');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastT);
    toastT = setTimeout(() => { t.hidden = true; }, 3800);
  };

  // ---------- bandeaux persistants (mise à jour, stockage) — dans le flux, jamais par-dessus le contenu ----------
  A.ui.banner = (id, opts) => {
    const box = A.qs('#ca-banners');
    if (!box) return null;
    let b = A.qs(`[data-banner="${id}"]`, box);
    if (!opts) { if (b) b.remove(); return null; }
    const el = h('div', { class: 'ca-banner is-' + (opts.kind || 'info'), dataset: { banner: id }, role: opts.kind === 'warn' ? 'alert' : 'status' },
      A.icon(opts.icon || (opts.kind === 'warn' ? 'alert' : 'info')),
      h('div', { class: 'ca-banner-t' }, h('strong', null, opts.title), opts.text ? h('span', null, ' ' + opts.text) : null),
      opts.actions ? h('div', { class: 'ca-banner-a' }, opts.actions) : null);
    if (b) b.replaceWith(el); else box.appendChild(el);
    return el;
  };

  // ---------- fenêtres modales ----------
  const stack = [];
  /** A.modal({title, body, actions, cls, onClose, label}) → {el, close}. Le bouton « retour » du téléphone ferme la fenêtre. */
  A.modal = opts => {
    const o = opts || {};
    const tid = 'ca-dlg-' + A.uid();
    const opener = document.activeElement;
    const closeBtn = h('button', { type: 'button', class: 'ca-iconbtn ca-dlg-x', dataset: { close: '1' }, 'aria-label': 'Fermer' }, A.icon('x'));
    const dlg = h('dialog', { class: 'ca-dlg' + (o.cls ? ' ' + o.cls : ''), 'aria-labelledby': tid },
      h('div', { class: 'ca-dlg-head' }, h('h2', { id: tid, class: 'ca-dlg-t' }, o.title || ''), closeBtn),
      h('div', { class: 'ca-dlg-body' }, o.body || null),
      o.actions ? h('div', { class: 'ca-dlg-actions' }, o.actions) : null);
    document.body.appendChild(dlg);
    let closed = false;
    let pushed = false;
    const entry = { dlg, close };
    function close(fromPop, thenHash) {
      if (closed) return;
      closed = true;
      const i = stack.indexOf(entry); if (i >= 0) stack.splice(i, 1);
      try { dlg.close(); } catch (e) { /* déjà fermée */ }
      dlg.remove();
      if (pushed && !fromPop && history.state && history.state.caModal) {
        // on retire l'entrée d'historique ajoutée à l'ouverture ; une navigation demandée attend ce retour
        ignorePop++; pendingHash = thenHash || null; history.back();
      } else if (thenHash) location.hash = thenHash;
      if (o.onClose) try { o.onClose(); } catch (e) { console.warn(e); }
      if (!thenHash && opener && opener.isConnected && typeof opener.focus === 'function') A.focus(opener);
    }
    dlg.addEventListener('cancel', ev => { ev.preventDefault(); close(); });
    dlg.addEventListener('click', ev => {
      if (ev.target === dlg) { close(); return; }                        // clic sur le fond
      const b = ev.target instanceof Element ? ev.target.closest('[data-close]') : null;
      if (!b || !dlg.contains(b)) return;
      const href = b.tagName === 'A' ? b.getAttribute('href') : null;
      if (href && href.startsWith('#')) { ev.preventDefault(); close(false, href); } else close();
    });
    try { dlg.showModal(); } catch (e) { dlg.setAttribute('open', ''); }
    if (!o.noHistory) { try { history.pushState(Object.assign({}, history.state, { caModal: Date.now() }), '', location.href); pushed = true; } catch (e) { pushed = false; } }
    stack.push(entry);
    const first = A.qs(o.focus || '[autofocus], .ca-dlg-body input, .ca-dlg-body button, .ca-dlg-body a, .ca-dlg-x', dlg);
    A.focus(first || closeBtn);
    return { el: dlg, close: () => close(false) };
  };
  let ignorePop = 0;
  let pendingHash = null;
  window.addEventListener('popstate', () => {
    if (ignorePop > 0) {
      ignorePop--;
      if (pendingHash) { const hsh = pendingHash; pendingHash = null; location.hash = hsh; }
      return;
    }
    const top = stack[stack.length - 1];
    if (top) top.close(true);
  });
  A.ui.closeAllModals = () => { while (stack.length) stack[stack.length - 1].close(true); };
  A.ui.modalOpen = () => stack.length > 0;

  /** Confirmation : Promise<boolean>. */
  A.confirm = opts => new Promise(resolve => {
    let answered = false;
    const yes = h('button', { type: 'button', class: 'ca-btn ' + (opts.danger ? 'is-danger' : 'is-primary'), dataset: { yes: '1' } }, opts.ok || 'Confirmer');
    const no = h('button', { type: 'button', class: 'ca-btn', dataset: { close: '1' } }, opts.cancel || 'Annuler');
    const m = A.modal({
      title: opts.title, cls: 'ca-dlg-confirm',
      body: [].concat(opts.text ? arr([].concat(opts.text)).map(t => (t instanceof Node ? t : A.P(t))) : []),
      actions: [no, yes], focus: '[data-close].ca-btn',
      onClose: () => { if (!answered) resolve(false); },
    });
    yes.addEventListener('click', () => { answered = true; resolve(true); m.close(); });
  });

  // ---------- fiche de glossaire ----------
  A.ui.termCard = e => h('div', { class: 'ca-termcard' },
    h('p', { class: 'ca-term-en', lang: 'en' }, A.icon('link', { size: 18 }), ' ', e.en || '—', e.abbr ? h('span', { class: 'ca-abbr' }, ' · ', e.abbr) : null),
    A.P(e.def || 'Définition à venir.'),
    e.tip ? h('p', { class: 'ca-tip' }, A.icon('bulb', { size: 18 }), ' ', A.rich(e.tip)) : null,
    e.cat ? h('p', { class: 'ca-muted' }, 'Catégorie : ', e.cat) : null,
    e.chapters.length ? h('p', { class: 'ca-muted' }, 'Vu dans : ', e.chapters.map((id, i) => [i ? ', ' : '', h('a', { href: `#/chapitre/${id}/vocabulaire` }, id.toUpperCase() + ' — ' + A.C.title(id))])) : null);
  A.ui.openTerm = label => {
    const e = A.C.findTerm(label);
    if (!e) {
      A.modal({ title: label, body: [A.P("Ce terme n'est pas encore dans le glossaire : il sera défini dans un chapitre à venir."), h('p', null, h('a', { href: '#/glossaire', dataset: { close: '1' } }, 'Ouvrir le glossaire'))] });
      return;
    }
    A.modal({ title: e.fr, body: [A.ui.termCard(e), h('p', null, h('a', { href: '#/glossaire/' + encodeURIComponent(e.slug), dataset: { close: '1' } }, 'Voir dans le glossaire'))] });
  };
  A.actions.term = el => A.ui.openTerm(el.dataset.term || el.textContent);
  A.actions.skip = (el, ev) => { ev.preventDefault(); A.focus(A.qs('#ca-main')); };

  // ---------- composants ----------
  /** En-tête d'écran : fil d'Ariane (où je suis), titre, phrase d'orientation (quoi faire). */
  A.ui.head = (title, opts) => {
    const o = opts || {};
    return h('div', { class: 'ca-head' },
      o.crumbs ? h('nav', { class: 'ca-crumbs', 'aria-label': "Fil d'Ariane" }, h('ol', null, o.crumbs.map((c, i) => h('li', null, c[1] ? h('a', { href: c[1] }, c[0]) : h('span', { 'aria-current': 'page' }, c[0]))))) : null,
      o.kicker ? h('p', { class: 'ca-kicker' }, o.kicker) : null,
      h('h1', { class: 'ca-h1', tabindex: '-1' }, title),
      o.lead ? h('p', { class: 'ca-lead' }, o.lead) : null);
  };
  A.ui.card = (cls, ...children) => h('section', { class: 'ca-card' + (cls ? ' ' + cls : '') }, children);
  A.ui.progress = (value, max, label) => {
    const pct = max ? Math.round((value / max) * 100) : 0;
    return h('div', { class: 'ca-prog', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': max || 0, 'aria-valuenow': value, 'aria-label': label || 'Progression', 'aria-valuetext': `${value} sur ${max}` },
      h('span', { class: 'ca-prog-bar', style: { width: pct + '%' } }));
  };
  A.ui.status = st => { const s = A.progress.STATUS[st] || A.progress.STATUS.new; return h('span', { class: 'ca-status is-' + s.cls }, s.label); };
  A.ui.empty = (title, text, action) => h('div', { class: 'ca-empty' }, A.icon('info'), h('p', { class: 'ca-empty-t' }, title), text ? h('p', null, text) : null, action || null);
  A.ui.btn = (label, attrs, icon) => h(attrs && attrs.href ? 'a' : 'button', Object.assign(attrs && attrs.href ? {} : { type: 'button' }, attrs || {}, { class: 'ca-btn' + (attrs && attrs.class ? ' ' + attrs.class : '') }), icon ? A.icon(icon) : null, h('span', null, label));
  /** Document fictif (fiche, étiquette) : toujours marqué « document fictif — pédagogique ». */
  A.ui.doc = d => {
    if (!A.isObj(d)) return null;
    const lines = arr(d.lines).filter(Array.isArray);
    return h('figure', { class: 'ca-doc' },
      h('p', { class: 'ca-doc-flag' }, A.icon('doc', { size: 18 }), 'Document fictif — pédagogique'),
      d.title ? h('figcaption', { class: 'ca-doc-t' }, A.rich(d.title)) : null,
      lines.length ? h('dl', { class: 'ca-doc-l' }, lines.map(l => h('div', null, h('dt', null, A.rich(A.str(l[0]))), h('dd', null, A.rich(A.str(l[1])))))) : null,
      d.table ? A.ui.table(d.table) : null,
      d.note ? h('p', { class: 'ca-doc-n' }, A.rich(d.note)) : null);
  };
  /** Tableau : défile horizontalement dans son conteneur, en-têtes avec scope. */
  A.ui.table = t => {
    if (!A.isObj(t)) return null;
    return h('div', { class: 'ca-tablewrap', tabindex: '0', role: 'region', 'aria-label': 'Tableau (défile horizontalement si besoin)' },
      h('table', { class: 'ca-table' },
        arr(t.head).length ? h('thead', null, h('tr', null, arr(t.head).map(c => h('th', { scope: 'col' }, A.rich(A.str(c)))))) : null,
        h('tbody', null, arr(t.rows).map(r => h('tr', null, arr(r).map((c, i) => (i === 0 && arr(t.head).length ? h('th', { scope: 'row' }, A.rich(A.str(c))) : h('td', null, A.rich(A.str(c))))))))));
  };
  A.ui.callout = c => {
    if (!A.isObj(c)) return null;
    const kinds = { tip: ['bulb', 'Astuce'], warn: ['alert', 'Attention'], info: ['info', 'À savoir'], doc: ['doc', 'Dans le dossier'] };
    const k = kinds[c.kind] || kinds.info;
    return h('aside', { class: 'ca-callout is-' + (kinds[c.kind] ? c.kind : 'info') }, h('p', { class: 'ca-callout-k' }, A.icon(k[0], { size: 20 }), k[1]), A.P(c.text));
  };
  /** Rappel d'orientation : quoi faire / comment je vérifie. */
  A.ui.guide = (todo, check) => h('div', { class: 'ca-guide' },
    todo ? h('p', null, h('strong', null, 'À faire : '), todo) : null,
    check ? h('p', null, h('strong', null, 'Pour vérifier : '), check) : null);
  A.ui.field = (label, input, hint, id) => {
    const fid = id || input.id || 'f-' + A.uid();
    input.id = fid;
    const hid = hint ? fid + '-hint' : null;
    if (hid) input.setAttribute('aria-describedby', hid);
    return h('div', { class: 'ca-field' }, h('label', { for: fid }, label), hint ? h('p', { class: 'ca-hint', id: hid }, hint) : null, input);
  };
  A.ui.select = (options, value, attrs) => {
    const s = h('select', Object.assign({ class: 'ca-input' }, attrs || {}), options.map(o => h('option', { value: o[0] }, o[1])));
    s.value = value === undefined || value === null ? '' : String(value);
    return s;
  };
})();

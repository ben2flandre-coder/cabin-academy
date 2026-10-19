/* Glossaire (vocabulaire des chapitres + entrées complémentaires) et Médiathèque (toutes les figures). */
(function () {
  'use strict';
  const A = window.CAApp;
  const { h, arr } = A;

  // ---------- Glossaire ----------
  A.screens.glossaire = args => {
    const G = A.C.glossary();
    const slug = args[0];
    const q = h('input', { type: 'search', class: 'ca-input', id: 'gl-q', placeholder: 'Ex. : rail, seat track, FOD…', autocomplete: 'off', enterkeyhint: 'search' });
    const cats = Array.from(new Set(G.entries.map(e => e.cat).filter(Boolean))).sort();
    const chs = A.C.chapters().filter(c => arr(c.vocab).length);
    const filter = A.ui.select([['', 'Tous les termes'], ...chs.map(c => ['ch:' + c.id, `Chapitre ${c.id.toUpperCase()} — ${c.title}`]), ...cats.map(c => ['cat:' + c, `Catégorie : ${c}`])], '', { id: 'gl-f' });
    const count = h('p', { class: 'ca-hint', 'aria-live': 'polite' });
    const list = h('ul', { class: 'ca-gloss' });
    const draw = () => {
      const n = A.norm(q.value);
      const f = filter.value;
      const hits = G.entries.filter(e => {
        if (f.startsWith('ch:') && !e.chapters.includes(f.slice(3))) return false;
        if (f.startsWith('cat:') && e.cat !== f.slice(4)) return false;
        if (!n) return true;
        return [e.fr, e.en, e.abbr, A.plain(e.def)].some(x => A.norm(x).includes(n));
      });
      count.textContent = `${A.count(hits.length, 'terme', 'termes')}${n || f ? ' correspondant à ta recherche' : ''}.`;
      A.replace(list, hits.slice(0, 400).map(e => h('li', null,
        h('a', { href: '#/glossaire/' + encodeURIComponent(e.slug), class: 'ca-gloss-a' },
          h('span', { class: 'ca-gloss-fr' }, e.fr, e.abbr ? h('span', { class: 'ca-abbr' }, ' · ' + e.abbr) : null),
          h('span', { class: 'ca-gloss-en', lang: 'en' }, e.en)))));
      if (!hits.length) list.appendChild(h('li', { class: 'ca-empty-li' }, n ? `Aucun terme ne correspond à « ${q.value} ». Essaie le mot anglais, ou un mot plus court.` : 'Aucun terme dans cette sélection.'));
    };
    q.addEventListener('input', A.debounce(draw, 120));
    filter.addEventListener('change', draw);
    draw();
    const node = h('div', { class: 'ca-page' },
      A.ui.head('Glossaire', { crumbs: [['Plus', '#/plus'], ['Glossaire', null]], lead: `${G.entries.length} termes français / anglais, issus des chapitres publiés. La recherche ignore les accents et les majuscules.` }),
      h('div', { class: 'ca-filters' }, A.ui.field('Rechercher un terme', q), A.ui.field('Filtrer', filter)),
      count, list);
    if (slug) setTimeout(() => {
      const e = G.bySlug.get(slug) || A.C.findTerm(slug);
      if (e) A.modal({ title: e.fr, body: [A.ui.termCard(e)], noHistory: true, onClose: () => { if (location.hash.startsWith('#/glossaire/')) history.replaceState(null, '', '#/glossaire'); } });
      else A.modal({ title: 'Terme introuvable', body: [A.P(`Le terme « ${slug} » n'est pas (encore) dans le glossaire.`)] });
    }, 0);
    return { title: slug ? 'Glossaire · ' + slug : 'Glossaire', node };
  };

  // ---------- Médiathèque ----------
  A.screens.mediatheque = args => {
    if (args[0]) return viewer(args[0]);
    const figs = A.C.figures();
    const q = h('input', { type: 'search', class: 'ca-input', id: 'md-q', placeholder: 'Ex. : galley, tournevis, rail…', autocomplete: 'off', enterkeyhint: 'search' });
    const chIds = Array.from(new Set(figs.flatMap(f => arr(f.chapters)))).sort((a, b) => ((A.C.planEntry(a) || {}).order || 0) - ((A.C.planEntry(b) || {}).order || 0));
    const filter = A.ui.select([['', 'Tous les chapitres'], ...chIds.map(id => [id, `${id.toUpperCase()} — ${A.C.title(id)}${A.C.chapter(id) ? '' : ' (à venir)'}`])], '', { id: 'md-f' });
    const count = h('p', { class: 'ca-hint', 'aria-live': 'polite' });
    const grid = h('ul', { class: 'ca-grid' });
    let io = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(entries => {
        for (const en of entries) {
          if (!en.isIntersecting) continue;
          io.unobserve(en.target);
          const f = A.C.figure(en.target.dataset.thumb);
          if (!f) continue;
          A.figLoad(f).then(doc => { const svg = A.figInstance(doc); svg.setAttribute('aria-hidden', 'true'); A.replace(en.target, svg); }).catch(() => { A.replace(en.target, A.icon('image')); en.target.classList.add('is-missing'); });
        }
      }, { rootMargin: '200px' });
      A.router.onLeave(() => io.disconnect());
    }
    const draw = () => {
      const n = A.norm(q.value);
      const ch = filter.value;
      const hits = figs.filter(f => (!ch || arr(f.chapters).includes(ch)) && (!n || [f.title, f.caption, f.id, ...arr(f.parts).flatMap(p => [p.fr, p.en])].some(x => A.norm(A.plain(x)).includes(n))));
      count.textContent = `${A.count(hits.length, 'figure', 'figures')}.`;
      A.replace(grid, hits.map(f => {
        const th = h('span', { class: 'ca-thumb', dataset: { thumb: f.id } });
        if (io) io.observe(th);
        return h('li', null, h('a', { href: '#/mediatheque/' + encodeURIComponent(f.id), class: 'ca-grid-a' }, th,
          h('span', { class: 'ca-grid-t' }, f.title || f.id), h('span', { class: 'ca-small ca-muted' }, arr(f.chapters).map(x => x.toUpperCase()).join(' · '))));
      }));
      if (!hits.length) grid.appendChild(h('li', { class: 'ca-empty-li' }, 'Aucune figure ne correspond.'));
    };
    q.addEventListener('input', A.debounce(draw, 150));
    filter.addEventListener('change', draw);
    draw();
    return { title: 'Médiathèque', node: h('div', { class: 'ca-page' },
      A.ui.head('Médiathèque', { crumbs: [['Plus', '#/plus'], ['Médiathèque', null]], lead: `${figs.length} schémas originaux RMBD. Touche une figure pour l’ouvrir avec sa légende.` }),
      h('div', { class: 'ca-filters' }, A.ui.field('Rechercher', q), A.ui.field('Chapitre', filter)), count, grid) };
  };

  function viewer(id) {
    const f = A.C.figure(id);
    if (!f) {
      return { title: 'Figure introuvable', node: h('div', { class: 'ca-page' }, A.ui.head('Figure introuvable', { crumbs: [['Médiathèque', '#/mediatheque'], ['?', null]] }),
        A.ui.card(null, A.P(`Aucune figure ne porte l’identifiant « ${id} ».`), A.ui.btn('Retour à la médiathèque', { href: '#/mediatheque', class: 'is-primary' }, 'image'))) };
    }
    return { title: f.title, node: h('div', { class: 'ca-page' },
      A.ui.head(f.title || f.id, { crumbs: [['Médiathèque', '#/mediatheque'], [f.id, null]] }),
      A.figure(f.id, { caption: true }),
      A.ui.card(null,
        h('dl', { class: 'ca-meta' },
          f.purpose ? h('div', null, h('dt', null, 'À quoi sert ce schéma'), h('dd', null, A.rich(f.purpose))) : null,
          h('div', null, h('dt', null, 'Description'), h('dd', null, f.alt || '—')),
          h('div', null, h('dt', null, 'Provenance'), h('dd', null, f.provenance || '—')),
          h('div', null, h('dt', null, 'Droits'), h('dd', null, f.rights || '—')),
          h('div', null, h('dt', null, 'Chapitres'), h('dd', null, arr(f.chapters).map((c, i) => [i ? ', ' : '', A.C.chapter(c) ? h('a', { href: '#/chapitre/' + c }, `${c.toUpperCase()} — ${A.C.title(c)}`) : `${c.toUpperCase()} (à venir)`]))))),
      A.ui.btn('Retour à la médiathèque', { href: '#/mediatheque' }, 'left')) };
  }
})();

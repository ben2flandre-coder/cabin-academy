/* Certification : matrice RNCP40664 agrégée (BC → compétence → chapitre → savoir / savoir-faire → exercices → preuve).
   Auto-évaluation RMBD : jamais une certification officielle. */
(function () {
  'use strict';
  const A = window.CAApp;
  const { h, arr } = A;
  const DISCLAIMER = 'Auto-évaluation RMBD, pas une certification officielle. Un score n’est pas une preuve de maîtrise professionnelle : seule l’évaluation du CQP, en situation réelle, certifie les compétences.';

  function rows() {
    const out = [];
    for (const c of A.C.chapters()) {
      arr(c.matrix).forEach((m, i) => {
        if (!A.isObj(m)) return;
        const comp = A.COMPS.find(x => x.id === m.comp);
        const ex = arr(m.ex).map(id => ({ id, hit: A.C.exercise(id), st: A.progress.exState(id) }));
        const ok = ex.filter(e => ['first', 'after'].includes(e.st)).length;
        const tried = ex.filter(e => e.st !== 'todo').length;
        const state = !ex.length ? 'none' : ok === ex.length ? 'trained' : tried ? 'doing' : 'none';
        out.push({ c, i, m, comp, bc: comp ? comp.bc : '?', ex, ok, tried, state });
      });
    }
    return out;
  }
  const STATE = { none: 'Non commencé', doing: 'En cours', trained: 'Entraîné (exercices réussis)' };
  const EXS = { todo: 'pas fait', first: 'réussi du 1er coup', after: 'réussi après erreur', review: 'à revoir', fail: 'pas encore réussi' };

  A.screens.certification = () => {
    const all = rows();
    const comp = A.ui.select([['', 'Toutes les compétences'], ...A.COMPS.map(c => [c.id, `${c.id} — ${c.name}`])], '', { id: 'cert-c' });
    const st = A.ui.select([['', 'Tous les états'], ...Object.keys(STATE).map(k => [k, STATE[k]])], '', { id: 'cert-s' });
    const box = h('div');
    const count = h('p', { class: 'ca-hint', 'aria-live': 'polite' });
    const draw = () => {
      const list = all.filter(r => (!comp.value || r.m.comp === comp.value) && (!st.value || r.state === st.value));
      count.textContent = `${A.count(list.length, 'ligne', 'lignes')} de matrice affichée${list.length > 1 ? 's' : ''}.`;
      const blocks = A.BLOCKS.map(b => {
        const comps = A.COMPS.filter(c => c.bc === b.id).map(c => {
          const lines = list.filter(r => r.m.comp === c.id);
          if (!lines.length) return null;
          return h('section', { class: 'ca-cert-comp' },
            h('h3', null, h('span', { class: 'ca-comp-id' }, c.id), ' ', c.name),
            h('ul', { class: 'ca-cert-lines' }, lines.map(r => h('li', { class: 'ca-cert-line is-' + r.state },
              h('p', { class: 'ca-small ca-muted' }, h('a', { href: '#/chapitre/' + r.c.id }, `${r.c.id.toUpperCase()} — ${r.c.title}`)),
              h('p', null, h('strong', null, 'Savoir : '), A.rich(r.m.savoir)),
              h('p', null, h('strong', null, 'Savoir-faire : '), A.rich(r.m.savoirFaire)),
              h('p', { class: 'ca-small' }, h('strong', null, 'Exercices : '), r.ex.map((e, i) => [i ? ' · ' : '',
                e.hit ? h('a', { href: `#/chapitre/${e.hit.ch.id}/${e.hit.kind === 'quiz' ? 'evaluation' : 'activites'}` }, e.id) : e.id,
                ' ', h('span', { class: 'ca-exstate is-' + e.st }, EXS[e.st])])),
              h('p', { class: 'ca-small' }, h('strong', null, 'Preuve d’apprentissage : '), A.rich(r.m.proof)),
              h('p', null, h('span', { class: 'ca-status is-cert-' + r.state }, STATE[r.state]), ` ${r.ok}/${r.ex.length} exercice${r.ex.length > 1 ? 's' : ''} réussi${r.ok > 1 ? 's' : ''}`)))));
        }).filter(Boolean);
        if (!comps.length) return null;
        return h('section', { class: 'ca-card ca-cert-bc' }, h('h2', null, b.id), h('p', { class: 'ca-muted' }, b.name), comps);
      }).filter(Boolean);
      A.replace(box, blocks.length ? blocks : A.ui.empty('Aucune ligne de matrice pour ce filtre.', all.length ? 'Change le filtre.' : 'Les lignes apparaissent avec les chapitres publiés.'));
    };
    comp.addEventListener('change', draw);
    st.addEventListener('change', draw);
    draw();
    const summary = h('div', { class: 'ca-tablewrap', tabindex: '0', role: 'region', 'aria-label': 'Synthèse par compétence' },
      h('table', { class: 'ca-table' },
        h('caption', { class: 'ca-sr' }, 'Synthèse par compétence'),
        h('thead', null, h('tr', null, h('th', { scope: 'col' }, 'Compétence'), h('th', { scope: 'col' }, 'Lignes'), h('th', { scope: 'col' }, 'Entraînées'), h('th', { scope: 'col' }, 'Exercices réussis'))),
        h('tbody', null, A.COMPS.map(c => {
          const l = all.filter(r => r.m.comp === c.id);
          const ex = l.reduce((n, r) => n + r.ex.length, 0), ok = l.reduce((n, r) => n + r.ok, 0);
          return h('tr', null, h('th', { scope: 'row' }, `${c.bc} · ${c.id}`), h('td', null, String(l.length)), h('td', null, String(l.filter(r => r.state === 'trained').length)), h('td', null, `${ok}/${ex}`));
        }))));
    return { title: 'Certification', node: h('div', { class: 'ca-page' },
      A.ui.head('Matrice de certification', { crumbs: [['Plus', '#/plus'], ['Certification', null]], lead: 'CQP Intégrateur cabine aéronautique (RNCP40664) : ce que chaque chapitre t’entraîne à savoir et à faire, et où tu en es.' }),
      h('p', { class: 'ca-mention is-warn', role: 'note' }, A.icon('alert', { size: 20 }), h('span', null, DISCLAIMER)),
      summary,
      h('div', { class: 'ca-filters' }, A.ui.field('Compétence', comp), A.ui.field('État', st)),
      count, box,
      h('div', { class: 'ca-row' }, h('button', { type: 'button', class: 'ca-btn', dataset: { act: 'certcsv' } }, A.icon('download'), h('span', null, 'Exporter la matrice (CSV)')))) };
  };
  A.actions.certcsv = () => {
    const out = [['Bloc', 'Compétence', 'Libellé', 'Chapitre', 'Savoir', 'Savoir-faire', 'Exercices (état)', 'Preuve', 'État']];
    for (const r of rows()) out.push([r.bc, r.m.comp, r.comp ? r.comp.name : '', `${r.c.id.toUpperCase()} — ${r.c.title}`, A.plain(r.m.savoir), A.plain(r.m.savoirFaire), r.ex.map(e => `${e.id} (${EXS[e.st]})`).join(', '), A.plain(r.m.proof), STATE[r.state]]);
    out.push([]); out.push([DISCLAIMER]);
    A.download(`matrice-certification-rmbd-${A.today()}.csv`, 'text/csv;charset=utf-8', A.csv(out));
    A.notify('Matrice exportée en CSV.');
  };
})();

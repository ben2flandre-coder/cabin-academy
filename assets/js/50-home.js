/* Écrans Accueil et Parcours. */
(function () {
  'use strict';
  const A = window.CAApp;
  const { h, arr } = A;

  function countdown() {
    const d = A.state.settings.startDate;
    if (!A.isDay(d)) return h('p', { class: 'ca-muted' }, A.icon('calendar', { size: 18 }), ' Date d’entrée en formation non renseignée — ', h('a', { href: '#/reglages' }, 'l’indiquer dans les réglages'), '.');
    const n = A.daysBetween(A.today(), d);
    const when = A.fmtDay(d, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    const txt = n > 1 ? `dans ${n} jours` : n === 1 ? 'demain' : n === 0 ? "aujourd'hui" : `commencée depuis ${-n} jours`;
    return h('p', { class: 'ca-countdown' }, A.icon('calendar', { size: 18 }), ' Entrée en formation : ', h('strong', null, when), ` — ${txt}. `,
      h('span', { class: 'ca-muted' }, '(date communiquée, modifiable dans les ', h('a', { href: '#/reglages' }, 'réglages'), ')'));
  }

  function domainStats() {
    return A.DOMAINS.map(d => {
      const items = A.C.plan().filter(p => p.domain === d.id);
      const pub = items.filter(p => p.published).map(p => A.C.chapter(p.id));
      let done = 0, total = 0, solid = 0;
      for (const c of pub) { const pr = A.progress.chapterProgress(c); done += pr.done; total += pr.total; if (pr.status === 'solid') solid++; }
      return { d, items: items.length, pub: pub.length, done, total, solid };
    });
  }

  A.screens.accueil = () => {
    const s = A.state;
    const firstVisit = !s.welcomed && !Object.keys(s.ex).length && !s.last;
    const due = A.srs.dueCards().length;
    const last = s.last && A.C.chapter(s.last.ch);
    const next = A.progress.nextChapter();
    const nodes = [];
    nodes.push(A.ui.head(firstVisit ? 'Bienvenue' : 'Bonjour', { kicker: 'RMBD Cabin Integration Academy', lead: firstVisit ? 'Ton compagnon de formation pour le CQP Intégrateur cabine aéronautique.' : 'Voici où tu en es et ce que tu peux faire maintenant.' }));
    nodes.push(countdown());

    if (firstVisit) {
      const m1 = A.C.chapter('m1');
      const first = A.C.plan().find(p => p.published);
      nodes.push(A.ui.card('is-hero',
        h('h2', null, 'Comment ça marche'),
        h('ol', { class: 'ca-steps' },
          h('li', null, h('strong', null, 'Un chapitre = 13 rubriques courtes'), ' : on te montre, on nomme, on explique, puis tu t’exerces.'),
          h('li', null, h('strong', null, 'Ta progression compte les exercices réalisés'), ', pas les pages lues.'),
          h('li', null, h('strong', null, '« Réviser »'), ' te repropose au bon moment ce que tu as appris (révision espacée).'),
          h('li', null, h('strong', null, 'Le carnet'), ' garde la trace de ce que tu fais vraiment en atelier.')),
        m1 ? A.ui.btn('Commencer par le chapitre m1', { href: '#/chapitre/m1', class: 'is-primary is-block', dataset: { act: 'welcomed' } }, 'play')
          : h('div', null,
            A.P("Le chapitre **m1 — Le métier d'intégrateur cabine** est le point de départ conseillé ; il n'est pas encore publié dans cette version."),
            first ? A.ui.btn(`Commencer par le chapitre ${first.id} — ${first.title}`, { href: '#/chapitre/' + first.id, class: 'is-primary is-block', dataset: { act: 'welcomed' } }, 'play') : null),
        h('p', null, h('a', { href: '#/guide', dataset: { act: 'welcomed' } }, 'Lire le guide d’utilisation'), ' · ', h('a', { href: '#/reglages' }, 'Indiquer ma date d’entrée'))));
    } else {
      if (last) {
        const rubIdx = A.rubricIndex(s.last.sec);
        const rub = A.RUBRICS[rubIdx >= 0 ? rubIdx : 0];
        nodes.push(A.ui.card('is-resume',
          h('p', { class: 'ca-kicker' }, 'Reprendre où tu t’es arrêtée'),
          h('h2', null, `${last.id.toUpperCase()} — ${last.title}`),
          h('p', { class: 'ca-muted' }, `Rubrique ${rubIdx >= 0 ? rubIdx + 1 : 1}/13 · ${rub.title}`),
          A.ui.btn('Reprendre', { href: `#/chapitre/${last.id}/${rub.key}`, class: 'is-primary' }, 'play')));
      }
      if (next && (!last || next.id !== last.id)) {
        const pr = A.progress.chapterProgress(next);
        nodes.push(A.ui.card(null,
          h('p', { class: 'ca-kicker' }, 'Prochain chapitre conseillé'),
          h('h2', null, `${next.id.toUpperCase()} — ${next.title}`),
          h('p', null, A.ui.status(pr.status), ' ', h('span', { class: 'ca-muted' }, `${next.minutes || '?'} min · ${pr.done}/${pr.total} exercices`)),
          A.ui.btn('Ouvrir le chapitre', { href: '#/chapitre/' + next.id }, 'right')));
      } else if (!next && A.C.chapters().length) {
        nodes.push(A.ui.card('is-ok', h('h2', null, 'Tous les chapitres publiés sont solides'), A.P('Continue à réviser : de nouveaux chapitres arriveront dans les prochaines versions.')));
      }
    }

    nodes.push(A.ui.card(null,
      h('h2', null, A.icon('cards'), ' À réviser aujourd’hui (', String(due), ')'),
      due ? A.P(`${A.count(due, 'carte attend', 'cartes attendent')} une révision. Une session de ${A.state.settings.session} cartes prend quelques minutes.`) : A.P(Object.keys(s.srs).length ? 'Rien à réviser aujourd’hui : reviens demain, ou fais une révision libre.' : 'Pas encore de cartes : elles se créent quand tu fais des exercices ou ajoutes du vocabulaire.'),
      A.ui.btn(due ? 'Réviser maintenant' : 'Ouvrir « Réviser »', { href: '#/reviser', class: due ? 'is-primary' : '' }, 'cards')));

    const stats = domainStats();
    nodes.push(A.ui.card(null,
      h('h2', null, 'Progression par domaine'),
      h('p', { class: 'ca-hint' }, 'Exercices réalisés sur l’ensemble des chapitres publiés du domaine.'),
      h('ul', { class: 'ca-domains' }, stats.map(x => h('li', null,
        h('a', { href: '#/parcours', dataset: { act: 'gotodomain', domain: x.d.id }, class: 'ca-domain-l' },
          h('span', { class: 'ca-domain-id', 'aria-hidden': 'true' }, x.d.id),
          h('span', { class: 'ca-domain-n' }, x.d.name, h('span', { class: 'ca-muted ca-small' }, x.pub ? ` · ${x.done}/${x.total} exercices · ${x.pub}/${x.items} chapitres publiés` : ` · ${x.items} chapitres à venir`))),
        A.ui.progress(x.done, x.total, `Domaine ${x.d.id} — ${x.d.name}`))))));
    return { title: 'Accueil', node: h('div', { class: 'ca-page' }, nodes) };
  };
  A.actions.welcomed = () => { A.state.welcomed = true; A.store.save(); };
  A.actions.gotodomain = (el, ev) => { ev.preventDefault(); A.router.pendingDomain = el.dataset.domain; A.router.go('#/parcours'); };

  // ---------- Parcours ----------
  A.screens.parcours = () => {
    const plan = A.C.plan();
    const pubCount = plan.filter(p => p.published).length;
    const nodes = [A.ui.head('Parcours', { lead: `${pubCount} chapitre${pubCount > 1 ? 's' : ''} publié${pubCount > 1 ? 's' : ''} sur ${plan.length}. Les prérequis sont des conseils : rien n’est bloqué.` })];
    nodes.push(h('nav', { class: 'ca-jump', 'aria-label': 'Aller à un domaine' }, A.DOMAINS.map(d => h('a', { href: '#/parcours', dataset: { act: 'jumpdomain', domain: d.id }, class: 'ca-jump-a' }, d.id))));
    for (const d of A.DOMAINS) {
      const items = plan.filter(p => p.domain === d.id);
      if (!items.length) continue;
      nodes.push(h('section', { class: 'ca-domain', id: 'dom-' + d.id, 'aria-labelledby': 'domh-' + d.id },
        h('h2', { id: 'domh-' + d.id, class: 'ca-domain-h', tabindex: '-1' }, h('span', { class: 'ca-domain-id', 'aria-hidden': 'true' }, d.id), d.name),
        h('ul', { class: 'ca-chapters' }, items.map(chapterCard))));
    }
    const pending = A.router.pendingDomain;
    A.router.pendingDomain = null;
    const out = { title: 'Parcours', node: h('div', { class: 'ca-page' }, nodes) };
    if (pending) setTimeout(() => jump(pending), 30);
    return out;
  };
  function jump(id) { const t = document.getElementById('domh-' + id); if (t) { t.scrollIntoView({ block: 'start' }); A.focus(t); } }
  A.actions.jumpdomain = (el, ev) => { ev.preventDefault(); jump(el.dataset.domain); };

  function chapterCard(p) {
    const pre = arr(p.prereq).map(id => `${id.toUpperCase()} (${A.C.title(id)})`).join(', ');
    if (!p.published) {
      return h('li', { class: 'ca-chcard is-soon' },
        h('div', { class: 'ca-chcard-top' }, h('span', { class: 'ca-chid' }, p.id.toUpperCase()), h('span', { class: 'ca-status is-soon' }, 'À venir')),
        h('p', { class: 'ca-chcard-t' }, p.title),
        h('p', { class: 'ca-small ca-muted' }, 'Ce chapitre est en cours de rédaction.' + (pre ? ` Conseillé avant : ${pre}.` : '')));
    }
    const c = A.C.chapter(p.id);
    const pr = A.progress.chapterProgress(c);
    return h('li', { class: 'ca-chcard' },
      h('a', { href: '#/chapitre/' + c.id, class: 'ca-chcard-a' },
        h('div', { class: 'ca-chcard-top' }, h('span', { class: 'ca-chid' }, c.id.toUpperCase()), A.ui.status(pr.status)),
        h('p', { class: 'ca-chcard-t' }, c.title),
        c.short ? h('p', { class: 'ca-small ca-muted' }, A.plain(c.short)) : null,
        h('p', { class: 'ca-small' }, A.icon('clock', { size: 16 }), ` ${c.minutes || '?'} min · ${pr.done}/${pr.total} exercices réalisés`),
        A.ui.progress(pr.done, pr.total, `Exercices réalisés — ${c.id}`),
        pre ? h('p', { class: 'ca-small ca-muted' }, 'Conseillé avant : ' + pre) : null));
  }
})();

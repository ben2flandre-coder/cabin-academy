/* Écran Réviser : cartes dues (Leitner 1/3/7/14/30/60 j), sessions de 5/10/20, échéances à venir,
   révision libre par chapitre ou domaine (sans effet sur les échéances), cartes de vocabulaire. */
(function () {
  'use strict';
  const A = window.CAApp;
  const { h, arr } = A;
  const KIND_LABEL = { ex: 'Exercices', vo: 'Vocabulaire', re: 'Phrases à retenir', or: 'Questions orales' };

  A.screens.reviser = () => {
    const due = A.srs.dueCards();
    const total = Object.keys(A.state.srs).length;
    const up = A.srs.upcoming(14);
    const size = A.state.settings.session;
    const nodes = [A.ui.head('Réviser', { lead: 'La révision espacée te repropose chaque notion juste avant que tu l’oublies : 1, 3, 7, 14, 30 puis 60 jours. Une erreur renvoie la carte au début.' })];
    const sizes = h('div', { class: 'ca-seg', role: 'radiogroup', 'aria-label': 'Taille de la session' },
      [5, 10, 20].map(n => h('label', { class: 'ca-seg-l' }, h('input', { type: 'radio', name: 'sess', value: String(n), class: 'ca-seg-in', checked: n === size, dataset: { act: 'sesssize' } }), h('span', null, `${n} cartes`))));
    nodes.push(A.ui.card('is-hero',
      h('h2', null, `À réviser aujourd’hui : ${due.length}`),
      due.length ? A.P(`Choisis la taille de ta session, puis commence. Les cartes ratées reviennent dans la même session.`) : A.P(total ? 'Tout est à jour. Reviens demain, ou fais une révision libre ci-dessous.' : 'Tu n’as pas encore de cartes. Elles se créent quand tu fais des exercices, ou quand tu ajoutes du vocabulaire et des phrases à retenir depuis un chapitre.'),
      due.length ? h('div', null, sizes, A.ui.btn(`Commencer (${Math.min(due.length, size)} carte${Math.min(due.length, size) > 1 ? 's' : ''})`, { class: 'is-primary is-block', dataset: { act: 'startreview' } }, 'play')) : null));
    nodes.push(A.ui.card(null, h('h2', null, A.icon('calendar', { size: 20 }), ' Prochaines échéances'),
      up.length ? h('ul', { class: 'ca-upcoming' }, up.map(([d, n]) => h('li', null, h('span', null, A.fmtDay(d, { weekday: 'short', day: 'numeric', month: 'short' }), ' ', h('span', { class: 'ca-muted' }, '(' + A.relDay(d) + ')')), h('strong', null, A.count(n, 'carte', 'cartes')))))
        : A.P('Aucune échéance dans les 14 prochains jours.'),
      h('p', { class: 'ca-hint' }, `${A.count(total, 'carte programmée', 'cartes programmées')} au total.`)));
    nodes.push(freePanel());
    return { title: 'Réviser', node: h('div', { class: 'ca-page' }, nodes) };
  };
  A.actions.sesssize = el => { A.state.settings.session = Number(el.value); A.store.save(); A.router.render(); };
  A.actions.startreview = () => session(A.srs.dueCards().slice(0, A.state.settings.session), { schedule: true, title: 'Session de révision' });

  function freePanel() {
    const chapters = A.C.chapters();
    if (!chapters.length) return null;
    const scope = A.ui.select([['', '— choisir —'], ...A.DOMAINS.filter(d => chapters.some(c => c.domain === d.id)).map(d => ['dom:' + d.id, `Domaine ${d.id} — ${d.name}`]), ...chapters.map(c => ['ch:' + c.id, `${c.id.toUpperCase()} — ${c.title}`])], '', { id: 'free-scope' });
    const kinds = Object.keys(KIND_LABEL).map(k => h('label', { class: 'ca-check' }, h('input', { type: 'checkbox', value: k, checked: true, class: 'ca-free-kind' }), h('span', null, KIND_LABEL[k])));
    const msg = h('p', { class: 'ca-ex-msg', role: 'status', 'aria-live': 'polite' });
    const start = A.ui.btn('Lancer la révision libre', { dataset: { act: 'startfree' } }, 'play');
    const flash = A.ui.btn('Cartes de vocabulaire (recto / verso)', { dataset: { act: 'startflash' } }, 'cards');
    return A.ui.card(null, h('h2', null, A.icon('book', { size: 20 }), ' Révision libre'),
      A.P('Revois un chapitre ou un domaine entier quand tu veux, même si rien n’est dû. **La révision libre ne change pas tes échéances.**'),
      A.ui.field('Que veux-tu revoir ?', scope),
      h('fieldset', { class: 'ca-checks' }, h('legend', null, 'Types de cartes'), kinds),
      msg, h('div', { class: 'ca-row' }, start, flash));
  }
  function freeKeys(kindsOverride) {
    const v = (A.qs('#free-scope') || {}).value || '';
    const kinds = kindsOverride || A.qsa('.ca-free-kind').filter(i => i.checked).map(i => i.value);
    const msg = A.qs('.ca-card .ca-ex-msg');
    const fail = t => { if (msg) { msg.textContent = t; msg.classList.add('is-warn'); } return null; };
    if (!v) return fail('Choisis d’abord un chapitre ou un domaine.');
    if (!kinds.length) return fail('Coche au moins un type de cartes.');
    const chs = v.startsWith('dom:') ? A.C.chapters().filter(c => c.domain === v.slice(4)) : [A.C.chapter(v.slice(3))].filter(Boolean);
    const keys = chs.flatMap(c => A.srs.cardsOfChapter(c, kinds)).filter(k => A.srs.resolveCard(k));
    if (!keys.length) return fail('Aucune carte de ce type pour ce choix.');
    return { keys, label: v.startsWith('dom:') ? `Domaine ${v.slice(4)}` : v.slice(3).toUpperCase() };
  }
  A.actions.startfree = () => { const r = freeKeys(); if (r) session(A.shuffle(r.keys).slice(0, 20), { schedule: false, title: `Révision libre — ${r.label}` }); };
  A.actions.startflash = () => { const r = freeKeys(['vo']); if (r) session(A.shuffle(r.keys.filter(k => k.endsWith(':fe') || k.endsWith(':ef'))).slice(0, 30), { schedule: false, title: `Cartes de vocabulaire — ${r.label}` }); };

  /** Session : rend les cartes une par une dans la zone principale ; une erreur re-présente la carte plus loin. */
  function session(keys, cfg) {
    const main = A.qs('#ca-main');
    if (!keys.length) { A.notify('Aucune carte à réviser.'); return; }
    const queue = keys.slice();
    const lapsed = new Set();
    const stats = { seen: 0, ok: 0, ko: 0, total: keys.length };
    let done = 0;
    const counter = h('p', { class: 'ca-kicker', 'aria-live': 'polite' });
    const stage = h('div', { class: 'ca-session-stage' });
    const quit = A.ui.btn('Arrêter la session', { dataset: { act: 'quitreview' } }, 'x');
    const bar = h('div', { class: 'ca-session-bar' });
    A.replace(main, h('div', { class: 'ca-page ca-session' },
      A.ui.head(cfg.title, { crumbs: [['Réviser', '#/reviser'], ['Session', null]], lead: cfg.schedule ? 'Réponds honnêtement : c’est ce qui règle le retour de chaque carte.' : 'Révision libre : tes échéances ne changent pas.' }),
      counter, bar, stage, h('div', { class: 'ca-row' }, quit)));
    A.focus(A.qs('h1', main));
    const step = () => {
      if (!queue.length) return finish();
      const key = queue.shift();
      const card = A.srs.resolveCard(key);
      if (!card) return step();
      counter.textContent = `Carte ${done + 1} · ${queue.length} ensuite · ${card.label} · ${card.ch.id.toUpperCase()}`;
      A.replace(bar, A.ui.progress(done, done + queue.length + 1, 'Avancement de la session'));
      const onResult = ok => {
        stats.seen++;
        if (ok) stats.ok++; else stats.ko++;
        if (cfg.schedule) {
          if (!ok) { A.srs.review(key, false); lapsed.add(key); }
          else if (!lapsed.has(key)) A.srs.review(key, true);
        }
        if (!ok) queue.splice(Math.min(2, queue.length), 0, key);           // re-présentée dans la session
        else done++;
        const nextBtn = h('button', { type: 'button', class: 'ca-btn is-primary is-block' }, h('span', null, queue.length ? 'Carte suivante' : 'Terminer la session'), A.icon('right'));
        nextBtn.addEventListener('click', () => { step(); });
        stage.appendChild(h('div', { class: 'ca-session-next' }, !ok ? h('p', { class: 'ca-hint' }, 'Cette carte reviendra un peu plus loin dans la session.') : null, nextBtn));
        A.ui.updateDueBadge();
      };
      A.replace(stage, renderCard(card, onResult, cfg));
      const f = A.qs('.ca-ex-q, .ca-flash-q, .ca-oral-q', stage);
      if (f) { f.setAttribute('tabindex', '-1'); A.focus(f); }
    };
    const finish = () => {
      A.replace(bar);
      counter.textContent = 'Session terminée';
      const due = A.srs.dueCards().length;
      A.replace(stage, A.ui.card('is-ok', h('h2', { tabindex: '-1' }, 'Session terminée'),
        h('p', null, `${A.count(stats.total, 'carte revue', 'cartes revues')} · ${stats.ok} bonne${stats.ok > 1 ? 's' : ''} réponse${stats.ok > 1 ? 's' : ''} · ${A.count(stats.ko, 'erreur', 'erreurs')}.`),
        cfg.schedule ? A.P(due ? `Il reste ${A.count(due, 'carte due', 'cartes dues')} aujourd’hui.` : 'Plus rien à réviser aujourd’hui.') : A.P('Révision libre : tes échéances n’ont pas changé.'),
        h('div', { class: 'ca-row' }, A.ui.btn('Retour à « Réviser »', { href: '#/reviser', class: 'is-primary' }, 'cards'), A.ui.btn('Accueil', { href: '#/' }, 'home'))));
      quit.hidden = true;
      A.focus(A.qs('h2', stage));
      A.ui.updateDueBadge();
    };
    step();
  }
  A.actions.quitreview = () => { A.router.render(); A.notify('Session arrêtée : tes réponses déjà données sont enregistrées.'); };

  function renderCard(card, onResult, cfg) {
    if (card.kind === 'ex') return A.exercise(card.ex, { mode: cfg.schedule ? 'review' : 'free', noRetry: true, onResult, number: `${card.ch.id.toUpperCase()} · révision` });
    if (card.kind === 'or') return A.oral(card.ch, card.o, card.i, { onResult });
    let q, a, qLang, aLang;
    if (card.kind === 'vo') {
      const v = card.v;
      if (card.dir === 'fe') { q = v.fr; a = v.en; aLang = 'en'; }
      else if (card.dir === 'ef') { q = v.en; a = v.fr; qLang = 'en'; }
      else { q = v.fr + (v.abbr ? ` (${v.abbr})` : ''); a = v.def; }
    } else {
      const cloze = makeCloze(card.text);
      q = cloze.q; a = cloze.a;
    }
    const prompt = { fe: 'Comment dit-on en anglais ?', ef: 'Que veut dire ce terme anglais ?', td: 'Donne la définition de ce terme.' }[card.dir] || 'Complète la phrase (le mot masqué est remplacé par « … »).';
    const back = h('div', { class: 'ca-flash-back', hidden: true },
      h('p', { class: 'ca-kicker' }, 'Réponse'), h('p', { class: 'ca-flash-a', lang: aLang || null }, A.rich(a)),
      card.kind === 're' ? h('p', { class: 'ca-hint' }, 'Phrase complète : ', A.rich(card.text)) : null);
    const show = h('button', { type: 'button', class: 'ca-btn is-primary is-block' }, A.icon('eye'), h('span', null, 'Voir la réponse'));
    const grade = h('div', { class: 'ca-row ca-flash-grade', hidden: true },
      h('button', { type: 'button', class: 'ca-btn is-ko', dataset: { g: 'ko' } }, A.icon('x'), h('span', null, 'Je ne savais pas')),
      h('button', { type: 'button', class: 'ca-btn is-ok', dataset: { g: 'ok' } }, A.icon('check'), h('span', null, 'Je savais')));
    const root = h('article', { class: 'ca-flash' },
      h('p', { class: 'ca-chip' }, card.label),
      h('p', { class: 'ca-hint' }, prompt),
      h('p', { class: 'ca-flash-q', lang: qLang || null }, A.rich(q)),
      show, back, grade);
    show.addEventListener('click', () => { back.hidden = false; grade.hidden = false; show.hidden = true; A.focus(A.qs('[data-g="ok"]', grade)); });
    A.on(grade, 'click', '[data-g]', (ev, b) => {
      A.qsa('button', grade).forEach(x => { x.disabled = true; });
      const ok = b.dataset.g === 'ok';
      b.classList.add('is-chosen');
      onResult(ok);
    });
    return root;
  }
  /** Phrase à trous : masque le premier passage en **gras** ; sinon le dernier mot long. */
  function makeCloze(text) {
    const s = A.str(text);
    const m = s.match(/\*\*([^*]+)\*\*/);
    if (m) return { q: s.replace(m[0], '…'), a: m[1] };
    const words = A.plain(s).split(/\s+/);
    let k = -1;
    for (let i = words.length - 1; i >= 0; i--) if (words[i].replace(/[^\p{L}]/gu, '').length >= 6) { k = i; break; }
    if (k < 0) return { q: 'Redis cette phrase sans la regarder : « ' + A.plain(s).split(/\s+/).slice(0, 4).join(' ') + ' … »', a: A.plain(s) };
    const ans = words[k].replace(/[^\p{L}\p{N}'’-]/gu, '');
    words[k] = words[k].replace(ans, '…');
    return { q: words.join(' '), a: ans };
  }
  A.makeCloze = makeCloze;
})();

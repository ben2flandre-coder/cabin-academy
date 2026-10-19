/* Lecteur de chapitre : 13 rubriques en étapes, notes personnelles, oral blanc. */
(function () {
  'use strict';
  const A = window.CAApp;
  const { h, arr } = A;

  A.screens.chapitre = args => {
    const id = args[0];
    const c = A.C.chapter(id);
    if (!c) return missingChapter(id);
    const rubs = A.RUBRICS;
    let key = args[1];
    let notice = null;
    if (!key) key = A.state.last && A.state.last.ch === c.id && A.rubricIndex(A.state.last.sec) >= 0 ? A.state.last.sec : 'objectifs';
    let idx = A.rubricIndex(key);
    if (idx < 0) { notice = `La rubrique « ${key} » n'existe pas : voici la première rubrique du chapitre.`; idx = 0; key = rubs[0].key; }
    const rub = rubs[idx];
    // mémorise la position (reprise exacte) — la consultation ne compte pas dans la progression
    A.state.last = { ch: c.id, sec: rub.key, at: new Date().toISOString() };
    const seen = A.state.seen[c.id] = A.state.seen[c.id] || {};
    seen[rub.key] = A.today();
    A.store.save();

    const dom = A.domainName(c.domain);
    const pr = A.progress.chapterProgress(c);
    const stepper = h('nav', { class: 'ca-stepper', 'aria-label': 'Rubriques du chapitre' },
      h('p', { class: 'ca-stepper-t' }, h('strong', null, `Rubrique ${idx + 1}/13`), ` · ${rub.short}`),
      h('ol', { class: 'ca-stepper-l' }, rubs.map((r, i) => h('li', null,
        h('a', { href: `#/chapitre/${c.id}/${r.key}`, class: 'ca-step' + (i === idx ? ' is-current' : '') + (seen[r.key] ? ' is-seen' : '') + (r.has(c) ? '' : ' is-empty'), 'aria-current': i === idx ? 'step' : null, 'aria-label': `${i + 1}. ${r.title}${r.has(c) ? '' : ' (pas encore rédigée)'}` }, String(i + 1))))));
    let body;
    try { body = r_render(rub.key, c); }
    catch (e) { console.error(e); body = A.ui.empty('Cette rubrique n’a pas pu s’afficher.', 'Son contenu est peut-être incomplet. Passe à la rubrique suivante ; tes données ne sont pas touchées.'); }
    if (!rub.has(c)) body = A.ui.empty('Cette rubrique n’est pas encore rédigée.', 'Le chapitre est encore en cours d’écriture : passe à la rubrique suivante.');

    const prev = idx > 0 ? rubs[idx - 1] : null;
    const next = idx < rubs.length - 1 ? rubs[idx + 1] : null;
    const nextCh = c.next && c.next.id ? A.C.chapter(c.next.id) : null;
    const nav = h('nav', { class: 'ca-pager', 'aria-label': 'Rubrique précédente ou suivante' },
      prev ? h('a', { class: 'ca-pager-a is-prev', href: `#/chapitre/${c.id}/${prev.key}` }, A.icon('left'), h('span', null, h('small', null, 'Précédent'), prev.short)) : h('a', { class: 'ca-pager-a is-prev', href: '#/parcours' }, A.icon('left'), h('span', null, h('small', null, 'Retour'), 'Parcours')),
      next ? h('a', { class: 'ca-pager-a is-next', href: `#/chapitre/${c.id}/${next.key}` }, h('span', null, h('small', null, `Suivant · ${idx + 2}/13`), next.short), A.icon('right'))
        : nextCh ? h('a', { class: 'ca-pager-a is-next', href: `#/chapitre/${nextCh.id}` }, h('span', null, h('small', null, 'Chapitre suivant'), nextCh.id.toUpperCase()), A.icon('right'))
          : h('a', { class: 'ca-pager-a is-next', href: '#/parcours' }, h('span', null, h('small', null, 'Fin du chapitre'), 'Parcours'), A.icon('right')));

    const h2 = h('h2', { class: 'ca-rub-h', tabindex: '-1' }, h('span', { class: 'ca-rub-n' }, String(idx + 1)), rub.title);
    const node = h('div', { class: 'ca-page ca-chapter' },
      A.ui.head(c.title, {
        crumbs: [['Parcours', '#/parcours'], [`${c.domain} · ${dom}`, '#/parcours'], [c.id.toUpperCase(), null]],
        kicker: `Chapitre ${c.id.toUpperCase()} · ${c.minutes || '?'} min · ${pr.done}/${pr.total} exercices réalisés`,
      }),
      stepper,
      notice ? h('p', { class: 'ca-notice', role: 'status' }, notice) : null,
      h('section', { class: 'ca-rub', 'aria-labelledby': 'rubh' },
        (h2.id = 'rubh', h2),
        A.ui.guide(rub.todo, rub.check),
        body),
      nav,
      notes(c));
    // garde la pastille courante visible dans le stepper
    setTimeout(() => { const cur = A.qs('.ca-step.is-current', node); if (cur && cur.scrollIntoView) { const l = cur.parentNode.parentNode; l.scrollLeft = cur.offsetLeft - l.clientWidth / 2 + cur.clientWidth / 2; } }, 0);
    const fromSame = (A.router.current() || {}).args && A.router.current().name === 'chapitre' && A.router.current().args[0] === c.id;
    return { title: `${c.id.toUpperCase()} · ${rub.short}`, node, focus: fromSame ? h2 : null };
  };

  function missingChapter(id) {
    const p = id && A.C.planEntry(id);
    return {
      title: p ? 'Chapitre à venir' : 'Chapitre introuvable',
      node: h('div', { class: 'ca-page' },
        A.ui.head(p ? `${p.id.toUpperCase()} — ${p.title}` : 'Chapitre introuvable', { crumbs: [['Parcours', '#/parcours'], [p ? p.id.toUpperCase() : '?', null]] }),
        A.ui.card(null, A.P(p ? 'Ce chapitre est **à venir** : il est en cours de rédaction et sera publié dans une prochaine version de l’application.' : `Aucun chapitre ne porte l’identifiant « ${id || ''} ».`),
          A.ui.btn('Voir le parcours', { href: '#/parcours', class: 'is-primary' }, 'route'))),
    };
  }

  function notes(c) {
    const ta = h('textarea', { class: 'ca-input ca-notes-ta', rows: 5, maxlength: A.store.LIMITS.noteLen, id: 'notes-' + c.id }, A.state.notes[c.id] || '');
    const st = h('p', { class: 'ca-hint', 'aria-live': 'polite' }, A.state.notes[c.id] ? 'Tes notes sont enregistrées sur cet appareil.' : 'Écris ici ce que tu veux retenir ou demander à ton formateur.');
    const save = A.debounce(() => {
      const v = ta.value;
      if (v.trim()) A.state.notes[c.id] = v; else delete A.state.notes[c.id];
      A.store.save();
      st.textContent = 'Enregistré.';
    }, 600);
    ta.addEventListener('input', () => { st.textContent = 'Saisie…'; save(); });
    A.router.onLeave(() => { save.cancel(); const v = ta.value; if (v.trim()) A.state.notes[c.id] = v; else delete A.state.notes[c.id]; A.store.save(); });
    return h('details', { class: 'ca-notes', open: !!A.state.notes[c.id] },
      h('summary', null, A.icon('edit', { size: 20 }), ' Mes notes sur ce chapitre'),
      h('label', { for: ta.id, class: 'ca-sr' }, 'Mes notes sur le chapitre ' + c.id),
      ta, st);
  }

  // ---------- rendu des rubriques ----------
  function r_render(key, c) {
    switch (key) {
      case 'objectifs': return objectives(c);
      case 'pourquoi': return h('div', { class: 'ca-prose' }, A.paras(c.why));
      case 'decouverte': return discover(c);
      case 'explication': return explain(c);
      case 'vocabulaire': return vocab(c);
      case 'exemple': return example(c);
      case 'demonstration': return demo(c);
      case 'activites': return exList(c, c.activities, 'Activité');
      case 'erreurs': return mistakes(c);
      case 'situation': return h('div', null, arr(c.situations).map((s, i) => situation(s, i, c)));
      case 'evaluation': return quiz(c);
      case 'retenir': return retain(c);
      case 'suite': return suite(c);
      default: return null;
    }
  }

  function objectives(c) {
    const comps = arr(c.comps).map(id => A.COMPS.find(x => x.id === id)).filter(Boolean);
    return h('div', { class: 'ca-prose' },
      h('p', null, 'À la fin de ce chapitre, tu sauras :'),
      h('ul', { class: 'ca-objectives' }, arr(c.objectives).map(o => h('li', null, A.icon('target', { size: 20 }), h('span', null, A.rich(o))))),
      h('dl', { class: 'ca-meta' },
        h('div', null, h('dt', null, 'Durée'), h('dd', null, `${c.minutes || '?'} minutes de travail`)),
        comps.length ? h('div', null, h('dt', null, 'Compétences du CQP'), h('dd', null, comps.map(x => h('span', { class: 'ca-comp' }, h('strong', null, x.id), ' ', x.name)))) : null,
        arr(c.prereq).length ? h('div', null, h('dt', null, 'Conseillé avant'), h('dd', null, arr(c.prereq).map((p, i) => [i ? ', ' : '', A.C.chapter(p) ? h('a', { href: '#/chapitre/' + p }, `${p.toUpperCase()} — ${A.C.title(p)}`) : `${p.toUpperCase()} — ${A.C.title(p)} (à venir)`]))) : null,
        arr(c.sources).length ? h('div', null, h('dt', null, 'Sources'), h('dd', null, arr(c.sources).map((s, i) => { const src = A.C.source(s); return [i ? ' · ' : '', src ? h('a', { href: src.url, target: '_blank', rel: 'noopener noreferrer' }, src.title, h('span', { class: 'ca-sr' }, ' (s’ouvre dans un nouvel onglet)')) : s]; }), ' — ', h('a', { href: '#/sources' }, 'toutes les sources'))) : null));
  }

  function discover(c) {
    const d = c.discover || {};
    return h('div', { class: 'ca-prose' },
      d.intro ? A.P(d.intro) : null,
      d.fig ? A.figure(d.fig) : null,
      arr(d.look).length ? h('div', { class: 'ca-look' }, h('h3', null, A.icon('eye', { size: 20 }), ' Observe et cherche'), h('ol', null, arr(d.look).map(l => h('li', null, A.rich(l))))) : null);
  }

  function explain(c) {
    const out = [];
    arr(c.explain).forEach((b, i) => {
      if (!A.isObj(b)) return;
      out.push(h('section', { class: 'ca-block' },
        b.h ? h('h3', null, A.rich(b.h)) : null,
        A.paras(b.p),
        arr(b.list).length ? h('ul', { class: 'ca-list' }, arr(b.list).map(x => h('li', null, A.rich(x)))) : null,
        b.fig ? A.figure(b.fig) : null,
        b.table ? A.ui.table(b.table) : null,
        b.callout ? A.ui.callout(b.callout) : null));
    });
    const parts = arr(c.parts).filter(A.isObj);
    if (parts.length) out.push(atlas(parts));
    return h('div', { class: 'ca-prose' }, out);
  }

  /** Fiches d'atlas (parts) regroupées par figure ; chaque fiche peut surligner sa partie sur la figure. */
  function atlas(parts) {
    const groups = new Map();
    for (const p of parts) { const k = p.fig || ''; if (!groups.has(k)) groups.set(k, []); groups.get(k).push(p); }
    const sec = h('section', { class: 'ca-block ca-atlas' }, h('h3', null, A.icon('layers', { size: 20 }), ' Fiches de reconnaissance'),
      h('p', { class: 'ca-hint' }, 'Pour chaque élément : son nom, son nom anglais, sa fonction, où il se trouve, avec quoi il est relié, ses risques et ce qu’il faut surveiller.'));
    for (const [figId, list] of groups) {
      const figEl = figId ? A.figure(figId) : null;
      if (figEl) sec.appendChild(figEl);
      for (const p of list) {
        const fieldRow = (label, v) => (v ? h('div', null, h('dt', null, label), h('dd', null, A.rich(v))) : null);
        const show = figEl && p.part ? h('button', { type: 'button', class: 'ca-btn is-small', dataset: { act: 'showpart', part: p.part } }, A.icon('eye', { size: 18 }), h('span', null, 'Montrer sur la figure')) : null;
        const card = h('article', { class: 'ca-part' },
          h('h4', null, A.rich(p.fr), p.en ? h('span', { class: 'ca-part-en', lang: 'en' }, ' · ', p.en) : null),
          h('dl', { class: 'ca-part-dl' },
            fieldRow('Fonction', p.fn), fieldRow('Où', p.where), fieldRow('Interfaces', p.interfaces), fieldRow('Risques', p.risks), fieldRow('Vigilance', p.vigilance), fieldRow('Erreur de débutant', p.mistakes)),
          show);
        card._fig = figEl;
        sec.appendChild(card);
      }
    }
    return sec;
  }
  A.actions.showpart = el => {
    const card = el.closest('.ca-part');
    const figEl = card && card._fig;
    if (!figEl || !figEl._fig) return;
    figEl._fig.setHl([el.dataset.part]);
    figEl.scrollIntoView({ block: 'center', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    A.notify('Partie surlignée en orange sur la figure.');
  };

  function vocab(c) {
    const list = arr(c.vocab).filter(A.isObj);
    const allKeys = list.flatMap((v, i) => A.srs.vocabKeys(c.id, i));
    const allBtn = h('button', { type: 'button', class: 'ca-btn', dataset: { act: 'vocaball', ch: c.id } }, A.icon('plus'), h('span', null, 'Ajouter tout le vocabulaire à mes révisions'));
    if (allKeys.every(k => A.state.srs[k])) { allBtn.disabled = true; allBtn.lastChild.textContent = 'Tout le vocabulaire est dans tes révisions'; }
    return h('div', null,
      h('p', { class: 'ca-hint' }, 'Chaque terme ajouté crée trois cartes : français → anglais, anglais → français, terme → définition.'),
      allBtn,
      h('ul', { class: 'ca-vocab' }, list.map((v, i) => {
        const keys = A.srs.vocabKeys(c.id, i);
        const added = keys.every(k => A.state.srs[k]);
        return h('li', { class: 'ca-vcard' },
          h('p', { class: 'ca-vcard-fr' }, A.rich(v.fr), v.abbr ? h('span', { class: 'ca-abbr' }, ' (', v.abbr, ')') : null),
          h('p', { class: 'ca-vcard-en', lang: 'en' }, A.icon('link', { size: 16 }), ' ', v.en),
          A.P(v.def, 'ca-vcard-def'),
          v.tip ? h('p', { class: 'ca-tip' }, A.icon('bulb', { size: 18 }), ' ', A.rich(v.tip)) : null,
          h('button', { type: 'button', class: 'ca-btn is-small' + (added ? ' is-on' : ''), dataset: { act: 'vocabtoggle', ch: c.id, i }, 'aria-pressed': String(added) },
            A.icon(added ? 'check' : 'plus', { size: 18 }), h('span', null, added ? 'Dans mes révisions' : 'Ajouter à mes révisions')));
      })));
  }
  A.actions.vocabtoggle = el => {
    const keys = A.srs.vocabKeys(el.dataset.ch, Number(el.dataset.i));
    const on = el.getAttribute('aria-pressed') !== 'true';
    keys.forEach(k => (on ? A.srs.addCard(k) : A.srs.removeCard(k)));
    el.setAttribute('aria-pressed', String(on));
    el.classList.toggle('is-on', on);
    A.replace(el, A.icon(on ? 'check' : 'plus', { size: 18 }), h('span', null, on ? 'Dans mes révisions' : 'Ajouter à mes révisions'));
    A.notify(on ? 'Terme ajouté à tes révisions (3 cartes).' : 'Terme retiré de tes révisions.');
    A.ui.updateDueBadge();
  };
  A.actions.vocaball = el => {
    const c = A.C.chapter(el.dataset.ch);
    let n = 0;
    arr(c && c.vocab).forEach((v, i) => A.srs.vocabKeys(c.id, i).forEach(k => { if (A.srs.addCard(k)) n++; }));
    for (const b of A.qsa('[data-act="vocabtoggle"]')) { b.setAttribute('aria-pressed', 'true'); b.classList.add('is-on'); A.replace(b, A.icon('check', { size: 18 }), h('span', null, 'Dans mes révisions')); }
    el.disabled = true; el.lastChild.textContent = 'Tout le vocabulaire est dans tes révisions';
    A.notify(`${A.count(n, 'carte ajoutée', 'cartes ajoutées')} à tes révisions.`);
    A.ui.updateDueBadge();
  };

  function example(c) {
    const e = c.example || {};
    return h('div', { class: 'ca-prose' }, e.title ? h('h3', null, A.rich(e.title)) : null, A.paras(e.body), e.doc ? A.ui.doc(e.doc) : null);
  }

  function demo(c) {
    const d = c.demo || {};
    const steps = arr(d.steps).filter(A.isObj);
    let cur = 0;
    const figEl = d.fig ? A.figure(d.fig, { hl: arr(steps[0] && steps[0].hl) }) : null;
    const box = h('div', { class: 'ca-demo-step', 'aria-live': 'polite' });
    const prev = h('button', { type: 'button', class: 'ca-btn' }, A.icon('left'), h('span', null, 'Étape précédente'));
    const next = h('button', { type: 'button', class: 'ca-btn is-primary' }, h('span', null, 'Étape suivante'), A.icon('right'));
    const list = h('ol', { class: 'ca-demo-list' });
    const show = () => {
      const s = steps[cur] || {};
      A.replace(box, h('p', { class: 'ca-kicker' }, `Étape ${cur + 1} sur ${steps.length}`), h('h4', null, A.rich(s.label || '')), A.P(s.text || ''),
        arr(s.hl).length && figEl ? h('p', { class: 'ca-hint' }, 'Sur la figure, la partie concernée est surlignée en orange.') : null);
      if (figEl && figEl._fig) figEl._fig.setHl(arr(s.hl));
      prev.disabled = cur === 0; next.disabled = cur === steps.length - 1;
      A.replace(list, steps.map((st, i) => h('li', null, h('button', { type: 'button', class: 'ca-demo-li' + (i === cur ? ' is-current' : ''), dataset: { i }, 'aria-current': i === cur ? 'step' : null }, A.rich(st.label || `Étape ${i + 1}`)))));
    };
    prev.addEventListener('click', () => { cur = Math.max(0, cur - 1); show(); });
    next.addEventListener('click', () => { cur = Math.min(steps.length - 1, cur + 1); show(); });
    A.on(list, 'click', '[data-i]', (ev, b) => { cur = Number(b.dataset.i); show(); A.focus(box); });
    box.setAttribute('tabindex', '-1');
    show();
    return h('div', { class: 'ca-demo' }, d.title ? h('h3', null, A.rich(d.title)) : null, figEl, box, h('div', { class: 'ca-row ca-demo-nav' }, prev, next),
      h('details', { class: 'ca-demo-all' }, h('summary', null, 'Toutes les étapes'), list));
  }

  function exList(c, list, label) {
    const ex = arr(list).filter(A.isObj);
    return h('div', { class: 'ca-exlist' }, ex.map((e, i) => A.exercise(e, { mode: 'chapter', number: `${label} ${i + 1}/${ex.length}` })));
  }

  function mistakes(c) {
    return h('ul', { class: 'ca-mistakes' }, arr(c.mistakes).filter(A.isObj).map(m => h('li', { class: 'ca-mistake' },
      h('p', { class: 'ca-mk-err' }, A.icon('x', { size: 20 }), h('span', null, h('strong', null, 'Erreur : '), A.rich(m.error))),
      h('p', { class: 'ca-mk-why' }, A.icon('alert', { size: 20 }), h('span', null, h('strong', null, 'Pourquoi c’est un problème : '), A.rich(m.why))),
      h('p', { class: 'ca-mk-ok' }, A.icon('check', { size: 20 }), h('span', null, h('strong', null, 'À la place : '), A.rich(m.better))))));
  }

  /** Décision à options (situations professionnelles, étapes des cas pratiques). */
  A.decision = (opts, cfg) => {
    const o = cfg || {};
    const name = 'd' + A.uid();
    const list = A.shuffle(arr(opts).filter(A.isObj).map((x, i) => Object.assign({ i }, x)), !!o.retry);
    const inputs = [];
    const fs = h('fieldset', { class: 'ca-opts' }, h('legend', { class: 'ca-sr' }, 'Choisis ta décision'),
      h('ul', null, list.map(x => { const inp = h('input', { type: 'radio', name, value: String(x.i), class: 'ca-opt-in' }); inputs.push(inp); return h('li', { class: 'ca-opt' }, h('label', { class: 'ca-opt-l' }, inp, h('span', { class: 'ca-opt-box', 'aria-hidden': 'true' }), h('span', { class: 'ca-opt-t' }, A.rich(x.t)))); })));
    const msg = h('p', { class: 'ca-ex-msg', role: 'status', 'aria-live': 'polite' });
    const btn = h('button', { type: 'button', class: 'ca-btn is-primary' }, A.icon('check'), h('span', null, o.validateLabel || 'Valider ma décision'));
    const fb = h('div', { class: 'ca-ex-fb', hidden: true });
    const root = h('div', { class: 'ca-decision' }, fs, msg, h('div', { class: 'ca-ex-actions' }, btn), fb);
    btn.addEventListener('click', () => {
      const k = inputs.findIndex(x => x.checked);
      if (k < 0) { msg.textContent = 'Choisis une décision avant de valider.'; msg.classList.add('is-warn'); return; }
      msg.textContent = '';
      const chosen = list[k];
      inputs.forEach(x => { x.disabled = true; });
      btn.hidden = true;
      if (o.revealAll !== false) {
        A.qsa('.ca-opt', fs).forEach((li, j) => {
          const x = list[j];
          li.classList.add(x.ok ? 'is-right' : j === k ? 'is-wrong' : 'is-other');
          if (x.ok || j === k || o.revealAll) li.appendChild(h('p', { class: 'ca-why ' + (x.ok ? 'is-ok' : j === k ? 'is-ko' : 'is-neutral') }, A.icon(x.ok ? 'check' : j === k ? 'x' : 'info', { size: 18 }), h('span', null, A.rich(x.why || ''))));
        });
      }
      o.onAnswer && o.onAnswer(!!chosen.ok, chosen, fb, root);
    });
    return root;
  };

  function situation(s, i, c, retry) {
    if (!A.isObj(s)) return null;
    const wrap = h('article', { class: 'ca-situation' });
    const build = again => A.replace(wrap,
      h('h3', null, A.icon('briefcase', { size: 20 }), ' ', A.rich(s.title || `Situation ${i + 1}`)),
      A.paras(s.context),
      s.fig ? A.figure(s.fig) : null,
      h('p', { class: 'ca-ex-q' }, h('strong', null, A.rich(s.question || 'Que fais-tu ?'))),
      A.decision(s.options, {
        retry: again, revealAll: true,
        onAnswer(ok, chosen, fb) {
          const again2 = h('button', { type: 'button', class: 'ca-btn' }, A.icon('refresh'), h('span', null, 'Rejouer la situation'));
          again2.addEventListener('click', () => { build(true); A.focus(A.qs('h3', wrap)); A.qs('h3', wrap).setAttribute('tabindex', '-1'); });
          A.replace(fb, h('p', { class: 'ca-verdict is-' + (ok ? 'ok' : 'ko') }, A.icon(ok ? 'check' : 'refresh'), h('strong', null, ok ? 'C’est la bonne décision.' : 'Ce n’est pas la meilleure décision.')),
            h('div', { class: 'ca-explain' }, h('p', { class: 'ca-explain-k' }, 'Débrief'), A.P(s.debrief || '')), h('div', { class: 'ca-ex-actions' }, again2));
          fb.hidden = false;
          A.notify(ok ? 'Bonne décision.' : 'Ce n’est pas la meilleure décision : lis le débrief.', ok ? 'ok' : 'ko');
        },
      }));
    build(!!retry);
    return wrap;
  }

  function quiz(c) {
    const pr = A.progress.chapterProgress(c);
    const q = arr(c.quiz).filter(A.isObj);
    const sum = h('div', { class: 'ca-quizsum' },
      h('p', null, h('strong', null, `${pr.quizDone}/${pr.quiz} questions faites`), ` · ${pr.quizFirst} réussie${pr.quizFirst > 1 ? 's' : ''} du premier coup · statut du chapitre : `, A.ui.status(pr.status)),
      A.ui.progress(pr.quizDone, pr.quiz, 'Questions faites'));
    const refresh = A.events.on('progress', () => {
      const p2 = A.progress.chapterProgress(c);
      A.replace(sum, h('p', null, h('strong', null, `${p2.quizDone}/${p2.quiz} questions faites`), ` · ${p2.quizFirst} réussie${p2.quizFirst > 1 ? 's' : ''} du premier coup · statut du chapitre : `, A.ui.status(p2.status)), A.ui.progress(p2.quizDone, p2.quiz, 'Questions faites'));
    });
    A.router.onLeave(refresh);
    return h('div', null, sum, h('p', { class: 'ca-hint' }, 'Le chapitre devient « Solide » quand toutes les questions sont faites, au moins 80 % réussies du premier coup, et aucune ratée au dernier essai.'),
      h('div', { class: 'ca-exlist' }, q.map((e, i) => A.exercise(e, { mode: 'chapter', number: `Question ${i + 1}/${q.length}` }))));
  }

  function retain(c) {
    const list = arr(c.retain).filter(x => typeof x === 'string');
    const keys = list.map((r, i) => `re:${c.id}:${i}`);
    const all = h('button', { type: 'button', class: 'ca-btn', dataset: { act: 'retainall', ch: c.id } }, A.icon('plus'), h('span', null, 'Ajouter ces phrases à mes révisions'));
    if (keys.every(k => A.state.srs[k])) { all.disabled = true; all.lastChild.textContent = 'Ces phrases sont dans tes révisions'; }
    return h('div', null, h('ol', { class: 'ca-retain' }, list.map(r => h('li', null, A.rich(r)))),
      h('p', { class: 'ca-hint' }, 'En révision, chaque phrase revient avec un mot clé masqué à retrouver.'), all);
  }
  A.actions.retainall = el => {
    const c = A.C.chapter(el.dataset.ch);
    let n = 0;
    arr(c && c.retain).forEach((r, i) => { if (A.srs.addCard(`re:${c.id}:${i}`)) n++; });
    el.disabled = true; el.lastChild.textContent = 'Ces phrases sont dans tes révisions';
    A.notify(`${A.count(n, 'phrase ajoutée', 'phrases ajoutées')} à tes révisions.`);
    A.ui.updateDueBadge();
  };

  function suite(c) {
    const pr = A.progress.chapterProgress(c);
    const nx = c.next || {};
    const nextCh = nx.id ? A.C.chapter(nx.id) : null;
    const nextPlan = nx.id ? A.C.planEntry(nx.id) : null;
    const oral = arr(c.oral).filter(A.isObj);
    return h('div', null,
      A.ui.card(null, h('h3', null, 'Bilan du chapitre'),
        h('p', null, A.ui.status(pr.status), ` ${pr.done}/${pr.total} exercices réalisés · ${pr.quizFirst}/${pr.quiz} questions réussies du premier coup.`),
        pr.total && pr.done < pr.total ? h('p', null, 'Il reste des exercices : ', h('a', { href: `#/chapitre/${c.id}/activites` }, 'activités'), ' · ', h('a', { href: `#/chapitre/${c.id}/evaluation` }, 'mini-évaluation'), '.') : null),
      oral.length ? h('section', { class: 'ca-block' }, h('h3', null, A.icon('mic', { size: 20 }), ' Oral blanc'),
        h('p', { class: 'ca-callout is-info' }, 'Explique à voix haute, comme à un collègue ou à un jury, puis compare avec les éléments attendus. C’est une **auto-évaluation** : elle t’aide à t’entraîner, ce n’est jamais une note de certification.'.replace(/\*\*/g, '')),
        oral.map((o, i) => A.oral(c, o, i))) : null,
      h('section', { class: 'ca-block' }, h('h3', null, A.icon('flag', { size: 20 }), ' La suite'),
        nx.teaser ? A.P(nx.teaser) : null,
        nextCh ? A.ui.btn(`Chapitre suivant : ${nextCh.id.toUpperCase()} — ${nextCh.title}`, { href: '#/chapitre/' + nextCh.id, class: 'is-primary is-block' }, 'right')
          : nx.id ? h('p', { class: 'ca-muted' }, `Le chapitre suivant (${nx.id.toUpperCase()}${nextPlan ? ' — ' + nextPlan.title : ''}) est à venir.`) : null,
        h('div', { class: 'ca-row' }, A.ui.btn('Retour au parcours', { href: '#/parcours' }, 'route'), A.ui.btn('Réviser', { href: '#/reviser' }, 'cards'))));
  }

  /** Oral blanc : réponse libre (facultative), puis comparaison aux éléments attendus et réponse modèle. */
  A.oral = (c, o, i, cfg) => {
    const k = `${c.id}-o${i}`;
    const prev = A.state.oral[k];
    const box = h('article', { class: 'ca-oral' });
    const taId = 'or' + A.uid();
    const ta = h('textarea', { class: 'ca-input', rows: 3, id: taId });
    const reveal = h('button', { type: 'button', class: 'ca-btn is-primary' }, A.icon('eye'), h('span', null, 'Comparer avec les éléments attendus'));
    const res = h('div');
    A.replace(box,
      h('p', { class: 'ca-oral-q' }, h('strong', null, `Question ${i + 1} : `), A.rich(o.q)),
      h('label', { for: taId, class: 'ca-hint' }, 'Ta réponse en quelques mots (facultatif, non enregistrée) — l’important est de la dire à voix haute.'), ta,
      prev ? h('p', { class: 'ca-ex-hist' }, A.icon('clock', { size: 16 }), ` Dernière auto-évaluation : ${prev.checked.length}/${arr(o.expected).length} éléments cités, le ${A.fmtDateTime(prev.at)}.`) : null,
      h('div', { class: 'ca-ex-actions' }, reveal), res);
    reveal.addEventListener('click', () => {
      reveal.hidden = true;
      const boxes = arr(o.expected).map((e, j) => h('input', { type: 'checkbox', value: String(j), class: 'ca-opt-in' }));
      const save = h('button', { type: 'button', class: 'ca-btn is-primary' }, A.icon('check'), h('span', null, 'Enregistrer mon auto-évaluation'));
      const out = h('p', { class: 'ca-verdict', 'aria-live': 'polite' });
      A.replace(res,
        h('fieldset', { class: 'ca-opts' }, h('legend', null, 'Coche les éléments que tu as cités :'),
          h('ul', null, arr(o.expected).map((e, j) => h('li', { class: 'ca-opt' }, h('label', { class: 'ca-opt-l' }, boxes[j], h('span', { class: 'ca-opt-box is-check', 'aria-hidden': 'true' }), h('span', { class: 'ca-opt-t' }, A.rich(e))))))),
        h('div', { class: 'ca-explain' }, h('p', { class: 'ca-explain-k' }, 'Réponse modèle'), A.P(o.model || '')),
        h('div', { class: 'ca-ex-actions' }, save), out);
      save.addEventListener('click', () => {
        const checked = boxes.filter(b => b.checked).map(b => Number(b.value));
        const p = A.state.oral[k] || { n: 0 };
        A.state.oral[k] = { checked, n: (p.n || 0) + 1, at: new Date().toISOString() };
        const ok = checked.length >= Math.ceil(arr(o.expected).length * 0.75);
        const key = `or:${c.id}:${i}`;
        if (cfg && cfg.onResult) cfg.onResult(ok);
        else { A.srs.addCard(key, false); }
        A.store.save();
        out.textContent = `Auto-évaluation enregistrée : ${checked.length}/${arr(o.expected).length} éléments cités. Ce n’est pas une note de certification.`;
        out.className = 'ca-verdict is-' + (ok ? 'ok' : 'ko');
        save.disabled = true;
        A.notify(out.textContent);
      });
      A.focus(A.qs('legend', res));
    });
    return box;
  };
})();

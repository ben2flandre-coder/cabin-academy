/* Moteur d'exercices — 9 types : mcq, multi, order, match, sort, input, hotid, hottap, hotfind.
   Cycle : répondre → « Valider » (réponse incomplète = refus expliqué) → correction expliquée → « Nouvelle tentative »
   (options remélangées). Chaque tentative validée est enregistrée (A.progress.recordExercise). */
(function () {
  'use strict';
  const A = window.CAApp;
  const { h, arr } = A;

  const TYPE = {
    mcq: { label: 'Une seule réponse', icon: 'check' },
    multi: { label: 'Plusieurs réponses possibles', icon: 'list' },
    order: { label: 'Remettre dans l’ordre', icon: 'layers' },
    match: { label: 'Associer deux à deux', icon: 'link' },
    sort: { label: 'Classer dans des catégories', icon: 'layers' },
    input: { label: 'Réponse à écrire', icon: 'pen' },
    hotid: { label: 'Nommer la partie surlignée', icon: 'eye' },
    hottap: { label: 'Toucher sur la figure', icon: 'target' },
    hotfind: { label: 'Trouver toutes les anomalies', icon: 'search' },
  };
  A.EX_TYPES = TYPE;

  const mark = (ok, text) => h('p', { class: 'ca-why ' + (ok === true ? 'is-ok' : ok === false ? 'is-ko' : 'is-neutral') },
    ok === true ? A.icon('check', { size: 18 }) : ok === false ? A.icon('x', { size: 18 }) : A.icon('info', { size: 18 }), h('span', null, A.rich(text)));

  // ===================== types à options =====================
  function choice(ex, ctx, multi) {
    const name = 'o' + A.uid();
    const opts = A.shuffle(arr(ex.options).map((o, i) => Object.assign({ i }, o)), ctx.retry);
    const rows = opts.map(o => {
      const input = h('input', { type: multi ? 'checkbox' : 'radio', name, value: String(o.i), class: 'ca-opt-in' });
      return { o, input, row: h('li', { class: 'ca-opt' }, h('label', { class: 'ca-opt-l' }, input, h('span', { class: 'ca-opt-box', 'aria-hidden': 'true' }), h('span', { class: 'ca-opt-t' }, A.rich(o.t)))) };
    });
    const node = h('fieldset', { class: 'ca-opts' }, h('legend', { class: 'ca-sr' }, multi ? 'Coche toutes les bonnes réponses' : 'Choisis une réponse'), h('ul', null, rows.map(r => r.row)));
    return {
      node,
      answer() {
        const sel = rows.filter(r => r.input.checked);
        if (!sel.length) return { complete: false, msg: multi ? 'Coche au moins une réponse avant de valider.' : 'Choisis une réponse avant de valider.' };
        return { complete: true, value: sel.map(r => r.o.i) };
      },
      grade(v) {
        const chosen = new Set(v);
        return { ok: rows.every(r => !!r.o.ok === chosen.has(r.o.i)) };
      },
      reveal(v) {
        const chosen = new Set(v);
        for (const r of rows) {
          const c = chosen.has(r.o.i), ok = !!r.o.ok;
          r.row.classList.add(ok ? 'is-right' : c ? 'is-wrong' : 'is-other');
          if (c) r.row.classList.add('is-chosen');
          let lead;
          if (multi) lead = ok && c ? 'Bien coché. ' : ok ? 'À cocher aussi. ' : c ? 'Coché à tort. ' : 'Bien laissé de côté. ';
          else lead = ok ? (c ? 'Ta réponse est la bonne. ' : 'La bonne réponse. ') : c ? 'Ton choix. ' : '';
          r.row.appendChild(mark(ok === c ? true : (c || ok) ? false : null, lead + A.str(r.o.why)));
        }
      },
      lock() { rows.forEach(r => { r.input.disabled = true; }); },
    };
  }

  // ===================== ordre =====================
  function order(ex, ctx) {
    const items = arr(ex.items).map((t, i) => ({ t, i }));
    let cur = A.shuffle(items, true);
    const list = h('ol', { class: 'ca-order' });
    const live = h('p', { class: 'ca-sr', 'aria-live': 'polite' });
    let locked = false;
    const render = focusKey => {
      A.replace(list, cur.map((it, k) => h('li', { class: 'ca-order-i', dataset: { i: it.i } },
        h('span', { class: 'ca-order-n', 'aria-hidden': 'true' }, String(k + 1)),
        h('span', { class: 'ca-order-t' }, A.rich(it.t)),
        h('span', { class: 'ca-order-b' },
          h('button', { type: 'button', class: 'ca-iconbtn', dataset: { mv: 'up', i: it.i }, disabled: locked || k === 0, 'aria-label': `Monter « ${A.plain(it.t)} » (position ${k + 1})` }, A.icon('up')),
          h('button', { type: 'button', class: 'ca-iconbtn', dataset: { mv: 'down', i: it.i }, disabled: locked || k === cur.length - 1, 'aria-label': `Descendre « ${A.plain(it.t)} » (position ${k + 1})` }, A.icon('down'))))));
      if (focusKey) {
        let b = A.qs(`[data-mv="${focusKey[1]}"][data-i="${focusKey[0]}"]`, list);
        if (!b || b.disabled) b = A.qs(`[data-i="${focusKey[0]}"] [data-mv]:not([disabled])`, list);
        A.focus(b);
      }
    };
    A.on(list, 'click', '[data-mv]', (ev, b) => {
      const i = Number(b.dataset.i);
      const k = cur.findIndex(x => x.i === i);
      const n = b.dataset.mv === 'up' ? k - 1 : k + 1;
      if (n < 0 || n >= cur.length) return;
      const c = cur.slice(); const t = c[k]; c[k] = c[n]; c[n] = t; cur = c;
      render([i, b.dataset.mv]);
      live.textContent = `« ${A.plain(t.t)} » est maintenant en position ${n + 1} sur ${cur.length}.`;
    });
    render();
    return {
      node: h('div', null, h('p', { class: 'ca-hint' }, 'Utilise les flèches pour déplacer chaque élément. Le premier de la liste est le premier à faire.'), list, live),
      answer: () => ({ complete: true, value: cur.map(x => x.i) }),
      grade: v => ({ ok: v.every((x, k) => x === k) }),
      reveal(v) {
        A.qsa('.ca-order-i', list).forEach((li, k) => {
          const ok = Number(li.dataset.i) === k;
          li.classList.add(ok ? 'is-right' : 'is-wrong');
          li.appendChild(mark(ok, ok ? 'Bien placé.' : `Devrait être en position ${Number(li.dataset.i) + 1}.`));
        });
        if (!v.every((x, k) => x === k)) list.after(h('div', { class: 'ca-solution' }, h('p', { class: 'ca-solution-t' }, 'Le bon ordre :'), h('ol', null, items.map(it => h('li', null, A.rich(it.t))))));
      },
      lock() { locked = true; A.qsa('button', list).forEach(b => { b.disabled = true; }); },
    };
  }

  // ===================== associer =====================
  function match(ex, ctx) {
    const pairs = arr(ex.pairs).map((p, i) => Object.assign({ i }, p));
    const rights = A.shuffle(pairs.map(p => p.r), ctx.retry);
    const rows = A.shuffle(pairs, ctx.retry).map(p => {
      const sel = A.ui.select([['', '— choisir —'], ...rights.map(r => [r, A.plain(r)])], '', { class: 'ca-input' });
      const id = 'm' + A.uid();
      sel.id = id;
      return { p, sel, row: h('li', { class: 'ca-match-i' }, h('label', { for: id, class: 'ca-match-l' }, A.rich(p.l)), sel) };
    });
    return {
      node: h('div', null, h('p', { class: 'ca-hint' }, 'Pour chaque élément de gauche, choisis dans la liste ce qui lui correspond.'), h('ul', { class: 'ca-match' }, rows.map(r => r.row))),
      answer() {
        const missing = rows.filter(r => !r.sel.value).length;
        if (missing) return { complete: false, msg: `Il reste ${A.count(missing, 'association', 'associations')} à faire avant de valider.` };
        return { complete: true, value: rows.map(r => [r.p.i, r.sel.value]) };
      },
      grade: v => ({ ok: v.every(([i, r]) => pairs[i].r === r) }),
      reveal() { for (const r of rows) { const ok = r.sel.value === r.p.r; r.row.classList.add(ok ? 'is-right' : 'is-wrong'); r.row.appendChild(mark(ok, ok ? 'Bonne association.' : `Bonne réponse : ${r.p.r}`)); } },
      lock() { rows.forEach(r => { r.sel.disabled = true; }); },
    };
  }

  // ===================== classer =====================
  function sort(ex, ctx) {
    const bins = arr(ex.bins);
    const items = A.shuffle(arr(ex.items).map((it, i) => Object.assign({ i }, it)), ctx.retry);
    const rows = items.map(it => {
      const name = 's' + A.uid();
      const inputs = bins.map((b, k) => h('input', { type: 'radio', name, value: String(k), class: 'ca-seg-in' }));
      const gid = 'g' + A.uid();
      return { it, inputs, row: h('li', { class: 'ca-sort-i' },
        h('p', { class: 'ca-sort-t', id: gid }, A.rich(it.t)),
        h('div', { class: 'ca-seg', role: 'radiogroup', 'aria-labelledby': gid }, bins.map((b, k) => h('label', { class: 'ca-seg-l' }, inputs[k], h('span', null, A.rich(b)))))) };
    });
    return {
      node: h('div', null, h('p', { class: 'ca-hint' }, `Catégories : ${bins.map(A.plain).join(' · ')}. Choisis une catégorie pour chaque élément.`), h('ul', { class: 'ca-sort' }, rows.map(r => r.row))),
      answer() {
        const missing = rows.filter(r => !r.inputs.some(x => x.checked)).length;
        if (missing) return { complete: false, msg: `Il reste ${A.count(missing, 'élément', 'éléments')} à classer avant de valider.` };
        return { complete: true, value: rows.map(r => [r.it.i, r.inputs.findIndex(x => x.checked)]) };
      },
      grade: v => ({ ok: v.every(([i, b]) => arr(ex.items)[i].bin === b) }),
      reveal() {
        for (const r of rows) {
          const b = r.inputs.findIndex(x => x.checked);
          const ok = b === r.it.bin;
          r.row.classList.add(ok ? 'is-right' : 'is-wrong');
          r.row.appendChild(mark(ok, (ok ? '' : `Catégorie attendue : ${A.plain(bins[r.it.bin])}. `) + A.str(r.it.why)));
        }
      },
      lock() { rows.forEach(r => r.inputs.forEach(x => { x.disabled = true; })); },
    };
  }

  // ===================== saisie =====================
  function input(ex) {
    const id = 'i' + A.uid();
    const inp = h('input', { type: 'text', id, class: 'ca-input', autocomplete: 'off', autocapitalize: 'characters', spellcheck: 'false', enterkeyhint: 'done' });
    const answers = arr(ex.answers).filter(x => typeof x === 'string');
    return {
      node: h('div', { class: 'ca-field' }, h('label', { for: id }, 'Ta réponse'), h('p', { class: 'ca-hint' }, 'Majuscules, espaces, tirets et accents ne comptent pas.'), inp),
      enter: inp,
      answer() {
        if (!inp.value.trim()) return { complete: false, msg: 'Écris ta réponse dans le champ avant de valider.' };
        return { complete: true, value: inp.value };
      },
      grade: v => ({ ok: answers.some(a => A.normAnswer(a) === A.normAnswer(v)) }),
      reveal(v) {
        const ok = answers.some(a => A.normAnswer(a) === A.normAnswer(v));
        inp.parentNode.classList.add(ok ? 'is-right' : 'is-wrong');
        inp.parentNode.appendChild(mark(ok, ok ? 'Réponse exacte.' : `Réponse attendue : \`${answers[0] || ''}\``));
      },
      lock() { inp.readOnly = true; },
    };
  }

  // ===================== figures interactives =====================
  /** Prépare une figure touchable : zones focalisables, résolution tolérante du toucher (≈ 24 px autour d'une partie). */
  function tapFigure(ex, onPick, onReadyExtra, onError) {
    let api = null;
    let enabled = true;
    const figEl = A.figure(ex.fig, {
      interactive: true, legend: false, zoom: false, onError,
      onReady(a) {
        api = a;
        const svg = a.svg;
        svg.classList.add('tappable');
        const seen = new Set();
        let k = 0;
        for (const g of svg.querySelectorAll('[data-part]')) {
          const id = g.getAttribute('data-part');
          if (seen.has(id)) continue;
          seen.add(id);
          g.setAttribute('tabindex', '0');
          g.setAttribute('role', 'button');
          g.setAttribute('aria-label', `Zone ${++k}`);
        }
        svg.addEventListener('click', ev => {
          if (!enabled) return;
          const id = resolve(svg, ev);
          if (id) onPick(id);
        });
        svg.addEventListener('keydown', ev => {
          if (!enabled || (ev.key !== 'Enter' && ev.key !== ' ')) return;
          const g = ev.target instanceof Element ? ev.target.closest('[data-part]') : null;
          if (g) { ev.preventDefault(); onPick(g.getAttribute('data-part')); }
        });
        if (onReadyExtra) onReadyExtra(a);
      },
    });
    const big = h('button', { type: 'button', class: 'ca-btn is-small', 'aria-pressed': 'false' }, A.icon('zoomin'), h('span', null, 'Agrandir la figure'));
    big.addEventListener('click', () => {
      const on = !figEl.classList.contains('is-big');
      figEl.classList.toggle('is-big', on);
      big.setAttribute('aria-pressed', String(on));
      big.lastChild.textContent = on ? 'Taille normale' : 'Agrandir la figure';
    });
    return {
      node: h('div', { class: 'ca-hotfig' }, h('div', { class: 'ca-hotfig-bar' }, big), figEl),
      get api() { return api; },
      figEl,
      disable() { enabled = false; if (api && api.svg) { api.svg.classList.remove('tappable'); for (const g of api.svg.querySelectorAll('[data-part]')) { g.removeAttribute('tabindex'); g.removeAttribute('role'); } } },
      mark(part, cls) { if (api && api.svg) A.figParts(api.svg, part).forEach(g => g.classList.add(cls)); },
      toggle(part, cls, on) { if (api && api.svg) A.figParts(api.svg, part).forEach(g => g.classList.toggle(cls, on)); },
      clear(cls) { if (api && api.svg) api.svg.querySelectorAll('.' + cls).forEach(g => g.classList.remove(cls)); },
    };
  }
  function resolve(svg, ev) {
    const t = ev.target instanceof Element ? ev.target.closest('[data-part]') : null;
    if (t && svg.contains(t)) return t.getAttribute('data-part');
    // Toucher à côté d'une petite partie : on prend la plus proche dans un rayon de 24 px.
    const x = ev.clientX, y = ev.clientY;
    if (!Number.isFinite(x) || (x === 0 && y === 0)) return null;
    let best = null, bd = 24;
    for (const g of svg.querySelectorAll('[data-part]')) {
      const r = g.getBoundingClientRect();
      const dx = Math.max(r.left - x, 0, x - r.right), dy = Math.max(r.top - y, 0, y - r.bottom);
      const d = Math.hypot(dx, dy);
      if (d < bd) { bd = d; best = g.getAttribute('data-part'); }
    }
    return best;
  }
  const partName = (meta, id) => { const p = arr(meta && meta.parts).find(x => x.id === id); return p ? p.fr : id; };
  const partFn = (meta, id) => { const p = arr(meta && meta.parts).find(x => x.id === id); return p && p.fn ? p.fn : ''; };

  function hotid(ex, ctx) {
    const meta = A.C.figure(ex.fig);
    const targets = arr(ex.targets).filter(t => A.isObj(t) && t.part);
    const poolIds = arr(ex.pool).length ? arr(ex.pool) : arr(meta && meta.parts).map(p => p.id);
    const pool = A.shuffle(poolIds.map(id => ({ id, name: partName(meta, id) })), ctx.retry);
    const ans = targets.map(() => null);
    let cur = 0;
    let api = null;
    let locked = false;
    const figEl = A.figure(ex.fig, { interactive: true, legend: false, zoom: false, onReady(a) { api = a; a.setHl([targets[cur] && targets[cur].part]); }, onError: ctx.figError });
    const counter = h('p', { class: 'ca-hot-count', 'aria-live': 'polite' });
    const name = 'h' + A.uid();
    const list = h('fieldset', { class: 'ca-opts is-compact' }, h('legend', { class: 'ca-hot-legend' }, 'Nom de la partie surlignée'), h('ul', null, pool.map(p => h('li', { class: 'ca-opt' }, h('label', { class: 'ca-opt-l' }, h('input', { type: 'radio', name, value: p.id, class: 'ca-opt-in' }), h('span', { class: 'ca-opt-box', 'aria-hidden': 'true' }), h('span', { class: 'ca-opt-t' }, p.name))))));
    const prev = h('button', { type: 'button', class: 'ca-btn is-small' }, A.icon('left'), h('span', null, 'Partie précédente'));
    const next = h('button', { type: 'button', class: 'ca-btn is-small' }, h('span', null, 'Partie suivante'), A.icon('right'));
    const show = () => {
      counter.textContent = targets.length > 1 ? `Partie surlignée ${cur + 1} sur ${targets.length}` : 'Une partie est surlignée en orange sur la figure.';
      for (const i of A.qsa('input', list)) i.checked = i.value === ans[cur];
      if (api) api.setHl([targets[cur].part]);
      prev.hidden = targets.length < 2; next.hidden = targets.length < 2;
      prev.disabled = cur === 0; next.disabled = cur === targets.length - 1;
    };
    A.on(list, 'change', 'input', (ev, i) => {
      if (locked) return;
      ans[cur] = i.value;
      if (cur < targets.length - 1 && ans.some(a => a === null)) setTimeout(() => { cur = ans.findIndex(a => a === null); show(); A.focus(counter); }, 250);
    });
    counter.setAttribute('tabindex', '-1');
    prev.addEventListener('click', () => { cur = Math.max(0, cur - 1); show(); });
    next.addEventListener('click', () => { cur = Math.min(targets.length - 1, cur + 1); show(); });
    show();
    const summary = h('ol', { class: 'ca-hot-sum' });
    return {
      node: h('div', null, figEl, counter, list, h('div', { class: 'ca-row' }, prev, next), summary),
      answer() {
        const missing = ans.filter(a => a === null).length;
        if (missing) return { complete: false, msg: targets.length > 1 ? `Il reste ${A.count(missing, 'partie', 'parties')} à nommer (utilise « Partie suivante »).` : 'Choisis un nom avant de valider.' };
        return { complete: true, value: ans.slice() };
      },
      grade: v => ({ ok: v.every((a, i) => a === targets[i].part) }),
      reveal(v) {
        A.replace(summary, targets.map((t, i) => {
          const ok = v[i] === t.part;
          const see = h('button', { type: 'button', class: 'ca-link', dataset: { see: i } }, 'Voir sur la figure');
          return h('li', { class: ok ? 'is-right' : 'is-wrong' }, mark(ok, ok ? `**${partName(meta, t.part)}** : bonne réponse. ${partFn(meta, t.part)}` : `Tu as répondu « ${partName(meta, v[i])} » ; c'est **${partName(meta, t.part)}**. ${partFn(meta, t.part)}`), see);
        }));
        A.on(summary, 'click', '[data-see]', (ev, b) => { if (api) api.setHl([targets[Number(b.dataset.see)].part]); });
        list.hidden = true; prev.hidden = true; next.hidden = true;
        counter.textContent = 'Correction :';
      },
      lock() { locked = true; A.qsa('input', list).forEach(i => { i.disabled = true; }); },
    };
  }

  function hottap(ex, ctx) {
    const meta = A.C.figure(ex.fig);
    const targets = arr(ex.targets).filter(t => A.isObj(t) && t.part);
    const ans = targets.map(() => null);
    let cur = 0;
    let locked = false;
    const prompts = h('ol', { class: 'ca-prompts' });
    const live = h('p', { class: 'ca-sr', 'aria-live': 'polite' });
    const fig = tapFigure(ex, part => {
      if (locked) return;
      ans[cur] = part;
      live.textContent = `Réponse enregistrée pour : ${A.plain(targets[cur].prompt)}`;
      const nxt = ans.findIndex(a => a === null);
      if (nxt >= 0) cur = nxt;
      render();
    }, () => render(), ctx.figError);
    const render = () => {
      fig.clear('sel');
      if (ans[cur]) fig.mark(ans[cur], 'sel');
      A.replace(prompts, targets.map((t, i) => h('li', { class: 'ca-prompt' + (i === cur ? ' is-current' : '') + (ans[i] ? ' is-done' : '') },
        h('button', { type: 'button', class: 'ca-prompt-b', dataset: { p: i }, 'aria-current': i === cur ? 'step' : null },
          h('span', { class: 'ca-prompt-t' }, A.rich(t.prompt)),
          h('span', { class: 'ca-prompt-s' }, ans[i] ? 'Zone choisie — touche à nouveau pour changer' : i === cur ? 'À toi : touche la figure' : 'Pas encore répondu')))));
    };
    A.on(prompts, 'click', '[data-p]', (ev, b) => { if (locked) return; cur = Number(b.dataset.p); render(); });
    render();
    return {
      node: h('div', null, h('p', { class: 'ca-hint' }, targets.length > 1 ? 'Touche sur la figure la partie demandée par la consigne surlignée ; la suivante s’active ensuite.' : 'Touche sur la figure la partie demandée.'), prompts, fig.node, live),
      answer() {
        const missing = ans.filter(a => a === null).length;
        if (missing) return { complete: false, msg: `Il reste ${A.count(missing, 'partie', 'parties')} à toucher sur la figure avant de valider.` };
        return { complete: true, value: ans.slice() };
      },
      grade: v => ({ ok: v.every((a, i) => a === targets[i].part) }),
      reveal(v) {
        fig.clear('sel');
        targets.forEach((t, i) => { if (v[i] === t.part) fig.mark(t.part, 'good'); else { fig.mark(t.part, 'miss'); fig.mark(v[i], 'wrong'); } });
        A.replace(prompts, targets.map((t, i) => {
          const ok = v[i] === t.part;
          return h('li', { class: 'ca-prompt ' + (ok ? 'is-right' : 'is-wrong') }, h('p', { class: 'ca-prompt-t' }, A.rich(t.prompt)),
            mark(ok, ok ? `Bien touché : **${partName(meta, t.part)}**. ${partFn(meta, t.part)}` : `Tu as touché « ${partName(meta, v[i])} » (en rouge). La bonne partie, en pointillés orange : **${partName(meta, t.part)}**. ${partFn(meta, t.part)}`));
        }));
      },
      lock() { locked = true; fig.disable(); },
    };
  }

  function hotfind(ex, ctx) {
    const meta = A.C.figure(ex.fig);
    const targets = arr(ex.targets).filter(t => typeof t === 'string');
    const notes = A.isObj(ex.notes) ? ex.notes : {};
    const sel = new Set();
    let locked = false;
    const counter = h('p', { class: 'ca-hot-count', 'aria-live': 'polite' });
    const upd = () => { counter.textContent = `${A.count(targets.length, 'élément', 'éléments')} à trouver · ${A.count(sel.size, 'zone sélectionnée', 'zones sélectionnées')}`; };
    const fig = tapFigure(ex, part => {
      if (locked) return;
      if (sel.has(part)) sel.delete(part); else sel.add(part);
      fig.toggle(part, 'sel', sel.has(part));
      if (fig.api) A.figParts(fig.api.svg, part).forEach(g => g.setAttribute('aria-pressed', String(sel.has(part))));
      upd();
    }, a => { for (const g of a.svg.querySelectorAll('[data-part][role="button"]')) g.setAttribute('aria-pressed', 'false'); }, ctx.figError);
    upd();
    const res = h('div');
    return {
      node: h('div', null, h('p', { class: 'ca-hint' }, 'Touche chaque zone qui pose problème (touche à nouveau pour la désélectionner), puis valide.'), counter, fig.node, res),
      answer() {
        if (!sel.size) return { complete: false, msg: 'Sélectionne au moins une zone sur la figure avant de valider.' };
        return { complete: true, value: Array.from(sel) };
      },
      grade(v) { const s = new Set(v); return { ok: targets.every(t => s.has(t)) && v.every(p => targets.includes(p)) }; },
      reveal(v) {
        const s = new Set(v);
        fig.clear('sel');
        const found = targets.filter(t => s.has(t)), missed = targets.filter(t => !s.has(t)), wrong = v.filter(p => !targets.includes(p));
        found.forEach(t => fig.mark(t, 'good')); missed.forEach(t => fig.mark(t, 'miss')); wrong.forEach(t => fig.mark(t, 'wrong'));
        counter.textContent = `Trouvés : ${found.length} sur ${targets.length}` + (wrong.length ? ` · ${A.count(wrong.length, 'zone sélectionnée à tort', 'zones sélectionnées à tort')}` : '');
        A.replace(res, h('ul', { class: 'ca-hot-sum' },
          found.map(t => h('li', { class: 'is-right' }, mark(true, `Trouvé : **${partName(meta, t)}**. ${A.str(notes[t])}`))),
          missed.map(t => h('li', { class: 'is-wrong' }, mark(false, `Oublié (pointillés orange) : **${partName(meta, t)}**. ${A.str(notes[t])}`))),
          wrong.map(t => h('li', { class: 'is-wrong' }, mark(false, `Sélectionné à tort (en rouge) : **${partName(meta, t)}** n'est pas une anomalie. ${partFn(meta, t)}`)))));
      },
      lock() { locked = true; fig.disable(); },
    };
  }

  const BUILD = {
    mcq: (ex, ctx) => choice(ex, ctx, false), multi: (ex, ctx) => choice(ex, ctx, true),
    order, match, sort, input, hotid, hottap, hotfind,
  };

  /** Historique d'un exercice, en une phrase. */
  A.exHistory = id => {
    const r = A.state.ex[id];
    if (!r) return null;
    return `${A.count(r.n, 'tentative', 'tentatives')} · ${A.progress.EX_LABEL[A.progress.exState(id)]} · dernière le ${A.fmtDateTime(r.at)}`;
  };

  /**
   * A.exercise(ex, opts) → <section>.  opts : mode 'chapter' | 'review' | 'free' ; onResult(ok) ; retry (mélange différent) ;
   * number (numéro affiché) ; noRetry (en révision, la suite est gérée par la session).
   */
  A.exercise = (ex, opts) => {
    const o = opts || {};
    const qid = 'q' + A.uid();
    const t = TYPE[ex && ex.type];
    const root = h('section', { class: 'ca-ex', 'aria-labelledby': qid, dataset: { ex: ex && ex.id, type: ex && ex.type } });
    if (!A.isObj(ex) || !t || !BUILD[ex.type]) {
      root.appendChild(h('div', { class: 'ca-fig-missing', role: 'note' }, A.icon('alert'), h('p', { id: qid }, `Cet exercice (${(ex && ex.id) || '?'}) utilise un type non pris en charge : il sera disponible dans une prochaine version.`)));
      return root;
    }
    const msg = h('p', { class: 'ca-ex-msg', role: 'status', 'aria-live': 'polite' });
    const fb = h('div', { class: 'ca-ex-fb', hidden: true });
    const validate = h('button', { type: 'button', class: 'ca-btn is-primary' }, A.icon('check'), h('span', null, 'Valider'));
    const ctx = {
      retry: !!o.retry,
      figError() { validate.disabled = true; msg.textContent = 'Cet exercice ne peut pas être fait tant que sa figure est indisponible.'; },
    };
    let impl;
    try { impl = BUILD[ex.type](ex, ctx); }
    catch (e) {
      console.warn(e);
      root.appendChild(h('div', { class: 'ca-fig-missing', role: 'note' }, A.icon('alert'), h('p', { id: qid }, `Cet exercice (${ex.id}) est mal formé et ne peut pas s'afficher.`)));
      return root;
    }
    const hist = A.exHistory(ex.id);
    const needsFig = ex.fig && !['hotid', 'hottap', 'hotfind'].includes(ex.type);
    root.append(
      h('div', { class: 'ca-ex-head' },
        o.number ? h('span', { class: 'ca-ex-num' }, o.number) : null,
        h('span', { class: 'ca-chip' }, A.icon(t.icon, { size: 16 }), t.label),
        ex.concept ? h('span', { class: 'ca-ex-concept' }, A.rich(ex.concept)) : null),
      h('p', { class: 'ca-ex-q', id: qid }, A.rich(ex.q || '')),
      ex.doc ? A.ui.doc(ex.doc) : null,
      needsFig ? A.figure(ex.fig, { legend: true }) : null,
      h('div', { class: 'ca-ex-body' }, impl.node),
      msg,
      h('div', { class: 'ca-ex-actions' }, validate),
      fb,
      hist && o.mode !== 'review' ? h('p', { class: 'ca-ex-hist' }, A.icon('clock', { size: 16 }), ' ', hist) : null);
    if (impl.enter) impl.enter.addEventListener('keydown', ev => { if (ev.key === 'Enter') { ev.preventDefault(); validate.click(); } });

    validate.addEventListener('click', () => {
      const a = impl.answer();
      if (!a.complete) { msg.textContent = ''; setTimeout(() => { msg.textContent = a.msg; }, 20); msg.classList.add('is-warn'); return; }
      msg.textContent = ''; msg.classList.remove('is-warn');
      const g = impl.grade(a.value);
      impl.lock();
      impl.reveal(a.value);
      validate.hidden = true;
      const rec = A.progress.recordExercise(ex.id, g.ok, { schedule: o.mode !== 'free', fromReview: o.mode === 'review' });
      let verdict;
      if (g.ok && rec.n === 1) verdict = ['ok', 'Réussi du premier coup.'];
      else if (g.ok) verdict = ['ok', 'Bonne réponse' + (rec.first ? '.' : ' — réussi après erreur.')];
      else verdict = ['ko', rec.ok ? 'Pas cette fois : relis la correction ci-dessous.' : 'Pas encore : relis la correction, puis retente.'];
      const again = h('button', { type: 'button', class: 'ca-btn' }, A.icon('refresh'), h('span', null, 'Nouvelle tentative'));
      again.addEventListener('click', () => {
        const fresh = A.exercise(ex, Object.assign({}, o, { retry: true }));
        root.replaceWith(fresh);
        A.focus(A.qs('.ca-ex-q', fresh) && (A.qs('.ca-ex-q', fresh).setAttribute('tabindex', '-1'), A.qs('.ca-ex-q', fresh)));
      });
      A.replace(fb,
        h('p', { class: 'ca-verdict is-' + verdict[0] }, A.icon(verdict[0] === 'ok' ? 'check' : 'refresh'), h('strong', null, verdict[1])),
        h('div', { class: 'ca-explain' }, h('p', { class: 'ca-explain-k' }, 'Correction expliquée'), A.P(ex.explain || '')),
        o.noRetry ? null : h('div', { class: 'ca-ex-actions' }, again));
      fb.hidden = false;
      A.notify(verdict[1], verdict[0] === 'ok' ? 'ok' : 'ko');
      A.focus((fb.firstChild.setAttribute('tabindex', '-1'), fb.firstChild));
      if (o.onResult) o.onResult(g.ok);
    });
    return root;
  };
})();

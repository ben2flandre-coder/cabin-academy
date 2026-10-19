/* Progression (fondée sur les exercices réalisés, jamais sur « j'ai lu ») et révision espacée (Leitner).
   - résultat d'exercice : state.ex[id] = { n tentatives, first réussi du 1er coup, last 'ok'|'ko', ok réussi au moins une fois, okAt, at } ;
   - cartes de révision : state.srs[clé] = { box 1..6, due AAAA-MM-JJ, n, lapses, at, added } ;
     clés : ex:<idExercice> · vo:<chap>:<i>:fe|ef|td · re:<chap>:<i> · or:<chap>:<i>. */
(function () {
  'use strict';
  const A = window.CAApp;
  const { arr } = A;
  const INTERVALS = [1, 3, 7, 14, 30, 60];
  const SOLID = 0.8;
  const isoNow = () => new Date().toISOString();

  // ---------- exercices ----------
  /** État d'un exercice : todo · first (réussi du 1er coup) · after (réussi après erreur) · review (réussi puis raté) · fail. */
  function exState(id) {
    const r = A.state.ex[id];
    if (!r) return 'todo';
    if (r.ok && r.first) return r.last === 'ok' ? 'first' : 'review';
    if (r.ok) return r.last === 'ok' ? 'after' : 'review';
    return 'fail';
  }
  const EX_LABEL = { todo: 'Pas encore fait', first: 'Réussi du premier coup', after: 'Réussi après erreur', review: 'À revoir (raté au dernier essai)', fail: 'Pas encore réussi' };

  /** Enregistre une tentative. opts.schedule=false : n'affecte pas les échéances de révision (révision libre). */
  function recordExercise(id, ok, opts) {
    const o = opts || {};
    const s = A.state;
    const prev = s.ex[id];
    const t = isoNow();
    const rec = prev ? Object.assign({}, prev) : { n: 0, first: false, last: 'ko', ok: false, okAt: null, at: t };
    rec.n = Math.min(9999, (rec.n || 0) + 1);
    if (!prev) rec.first = !!ok;
    rec.last = ok ? 'ok' : 'ko';
    if (ok && !rec.ok) rec.okAt = t;
    rec.ok = rec.ok || !!ok;
    rec.at = t;
    s.ex[id] = rec;
    if (o.schedule !== false) {
      const key = 'ex:' + id;
      if (!s.srs[key]) s.srs[key] = { box: 1, due: A.addDays(A.today(), 1), n: 0, lapses: 0, at: t, added: t };
      else if (!o.fromReview) {
        // Exercice refait depuis le chapitre : une erreur renvoie la carte en boîte 1 ; une réussite le jour de l'échéance compte comme révision.
        const c = s.srs[key];
        if (!ok) Object.assign(c, { box: 1, due: A.addDays(A.today(), 1), lapses: c.lapses + 1, at: t });
        else if (c.due <= A.today()) review(key, true);
      }
    }
    A.store.save();
    A.events.emit('progress', { id, ok });
    return rec;
  }

  // ---------- statut d'un chapitre ----------
  function chapterProgress(c) {
    const acts = arr(c && c.activities).filter(e => A.isObj(e) && e.id);
    const quiz = arr(c && c.quiz).filter(e => A.isObj(e) && e.id);
    const all = acts.concat(quiz);
    const ex = A.state.ex;
    const done = all.filter(e => ex[e.id]).length;
    const actsDone = acts.filter(e => ex[e.id]).length;
    const quizDone = quiz.filter(e => ex[e.id]).length;
    const quizFirst = quiz.filter(e => ex[e.id] && ex[e.id].first).length;
    const okNow = all.filter(e => ex[e.id] && ex[e.id].last === 'ok').length;
    let status = 'new';
    if (done === 0) status = 'new';
    else if (quiz.length && quizDone === quiz.length) {
      const failing = all.some(e => ex[e.id] && ex[e.id].last === 'ko');
      status = quizFirst / quiz.length >= SOLID && !failing ? 'solid' : 'review';
    } else if (!quiz.length && done === all.length) status = all.every(e => ex[e.id].last === 'ok') ? 'solid' : 'review';
    else if (acts.length && actsDone === acts.length) status = 'quiz';
    else status = 'doing';
    return { total: all.length, done, acts: acts.length, actsDone, quiz: quiz.length, quizDone, quizFirst, okNow, status, pct: all.length ? Math.round((done / all.length) * 100) : 0 };
  }
  const STATUS = {
    new: { label: 'Non commencé', cls: 'new' },
    doing: { label: 'En cours', cls: 'doing' },
    quiz: { label: 'Quiz à passer', cls: 'quiz' },
    solid: { label: 'Solide', cls: 'solid' },
    review: { label: 'À revoir', cls: 'review' },
  };

  /** Prochain chapitre conseillé : le dernier ouvert s'il n'est pas solide, sinon le premier publié non solide après lui. */
  function nextChapter() {
    const list = A.C.plan().filter(p => p.published);
    if (!list.length) return null;
    const last = A.state.last && A.C.chapter(A.state.last.ch);
    if (last) {
      const st = chapterProgress(last).status;
      if (st !== 'solid') return last;
      const i = list.findIndex(p => p.id === last.id);
      for (let k = 1; k <= list.length; k++) {
        const p = list[(i + k) % list.length];
        if (chapterProgress(A.C.chapter(p.id)).status !== 'solid') return A.C.chapter(p.id);
      }
      return null;
    }
    for (const p of list) if (chapterProgress(A.C.chapter(p.id)).status !== 'solid') return A.C.chapter(p.id);
    return null;
  }

  // ---------- cartes de révision ----------
  function addCard(key, dueToday) {
    const s = A.state;
    if (s.srs[key]) return false;
    const t = isoNow();
    s.srs[key] = { box: 1, due: dueToday === false ? A.addDays(A.today(), 1) : A.today(), n: 0, lapses: 0, at: null, added: t };
    A.store.save();
    A.events.emit('srs', key);
    return true;
  }
  function removeCard(key) { if (A.state.srs[key]) { delete A.state.srs[key]; A.store.save(); A.events.emit('srs', key); } }
  /** Résultat d'une révision : réussite → boîte suivante ; erreur → boîte 1 (revient demain, et dans la session en cours). */
  function review(key, ok) {
    const c = A.state.srs[key];
    if (!c) return null;
    const t = isoNow();
    c.n += 1; c.at = t;
    if (ok) { c.box = Math.min(6, c.box + 1); c.due = A.addDays(A.today(), INTERVALS[c.box - 1]); }
    else { c.box = 1; c.lapses += 1; c.due = A.addDays(A.today(), INTERVALS[0]); }
    A.store.save();
    return c;
  }
  const vocabKeys = (ch, i) => ['fe', 'ef', 'td'].map(d => `vo:${ch}:${i}:${d}`);

  /** Décrit une carte à partir de sa clé ; null si le contenu n'existe plus (la carte reste stockée). */
  function resolveCard(key) {
    const p = String(key).split(':');
    if (p[0] === 'ex') {
      const hit = A.C.exercise(p.slice(1).join(':'));
      return hit ? { key, kind: 'ex', ch: hit.ch, ex: hit.ex, label: 'Exercice' } : null;
    }
    const c = A.C.chapter(p[1]);
    if (!c) return null;
    const i = Number(p[2]);
    if (p[0] === 'vo') { const v = arr(c.vocab)[i]; return v && ['fe', 'ef', 'td'].includes(p[3]) ? { key, kind: 'vo', dir: p[3], ch: c, v, label: { fe: 'Vocabulaire FR → EN', ef: 'Vocabulaire EN → FR', td: 'Terme → définition' }[p[3]] } : null; }
    if (p[0] === 're') { const r = arr(c.retain)[i]; return typeof r === 'string' ? { key, kind: 're', ch: c, text: r, label: 'À retenir' } : null; }
    if (p[0] === 'or') { const o = arr(c.oral)[i]; return A.isObj(o) ? { key, kind: 'or', ch: c, o, i, label: 'Oral' } : null; }
    return null;
  }
  function dueCards(day) {
    const d = day || A.today();
    const out = [];
    for (const k of Object.keys(A.state.srs)) { const c = A.state.srs[k]; if (c.due <= d && resolveCard(k)) out.push(k); }
    out.sort((a, b) => A.state.srs[a].due.localeCompare(A.state.srs[b].due) || A.state.srs[a].box - A.state.srs[b].box);
    return out;
  }
  function upcoming(days) {
    const t = A.today();
    const map = new Map();
    for (const k of Object.keys(A.state.srs)) {
      const c = A.state.srs[k];
      if (c.due <= t) continue;
      const n = A.daysBetween(t, c.due);
      if (n > days || !resolveCard(k)) continue;
      map.set(c.due, (map.get(c.due) || 0) + 1);
    }
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }
  /** Toutes les cartes possibles d'un chapitre (révision libre), qu'elles soient programmées ou non. */
  function cardsOfChapter(c, kinds) {
    const k = kinds || ['ex', 'vo', 're', 'or'];
    const out = [];
    if (k.includes('ex')) for (const e of A.C.exercisesOf(c)) out.push('ex:' + e.id);
    if (k.includes('vo')) arr(c.vocab).forEach((v, i) => out.push(...vocabKeys(c.id, i)));
    if (k.includes('re')) arr(c.retain).forEach((r, i) => out.push(`re:${c.id}:${i}`));
    if (k.includes('or')) arr(c.oral).forEach((o, i) => out.push(`or:${c.id}:${i}`));
    return out;
  }

  // ---------- petit bus d'événements ----------
  const subs = new Map();
  A.events = {
    on(type, fn) { if (!subs.has(type)) subs.set(type, new Set()); subs.get(type).add(fn); return () => subs.get(type).delete(fn); },
    emit(type, data) { const s = subs.get(type); if (s) s.forEach(fn => { try { fn(data); } catch (e) { console.warn(e); } }); },
  };

  A.progress = { exState, EX_LABEL, recordExercise, chapterProgress, STATUS, nextChapter, INTERVALS };
  A.srs = { addCard, removeCard, review, resolveCard, dueCards, upcoming, cardsOfChapter, vocabKeys, INTERVALS };
})();

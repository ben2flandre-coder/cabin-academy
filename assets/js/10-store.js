/* Stockage : UN objet versionné dans localStorage (« rmbd-ca:v1 ») + une sauvegarde (« rmbd-ca:backup »).
   - lecture tolérante : stockage absent, illisible, d'un schéma plus ancien ou plus récent → l'appli démarre toujours ;
   - un contenu illisible n'est jamais écrasé sans copie : il est conservé sous « rmbd-ca:corrupt-<date> » ;
   - stockage indisponible (navigation privée, réglage du navigateur) → mode mémoire, signalé à l'écran ;
   - écriture différée (anti-rafale), vidée quand la page passe en arrière-plan ;
   - les clés d'une version antérieure (« rmbd-cabin-binder-v1 », « rmbd-academy-v4 ») ne sont jamais modifiées. */
(function () {
  'use strict';
  const A = window.CAApp;
  const KEY = 'rmbd-ca:v1';
  const BACKUP = 'rmbd-ca:backup';
  const SCHEMA = 1;
  const APP_ID = 'rmbd-cabin-academy';
  const LEGACY_KEYS = ['rmbd-cabin-binder-v1', 'rmbd-academy-v4'];
  const DEFAULT_START = '2026-11-09';
  const LEVELS = ['observe', 'aide', 'controle', 'autonomie'];
  const LIMITS = { importBytes: 3 * 1024 * 1024, ex: 6000, srs: 30000, notes: 400, noteLen: 20000, journal: 3000, short: 200, long: 6000, map: 6000 };

  const isoNow = () => new Date().toISOString();
  const isIso = s => typeof s === 'string' && s.length <= 40 && !Number.isNaN(Date.parse(s));
  const isId = s => typeof s === 'string' && /^[A-Za-z0-9~:._-]{1,96}$/.test(s);
  const int = (v, lo, hi, d) => (Number.isFinite(v) ? A.clamp(Math.round(v), lo, hi) : d);
  const text = (v, max) => (typeof v === 'string' ? v.slice(0, max) : '');

  function blank() {
    const t = isoNow();
    return {
      v: SCHEMA, created: t, updated: t,
      settings: { theme: 'auto', textSize: 'm', startDate: DEFAULT_START, session: 10 },
      welcomed: false, last: null,
      ex: {}, srs: {}, notes: {}, oral: {}, cases: {}, journal: [], seen: {}, drafts: {}, flags: {},
    };
  }

  // ---------- nettoyage : reconstruit un état sûr à partir de n'importe quel objet ----------
  function cleanMap(src, max, fn) {
    const out = {};
    if (!A.isObj(src)) return out;
    let n = 0;
    for (const k of Object.keys(src)) {
      if (n >= max) break;
      if (!isId(k)) continue;
      const v = fn(src[k], k);
      if (v !== undefined) { out[k] = v; n++; }
    }
    return out;
  }
  function cleanJournalEntry(e) {
    if (!A.isObj(e)) return undefined;
    const date = A.isDay(e.date) ? e.date : null;
    const task = text(e.task, LIMITS.short).trim();
    if (!date || !task) return undefined;
    return {
      id: isId(e.id) ? e.id : A.uid(), date,
      ch: isId(e.ch) ? e.ch : '',
      zone: text(e.zone, LIMITS.short).trim(), task,
      level: LEVELS.includes(e.level) ? e.level : 'observe',
      notes: text(e.notes, LIMITS.long), tutor: text(e.tutor, LIMITS.short).trim(),
      created: isIso(e.created) ? e.created : isoNow(), updated: isIso(e.updated) ? e.updated : isoNow(),
    };
  }
  function sanitize(raw) {
    const s = blank();
    if (!A.isObj(raw)) return s;
    if (isIso(raw.created)) s.created = raw.created;
    if (isIso(raw.updated)) s.updated = raw.updated;
    const set = A.isObj(raw.settings) ? raw.settings : {};
    if (['auto', 'light', 'dark'].includes(set.theme)) s.settings.theme = set.theme;
    if (['m', 'l', 'xl', 'xxl'].includes(set.textSize)) s.settings.textSize = set.textSize;
    if (set.startDate === '' || A.isDay(set.startDate)) s.settings.startDate = set.startDate;
    if ([5, 10, 20].includes(set.session)) s.settings.session = set.session;
    s.welcomed = raw.welcomed === true;
    if (A.isObj(raw.last) && isId(raw.last.ch)) s.last = { ch: raw.last.ch, sec: isId(raw.last.sec) ? raw.last.sec : '', at: isIso(raw.last.at) ? raw.last.at : isoNow() };
    s.ex = cleanMap(raw.ex, LIMITS.ex, r => {
      if (!A.isObj(r)) return undefined;
      const ok = r.ok === true || r.last === 'ok';
      return { n: int(r.n, 1, 9999, 1), first: r.first === true, last: r.last === 'ok' ? 'ok' : 'ko', ok, okAt: isIso(r.okAt) ? r.okAt : null, at: isIso(r.at) ? r.at : isoNow() };
    });
    s.srs = cleanMap(raw.srs, LIMITS.srs, r => {
      if (!A.isObj(r) || !A.isDay(r.due)) return undefined;
      return { box: int(r.box, 1, 6, 1), due: r.due, n: int(r.n, 0, 99999, 0), lapses: int(r.lapses, 0, 99999, 0), at: isIso(r.at) ? r.at : null, added: isIso(r.added) ? r.added : isoNow() };
    });
    s.notes = cleanMap(raw.notes, LIMITS.notes, v => (typeof v === 'string' && v.trim() ? v.slice(0, LIMITS.noteLen) : undefined));
    s.oral = cleanMap(raw.oral, LIMITS.map, r => {
      if (!A.isObj(r)) return undefined;
      return { checked: A.arr(r.checked).filter(x => Number.isInteger(x) && x >= 0 && x < 50).slice(0, 50), n: int(r.n, 0, 9999, 0), at: isIso(r.at) ? r.at : isoNow() };
    });
    s.cases = cleanMap(raw.cases, 500, r => {
      if (!A.isObj(r)) return undefined;
      return { step: int(r.step, 0, 50, 0), errors: int(r.errors, 0, 9999, 0), done: r.done === true, runs: int(r.runs, 0, 9999, 0), best: Number.isFinite(r.best) ? int(r.best, 0, 9999, 0) : null, at: isIso(r.at) ? r.at : isoNow() };
    });
    s.journal = A.arr(raw.journal).slice(0, LIMITS.journal).map(cleanJournalEntry).filter(Boolean);
    const ids = new Set();
    for (const e of s.journal) { while (ids.has(e.id)) e.id = A.uid(); ids.add(e.id); }
    s.seen = cleanMap(raw.seen, LIMITS.notes, m => cleanMap(m, 40, d => (A.isDay(d) ? d : undefined)));
    if (A.isObj(raw.drafts) && A.isObj(raw.drafts.journal)) {
      const d = raw.drafts.journal;
      s.drafts.journal = { date: text(d.date, 10), ch: text(d.ch, 16), zone: text(d.zone, LIMITS.short), task: text(d.task, LIMITS.short), level: text(d.level, 16), notes: text(d.notes, LIMITS.long), tutor: text(d.tutor, LIMITS.short), id: text(d.id, 96) };
    }
    s.flags = cleanMap(raw.flags, 60, v => (typeof v === 'boolean' ? v : (typeof v === 'string' ? v.slice(0, 80) : undefined)));
    return s;
  }

  // ---------- migrations de schéma : MIGRATIONS[n] fait passer un état du schéma n au schéma n+1 ----------
  const MIGRATIONS = {
    // Schéma 0 (préversions) : résultats d'exercices sous « done » {id: true}, journal sous « logs ».
    0: old => {
      const s = Object.assign({}, old);
      if (!A.isObj(s.ex) && A.isObj(s.done)) {
        s.ex = {};
        for (const k of Object.keys(s.done)) if (s.done[k]) s.ex[k] = { n: 1, first: false, last: 'ok', ok: true, at: isoNow() };
      }
      if (!Array.isArray(s.journal) && Array.isArray(s.logs)) s.journal = s.logs;
      s.v = 1;
      return s;
    },
  };
  function migrate(obj) {
    let s = obj;
    let v = Number.isInteger(s.v) ? s.v : 0;
    let guard = 0;
    while (v < SCHEMA && guard++ < 20) {
      const step = MIGRATIONS[v];
      s = step ? step(s) : Object.assign({}, s, { v: v + 1 });
      v = Number.isInteger(s.v) ? s.v : v + 1;
    }
    return s;
  }

  // ---------- accès au stockage ----------
  const status = { mode: 'local', reason: '', corruptKey: '', restoredBackup: false, newer: false, quota: false, firstRun: false, migratedFrom: null, lastSaved: null };
  let ls = null;
  let state = blank();
  let dirty = false;
  let timer = 0;
  const listeners = new Set();
  const emit = what => listeners.forEach(fn => { try { fn(what); } catch (e) { /* un écouteur ne casse pas le stockage */ } });

  function openStorage() {
    try {
      const s = window.localStorage;
      if (!s) throw new Error('localStorage absent');
      const probe = 'rmbd-ca:probe';
      s.setItem(probe, '1');
      s.removeItem(probe);
      return s;
    } catch (e) {
      status.mode = 'memory';
      status.reason = (e && e.name) || 'indisponible';
      return null;
    }
  }
  const read = key => { try { return ls ? ls.getItem(key) : null; } catch (e) { return null; } };
  const write = (key, value) => {
    if (!ls) return false;
    try { ls.setItem(key, value); return true; }
    catch (e) { return false; }
  };
  const stamp = () => new Date().toISOString().replace(/[-:]/g, '').slice(0, 15);

  function readBackup() {
    const raw = read(BACKUP);
    if (!raw) return null;
    try {
      const b = JSON.parse(raw);
      if (!A.isObj(b) || !A.isObj(b.data)) return null;
      return { savedAt: isIso(b.savedAt) ? b.savedAt : null, reason: text(b.reason, 80), data: sanitize(migrate(b.data)) };
    } catch (e) { return null; }
  }

  function load() {
    ls = openStorage();
    status.corruptKey = ''; status.restoredBackup = false; status.newer = false; status.firstRun = false; status.migratedFrom = null;
    if (!ls) { state = blank(); status.firstRun = true; return state; }
    const raw = read(KEY);
    if (raw === null) { state = blank(); status.firstRun = true; return state; }
    let obj = null;
    try { obj = JSON.parse(raw); } catch (e) { obj = null; }
    if (!A.isObj(obj)) {
      // Contenu illisible : on le met de côté tel quel, puis on repart de la sauvegarde si elle existe.
      const key = `rmbd-ca:corrupt-${stamp()}`;
      if (write(key, raw)) status.corruptKey = key;
      const b = readBackup();
      if (b) { state = b.data; status.restoredBackup = true; } else state = blank();
      dirty = true; flush();
      return state;
    }
    const v = Number.isInteger(obj.v) ? obj.v : 0;
    if (v > SCHEMA) {
      // Données écrites par une version plus récente de l'appli : copie intacte, lecture de ce qu'on comprend.
      const key = `rmbd-ca:newer-${stamp()}`;
      if (write(key, raw)) status.corruptKey = key;
      status.newer = true;
      state = sanitize(obj);
    } else if (v < SCHEMA) {
      status.migratedFrom = v;
      write(BACKUP, JSON.stringify({ savedAt: isoNow(), reason: `avant migration du schéma ${v}`, data: obj }));
      state = sanitize(migrate(obj));
      dirty = true; flush();
    } else {
      state = sanitize(obj);
    }
    return state;
  }

  function flush() {
    clearTimeout(timer); timer = 0;
    if (!dirty) return true;
    state.v = SCHEMA;
    state.updated = isoNow();
    if (!ls) { dirty = false; return false; }
    let ok = false;
    try { ls.setItem(KEY, JSON.stringify(state)); ok = true; }
    catch (e) { ok = false; }
    dirty = false;
    const was = status.quota;
    status.quota = !ok;
    if (ok) status.lastSaved = state.updated;
    if (was !== status.quota) emit('status');
    return ok;
  }
  /** Signale une modification : l'écriture est regroupée (400 ms) pour éviter les rafales. */
  function save() {
    dirty = true;
    if (!timer) timer = setTimeout(flush, 400);
  }

  function backup(reason) {
    return write(BACKUP, JSON.stringify({ savedAt: isoNow(), reason: text(reason, 80), data: state }));
  }

  // ---------- export / import ----------
  function exportData() {
    flush();
    return { app: APP_ID, kind: 'export', schema: SCHEMA, exportedAt: isoNow(), appVersion: A.VERSION, data: JSON.parse(JSON.stringify(state)) };
  }
  function summary(s) {
    const ex = Object.keys(s.ex);
    return {
      exercices: ex.length, reussis: ex.filter(k => s.ex[k].ok).length, cartes: Object.keys(s.srs).length,
      carnet: s.journal.length, notes: Object.keys(s.notes).length, cas: Object.keys(s.cases).filter(k => s.cases[k].done).length,
      oraux: Object.keys(s.oral).length,
    };
  }
  const KNOWN = { v: 'number', created: 'string', updated: 'string', settings: 'object', welcomed: 'boolean', last: 'object|null', ex: 'object', srs: 'object', notes: 'object', oral: 'object', cases: 'object', journal: 'array', seen: 'object', drafts: 'object', flags: 'object' };
  const typeOf = v => (v === null ? 'null' : Array.isArray(v) ? 'array' : typeof v);

  /** Validation stricte d'un texte de fichier d'export. Ne modifie rien. → { ok, errors[], warnings[], data, summary, exportedAt } */
  function inspectImport(textIn) {
    const res = { ok: false, errors: [], warnings: [], data: null, summary: null, exportedAt: null };
    if (typeof textIn !== 'string' || !textIn.trim()) { res.errors.push('Le fichier est vide.'); return res; }
    if (textIn.length > LIMITS.importBytes) { res.errors.push('Le fichier est trop volumineux (plus de 3 Mo) : ce n\'est pas un export de cette application.'); return res; }
    let obj;
    try { obj = JSON.parse(textIn); } catch (e) { res.errors.push('Le fichier n\'est pas un fichier JSON lisible.'); return res; }
    if (!A.isObj(obj)) { res.errors.push('Le fichier ne contient pas un objet d\'export.'); return res; }
    if (obj.app !== APP_ID) { res.errors.push('Ce fichier ne vient pas de RMBD Cabin Academy (champ « app » absent ou différent).'); return res; }
    if (!Number.isInteger(obj.schema) || obj.schema < 0) { res.errors.push('Numéro de schéma absent ou invalide.'); return res; }
    if (obj.schema > SCHEMA) { res.errors.push(`Ce fichier a été créé par une version plus récente de l'application (schéma ${obj.schema}). Mets l'application à jour avant de l'importer.`); return res; }
    if (!A.isObj(obj.data)) { res.errors.push('Le fichier ne contient pas de données (champ « data »).'); return res; }
    const d = obj.data;
    for (const k of Object.keys(d)) {
      if (!Object.prototype.hasOwnProperty.call(KNOWN, k)) { res.warnings.push(`Champ inconnu ignoré : « ${k.slice(0, 40)} ».`); continue; }
      const t = typeOf(d[k]);
      if (!KNOWN[k].split('|').includes(t)) res.errors.push(`Champ « ${k} » : type ${t} au lieu de ${KNOWN[k]}.`);
    }
    if (A.isObj(d.ex) && Object.keys(d.ex).length > LIMITS.ex) res.errors.push('Trop de résultats d\'exercices pour un export normal.');
    if (A.isObj(d.srs) && Object.keys(d.srs).length > LIMITS.srs) res.errors.push('Trop de cartes de révision pour un export normal.');
    if (Array.isArray(d.journal) && d.journal.length > LIMITS.journal) res.errors.push('Trop d\'entrées de carnet pour un export normal.');
    if (res.errors.length) return res;
    const before = { ex: A.isObj(d.ex) ? Object.keys(d.ex).length : 0, journal: Array.isArray(d.journal) ? d.journal.length : 0, srs: A.isObj(d.srs) ? Object.keys(d.srs).length : 0 };
    const clean = sanitize(migrate(Object.assign({}, d, { v: obj.schema })));
    const after = { ex: Object.keys(clean.ex).length, journal: clean.journal.length, srs: Object.keys(clean.srs).length };
    if (after.ex < before.ex) res.warnings.push(`${before.ex - after.ex} résultat(s) d'exercice invalide(s) ignoré(s).`);
    if (after.journal < before.journal) res.warnings.push(`${before.journal - after.journal} entrée(s) de carnet invalide(s) ignorée(s).`);
    if (after.srs < before.srs) res.warnings.push(`${before.srs - after.srs} carte(s) de révision invalide(s) ignorée(s).`);
    res.ok = true; res.data = clean; res.summary = summary(clean);
    res.exportedAt = isIso(obj.exportedAt) ? obj.exportedAt : null;
    return res;
  }
  const newer = (a, b) => (Date.parse(a || 0) || 0) >= (Date.parse(b || 0) || 0);
  function mergeInto(dst, src) {
    for (const k of Object.keys(src.ex)) {
      const a = dst.ex[k], b = src.ex[k];
      if (!a) { dst.ex[k] = b; continue; }
      const keep = b.n > a.n || (b.n === a.n && newer(b.at, a.at)) ? Object.assign({}, b) : a;
      keep.ok = a.ok || b.ok;
      keep.okAt = keep.okAt || a.okAt || b.okAt || null;
      dst.ex[k] = keep;
    }
    for (const k of Object.keys(src.srs)) { const a = dst.srs[k], b = src.srs[k]; if (!a || (b.at && (!a.at || !newer(a.at, b.at)))) dst.srs[k] = b; }
    for (const k of Object.keys(src.notes)) {
      const a = dst.notes[k], b = src.notes[k];
      if (!a) dst.notes[k] = b;
      else if (a.trim() !== b.trim() && !a.includes(b.trim())) dst.notes[k] = (a + '\n\n— Notes importées —\n' + b).slice(0, LIMITS.noteLen);
    }
    for (const name of ['oral', 'cases']) for (const k of Object.keys(src[name])) { const a = dst[name][k], b = src[name][k]; if (!a || !newer(a.at, b.at)) dst[name][k] = b; }
    const byId = new Map(dst.journal.map(e => [e.id, e]));
    for (const e of src.journal) { const a = byId.get(e.id); if (!a || !newer(a.updated, e.updated)) byId.set(e.id, e); }
    dst.journal = Array.from(byId.values());
    for (const ch of Object.keys(src.seen)) dst.seen[ch] = Object.assign({}, src.seen[ch], dst.seen[ch] || {});
    dst.welcomed = dst.welcomed || src.welcomed;
    if (src.last && (!dst.last || !newer(dst.last.at, src.last.at))) dst.last = src.last;
    return dst;
  }
  /** Applique un import validé. mode : 'merge' (fusion) ou 'replace' (remplacement). Sauvegarde automatique avant. */
  function applyImport(data, mode) {
    flush();
    const saved = backup(mode === 'replace' ? 'avant import (remplacement)' : 'avant import (fusion)');
    const incoming = sanitize(data);
    if (mode === 'replace') { const keepFlags = state.flags; state = incoming; state.flags = Object.assign({}, incoming.flags, keepFlags); }
    else state = mergeInto(state, incoming);
    dirty = true; flush(); emit('replaced');
    return { backup: saved, summary: summary(state) };
  }
  function restoreBackup() {
    const b = readBackup();
    if (!b) return false;
    const current = JSON.stringify(state);
    state = b.data;
    // l'état remplacé devient à son tour la sauvegarde : la restauration est réversible
    write(BACKUP, JSON.stringify({ savedAt: isoNow(), reason: 'avant restauration de la sauvegarde', data: JSON.parse(current) }));
    dirty = true; flush(); emit('replaced');
    return true;
  }
  function reset() {
    flush();
    const saved = backup('avant réinitialisation');
    const keep = { theme: state.settings.theme, textSize: state.settings.textSize };
    state = blank();
    Object.assign(state.settings, keep);
    dirty = true; flush(); emit('replaced');
    return saved;
  }

  // ---------- données de l'ancienne application (lecture seule) ----------
  function legacy() {
    const out = { present: false, keys: [], logs: [], raw: {} };
    for (const k of LEGACY_KEYS) {
      const raw = read(k);
      if (raw === null) continue;
      out.present = true; out.keys.push(k);
      try { out.raw[k] = JSON.parse(raw); } catch (e) { out.raw[k] = raw.slice(0, 200000); }
    }
    const binder = out.raw['rmbd-cabin-binder-v1'];
    if (A.isObj(binder) && Array.isArray(binder.logs)) out.logs = binder.logs.filter(A.isObj).slice(0, 500);
    return out;
  }

  // ---------- synchronisation entre onglets et sortie de page ----------
  window.addEventListener('storage', ev => {
    if (ev.key !== KEY || ev.newValue === null || !ls) return;
    if (dirty) return;                                 // une saisie locale est en attente : elle sera écrite ensuite
    try { const obj = JSON.parse(ev.newValue); if (A.isObj(obj)) { state = sanitize(migrate(obj)); emit('external'); } } catch (e) { /* ignoré */ }
  });
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush(); });
  window.addEventListener('pagehide', flush);

  A.store = {
    KEY, BACKUP, SCHEMA, APP_ID, LEVELS, LEGACY_KEYS, DEFAULT_START, LIMITS, status,
    load, save, flush, backup, readBackup, restoreBackup, reset, exportData, inspectImport, applyImport, summary, legacy, sanitize, blank,
    subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); },
  };
  Object.defineProperty(A, 'state', { get: () => state, configurable: true });
})();

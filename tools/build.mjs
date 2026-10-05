#!/usr/bin/env node
// Validation + bundle du contenu.  Usage : node tools/build.mjs [--check] [id…]
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const CHECK_ONLY = args.includes('--check');
const ONLY = args.filter(a => !a.startsWith('--'));
const STRICT = args.includes('--strict');

const errors = [];
const warns = [];
const E = (where, msg) => errors.push(`✖ ${where}: ${msg}`);
const W = (where, msg) => warns.push(`⚠ ${where}: ${msg}`);

// ---------- chargement ----------
const CA = { chapters: [], figures: [], glossary: [], sources: [], cases: [], files: {} };
const api = {
  addChapter(c) { CA.chapters.push({ ...c, __file: cur }); },
  addFigures(a) { for (const f of a) CA.figures.push({ ...f, __file: cur }); },
  addGlossary(a) { for (const g of a) CA.glossary.push({ ...g, __file: cur }); },
  addSources(a) { for (const s of a) CA.sources.push({ ...s, __file: cur }); },
  addCases(a) { for (const c of a) CA.cases.push({ ...c, __file: cur }); },
};
let cur = '';
function loadDir(dir) {
  const d = path.join(ROOT, dir);
  if (!fs.existsSync(d)) return;
  for (const f of fs.readdirSync(d).filter(f => f.endsWith('.js')).sort()) {
    cur = `${dir}/${f}`;
    const code = fs.readFileSync(path.join(d, f), 'utf8');
    try { vm.runInNewContext(code, { CA: api }, { filename: cur, timeout: 2000 }); }
    catch (e) { E(cur, `erreur de chargement : ${e.message}`); }
  }
}
for (const d of ['content/figs', 'content/chapters', 'content/glossary', 'content/cases']) loadDir(d);
if (fs.existsSync(path.join(ROOT, 'content/sources.js'))) {
  cur = 'content/sources.js';
  try { vm.runInNewContext(fs.readFileSync(path.join(ROOT, cur), 'utf8'), { CA: api }, { filename: cur }); }
  catch (e) { E(cur, `erreur de chargement : ${e.message}`); }
}

// ---------- utilitaires ----------
const isStr = s => typeof s === 'string' && s.trim().length > 0;
const arr = a => Array.isArray(a) ? a : [];
const words = s => (String(s || '').match(/[\p{L}\p{N}’'-]+/gu) || []).length;
const COMPS = ['C1', 'C2', 'C3', 'C4', 'C5'];
const DOMAINS = ['M', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
const TYPES = ['mcq', 'multi', 'order', 'match', 'sort', 'input', 'hotid', 'hottap', 'hotfind'];
const figById = new Map(CA.figures.map(f => [f.id, f]));
const srcIds = new Set(CA.sources.map(s => s.id));
const chById = new Map(CA.chapters.map(c => [c.id, c]));

// pour tout texte : collecter les chaînes
function* strings(x, p = '') {
  if (typeof x === 'string') yield [p, x];
  else if (Array.isArray(x)) for (let i = 0; i < x.length; i++) yield* strings(x[i], `${p}[${i}]`);
  else if (x && typeof x === 'object') for (const k of Object.keys(x)) { if (k === '__file') continue; yield* strings(x[k], p ? `${p}.${k}` : k); }
}
const svgCache = new Map();
function svgOf(fig) {
  if (!svgCache.has(fig.id)) {
    const p = path.join(ROOT, 'assets/fig', fig.file || `${fig.id}.svg`);
    svgCache.set(fig.id, fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null);
  }
  return svgCache.get(fig.id);
}

// ---------- figures ----------
const seenFig = new Set();
for (const f of CA.figures) {
  const w = `figure ${f.id}`;
  if (!/^[a-z][a-z0-9-]+$/.test(f.id || '')) E(w, 'id invalide');
  if (seenFig.has(f.id)) E(w, 'id dupliqué'); seenFig.add(f.id);
  for (const k of ['title', 'caption', 'alt', 'purpose', 'provenance', 'rights']) if (!isStr(f[k])) E(w, `champ ${k} manquant`);
  if (isStr(f.alt) && f.alt.length < 60) W(w, 'alt trop court (décris la figure pour un lecteur d’écran)');
  if (!arr(f.chapters).length) E(w, 'chapters[] manquant');
  const svg = svgOf(f);
  if (!svg) { E(w, `fichier assets/fig/${f.file || f.id + '.svg'} introuvable`); continue; }
  if (!/viewBox="0 0 1000 \d+"/.test(svg)) E(w, 'viewBox "0 0 1000 H" requis');
  if (/<script|<style|<image|<foreignObject|\son\w+=|href="http/i.test(svg)) E(w, 'balise ou attribut interdit (script/style/image/foreignObject/on*/http)');
  if (/#[0-9a-fA-F]{3,8}\b/.test(svg.replace(/&#\d+;/g, ''))) E(w, 'couleur hex en dur interdite (utilise les classes)');
  if (!/<title/.test(svg) || !/<desc/.test(svg)) E(w, '<title> et <desc> requis');
  for (const m of svg.matchAll(/font-size="?(\d+(?:\.\d+)?)/g)) if (+m[1] < 36) E(w, `font-size ${m[1]} < 36`);
  const dataParts = new Set([...svg.matchAll(/data-part="([^"]+)"/g)].map(m => m[1]));
  const badges = new Set([...svg.matchAll(/data-badge="([^"]+)"/g)].map(m => m[1]));
  const pids = new Set();
  for (const p of arr(f.parts)) {
    if (!isStr(p.id) || !isStr(p.fr) || !isStr(p.en) || typeof p.n !== 'number') E(w, `partie mal formée ${JSON.stringify(p).slice(0, 60)}`);
    if (pids.has(p.id)) E(w, `partie dupliquée ${p.id}`); pids.add(p.id);
    if (!dataParts.has(p.id)) E(w, `partie "${p.id}" absente du SVG (data-part)`);
    if (!badges.has(p.id)) W(w, `badge manquant pour "${p.id}"`);
  }
  for (const d of dataParts) if (!pids.has(d)) E(w, `data-part "${d}" du SVG non déclaré dans parts[]`);
  const ids = [...svg.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  for (const id of ids) if (!['t', 'd'].includes(id) && !/^[a-z0-9-]+$/.test(id)) W(w, `id interne "${id}" douteux`);
  // les ids internes doivent être préfixés (plusieurs SVG inlinés dans une page)
  for (const id of ids) if (!['t', 'd'].includes(id) && !id.startsWith(f.id.split('-')[0] + '-')) W(w, `id interne "${id}" non préfixé par "${f.id.split('-')[0]}-"`);
}

// ---------- chapitres ----------
const orders = new Set();
const allExIds = new Set();
const sentenceSeen = new Map();
const stats = [];
function checkDoc(doc, w) {
  if (!doc) return;
  if (!isStr(doc.title) || !/fictif/i.test(doc.title)) E(w, 'doc.title doit contenir « fictif »');
  if (!arr(doc.lines).length && !doc.table) E(w, 'doc sans lines ni table');
  for (const [, s] of strings(doc)) for (const m of s.matchAll(/\b([A-Z]{1,3}\d{4,}|\d{5}[-_]\d{2,})\b/g)) if (!/EX-/.test(s)) W(w, `référence « ${m[0]} » sans préfixe EX-`);
}
function checkFigRef(fid, w, partIds = []) {
  const f = figById.get(fid);
  if (!f) { E(w, `figure "${fid}" inconnue`); return null; }
  for (const p of partIds) if (!arr(f.parts).some(x => x.id === p)) E(w, `partie "${p}" inconnue dans la figure ${fid}`);
  return f;
}
function checkExo(ex, w, cid, kind) {
  if (!ex || typeof ex !== 'object') return E(w, 'exercice invalide');
  if (!isStr(ex.id) || !ex.id.startsWith(cid + '-')) E(w, `id "${ex.id}" doit commencer par "${cid}-"`);
  if (allExIds.has(ex.id)) E(w, `id d’exercice dupliqué ${ex.id}`); allExIds.add(ex.id);
  if (!TYPES.includes(ex.type)) return E(w, `type "${ex.type}" inconnu`);
  if (!isStr(ex.q) || ex.q.length < 15) E(w, 'consigne q manquante/trop courte');
  if (!isStr(ex.explain) || words(ex.explain) < 12) E(w, 'explain (correction expliquée) manquant ou trop court');
  if (!isStr(ex.concept)) E(w, 'concept manquant');
  checkDoc(ex.doc, w + '.doc');
  const opts = arr(ex.options);
  switch (ex.type) {
    case 'mcq':
      if (opts.length < 3 || opts.length > 4) E(w, 'mcq : 3 ou 4 options');
      if (opts.filter(o => o.ok).length !== 1) E(w, 'mcq : exactement 1 option ok');
      opts.forEach((o, i) => { if (!isStr(o.t)) E(w, `option ${i} sans t`); if (!isStr(o.why) || words(o.why) < 4) E(w, `option ${i} : why manquant`); });
      break;
    case 'multi':
      if (opts.length < 4 || opts.length > 6) E(w, 'multi : 4 à 6 options');
      if (opts.filter(o => o.ok).length < 2) E(w, 'multi : ≥ 2 options ok');
      if (opts.every(o => o.ok)) E(w, 'multi : au moins une option fausse');
      opts.forEach((o, i) => { if (!isStr(o.t)) E(w, `option ${i} sans t`); if (!isStr(o.why) || words(o.why) < 4) E(w, `option ${i} : why manquant`); });
      break;
    case 'order':
      if (arr(ex.items).length < 3 || arr(ex.items).length > 7) E(w, 'order : 3 à 7 items');
      if (new Set(arr(ex.items)).size !== arr(ex.items).length) E(w, 'order : items dupliqués');
      break;
    case 'match':
      if (arr(ex.pairs).length < 3 || arr(ex.pairs).length > 6) E(w, 'match : 3 à 6 paires');
      for (const p of arr(ex.pairs)) if (!isStr(p.l) || !isStr(p.r)) E(w, 'paire sans l/r');
      if (new Set(arr(ex.pairs).map(p => p.r)).size !== arr(ex.pairs).length) E(w, 'match : colonnes r dupliquées');
      break;
    case 'sort':
      if (arr(ex.bins).length < 2 || arr(ex.bins).length > 4) E(w, 'sort : 2 à 4 catégories');
      if (arr(ex.items).length < 4) E(w, 'sort : ≥ 4 items');
      for (const it of arr(ex.items)) { if (!isStr(it.t) || !isStr(it.why)) E(w, 'sort : item sans t/why'); if (!(it.bin >= 0 && it.bin < arr(ex.bins).length)) E(w, `sort : bin invalide pour "${it.t}"`); }
      break;
    case 'input':
      if (!arr(ex.answers).length || !arr(ex.answers).every(isStr)) E(w, 'input : answers[] requis');
      break;
    case 'hotid': {
      const f = checkFigRef(ex.fig, w);
      if (!f) break;
      if (!arr(ex.targets).length) E(w, 'hotid : targets requis');
      checkFigRef(ex.fig, w, arr(ex.targets).map(t => t.part));
      if (ex.pool) checkFigRef(ex.fig, w, ex.pool);
      if ((ex.pool || f.parts || []).length < 3) E(w, 'hotid : la liste de choix doit contenir ≥ 3 noms');
      break;
    }
    case 'hottap': {
      if (!arr(ex.targets).length) E(w, 'hottap : targets requis');
      checkFigRef(ex.fig, w, arr(ex.targets).map(t => t.part));
      for (const t of arr(ex.targets)) if (!isStr(t.prompt)) E(w, 'hottap : prompt manquant');
      break;
    }
    case 'hotfind': {
      if (!arr(ex.targets).length) E(w, 'hotfind : targets requis');
      const f = checkFigRef(ex.fig, w, arr(ex.targets));
      if (f && arr(f.parts).length <= arr(ex.targets).length) E(w, 'hotfind : il faut des leurres (parties non ciblées)');
      for (const t of arr(ex.targets)) if (!isStr((ex.notes || {})[t])) W(w, `hotfind : note manquante pour ${t}`);
      break;
    }
  }
  if (ex.fig && !['hotid', 'hottap', 'hotfind'].includes(ex.type)) checkFigRef(ex.fig, w);
}

for (const c of CA.chapters) {
  const w = `chapitre ${c.id || '?'} (${c.__file})`;
  if (!/^[a-z]\d{1,2}$/.test(c.id || '')) E(w, 'id invalide');
  if (!DOMAINS.includes(c.domain)) E(w, 'domain invalide');
  if (typeof c.order !== 'number') E(w, 'order manquant'); else { if (orders.has(c.order)) E(w, 'order dupliqué'); orders.add(c.order); }
  for (const k of ['title', 'short']) if (!isStr(c[k])) E(w, `${k} manquant`);
  if (!(c.minutes >= 10 && c.minutes <= 90)) E(w, 'minutes : 10..90');
  if (!arr(c.comps).length || !c.comps.every(x => COMPS.includes(x))) E(w, 'comps invalide');
  for (const p of arr(c.prereq)) if (!CA.chapters.some(x => x.id === p)) W(w, `prereq "${p}" non trouvé (chapitre pas encore écrit ?)`);
  for (const s of arr(c.sources)) if (!srcIds.has(s)) W(w, `source "${s}" absente de content/sources.js`);
  if (!arr(c.sources).length) W(w, 'sources[] vide');

  if (arr(c.objectives).length < 3 || arr(c.objectives).length > 6) E(w, 'objectives : 3 à 6');
  if (words(arr(c.why).join(' ')) < 70) E(w, 'why : trop court (≥ 70 mots)');
  if (!c.discover || !isStr(c.discover.intro) || arr(c.discover.look).length < 2) E(w, 'discover incomplet (fig, intro, look≥2)');
  else checkFigRef(c.discover.fig, w + '.discover');
  const ex = arr(c.explain);
  if (ex.length < 3) E(w, 'explain : ≥ 3 blocs');
  let expWords = 0;
  ex.forEach((b, i) => {
    if (!isStr(b.h)) E(w, `explain[${i}] sans h`);
    if (!arr(b.p).length && !arr(b.list).length && !b.table) E(w, `explain[${i}] vide`);
    expWords += words(arr(b.p).join(' ')) + words(arr(b.list).join(' '));
    if (b.fig) checkFigRef(b.fig, `${w}.explain[${i}]`);
    if (b.callout && !['tip', 'warn', 'info', 'doc'].includes(b.callout.kind)) E(w, `explain[${i}].callout.kind invalide`);
    if (b.table && (!arr(b.table.head).length || !arr(b.table.rows).length)) E(w, `explain[${i}].table incomplet`);
  });
  if (expWords < 450) E(w, `explain : ${expWords} mots (< 450)`);
  const vocab = arr(c.vocab);
  if (vocab.length < 8 || vocab.length > 18) E(w, `vocab : 8 à 18 termes (${vocab.length})`);
  vocab.forEach((v, i) => { if (!isStr(v.fr) || !isStr(v.en) || !isStr(v.def) || words(v.def) < 5) E(w, `vocab[${i}] incomplet`); });
  if (!c.example || !isStr(c.example.title) || words(arr(c.example.body).join(' ')) < 80) E(w, 'example : titre + ≥ 80 mots');
  else checkDoc(c.example.doc, w + '.example.doc');
  if (!c.demo || arr(c.demo.steps).length < 4) E(w, 'demo : ≥ 4 étapes');
  else {
    const f = checkFigRef(c.demo.fig, w + '.demo');
    c.demo.steps.forEach((s, i) => { if (!isStr(s.label) || !isStr(s.text)) E(w, `demo.steps[${i}] incomplet`); if (f) checkFigRef(c.demo.fig, `${w}.demo.steps[${i}]`, arr(s.hl)); });
  }
  const acts = arr(c.activities);
  if (acts.length < 2 || acts.length > 4) E(w, 'activities : 2 à 4');
  if (new Set(acts.map(a => a.type)).size < 2) E(w, 'activities : ≥ 2 types différents');
  acts.forEach((a, i) => checkExo(a, `${w}.activities[${i}]`, c.id));
  if (arr(c.mistakes).length < 4) E(w, 'mistakes : ≥ 4');
  arr(c.mistakes).forEach((m, i) => { if (!isStr(m.error) || !isStr(m.why) || !isStr(m.better)) E(w, `mistakes[${i}] incomplet`); });
  const sit = arr(c.situations);
  if (sit.length < 1 || sit.length > 2) E(w, 'situations : 1 à 2');
  sit.forEach((s, i) => {
    const ww = `${w}.situations[${i}]`;
    if (!isStr(s.title) || words(arr(s.context).join(' ')) < 40 || !isStr(s.question) || !isStr(s.debrief)) E(ww, 'situation incomplète (title, context ≥ 40 mots, question, debrief)');
    const o = arr(s.options); if (o.length < 3 || o.length > 4 || o.filter(x => x.ok).length !== 1) E(ww, '3-4 options, 1 seule ok');
    o.forEach((x, j) => { if (!isStr(x.t) || !isStr(x.why)) E(ww, `option ${j} sans t/why`); });
    if (s.fig) checkFigRef(s.fig, ww);
  });
  const quiz = arr(c.quiz);
  if (quiz.length < 6 || quiz.length > 9) E(w, 'quiz : 6 à 9 items');
  if (new Set(quiz.map(a => a.type)).size < 3) E(w, 'quiz : ≥ 3 types différents');
  if (quiz.filter(q => q.type === 'mcq').length > Math.ceil(quiz.length / 2)) E(w, 'quiz : > 50 % de QCM');
  quiz.forEach((a, i) => checkExo(a, `${w}.quiz[${i}]`, c.id));
  if (arr(c.retain).length < 4 || arr(c.retain).length > 8) E(w, 'retain : 4 à 8');
  if (!c.next || !isStr(c.next.teaser)) E(w, 'next.teaser manquant'); else if (c.next.id && !CA.chapters.some(x => x.id === c.next.id)) W(w, `next.id "${c.next.id}" non trouvé`);
  if (arr(c.oral).length < 2) E(w, 'oral : ≥ 2 questions');
  arr(c.oral).forEach((o, i) => { if (!isStr(o.q) || arr(o.expected).length < 3 || words(o.model) < 30) E(w, `oral[${i}] incomplet (q, expected≥3, model≥30 mots)`); });
  const mx = arr(c.matrix);
  if (mx.length < 2) E(w, 'matrix : ≥ 2 lignes');
  const exIds = new Set([...acts, ...quiz].map(x => x.id));
  mx.forEach((m, i) => {
    if (!isStr(m.savoir) || !isStr(m.savoirFaire) || !isStr(m.proof)) E(w, `matrix[${i}] incomplet`);
    if (!COMPS.includes(m.comp)) E(w, `matrix[${i}].comp invalide`);
    if (!arr(m.ex).length) E(w, `matrix[${i}].ex vide`);
    for (const e of arr(m.ex)) if (!exIds.has(e)) E(w, `matrix[${i}].ex "${e}" n’existe pas dans le chapitre`);
  });
  arr(c.parts).forEach((p, i) => {
    for (const k of ['fr', 'en', 'fn', 'where', 'interfaces', 'risks', 'vigilance']) if (!isStr(p[k])) E(w, `parts[${i}].${k} manquant`);
    if (p.fig) checkFigRef(p.fig, `${w}.parts[${i}]`, p.part ? [p.part] : []);
  });
  if (['B', 'D'].includes(c.domain) && arr(c.parts).length < 5) E(w, 'parts : ≥ 5 fiches requises pour les domaines B et D');

  // lint de texte
  let total = 0;
  for (const [p, s] of strings(c)) {
    total += words(s);
    for (const m of s.matchAll(/\[\[([^\]]+)\]\]/g)) { /* vérifié après glossaire */ }
    if (/<\/?[a-z][^>]*>/i.test(s)) E(w, `HTML interdit dans ${p}`);
    if (/\b\d+([.,]\d+)?\s?(N\.?m|N·m|daN\.?m|lbf[.\- ]?in|in[.\- ]?lb|ft[.\- ]?lb)\b/i.test(s)) W(w, `valeur de couple possible dans ${p} : « ${s.match(/\b\d+([.,]\d+)?\s?(N\.?m|N·m|daN\.?m|lbf[.\- ]?in|in[.\- ]?lb|ft[.\- ]?lb)\b/i)[0]} »`);
    if (/à confirmer dans le dossier/i.test(s)) W(w, `formule « à confirmer dans le dossier » dans ${p}`);
    if (/\b(stoppe|stopper)[, ]+(protège|protéger)[, ]+(demande|demander)/i.test(s)) E(w, `slogan « stoppe, protège, demande » dans ${p}`);
    if (/lorem|TODO|À COMPLÉTER|XXX/.test(s)) E(w, `texte provisoire dans ${p}`);
    if (!/\bEX-/.test(s) && /\b(P\/N|PN)\s*[:=]?\s*[A-Z0-9]{2,}[-/][A-Z0-9-]{4,}/.test(s)) W(w, `référence P/N sans préfixe EX- dans ${p}`);
    for (const sentence of s.split(/(?<=[.!?])\s+/)) {
      const n = sentence.toLowerCase().replace(/[^a-zà-ÿ0-9 ]/g, '').trim();
      if (words(n) >= 14) { const prev = sentenceSeen.get(n); if (prev && prev !== c.id) W(w, `phrase identique à celle de ${prev} : « ${sentence.slice(0, 70)}… »`); else sentenceSeen.set(n, c.id); }
    }
  }
  stats.push({ id: c.id, words: total, expl: expWords, vocab: vocab.length, acts: acts.length, quiz: quiz.length, parts: arr(c.parts).length, steps: arr(c.demo?.steps).length });
}

// ---------- glossaire & liens [[…]] ----------
const gl = new Map();
const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim();
for (const c of CA.chapters) for (const v of arr(c.vocab)) { gl.set(norm(v.fr), c.id); if (v.abbr) gl.set(norm(v.abbr), c.id); gl.set(norm(v.en), c.id); }
for (const g of CA.glossary) {
  if (!isStr(g.fr) || !isStr(g.en) || !isStr(g.def) || !isStr(g.cat)) E(`glossaire ${g.fr || '?'} (${g.__file})`, 'fr/en/def/cat requis');
  gl.set(norm(g.fr), 'glossaire'); if (g.abbr) gl.set(norm(g.abbr), 'glossaire'); gl.set(norm(g.en), 'glossaire');
}
for (const c of CA.chapters) for (const [p, s] of strings(c)) for (const m of s.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)) if (!gl.has(norm(m[1]))) E(`chapitre ${c.id}`, `lien glossaire [[${m[1]}]] introuvable (${p})`);

// ---------- cohérence globale ----------
for (const f of CA.figures) for (const ch of arr(f.chapters)) if (!chById.has(ch) && CA.chapters.length >= 32) W(`figure ${f.id}`, `chapitre ${ch} inconnu`);
const usedFigs = new Set();
for (const c of CA.chapters) for (const [p, s] of strings(c)) if ((p.endsWith('fig') || p.endsWith('.fig')) && figById.has(s)) usedFigs.add(s);
for (const f of CA.figures) if (!usedFigs.has(f.id)) W(`figure ${f.id}`, 'jamais référencée par un chapitre');

// ---------- rapport ----------
const sel = ONLY.length ? (m => ONLY.some(id => m.includes(`chapitre ${id} `) || m.includes(`figure ${id}`))) : () => true;
const show = (list, tag) => { const l = list.filter(sel); l.forEach(m => console.log(m)); return l.length; };
const ne = show(errors, 'E');
const nw = show(warns, 'W');
console.log(`\nChapitres : ${CA.chapters.length} · Figures : ${CA.figures.length} · Glossaire (extra) : ${CA.glossary.length} · Sources : ${CA.sources.length} · Cas : ${CA.cases.length}`);
const tab = stats.filter(s => !ONLY.length || ONLY.includes(s.id)).sort((a, b) => a.id.localeCompare(b.id));
for (const s of tab) console.log(`  ${s.id.padEnd(3)} mots=${String(s.words).padStart(5)} explain=${String(s.expl).padStart(4)} vocab=${s.vocab} act=${s.acts} quiz=${s.quiz} parts=${s.parts} demo=${s.steps}`);
console.log(`Erreurs : ${errors.length}${ONLY.length ? ` (affichées : ${ne})` : ''} · Avertissements : ${warns.length}${ONLY.length ? ` (affichés : ${nw})` : ''}`);
if (errors.length || (STRICT && warns.length)) { if (CHECK_ONLY || true) process.exitCode = 1; }
if (CHECK_ONLY || errors.length) process.exit(process.exitCode || 0);

// ---------- génération ----------
const chapters = CA.chapters.sort((a, b) => a.order - b.order).map(({ __file, ...c }) => c);
const figures = CA.figures.map(({ __file, ...f }) => f);
const glossary = CA.glossary.map(({ __file, ...g }) => g);
const sources = CA.sources.map(({ __file, ...s }) => s);
const cases = CA.cases.map(({ __file, ...s }) => s);
const content = { chapters, figures, glossary, sources, cases };
const json = JSON.stringify(content);
const hash = crypto.createHash('sha256').update(json).digest('hex').slice(0, 10);
const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, '.');
const version = `${stamp}-${hash}`;
fs.writeFileSync(path.join(ROOT, 'assets/content.js'), `/* généré par tools/build.mjs — ne pas éditer */\nwindow.CA_CONTENT=${json};\nwindow.CA_CONTENT_HASH=${JSON.stringify(hash)};\n`);
// SVG pour inlining hors-ligne : inutile, fichiers séparés précachés.
const jsFiles = fs.readdirSync(path.join(ROOT, 'assets/js')).filter(f => f.endsWith('.js')).sort();
const precache = [
  './', 'index.html', 'manifest.webmanifest', 'assets/app.css', 'assets/figures.css', 'assets/content.js',
  ...jsFiles.map(f => `assets/js/${f}`),
  ...fs.readdirSync(path.join(ROOT, 'assets/icons')).map(f => `assets/icons/${f}`),
  ...figures.map(f => `assets/fig/${f.file || f.id + '.svg'}`),
];
fs.writeFileSync(path.join(ROOT, 'assets/version.json'), JSON.stringify({ version, hash, built: new Date().toISOString(), chapters: chapters.length, figures: figures.length }, null, 1));
const swTpl = fs.readFileSync(path.join(ROOT, 'tools/sw.template.js'), 'utf8');
fs.writeFileSync(path.join(ROOT, 'sw.js'), swTpl.replace('__VERSION__', version).replace('__PRECACHE__', JSON.stringify(precache)));
// index.html : versionner les ressources
let idx = fs.readFileSync(path.join(ROOT, 'tools/index.template.html'), 'utf8');
idx = idx.replaceAll('__V__', version);
idx = idx.replace('<!--SCRIPTS-->', jsFiles.map(f => `<script src="assets/js/${f}?v=${version}" defer></script>`).join('\n'));
fs.writeFileSync(path.join(ROOT, 'index.html'), idx);
console.log(`\n✔ Build ${version} — ${chapters.length} chapitres, ${figures.length} figures, ${(json.length / 1024).toFixed(0)} Ko de contenu, ${precache.length} fichiers précachés`);

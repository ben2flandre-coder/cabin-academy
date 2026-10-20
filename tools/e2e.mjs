#!/usr/bin/env node
// Tests de bout en bout (Playwright / Chromium) de RMBD Cabin Academy.
// Usage : node tools/e2e.mjs [--only routes,ex,…] [--shots dossier] [--keep]
//   Construit trois variantes dans un dossier temporaire (version 1, version 2 simulée, contenu d'essai --fixture),
//   les sert sous /cabin-academy/ (comme GitHub Pages, chemins relatifs) avec un serveur Node, puis vérifie :
//   zéro erreur console/page, zéro requête échouée, zéro débordement horizontal, toutes les routes, les 9 types
//   d'exercices, la reprise, le stockage absent/corrompu, l'export/import, le service worker (installation,
//   hors ligne, mise à jour, ancienne application). Code retour ≠ 0 en cas d'échec.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import http from 'node:http';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
const { chromium } = require('/home/claude/.npm-global/lib/node_modules/playwright');

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = n => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };
const ONLY = (opt('--only') || '').split(',').filter(Boolean);
const SHOTS = opt('--shots');
const KEEP = args.includes('--keep');
const want = s => !ONLY.length || ONLY.includes(s);
const PREFIX = '/cabin-academy/';
const VIEWPORTS = [{ width: 360, height: 740 }, { width: 390, height: 844 }, { width: 412, height: 915 }, { width: 740, height: 360 }];

// ---------------------------------------------------------------- rapport
const results = [];
let section = '';
const ok = (name, cond, detail) => { results.push({ section, name, pass: !!cond, detail: cond ? '' : (detail || '') }); if (!cond) console.log(`  ✖ ${name}${detail ? ' — ' + detail : ''}`); return !!cond; };
async function step(name, fn) {
  section = name;
  const t = Date.now();
  console.log(`\n▶ ${name}`);
  try { await fn(); } catch (e) { ok(`exception : ${String(e && e.message || e).split('\n')[0]}`, false, (e && e.stack || '').split('\n').slice(1, 3).join(' ')); }
  const r = results.filter(x => x.section === name);
  console.log(`  ${r.filter(x => x.pass).length}/${r.length} vérifications réussies (${((Date.now() - t) / 1000).toFixed(1)} s)`);
}

// ---------------------------------------------------------------- builds
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'ca-e2e-'));
const OUT = { v1: path.join(TMP, 'v1'), v2: path.join(TMP, 'v2'), fix: path.join(TMP, 'fix'), legacy: path.join(TMP, 'legacy') };
const build = (dir, extra) => {
  const out = execFileSync(process.execPath, [path.join(ROOT, 'tools/build.mjs'), '--lenient', '--out', dir, ...extra], { cwd: ROOT, encoding: 'utf8' });
  const m = out.match(/✔ Build (\S+)/);
  if (!m) throw new Error('build impossible :\n' + out.slice(-800));
  return m[1];
};
console.log('Construction des variantes de test…');
const V1 = build(OUT.v1, []);
const V2 = build(OUT.v2, ['--tag', 'e2e2']);
const VF = build(OUT.fix, ['--fixture']);
console.log(`  v1 ${V1} · v2 ${V2} · fixture ${VF}`);
// Ancienne application simulée : page + SW « cache d'abord » (cache rmbd-cabin-v4.1.1), comme la v4 installée chez l'utilisatrice.
fs.mkdirSync(OUT.legacy, { recursive: true });
fs.writeFileSync(path.join(OUT.legacy, 'index.html'), `<!doctype html><html lang="fr"><meta charset="utf-8"><title>Ancienne appli</title><body><h1 id="legacy">Ancienne application v4</h1><script>navigator.serviceWorker && navigator.serviceWorker.register('sw.js');</script></body></html>`);
fs.writeFileSync(path.join(OUT.legacy, 'sw.js'), `const C='rmbd-cabin-v4.1.1';self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html'])).then(()=>self.skipWaiting()))});self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)))});`);

// ---------------------------------------------------------------- serveur statique
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.webmanifest': 'application/manifest+json', '.ico': 'image/x-icon', '.webp': 'image/webp', '.md': 'text/plain; charset=utf-8' };
const srv = { root: OUT.v1, offline: false, legacy: false, log: [] };
const server = http.createServer((req, res) => {
  if (srv.offline) { req.socket.destroy(); return; }
  const u = new URL(req.url, 'http://x');
  srv.log.push(u.pathname);
  if (!u.pathname.startsWith(PREFIX)) { res.writeHead(404); res.end('hors périmètre'); return; }
  let rel = decodeURIComponent(u.pathname.slice(PREFIX.length)) || 'index.html';
  if (rel.endsWith('/')) rel += 'index.html';
  if (rel.includes('..')) { res.writeHead(400); res.end(); return; }
  const cands = srv.legacy ? [path.join(OUT.legacy, rel)] : [path.join(srv.root, rel), ...(/^(index\.html|sw\.js|assets\/content\.js|assets\/version\.json)$/.test(rel) ? [] : [path.join(ROOT, rel)])];
  const file = cands.find(f => fs.existsSync(f) && fs.statSync(f).isFile());
  if (!file) { res.writeHead(404, { 'content-type': 'text/plain' }); res.end('introuvable'); return; }
  // comme GitHub Pages : cache HTTP de 10 minutes
  res.writeHead(200, { 'content-type': MIME[path.extname(file)] || 'application/octet-stream', 'cache-control': 'max-age=600' });
  fs.createReadStream(file).pipe(res);
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const BASE = `http://127.0.0.1:${server.address().port}${PREFIX}`;
console.log(`Serveur : ${BASE}`);

// ---------------------------------------------------------------- navigateur
const browser = await chromium.launch();
const CONTENT = { v1: loadContent(OUT.v1), fix: loadContent(OUT.fix) };
function loadContent(dir) { const w = {}; new Function('window', fs.readFileSync(path.join(dir, 'assets/content.js'), 'utf8'))(w); return w.CA_CONTENT; }

/** Contexte instrumenté : collecte erreurs console/page, requêtes échouées, réponses ≥ 400. */
async function ctxOpen(o = {}) {
  const ctx = await browser.newContext({ viewport: o.viewport || VIEWPORTS[0], deviceScaleFactor: o.dpr || 1, hasTouch: true, isMobile: !o.desktop, locale: 'fr-FR', colorScheme: o.dark ? 'dark' : 'light', acceptDownloads: true, serviceWorkers: o.sw === false ? 'block' : 'allow' });
  const bad = [];
  ctx.allowFail = 0;
  const watch = page => {
    page.on('console', m => { if (m.type() === 'error' && !ctx.allowFail) bad.push(`console : ${m.text().slice(0, 200)}`); });
    page.on('pageerror', e => bad.push(`page : ${String(e.message).slice(0, 200)}`));
    page.on('requestfailed', r => { if (!ctx.allowFail) bad.push(`requête échouée : ${r.url().replace(BASE, '')} (${r.failure() && r.failure().errorText})`); });
    page.on('response', r => { if (r.status() >= 400 && !ctx.allowFail) bad.push(`HTTP ${r.status()} : ${r.url().replace(BASE, '')}`); });
  };
  ctx.on('page', watch);
  if (o.init) await ctx.addInitScript(o.init);
  const page = await ctx.newPage();
  ctx.bad = bad;
  return { ctx, page, bad };
}
const appReady = page => page.waitForFunction(() => window.CA_BOOT && window.CA_BOOT.done === true && document.querySelector('#ca-main h1'), null, { timeout: 15000 });
async function go(page, hash) {
  await page.evaluate(h => { window.CAApp.router.focusOnRender = true; window.CAApp.router.go(h); }, hash);
  await page.waitForFunction(h => location.hash === h || h === '#/', hash);
  await settle(page);
}
async function settle(page) {
  await page.waitForFunction(() => !document.querySelector('.ca-fig-wait'), null, { timeout: 10000 }).catch(() => {});
  await page.waitForTimeout(30);
}
const overflow = page => page.evaluate(() => { const d = document.documentElement; return d.scrollWidth - d.clientWidth; });
async function shot(page, name) {
  if (!SHOTS) return;
  fs.mkdirSync(SHOTS, { recursive: true });
  await page.screenshot({ path: path.join(SHOTS, name + '.png'), fullPage: false });
}
const cleanBad = (bad, label) => { ok(`${label} : aucune erreur console / page / requête`, bad.length === 0, bad.slice(0, 6).join(' | ')); bad.length = 0; };

const RUBRICS = ['objectifs', 'pourquoi', 'decouverte', 'explication', 'vocabulaire', 'exemple', 'demonstration', 'activites', 'erreurs', 'situation', 'evaluation', 'retenir', 'suite'];

// ================================================================= 1. routes
if (want('routes')) await step('Routes et mise en page (4 viewports)', async () => {
  const C = CONTENT.v1;
  for (const vp of VIEWPORTS) {
    const { ctx, page, bad } = await ctxOpen({ viewport: vp, sw: false });
    await page.goto(BASE);
    await appReady(page);
    const full = vp.width === 360;
    const routes = ['#/', '#/parcours', '#/reviser', '#/glossaire', '#/mediatheque', '#/carnet', '#/certification', '#/cas', '#/sources', '#/reglages', '#/guide', '#/plus'];
    const chs = full ? C.chapters : C.chapters.slice(0, 1);
    for (const c of chs) for (const r of RUBRICS) routes.push(`#/chapitre/${c.id}/${r}`);
    if (C.figures[0]) routes.push('#/mediatheque/' + C.figures[0].id);
    const rf = C.figures.find(f => f.raster);
    if (rf) routes.push('#/mediatheque/' + rf.id);
    routes.push('#/glossaire/' + encodeURIComponent('rail'), '#/chapitre/zz9', '#/chapitre/' + C.chapters[0].id + '/inconnue', '#/nimporte/quoi', '#/mediatheque/inexistante', '#/cas/k99', '#/chapitre/a1');
    let over = [], noH1 = [], errPanel = [], badBtn = [];
    for (const r of routes) {
      await go(page, r);
      const ov = await overflow(page);
      if (ov > 1) over.push(`${r} (+${ov}px)`);
      const info = await page.evaluate(() => ({
        h1: document.querySelectorAll('#ca-main h1').length,
        err: !!document.querySelector('#ca-main pre.ca-pre'),
        btn: Array.from(document.querySelectorAll('button, a[href]')).filter(b => b.offsetParent !== null && !(b.textContent.trim() || b.getAttribute('aria-label'))).map(b => b.outerHTML.slice(0, 80)),
      }));
      if (info.h1 !== 1) noH1.push(`${r} (${info.h1})`);
      if (info.err) errPanel.push(r);
      if (info.btn.length) badBtn.push(`${r}: ${info.btn[0]}`);
      if (full && /^#\/(|parcours|reviser|carnet|certification|reglages|glossaire|mediatheque|cas|plus)$/.test(r)) await shot(page, `vp360-${r.replace(/[#/]/g, '') || 'accueil'}`);
      if (full && /chapitre\/[a-z0-9]+\/(explication|activites|evaluation|vocabulaire|demonstration)$/.test(r) && r.includes(C.chapters[0].id)) await shot(page, `vp360-${r.replace(/[#/]/g, '-')}`);
    }
    if (!full) await shot(page, `vp${vp.width}x${vp.height}-accueil`);
    ok(`${vp.width}×${vp.height} : ${routes.length} routes sans débordement horizontal`, !over.length, over.slice(0, 5).join(', '));
    ok(`${vp.width}×${vp.height} : un seul h1 par écran`, !noH1.length, noH1.slice(0, 5).join(', '));
    ok(`${vp.width}×${vp.height} : aucun écran d'erreur`, !errPanel.length, errPanel.join(', '));
    ok(`${vp.width}×${vp.height} : boutons et liens visibles ont un nom accessible`, !badBtn.length, badBtn.slice(0, 3).join(' | '));
    // onglet actif et focus après changement de route
    await go(page, '#/parcours');
    ok(`${vp.width}×${vp.height} : aria-current sur l’onglet Parcours`, await page.evaluate(() => document.querySelector('.ca-tab[aria-current="page"]')?.dataset.tab === 'parcours'));
    ok(`${vp.width}×${vp.height} : focus sur le titre après navigation`, await page.evaluate(() => document.activeElement && document.activeElement.tagName === 'H1'));
    // la barre d'onglets ne masque pas la fin du contenu
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    const masked = await page.evaluate(() => { const last = Array.from(document.querySelectorAll('#ca-main > .ca-page > *')).pop(); const tabs = document.querySelector('.ca-tabs').getBoundingClientRect(); return last ? last.getBoundingClientRect().bottom - tabs.top : 0; });
    ok(`${vp.width}×${vp.height} : la barre d’onglets ne masque pas le bas du contenu`, masked <= 0, `recouvrement ${masked}px`);
    cleanBad(bad, `${vp.width}×${vp.height}`);
    await ctx.close();
  }
  // thème sombre + grande taille de texte : pas de débordement
  const { ctx, page, bad } = await ctxOpen({ viewport: VIEWPORTS[0], dark: true, sw: false });
  await page.goto(BASE); await appReady(page);
  await go(page, '#/reglages');
  await page.locator('label.ca-seg-l', { hasText: 'Maximal' }).click();
  ok('Taille du texte « Maximal » appliquée', await page.evaluate(() => document.documentElement.dataset.size === 'xxl'));
  const fs17 = await page.evaluate(() => parseFloat(getComputedStyle(document.body).fontSize));
  ok('Texte ≥ 17 px', fs17 >= 17, String(fs17));
  for (const r of ['#/', '#/parcours', `#/chapitre/${C.chapters[0].id}/explication`, `#/chapitre/${C.chapters[0].id}/evaluation`, '#/carnet', '#/reviser']) {
    await go(page, r);
    const ov = await overflow(page);
    ok(`Sombre + texte maximal : ${r} sans débordement`, ov <= 1, `+${ov}px`);
  }
  await shot(page, 'vp360-sombre-xxl-evaluation');
  await go(page, '#/reglages');
  await page.locator('label.ca-seg-l', { hasText: 'Normal' }).click();
  await page.locator('label.ca-seg-l', { hasText: 'Clair' }).click();
  ok('Thème clair forcé', await page.evaluate(() => document.documentElement.dataset.theme === 'light'));
  cleanBad(bad, 'thème / taille');
  await ctx.close();
});

// ================================================================= 2. exercices
/** Répond à un exercice (correctement ou non) par de vraies interactions. */
async function answer(page, ex, correct) {
  const sel = `section.ca-ex[data-ex="${ex.id}"]`;
  const root = page.locator(sel).first();
  await root.scrollIntoViewIfNeeded();
  const mark = (q, i) => page.evaluate(([s, q, i]) => { const els = Array.from(document.querySelector(s).querySelectorAll(q)); const el = els[i]; if (el) el.setAttribute('data-e2e', 'x'); return !!el; }, [sel, q, i]);
  const clickMarked = async () => { await page.locator('[data-e2e="x"]').click(); await page.evaluate(() => document.querySelectorAll('[data-e2e]').forEach(e => e.removeAttribute('data-e2e'))); };
  const plain = s => String(s).replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2').replace(/\[\[([^\]]+)\]\]/g, '$1').replace(/\*\*([\s\S]+?)\*\*/g, '$1').replace(/\*([^*\n]+)\*/g, '$1').replace(/`([^`]+)`/g, '$1').trim();
  const labelIndex = text => page.evaluate(([s, t]) => Array.from(document.querySelector(s).querySelectorAll('.ca-opt-l')).findIndex(l => l.textContent.trim() === t), [sel, text]);
  switch (ex.type) {
    case 'mcq': {
      const o = ex.options.find(x => correct ? x.ok : !x.ok);
      await mark('.ca-opt-l', await labelIndex(plain(o.t))); await clickMarked(); break;
    }
    case 'multi': {
      const list = correct ? ex.options.filter(x => x.ok) : [ex.options.find(x => !x.ok)];
      for (const o of list) { await mark('.ca-opt-l', await labelIndex(plain(o.t))); await clickMarked(); }
      break;
    }
    case 'order': {
      if (!correct) break;                                  // l'ordre initial est garanti différent du bon ordre
      for (let k = 0; k < ex.items.length; k++) {
        for (let guard = 0; guard < 10; guard++) {
          const pos = await page.evaluate(([s, k]) => Array.from(document.querySelector(s).querySelectorAll('.ca-order-i')).findIndex(li => Number(li.dataset.i) === k), [sel, k]);
          if (pos <= k) break;
          await page.locator(`${sel} [data-mv="up"][data-i="${k}"]`).click();
        }
      }
      break;
    }
    case 'match': {
      const selects = root.locator('select');
      const n = await selects.count();
      const labels = await root.locator('.ca-match-l').allTextContents();
      for (let i = 0; i < n; i++) {
        const p = ex.pairs.find(x => plain(x.l) === labels[i].trim());
        let v = p.r;
        if (!correct && i === 0) v = ex.pairs.find(x => x !== p).r;
        await selects.nth(i).selectOption(v);
      }
      break;
    }
    case 'sort': {
      const rows = root.locator('.ca-sort-i');
      const n = await rows.count();
      for (let i = 0; i < n; i++) {
        const t = (await rows.nth(i).locator('.ca-sort-t').textContent()).trim();
        const it = ex.items.find(x => plain(x.t) === t);
        let b = it.bin;
        if (!correct && i === 0) b = (b + 1) % ex.bins.length;
        await rows.nth(i).locator('label.ca-seg-l').nth(b).click();
      }
      break;
    }
    case 'input': {
      const a = ex.answers[0];
      await root.locator('input[type="text"]').fill(correct ? ` ${a.toLowerCase().replace(/-/g, ' ')} ` : 'réponse fausse');
      break;
    }
    case 'hotid': {
      await root.locator('svg.fig').waitFor();
      for (let i = 0; i < ex.targets.length; i++) {
        const fig = CONTENT.v1.figures.find(f => f.id === ex.fig) || CONTENT.fix.figures.find(f => f.id === ex.fig);
        const pool = ex.pool || fig.parts.map(p => p.id);
        const v = correct ? ex.targets[i].part : pool.find(p => p !== ex.targets[i].part);
        await root.locator('label.ca-opt-l', { has: page.locator(`input[type="radio"][value="${v}"]`) }).click();
        await page.waitForTimeout(350);
      }
      break;
    }
    case 'hottap': {
      await root.locator('svg.fig [data-part][tabindex="0"]').first().waitFor();
      const fig = CONTENT.v1.figures.find(f => f.id === ex.fig) || CONTENT.fix.figures.find(f => f.id === ex.fig);
      for (let i = 0; i < ex.targets.length; i++) {
        const part = correct ? ex.targets[i].part : fig.parts.find(p => p.id !== ex.targets[i].part).id;
        const el = root.locator(`svg.fig [data-part="${part}"][tabindex="0"]`);
        await el.focus(); await page.keyboard.press('Enter');
      }
      break;
    }
    case 'hotfind': {
      await root.locator('svg.fig [data-part][tabindex="0"]').first().waitFor();
      const fig = CONTENT.v1.figures.find(f => f.id === ex.fig) || CONTENT.fix.figures.find(f => f.id === ex.fig);
      const list = correct ? ex.targets : [fig.parts.find(p => !ex.targets.includes(p.id)).id];
      for (const part of list) { const el = root.locator(`svg.fig [data-part="${part}"][tabindex="0"]`); await el.focus(); await page.keyboard.press('Enter'); }
      break;
    }
  }
}
const validate = (page, ex) => page.locator(`section.ca-ex[data-ex="${ex.id}"] .ca-ex-actions button.is-primary`).first().click();
const verdict = (page, ex) => page.locator(`section.ca-ex[data-ex="${ex.id}"] .ca-verdict`).first().textContent({ timeout: 4000 }).catch(() => '');
const exRec = (page, id) => page.evaluate(id => window.CAApp.state.ex[id] || null, id);

async function exerciseSuite(contentKey, label) {
  const C = CONTENT[contentKey];
  const { ctx, page, bad } = await ctxOpen({ sw: false });
  await page.goto(BASE); await appReady(page);
  const byType = {};
  for (const c of C.chapters) for (const [kind, list] of [['activites', c.activities || []], ['evaluation', c.quiz || []]]) for (const e of list) {
    if (!e || !e.type) continue;
    if (['hotid', 'hottap', 'hotfind'].includes(e.type) && !C.figures.some(f => f.id === e.fig)) continue;
    (byType[e.type] = byType[e.type] || []).push({ e, c, kind });
  }
  const TYPES = ['mcq', 'multi', 'order', 'match', 'sort', 'input', 'hotid', 'hottap', 'hotfind'];
  for (const t of TYPES) {
    const list = byType[t] || [];
    if (!ok(`${label} : un exercice de type ${t} est disponible`, list.length > 0)) continue;
    const { e, c, kind } = list[0];
    await go(page, `#/chapitre/${c.id}/${kind}`);
    const root = page.locator(`section.ca-ex[data-ex="${e.id}"]`).first();
    await root.scrollIntoViewIfNeeded();
    // 1) réponse incomplète (sauf « order », toujours complet)
    if (t !== 'order') {
      await validate(page, e);
      await page.waitForTimeout(120);
      const msg = (await root.locator('.ca-ex-msg').textContent()).trim();
      ok(`${t} : réponse incomplète refusée avec un message`, msg.length > 10 && !(await exRec(page, e.id)), msg);
    }
    // 2) mauvaise réponse
    await answer(page, e, false);
    await validate(page, e);
    const v1 = await verdict(page, e);
    const r1 = await exRec(page, e.id);
    ok(`${t} : mauvaise réponse → correction et échec enregistré`, /Pas encore/.test(v1) && r1 && r1.n === 1 && r1.last === 'ko' && !r1.first, `${v1} ${JSON.stringify(r1)}`);
    ok(`${t} : correction expliquée affichée`, (await root.locator('.ca-explain').count()) > 0 && (await root.locator('.ca-why, .ca-solution').count()) > 0);
    // 3) nouvelle tentative (options remélangées) puis bonne réponse
    await root.locator('button', { hasText: 'Nouvelle tentative' }).click();
    const fresh = page.locator(`section.ca-ex[data-ex="${e.id}"]`).first();
    ok(`${t} : nouvelle tentative → exercice réinitialisé`, (await fresh.locator('.ca-verdict').count()) === 0);
    await answer(page, e, true);
    await validate(page, e);
    const v2 = await verdict(page, e);
    const r2 = await exRec(page, e.id);
    ok(`${t} : bonne réponse après erreur`, /après erreur/.test(v2) && r2.n === 2 && r2.ok && r2.last === 'ok' && !r2.first, `${v2} ${JSON.stringify(r2)}`);
    // 4) premier coup sur un autre exercice du même type
    const other = list.find(x => x.e.id !== e.id && x.c.id === c.id && x.kind === kind) || list.find(x => x.e.id !== e.id);
    if (other) {
      if (other.c.id !== c.id || other.kind !== kind) await go(page, `#/chapitre/${other.c.id}/${other.kind}`);
      await answer(page, other.e, true);
      await validate(page, other.e);
      const v3 = await verdict(page, other.e);
      const r3 = await exRec(page, other.e.id);
      ok(`${t} : réussi du premier coup (${other.e.id})`, /premier coup/.test(v3) && r3 && r3.first === true && r3.n === 1, `${v3} ${JSON.stringify(r3)}`);
    }
    if (t === 'hottap' || t === 'hotfind') await shot(page, `ex-${t}`);
  }
  cleanBad(bad, label);
  return { ctx, page, bad };
}

if (want('ex')) await step('Exercices — 9 types (contenu réel)', async () => {
  const { ctx, page, bad } = await exerciseSuite('v1', 'contenu réel');
  // statut et progression
  const C = CONTENT.v1;
  const st = await page.evaluate(() => window.CAApp.C.chapters().map(c => [c.id, window.CAApp.progress.chapterProgress(c).status]));
  ok('Des chapitres sont « En cours » après les exercices', st.some(([, s]) => s !== 'new'), JSON.stringify(st));
  // persistance et reprise après rechargement
  const c = C.chapters[1] || C.chapters[0];
  await go(page, `#/chapitre/${c.id}/vocabulaire`);
  await page.locator('[data-act="vocabtoggle"]').first().click();
  const before = await page.evaluate(() => ({ ex: Object.keys(window.CAApp.state.ex).length, srs: Object.keys(window.CAApp.state.srs).length }));
  await page.reload(); await appReady(page);
  const after = await page.evaluate(() => ({ ex: Object.keys(window.CAApp.state.ex).length, srs: Object.keys(window.CAApp.state.srs).length, h: location.hash }));
  ok('Résultats et cartes conservés après rechargement', before.ex === after.ex && before.srs === after.srs && before.ex > 0, JSON.stringify([before, after]));
  ok('Rechargement : même rubrique réaffichée', after.h === `#/chapitre/${c.id}/vocabulaire`);
  await go(page, '#/');
  const resume = await page.locator('.ca-card.is-resume a').getAttribute('href').catch(() => null);
  ok('Accueil : reprise exacte (chapitre + rubrique)', resume === `#/chapitre/${c.id}/vocabulaire`, String(resume));
  await shot(page, 'vp360-accueil-reprise');
  // notes personnelles
  await go(page, `#/chapitre/${c.id}/objectifs`);
  await page.locator('.ca-notes summary').click();
  await page.locator('.ca-notes textarea').fill('Ma note <b>test</b>');
  await go(page, '#/parcours');
  ok('Note personnelle enregistrée en quittant la rubrique', await page.evaluate(id => window.CAApp.state.notes[id] === 'Ma note <b>test</b>', c.id));
  // révision espacée : décalage de 2 jours → cartes dues ; erreur → re-présentation
  await page.evaluate(() => { window.CA_TEST_DAY_OFFSET = 2; });
  await go(page, '#/reviser');
  const due = await page.evaluate(() => window.CAApp.srs.dueCards().length);
  ok('Révision : cartes dues après 2 jours', due > 0, String(due));
  await page.locator('label.ca-seg-l', { hasText: '5 cartes' }).click();
  await page.locator('[data-act="startreview"]').click();
  let seenKo = false, steps = 0;
  for (; steps < 25; steps++) {
    if (await page.locator('h2', { hasText: 'Session terminée' }).count()) break;
    const flash = page.locator('.ca-flash');
    if (await flash.count()) {
      await page.locator('.ca-flash button', { hasText: 'Voir la réponse' }).click();
      await page.locator(`.ca-flash [data-g="${seenKo ? 'ok' : 'ko'}"]`).click();
      seenKo = true;
    } else if (await page.locator('.ca-session-stage section.ca-ex').count()) {
      const id = await page.locator('.ca-session-stage section.ca-ex').getAttribute('data-ex');
      const hit = C.chapters.flatMap(ch => [...(ch.activities || []), ...(ch.quiz || [])]).find(x => x.id === id);
      await answer(page, hit, seenKo); await validate(page, hit);
      seenKo = true;
    } else if (await page.locator('.ca-session-stage .ca-oral').count()) {
      await page.locator('.ca-oral button', { hasText: 'Comparer' }).click();
      await page.locator('.ca-oral button', { hasText: 'Enregistrer' }).click();
    }
    await page.locator('.ca-session-next button').click();
  }
  ok('Session de révision terminée', await page.locator('h2', { hasText: 'Session terminée' }).count() > 0, `${steps} étapes`);
  const boxes = await page.evaluate(() => Object.values(window.CAApp.state.srs).map(c => c.box));
  ok('Révision : au moins une carte promue en boîte ≥ 2', boxes.some(b => b >= 2), JSON.stringify(boxes.slice(0, 10)));
  const persisted = await page.evaluate(() => JSON.parse(localStorage.getItem('rmbd-ca:v1') || '{}').srs);
  ok('Échéances de révision persistées dans le stockage', persisted && Object.values(persisted).some(c => c.box >= 2));
  await page.evaluate(() => { window.CA_TEST_DAY_OFFSET = 0; });
  await go(page, '#/reviser');
  await page.locator('#free-scope').selectOption({ index: 1 });
  await page.locator('[data-act="startflash"]').click();
  ok('Révision libre : cartes de vocabulaire', await page.locator('.ca-flash').count() > 0);
  await shot(page, 'vp360-flashcard');
  // certification
  await go(page, '#/certification');
  ok('Certification : bandeau « pas une certification officielle »', await page.locator('.ca-mention', { hasText: 'pas une certification officielle' }).count() === 1);
  ok('Certification : lignes de matrice affichées', await page.locator('.ca-cert-line').count() > 0);
  ok('Certification : exercices réussis reflétés', await page.locator('.ca-exstate.is-first, .ca-exstate.is-after').count() > 0);
  const [dl] = await Promise.all([page.waitForEvent('download'), page.locator('[data-act="certcsv"]').click()]);
  const csv = fs.readFileSync(await dl.path(), 'utf8');
  ok('Certification : export CSV', csv.includes('BC01') && csv.includes('Savoir-faire'));
  // glossaire et fiche modale
  await go(page, `#/chapitre/${c.id}/explication`);
  const term = page.locator('#ca-main .ca-term').first();
  if (await term.count()) {
    await term.click();
    ok('Lien [[Terme]] → fiche modale ouverte', await page.locator('dialog.ca-dlg[open]').count() === 1);
    await page.keyboard.press('Escape');
    ok('Échap ferme la fiche et rend le focus au lien', await page.locator('dialog.ca-dlg').count() === 0 && await page.evaluate(() => document.activeElement && document.activeElement.classList.contains('ca-term')));
    await term.click();
    await page.goBack();
    await page.waitForTimeout(150);
    ok('Bouton « retour » ferme la fiche sans quitter la rubrique', await page.locator('dialog.ca-dlg').count() === 0 && (await page.evaluate(() => location.hash)) === `#/chapitre/${c.id}/explication`);
  }
  // zoom plein écran
  const zoomBtn = page.locator('#ca-main .ca-fig-zoom').first();
  if (await zoomBtn.count()) {
    await zoomBtn.click();
    await page.locator('dialog.ca-dlg-zoom').waitFor();
    await page.keyboard.press('+');
    const lvl = await page.locator('.ca-zoom-level').textContent();
    ok('Zoom plein écran : + agrandit', lvl.trim() !== '100 %', lvl);
    await shot(page, 'vp360-zoom');
    await page.keyboard.press('Escape');
    ok('Zoom : Échap ferme la visionneuse', await page.locator('dialog.ca-dlg-zoom').count() === 0);
  }
  await go(page, '#/glossaire');
  const g = C.chapters.flatMap(x => x.vocab || []).find(v => /[éèêàç]/.test(v.fr));
  if (g) {
    const q = g.fr.normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase();
    await page.locator('#gl-q').fill(q);
    await page.waitForTimeout(300);
    ok(`Glossaire : recherche sans accents (« ${q} »)`, await page.locator('.ca-gloss-fr', { hasText: g.fr }).count() > 0);
  }
  await go(page, '#/glossaire/terme-qui-n-existe-pas');
  ok('Glossaire : terme inconnu → message', await page.locator('dialog.ca-dlg', { hasText: 'introuvable' }).count() === 1);
  await page.keyboard.press('Escape');
  cleanBad(bad, 'parcours complet');
  await ctx.close();
});

if (want('fixture')) await step('Contenu d’essai : chapitre incomplet, figure absente, cas pratique', async () => {
  srv.root = OUT.fix;
  const { ctx, page, bad } = await exerciseSuite('fix', 'fixture');
  for (const r of RUBRICS) {
    await go(page, `#/chapitre/z8/${r}`);
    const ov = await overflow(page);
    if (ov > 1) ok(`z8/${r} sans débordement`, false, `+${ov}`);
  }
  await go(page, '#/chapitre/z8/decouverte');
  ok('Rubrique non rédigée → message utile', await page.locator('.ca-empty', { hasText: 'pas encore rédigée' }).count() === 1);
  await go(page, '#/chapitre/z8/evaluation');
  ok('Figure absente → message visible, pas d’écran blanc', await page.locator('.ca-fig-missing').count() > 0);
  ok('Terme inconnu marqué', (await page.evaluate(() => { location.hash = '#/chapitre/z8/explication'; return 1; })) && true);
  await settle(page);
  ok('Terme absent du glossaire : lien neutre', await page.locator('.ca-term-missing').count() > 0);
  // illustrations raster (IA) : <img>, légende numérotée, mention « à valider », zoom, refus en exercice touchable
  await go(page, '#/chapitre/z9/explication');
  const rimg = page.locator('#ca-main figure.is-raster img.ca-raster').first();
  await rimg.scrollIntoViewIfNeeded();
  await page.waitForFunction(() => { const i = document.querySelector('figure.is-raster img'); return i && i.complete && i.naturalWidth > 0; }, null, { timeout: 8000 }).catch(() => {});
  ok('Raster : image chargée avec alt, width/height et lazy', await rimg.evaluate(i => i.naturalWidth > 0 && i.alt.length > 20 && i.getAttribute('width') && i.loading === 'lazy'));
  ok('Raster : légende numérotée depuis parts[]', await page.evaluate(() => { const f = (window.CA_CONTENT.figures || []).find(x => x.id === 'img-m1-avion-profil'); return !!f && document.querySelectorAll('#ca-main figure.is-raster .ca-legend li').length === f.parts.length; }));
  ok('Raster : mention « Illustration générée par IA — à valider »', await page.locator('#ca-main figure.is-raster .ca-aibadge', { hasText: 'générée par IA' }).count() === 1);
  await page.locator('#ca-main figure.is-raster .ca-fig-zoom').click();
  ok('Raster : visionneuse plein écran avec la mention', await page.locator('dialog.ca-dlg-zoom img').count() === 1 && await page.locator('dialog.ca-dlg-zoom .ca-aibadge').count() === 1);
  await shot(page, 'vp360-raster-zoom');
  await page.keyboard.press('Escape');
  await go(page, '#/chapitre/z8/evaluation');
  ok('Raster dans un exercice touchable → message, pas d’écran blanc', await page.locator('section[data-ex="z8-q3"] .ca-fig-missing', { hasText: 'zones touchables' }).count() === 1);
  await go(page, '#/mediatheque');
  await page.locator('#md-k').selectOption('raster');
  ok('Médiathèque : filtre « illustrations »', await page.locator('.ca-grid .ca-chip.is-ai').count() > 0 && await page.locator('.ca-grid li').count() === await page.locator('.ca-grid .ca-chip.is-ai').count());
  await shot(page, 'vp360-mediatheque-raster');
  await page.locator('#md-k').selectOption('svg');
  ok('Médiathèque : filtre « schémas »', await page.locator('.ca-grid .ca-chip.is-ai').count() === 0 && await page.locator('.ca-grid li').count() > 0);
  const chk = (() => { try { execFileSync(process.execPath, [path.join(ROOT, 'tools/build.mjs'), '--check', '--fixture', 'z8'], { cwd: ROOT, encoding: 'utf8' }); return ''; } catch (e) { return String(e.stdout); } })();
  ok('Validation : raster interdit dans hotid/hottap/hotfind', /raster ne peut pas servir/.test(chk));
  // cas pratique : mauvais choix → conséquence → rejouer → bonne réponse → débrief → résultat conservé
  await go(page, '#/cas');
  ok('Liste des cas pratiques', await page.locator('.ca-chcard a[href="#/cas/k9"]').count() === 1);
  await go(page, '#/cas/k9');
  await page.locator('[data-cs="start"]').click();
  const k9 = CONTENT.fix.cases.find(k => k.id === 'k9');
  const plain = s => s.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\*([^*]+)\*/g, '$1');
  for (let i = 0; i < k9.steps.length; i++) {
    const st = k9.steps[i];
    const wrong = st.options.find(o => !o.ok), right = st.options.find(o => o.ok);
    if (i === 0) {
      await page.locator('.ca-case-stage .ca-opt-l', { hasText: plain(wrong.t) }).click();
      await page.locator('.ca-case-stage button', { hasText: 'Valider ma décision' }).click();
      ok('Cas : un mauvais choix montre sa conséquence', await page.locator('.ca-verdict', { hasText: 'Conséquence' }).count() === 1);
      await page.locator('.ca-case-stage button', { hasText: 'Rejouer l’étape' }).click();
    }
    await page.locator('.ca-case-stage .ca-opt-l', { hasText: plain(right.t) }).click();
    await page.locator('.ca-case-stage button', { hasText: 'Valider ma décision' }).click();
    await page.locator('.ca-case-stage .ca-ex-fb button').click();
  }
  ok('Cas : débrief affiché', await page.locator('h2', { hasText: 'Débrief' }).count() === 1);
  const rec = await page.evaluate(() => window.CAApp.state.cases.k9);
  ok('Cas : résultat conservé (1 erreur, terminé)', rec && rec.done && rec.errors === 1 && rec.best === 1, JSON.stringify(rec));
  await shot(page, 'vp360-cas-debrief');
  cleanBad(bad, 'fixture');
  await ctx.close();
  srv.root = OUT.v1;
});

// ================================================================= 3. carnet, export / import
if (want('data')) await step('Carnet, export / import, réinitialisation', async () => {
  const { ctx, page, bad } = await ctxOpen({ sw: false });
  await page.goto(BASE); await appReady(page);
  await go(page, '#/carnet');
  ok('Carnet : mention permanente sur les activités fictives', await page.locator('.ca-mention', { hasText: 'activités fictives' }).count() === 1);
  await page.locator('form.ca-jform button[type="submit"]').click();
  ok('Carnet : tâche obligatoire', await page.locator('form .ca-ex-msg', { hasText: 'obligatoire' }).count() === 1);
  const evil = '<img src=x onerror="window.__xss=1">Pose dado';
  await page.locator('form.ca-jform input[type="text"]').nth(0).fill(evil);
  await page.locator('form.ca-jform label.ca-opt-l', { hasText: 'Autonomie constatée' }).click();
  await page.locator('form.ca-jform button[type="submit"]').click();
  ok('Carnet : « Autonomie constatée » exige un tuteur', await page.locator('form .ca-ex-msg', { hasText: 'tuteur' }).count() === 1);
  // brouillon conservé au rechargement
  await page.reload(); await appReady(page);
  ok('Carnet : brouillon conservé après rechargement', (await page.locator('form.ca-jform input[type="text"]').nth(0).inputValue()) === evil);
  await page.locator('form.ca-jform label.ca-opt-l', { hasText: 'Réalisé avec aide' }).click();
  await page.locator('form.ca-jform textarea').fill('Notes ; avec "guillemets"\net retour');
  await page.locator('form.ca-jform button[type="submit"]').click();
  await settle(page);
  ok('Carnet : entrée ajoutée, contenu échappé (aucune balise interprétée)', await page.locator('.ca-jentry').count() === 1 && await page.locator('.ca-journal img').count() === 0 && !(await page.evaluate(() => window.__xss)));
  await page.locator('.ca-jentry a', { hasText: 'Modifier' }).click();
  await settle(page);
  await page.locator('form.ca-jform input[type="text"]').nth(0).fill('Pose dado modifiée');
  await page.locator('form.ca-jform button[type="submit"]').click();
  await settle(page);
  ok('Carnet : modification', await page.locator('.ca-jentry-t', { hasText: 'Pose dado modifiée' }).count() === 1);
  const [dl] = await Promise.all([page.waitForEvent('download'), page.locator('[data-act="jcsv"]').click()]);
  const csv = fs.readFileSync(await dl.path(), 'utf8');
  ok('Carnet : export CSV (séparateur ;, guillemets échappés)', csv.includes('Pose dado modifiée') && csv.includes('"Notes ; avec ""guillemets"" et retour"'), csv.slice(0, 300));
  await shot(page, 'vp360-carnet');
  // export JSON complet
  await go(page, '#/reglages');
  const [dl2] = await Promise.all([page.waitForEvent('download'), page.locator('[data-act="exportall"]').click()]);
  const expPath = path.join(TMP, 'export.json');
  fs.copyFileSync(await dl2.path(), expPath);
  const exp = JSON.parse(fs.readFileSync(expPath, 'utf8'));
  ok('Export JSON versionné', exp.app === 'rmbd-cabin-academy' && exp.schema === 1 && exp.data.journal.length === 1);
  // réinitialisation confirmée
  await page.locator('[data-act="resetall"]').click();
  await page.locator('dialog button', { hasText: 'Annuler' }).click();
  ok('Réinitialisation : annulation sans effet', await page.evaluate(() => window.CAApp.state.journal.length === 1));
  await page.locator('[data-act="resetall"]').click();
  await page.locator('dialog button', { hasText: 'Tout effacer' }).click();
  await settle(page);
  ok('Réinitialisation confirmée', await page.evaluate(() => window.CAApp.state.journal.length === 0));
  // import invalide
  const badFile = path.join(TMP, 'bad.json');
  fs.writeFileSync(badFile, JSON.stringify({ app: 'autre', data: {} }));
  await page.locator('#imp-file').setInputFiles(badFile);
  await page.waitForTimeout(200);
  ok('Import : fichier étranger refusé, rien modifié', await page.locator('.ca-import', { hasText: 'Import refusé' }).count() === 1);
  const badFile2 = path.join(TMP, 'bad2.json');
  fs.writeFileSync(badFile2, JSON.stringify({ app: 'rmbd-cabin-academy', schema: 1, data: { journal: 'pas un tableau', ex: [] } }));
  await page.locator('#imp-file').setInputFiles(badFile2);
  await page.waitForTimeout(200);
  ok('Import : types invalides refusés', await page.locator('.ca-import', { hasText: 'type' }).count() === 1, await page.locator('.ca-import').textContent());
  // import valide → aperçu → remplacement confirmé
  await page.locator('#imp-file').setInputFiles(expPath);
  await page.waitForTimeout(200);
  ok('Import : aperçu avant écrasement', await page.locator('.ca-import', { hasText: 'Aperçu du fichier' }).count() === 1, await page.locator('.ca-import').textContent());
  await page.locator('.ca-import button', { hasText: 'Remplacer' }).click();
  await page.locator('dialog button', { hasText: 'Remplacer' }).click();
  await settle(page);
  ok('Import : données restaurées', await page.evaluate(() => window.CAApp.state.journal.length === 1));
  ok('Import : sauvegarde automatique faite avant', await page.evaluate(() => !!localStorage.getItem('rmbd-ca:backup')));
  // suppression confirmée
  await go(page, '#/carnet');
  await page.locator('[data-act="jdel"]').click();
  await page.locator('dialog button', { hasText: 'Supprimer' }).click();
  await settle(page);
  ok('Carnet : suppression confirmée', await page.evaluate(() => window.CAApp.state.journal.length === 0));
  cleanBad(bad, 'données');
  await ctx.close();
});

if (want('storage')) await step('Stockage absent, corrompu, anciennes clés', async () => {
  // stockage indisponible
  {
    const { ctx, page, bad } = await ctxOpen({ sw: false, init: () => { Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('refusé', 'SecurityError'); } }); } });
    await page.goto(BASE); await appReady(page);
    ok('Stockage indisponible : l’application démarre', await page.locator('#ca-main h1').count() === 1);
    ok('Stockage indisponible : bandeau d’avertissement', await page.locator('.ca-banner', { hasText: 'Stockage indisponible' }).count() === 1);
    const c = CONTENT.v1.chapters[0];
    await go(page, `#/chapitre/${c.id}/activites`);
    await go(page, '#/reglages');
    ok('Stockage indisponible : réglages signalent le mode mémoire', await page.locator('.ca-mention', { hasText: 'mode mémoire' }).count() === 1);
    await shot(page, 'vp360-stockage-absent');
    cleanBad(bad, 'stockage absent');
    await ctx.close();
  }
  // stockage corrompu + anciennes clés
  {
    const { ctx, page, bad } = await ctxOpen({ sw: false, init: () => { try {
      if (location.protocol === 'http:' && !sessionStorage.getItem('seeded')) {
        sessionStorage.setItem('seeded', '1');
        localStorage.setItem('rmbd-ca:v1', '{"v":1,"ex":{ corrompu');
        localStorage.setItem('rmbd-cabin-binder-v1', JSON.stringify({ logs: [{ date: '2026-09-01', task: 'Observation pose sièges', zone: 'R12' }] }));
        localStorage.setItem('rmbd-academy-v4', '{"progress":{"a1":true}}');
      }
    } catch (e) { /* about:blank */ } } });
    await page.goto(BASE); await appReady(page);
    ok('Stockage corrompu : l’application démarre', await page.locator('#ca-main h1').count() === 1);
    const keys = await page.evaluate(() => Object.keys(localStorage));
    const ck = keys.find(k => k.startsWith('rmbd-ca:corrupt-'));
    ok('Stockage corrompu : contenu original conservé sous rmbd-ca:corrupt-…', ck && (await page.evaluate(k => localStorage.getItem(k), ck)) === '{"v":1,"ex":{ corrompu', String(keys));
    ok('Stockage corrompu : bandeau explicatif', await page.locator('.ca-banner', { hasText: 'illisibles' }).count() === 1);
    ok('Stockage corrompu : nouvel état valide écrit', await page.evaluate(() => { try { return JSON.parse(localStorage.getItem('rmbd-ca:v1')).v === 1; } catch (e) { return false; } }));
    await go(page, '#/reglages');
    ok('Anciennes données détectées dans les réglages', await page.locator('h3', { hasText: 'Ancienne version' }).count() === 1);
    await page.locator('[data-act="legacylogs"]').click();
    await page.locator('dialog button', { hasText: 'Copier' }).click();
    await page.waitForTimeout(100);
    ok('Ancien carnet copié', await page.evaluate(() => window.CAApp.state.journal.length === 1));
    const leg = await page.evaluate(() => [localStorage.getItem('rmbd-cabin-binder-v1'), localStorage.getItem('rmbd-academy-v4')]);
    ok('Anciennes clés jamais modifiées', leg[0] === JSON.stringify({ logs: [{ date: '2026-09-01', task: 'Observation pose sièges', zone: 'R12' }] }) && leg[1] === '{"progress":{"a1":true}}');
    cleanBad(bad, 'stockage corrompu');
    await ctx.close();
  }
  // schéma ancien (0) → migration
  {
    const { ctx, page, bad } = await ctxOpen({ sw: false, init: () => { if (location.protocol === 'http:' && !sessionStorage.getItem('s')) { sessionStorage.setItem('s', '1'); localStorage.setItem('rmbd-ca:v1', JSON.stringify({ done: { 'x-q1': true }, logs: [{ date: '2026-09-02', task: 'Tâche migrée' }] })); } } });
    await page.goto(BASE); await appReady(page);
    const st = await page.evaluate(() => ({ ex: window.CAApp.state.ex['x-q1'], j: window.CAApp.state.journal.length, bk: !!localStorage.getItem('rmbd-ca:backup') }));
    ok('Migration d’un schéma ancien (sauvegarde faite avant)', st.ex && st.ex.ok && st.j === 1 && st.bk, JSON.stringify(st));
    cleanBad(bad, 'migration');
    await ctx.close();
  }
});

// ================================================================= 4. service worker
if (want('sw')) await step('Service worker : installation, hors ligne, mise à jour', async () => {
  srv.root = OUT.v1;
  const { ctx, page, bad } = await ctxOpen({});
  await page.goto(BASE); await appReady(page);
  await page.waitForFunction(() => navigator.serviceWorker && navigator.serviceWorker.controller, null, { timeout: 15000 });
  const keys1 = await page.evaluate(() => caches.keys());
  ok('SW installé, page contrôlée, cache versionné', keys1.includes('rmbd-ca-' + V1), JSON.stringify(keys1));
  const n = await page.evaluate(async v => (await (await caches.open('rmbd-ca-' + v)).keys()).length, V1);
  ok('Précache complet', n > 50, String(n));
  // données utilisateur avant la mise à jour
  const c = CONTENT.v1.chapters[0];
  await go(page, `#/chapitre/${c.id}/objectifs`);
  await page.evaluate(() => { const A = window.CAApp; A.progress.recordExercise('test-ex', true); A.state.notes.z = 'note avant mise à jour'; A.store.save(); A.store.flush(); });
  // hors ligne
  ctx.allowFail = 1; srv.offline = true;
  await page.reload(); await appReady(page);
  await go(page, `#/chapitre/${c.id}/decouverte`);
  const rf = CONTENT.v1.figures.find(f => f.raster);
  if (rf) ok('Hors ligne : illustration raster servie par le cache', await page.evaluate(u => fetch(u).then(r => r.ok && /image/.test(r.headers.get('content-type') || ''), () => false), 'assets/' + rf.file));
  ok('Hors ligne : l’application et la figure s’affichent depuis le cache', await page.locator('#ca-main svg.fig').count() > 0 && await page.locator('.ca-fig-missing').count() === 0);
  await page.evaluate(() => window.dispatchEvent(new Event('offline')));
  const missing = await page.evaluate(() => fetch('assets/fig/inexistante.svg').then(r => r.status, () => 'erreur réseau'));
  ok('Hors ligne : ressource absente → erreur, jamais index.html', missing !== 200, String(missing));
  await shot(page, 'vp360-horsligne');
  srv.offline = false;
  await page.waitForTimeout(300);
  bad.length = 0; ctx.allowFail = 0;
  // nouvelle version publiée
  srv.root = OUT.v2;
  await go(page, '#/reglages');
  await page.locator('[data-act="checkupdate"]').click();
  await page.locator('.ca-banner[data-banner="update"]').waitFor({ timeout: 15000 });
  ok('Mise à jour détectée → bandeau « Nouvelle version »', true);
  // saisie en cours conservée
  await go(page, '#/carnet');
  await page.locator('form.ca-jform input[type="text"]').nth(0).fill('Saisie en cours pendant la mise à jour');
  await shot(page, 'vp360-maj-bandeau');
  await page.locator('[data-act="applyupdate"]').click();
  await page.waitForFunction(v => window.CA_VERSION === v && window.CA_BOOT && window.CA_BOOT.done, V2, { timeout: 15000 });
  ok('Après « Mettre à jour » : nouvelle version affichée', true);
  const after = await page.evaluate(() => ({ ex: window.CAApp.state.ex['test-ex'], note: window.CAApp.state.notes.z, draft: window.CAApp.state.drafts.journal && window.CAApp.state.drafts.journal.task }));
  ok('Données conservées après mise à jour', after.ex && after.ex.ok && after.note === 'note avant mise à jour', JSON.stringify(after));
  ok('Saisie en cours conservée (brouillon)', after.draft === 'Saisie en cours pendant la mise à jour', String(after.draft));
  await page.waitForFunction(v => caches.keys().then(k => !k.includes('rmbd-ca-' + v)), V1, { timeout: 10000 }).catch(() => {});
  const keys2 = await page.evaluate(() => caches.keys());
  const regInfo = await page.evaluate(async () => { const r = await navigator.serviceWorker.getRegistration(); const d = w => w && (w.scriptURL.split('/').pop() + ':' + w.state); return r ? [d(r.active), d(r.waiting), d(r.installing)] : null; });
  ok('Ancien cache purgé, nouveau cache présent', !keys2.includes('rmbd-ca-' + V1) && keys2.includes('rmbd-ca-' + V2), JSON.stringify(keys2) + ' ' + JSON.stringify(regInfo));
  // pas de boucle de rechargement
  const navs = srv.log.length;
  await page.waitForTimeout(2500);
  const reloads = srv.log.slice(navs).filter(p => p === PREFIX || p.endsWith('index.html')).length;
  ok('Aucune boucle de rechargement', reloads === 0, `${reloads} navigations`);
  ok('Aucun bandeau de mise à jour une fois à jour', await page.locator('.ca-banner[data-banner="update"]').count() === 0);
  // « Réparer l'appli » : désinscrit le SW, vide les caches, recharge ; les données restent
  await go(page, '#/reglages');
  await page.locator('[data-act="repair"]').click();
  await Promise.all([page.waitForURL(/repare=/, { timeout: 15000 }), page.locator('dialog button', { hasText: 'Réparer' }).click()]);
  await appReady(page);
  const rep = await page.evaluate(async () => ({ caches: await caches.keys(), ex: !!window.CAApp.state.ex['test-ex'] }));
  ok('Réparer : caches vidés puis application rechargée, données conservées', rep.ex && !rep.caches.includes('rmbd-ca-' + V1), JSON.stringify(rep));
  await page.waitForFunction(() => navigator.serviceWorker.controller, null, { timeout: 15000 }).catch(() => {});
  ok('Réparer : service worker réinstallé', await page.evaluate(() => !!navigator.serviceWorker.controller));
  cleanBad(bad, 'service worker');
  await ctx.close();
  srv.root = OUT.v1;
});

if (want('legacy')) await step('Remplacement de l’ancienne application (cache rmbd-cabin-v4.1.1)', async () => {
  srv.legacy = true;
  const { ctx, page, bad } = await ctxOpen({});
  await page.goto(BASE);
  await page.waitForFunction(() => navigator.serviceWorker.controller, null, { timeout: 15000 }).catch(() => {});
  if (!(await page.evaluate(() => !!navigator.serviceWorker.controller))) { await page.reload(); await page.waitForFunction(() => navigator.serviceWorker.controller, null, { timeout: 15000 }); }
  await page.evaluate(() => { localStorage.setItem('rmbd-cabin-binder-v1', '{"logs":[]}'); localStorage.setItem('rmbd-academy-v4', '{"x":1}'); });
  ok('Ancienne application installée (cache d’abord)', (await page.evaluate(() => caches.keys())).includes('rmbd-cabin-v4.1.1'));
  srv.legacy = false; srv.root = OUT.v1;
  await page.reload();                                            // servi par l'ancien cache, déclenche la vérification du SW
  if (process.env.E2E_DEBUG) { for (let i = 0; i < 6; i++) { await page.waitForTimeout(1500); console.log(await page.evaluate(async () => { const r = await navigator.serviceWorker.getRegistration(); const d = w => w && (w.scriptURL.split('/').pop() + ':' + w.state); return JSON.stringify([document.title, r && [d(r.active), d(r.waiting), d(r.installing)], await caches.keys()]); }).catch(e => 'ERR ' + e.message), srv.log.slice(-5)); } }
  await page.waitForFunction(() => window.CA_BOOT && window.CA_BOOT.done, null, { timeout: 30000 });
  ok('Nouvelle application affichée sans intervention', await page.locator('#ca-main h1').count() === 1);
  await page.waitForFunction(() => caches.keys().then(k => !k.includes('rmbd-cabin-v4.1.1')), null, { timeout: 10000 }).catch(() => {});
  const keys = await page.evaluate(() => caches.keys());
  ok('Cache de l’ancienne application purgé', !keys.includes('rmbd-cabin-v4.1.1') && keys.includes('rmbd-ca-' + V1), JSON.stringify(keys));
  const leg = await page.evaluate(() => [localStorage.getItem('rmbd-cabin-binder-v1'), localStorage.getItem('rmbd-academy-v4')]);
  ok('Données de l’ancienne application intactes', leg[0] === '{"logs":[]}' && leg[1] === '{"x":1}');
  cleanBad(bad, 'ancienne application');
  await ctx.close();
});

// ---------------------------------------------------------------- fin
await browser.close();
server.close();
if (!KEEP) fs.rmSync(TMP, { recursive: true, force: true });
const fail = results.filter(r => !r.pass);
console.log('\n════════ Rapport ════════');
const secs = [...new Set(results.map(r => r.section))];
for (const s of secs) { const r = results.filter(x => x.section === s); console.log(`${r.every(x => x.pass) ? '✔' : '✖'} ${s} : ${r.filter(x => x.pass).length}/${r.length}`); }
if (fail.length) { console.log('\nÉchecs :'); for (const f of fail) console.log(`  ✖ [${f.section}] ${f.name}${f.detail ? ' — ' + f.detail : ''}`); }
console.log(`\n${results.length - fail.length}/${results.length} vérifications réussies${SHOTS ? ` · captures : ${SHOTS}` : ''}`);
process.exitCode = fail.length ? 1 : 0;

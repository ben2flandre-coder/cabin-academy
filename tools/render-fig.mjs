#!/usr/bin/env node
// Rend une ou plusieurs figures en PNG pour contrôle visuel.
// Usage : node tools/render-fig.mjs <id> [<id>…] [--dark] [--out dossier]
// Écrit /tmp/claude-0/figs/<id>-360.png (lisibilité smartphone) et <id>-900.png ; puis ouvre-les avec l'outil Read.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
const { chromium } = require('/home/claude/.npm-global/lib/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const dark = args.includes('--dark');
const oi = args.indexOf('--out');
const outDir = oi >= 0 ? args[oi + 1] : '/tmp/claude-0/figs';
const ids = args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--out');
fs.mkdirSync(outDir, { recursive: true });
const css = fs.readFileSync(path.join(ROOT, 'assets/figures.css'), 'utf8');
const browser = await chromium.launch();
for (const id of ids) {
  const file = path.join(ROOT, 'assets/fig', id.endsWith('.svg') ? id : `${id}.svg`);
  if (!fs.existsSync(file)) { console.log(`✖ ${file} introuvable`); continue; }
  let svg = fs.readFileSync(file, 'utf8');
  if (!/class="[^"]*\bfig\b/.test(svg.split('>')[0] + '>')) svg = svg.replace('<svg ', '<svg class="fig" ');
  const html = `<!doctype html><meta charset=utf-8><style>${css} body{margin:0;background:var(--f-paper)}</style><body${dark ? ' data-x' : ''}>${svg}</body>`;
  for (const w of [360, 900]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 800 }, deviceScaleFactor: w === 360 ? 2 : 1, colorScheme: dark ? 'dark' : 'light' });
    const page = await ctx.newPage();
    await page.setContent(html);
    const el = await page.$('svg');
    const out = path.join(outDir, `${id.replace(/\.svg$/, '')}-${w}${dark ? '-dark' : ''}.png`);
    await el.screenshot({ path: out });
    await ctx.close();
    console.log('→', out);
  }
}
await browser.close();

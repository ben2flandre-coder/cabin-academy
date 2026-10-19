#!/usr/bin/env node
// Génère les icônes de l'application (dessin original RMBD : coupe de cabine stylisée).
// Usage : node tools/make-icons.mjs → assets/icons/icon.svg, icon-192.png, icon-512.png, icon-maskable-512.png
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
const { chromium } = require('/home/claude/.npm-global/lib/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'assets/icons');
fs.mkdirSync(OUT, { recursive: true });

// Motif : fuselage en coupe (cercle), plancher, deux rangées de sièges, bacs à bagages. Fond plein pour la version masquable.
const motif = `
  <circle cx="256" cy="256" r="166" fill="#1f3a57" stroke="#9fd0f7" stroke-width="26"/>
  <path d="M138 196 Q256 150 374 196" fill="none" stroke="#ffffff" stroke-width="20" stroke-linecap="round"/>
  <path d="M112 318 H400" stroke="#ffffff" stroke-width="20" stroke-linecap="round"/>
  <rect x="152" y="246" width="46" height="62" rx="11" fill="#ffb347"/>
  <rect x="208" y="246" width="46" height="62" rx="11" fill="#ffb347"/>
  <rect x="290" y="246" width="46" height="62" rx="11" fill="#ffb347"/>
  <path d="M206 360 h100" stroke="#9fd0f7" stroke-width="16" stroke-linecap="round"/>`;
const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="112" fill="#14283d"/>${motif}</svg>\n`;
const maskable = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" fill="#14283d"/><g transform="translate(256 256) scale(.78) translate(-256 -256)">${motif}</g></svg>\n`;
fs.writeFileSync(path.join(OUT, 'icon.svg'), icon);
const browser = await chromium.launch();
const page = await browser.newPage();
for (const [name, svg, size] of [['icon-192.png', icon, 192], ['icon-512.png', icon, 512], ['icon-maskable-512.png', maskable, 512]]) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(`<!doctype html><style>html,body{margin:0;background:transparent}svg{display:block;width:${size}px;height:${size}px}</style>${svg}`);
  await page.locator('svg').screenshot({ path: path.join(OUT, name), omitBackground: true });
  console.log('→', path.join('assets/icons', name));
}
await browser.close();

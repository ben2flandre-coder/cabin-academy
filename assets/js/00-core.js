/* RMBD Cabin Academy — noyau : espace de noms, utilitaires, création de DOM sûre, délégation d'événements.
   Règles du moteur :
   - aucun innerHTML : tout le DOM est construit par h() ; les textes passent par des nœuds texte ;
   - aucun gestionnaire inline : les clics sont délégués (attribut data-act → A.actions) ;
   - chaque fichier de assets/js est une fonction auto-appelée qui enrichit window.CAApp. */
(function () {
  'use strict';
  const A = window.CAApp = window.CAApp || {};
  A.VERSION = window.CA_VERSION || 'dev';

  // ---------- types et textes ----------
  A.arr = a => (Array.isArray(a) ? a : []);
  A.str = s => (typeof s === 'string' ? s : (s === null || s === undefined ? '' : String(s)));
  A.isObj = o => !!o && typeof o === 'object' && !Array.isArray(o);
  A.clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));
  /** Normalisation pour recherche et comparaison : minuscules, sans accents, espaces compactés. */
  A.norm = s => A.str(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[‘’ʼ]/g, "'").replace(/\s+/g, ' ').trim();
  A.slug = s => A.norm(s).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  /** Comparaison des réponses saisies : insensible à la casse, aux accents, aux espaces et aux tirets. */
  A.normAnswer = s => A.norm(s).replace(/[\s\-‐-―_]/g, '');
  A.plural = (n, one, many) => (Math.abs(n) > 1 ? many : one);
  A.count = (n, one, many) => `${n} ${A.plural(n, one, many)}`;

  // ---------- dates (jours locaux, format AAAA-MM-JJ) ----------
  const pad = n => String(n).padStart(2, '0');
  A.dayOf = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  /** A.today() peut être décalé dans les tests avec window.CA_TEST_DAY_OFFSET (nombre de jours). */
  A.now = () => new Date(Date.now() + (Number(window.CA_TEST_DAY_OFFSET) || 0) * 86400000);
  A.today = () => A.dayOf(A.now());
  A.isDay = s => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s + 'T12:00:00'));
  A.parseDay = s => new Date(s + 'T12:00:00');
  A.addDays = (day, n) => { const d = A.parseDay(day); d.setDate(d.getDate() + n); return A.dayOf(d); };
  A.daysBetween = (a, b) => Math.round((A.parseDay(b) - A.parseDay(a)) / 86400000);
  A.fmtDay = (day, opts) => {
    if (!A.isDay(day)) return '';
    try { return new Intl.DateTimeFormat('fr-FR', opts || { day: 'numeric', month: 'long', year: 'numeric' }).format(A.parseDay(day)); }
    catch (e) { return day.split('-').reverse().join('/'); }
  };
  A.fmtDateTime = iso => {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return '';
    try { return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }).format(d); }
    catch (e) { return d.toISOString().slice(0, 16).replace('T', ' '); }
  };
  A.relDay = day => {
    const n = A.daysBetween(A.today(), day);
    if (n <= 0) return "aujourd'hui";
    if (n === 1) return 'demain';
    return `dans ${n} jours`;
  };

  // ---------- divers ----------
  A.uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  /** Mélange (Fisher-Yates). Si « differ » est vrai, garantit un ordre différent de l'ordre d'origine quand c'est possible. */
  A.shuffle = (list, differ) => {
    const a = list.slice();
    for (let pass = 0; pass < 6; pass++) {
      for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; }
      if (!differ || a.length < 2 || a.some((x, i) => x !== list[i])) return a;
    }
    a.push(a.shift());
    return a;
  };
  A.debounce = (fn, ms) => { let t = 0; const d = (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); }; d.cancel = () => clearTimeout(t); return d; };

  // ---------- DOM ----------
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const BOOL_PROPS = new Set(['hidden', 'disabled', 'checked', 'open', 'selected', 'required', 'readOnly', 'multiple', 'noValidate', 'inert']);
  function append(parent, child) {
    if (child === null || child === undefined || child === false || child === true) return;
    if (Array.isArray(child)) { for (const c of child) append(parent, c); return; }
    if (child instanceof Node) { parent.appendChild(child); return; }
    parent.appendChild(document.createTextNode(String(child)));          // toujours un nœud texte : jamais de HTML
  }
  function setAttrs(el, attrs, isSvg) {
    if (!attrs) return;
    for (const key of Object.keys(attrs)) {
      const v = attrs[key];
      if (v === null || v === undefined || v === false) continue;
      if (/^on/i.test(key)) throw new Error('h() : pas de gestionnaire inline (utilise data-act et la délégation)');
      if (key === 'class') { if (v) el.setAttribute('class', Array.isArray(v) ? v.filter(Boolean).join(' ') : String(v)); }
      else if (key === 'dataset') { for (const k of Object.keys(v)) if (v[k] !== null && v[k] !== undefined && v[k] !== false) el.dataset[k] = String(v[k]); }
      else if (key === 'style') { for (const k of Object.keys(v)) el.style.setProperty(k, String(v[k])); }
      else if (!isSvg && BOOL_PROPS.has(key)) el[key] = !!v;
      else if (!isSvg && key === 'value') el.value = String(v);
      else if (!isSvg && key === 'for') el.htmlFor = String(v);
      else el.setAttribute(key, v === true ? '' : String(v));
    }
  }
  /** h('button', {class:'ca-btn', dataset:{act:'x'}}, 'Texte', autreNoeud) → élément. Les chaînes deviennent des nœuds texte. */
  A.h = (tag, attrs, ...children) => {
    const el = document.createElement(tag);
    setAttrs(el, attrs, false);
    append(el, children);
    return el;
  };
  A.svg = (tag, attrs, ...children) => {
    const el = document.createElementNS(SVG_NS, tag);
    setAttrs(el, attrs, true);
    append(el, children);
    return el;
  };
  A.frag = (...children) => { const f = document.createDocumentFragment(); append(f, children); return f; };
  A.clear = el => { while (el && el.firstChild) el.removeChild(el.firstChild); return el; };
  A.replace = (el, ...children) => { A.clear(el); append(el, children); return el; };
  A.qs = (sel, root) => (root || document).querySelector(sel);
  A.qsa = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /** Délégation locale : A.on(racine, 'click', '[data-act]', (ev, cible) => …). Retourne la fonction de retrait. */
  A.on = (root, type, selector, handler, opts) => {
    const fn = ev => {
      const start = ev.target instanceof Element ? ev.target : (ev.target && ev.target.parentElement);
      const hit = start ? start.closest(selector) : null;
      if (hit && root.contains(hit)) handler(ev, hit);
    };
    root.addEventListener(type, fn, opts);
    return () => root.removeEventListener(type, fn, opts);
  };

  /** Actions globales : un élément portant data-act="nom" déclenche A.actions[nom](élément, événement). */
  A.actions = {};

  /** Focus sans défilement parasite. */
  A.focus = el => { if (!el) return; try { el.focus({ preventScroll: false }); } catch (e) { try { el.focus(); } catch (e2) { /* rien */ } } };

  // ---------- fichiers ----------
  A.download = (filename, mime, text) => {
    try {
      const blob = new Blob([text], { type: mime });
      const url = URL.createObjectURL(blob);
      const a = A.h('a', { href: url, download: filename, class: 'ca-sr' }, filename);
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { a.remove(); URL.revokeObjectURL(url); }, 1500);
      return true;
    } catch (e) { return false; }
  };
  /** CSV (séparateur point-virgule, guillemets doublés, BOM pour les tableurs). Neutralise les formules. */
  A.csv = rows => '﻿' + rows.map(r => r.map(cell => {
    let s = A.str(cell).replace(/\r?\n/g, ' ');
    if (/^[=+\-@\t]/.test(s)) s = "'" + s;
    return /[";\n]/.test(s) || /^\s|\s$/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }).join(';')).join('\r\n') + '\r\n';
})();

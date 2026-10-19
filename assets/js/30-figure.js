/* Figures : SVG inlinés (fetch + cache mémoire + nettoyage), légende numérotée générée depuis parts[],
   surbrillance (.hl), provenance/droits, visionneuse plein écran (pincer, double-toucher, +/−, glisser, clavier). */
(function () {
  'use strict';
  const A = window.CAApp;
  const { h, arr } = A;
  const cache = new Map();          // fichier → Promise<Document SVG analysé>
  let uniq = 0;

  function load(fig) {
    const file = (fig && (fig.file || fig.id + '.svg')) || '';
    if (!/^[a-z0-9][a-z0-9._-]*\.svg$/i.test(file)) return Promise.reject(new Error('nom de fichier invalide'));
    if (!cache.has(file)) {
      const p = fetch(`assets/fig/${file}?v=${encodeURIComponent(A.VERSION)}`)
        .then(r => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          return r.text();
        })
        .then(text => {
          if (!/<svg[\s>]/.test(text.slice(0, 2000))) throw new Error('le fichier n’est pas un SVG');
          const doc = new DOMParser().parseFromString(text, 'image/svg+xml');
          if (doc.querySelector('parsererror') || !doc.documentElement || doc.documentElement.nodeName.toLowerCase() !== 'svg') throw new Error('SVG illisible');
          clean(doc.documentElement);
          return doc;
        });
      p.catch(() => cache.delete(file));    // un échec (hors ligne…) pourra être retenté
      cache.set(file, p);
    }
    return cache.get(file);
  }
  /** Défense en profondeur : les figures sont validées au build, on retire quand même tout élément actif. */
  function clean(root) {
    for (const el of Array.from(root.querySelectorAll('script,foreignObject,image,style,iframe,a'))) el.remove();
    for (const el of [root, ...root.querySelectorAll('*')]) {
      for (const at of Array.from(el.attributes)) {
        const n = at.name.toLowerCase();
        if (n.startsWith('on')) el.removeAttribute(at.name);
        else if ((n === 'href' || n === 'xlink:href') && !at.value.startsWith('#')) el.removeAttribute(at.name);
      }
    }
  }
  /** Copie importée dans la page, avec des id rendus uniques (plusieurs figures par page). */
  function instance(doc) {
    const svg = document.importNode(doc.documentElement, true);
    const pre = 'cafig' + (++uniq) + '-';
    const ids = new Map();
    for (const el of svg.querySelectorAll('[id]')) { ids.set(el.id, pre + el.id); el.id = pre + el.id; }
    if (ids.size) {
      for (const el of [svg, ...svg.querySelectorAll('*')]) {
        for (const at of Array.from(el.attributes)) {
          if (at.name === 'aria-labelledby' || at.name === 'aria-describedby') el.setAttribute(at.name, at.value.split(/\s+/).map(t => ids.get(t) || t).join(' '));
          else if ((at.name === 'href' || at.name === 'xlink:href') && at.value.startsWith('#') && ids.has(at.value.slice(1))) el.setAttribute(at.name, '#' + ids.get(at.value.slice(1)));
          else if (at.value.includes('url(#')) el.setAttribute(at.name, at.value.replace(/url\(#([^)]+)\)/g, (m, id) => `url(#${ids.get(id) || id})`));
        }
      }
    }
    svg.classList.add('fig');
    svg.removeAttribute('width'); svg.removeAttribute('height');
    svg.setAttribute('focusable', 'false');
    return svg;
  }
  const partsOf = (svg, id) => Array.from(svg.querySelectorAll('[data-part]')).filter(g => g.getAttribute('data-part') === id);

  /**
   * A.figure(id, opts) → élément <figure> rempli de façon asynchrone.
   * opts : legend (true), zoom (true), caption (true), hl [parts], interactive (masque badges et légende), onReady(api)
   */
  A.figure = (figId, opts) => {
    const o = Object.assign({ legend: true, zoom: true, caption: true }, opts || {});
    const meta = A.C.figure(figId);
    const stage = h('div', { class: 'ca-fig-stage' }, h('p', { class: 'ca-fig-wait' }, 'Chargement de la figure…'));
    const el = h('figure', { class: 'ca-fig' + (o.interactive ? ' is-interactive' : ''), dataset: { fig: figId } }, stage);
    el._opts = o;
    if (!meta) {
      A.replace(stage, missing(`La figure « ${figId} » n'est pas encore disponible dans l'application.`));
      if (o.onError) o.onError();
      return el;
    }
    if (o.caption) {
      el.appendChild(h('figcaption', { class: 'ca-fig-cap' },
        h('span', { class: 'ca-fig-title' }, meta.title || ''),
        meta.caption ? h('span', { class: 'ca-fig-text' }, ' ', A.rich(meta.caption)) : null));
    }
    const parts = arr(meta.parts).filter(p => A.isObj(p) && p.id).slice().sort((a, b) => (a.n || 0) - (b.n || 0));
    let legend = null;
    if (o.legend && !o.interactive && parts.length) {
      legend = h('ol', { class: 'ca-legend', 'aria-label': 'Légende de la figure' },
        parts.map(p => h('li', { dataset: { part: p.id } },
          h('span', { class: 'ca-legend-n', 'aria-hidden': 'true' }, String(p.n || '')),
          h('span', { class: 'ca-legend-t' }, h('span', { class: 'ca-sr' }, `${p.n}. `), h('span', { class: 'ca-legend-fr' }, p.fr), p.en ? h('span', { class: 'ca-legend-en', lang: 'en' }, ' — ' + p.en) : null))));
      el.appendChild(legend);
    }
    if (!o.interactive) {
      el.appendChild(h('details', { class: 'ca-fig-src' }, h('summary', null, 'Provenance et droits'),
        h('p', null, meta.provenance || 'Provenance non renseignée'), h('p', null, meta.rights || ''), meta.purpose ? h('p', null, 'But : ', A.rich(meta.purpose)) : null));
    }
    const api = { el, meta, svg: null, parts, setHl: null, ready: null };
    api.setHl = ids => {
      const set = new Set(arr(ids));
      if (api.svg) for (const g of api.svg.querySelectorAll('[data-part]')) g.classList.toggle('hl', set.has(g.getAttribute('data-part')));
      if (legend) for (const li of legend.children) li.classList.toggle('is-hl', set.has(li.dataset.part));
    };
    api.ready = load(meta).then(doc => {
      const svg = instance(doc);
      // le titre/desc du SVG sert d'alternative ; on garantit un aria-label si le SVG n'en a pas
      if (!svg.getAttribute('aria-labelledby')) svg.setAttribute('aria-label', meta.alt || meta.title || 'Figure');
      svg.setAttribute('role', 'img');
      if (meta.alt) {
        const desc = svg.querySelector('desc');
        if (desc) desc.textContent = meta.alt;
      }
      if (o.interactive) svg.classList.add('nobadges');
      api.svg = svg;
      const children = [svg];
      if (o.zoom && !o.interactive) {
        children.push(h('button', { type: 'button', class: 'ca-fig-zoom', dataset: { act: 'figzoom', fig: figId }, 'aria-label': `Agrandir la figure « ${meta.title || figId} » en plein écran` }, A.icon('expand'), h('span', null, 'Agrandir')));
      }
      A.replace(stage, children);
      if (o.hl) api.setHl(o.hl);
      if (o.onReady) o.onReady(api);
      return api;
    }).catch(err => {
      A.replace(stage, missing(`Figure indisponible : « ${meta.title || figId} » (${err && err.message ? err.message : 'erreur'}). Vérifie ta connexion ; si le problème persiste, utilise « Réparer l'appli » dans les réglages.`, figId));
      if (o.onError) o.onError(err);
      return api;
    });
    el._fig = api;
    return el;
  };
  function missing(text, figId) {
    return h('div', { class: 'ca-fig-missing', role: 'note' }, A.icon('image'), h('p', null, text),
      figId ? h('button', { type: 'button', class: 'ca-btn is-small', dataset: { act: 'figretry', fig: figId } }, A.icon('refresh'), h('span', null, 'Réessayer')) : null);
  }
  A.actions.figretry = el => {
    const figEl = el.closest('figure.ca-fig');
    if (!figEl) return;
    const fresh = A.figure(el.dataset.fig, figEl._opts || {});
    figEl.replaceWith(fresh);
  };
  A.figParts = partsOf;
  A.figLoad = load;
  A.figInstance = instance;

  // ---------- visionneuse plein écran ----------
  A.actions.figzoom = el => {
    const figEl = el.closest('figure.ca-fig');
    const api = figEl && figEl._fig;
    if (!api || !api.svg) return;
    A.zoom(api.meta, api.svg);
  };
  A.zoom = (meta, sourceSvg) => {
    const svg = sourceSvg.cloneNode(true);
    // nouveaux id pour la copie
    let k = 0;
    const pre = 'cazoom' + (++uniq) + '-';
    for (const n of svg.querySelectorAll('[id]')) { const old = n.id; n.id = pre + (k++); for (const r of svg.querySelectorAll(`[aria-labelledby~="${old}"]`)) r.setAttribute('aria-labelledby', r.getAttribute('aria-labelledby').replace(old, n.id)); }
    svg.classList.remove('tappable');
    const layer = h('div', { class: 'ca-zoom-layer' }, svg);
    const stage = h('div', { class: 'ca-zoom-stage', tabindex: '0', 'aria-label': 'Figure agrandie : pincer ou utiliser + et − pour zoomer, glisser pour se déplacer' }, layer);
    const level = h('span', { class: 'ca-zoom-level', 'aria-live': 'polite' }, '100 %');
    const tb = (act, icon, label) => h('button', { type: 'button', class: 'ca-iconbtn', dataset: { z: act }, 'aria-label': label, title: label }, A.icon(icon));
    const bar = h('div', { class: 'ca-zoom-bar' }, tb('out', 'zoomout', 'Zoom arrière'), level, tb('in', 'zoomin', 'Zoom avant'), tb('reset', 'refresh', 'Taille initiale'));
    const m = A.modal({ title: meta.title || 'Figure', cls: 'ca-dlg-zoom', body: [bar, stage, h('p', { class: 'ca-zoom-help' }, 'Pince ou double-touche pour zoomer, glisse pour te déplacer. Échap ou « retour » pour fermer.')], focus: '.ca-zoom-stage' });
    let s = 1, x = 0, y = 0;
    const MIN = 1, MAX = 6;
    const apply = () => {
      const r = stage.getBoundingClientRect();
      const maxX = (r.width * (s - 1)) / 2, maxY = (r.height * (s - 1)) / 2;
      x = A.clamp(x, -maxX - r.width * 0.25 * (s > 1 ? 1 : 0), maxX + r.width * 0.25 * (s > 1 ? 1 : 0));
      y = A.clamp(y, -maxY - r.height * 0.25 * (s > 1 ? 1 : 0), maxY + r.height * 0.25 * (s > 1 ? 1 : 0));
      if (s === 1) { x = 0; y = 0; }
      layer.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
      level.textContent = Math.round(s * 100) + ' %';
    };
    const zoomAt = (ns, cx, cy) => {
      const r = stage.getBoundingClientRect();
      const px = (cx === undefined ? r.width / 2 : cx - r.left) - r.width / 2;
      const py = (cy === undefined ? r.height / 2 : cy - r.top) - r.height / 2;
      const n = A.clamp(ns, MIN, MAX);
      x = px - ((px - x) * n) / s;
      y = py - ((py - y) * n) / s;
      s = n; apply();
    };
    bar.addEventListener('click', ev => {
      const b = ev.target.closest('[data-z]'); if (!b) return;
      if (b.dataset.z === 'in') zoomAt(s * 1.5); else if (b.dataset.z === 'out') zoomAt(s / 1.5); else { s = 1; apply(); }
    });
    const pts = new Map();
    let pinch = null, pan = null, lastTap = 0, lastTapX = 0, lastTapY = 0;
    stage.addEventListener('pointerdown', ev => {
      stage.setPointerCapture && stage.setPointerCapture(ev.pointerId);
      pts.set(ev.pointerId, { x: ev.clientX, y: ev.clientY });
      if (pts.size === 2) {
        const [a, b] = Array.from(pts.values());
        pinch = { d: Math.hypot(a.x - b.x, a.y - b.y) || 1, s, cx: (a.x + b.x) / 2, cy: (a.y + b.y) / 2 };
        pan = null;
      } else if (pts.size === 1) pan = { x: ev.clientX, y: ev.clientY, ox: x, oy: y, moved: false };
    });
    stage.addEventListener('pointermove', ev => {
      if (!pts.has(ev.pointerId)) return;
      pts.set(ev.pointerId, { x: ev.clientX, y: ev.clientY });
      if (pinch && pts.size >= 2) {
        const [a, b] = Array.from(pts.values());
        const d = Math.hypot(a.x - b.x, a.y - b.y) || 1;
        zoomAt((pinch.s * d) / pinch.d, pinch.cx, pinch.cy);
      } else if (pan) {
        const dx = ev.clientX - pan.x, dy = ev.clientY - pan.y;
        if (Math.abs(dx) + Math.abs(dy) > 4) pan.moved = true;
        if (s > 1) { x = pan.ox + dx; y = pan.oy + dy; apply(); }
      }
    });
    const up = ev => {
      if (!pts.has(ev.pointerId)) return;
      pts.delete(ev.pointerId);
      if (pts.size < 2) pinch = null;
      if (pts.size === 0 && pan && !pan.moved && ev.type === 'pointerup') {
        const t = Date.now();
        if (t - lastTap < 320 && Math.hypot(ev.clientX - lastTapX, ev.clientY - lastTapY) < 30) { zoomAt(s > 1.4 ? 1 : 2.5, ev.clientX, ev.clientY); lastTap = 0; }
        else { lastTap = t; lastTapX = ev.clientX; lastTapY = ev.clientY; }
      }
      if (pts.size === 0) pan = null;
    };
    stage.addEventListener('pointerup', up);
    stage.addEventListener('pointercancel', up);
    stage.addEventListener('wheel', ev => { ev.preventDefault(); zoomAt(s * (ev.deltaY < 0 ? 1.2 : 1 / 1.2), ev.clientX, ev.clientY); }, { passive: false });
    stage.addEventListener('keydown', ev => {
      const step = 40;
      if (ev.key === '+' || ev.key === '=') zoomAt(s * 1.5);
      else if (ev.key === '-') zoomAt(s / 1.5);
      else if (ev.key === '0') { s = 1; apply(); }
      else if (ev.key === 'ArrowLeft') { x += step; apply(); }
      else if (ev.key === 'ArrowRight') { x -= step; apply(); }
      else if (ev.key === 'ArrowUp') { y += step; apply(); }
      else if (ev.key === 'ArrowDown') { y -= step; apply(); }
      else return;
      ev.preventDefault();
    });
    apply();
    return m;
  };
})();

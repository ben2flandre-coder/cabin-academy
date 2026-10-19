/* Cas pratiques transversaux (CONTENT-GUIDE §11) et bibliothèque des sources. */
(function () {
  'use strict';
  const A = window.CAApp;
  const { h, arr } = A;
  const LEVEL = { 1: 'Niveau 1 · après le domaine B', 2: 'Niveau 2 · après le domaine E', 3: 'Niveau 3 · parcours complet' };

  A.screens.cas = args => (args[0] ? reader(args[0]) : list());

  function list() {
    const cases = A.C.cases();
    const nodes = [A.ui.head('Cas pratiques', { crumbs: [['Plus', '#/plus'], ['Cas pratiques', null]], lead: 'Des interventions fictives en plusieurs décisions, qui mobilisent plusieurs chapitres. Un mauvais choix montre sa conséquence, puis tu rejoues l’étape.' })];
    if (!cases.length) {
      nodes.push(A.ui.empty('Aucun cas pratique publié pour l’instant.', 'Les cas arrivent avec les prochaines versions, une fois les chapitres correspondants publiés. En attendant, entraîne-toi avec les situations professionnelles de chaque chapitre (rubrique 10).', A.ui.btn('Voir le parcours', { href: '#/parcours' }, 'route')));
    } else {
      nodes.push(h('ul', { class: 'ca-chapters' }, cases.slice().sort((a, b) => (a.level || 9) - (b.level || 9) || a.id.localeCompare(b.id)).map(k => {
        const r = A.state.cases[k.id];
        const after = k.after ? A.C.chapter(k.after) : null;
        return h('li', { class: 'ca-chcard' }, h('a', { href: '#/cas/' + k.id, class: 'ca-chcard-a' },
          h('div', { class: 'ca-chcard-top' }, h('span', { class: 'ca-chid' }, k.id.toUpperCase()), r && r.done ? h('span', { class: 'ca-status is-solid' }, `Terminé · ${A.count(r.best === null ? r.errors : r.best, 'erreur', 'erreurs')}`) : r ? h('span', { class: 'ca-status is-doing' }, `En cours · étape ${r.step + 1}`) : h('span', { class: 'ca-status is-new' }, 'Non commencé')),
          h('p', { class: 'ca-chcard-t' }, k.title || k.id),
          h('p', { class: 'ca-small ca-muted' }, `${LEVEL[k.level] || ''} · ${k.minutes || '?'} min · ${A.count(arr(k.steps).length, 'étape', 'étapes')}`),
          k.after ? h('p', { class: 'ca-small ca-muted' }, `Conseillé après ${k.after.toUpperCase()}${after ? ' — ' + after.title : ' (à venir)'}`) : null));
      })));
    }
    return { title: 'Cas pratiques', node: h('div', { class: 'ca-page' }, nodes) };
  }

  function reader(id) {
    const k = A.C.caseById(id);
    if (!k) {
      return { title: 'Cas introuvable', node: h('div', { class: 'ca-page' }, A.ui.head('Cas introuvable', { crumbs: [['Cas pratiques', '#/cas'], ['?', null]] }),
        A.ui.card(null, A.P(`Aucun cas pratique ne porte l’identifiant « ${id} ».`), A.ui.btn('Tous les cas', { href: '#/cas', class: 'is-primary' }, 'briefcase'))) };
    }
    const steps = arr(k.steps).filter(A.isObj);
    const stage = h('div', { class: 'ca-case-stage' });
    const prog = h('div');
    const rec = () => A.state.cases[k.id] || (A.state.cases[k.id] = { step: 0, errors: 0, done: false, runs: 0, best: null, at: new Date().toISOString() });
    const touch = () => { rec().at = new Date().toISOString(); A.store.save(); };

    const intro = () => {
      A.replace(prog);
      const r = A.state.cases[k.id];
      A.replace(stage,
        h('section', { class: 'ca-block' }, h('h2', { tabindex: '-1' }, 'Contexte'), A.paras(k.intro),
          k.fig ? A.figure(k.fig) : null, k.doc ? A.ui.doc(k.doc) : null,
          arr(k.chapters).length ? h('p', { class: 'ca-small ca-muted' }, 'Chapitres mobilisés : ', arr(k.chapters).map((c, i) => [i ? ', ' : '', A.C.chapter(c) ? h('a', { href: '#/chapitre/' + c }, c.toUpperCase()) : c.toUpperCase() + ' (à venir)'])) : null,
          r && r.done ? h('p', null, A.icon('check', { size: 18 }), ` Déjà terminé ${A.count(r.runs, 'fois', 'fois')} · meilleur résultat : ${A.count(r.best === null ? r.errors : r.best, 'erreur', 'erreurs')}.`) : null,
          h('div', { class: 'ca-row' },
            r && !r.done && r.step > 0 && r.step < steps.length ? A.ui.btn(`Reprendre à l’étape ${r.step + 1}`, { class: 'is-primary', dataset: { cs: 'resume' } }, 'play') : null,
            A.ui.btn(r ? 'Recommencer depuis le début' : 'Commencer', { class: r && !r.done && r.step > 0 ? '' : 'is-primary', dataset: { cs: 'start' } }, 'play'))));
      A.focus(A.qs('h2', stage));
    };
    const showStep = (i, retry) => {
      const st = steps[i];
      if (!st) return debrief();
      const r = rec(); r.step = i; touch();
      A.replace(prog, h('p', { class: 'ca-kicker' }, `Étape ${i + 1} sur ${steps.length} · ${A.count(r.errors, 'erreur', 'erreurs')} jusqu’ici`), A.ui.progress(i, steps.length, 'Avancement du cas'));
      A.replace(stage, h('section', { class: 'ca-block ca-case-step' },
        h('h2', { tabindex: '-1' }, `Étape ${i + 1}`),
        A.paras(st.text), st.fig ? A.figure(st.fig) : null,
        h('p', { class: 'ca-ex-q' }, h('strong', null, A.rich(st.question || 'Que fais-tu ?'))),
        A.decision(st.options, {
          retry, revealAll: false,
          onAnswer(ok, chosen, fb) {
            if (!ok) { rec().errors += 1; touch(); }
            const btn = ok
              ? h('button', { type: 'button', class: 'ca-btn is-primary' }, h('span', null, i + 1 < steps.length ? 'Étape suivante' : 'Voir le débrief'), A.icon('right'))
              : h('button', { type: 'button', class: 'ca-btn is-primary' }, A.icon('refresh'), h('span', null, 'Rejouer l’étape'));
            btn.addEventListener('click', () => (ok ? showStep(i + 1) : showStep(i, true)));
            A.replace(fb,
              h('p', { class: 'ca-verdict is-' + (ok ? 'ok' : 'ko') }, A.icon(ok ? 'check' : 'alert'), h('strong', null, ok ? 'Bonne décision.' : 'Conséquence de ce choix :')),
              h('div', { class: 'ca-explain' }, A.P(chosen.why || '')),
              ok ? null : h('p', { class: 'ca-hint' }, 'Rejoue l’étape : les options seront mélangées.'),
              h('div', { class: 'ca-ex-actions' }, btn));
            fb.hidden = false;
            A.notify(ok ? 'Bonne décision.' : 'Ce choix a une conséquence : lis-la, puis rejoue l’étape.', ok ? 'ok' : 'ko');
            A.focus((fb.firstChild.setAttribute('tabindex', '-1'), fb.firstChild));
          },
        })));
      A.focus(A.qs('h2', stage));
    };
    const debrief = () => {
      const r = rec();
      if (!r.done || r.step < steps.length) { r.runs += 1; r.best = r.best === null ? r.errors : Math.min(r.best, r.errors); }
      r.done = true; r.step = steps.length; touch(); A.store.flush();
      A.replace(prog, A.ui.progress(steps.length, steps.length, 'Avancement du cas'));
      A.replace(stage, h('section', { class: 'ca-block' },
        h('h2', { tabindex: '-1' }, 'Débrief'),
        h('p', { class: 'ca-verdict is-' + (r.errors ? 'ko' : 'ok') }, A.icon(r.errors ? 'info' : 'check'), h('strong', null, r.errors ? `Cas terminé avec ${A.count(r.errors, 'mauvais choix', 'mauvais choix')}.` : 'Cas terminé sans erreur.')),
        A.paras(k.debrief),
        h('p', { class: 'ca-hint' }, 'Résultat conservé sur cet appareil. Ce cas est fictif : il ne s’inscrit pas dans ton carnet de bord.'),
        h('div', { class: 'ca-row' }, A.ui.btn('Rejouer le cas', { dataset: { cs: 'start' } }, 'refresh'), A.ui.btn('Tous les cas', { href: '#/cas', class: 'is-primary' }, 'briefcase'))));
      A.focus(A.qs('h2', stage));
    };
    const root = h('div', { class: 'ca-page ca-case' },
      A.ui.head(k.title || k.id, { crumbs: [['Cas pratiques', '#/cas'], [k.id.toUpperCase(), null]], kicker: `${LEVEL[k.level] || ''} · ${k.minutes || '?'} min`, lead: 'Situation fictive à visée pédagogique.' }),
      prog, stage);
    A.on(root, 'click', '[data-cs]', (ev, b) => {
      if (b.dataset.cs === 'resume') showStep(rec().step);
      else { const r = rec(); r.step = 0; r.errors = 0; if (r.done) r.done = false; touch(); showStep(0); }
    });
    intro();
    return { title: k.title || 'Cas pratique', node: root };
  }

  // ---------- Sources ----------
  const KINDS = [['officiel', 'Textes officiels et référentiels'], ['institutionnel', 'Organismes de formation et de prévention'], ['constructeur', 'Constructeur'], ['general', 'Ressources générales'], ['rmbd', 'RMBD']];
  A.screens.sources = () => {
    const src = A.C.sources();
    const users = new Map();
    for (const c of A.C.chapters()) for (const s of arr(c.sources)) { if (!users.has(s)) users.set(s, []); users.get(s).push(c.id); }
    for (const k of A.C.cases()) for (const s of arr(k.sources)) { if (!users.has(s)) users.set(s, []); users.get(s).push(k.id); }
    const known = new Set(KINDS.map(k => k[0]));
    const groups = KINDS.concat([['autre', 'Autres']]).map(([kind, label]) => [label, src.filter(s => (kind === 'autre' ? !known.has(s.kind) : s.kind === kind))]).filter(g => g[1].length);
    return { title: 'Sources', node: h('div', { class: 'ca-page' },
      A.ui.head('Sources', { crumbs: [['Plus', '#/plus'], ['Sources', null]], lead: `${src.length} sources publiques consultées pour rédiger les chapitres. Aucune documentation confidentielle n’est utilisée.` }),
      groups.length ? groups.map(([label, list]) => h('section', { class: 'ca-card' }, h('h2', null, label),
        h('ul', { class: 'ca-sources' }, list.map(s => {
          const u = users.get(s.id) || [];
          let safe = null;
          try { const url = new URL(s.url); if (url.protocol === 'https:' || url.protocol === 'http:') safe = url.href; } catch (e) { safe = null; }
          return h('li', { class: 'ca-source', id: 'src-' + s.id },
            h('p', { class: 'ca-source-t' }, safe ? h('a', { href: safe, target: '_blank', rel: 'noopener noreferrer' }, s.title || s.id, ' ', A.icon('external', { size: 16 }), h('span', { class: 'ca-sr' }, ' (site externe, nouvel onglet)')) : (s.title || s.id)),
            h('p', { class: 'ca-small ca-muted' }, [s.publisher, s.lang ? s.lang.toUpperCase() : '', s.accessed ? `consulté le ${A.fmtDay(s.accessed)}` : ''].filter(Boolean).join(' · ')),
            s.supports ? h('p', { class: 'ca-small' }, h('strong', null, 'Appuie : '), s.supports) : null,
            s.note ? h('p', { class: 'ca-small' }, s.note) : null,
            h('p', { class: 'ca-small' }, h('strong', null, 'Utilisée par : '), u.length ? u.map((id, i) => [i ? ', ' : '', A.C.chapter(id) ? h('a', { href: '#/chapitre/' + id }, id.toUpperCase()) : h('a', { href: '#/cas/' + id }, id.toUpperCase())]) : 'aucun chapitre publié pour l’instant'));
        })))) : A.ui.empty('Aucune source chargée.', null)) };
  };
})();

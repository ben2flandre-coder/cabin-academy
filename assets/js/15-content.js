/* Contenu : index paresseux de window.CA_CONTENT, plan des 32 chapitres, rubriques, glossaire agrégé,
   rendu sûr du mini-balisage (**gras** *italique* `code` [[Terme]] [[Terme|libellé]]). */
(function () {
  'use strict';
  const A = window.CAApp;
  const { arr, h } = A;

  // ---------- référentiels fixes ----------
  A.DOMAINS = [
    { id: 'M', name: 'Le métier' },
    { id: 'A', name: "L'avion et son environnement" },
    { id: 'B', name: 'La cabine' },
    { id: 'C', name: "L'environnement industriel" },
    { id: 'D', name: 'Outillage et matériel' },
    { id: 'E', name: "Gestes et logique d'intégration" },
    { id: 'F', name: 'Systèmes et interfaces' },
    { id: 'G', name: 'FOD, qualité et sécurité' },
  ];
  A.domainName = id => (A.DOMAINS.find(d => d.id === id) || { name: id }).name;

  // Plan du parcours (docs/PLAN-CHAPITRES.md) : [ordre, id, domaine, titre, compétences, prérequis]
  const PLAN = [
    [10, 'm1', 'M', "Le métier d'intégrateur cabine", 'C1', ''],
    [20, 'a1', 'A', "L'avion et ses grandes parties", 'C1', 'm1'],
    [30, 'a2', 'A', 'Le fuselage : peau, cadres, lisses, planchers', 'C1', 'a1'],
    [40, 'a3', 'A', "Se repérer dans l'avion : axes, stations, côtés, zones", 'C1', 'a2'],
    [50, 'a4', 'A', 'Cabine, cockpit, soutes, portes et issues', 'C1', 'a3'],
    [60, 'b1', 'B', 'Anatomie de la cabine : structure, habillage, équipement, système', 'C1 C4', 'a4'],
    [70, 'b2', 'B', 'Rails, plancher et sièges', 'C1 C3 C4', 'b1'],
    [80, 'b3', 'B', 'Plafond, PSU et rangements (hatracks)', 'C1 C4 C5', 'b1'],
    [90, 'b4', 'B', 'Parois, fenêtres et cloisons', 'C2 C4', 'b1'],
    [100, 'b5', 'B', 'Galleys et toilettes : les monuments', 'C3 C4 C5', 'b1'],
    [110, 'b6', 'B', 'Équipements passagers, secours et interfaces', 'C4 C5', 'b3'],
    [120, 'c1', 'C', 'Le dossier de travail', 'C1', 'b1'],
    [130, 'c2', 'C', 'Identifier : référence, P/N, S/N, lot, indice', 'C1', 'c1'],
    [140, 'c3', 'C', 'Configuration, conformité, non-conformité, autocontrôle', 'C1 C4', 'c2'],
    [150, 'c4', 'C', 'Qualité aéronautique et coactivité', 'C1 C2 C3', 'c3'],
    [160, 'd1', 'D', 'Atlas : tournevis, clés, douilles, pinces', 'C4', 'b1'],
    [170, 'd2', 'D', 'Clés dynamométriques et serrage prescrit', 'C4', 'd1'],
    [180, 'd3', 'D', 'Mesurer et contrôler', 'C1 C4', 'd1'],
    [190, 'd4', 'D', 'Manutention, protections, EPI/EPC, consommables, rangement et inventaire', 'C2 C3', 'd1'],
    [200, 'e1', 'E', 'La méthode : préparer et identifier', 'C1', 'c3 d4'],
    [210, 'e2', 'E', 'Protéger et acheminer', 'C2 C3', 'e1'],
    [220, 'e3', 'E', 'Présenter, positionner, ajuster', 'C4', 'e2'],
    [230, 'e4', 'E', 'Fixer : visserie, freinage, serrage selon prescription', 'C4', 'd2 e3'],
    [240, 'e5', 'E', 'Contrôler, nettoyer, inventorier, tracer', 'C1 C4', 'e4'],
    [250, 'f1', 'F', 'Faisceaux électriques et connecteurs', 'C5', 'b3'],
    [260, 'f2', 'F', 'Cheminer, fixer, protéger : colliers, passages, détrompage', 'C5', 'f1'],
    [270, 'f3', 'F', "Réseaux d'eau, d'air, d'oxygène, métallisation, interfaces mécaniques", 'C5', 'f2'],
    [280, 'g1', 'G', 'FOD : comprendre', 'C1 C2', 'a4'],
    [290, 'g2', 'G', 'FOD : prévenir, inventorier, réagir', 'C1 C4', 'g1'],
    [300, 'g3', 'G', 'TMS et manutention', 'C3', 'm1'],
    [310, 'g4', 'G', 'Protection du produit, coactivité, sécurité au poste', 'C2 C3', 'c4'],
    [320, 'g5', 'G', "Droit et devoir d'arrêt : alerter et communiquer", 'C1', 'c3'],
  ].map(([order, id, domain, title, comps, prereq]) => ({ order, id, domain, title, comps: comps.split(' '), prereq: prereq ? prereq.split(' ') : [] }));

  A.COMPS = [
    { bc: 'BC01', id: 'C1', name: "Préparer, organiser et repérer son intervention dans l'aéronef" },
    { bc: 'BC01', id: 'C2', name: "Installer les protections des éléments à intégrer et de l'environnement" },
    { bc: 'BC01', id: 'C3', name: "Acheminer les éléments sur la zone d'intervention" },
    { bc: 'BC02', id: 'C4', name: 'Positionner, assembler, régler, fixer et/ou démonter les éléments' },
    { bc: 'BC02', id: 'C5', name: 'Cheminer et connecter les différents systèmes (eau, air, oxygène, électricité, métallisations)' },
  ];
  A.BLOCKS = [
    { id: 'BC01', name: "Préparation et mise en œuvre des opérations de protection et d'acheminement des éléments dans une structure aéronautique" },
    { id: 'BC02', name: 'Installation des éléments dans une structure aéronautique' },
  ];

  // Les 13 rubriques d'un chapitre (docs/CONTENT-GUIDE.md §2). « has » dit si le chapitre la contient.
  A.RUBRICS = [
    { key: 'objectifs', title: 'Ce que tu vas apprendre', short: 'Objectifs', has: c => arr(c.objectives).length > 0,
      todo: 'Lis les objectifs : ce sont les choses que tu sauras faire à la fin du chapitre.', check: 'Tu vérifieras chacun de ces objectifs dans la mini-évaluation (rubrique 11).' },
    { key: 'pourquoi', title: "Pourquoi c'est important dans l'avion", short: 'Pourquoi', has: c => arr(c.why).length > 0,
      todo: 'Lis ces situations réelles : elles expliquent à quoi sert ce que tu vas apprendre.', check: 'Demande-toi : « où vais-je rencontrer cela à l’atelier ? »' },
    { key: 'decouverte', title: 'Découverte visuelle', short: 'Découverte', has: c => !!(c.discover && (c.discover.fig || c.discover.intro)),
      todo: 'Observe la figure AVANT de lire les explications, et cherche une réponse à chaque question.', check: 'Tu compareras tes réponses avec la rubrique suivante.' },
    { key: 'explication', title: 'Explication simple', short: 'Explication', has: c => arr(c.explain).length > 0 || arr(c.parts).length > 0,
      todo: 'Lis bloc par bloc ; touche une figure pour l’agrandir, et un mot souligné pour sa définition.', check: 'Les activités (rubrique 8) te diront si tu as compris.' },
    { key: 'vocabulaire', title: 'Vocabulaire français / anglais', short: 'Vocabulaire', has: c => arr(c.vocab).length > 0,
      todo: 'Lis chaque carte, puis ajoute à tes révisions les termes que tu veux retenir.', check: 'Les cartes ajoutées reviendront dans « Réviser » au bon moment.' },
    { key: 'exemple', title: 'Exemple concret', short: 'Exemple', has: c => !!(c.example && (c.example.title || arr(c.example.body).length)),
      todo: 'Lis l’exemple d’atelier : repère les notions du chapitre qui y apparaissent.', check: 'Si un document fictif accompagne l’exemple, relis-le : il servira dans les exercices.' },
    { key: 'demonstration', title: 'Démonstration pas à pas', short: 'Démonstration', has: c => !!(c.demo && arr(c.demo.steps).length),
      todo: 'Avance étape par étape : la partie concernée s’allume sur la figure.', check: 'À la dernière étape, essaie de redire toute la séquence sans regarder.' },
    { key: 'activites', title: 'Activités', short: 'Activités', has: c => arr(c.activities).length > 0,
      todo: 'Fais chaque activité puis valide : la correction s’affiche aussitôt.', check: 'Ta progression ne compte que les exercices réalisés, réussis ou non.' },
    { key: 'erreurs', title: 'Erreurs fréquentes', short: 'Erreurs', has: c => arr(c.mistakes).length > 0,
      todo: 'Pour chaque erreur, lis pourquoi c’est un problème et ce qu’on fait à la place.', check: 'Demande-toi si tu aurais pu faire cette erreur, et dans quelle situation.' },
    { key: 'situation', title: 'Situation professionnelle', short: 'Situation', has: c => arr(c.situations).length > 0,
      todo: 'Lis le contexte, choisis ta décision, puis lis le débrief.', check: 'Le débrief nomme la règle de métier : c’est elle qu’il faut retenir.' },
    { key: 'evaluation', title: 'Mini-évaluation', short: 'Évaluation', has: c => arr(c.quiz).length > 0,
      todo: 'Réponds à chaque question puis valide ; tu peux retenter une question ratée.', check: 'Le résultat du premier essai est conservé à part : c’est ton vrai repère.' },
    { key: 'retenir', title: "Ce qu'il faut retenir", short: 'À retenir', has: c => arr(c.retain).length > 0,
      todo: 'Lis ces phrases à voix haute, puis ajoute-les à tes révisions.', check: 'Elles reviendront sous forme de phrases à compléter.' },
    { key: 'suite', title: 'Oral blanc et suite du parcours', short: 'Suite', has: c => !!c.next || arr(c.oral).length > 0,
      todo: 'Entraîne-toi à l’oral blanc, puis passe au chapitre suivant.', check: 'L’oral blanc est une auto-évaluation : jamais une note de certification.' },
  ];
  A.rubricIndex = key => A.RUBRICS.findIndex(r => r.key === key);

  // ---------- accès au contenu (index construits à la demande) ----------
  const raw = () => (window.CA_CONTENT && typeof window.CA_CONTENT === 'object' ? window.CA_CONTENT : {});
  let idx = null;
  function build() {
    const R = raw();
    const chapters = arr(R.chapters).filter(c => A.isObj(c) && typeof c.id === 'string');
    const chMap = new Map(chapters.map(c => [c.id, c]));
    const figMap = new Map(arr(R.figures).filter(A.isObj).map(f => [f.id, f]));
    const srcMap = new Map(arr(R.sources).filter(A.isObj).map(s => [s.id, s]));
    const cases = arr(R.cases).filter(k => A.isObj(k) && typeof k.id === 'string');
    const exMap = new Map();
    for (const c of chapters) {
      for (const [kind, list] of [['activity', c.activities], ['quiz', c.quiz]]) {
        arr(list).forEach((ex, i) => { if (A.isObj(ex) && typeof ex.id === 'string' && !exMap.has(ex.id)) exMap.set(ex.id, { ex, ch: c, kind, i }); });
      }
    }
    // Parcours : plan + chapitres publiés hors plan (rangés dans leur domaine, selon leur ordre)
    const plan = PLAN.map(p => Object.assign({}, p, { published: chMap.has(p.id) }));
    for (const c of chapters) {
      if (!plan.some(p => p.id === c.id)) plan.push({ order: typeof c.order === 'number' ? c.order : 99999, id: c.id, domain: A.DOMAINS.some(d => d.id === c.domain) ? c.domain : 'G', title: c.title || c.id, comps: arr(c.comps), prereq: arr(c.prereq), published: true });
    }
    for (const p of plan) {
      const c = chMap.get(p.id);
      if (c) { p.title = c.title || p.title; p.domain = A.DOMAINS.some(d => d.id === c.domain) ? c.domain : p.domain; p.order = typeof c.order === 'number' ? c.order : p.order; p.prereq = arr(c.prereq).length ? arr(c.prereq) : p.prereq; }
    }
    plan.sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));
    idx = { chapters: chapters.slice().sort((a, b) => (a.order || 0) - (b.order || 0)), chMap, figMap, srcMap, cases, exMap, plan, glossary: null };
    return idx;
  }
  const I = () => idx || build();

  A.C = {
    reset() { idx = null; },
    chapters: () => I().chapters,
    chapter: id => I().chMap.get(id) || null,
    figure: id => I().figMap.get(id) || null,
    figures: () => Array.from(I().figMap.values()),
    source: id => I().srcMap.get(id) || null,
    sources: () => Array.from(I().srcMap.values()),
    cases: () => I().cases,
    caseById: id => I().cases.find(k => k.id === id) || null,
    exercise: id => I().exMap.get(id) || null,
    plan: () => I().plan,
    planEntry: id => I().plan.find(p => p.id === id) || null,
    exercisesOf: c => [...arr(c && c.activities), ...arr(c && c.quiz)].filter(e => A.isObj(e) && typeof e.id === 'string'),
    rubricsOf: c => A.RUBRICS.filter(r => r.has(c)),
    title: id => { const p = I().plan.find(x => x.id === id); return p ? p.title : id; },
    glossary,
    findTerm,
  };

  // ---------- glossaire agrégé : vocab des chapitres + entrées de content/glossary ----------
  function glossary() {
    const X = I();
    if (X.glossary) return X.glossary;
    const entries = [];
    const byKey = new Map();
    const add = (g, origin) => {
      if (!A.isObj(g) || typeof g.fr !== 'string' || !g.fr.trim()) return;
      const key = A.norm(g.fr);
      let e = byKey.get(key);
      if (!e) {
        e = { key, slug: A.slug(g.fr), fr: g.fr, en: A.str(g.en), abbr: A.str(g.abbr), def: A.str(g.def), tip: A.str(g.tip), cat: A.str(g.cat), chapters: [], vocab: [] };
        byKey.set(key, e); entries.push(e);
      } else {
        if (!e.en && g.en) e.en = g.en;
        if (!e.abbr && g.abbr) e.abbr = g.abbr;
        if (!e.def && g.def) e.def = g.def;
        if (!e.tip && g.tip) e.tip = g.tip;
        if (!e.cat && g.cat) e.cat = g.cat;
      }
      if (origin && !e.chapters.includes(origin.ch)) { e.chapters.push(origin.ch); e.vocab.push(origin); }
    };
    for (const c of X.chapters) arr(c.vocab).forEach((v, i) => add(v, { ch: c.id, i }));
    for (const g of arr(raw().glossary)) add(g, null);
    // slugs uniques
    const seen = new Map();
    for (const e of entries) { const n = (seen.get(e.slug) || 0) + 1; seen.set(e.slug, n); if (n > 1) e.slug += '-' + n; }
    const lookup = new Map();
    const reg = (k, e) => { const n = A.norm(k); if (n && !lookup.has(n)) lookup.set(n, e); };
    for (const e of entries) reg(e.fr, e);
    for (const e of entries) { reg(e.en, e); reg(e.abbr, e); }
    entries.sort((a, b) => a.key.localeCompare(b.key, 'fr'));
    X.glossary = { entries, lookup, bySlug: new Map(entries.map(e => [e.slug, e])) };
    return X.glossary;
  }
  /** Retrouve une entrée par son libellé (insensible casse/accents ; tolère un pluriel simple). */
  function findTerm(label) {
    const G = glossary();
    const n = A.norm(label);
    if (!n) return null;
    if (G.lookup.has(n)) return G.lookup.get(n);
    const sing = n.replace(/(s|x)$/, '');
    if (G.lookup.has(sing)) return G.lookup.get(sing);
    const bySlug = G.bySlug.get(label) || G.bySlug.get(A.slug(label));
    return bySlug || null;
  }

  // ---------- mini-balisage → DOM (jamais de HTML interprété) ----------
  const TOKEN = /(`[^`\n]+`)|(\[\[[^\]\n]+\]\])|(\*\*(?=\S)[\s\S]+?\*\*)|(\*(?=[^\s*])[^*\n]*?[^\s*]\*|\*[^\s*]\*)/;
  function rich(text, depth) {
    const out = [];
    let s = A.str(text);
    const d = depth || 0;
    let guard = 0;
    while (s && guard++ < 2000) {
      const m = d > 4 ? null : TOKEN.exec(s);
      if (!m) { out.push(s); break; }
      if (m.index > 0) out.push(s.slice(0, m.index));
      const tok = m[0];
      if (m[1]) out.push(h('code', { class: 'ca-code' }, tok.slice(1, -1)));
      else if (m[2]) out.push(termLink(tok.slice(2, -2)));
      else if (m[3]) out.push(h('strong', null, rich(tok.slice(2, -2), d + 1)));
      else out.push(h('em', null, rich(tok.slice(1, -1), d + 1)));
      s = s.slice(m.index + tok.length);
    }
    return out;
  }
  function termLink(inner) {
    const bar = inner.indexOf('|');
    const term = (bar >= 0 ? inner.slice(0, bar) : inner).trim();
    const label = (bar >= 0 ? inner.slice(bar + 1) : inner).trim() || term;
    const e = findTerm(term);
    return h('button', {
      type: 'button', class: 'ca-term' + (e ? '' : ' ca-term-missing'),
      dataset: { act: 'term', term },
      'aria-haspopup': 'dialog',
      title: e ? 'Définition de « ' + e.fr + ' »' : 'Terme pas encore dans le glossaire',
    }, label);
  }
  /** A.rich(chaîne) → tableau de nœuds ; A.P(chaîne) → <p> ; A.richList(tableau) → paragraphes. */
  A.rich = s => rich(s, 0);
  A.P = (s, cls) => h('p', cls ? { class: cls } : null, rich(s, 0));
  A.paras = list => arr(list).map(s => A.P(s));
  /** Texte brut d'une chaîne balisée (recherche, CSV, titres). */
  A.plain = s => A.str(s).replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2').replace(/\[\[([^\]]+)\]\]/g, '$1').replace(/\*\*([\s\S]+?)\*\*/g, '$1').replace(/\*([^*\n]+)\*/g, '$1').replace(/`([^`]+)`/g, '$1');
})();

// FIXTURE — glossaire complémentaire et cas pratique d'essai (tests du moteur uniquement).
CA.addGlossary([
  { fr: 'Corps étranger', en: 'Foreign Object Debris', abbr: 'FOD', cat: 'Qualité et sécurité', def: "Tout objet qui n'a rien à faire dans l'avion : vis, copeau, chute d'adhésif, outil oublié.", tip: "FOD désigne l'objet ; les dégâts qu'il cause s'appellent aussi FOD (*damage*)." },
  { fr: 'Référence', en: 'Part number', abbr: 'P/N', cat: 'Documentation', def: "Identifiant d'un type de pièce : toutes les pièces faites selon la même définition la portent." },
  { fr: 'Numéro de série', en: 'Serial number', abbr: 'S/N', cat: 'Documentation', def: "Identifiant d'un exemplaire précis parmi toutes les pièces de même référence." },
  { fr: 'Côté gauche', en: 'Left-hand side', abbr: 'LH', cat: 'Repérage', def: "Côté gauche de l'avion pour une personne assise dans le sens du vol." },
]);
CA.addCases([{
  id: 'k9',
  title: "Cas d'essai : préparer la pose d'un panneau dado",
  level: 1,
  after: 'z9',
  chapters: ['z9', 'z8'],
  comps: ['C1', 'C2'],
  minutes: 10,
  intro: [
    "Lundi, 7 h 30, rangées 10 à 14 côté droit. Ta tutrice Inès te confie la préparation de la pose de quatre panneaux dado. Les pièces sont sur un chariot, dans leurs emballages.",
    "Tu disposes du dossier et de l'étiquette ci-dessous. Tout est fictif.",
  ],
  fig: 'b1-section-cabine',
  doc: { title: "Bon de préparation — document fictif pédagogique", lines: [['Zone', 'Rangées 10 à 14, côté droit'], ['Pièce', 'PANNEAU DADO'], ['P/N', 'EX-55120-02'], ['Quantité', '4']] },
  steps: [
    { text: ["Tu arrives au poste. Le chariot est là, les emballages sont fermés."], question: "Par quoi commences-tu ?",
      options: [
        { t: "Je lis l'étiquette de chaque emballage et je la compare au bon de préparation.", ok: true, why: "Identifier avant d'ouvrir permet de s'arrêter à temps si une pièce n'est pas la bonne." },
        { t: "J'ouvre tous les emballages pour gagner du temps.", why: "Une fois les pièces sorties et mélangées, tu ne peux plus prouver laquelle est laquelle : il faut tout reprendre avec ta tutrice." },
        { t: "Je présente un panneau à sa place pour voir s'il va.", why: "Un panneau qui « va » peut être celui d'une autre zone : la forme ne remplace pas la référence." },
      ] },
    { text: ["Les quatre étiquettes concordent. Le plancher de la zone n'est pas protégé."], fig: 'e1-poste-prepare', question: "Que fais-tu avant de sortir le premier panneau ?",
      options: [
        { t: "Je pose le panneau directement sur le plancher, côté visible vers le haut.", why: "Le plancher nu peut marquer le chant du panneau, et le panneau peut rayer le plancher : deux dégâts pour un geste." },
        { t: "J'installe une protection au sol et je dégage le passage.", ok: true, why: "On protège la pièce et l'environnement avant de manipuler : c'est le cœur de la compétence C2." },
        { t: "Je le cale debout contre les sièges voisins.", why: "Un panneau en appui sur un siège glisse, et le siège n'est pas un support de stockage." },
      ] },
    { text: ["La protection est en place. En sortant le deuxième panneau, tu vois une marque sur son chant."], question: "Quelle est ta décision ?",
      options: [
        { t: "Je le pose quand même : la marque sera cachée par le siège.", why: "Tu ne peux pas décider seule qu'un défaut est acceptable ; s'il est découvert plus tard, il faudra tout déposer." },
        { t: "Je l'essuie avec un chiffon et je continue.", why: "Si la marque ne part pas, tu as perdu du temps ; si elle part, tu as peut-être masqué un vrai défaut." },
        { t: "Je mets le panneau de côté, identifié, et je préviens ma tutrice.", ok: true, why: "Un écart constaté se signale et la pièce s'isole : la décision appartient à quelqu'un d'habilité." },
      ] },
  ],
  debrief: [
    "Trois réflexes dans ce cas : **identifier** avant d'ouvrir, **protéger** avant de manipuler, **signaler** un écart au lieu de le juger seule.",
    "Ces réflexes sont détaillés dans le chapitre d'essai z9.",
  ],
  sources: ['rmbd-original'],
}]);

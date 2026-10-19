// CHAPITRE FIXTURE VOLONTAIREMENT INCOMPLET — vérifie que le lecteur reste utilisable quand des rubriques manquent
// (chapitre en cours de rédaction). Ne passe la validation qu'avec --lenient.
CA.addChapter({
  id: 'z8',
  domain: 'G',
  order: 9995,
  title: "Chapitre d'essai incomplet",
  short: "Fixture : rubriques manquantes",
  minutes: 10,
  comps: ['C2'],
  prereq: ['z9'],
  sources: ['source-inconnue'],
  objectives: ["Vérifier que l'application affiche un message utile quand une rubrique n'est pas encore rédigée."],
  why: ["Un chapitre peut être publié avant d'être terminé : l'application ne doit jamais afficher d'écran blanc."],
  explain: [{ h: "Un seul bloc", p: ["Ce chapitre ne contient presque rien, et c'est voulu. Le terme [[Terme absent du glossaire]] n'existe pas."] }],
  quiz: [
    { id: 'z8-q1', type: 'mcq', concept: 'Robustesse', q: "Choisis une réponse : que doit faire l'application devant un contenu manquant ?",
      options: [
        { t: "Afficher un message clair et rester utilisable.", ok: true, why: "C'est le comportement attendu." },
        { t: "Afficher une page blanche.", why: "Une page blanche ne dit pas quoi faire." },
        { t: "Effacer la progression.", why: "Les données de l'apprenante ne doivent jamais être perdues." },
      ],
      explain: "Un contenu manquant n'est pas une panne : l'application l'annonce simplement et propose de continuer ailleurs." },
    { id: 'z8-q2', type: 'hottap', concept: 'Figure absente', fig: 'figure-inexistante', q: "Touche la partie demandée sur une figure qui n'existe pas.",
      targets: [{ prompt: "Touche la partie fantôme.", part: 'fantome' }],
      explain: "Cet exercice référence une figure absente : l'application doit le dire sans se bloquer." },
  ],
  next: { id: 'z7', teaser: "Le chapitre suivant n'existe pas encore." },
});

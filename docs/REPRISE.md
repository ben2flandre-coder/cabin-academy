# REPRISE — état du projet et feuille de route (mis à jour le 2026-10-20)

## État (étape 1 livrée et validée par Benoît)
- main = `9cdcd30`, version `2026.10.20-7d490653f2`. 15/32 chapitres : m1, a1–a4, b1–b5, c1, c2, d1, e1, g2. 191 figures dont 64 images IA. e2e 258/258.
- Mail de bienvenue envoyé à Cylia (cylia2flandre@gmail.com, Benoît en copie) le 2026-10-20 ; promesse : tutoriel de prise en main + FAQ à suivre, et mail à chaque étape importante.
- Cylia entre en formation le 09/11/2026 (Balma). Livraison semaine après semaine.

## À faire — priorités
1. **Tutoriel de prise en main + FAQ** (promis à Cylia) : page dans l'appli (Plus > Guide) et/ou mail.
2. Chapitres restants par vagues : b6, c3, c4, d2, d3, d4, e2, e3, e4, e5, f1, f2, f3, g1, g3, g4, g5 (ordre conseillé : c3/c4/d4/g1/g3 → d2/d3 → e2–e5 → f1–f3 → g4/g5/b6).
3. Cas pratiques (`content/cases/`) et glossaire à étoffer.
4. Médias : lots GPT suivants (priorité e4, f1, f2, g1–g3) ; toutes les images restent « à valider ».
5. Reformuler/retirer la phrase non sourcée de a2 (« quelques tonnes par mètre carré »).
6. Document « affirmations à faire relire » par un professionnel (fait, mais jamais présenté comme validé).
7. Test réel sur Android (checklist à écrire) ; surveiller le retour de Cylia (erreurs de contenu, ergonomie).
8. Notification de mise à jour par mail à Cylia à chaque vague.
9. **Confidentialité/hébergement** : GitHub Pages est public (repo privé = Pages indisponible sur plan gratuit). Benoît veut repasser en privé avec partage restreint à sa fille → options : hébergement protégé (ex. Cloudflare Access / mot de passe). Décision et changement de visibilité à faire par Benoît ; le jeton GH de la session est invalide.
10. Option long terme : synchro PC↔mobile (aujourd'hui export/import).

## Règles de collaboration avec Benoît
- Pousser sur `main` seulement après « oui, publie » explicite ; envoyer des mails à des tiers seulement sur accord explicite.
- Travailler par petites vagues d'agents (les 13 agents parallèles ont dépassé les quotas) ; éviter `pkill -f` auto-référent et les chaînes de `sleep`.
- Avant de livrer : build + e2e verts, vérification du site public.
- Rappel : Benoît veut un résultat « fantastique » pour sa fille ; honnêteté > effet d'annonce.

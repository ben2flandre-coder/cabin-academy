/* Service worker RMBD Cabin Academy — généré par tools/build.mjs (version 2026.10.20-7d40c78c12)
   Stratégie :
   - précache versionné de tous les fichiers de l'application (cache « rmbd-ca-<version> ») ;
   - à l'activation : purge de TOUS les autres caches (anciennes versions « rmbd-ca-… » et cache de l'ancienne
     application « rmbd-cabin-v4.1.1 »), prise de contrôle immédiate (skipWaiting + clients.claim) ;
   - navigation (pages HTML) : réseau d'abord (délai court), repli sur l'index précaché — uniquement pour une navigation ;
   - autres GET même origine : cache d'abord pour les ressources de CETTE version, sinon réseau ;
     une ressource demandée avec un autre numéro de version (?v=…) passe par le réseau : on ne mélange jamais
     une page d'une version avec les scripts d'une autre ;
   - AUCUN repli « index.html » pour une ressource manquante (pas de masquage d'erreurs / de type MIME) ;
   - données de l'apprenante : localStorage, jamais touché ici. */
const VERSION = '2026.10.20-7d40c78c12';
const CACHE = 'rmbd-ca-' + VERSION;
const PRECACHE = ["./","index.html","assets/content.js","manifest.webmanifest","assets/app.css","assets/figures.css","assets/js/00-core.js","assets/js/05-icons.js","assets/js/10-store.js","assets/js/15-content.js","assets/js/20-progress.js","assets/js/25-ui.js","assets/js/30-figure.js","assets/js/35-exercise.js","assets/js/40-router.js","assets/js/50-home.js","assets/js/55-chapter.js","assets/js/60-review.js","assets/js/62-library.js","assets/js/66-journal.js","assets/js/68-certification.js","assets/js/70-cases.js","assets/js/74-settings.js","assets/js/90-pwa.js","assets/js/99-boot.js","assets/icons/icon-192.png","assets/icons/icon-512.png","assets/icons/icon-maskable-512.png","assets/icons/icon.svg","assets/fig/a1-avion-vue-ensemble.svg","assets/fig/a1-familles-aeronefs.svg","assets/fig/a1-quatre-forces.svg","assets/fig/a1-surfaces-mobiles.svg","assets/fig/a1-dans-le-fuselage.svg","assets/fig/a2-section-fuselage.svg","assets/fig/a2-eclate-structure.svg","assets/fig/a2-pressurisation.svg","assets/fig/a2-troncons.svg","assets/fig/a2-paroi-ouverte.svg","assets/fig/a3-axes-xyz.svg","assets/fig/a3-gauche-droite.svg","assets/fig/a3-stations-cadres.svg","assets/fig/a3-plan-cabine.svg","assets/fig/a4-volumes.svg","assets/fig/a4-portes-issues.svg","assets/fig/a4-porte-anatomie.svg","assets/fig/a4-zone-porte.svg","assets/fig/b1-section-cabine.svg","assets/fig/b1-niveaux-structure-habillage-equipement-systeme.svg","assets/fig/b1-interfaces-qui-tient-quoi.svg","assets/fig/b1-atlas-elements.svg","assets/fig/b1-plan-cabine.svg","assets/fig/b2-plancher-coupe.svg","assets/fig/b2-rail-siege.svg","assets/fig/b2-siege-anatomie.svg","assets/fig/b2-implantation-rangee.svg","assets/fig/b2-fod-rails.svg","assets/fig/b3-cabine-vue-avant.svg","assets/fig/b3-hatrack-coupe.svg","assets/fig/b3-plafond-reseaux.svg","assets/fig/b3-plafond-ouvert.svg","assets/fig/b3-psu-anatomie.svg","assets/fig/b4-paroi-coupe.svg","assets/fig/b4-hublot-coupe.svg","assets/fig/b4-fixations-panneau.svg","assets/fig/b4-cloison-face.svg","assets/fig/b4-cloisons-plan.svg","assets/fig/b5-galley-vue.svg","assets/fig/b5-galley-interfaces.svg","assets/fig/b5-toilettes-plan.svg","assets/fig/b5-monument-acheminement.svg","assets/fig/b5-reseaux-eau.svg","assets/fig/b6-equipements-secours.svg","assets/fig/b6-balisage-issue.svg","assets/fig/b6-siege-equipage.svg","assets/fig/b6-interfaces-equipement.svg","assets/fig/b6-siege-ife.svg","assets/fig/c1-dossier-contenu.svg","assets/fig/c1-plan-fictif.svg","assets/fig/c1-lire-cartouche.svg","assets/fig/c1-entonnoir.svg","assets/fig/c1-bonne-version.svg","assets/fig/c1-hierarchie.svg","assets/fig/c2-etiquette-fictive.svg","assets/fig/c2-pn-sn-lot.svg","assets/fig/c2-comparer-trois-sources.svg","assets/fig/c2-marquage-piece.svg","assets/fig/c3-conforme-ou-non.svg","assets/fig/c3-configuration-par-avion.svg","assets/fig/c3-autocontrole-liste.svg","assets/fig/c3-etiquette-nc.svg","assets/fig/c4-coactivite-zone.svg","assets/fig/c4-chaine-qualite.svg","assets/fig/c4-balisage-zone.svg","assets/fig/c4-passation-zone.svg","assets/fig/d1-tournevis-anatomie.svg","assets/fig/d1-empreintes-vis.svg","assets/fig/d1-prise-correcte.svg","assets/fig/d1-cles-types.svg","assets/fig/d1-douilles-cliquet.svg","assets/fig/d1-pinces.svg","assets/fig/d1-etat-outil.svg","assets/fig/d3-instruments-atlas.svg","assets/fig/d3-regle-lecture.svg","assets/fig/d3-pied-a-coulisse.svg","assets/fig/d3-vernier-lecture.svg","assets/fig/d3-vernier-exercices.svg","assets/fig/d3-jauge-lames-jeu.svg","assets/fig/d3-calibres-go-nogo.svg","assets/fig/d3-comparateur-niveau.svg","assets/fig/d3-moyens-etat.svg","assets/fig/e1-methode-cinq-temps.svg","assets/fig/e1-poste-prepare.svg","assets/fig/e1-checklist-avant.svg","assets/fig/e1-identifier-piece.svg","assets/fig/e1-trois-regards.svg","assets/fig/e2-protections-cabine.svg","assets/fig/e2-trajet-acheminement.svg","assets/fig/e2-chargement-chariot.svg","assets/fig/e2-etat-initial.svg","assets/fig/e2-element-protege.svg","assets/fig/e3-jeu-affleurement.svg","assets/fig/e3-positionnement-pions.svg","assets/fig/e3-presentation-sequence.svg","assets/fig/e3-cales-reglage.svg","assets/fig/e3-lecture-jauge.svg","assets/fig/e4-atlas-visserie.svg","assets/fig/e4-ecrous-rondelles.svg","assets/fig/e4-filetage-croise.svg","assets/fig/e4-pile-fixation.svg","assets/fig/e4-freinage.svg","assets/fig/e5-fin-de-tache-cinq-gestes.svg","assets/fig/e5-zone-avant-fermeture.svg","assets/fig/e5-inventaire-comptage.svg","assets/fig/e5-fiche-suivi-fictive.svg","assets/fig/f1-faisceau-anatomie.svg","assets/fig/f1-connecteur-circulaire.svg","assets/fig/f1-connecteurs-familles.svg","assets/fig/f1-manipulation.svg","assets/fig/f1-defauts-a-reperer.svg","assets/fig/g2-poches-et-objets-personnels.svg","assets/fig/g2-inventaire-caisse.svg","assets/fig/g2-aspirer-ou-souffler.svg","assets/fig/g2-reprise-tache.svg","assets/fig/g2-outil-perdu-decisions.svg","assets/fig/g2-zone-controle-final.svg","assets/fig/g3-facteurs-risque.svg","assets/fig/g3-zones-de-confort.svg","assets/fig/g3-postures-bonnes-mauvaises.svg","assets/fig/g3-portage-binome.svg","assets/fig/g3-aides-manutention.svg","assets/fig/m1-parcours-aeronef.svg","assets/fig/m1-lieux-de-travail.svg","assets/fig/m1-equipe-autour-de-toi.svg","assets/fig/m1-cinq-competences.svg","assets/fig/m1-epi-de-base.svg","assets/media/img/a1-eclate-structure-1-v2.webp","assets/media/img/a1-section-fuselage-1-v2.webp","assets/media/img/a2-epi-base-1-v2.webp","assets/media/img/a2-journee-type-1-v2.webp","assets/media/img/a2-poste-cabine-1-v2.webp","assets/media/img/m1-avion-dessus-1-v2.webp","assets/media/img/m1-avion-profil-1-v2.webp","assets/media/img/m1-quatre-forces-1.webp","assets/media/img/a3-axes-reperage-1.webp","assets/media/img/a3-coupe-cabine-1.webp","assets/media/img/b1-anatomie-siege-1.webp","assets/media/img/b1-rail-siege-1.webp","assets/media/img/b2-hatrack-psu-1.webp","assets/media/img/b3-sidewall-dado-1.webp","assets/media/img/b4-plafond-reseaux-1.webp","assets/media/img/c1-presentation-panneau-1.webp","assets/media/img/c1-presentation-siege-1.webp","assets/media/img/c1-tablette-plan-1.webp","assets/media/img/d1-cles-1-v2.webp","assets/media/img/d1-douilles-cliquet-1.webp","assets/media/img/d1-empreintes-vis-1.webp","assets/media/img/d1-pinces-1-v2.webp","assets/media/img/d2-cle-dynamometrique-1.webp","assets/media/img/d2-jauges-lames-1-v2.webp","assets/media/img/d2-pied-coulisse-1.webp","assets/media/img/d3-aides-manutention-1.webp","assets/media/img/e1-zone-protegee-1.webp","assets/media/img/e2-acheminement-monument-1.webp","assets/media/img/e3-port-panneau-1.webp","assets/media/img/e3-port-panneau-1-erreur.webp","assets/media/img/e3-protection-sol-1.webp","assets/media/img/e3-protection-sol-1-erreur.webp"];
const NAV_TIMEOUT_MS = 4000;
const SCOPE_PATH = new URL('./', self.location).pathname;

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // addAll échoue en bloc si un fichier manque : volontaire (on n'installe pas une version incomplète)
    await cache.addAll(PRECACHE.map(u => new Request(u, { cache: 'reload' })));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  const job = (async () => {
    const keys = await caches.keys();
    const old = keys.filter(k => k !== CACHE);
    // L'ancienne application (cache « rmbd-cabin-… », stratégie cache d'abord) ne sait pas écouter nos messages.
    const legacy = old.some(k => /^rmbd-cabin-/.test(k));
    const updated = old.some(k => /^rmbd-ca-/.test(k));
    await Promise.all(old.map(k => caches.delete(k)));
    await self.clients.claim();
    const all = await self.clients.matchAll({ type: 'window' });
    all.forEach(c => c.postMessage({ type: 'sw-activated', version: VERSION, updated, legacy }));
    return { legacy, all };
  })();
  event.waitUntil(job);
  // Les pages encore affichées sont celles de l'ancienne application, servies par son cache : on les recharge
  // une seule fois (ce cache vient d'être supprimé, la condition ne peut pas se reproduire). Le localStorage
  // n'est pas concerné : les données restent en place. Le rechargement est lancé APRÈS l'activation (hors
  // waitUntil) : la navigation a besoin de ce service worker actif pour être servie.
  job.then(r => {
    if (!r.legacy) return;
    setTimeout(() => r.all.forEach(c => { if (c.navigate) c.navigate(c.url).catch(() => {}); }), 50);
  }).catch(() => {});
});

self.addEventListener('message', event => {
  const data = event.data || {};
  if (data.type === 'get-version') {
    const reply = { type: 'sw-version', version: VERSION, cache: CACHE };
    if (event.ports && event.ports[0]) event.ports[0].postMessage(reply);
    else if (event.source) event.source.postMessage(reply);
  }
  if (data.type === 'skip-waiting') self.skipWaiting();
});

function timeout(ms) { return new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms)); }

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;                       // jamais d'interception externe
  if (!url.pathname.startsWith(SCOPE_PATH)) return;
  if (url.pathname.endsWith('/version.json')) return;               // toujours réseau (détection de mise à jour)
  if (url.pathname.endsWith('/sw.js')) return;

  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        // Réseau d'abord : c'est ce qui permet à une nouvelle version d'arriver. La réponse n'est PAS recopiée
        // dans le cache : l'index précaché reste celui qui correspond aux scripts de cette version.
        // « no-cache » : revalidation auprès du serveur (sinon le cache HTTP de GitHub Pages, ~10 min, servirait
        // l'ancienne page juste après une mise à jour). Redirection : laissée au navigateur (manual).
        const net = fetch(req.url, { cache: 'no-cache', credentials: 'same-origin', redirect: 'manual' });
        return await Promise.race([net, timeout(NAV_TIMEOUT_MS)]);
      } catch (e) {
        const cached = await caches.match('index.html', { cacheName: CACHE }) || await caches.match('./', { cacheName: CACHE });
        if (cached) return cached;
        throw e;
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const v = url.searchParams.get('v');
    const foreign = v !== null && v !== VERSION;                    // ressource d'une autre version que ce cache
    if (!foreign) {
      const hit = await caches.match(req, { cacheName: CACHE }) || await caches.match(req, { cacheName: CACHE, ignoreSearch: true });
      if (hit) return hit;
      const net = await fetch(req);                                 // en cas d'échec, l'erreur réseau remonte telle quelle
      if (net && net.ok && net.type === 'basic') { const c = await caches.open(CACHE); c.put(req, net.clone()).catch(() => {}); }
      return net;
    }
    try {
      return await fetch(req);
    } catch (e) {
      // Hors ligne avec une page d'une autre version : mieux vaut le même fichier d'une version voisine qu'un échec
      // (cas d'une figure demandée par une page restée ouverte pendant une mise à jour). Jamais d'autre fichier.
      const hit = await caches.match(req, { cacheName: CACHE, ignoreSearch: true });
      if (hit) return hit;
      throw e;
    }
  })());
});

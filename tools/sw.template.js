/* Service worker RMBD Cabin Academy — généré par tools/build.mjs (version __VERSION__)
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
const VERSION = '__VERSION__';
const CACHE = 'rmbd-ca-' + VERSION;
const PRECACHE = __PRECACHE__;
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
  event.waitUntil((async () => {
    const keys = await caches.keys();
    const old = keys.filter(k => k !== CACHE);
    // L'ancienne application (cache « rmbd-cabin-… », stratégie cache d'abord) ne sait pas écouter nos messages.
    const legacy = old.some(k => /^rmbd-cabin-/.test(k));
    const updated = old.some(k => /^rmbd-ca-/.test(k));
    await Promise.all(old.map(k => caches.delete(k)));
    await self.clients.claim();
    const all = await self.clients.matchAll({ type: 'window' });
    all.forEach(c => c.postMessage({ type: 'sw-activated', version: VERSION, updated, legacy }));
    if (legacy) {
      // Les pages encore affichées sont celles de l'ancienne application, servies par son cache : on les recharge
      // une seule fois (ce cache vient d'être supprimé, la condition ne peut pas se reproduire). Le localStorage
      // n'est pas concerné : les données restent en place.
      await Promise.all(all.map(c => (c.navigate ? c.navigate(c.url).catch(() => {}) : null)));
    }
  })());
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

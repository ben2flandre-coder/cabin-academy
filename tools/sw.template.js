/* Service worker RMBD Cabin Academy — généré par tools/build.mjs (version __VERSION__)
   Stratégie :
   - précache versionné de tous les fichiers de l'application (cache « rmbd-ca-<version> ») ;
   - navigation (pages HTML) : réseau d'abord, repli sur le cache (jamais pour d'autres types de requêtes) ;
   - autres GET même origine : cache d'abord (les URLs de scripts sont versionnées ?v=…), puis réseau ;
   - AUCUN repli « index.html » pour une ressource manquante (pas de masquage d'erreurs / de type MIME) ;
   - données de l'apprenant : localStorage, jamais touché par le cache. */
const VERSION = '__VERSION__';
const CACHE = 'rmbd-ca-' + VERSION;
const PRECACHE = __PRECACHE__;

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
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));   // purge aussi les anciens caches (rmbd-cabin-v4.1.1…)
    await self.clients.claim();
    const all = await self.clients.matchAll({ type: 'window' });
    all.forEach(c => c.postMessage({ type: 'sw-activated', version: VERSION }));
  })());
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'get-version') event.source && event.source.postMessage({ type: 'sw-version', version: VERSION });
  if (event.data && event.data.type === 'skip-waiting') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;                       // jamais d'interception externe
  if (url.pathname.endsWith('/version.json')) return;               // toujours réseau (détection de mise à jour)
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const net = await fetch(req);
        if (net && net.ok) { const c = await caches.open(CACHE); c.put('index.html', net.clone()).catch(() => {}); }
        return net;
      } catch (e) {
        const cached = await caches.match('index.html', { cacheName: CACHE }) || await caches.match('./', { cacheName: CACHE });
        if (cached) return cached;
        throw e;
      }
    })());
    return;
  }
  event.respondWith((async () => {
    const hit = await caches.match(req, { cacheName: CACHE, ignoreSearch: false }) || await caches.match(req, { cacheName: CACHE, ignoreSearch: true });
    if (hit) return hit;
    const net = await fetch(req);                                   // en cas d'échec, l'erreur réseau remonte telle quelle
    if (net && net.ok && url.pathname.startsWith(new URL('./', self.location).pathname)) { const c = await caches.open(CACHE); c.put(req, net.clone()).catch(() => {}); }
    return net;
  })());
});

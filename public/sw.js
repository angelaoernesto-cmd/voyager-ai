/* =====================================================================
   Voyager AI — Service Worker
   Estrategia: Network First con fallback a caché.
   Los viajes se guardan en localStorage del dispositivo.
   ===================================================================== */

const CACHE_NAME = 'voyager-v1';

const PRECACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,600;9..40,700&family=Playfair+Display:wght@700;900&display=swap',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
];

// ── INSTALL ──────────────────────────────────────────────────────────
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Pre-cache what we can; ignore failures for CDN resources
      return Promise.allSettled(PRECACHE.map(url => cache.add(url)));
    })
  );
});

// ── ACTIVATE ─────────────────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// ── FETCH ─────────────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Never intercept Anthropic API calls or AviationStack
  if (url.hostname.includes('anthropic.com') ||
      url.hostname.includes('aviationstack.com') ||
      url.hostname.includes('firebaseio.com') ||
      url.hostname.includes('nominatim.openstreetmap.org')) {
    return; // Let the browser handle it directly
  }

  // Navigation requests (HTML pages)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Everything else: Network First, fall back to cache
  event.respondWith(
    fetch(request)
      .then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        }
        return response;
      })
      .catch(() => caches.match(request))
  );
});

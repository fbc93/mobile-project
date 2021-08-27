var staticCacheName = 'site-static';
const dynamicCacheName = 'site-dynamic-v1';

var assets = [
  '/',
  '/index.html',
  '/favicon.ico',
  'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://unpkg.com/swiper/swiper-bundle.css',
  'https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap',
  'https://code.jquery.com/jquery-1.9.1.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
  'https://unpkg.com/swiper/swiper-bundle.min.js',
  '/app.js',
  '/dist/build.js',
  '/sw.js'
];

// install event
self.addEventListener('install', evt => {
  // console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(
        keys.filter(key => key !== staticCacheName && key !== dynamicCacheName)
            .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          return fetchRes;
        })
      });
    }).catch(() => {
      if(evt.request.url.indexOf('.html') > -1){
        return caches.match('/pages/fallback.html');
      } 
    })
  );
});

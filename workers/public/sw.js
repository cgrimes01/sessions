const CACHE_NAME = 'boring-text-examples';
const urlsToCache = [
  '/js/boring-text-examples.json',
];
let getStuffFetchEvents = 0;

self.addEventListener('install', function(event) {
  console.log('Install started');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
  console.log('Claiming control');
  return self.clients.claim();
});

const standardResponse = (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
};

const fatherTedResponse = (event) => {
  if(getStuffFetchEvents > 0 && getStuffFetchEvents % 10 === 0) {
    event.respondWith(fetch('/fatherted/quotes'));
  } else {
    standardResponse(event);
  }
  
};

self.addEventListener('fetch', function(event) {
  if(event.request.url.includes('boring-text-examples')) {
    fatherTedResponse(event);
    getStuffFetchEvents++;
  } else {
    standardResponse(event);
  }
});

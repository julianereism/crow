var cacheName = 'Crow+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './css/bootstrap.min.css',

        './js/bootstrap.min.js',

        './js/jquery-3.3.1.min.js',


        './assets/img/background.png',
        './assets/img/favicon.png',
        './assets/img/logo.png',
        '.img/icons/29.png',
        '.img/icons/40.png',
        '.img/icons/57.png',
        '.img/icons/58.png',
        '.img/icons/60.png',
        '.img/icons/80.png',
        '.img/icons/87.png',
        '.img/icons/114.png',
        '.img/icons/120.png',
        '.img/icons/180.png',
        '.img/icons/1024.png',
     
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});
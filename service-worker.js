self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          './js/arm.js',
          './js/audio.js',
          './js/core.js',
          './js/gba.js',
          './js/gpio.js',
          './js/io.js',
          './js/irq.js',
          './js/keypad.js',
          './js/mmu.js',
          './js/savedata.js',
          './js/sio.js',
          './js/thumb.js',
          './js/util.js',
          './js/video.js',
          './js/video.js',
          './resources/index.js',
          './resources/xhr.js',
          './resources/console.js',
          './resources/console.css',
          './resources/main.css',
          './resources/bg.png',
          './resources/bios.bin',
          './resources/crash.png',
        ]
      );
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

self.addEventListener('fetch', function(event) {});


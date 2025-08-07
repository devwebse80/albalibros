const CACHE_NAME = "albalibros-cache-v1";
const urlsToCache = [
  // HTML
  "/",
  "/index.html",



  // Imágenes (¡agrega todas las que uses!)
  "/logo2.png",
  

  // Fuentes (si usas Google Fonts u otras)
  "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});

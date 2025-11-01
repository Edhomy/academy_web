'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e9023695566ba23842955ff77915f89c",
"version.json": "54c11320fd133db5d48cce6cfd5909e2",
"splash/img/light-2x.png": "61a6450933a0e9ba40f6bf5c322592f1",
"splash/img/dark-4x.png": "d1071a0d14e3db0cb291458e58da4b50",
"splash/img/light-3x.png": "cc1c43c2e016debeea5cc3853c4bbe03",
"splash/img/dark-3x.png": "cc1c43c2e016debeea5cc3853c4bbe03",
"splash/img/light-4x.png": "d1071a0d14e3db0cb291458e58da4b50",
"splash/img/dark-2x.png": "61a6450933a0e9ba40f6bf5c322592f1",
"splash/img/dark-1x.png": "dea3ea6993fd348ce6c60ff9e20751c4",
"splash/img/light-1x.png": "dea3ea6993fd348ce6c60ff9e20751c4",
"index.html": "43d1aa78ac7b39d3c6ee95b0b38e2e10",
"/": "43d1aa78ac7b39d3c6ee95b0b38e2e10",
"main.dart.js": "a2f91ea40b94ef7f61fa0844720d49f5",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-192.png": "2423316e3179965e7629fd8037aa1df4",
"icons/Icon-maskable-192.png": "2423316e3179965e7629fd8037aa1df4",
"icons/Icon-maskable-512.png": "50d62b4ad7359a87c4f9669dd758228f",
"icons/Icon-512.png": "50d62b4ad7359a87c4f9669dd758228f",
"manifest.json": "dc4d3d0840d734d98a265b3884e7a99f",
"assets/AssetManifest.json": "60a74fcff9c5ca0057b48301b677f066",
"assets/NOTICES": "eb27c40ced92b1b1bc0792c649ae2ccf",
"assets/FontManifest.json": "538b1f45dc619a237e05c5021d97d35f",
"assets/AssetManifest.bin.json": "dfdc2e078074ac4d3fa578e17f2bc56e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "dbe934e17e130d2188f5a4043b811c21",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "46867150db1ac1fbf22b5e1abbb69657",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/images/email.png": "d53447b42f0e520eca497e5e5e6d9ff1",
"assets/assets/images/googlePlay.png": "70a928ab185fa70c1613595643e58b25",
"assets/assets/images/android.png": "f900fa4ceda22c11f63a795c7d3e6d97",
"assets/assets/images/mac.png": "fdccaa599b58d90cbc2a0eb7fdaddae2",
"assets/assets/images/appStore.png": "03d14e77df23beb58b2ca9f6c9ce1626",
"assets/assets/images/apple.png": "9f7abc236a294b7c31234b6c78ff2bbf",
"assets/assets/images/logo.png": "915d02140541451de0770e396928a724",
"assets/assets/images/google.png": "a696be4710211b53f27405b71c0637e6",
"assets/assets/sounds/begin.mp3": "b4a9472cbe7ed19702bd40e40efaf4fb",
"assets/assets/sounds/done.mp3": "7a3389aa036b9739d6a74dcba348c76e",
"assets/assets/sounds/end.mp3": "4006227c8c6aa82ac1c9a418ff912c2d",
"assets/assets/photos/image6.jpg": "e215d324b0edd3a71366702deb1777eb",
"assets/assets/photos/image4.jpg": "7762770ed1d164e527b089b80cd1d588",
"assets/assets/photos/image5.jpg": "3eb505d0580287951eaf8031a0d6639a",
"assets/assets/photos/image1.jpg": "f5eec89328bea3b84c9445041699fa80",
"assets/assets/photos/image2.jpg": "937386f8f5975b245d1ef631c2afbf4d",
"assets/assets/photos/image3.jpg": "3d07aaa0d4018a1c61f175d01f641c98",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueLight.ttf": "0facaae97183b8fede52099930aefd8d",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueUltraLight.ttf": "ccad04d46768981ff847f22e8a53b5b3",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueThin.ttf": "78c28465643a20597ce65eee037a7675",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueBold.ttf": "7f281199258d96e249a7fce4101006b9",
"assets/assets/fonts/HelveticaNeue/HelveticaNeueMedium.ttf": "0a13c540938b1b7dd3996b02ea568e5f",
"assets/assets/fonts/IBMPlexSans/IBMPlexSansLight.ttf": "9fdb7fe1c6114fac5ce771d33f5b95dc",
"assets/assets/fonts/IBMPlexSans/IBMPlexSansMedium.ttf": "d68c561bec0bcba82f4077af34396997",
"assets/assets/fonts/IBMPlexSans/IBMPlexSansBold.ttf": "42fb882132e7b91a2d4c6e192b97308f",
"favicon.svg": "3a3cf8197308ae9001670d1374cfd29e",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

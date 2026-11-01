// Night Bite service worker: lets the installed app open offline. Always tries the network first so updates show up.
const CACHE='night-bite-v7';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-180.png','https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(FILES.map(f=>c.add(f).catch(()=>{})))));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp)).catch(()=>{});return r;}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(m=>m||caches.match('./index.html'))));});

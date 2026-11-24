'use strict';
const CACHE='battu-little-genius-v2';
const FILES=['./','./index.html','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',e=>e.waitUntil((async()=>{const c=await caches.open(CACHE);await c.addAll(FILES);await self.skipWaiting()})()));
self.addEventListener('activate',e=>e.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('battu-little-genius-')&&k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim()})()));
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==self.location.origin)return;e.respondWith((async()=>{const c=await caches.open(CACHE),hit=await c.match(r);if(hit)return hit;try{const x=await fetch(r);if(x.ok&&x.type==='basic')e.waitUntil(c.put(r,x.clone()).catch(()=>{}));return x}catch{if(r.mode==='navigate'){const f=await c.match('./index.html');if(f)return f}return new Response('Unavailable offline',{status:503})}})())});

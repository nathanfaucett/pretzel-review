const e=location.pathname.split("/").slice(0,-1).join("/"),m=[e+"/internal/immutable/entry/app.BAHg1kpN.js",e+"/internal/immutable/nodes/0.DdRjNOJ_.js",e+"/internal/immutable/assets/0.C9Io0NLL.css",e+"/internal/immutable/nodes/1.CUO2Iuml.js",e+"/internal/immutable/nodes/2.DnhtHDez.js",e+"/internal/immutable/nodes/3.CkTYw9uL.js",e+"/internal/immutable/nodes/4.bS5HG5GY.js",e+"/internal/immutable/nodes/5.C5qHhrMo.js",e+"/internal/immutable/nodes/6.dXFsH-qX.js",e+"/internal/immutable/nodes/7.BaBlkFI9.js",e+"/internal/immutable/nodes/8.Dz_2N3ce.js",e+"/internal/immutable/chunks/InputResults.JsPd7LL3.js",e+"/internal/immutable/chunks/auth.BLD35ye6.js",e+"/internal/immutable/chunks/control.CYgJF_JY.js",e+"/internal/immutable/chunks/each.Bs1uTvQV.js",e+"/internal/immutable/chunks/entry.CajWL3fb.js",e+"/internal/immutable/chunks/i18n-svelte.CwmAXuKX.js",e+"/internal/immutable/chunks/index.B6yVox2M.js",e+"/internal/immutable/chunks/index.De_1-CT6.js",e+"/internal/immutable/chunks/index.FWmrwH0f.js",e+"/internal/immutable/chunks/index.vyH74tFf.js",e+"/internal/immutable/assets/1718058170368-brew-dog-0.XPthv23E.webp",e+"/internal/immutable/chunks/localstorageWritable.ZYdZUze1.js",e+"/internal/immutable/chunks/notifications.C--YttEn.js",e+"/internal/immutable/chunks/paths.Dnt_79yB.js",e+"/internal/immutable/chunks/preload-helper.D6kgxu3v.js",e+"/internal/immutable/chunks/scheduler.BYo21klU.js",e+"/internal/immutable/chunks/util.DmzQDt7J.js",e+"/internal/immutable/chunks/index.DbiDv6BT.js",e+"/internal/immutable/entry/start.BBREixKL.js",e+"/internal/immutable/chunks/index.CrSXfiSJ.js"],r=[e+"/favicon.png",e+"/icon.png",e+"/icon256x256.png",e+"/manifest.json",e+"/robots.txt"],o="1718188249639",l=self,u=`cache-${o}`,c=[...m,...r];l.addEventListener("install",n=>{async function s(){await(await caches.open(u)).addAll(c)}n.waitUntil(s())});l.addEventListener("activate",n=>{async function s(){for(const t of await caches.keys())t!==u&&await caches.delete(t)}n.waitUntil(s())});l.addEventListener("fetch",n=>{if(n.request.method==="GET"){const s=(async()=>{const t=new URL(n.request.url),a=await caches.open(u);if(c.includes(t.pathname))return a.match(t.pathname);try{const i=await fetch(n.request);return i.status===200&&!n.request.url.startsWith("chrome-extension://")&&a.put(n.request,i.clone()),i}catch{return a.match(n.request)}})();n.respondWith(s)}});

const e=location.pathname.split("/").slice(0,-1).join("/"),u=[e+"/internal/immutable/entry/app.meC4J_lq.js",e+"/internal/immutable/nodes/0.Cs5MifrC.js",e+"/internal/immutable/assets/0.P4SPYThT.css",e+"/internal/immutable/nodes/1.CgoupCIy.js",e+"/internal/immutable/nodes/2.BsfKoLjf.js",e+"/internal/immutable/nodes/3.Cq9xxXzE.js",e+"/internal/immutable/nodes/4.CmZIUnSm.js",e+"/internal/immutable/nodes/5.C3D7uusH.js",e+"/internal/immutable/nodes/6.5lX9B0R8.js",e+"/internal/immutable/nodes/7.B9Z3yXPJ.js",e+"/internal/immutable/nodes/8.xpBm8j50.js",e+"/internal/immutable/chunks/Icon.ghbrvz4a.js",e+"/internal/immutable/chunks/InputResults.C6joF3HM.js",e+"/internal/immutable/chunks/auth.DtLbhIKo.js",e+"/internal/immutable/chunks/control.CYgJF_JY.js",e+"/internal/immutable/chunks/entry.DKdo8T8X.js",e+"/internal/immutable/chunks/index.Ba_PvK2x.js",e+"/internal/immutable/assets/1723141235240-sam-adams-atlanta-brew-house-0.DuH4ERfO.webp",e+"/internal/immutable/assets/1717646487699-benchwarmers-0.B58jmyK2.webp",e+"/internal/immutable/assets/1722103563963-cypress-street-pint--plate-0.DBliMRGj.webp",e+"/internal/immutable/assets/1722098861162-thinking-man-tavern-0.CwOMSYuK.webp",e+"/internal/immutable/assets/1721738517602-der-biergarten-0.D0y62Kk5.webp",e+"/internal/immutable/assets/1721417998627-mellow-mushroom-decatur-0.BvCXjyto.webp",e+"/internal/immutable/assets/1721251723092-the-lost-druid-brewery--distillery-0.C3OjEnM3.webp",e+"/internal/immutable/assets/1721251536575-brick-store-pub-0.CeUNgfok.webp",e+"/internal/immutable/assets/1716782422460-crystal-beer-parlor-0.CtTRpkSK.webp",e+"/internal/immutable/assets/1719697913116-twains-brewpub--billiards-0.Btbmb_cV.webp",e+"/internal/immutable/assets/1718574622702-jekyl-and-hyde-taphouse-0.7ODWYZ55.webp",e+"/internal/immutable/assets/1719270711525-the-springs-cinema--taphouse-0.DfN4abXX.webp",e+"/internal/immutable/assets/1719018191808-meltons-app-and-tap-0.tWosB_L0.webp",e+"/internal/immutable/assets/1713067212563-bodensee-0.V9B6jlv2.webp",e+"/internal/immutable/chunks/index.CioEuDII.js",e+"/internal/immutable/chunks/index.fxzr2fuK.js",e+"/internal/immutable/chunks/index.kXTl4Cum.js",e+"/internal/immutable/chunks/localstorageWritable.CFpg0YEE.js",e+"/internal/immutable/chunks/notifications.aPm2Hl8_.js",e+"/internal/immutable/chunks/paths.DT9kr5E6.js",e+"/internal/immutable/chunks/preload-helper.D6kgxu3v.js",e+"/internal/immutable/assets/repo.9zABvnW_.css",e+"/internal/immutable/chunks/repo.C70JzCfM.js",e+"/internal/immutable/chunks/scheduler.tgkqE9WI.js",e+"/internal/immutable/chunks/stores.CmNFf0sQ.js",e+"/internal/immutable/chunks/util.rhh8ua8O.js",e+"/internal/immutable/chunks/index.CgaHZ2wU.js",e+"/internal/immutable/entry/start.CBDycrPc.js",e+"/internal/immutable/chunks/index.BC6kWE39.js"],c=[e+"/favicon.png",e+"/google49778979a1421467.html",e+"/icon.png",e+"/icon256x256.png"],b="1723931448637",l=self,m=`cache-${b}`,r=[...u,...c];l.addEventListener("install",t=>{async function a(){await(await caches.open(m)).addAll(r)}t.waitUntil(a())});l.addEventListener("activate",t=>{async function a(){for(const n of await caches.keys())n!==m&&await caches.delete(n)}t.waitUntil(a())});l.addEventListener("fetch",t=>{if(t.request.method==="GET"){const a=(async()=>{const n=new URL(t.request.url),s=await caches.open(m);if(r.includes(n.pathname))return s.match(n.pathname);try{const i=await fetch(t.request);return i.status===200&&!t.request.url.startsWith("chrome-extension://")&&s.put(t.request,i.clone()),i}catch{return s.match(t.request)}})();t.respondWith(a)}});

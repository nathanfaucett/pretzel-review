const e=location.pathname.split("/").slice(0,-1).join("/"),u=[e+"/internal/immutable/entry/app.DMO29U_E.js",e+"/internal/immutable/nodes/0.CKgVlCbB.js",e+"/internal/immutable/assets/0.DhrSufVZ.css",e+"/internal/immutable/nodes/1.B4ixlNAm.js",e+"/internal/immutable/nodes/2.CMIpEK0g.js",e+"/internal/immutable/nodes/3.BJzZeZZs.js",e+"/internal/immutable/nodes/4.DVACVX5L.js",e+"/internal/immutable/nodes/5.C5I4zhWf.js",e+"/internal/immutable/nodes/6.BuEOlPG_.js",e+"/internal/immutable/nodes/7.BaISathD.js",e+"/internal/immutable/nodes/8.BcL492Bw.js",e+"/internal/immutable/chunks/Icon.Bqz_alF_.js",e+"/internal/immutable/chunks/InputResults.DOPKhyXy.js",e+"/internal/immutable/chunks/auth.CqgBd-u0.js",e+"/internal/immutable/chunks/control.CYgJF_JY.js",e+"/internal/immutable/chunks/entry.Bi263u_J.js",e+"/internal/immutable/chunks/index.AIWy7Lrb.js",e+"/internal/immutable/chunks/index.Benw2kWI.js",e+"/internal/immutable/chunks/index.CmOltbvJ.js",e+"/internal/immutable/chunks/index.w7Z0lw8x.js",e+"/internal/immutable/assets/1722098861162-thinking-man-tavern-0.CwOMSYuK.webp",e+"/internal/immutable/assets/1723938214780-the-porter-beer-bar-0.CHNNB4SB.webp",e+"/internal/immutable/assets/1723931426927-the-albert-0.BZkQXK8H.webp",e+"/internal/immutable/assets/1723141235240-sam-adams-atlanta-brew-house-0.DuH4ERfO.webp",e+"/internal/immutable/assets/1717646487699-benchwarmers-0.B58jmyK2.webp",e+"/internal/immutable/assets/1722103563963-cypress-street-pint--plate-0.DBliMRGj.webp",e+"/internal/immutable/assets/1721738517602-der-biergarten-0.D0y62Kk5.webp",e+"/internal/immutable/assets/1721417998627-mellow-mushroom-decatur-0.BvCXjyto.webp",e+"/internal/immutable/assets/1721251723092-the-lost-druid-brewery--distillery-0.C3OjEnM3.webp",e+"/internal/immutable/assets/1721251536575-brick-store-pub-0.CeUNgfok.webp",e+"/internal/immutable/assets/1716782422460-crystal-beer-parlor-0.CtTRpkSK.webp",e+"/internal/immutable/assets/1719697913116-twains-brewpub--billiards-0.Btbmb_cV.webp",e+"/internal/immutable/assets/1718574622702-jekyl-and-hyde-taphouse-0.7ODWYZ55.webp",e+"/internal/immutable/assets/1719270711525-the-springs-cinema--taphouse-0.DfN4abXX.webp",e+"/internal/immutable/assets/1719018191808-meltons-app-and-tap-0.tWosB_L0.webp",e+"/internal/immutable/assets/1713067212563-bodensee-0.V9B6jlv2.webp",e+"/internal/immutable/chunks/localstorageWritable.Drq-zWUl.js",e+"/internal/immutable/chunks/notifications.CqQcqqU1.js",e+"/internal/immutable/chunks/paths.apwEyy4t.js",e+"/internal/immutable/chunks/preload-helper.D6kgxu3v.js",e+"/internal/immutable/assets/repo.9zABvnW_.css",e+"/internal/immutable/chunks/repo.DVcB0DFC.js",e+"/internal/immutable/chunks/scheduler.DcQKYvgX.js",e+"/internal/immutable/chunks/stores.CrQ9-GLN.js",e+"/internal/immutable/chunks/util.CJAz_Eej.js",e+"/internal/immutable/chunks/index.CgaHZ2wU.js",e+"/internal/immutable/entry/start.C6Ps3TOd.js",e+"/internal/immutable/chunks/index.9erZb3ad.js"],b=[e+"/favicon.png",e+"/google49778979a1421467.html",e+"/icon.png",e+"/icon256x256.png"],c="1724103515822",l=self,r=`cache-${c}`,m=[...u,...b];l.addEventListener("install",t=>{async function n(){await(await caches.open(r)).addAll(m)}t.waitUntil(n())});l.addEventListener("activate",t=>{async function n(){for(const a of await caches.keys())a!==r&&await caches.delete(a)}t.waitUntil(n())});l.addEventListener("fetch",t=>{if(t.request.method==="GET"){const n=(async()=>{const a=new URL(t.request.url),s=await caches.open(r);if(m.includes(a.pathname))return s.match(a.pathname);try{const i=await fetch(t.request);return i.status===200&&!t.request.url.startsWith("chrome-extension://")&&s.put(t.request,i.clone()),i}catch{return s.match(t.request)}})();t.respondWith(n)}});

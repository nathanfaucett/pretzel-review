const e=location.pathname.split("/").slice(0,-1).join("/"),u=[e+"/internal/immutable/entry/app.WYUqExFc.js",e+"/internal/immutable/nodes/0.Cs5MifrC.js",e+"/internal/immutable/assets/0.P4SPYThT.css",e+"/internal/immutable/nodes/1.DkIpXvVu.js",e+"/internal/immutable/nodes/2.DLBm5rCd.js",e+"/internal/immutable/nodes/3.Cq9xxXzE.js",e+"/internal/immutable/nodes/4.CLbj5Q08.js",e+"/internal/immutable/nodes/5.D-Cu2sfY.js",e+"/internal/immutable/nodes/6.ABwETNL0.js",e+"/internal/immutable/nodes/7.BT4EG95q.js",e+"/internal/immutable/nodes/8.Ctuwnvfx.js",e+"/internal/immutable/chunks/Icon.ghbrvz4a.js",e+"/internal/immutable/chunks/InputResults.C6joF3HM.js",e+"/internal/immutable/chunks/auth.DtLbhIKo.js",e+"/internal/immutable/chunks/control.CYgJF_JY.js",e+"/internal/immutable/chunks/entry.BQN15nmz.js",e+"/internal/immutable/chunks/index.CioEuDII.js",e+"/internal/immutable/chunks/index.Ctnu4D8v.js",e+"/internal/immutable/assets/1723938214780-the-porter-beer-bar-0.CHNNB4SB.webp",e+"/internal/immutable/assets/1723931426927-the-albert-0.BZkQXK8H.webp",e+"/internal/immutable/assets/1723141235240-sam-adams-atlanta-brew-house-0.DuH4ERfO.webp",e+"/internal/immutable/assets/1717646487699-benchwarmers-0.B58jmyK2.webp",e+"/internal/immutable/assets/1722103563963-cypress-street-pint--plate-0.DBliMRGj.webp",e+"/internal/immutable/assets/1722098861162-thinking-man-tavern-0.CwOMSYuK.webp",e+"/internal/immutable/assets/1721738517602-der-biergarten-0.D0y62Kk5.webp",e+"/internal/immutable/assets/1721417998627-mellow-mushroom-decatur-0.BvCXjyto.webp",e+"/internal/immutable/assets/1721251723092-the-lost-druid-brewery--distillery-0.C3OjEnM3.webp",e+"/internal/immutable/assets/1721251536575-brick-store-pub-0.CeUNgfok.webp",e+"/internal/immutable/assets/1716782422460-crystal-beer-parlor-0.CtTRpkSK.webp",e+"/internal/immutable/assets/1719697913116-twains-brewpub--billiards-0.Btbmb_cV.webp",e+"/internal/immutable/assets/1718574622702-jekyl-and-hyde-taphouse-0.7ODWYZ55.webp",e+"/internal/immutable/assets/1719270711525-the-springs-cinema--taphouse-0.DfN4abXX.webp",e+"/internal/immutable/assets/1719018191808-meltons-app-and-tap-0.tWosB_L0.webp",e+"/internal/immutable/assets/1713067212563-bodensee-0.V9B6jlv2.webp",e+"/internal/immutable/chunks/index.fxzr2fuK.js",e+"/internal/immutable/chunks/index.kXTl4Cum.js",e+"/internal/immutable/chunks/localstorageWritable.CFpg0YEE.js",e+"/internal/immutable/chunks/notifications.aPm2Hl8_.js",e+"/internal/immutable/chunks/paths.jpFTHKPM.js",e+"/internal/immutable/chunks/preload-helper.D6kgxu3v.js",e+"/internal/immutable/assets/repo.9zABvnW_.css",e+"/internal/immutable/chunks/repo.C70JzCfM.js",e+"/internal/immutable/chunks/scheduler.tgkqE9WI.js",e+"/internal/immutable/chunks/stores.QB5OPPzb.js",e+"/internal/immutable/chunks/util.rhh8ua8O.js",e+"/internal/immutable/chunks/index.CgaHZ2wU.js",e+"/internal/immutable/entry/start.CP_UsEOc.js",e+"/internal/immutable/chunks/index.BC6kWE39.js"],b=[e+"/favicon.png",e+"/google49778979a1421467.html",e+"/icon.png",e+"/icon256x256.png"],c="1723938833221",l=self,r=`cache-${c}`,m=[...u,...b];l.addEventListener("install",t=>{async function a(){await(await caches.open(r)).addAll(m)}t.waitUntil(a())});l.addEventListener("activate",t=>{async function a(){for(const n of await caches.keys())n!==r&&await caches.delete(n)}t.waitUntil(a())});l.addEventListener("fetch",t=>{if(t.request.method==="GET"){const a=(async()=>{const n=new URL(t.request.url),s=await caches.open(r);if(m.includes(n.pathname))return s.match(n.pathname);try{const i=await fetch(t.request);return i.status===200&&!t.request.url.startsWith("chrome-extension://")&&s.put(t.request,i.clone()),i}catch{return s.match(t.request)}})();t.respondWith(a)}});

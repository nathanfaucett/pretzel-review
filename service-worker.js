const e=location.pathname.split("/").slice(0,-1).join("/"),u=[e+"/internal/immutable/entry/app.DIc1dZ0V.js",e+"/internal/immutable/nodes/0.DGMVmRVb.js",e+"/internal/immutable/assets/0.CxUqbxZW.css",e+"/internal/immutable/nodes/1.3w5C_P1I.js",e+"/internal/immutable/nodes/2.DDqv4ILB.js",e+"/internal/immutable/nodes/3.BJzZeZZs.js",e+"/internal/immutable/nodes/4.Dt9xDU3p.js",e+"/internal/immutable/nodes/5.CkE7GrKH.js",e+"/internal/immutable/nodes/6.noCXneCB.js",e+"/internal/immutable/nodes/7.B8Im0rxs.js",e+"/internal/immutable/nodes/8.DsT1uQCv.js",e+"/internal/immutable/chunks/Icon.DLU5deNG.js",e+"/internal/immutable/chunks/InputResults.-qZH2tlw.js",e+"/internal/immutable/chunks/auth.Bk3fFqAN.js",e+"/internal/immutable/chunks/control.CYgJF_JY.js",e+"/internal/immutable/chunks/entry.CH0jJx-g.js",e+"/internal/immutable/chunks/index.AIWy7Lrb.js",e+"/internal/immutable/chunks/index.BkTE5DLZ.js",e+"/internal/immutable/assets/1732410768689-rocky-mountain-pizza-company-0.CLtGO5Q_.webp",e+"/internal/immutable/assets/1716782422460-crystal-beer-parlor-0.CtTRpkSK.webp",e+"/internal/immutable/assets/1719018191808-meltons-app-and-tap-0.tWosB_L0.webp",e+"/internal/immutable/assets/1730058435165-the-corner-pub-0.Di-VBMHE.webp",e+"/internal/immutable/assets/1731372650356-fad-irish-pub-0.LlpZlYP2.webp",e+"/internal/immutable/assets/1729770095615-ameris-bank-amphitheatre-concession-stands-0.Bh5DRzWA.webp",e+"/internal/immutable/assets/1722098861162-thinking-man-tavern-0.CwOMSYuK.webp",e+"/internal/immutable/assets/1723938214780-the-porter-beer-bar-0.CHNNB4SB.webp",e+"/internal/immutable/assets/1723931426927-the-albert-0.BZkQXK8H.webp",e+"/internal/immutable/assets/1723141235240-sam-adams-atlanta-brew-house-0.DuH4ERfO.webp",e+"/internal/immutable/assets/1717646487699-benchwarmers-0.B58jmyK2.webp",e+"/internal/immutable/assets/1722103563963-cypress-street-pint--plate-0.DBliMRGj.webp",e+"/internal/immutable/assets/1721738517602-der-biergarten-0.D0y62Kk5.webp",e+"/internal/immutable/assets/1721417998627-mellow-mushroom-decatur-0.BvCXjyto.webp",e+"/internal/immutable/assets/1721251723092-the-lost-druid-brewery--distillery-0.C3OjEnM3.webp",e+"/internal/immutable/assets/1721251536575-brick-store-pub-0.CeUNgfok.webp",e+"/internal/immutable/assets/1719697913116-twains-brewpub--billiards-0.Btbmb_cV.webp",e+"/internal/immutable/assets/1718574622702-jekyl-and-hyde-taphouse-0.7ODWYZ55.webp",e+"/internal/immutable/assets/1719270711525-the-springs-cinema--taphouse-0.DfN4abXX.webp",e+"/internal/immutable/assets/1713067212563-bodensee-0.V9B6jlv2.webp",e+"/internal/immutable/chunks/index.CmOltbvJ.js",e+"/internal/immutable/chunks/index.DI8AwAWJ.js",e+"/internal/immutable/chunks/localstorageWritable.Drq-zWUl.js",e+"/internal/immutable/chunks/notifications.ByJtfkJc.js",e+"/internal/immutable/chunks/paths.DlN-HpV3.js",e+"/internal/immutable/chunks/preload-helper.C1FmrZbK.js",e+"/internal/immutable/assets/repo.CR9_6U2k.css",e+"/internal/immutable/chunks/repo.CqwzLja3.js",e+"/internal/immutable/chunks/scheduler.DcQKYvgX.js",e+"/internal/immutable/chunks/stores.D4IZFFC7.js",e+"/internal/immutable/chunks/util.sFjw-znZ.js",e+"/internal/immutable/chunks/index.CKlaGILe.js",e+"/internal/immutable/entry/start.dkPZL_V_.js",e+"/internal/immutable/chunks/index.BckD3GK7.js",e+"/internal/immutable/chunks/index.BVwob0lv.js"],b=[e+"/favicon.png",e+"/google49778979a1421467.html",e+"/icon.png",e+"/icon256x256-white.png",e+"/icon256x256.png"],c="1732411247075",l=self,r=`cache-${c}`,m=[...u,...b];l.addEventListener("install",t=>{async function a(){await(await caches.open(r)).addAll(m)}t.waitUntil(a())});l.addEventListener("activate",t=>{async function a(){for(const n of await caches.keys())n!==r&&await caches.delete(n)}t.waitUntil(a())});l.addEventListener("fetch",t=>{if(t.request.method==="GET"){const a=(async()=>{const n=new URL(t.request.url),s=await caches.open(r);if(m.includes(n.pathname))return s.match(n.pathname);try{const i=await fetch(t.request);return i.status===200&&!t.request.url.startsWith("chrome-extension://")&&s.put(t.request,i.clone()),i}catch{return s.match(t.request)}})();t.respondWith(a)}});

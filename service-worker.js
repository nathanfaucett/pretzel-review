const e=location.pathname.split("/").slice(0,-1).join("/"),u=[e+"/internal/immutable/entry/app.Cky5cs7t.js",e+"/internal/immutable/nodes/0.G11pgXDv.js",e+"/internal/immutable/assets/0.P4SPYThT.css",e+"/internal/immutable/nodes/1.mrgkK8yo.js",e+"/internal/immutable/nodes/2.BAyC5hVQ.js",e+"/internal/immutable/nodes/3.Bp_zNg41.js",e+"/internal/immutable/nodes/4.CLy3JTxf.js",e+"/internal/immutable/nodes/5.CQK5-HuV.js",e+"/internal/immutable/nodes/6.Bj60-fN1.js",e+"/internal/immutable/nodes/7.C5YW7_ZC.js",e+"/internal/immutable/nodes/8.BRnmeEZ3.js",e+"/internal/immutable/chunks/Icon.Cg4N3CUI.js",e+"/internal/immutable/chunks/InputResults.0iyH25Eh.js",e+"/internal/immutable/chunks/auth.Cuil8WDr.js",e+"/internal/immutable/chunks/control.CYgJF_JY.js",e+"/internal/immutable/chunks/entry.LvqNYXvT.js",e+"/internal/immutable/chunks/i18n-svelte.Cy_NFzKh.js",e+"/internal/immutable/chunks/index.DLwqVcQA.js",e+"/internal/immutable/chunks/index.DqJocChF.js",e+"/internal/immutable/assets/1716782422460-crystal-beer-parlor-0.CtTRpkSK.webp",e+"/internal/immutable/assets/1719697913116-twains-brewpub--billiards-0.Btbmb_cV.webp",e+"/internal/immutable/assets/1718574622702-jekyl-and-hyde-taphouse-0.7ODWYZ55.webp",e+"/internal/immutable/assets/1719270711525-the-springs-cinema--taphouse-0.DfN4abXX.webp",e+"/internal/immutable/assets/1719018191808-meltons-app-and-tap-0.tWosB_L0.webp",e+"/internal/immutable/assets/1713067212563-bodensee-0.V9B6jlv2.webp",e+"/internal/immutable/assets/1717646487699-benchwarmers-0.aINK3Ir2.webp",e+"/internal/immutable/chunks/index.GdwTKEnR.js",e+"/internal/immutable/chunks/localstorageWritable.BBtfYKNF.js",e+"/internal/immutable/chunks/notifications.CHwUNRbm.js",e+"/internal/immutable/chunks/paths.D3KUg3_Q.js",e+"/internal/immutable/chunks/preload-helper.D6kgxu3v.js",e+"/internal/immutable/assets/repo.9zABvnW_.css",e+"/internal/immutable/chunks/repo.Du6D0cT2.js",e+"/internal/immutable/chunks/scheduler.BZy1TXPY.js",e+"/internal/immutable/chunks/stores.3CDY3fXl.js",e+"/internal/immutable/chunks/util.COdJP13i.js",e+"/internal/immutable/chunks/index.DbiDv6BT.js",e+"/internal/immutable/entry/start.CEa8RBJt.js",e+"/internal/immutable/chunks/index.DmZJW9rw.js"],c=[e+"/favicon.png",e+"/icon.png",e+"/icon256x256.png",e+"/manifest.json"],o="1720268345799",l=self,m=`cache-${o}`,r=[...u,...c];l.addEventListener("install",n=>{async function s(){await(await caches.open(m)).addAll(r)}n.waitUntil(s())});l.addEventListener("activate",n=>{async function s(){for(const t of await caches.keys())t!==m&&await caches.delete(t)}n.waitUntil(s())});l.addEventListener("fetch",n=>{if(n.request.method==="GET"){const s=(async()=>{const t=new URL(n.request.url),a=await caches.open(m);if(r.includes(t.pathname))return a.match(t.pathname);try{const i=await fetch(n.request);return i.status===200&&!n.request.url.startsWith("chrome-extension://")&&a.put(n.request,i.clone()),i}catch{return a.match(n.request)}})();n.respondWith(s)}});

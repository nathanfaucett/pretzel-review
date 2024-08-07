var R=Object.defineProperty;var O=(t,n,e)=>n in t?R(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var f=(t,n,e)=>O(t,typeof n!="symbol"?n+"":n,e);function F(){}const lt=t=>t;function G(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function ot(){return Object.create(null)}function I(t){t.forEach(z)}function ut(t){return typeof t=="function"}function at(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let m;function ft(t,n){return t===n?!0:(m||(m=document.createElement("a")),m.href=n,t===m.href)}function _t(t,n){return t!=t?n==n:t!==n}function ht(t){return Object.keys(t).length===0}function L(t,...n){if(t==null){for(const i of n)i(void 0);return F}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function dt(t){let n;return L(t,e=>n=e)(),n}function mt(t,n,e){t.$$.on_destroy.push(L(n,e))}function pt(t,n,e,i){if(t){const r=M(t,n,e,i);return t[0](r)}}function M(t,n,e,i){return t[1]&&i?G(e.ctx.slice(),t[1](i(n))):e.ctx}function yt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(n.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=n.dirty[o]|r[o];return l}return n.dirty|r}return n.dirty}function gt(t,n,e,i,r,l){if(r){const s=M(n,e,i,l);t.p(s,r)}}function bt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function xt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function Et(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function Nt(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let y=!1;function Tt(){y=!0}function vt(){y=!1}function U(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=u?r+1:U(1,r,B=>n[e[B]].claim_order,u))-1;i[c]=e[a]+1;const A=a+1;e[A]=c,r=Math.max(A,r)}const l=[],s=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(l.push(n[c-1]);o>=c;o--)s.push(n[o]);o--}for(;o>=0;o--)s.push(n[o]);l.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<l.length&&s[c].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(s[c],a)}}function J(t,n){t.appendChild(n)}function K(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function wt(t){const n=v("style");return n.textContent="/* empty */",Q(K(t),n),n.sheet}function Q(t,n){return J(t.head||t,n),n.sheet}function V(t,n){if(y){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function X(t,n,e){t.insertBefore(n,e||null)}function Y(t,n,e){y&&!e?V(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function N(t){t.parentNode&&t.parentNode.removeChild(t)}function At(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function v(t){return document.createElement(t)}function S(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function kt(){return w(" ")}function Dt(){return w("")}function Ht(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Lt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function Mt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function Z(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function St(t,n){for(const e in n)Z(t,e,n[e])}function Ct(t){return t.dataset.svelteH}function Pt(t){return t===""?null:+t}function jt(t){return Array.from(t.childNodes)}function C(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,r=!1){C(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(n(o)){const c=e(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(n(o)){const c=e(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function j(t,n,e,i){return P(t,r=>r.nodeName===n,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];e[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(n))}function qt(t,n,e){return j(t,n,e,v)}function Bt(t,n,e){return j(t,n,e,S)}function $(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>w(n),!0)}function Rt(t){return $(t," ")}function k(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return-1}function Ot(t,n){const e=k(t,"HTML_TAG_START",0),i=k(t,"HTML_TAG_END",e+1);if(e===-1||i===-1)return new b(n);C(t);const r=t.splice(e,i-e+1);N(r[0]),N(r[r.length-1]);const l=r.slice(1,r.length-1);if(l.length===0)return new b(n);for(const s of l)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(n,l)}function Ft(t,n){n=""+n,t.data!==n&&(t.data=n)}function Gt(t,n){t.value=n??""}function zt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,"")}function It(t,n,e){t.classList.toggle(n,!!e)}function tt(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function Ut(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,e.push(r)):l===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}class nt{constructor(n=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=S(e.nodeName):this.e=v(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)X(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(N)}}class b extends nt{constructor(e=!1,i){super(e);f(this,"l");this.e=this.n=null,this.l=i}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let i=0;i<this.n.length;i+=1)Y(this.t,this.n[i],e)}}function Wt(t,n){return new t(n)}let p;function x(t){p=t}function g(){if(!p)throw new Error("Function called outside component initialization");return p}function Jt(t){g().$$.on_mount.push(t)}function Kt(t){g().$$.after_update.push(t)}function Qt(t){g().$$.on_destroy.push(t)}function Vt(){const t=g();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const l=tt(n,e,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}const d=[],D=[];let h=[];const H=[],q=Promise.resolve();let T=!1;function et(){T||(T=!0,q.then(rt))}function Xt(){return et(),q}function it(t){h.push(t)}const E=new Set;let _=0;function rt(){if(_!==0)return;const t=p;do{try{for(;_<d.length;){const n=d[_];_++,x(n),st(n.$$)}}catch(n){throw d.length=0,_=0,n}for(x(null),d.length=0,_=0;D.length;)D.pop()();for(let n=0;n<h.length;n+=1){const e=h[n];E.has(e)||(E.add(e),e())}h.length=0}while(d.length);for(;H.length;)H.pop()();T=!1,E.clear(),x(t)}function st(t){if(t.fragment!==null){t.update(),I(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(it)}}function Yt(t){const n=[],e=[];h.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),h=n}export{it as $,L as A,at as B,ut as C,Ct as D,Dt as E,It as F,At as G,ft as H,b as I,Ot as J,Kt as K,zt as L,D as M,Wt as N,Xt as O,G as P,S as Q,Bt as R,St as S,Et as T,xt as U,Qt as V,Vt as W,Mt as X,Pt as Y,K as Z,wt as _,jt as a,tt as a0,lt as a1,ot as a2,rt as a3,ht as a4,Yt as a5,p as a6,x as a7,z as a8,d as a9,et as aa,Tt as ab,vt as ac,Nt as ad,$ as b,qt as c,N as d,v as e,Rt as f,Z as g,V as h,Y as i,Ft as j,F as k,mt as l,pt as m,_t as n,bt as o,yt as p,Ut as q,Gt as r,kt as s,w as t,gt as u,Ht as v,Lt as w,I as x,Jt as y,dt as z};

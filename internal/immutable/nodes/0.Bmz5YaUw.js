import{_ as ce}from"../chunks/preload-helper.D6kgxu3v.js";import{l as fe,a as Y,d as ue,s as de}from"../chunks/i18n-svelte.DNWlL5I4.js";import{k as A,a1 as me,z as _e,ad as Z,C as ge,B as P,P as v,U as M,m as j,u as F,o as R,p as q,n as J,e as V,s as K,t as $e,c as T,a as B,d as y,f as Q,b as pe,g as O,F as C,i as U,h as D,v as he,j as be,l as ve,$ as ye,y as ke}from"../chunks/scheduler.CzlXIwG-.js";import{d as se,w as we}from"../chunks/index.CxASQFDr.js";import{n as Ne,l as Le,f as Ce,h as Me,S as E,i as I,c as k,b as w,m as N,t as g,a as $,d as L,g as oe,e as re,j as Ee,k as Ie}from"../chunks/index.Dk8rVhpB.js";import{l as Se}from"../chunks/localstorageWritable.BdYGGeH9.js";import{e as x,u as De,g as Ve}from"../chunks/util.BetHJXtS.js";import{r as Te,n as Be}from"../chunks/notifications.C0ZWzCbh.js";import{I as z,g as W,a as G}from"../chunks/Icon.CMlBveYi.js";function Oe(r,e,o,t){if(!e)return A;const n=r.getBoundingClientRect();if(e.left===n.left&&e.right===n.right&&e.top===n.top&&e.bottom===n.bottom)return A;const{delay:s=0,duration:a=300,easing:c=me,start:f=Ne()+s,end:l=f+a,tick:i=A,css:d}=o(r,{from:e,to:n},t);let p=!0,m=!1,h;function u(){d&&(h=Ce(r,0,1,a,s,c,d)),s||(m=!0)}function _(){d&&Me(r,h),p=!1}return Le(b=>{if(!m&&b>=f&&(m=!0),m&&b>=l&&(i(1,0),_()),!p)return!1;if(m){const S=b-f,X=0+1*c(S/a);i(X,1-X)}return!0}),u(),i(0,1),_}function je(r){const e=getComputedStyle(r);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:o,height:t}=e,n=r.getBoundingClientRect();r.style.position="absolute",r.style.width=o,r.style.height=t,ae(r,n)}}function ae(r,e){const o=r.getBoundingClientRect();if(e.left!==o.left||e.top!==o.top){const t=getComputedStyle(r),n=t.transform==="none"?"":t.transform;r.style.transform=`${n} translate(${e.left-o.left}px, ${e.top-o.top}px)`}}const Fe=r=>({}),Re={en:()=>ce(()=>import("../chunks/index.CnOKVHL2.js"),[],import.meta.url)},qe=(r,e)=>Y[r]={...Y[r],...e},Ae=async r=>(await Re[r]()).default,Pe=async r=>{qe(r,await Ae(r)),Ue(r)},Ue=r=>void(fe[r]=Fe()),le=we(navigator.language),ze=se(le,r=>r);function We(r){le.set(r)}window.addEventListener("languagechange",()=>{We(navigator.language)});const Ge=!0,He=!0,Je=async r=>{const e=ue(()=>[_e(ze)]);await Pe(e),de(e)},Tt=Object.freeze(Object.defineProperty({__proto__:null,load:Je,prerender:Ge,ssr:He},Symbol.toStringTag,{value:"Module"})),H=Se("theme",null),Ke=se(H,r=>r);Ke.subscribe(e=>{const o=document.documentElement.classList;e==="light"?(o.remove("dark"),o.add("light")):(e==="dark"||window.matchMedia("(prefers-color-scheme: dark)").matches)&&(o.remove("light"),o.add("dark"))}),localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?H.set("dark"):H.set("light"));function ie(r){const e=r-1;return e*e*e+1}function ee(r,{delay:e=0,duration:o=400,easing:t=ie,x:n=0,y:s=0,opacity:a=0}={}){const c=getComputedStyle(r),f=+c.opacity,l=c.transform==="none"?"":c.transform,i=f*(1-a),[d,p]=Z(n),[m,h]=Z(s);return{delay:e,duration:o,easing:t,css:(u,_)=>`
			transform: ${l} translate(${(1-u)*d}${p}, ${(1-u)*m}${h});
			opacity: ${f-i*_}`}}function Qe(r,{from:e,to:o},t={}){const n=getComputedStyle(r),s=n.transform==="none"?"":n.transform,[a,c]=n.transformOrigin.split(" ").map(parseFloat),f=e.left+e.width*a/o.width-(o.left+a),l=e.top+e.height*c/o.height-(o.top+c),{delay:i=0,duration:d=m=>Math.sqrt(m)*120,easing:p=ie}=t;return{delay:i,duration:ge(d)?d(Math.sqrt(f*f+l*l)):d,easing:p,css:(m,h)=>{const u=h*f,_=h*l,b=m+h*e.width/o.width,S=m+h*e.height/o.height;return`transform: ${s} translate(${u}px, ${_}px) scale(${b}, ${S});`}}}function Xe(r){let e;const o=r[2].default,t=j(o,r,r[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&F(t,o,n,n[3],e?q(o,n[3],s,null):R(n[3]),null)},i(n){e||(g(t,n),e=!0)},o(n){$(t,n),e=!1},d(n){t&&t.d(n)}}}function Ye(r){let e,o;const t=[{name:"circle-x"},r[1],{iconNode:r[0]}];let n={$$slots:{default:[Xe]},$$scope:{ctx:r}};for(let s=0;s<t.length;s+=1)n=v(n,t[s]);return e=new z({props:n}),{c(){k(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,a){N(e,s,a),o=!0},p(s,[a]){const c=a&3?W(t,[t[0],a&2&&G(s[1]),a&1&&{iconNode:s[0]}]):{};a&8&&(c.$$scope={dirty:a,ctx:s}),e.$set(c)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){$(e.$$.fragment,s),o=!1},d(s){L(e,s)}}}function Ze(r,e,o){let{$$slots:t={},$$scope:n}=e;const s=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];return r.$$set=a=>{o(1,e=v(v({},e),M(a))),"$$scope"in a&&o(3,n=a.$$scope)},e=M(e),[s,e,t,n]}class xe extends E{constructor(e){super(),I(this,e,Ze,Ye,P,{})}}function et(r){let e;const o=r[2].default,t=j(o,r,r[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&F(t,o,n,n[3],e?q(o,n[3],s,null):R(n[3]),null)},i(n){e||(g(t,n),e=!0)},o(n){$(t,n),e=!1},d(n){t&&t.d(n)}}}function tt(r){let e,o;const t=[{name:"circle-check"},r[1],{iconNode:r[0]}];let n={$$slots:{default:[et]},$$scope:{ctx:r}};for(let s=0;s<t.length;s+=1)n=v(n,t[s]);return e=new z({props:n}),{c(){k(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,a){N(e,s,a),o=!0},p(s,[a]){const c=a&3?W(t,[t[0],a&2&&G(s[1]),a&1&&{iconNode:s[0]}]):{};a&8&&(c.$$scope={dirty:a,ctx:s}),e.$set(c)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){$(e.$$.fragment,s),o=!1},d(s){L(e,s)}}}function nt(r,e,o){let{$$slots:t={},$$scope:n}=e;const s=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];return r.$$set=a=>{o(1,e=v(v({},e),M(a))),"$$scope"in a&&o(3,n=a.$$scope)},e=M(e),[s,e,t,n]}class st extends E{constructor(e){super(),I(this,e,nt,tt,P,{})}}function ot(r){let e;const o=r[2].default,t=j(o,r,r[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&F(t,o,n,n[3],e?q(o,n[3],s,null):R(n[3]),null)},i(n){e||(g(t,n),e=!0)},o(n){$(t,n),e=!1},d(n){t&&t.d(n)}}}function rt(r){let e,o;const t=[{name:"info"},r[1],{iconNode:r[0]}];let n={$$slots:{default:[ot]},$$scope:{ctx:r}};for(let s=0;s<t.length;s+=1)n=v(n,t[s]);return e=new z({props:n}),{c(){k(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,a){N(e,s,a),o=!0},p(s,[a]){const c=a&3?W(t,[t[0],a&2&&G(s[1]),a&1&&{iconNode:s[0]}]):{};a&8&&(c.$$scope={dirty:a,ctx:s}),e.$set(c)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){$(e.$$.fragment,s),o=!1},d(s){L(e,s)}}}function at(r,e,o){let{$$slots:t={},$$scope:n}=e;const s=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];return r.$$set=a=>{o(1,e=v(v({},e),M(a))),"$$scope"in a&&o(3,n=a.$$scope)},e=M(e),[s,e,t,n]}class lt extends E{constructor(e){super(),I(this,e,at,rt,P,{})}}function it(r){let e;const o=r[2].default,t=j(o,r,r[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&F(t,o,n,n[3],e?q(o,n[3],s,null):R(n[3]),null)},i(n){e||(g(t,n),e=!0)},o(n){$(t,n),e=!1},d(n){t&&t.d(n)}}}function ct(r){let e,o;const t=[{name:"triangle-alert"},r[1],{iconNode:r[0]}];let n={$$slots:{default:[it]},$$scope:{ctx:r}};for(let s=0;s<t.length;s+=1)n=v(n,t[s]);return e=new z({props:n}),{c(){k(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,a){N(e,s,a),o=!0},p(s,[a]){const c=a&3?W(t,[t[0],a&2&&G(s[1]),a&1&&{iconNode:s[0]}]):{};a&8&&(c.$$scope={dirty:a,ctx:s}),e.$set(c)},i(s){o||(g(e.$$.fragment,s),o=!0)},o(s){$(e.$$.fragment,s),o=!1},d(s){L(e,s)}}}function ft(r,e,o){let{$$slots:t={},$$scope:n}=e;const s=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];return r.$$set=a=>{o(1,e=v(v({},e),M(a))),"$$scope"in a&&o(3,n=a.$$scope)},e=M(e),[s,e,t,n]}class ut extends E{constructor(e){super(),I(this,e,ft,ct,P,{})}}function dt(r){let e,o;return e=new ut({}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){N(e,t,n),o=!0},i(t){o||(g(e.$$.fragment,t),o=!0)},o(t){$(e.$$.fragment,t),o=!1},d(t){L(e,t)}}}function mt(r){let e,o;return e=new lt({}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){N(e,t,n),o=!0},i(t){o||(g(e.$$.fragment,t),o=!0)},o(t){$(e.$$.fragment,t),o=!1},d(t){L(e,t)}}}function _t(r){let e,o;return e=new st({}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){N(e,t,n),o=!0},i(t){o||(g(e.$$.fragment,t),o=!0)},o(t){$(e.$$.fragment,t),o=!1},d(t){L(e,t)}}}function gt(r){let e,o;return e=new xe({}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){N(e,t,n),o=!0},i(t){o||(g(e.$$.fragment,t),o=!0)},o(t){$(e.$$.fragment,t),o=!1},d(t){L(e,t)}}}function $t(r){let e,o,t,n,s,a,c=r[0].message+"",f,l,i,d;const p=[gt,_t,mt,dt],m=[];function h(u,_){return u[0].type==="error"?0:u[0].type==="success"?1:u[0].type==="info"?2:u[0].type==="warning"?3:-1}return~(t=h(r))&&(n=m[t]=p[t](r)),{c(){e=V("button"),o=V("div"),n&&n.c(),s=K(),a=V("div"),f=$e(c),this.h()},l(u){e=T(u,"BUTTON",{class:!0});var _=B(e);o=T(_,"DIV",{class:!0});var b=B(o);n&&n.l(b),b.forEach(y),s=Q(_),a=T(_,"DIV",{class:!0});var S=B(a);f=pe(S,c),S.forEach(y),_.forEach(y),this.h()},h(){O(o,"class","mr-2 h-6 w-6 text-white"),O(a,"class","flex-grow text-left text-white"),O(e,"class","m-1 flex flex-grow cursor-pointer flex-row items-center px-3 py-2 shadow"),C(e,"bg-green-600",r[0].type==="success"),C(e,"bg-red-600",r[0].type==="error"),C(e,"bg-blue-600",r[0].type==="info"),C(e,"bg-yellow-600",r[0].type==="warning")},m(u,_){U(u,e,_),D(e,o),~t&&m[t].m(o,null),D(e,s),D(e,a),D(a,f),l=!0,i||(d=he(e,"click",r[1]),i=!0)},p(u,[_]){let b=t;t=h(u),t!==b&&(n&&(oe(),$(m[b],1,1,()=>{m[b]=null}),re()),~t?(n=m[t],n||(n=m[t]=p[t](u),n.c()),g(n,1),n.m(o,null)):n=null),(!l||_&1)&&c!==(c=u[0].message+"")&&be(f,c),(!l||_&1)&&C(e,"bg-green-600",u[0].type==="success"),(!l||_&1)&&C(e,"bg-red-600",u[0].type==="error"),(!l||_&1)&&C(e,"bg-blue-600",u[0].type==="info"),(!l||_&1)&&C(e,"bg-yellow-600",u[0].type==="warning")},i(u){l||(g(n),l=!0)},o(u){$(n),l=!1},d(u){u&&y(e),~t&&m[t].d(),i=!1,d()}}}function pt(r,e,o){let{notification:t}=e;function n(){Te(t.id)}return r.$$set=s=>{"notification"in s&&o(0,t=s.notification)},[t,n]}class ht extends E{constructor(e){super(),I(this,e,pt,$t,J,{notification:0})}}function te(r,e,o){const t=r.slice();return t[1]=e[o],t}function ne(r,e){let o,t,n,s,a,c,f=A,l;return t=new ht({props:{notification:e[1]}}),{key:r,first:null,c(){o=V("div"),k(t.$$.fragment),n=K(),this.h()},l(i){o=T(i,"DIV",{});var d=B(o);w(t.$$.fragment,d),n=Q(d),d.forEach(y),this.h()},h(){this.first=o},m(i,d){U(i,o,d),N(t,o,null),D(o,n),l=!0},p(i,d){e=i;const p={};d&1&&(p.notification=e[1]),t.$set(p)},r(){c=o.getBoundingClientRect()},f(){je(o),f(),ae(o,c)},a(){f(),f=Oe(o,c,Qe,{})},i(i){l||(g(t.$$.fragment,i),i&&ye(()=>{l&&(a&&a.end(1),s=Ee(o,ee,{y:-64,duration:300}),s.start())}),l=!0)},o(i){$(t.$$.fragment,i),s&&s.invalidate(),i&&(a=Ie(o,ee,{y:-64,duration:300})),l=!1},d(i){i&&y(o),L(t),i&&a&&a.end()}}}function bt(r){let e,o,t=[],n=new Map,s,a=x(r[0]);const c=f=>f[1].id;for(let f=0;f<a.length;f+=1){let l=te(r,a,f),i=c(l);n.set(i,t[f]=ne(i,l))}return{c(){e=V("div"),o=V("div");for(let f=0;f<t.length;f+=1)t[f].c();this.h()},l(f){e=T(f,"DIV",{class:!0});var l=B(e);o=T(l,"DIV",{class:!0});var i=B(o);for(let d=0;d<t.length;d+=1)t[d].l(i);i.forEach(y),l.forEach(y),this.h()},h(){O(o,"class","flex flex-col"),O(e,"class","fixed left-1/2 top-0 z-[100000] -translate-x-1/2")},m(f,l){U(f,e,l),D(e,o);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(o,null);s=!0},p(f,[l]){if(l&1){a=x(f[0]),oe();for(let i=0;i<t.length;i+=1)t[i].r();t=De(t,l,c,1,f,a,n,o,Ve,ne,null,te);for(let i=0;i<t.length;i+=1)t[i].a();re()}},i(f){if(!s){for(let l=0;l<a.length;l+=1)g(t[l]);s=!0}},o(f){for(let l=0;l<t.length;l+=1)$(t[l]);s=!1},d(f){f&&y(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function vt(r,e,o){let t;return ve(r,Be,n=>o(0,t=n)),[t]}class yt extends E{constructor(e){super(),I(this,e,vt,bt,J,{})}}function kt(r){let e,o,t;const n=r[1].default,s=j(n,r,r[0],null);return o=new yt({}),{c(){s&&s.c(),e=K(),k(o.$$.fragment)},l(a){s&&s.l(a),e=Q(a),w(o.$$.fragment,a)},m(a,c){s&&s.m(a,c),U(a,e,c),N(o,a,c),t=!0},p(a,[c]){s&&s.p&&(!t||c&1)&&F(s,n,a,a[0],t?q(n,a[0],c,null):R(a[0]),null)},i(a){t||(g(s,a),g(o.$$.fragment,a),t=!0)},o(a){$(s,a),$(o.$$.fragment,a),t=!1},d(a){a&&y(e),s&&s.d(a),L(o,a)}}}function wt(r,e,o){let{$$slots:t={},$$scope:n}=e;return ke(()=>{document.body.classList.add("hydrated")}),r.$$set=s=>{"$$scope"in s&&o(0,n=s.$$scope)},[n,t]}class Bt extends E{constructor(e){super(),I(this,e,wt,kt,J,{})}}export{Bt as component,Tt as universal};
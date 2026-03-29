import{_ as O}from"../chunks/C1FmrZbK.js";import{m as T,n as X,o as Y,q as tt,s as et,e as at}from"../chunks/BCIMF84C.js";import{b8 as D,w as rt,z as ot,aa as $,p as q,c as y,a8 as g,u as _,r as v,b as j,t as st,a as H,s as nt,n as it,d as ct}from"../chunks/DuzZ3YqS.js";import{c as k,a as f,f as z}from"../chunks/B46HTrE5.js";import"../chunks/7blsLkiq.js";import{l as lt}from"../chunks/D25XPWBy.js";import{o as dt}from"../chunks/CUKbaKhO.js";import{s as x}from"../chunks/C5XZRqQ1.js";import{i as R}from"../chunks/CBaS99mg.js";import{I as N,a as ft,t as A}from"../chunks/DZQ0VklV.js";import{r as ut,n as mt}from"../chunks/BCAkpu_4.js";import{i as pt,s as vt,e as ht}from"../chunks/CwakIp7b.js";import{l as M,s as S,p as gt}from"../chunks/B6dSQWtI.js";const _t=t=>({}),yt={de:()=>O(()=>import("../chunks/BckD3GK7.js"),[],import.meta.url),en:()=>O(()=>import("../chunks/BVwob0lv.js"),[],import.meta.url)},$t=(t,e)=>T[t]={...T[t],...e},xt=async t=>(await yt[t]()).default,wt=async t=>{$t(t,await xt(t)),bt(t)},bt=t=>void(X[t]=_t()),V=rt(navigator.language),Lt=D(V,t=>t);function kt(t){V.set(t)}window.addEventListener("languagechange",()=>{kt(navigator.language)});const zt=!0,Nt=!0,Mt=async t=>{const e=Y(()=>[ot(Lt)]);await wt(e),tt(e)},re=Object.freeze(Object.defineProperty({__proto__:null,load:Mt,prerender:zt,ssr:Nt},Symbol.toStringTag,{value:"Module"})),I=lt("theme",null),St=D(I,t=>t);St.subscribe(e=>{const a=document.documentElement.classList;e==="light"?(a.remove("dark"),a.add("light")):(e==="dark"||window.matchMedia("(prefers-color-scheme: dark)").matches)&&(a.remove("light"),a.add("dark"))}),localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?I.set("dark"):I.set("light"));function Pt(t){const e=t-1;return e*e*e+1}function F(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}function W(t,{delay:e=0,duration:a=400,easing:n=Pt,x:r=0,y:c=0,opacity:o=0}={}){const s=getComputedStyle(t),l=+s.opacity,d=s.transform==="none"?"":s.transform,u=l*(1-o),[m,p]=F(r),[h,i]=F(c);return{delay:e,duration:a,easing:n,css:(w,P)=>`
			transform: ${d} translate(${(1-w)*m}${p}, ${(1-w)*h}${i});
			opacity: ${l-u*P}`}}function Ct(t){const e=t-1;return e*e*e+1}function Et(t,{from:e,to:a},n={}){var{delay:r=0,duration:c=b=>Math.sqrt(b)*120,easing:o=Ct}=n,s=getComputedStyle(t),l=s.transform==="none"?"":s.transform,[d,u]=s.transformOrigin.split(" ").map(parseFloat);d/=t.clientWidth,u/=t.clientHeight;var m=It(t),p=t.clientWidth/a.width/m,h=t.clientHeight/a.height/m,i=e.left+e.width*d,w=e.top+e.height*u,P=a.left+a.width*d,Z=a.top+a.height*u,C=(i-P)*p,E=(w-Z)*h,B=e.width/a.width,G=e.height/a.height;return{delay:r,duration:typeof c=="function"?c(Math.sqrt(C*C+E*E)):c,easing:o,css:(b,L)=>{var J=L*C,K=L*E,Q=b+L*B,U=b+L*G;return`transform: ${l} translate(${J}px, ${K}px) scale(${Q}, ${U});`}}}function It(t){if("currentCSSZoom"in t)return t.currentCSSZoom;for(var e=t,a=1;e!==null;)a*=+getComputedStyle(e).zoom,e=e.parentElement;return a}function Ot(t,e){const a=M(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];N(t,S({name:"circle-x"},()=>a,{get iconNode(){return n},children:(r,c)=>{var o=k(),s=$(o);x(s,e,"default",{}),f(r,o)},$$slots:{default:!0}}))}function Tt(t,e){const a=M(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];N(t,S({name:"circle-check"},()=>a,{get iconNode(){return n},children:(r,c)=>{var o=k(),s=$(o);x(s,e,"default",{}),f(r,o)},$$slots:{default:!0}}))}function At(t,e){const a=M(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];N(t,S({name:"info"},()=>a,{get iconNode(){return n},children:(r,c)=>{var o=k(),s=$(o);x(s,e,"default",{}),f(r,o)},$$slots:{default:!0}}))}function Ft(t,e){const a=M(e,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];N(t,S({name:"triangle-alert"},()=>a,{get iconNode(){return n},children:(r,c)=>{var o=k(),s=$(o);x(s,e,"default",{}),f(r,o)},$$slots:{default:!0}}))}var Wt=z('<button><div class="mr-2 h-6 w-6 text-white"><!></div> <div class="flex-grow text-left text-white"> </div></button>');function Dt(t,e){q(e,!1);let a=gt(e,"notification",9);function n(){ut(a().id)}R(!0);var r=Wt();let c;var o=y(r),s=y(o);{var l=i=>{Ot(i,{})},d=i=>{Tt(i,{})},u=i=>{At(i,{})},m=i=>{Ft(i,{})};pt(s,i=>{g(a()),_(()=>a().type==="error")?i(l):(g(a()),_(()=>a().type==="success")?i(d,1):(g(a()),_(()=>a().type==="info")?i(u,2):(g(a()),_(()=>a().type==="warning")&&i(m,3))))})}v(o);var p=j(o,2),h=y(p,!0);v(p),v(r),st(()=>{c=et(r,1,"m-1 flex flex-grow cursor-pointer flex-row items-center px-3 py-2 shadow",null,c,{"bg-green-600":a().type==="success","bg-red-600":a().type==="error","bg-blue-600":a().type==="info","bg-yellow-600":a().type==="warning"}),vt(h,(g(a()),_(()=>a().message)))}),ht("click",r,n),f(t,r),H()}var qt=z("<div><!></div>"),jt=z('<div class="fixed left-1/2 top-0 z-[100000] -translate-x-1/2"><div class="flex flex-col"></div></div>');function Ht(t){const e=()=>ct(mt,"$notifications",a),[a,n]=nt();var r=jt(),c=y(r);at(c,13,e,o=>o.id,(o,s)=>{var l=qt(),d=y(l);Dt(d,{get notification(){return it(s)}}),v(l),ft(l,()=>Et,null),A(1,l,()=>W,()=>({y:-64,duration:300})),A(2,l,()=>W,()=>({y:-64,duration:300})),f(o,l)}),v(c),v(r),f(t,r),n()}var Rt=z("<!> <!>",1);function oe(t,e){q(e,!1),dt(()=>{document.body.classList.add("hydrated")}),R(!0);var a=Rt(),n=$(a);x(n,e,"default",{});var r=j(n,2);Ht(r),f(t,a),H()}export{oe as component,re as universal};

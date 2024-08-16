import{n as ne,s as L,e as w,t as Q,q as le,d as m,f as q,c as b,a as E,b as W,g as d,i as F,h as c,r as X,v as $,w as oe,j as Y,x as ie,l as Z,y as ue}from"../chunks/scheduler.tgkqE9WI.js";import{S as de,i as ce,c as te,b as se,m as ae,t as N,a as M,e as fe,d as re,g as pe}from"../chunks/index.kXTl4Cum.js";import{I as me,d as he,a as _e,S as ve,G as ge,p as we,C as be,v as Ie}from"../chunks/InputResults.C6joF3HM.js";import{L as ye}from"../chunks/util.rhh8ua8O.js";import{d as Ee}from"../chunks/auth.DtLbhIKo.js";import{g as ke}from"../chunks/entry.DCvy91ox.js";import{b as Se}from"../chunks/paths.C7aaZGqD.js";import{c as Ve}from"../chunks/notifications.aPm2Hl8_.js";import{p as De}from"../chunks/stores.Df1_agEV.js";function ee(t){let i,e,r,u;return r=new ve({}),{c(){i=w("div"),e=w("div"),te(r.$$.fragment),this.h()},l(a){i=b(a,"DIV",{class:!0});var f=E(i);e=b(f,"DIV",{class:!0});var h=E(e);se(r.$$.fragment,h),h.forEach(m),f.forEach(m),this.h()},h(){d(e,"class","inline-block h-6 w-6"),d(i,"class","mr-2 flex flex-row justify-center")},m(a,f){F(a,i,f),c(i,e),ae(r,e,null),u=!0},i(a){u||(N(r.$$.fragment,a),u=!0)},o(a){M(r.$$.fragment,a),u=!1},d(a){a&&m(i),re(r)}}}function Pe(t){let i,e,r,u,a,f,h=t[2].signIn.title()+"",S,V,p,_,l,D,P,k,I,T,n,v,R,j=t[2].signIn.signIn()+"",U,y,O,H;document.title=i=t[2].signIn.title(),I=new me({props:{name:"password",result:t[1]}});let o=t[0]&&ee();return{c(){e=L(),r=w("div"),u=w("div"),a=w("div"),f=w("h1"),S=Q(h),V=L(),p=w("form"),_=w("div"),l=w("input"),k=L(),te(I.$$.fragment),T=L(),n=w("div"),v=w("button"),o&&o.c(),R=L(),U=Q(j),this.h()},l(s){le("svelte-qwmky9",document.head).forEach(m),e=q(s),r=b(s,"DIV",{class:!0});var C=E(r);u=b(C,"DIV",{class:!0});var z=E(u);a=b(z,"DIV",{class:!0});var x=E(a);f=b(x,"H1",{class:!0});var J=E(f);S=W(J,h),J.forEach(m),V=q(x),p=b(x,"FORM",{});var A=E(p);_=b(A,"DIV",{class:!0});var B=E(_);l=b(B,"INPUT",{class:!0,type:!0,name:!0,autocomplete:!0,placeholder:!0}),k=q(B),se(I.$$.fragment,B),B.forEach(m),T=q(A),n=b(A,"DIV",{class:!0});var K=E(n);v=b(K,"BUTTON",{type:!0,class:!0});var G=E(v);o&&o.l(G),R=q(G),U=W(G,j),G.forEach(m),K.forEach(m),A.forEach(m),x.forEach(m),z.forEach(m),C.forEach(m),this.h()},h(){d(f,"class","mb-1"),d(l,"class",D="w-full "+t[4]("password")),d(l,"type","password"),d(l,"name","password"),d(l,"autocomplete","current-password"),d(l,"placeholder",P=t[2].signIn.passwordPlaceholder()),d(_,"class","mb-2"),d(v,"type","submit"),d(v,"class","btn primary flex flex-shrink"),v.disabled=t[5],d(n,"class","flex flex-row justify-end"),d(a,"class","flex flex-grow flex-col bg-white p-4 shadow dark:bg-gray-800"),d(u,"class","mx-auto flex w-full flex-shrink flex-col p-4 py-10 md:w-72"),d(r,"class","flex flex-grow flex-col justify-end md:justify-start")},m(s,g){F(s,e,g),F(s,r,g),c(r,u),c(u,a),c(a,f),c(f,S),c(a,V),c(a,p),c(p,_),c(_,l),X(l,t[3]),c(_,k),ae(I,_,null),c(p,T),c(p,n),c(n,v),o&&o.m(v,null),c(v,R),c(v,U),y=!0,O||(H=[$(l,"input",t[9]),$(l,"input",t[6]),$(p,"submit",oe(t[7]))],O=!0)},p(s,[g]){(!y||g&4)&&i!==(i=s[2].signIn.title())&&(document.title=i),(!y||g&4)&&h!==(h=s[2].signIn.title()+"")&&Y(S,h),(!y||g&16&&D!==(D="w-full "+s[4]("password")))&&d(l,"class",D),(!y||g&4&&P!==(P=s[2].signIn.passwordPlaceholder()))&&d(l,"placeholder",P),g&8&&l.value!==s[3]&&X(l,s[3]);const C={};g&2&&(C.result=s[1]),I.$set(C),s[0]?o?g&1&&N(o,1):(o=ee(),o.c(),N(o,1),o.m(v,R)):o&&(pe(),M(o,1,1,()=>{o=null}),fe()),(!y||g&4)&&j!==(j=s[2].signIn.signIn()+"")&&Y(U,j),(!y||g&32)&&(v.disabled=s[5])},i(s){y||(N(I.$$.fragment,s),N(o),y=!0)},o(s){M(I.$$.fragment,s),M(o),y=!1},d(s){s&&(m(e),m(r)),re(I),o&&o.d(),O=!1,ie(H)}}}const Te=t=>ge((i={},e)=>{e.length&&(we(e),be("password",t.errors.message.required(),()=>{Ie(i.password).isNotBlank()}))});function je(t,i,e){let r,u,a,f,h,S;Z(t,ye,n=>e(2,h=n)),Z(t,De,n=>e(11,S=n));let V=`${Se}/new`;ue(()=>{const n=S.url.searchParams.get("redirect");n&&(V=decodeURIComponent(n))});let p="";const _=new Set,l=he(()=>{r({password:p},Array.from(_)).done(n=>{e(1,u=n)}),_.clear()},300);function D(){_.add("password"),l(),l.flush()}function P(n){n.currentTarget.value=n.currentTarget.value.trim(),_.add(n.currentTarget.name),l()}let k=!1;async function I(n){try{e(0,k=!0),D(),u.isValid()&&(await Ee(p),await ke(V))}catch{Ve(h.errors.message.invalid())}finally{e(0,k=!1)}}function T(){p=this.value,e(3,p)}return t.$$.update=()=>{t.$$.dirty&4&&e(8,r=Te(h)),t.$$.dirty&256&&e(1,u=r.get()),t.$$.dirty&1&&e(5,a=k),t.$$.dirty&2&&e(4,f=_e(u,{untested:"untested",tested:"tested",invalid:"invalid",valid:"valid",warning:"warning"}))},[k,u,h,p,f,a,P,I,r,T]}class Ge extends de{constructor(i){super(),ce(this,i,je,Pe,ne,{})}}export{Ge as component};
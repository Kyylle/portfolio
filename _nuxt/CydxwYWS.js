import{m as Q,X as ie,f as ee,Y as ce,Z as ue,$ as de,a0 as p,k as fe,a1 as H,q as P,a2 as U,a3 as me,_ as G,r as M,c as y,o as g,a as x,F as te,s as oe,y as R,z as ve,t as ne,x as pe,C as O,D as he,E as be,b as F,u as _e}from"./BSEfEsO1.js";import{G as ge,L as we,I as xe,Y as ye,F as ke,T as Se}from"./C0LHqdlV.js";function Te(e){return ce()?(ue(e),!0):!1}const Ce=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ee=Object.prototype.toString,De=e=>Ee.call(e)==="[object Object]",I=()=>{};function le(e,o){function t(...r){return new Promise((a,i)=>{Promise.resolve(e(()=>o.apply(this,r),{fn:o,thisArg:this,args:r})).then(a).catch(i)})}return t}function Fe(e,o={}){let t,r,a=I;const i=n=>{clearTimeout(n),a(),a=I};let d;return n=>{const l=p(e),c=p(o.maxWait);return t&&i(t),l<=0||c!==void 0&&c<=0?(r&&(i(r),r=null),Promise.resolve(n())):new Promise((f,m)=>{a=o.rejectOnCancel?m:f,d=n,c&&!r&&(r=setTimeout(()=>{t&&i(t),r=null,f(d())},c)),t=setTimeout(()=>{r&&i(r),r=null,f(n())},l)})}}function Ie(...e){let o=0,t,r=!0,a=I,i,d,u,n,l;!de(e[0])&&typeof e[0]=="object"?{delay:d,trailing:u=!0,leading:n=!0,rejectOnCancel:l=!1}=e[0]:[d,u=!0,n=!0,l=!1]=e;const c=()=>{t&&(clearTimeout(t),t=void 0,a(),a=I)};return m=>{const v=p(d),k=Date.now()-o,D=()=>i=m();return c(),v<=0?(o=Date.now(),D()):(k>v&&(n||!r)?(o=Date.now(),D()):u&&(i=new Promise((T,b)=>{a=l?b:T,t=setTimeout(()=>{o=Date.now(),r=!0,T(D()),c()},Math.max(0,v-k))})),!n&&!t&&(t=setTimeout(()=>r=!0,v)),r=!1,i)}}function W(e){return Array.isArray(e)?e:[e]}function Le(e){return fe()}function re(e,o=200,t={}){return le(Fe(o,t),e)}function $e(e,o=200,t=!1,r=!0,a=!1){return le(Ie(o,t,r,a),e)}function Ae(e,o=!0,t){Le()?Q(e,t):o?e():ie(e)}function Me(e,o,t){return ee(e,o,{...t,immediate:!0})}const V=Ce?window:void 0;function se(e){var o;const t=p(e);return(o=t==null?void 0:t.$el)!=null?o:t}function Z(...e){const o=[],t=()=>{o.forEach(u=>u()),o.length=0},r=(u,n,l,c)=>(u.addEventListener(n,l,c),()=>u.removeEventListener(n,l,c)),a=P(()=>{const u=W(p(e[0])).filter(n=>n!=null);return u.every(n=>typeof n!="string")?u:void 0}),i=Me(()=>{var u,n;return[(n=(u=a.value)==null?void 0:u.map(l=>se(l)))!=null?n:[V].filter(l=>l!=null),W(p(a.value?e[1]:e[0])),W(me(a.value?e[2]:e[1])),p(a.value?e[3]:e[2])]},([u,n,l,c])=>{if(t(),!(u!=null&&u.length)||!(n!=null&&n.length)||!(l!=null&&l.length))return;const f=De(c)?{...c}:c;o.push(...u.flatMap(m=>n.flatMap(v=>l.map(k=>r(m,v,k,f)))))},{flush:"post"}),d=()=>{i(),t()};return Te(t),d}const J=1;function je(e,o={}){const{throttle:t=0,idle:r=200,onStop:a=I,onScroll:i=I,offset:d={left:0,right:0,top:0,bottom:0},eventListenerOptions:u={capture:!1,passive:!0},behavior:n="auto",window:l=V,onError:c=s=>{console.error(s)}}=o,f=H(0),m=H(0),v=P({get(){return f.value},set(s){D(s,void 0)}}),k=P({get(){return m.value},set(s){D(void 0,s)}});function D(s,C){var h,L,$,A;if(!l)return;const _=p(e);if(!_)return;($=_ instanceof Document?l.document.body:_)==null||$.scrollTo({top:(h=p(C))!=null?h:k.value,left:(L=p(s))!=null?L:v.value,behavior:p(n)});const S=((A=_==null?void 0:_.document)==null?void 0:A.documentElement)||(_==null?void 0:_.documentElement)||_;v!=null&&(f.value=S.scrollLeft),k!=null&&(m.value=S.scrollTop)}const T=H(!1),b=U({left:!0,right:!1,top:!0,bottom:!1}),w=U({left:!1,right:!1,top:!1,bottom:!1}),z=s=>{T.value&&(T.value=!1,w.left=!1,w.right=!1,w.top=!1,w.bottom=!1,a(s))},ae=re(z,t+r),j=s=>{var C;if(!l)return;const h=((C=s==null?void 0:s.document)==null?void 0:C.documentElement)||(s==null?void 0:s.documentElement)||se(s),{display:L,flexDirection:$,direction:A}=getComputedStyle(h),_=A==="rtl"?-1:1,S=h.scrollLeft;w.left=S<f.value,w.right=S>f.value;const X=Math.abs(S*_)<=(d.left||0),N=Math.abs(S*_)+h.clientWidth>=h.scrollWidth-(d.right||0)-J;L==="flex"&&$==="row-reverse"?(b.left=N,b.right=X):(b.left=X,b.right=N),f.value=S;let E=h.scrollTop;s===l.document&&!E&&(E=l.document.body.scrollTop),w.top=E<m.value,w.bottom=E>m.value;const q=Math.abs(E)<=(d.top||0),K=Math.abs(E)+h.clientHeight>=h.scrollHeight-(d.bottom||0)-J;L==="flex"&&$==="column-reverse"?(b.top=K,b.bottom=q):(b.top=q,b.bottom=K),m.value=E},Y=s=>{var C;if(!l)return;const h=(C=s.target.documentElement)!=null?C:s.target;j(h),T.value=!0,ae(s),i(s)};return Z(e,"scroll",t?$e(Y,t,!0,!1):Y,u),Ae(()=>{try{const s=p(e);if(!s)return;j(s)}catch(s){c(s)}}),Z(e,"scrollend",z,u),{x:v,y:k,isScrolling:T,arrivedState:b,directions:w,measure(){const s=p(e);l&&s&&j(s)}}}function He(e={}){const{window:o=V,...t}=e;return je(o,t)}const Oe={class:"container mx-auto flex justify-between items-center"},We={class:"flex gap-10 text-base md:text-lg font-medium text-white mr-10"},Be=["href","onClick"],Pe={__name:"Header",setup(e){const o=M([{id:"home",label:"Home"},{id:"about",label:"About"},{id:"portfolio",label:"Portfolio"},{id:"contact",label:"Contact"}]),{y:t}=He(),r=M(!1),a=M("home");ee(t,n=>{r.value=n>50,d()});const i=n=>{const l=document.getElementById(n);l&&(l.scrollIntoView({behavior:"smooth"}),a.value=n)},d=()=>{let n="home";const c=document.querySelector("header").offsetHeight+50;o.value.forEach(f=>{const m=document.getElementById(f.id);if(m){const v=m.getBoundingClientRect();v.top<=c&&v.bottom>=c&&(n=f.id)}}),a.value=n},u=re(d,100);return Q(()=>{d(),window.addEventListener("scroll",u)}),(n,l)=>(g(),y("header",{class:R(["fixed top-0 left-0 w-full p-4 z-50 transition-all duration-300 text-white",{"backdrop-blur-xl bg-white/10 shadow-lg border-b border-white/20":!r.value,"backdrop-blur-md bg-black/30 shadow-md border-b border-gray-600":r.value}])},[x("nav",Oe,[l[0]||(l[0]=x("h1",{class:"text-2xl md:text-3xl font-extrabold tracking-wide text-white ml-10"},"DevK",-1)),x("ul",We,[(g(!0),y(te,null,oe(o.value,c=>(g(),y("li",{key:c.id},[x("a",{href:"#"+c.id,onClick:ve(f=>i(c.id),["prevent"]),class:R(["transition duration-300 pb-1 border-b-2",{"text-[#00FD37] border-[#00FD37]":a.value===c.id,"hover:text-gray-300 border-transparent":a.value!==c.id}])},ne(c.label),11,Be)]))),128))])])],2))}},Re=G(Pe,[["__scopeId","data-v-a53a5fb9"]]),Ge={class:"text-white text-center p-6 mt-10 relative"},Ve={class:"flex justify-center space-x-6 mb-3 relative"},ze=["href","onMouseover"],Ye={__name:"Footer",setup(e){const o=M(null),t=[{name:"GitHub",icon:ge,link:"https://github.com",color:"#151A30"},{name:"LinkedIn",icon:we,link:"https://linkedin.com",color:"#0A66C2"},{name:"Instagram",icon:xe,link:"https://instagram.com",color:"#E1306C"},{name:"YouTube",icon:ye,link:"https://youtube.com",color:"#FF0000"},{name:"Facebook",icon:ke,link:"https://facebook.com",color:"#1877F2"},{name:"X (Twitter)",icon:Se,link:"https://twitter.com",color:"#1DA1F2"}];return(r,a)=>(g(),y("footer",Ge,[x("div",Ve,[(g(),y(te,null,oe(t,i=>x("div",{key:i.name,class:"relative group"},[o.value===i.name?(g(),y("div",{key:0,class:"absolute bottom-14 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded-md text-white",style:O({backgroundColor:i.color})},ne(i.name),5)):pe("",!0),x("a",{href:i.link,target:"_blank",class:"p-3 rounded-lg transition transform hover:scale-110 flex items-center justify-center",onMouseover:d=>o.value=i.name,onMouseleave:a[0]||(a[0]=d=>o.value=null),style:O({backgroundColor:o.value===i.name?i.hoverColor||i.color:"#1E2235"})},[(g(),he(be(i.icon),{size:24,style:O({color:o.value===i.name?"#ffffff":"inherit"})},null,8,["style"]))],44,ze)])),64))]),a[1]||(a[1]=x("p",{class:"text-sm opacity-80"},"DevK | All rights reserved 2025",-1))]))}},Xe={__name:"glow-effect",props:{glowClass:String},setup(e){return(o,t)=>(g(),y("div",{class:R(["glow-overlay",e.glowClass])},null,2))}},B=G(Xe,[["__scopeId","data-v-50b25803"]]),Ne={class:"absolute inset-0 grid-bg"},qe={__name:"grid-background",setup(e){return(o,t)=>(g(),y("div",Ne,[F(B,{glowClass:"glow1"}),F(B,{glowClass:"glow2"}),F(B,{glowClass:"glow3"})]))}},Ke=G(qe,[["__scopeId","data-v-bf64afea"]]),Ue={class:"relative w-full min-h-screen bg-black overflow-hidden"},Ze={class:"relative z-10"},et={__name:"default",setup(e){return(o,t)=>(g(),y("div",Ue,[F(Ke),x("div",Ze,[F(Re),_e(o.$slots,"default"),F(Ye)])]))}};export{et as default};

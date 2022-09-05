import{S as ze,i as Je,s as Ke,a as Fe,e as C,c as Ge,b as K,g as se,t as q,d as oe,f as V,h as B,j as He,o as me,k as We,l as xe,m as Me,n as he,p as T,q as Xe,r as Ye,u as Qe,v as G,w as ve,x as H,y as W,z as Ue}from"./chunks/index-3e215a55.js";import{g as Ie,f as Ae,s as J,a as ge,b as Ze,i as et}from"./chunks/singletons-b4efd3d5.js";const tt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),rt=function(r,e){return new URL(r,e).href},Te={},X=function(e,t,o){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=rt(s,o),s in Te)return;Te[s]=!0;const f=s.endsWith(".css"),n=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const c=document.createElement("link");if(c.rel=f?"stylesheet":tt,f||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),f)return new Promise((_,d)=>{c.addEventListener("load",_),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};class ne{name="HttpError";stack=void 0;constructor(e,t){this.status=e,this.message=t??`Error: ${e}`}toString(){return this.message}}class De{constructor(e,t){this.status=e,this.location=t}}function nt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function at(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const st=["href","pathname","search","searchParams","toString","toJSON"];function ot(r,e){const t=new URL(r);for(const o of st){let s=t[o];Object.defineProperty(t,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(o,s,f)=>f(r,s),it(t),t}function it(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function lt(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const be=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:e?.method||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ae.delete(o)}return be(r,e)};const ae=new Map;function ct(r,e,t){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;t&&typeof t.body=="string"&&(s+=`[data-hash="${lt(t.body)}"]`);const f=document.querySelector(s);if(f?.textContent){const{body:n,...c}=JSON.parse(f.textContent),_=f.getAttribute("data-ttl");return _&&ae.set(e,{body:n,init:c,ttl:1e3*Number(_)}),Promise.resolve(new Response(n,c))}return be(r,t)}function ft(r,e){const t=ae.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);ae.delete(r)}return be(r,e)}const ut=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function dt(r){const e=[],t=[];let o=!0;if(/\]\[/.test(r))throw new Error(`Invalid route ${r} \u2014 parameters must be separated`);if(Ne("[",r)!==Ne("]",r))throw new Error(`Invalid route ${r} \u2014 brackets are unbalanced`);return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(pt).map((f,n,c)=>{const _=decodeURIComponent(f),d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(_);if(d)return e.push(d[1]),t.push(d[2]),"(?:/(.*))?";const w=n===c.length-1;return _&&"/"+_.split(/\[(.+?)\]/).map((R,S)=>{if(S%2){const z=ut.exec(R);if(!z)throw new Error(`Invalid param: ${R}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,L,A,D]=z;return e.push(A),t.push(D),L?"(.*?)":"([^/]+?)"}return w&&R.includes(".")&&(o=!1),R.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:t}}function pt(r){return!/^\([^)]+\)$/.test(r)}function ht(r,e,t,o){const s={};for(let f=0;f<e.length;f+=1){const n=e[f],c=t[f],_=r[f+1]||"";if(c){const d=o[c];if(!d)throw new Error(`Missing "${c}" param matcher`);if(!d(_))return}s[n]=_}return s}function Ne(r,e){let t=0;for(let o=0;o<e.length;o+=1)e[o]===r&&(t+=1);return t}function _t(r,e,t,o){const s=new Set(e);return Object.entries(t).map(([c,[_,d,w]])=>{const{pattern:R,names:S,types:z}=dt(c),L={id:c,exec:A=>{const D=R.exec(A);if(D)return ht(D,S,z,o)},errors:[1,...w||[]].map(A=>r[A]),layouts:[0,...d||[]].map(n),leaf:f(_)};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L});function f(c){const _=c<0;return _&&(c=~c),[_,r[c]]}function n(c){return c===void 0?c:[s.has(c),r[c]]}}function mt(r,e){return new ne(r,e)}function gt(r){let e,t,o;var s=r[0][0];function f(n){return{props:{data:n[1],errors:n[3]}}}return s&&(e=new s(f(r))),{c(){e&&G(e.$$.fragment),t=C()},l(n){e&&ve(e.$$.fragment,n),t=C()},m(n,c){e&&H(e,n,c),K(n,t,c),o=!0},p(n,c){const _={};if(c&2&&(_.data=n[1]),c&8&&(_.errors=n[3]),s!==(s=n[0][0])){if(e){se();const d=e;q(d.$$.fragment,1,0,()=>{W(d,1)}),oe()}s?(e=new s(f(n)),G(e.$$.fragment),V(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(n){o||(e&&V(e.$$.fragment,n),o=!0)},o(n){e&&q(e.$$.fragment,n),o=!1},d(n){n&&B(t),e&&W(e,n)}}}function wt(r){let e,t,o;var s=r[0][0];function f(n){return{props:{data:n[1],errors:n[3],$$slots:{default:[yt]},$$scope:{ctx:n}}}}return s&&(e=new s(f(r))),{c(){e&&G(e.$$.fragment),t=C()},l(n){e&&ve(e.$$.fragment,n),t=C()},m(n,c){e&&H(e,n,c),K(n,t,c),o=!0},p(n,c){const _={};if(c&2&&(_.data=n[1]),c&8&&(_.errors=n[3]),c&525&&(_.$$scope={dirty:c,ctx:n}),s!==(s=n[0][0])){if(e){se();const d=e;q(d.$$.fragment,1,0,()=>{W(d,1)}),oe()}s?(e=new s(f(n)),G(e.$$.fragment),V(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(n){o||(e&&V(e.$$.fragment,n),o=!0)},o(n){e&&q(e.$$.fragment,n),o=!1},d(n){n&&B(t),e&&W(e,n)}}}function yt(r){let e,t,o;var s=r[0][1];function f(n){return{props:{data:n[2],errors:n[3]}}}return s&&(e=new s(f(r))),{c(){e&&G(e.$$.fragment),t=C()},l(n){e&&ve(e.$$.fragment,n),t=C()},m(n,c){e&&H(e,n,c),K(n,t,c),o=!0},p(n,c){const _={};if(c&4&&(_.data=n[2]),c&8&&(_.errors=n[3]),s!==(s=n[0][1])){if(e){se();const d=e;q(d.$$.fragment,1,0,()=>{W(d,1)}),oe()}s?(e=new s(f(n)),G(e.$$.fragment),V(e.$$.fragment,1),H(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(n){o||(e&&V(e.$$.fragment,n),o=!0)},o(n){e&&q(e.$$.fragment,n),o=!1},d(n){n&&B(t),e&&W(e,n)}}}function Ce(r){let e,t=r[5]&&qe(r);return{c(){e=We("div"),t&&t.c(),this.h()},l(o){e=xe(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=Me(e);t&&t.l(s),s.forEach(B),this.h()},h(){he(e,"id","svelte-announcer"),he(e,"aria-live","assertive"),he(e,"aria-atomic","true"),T(e,"position","absolute"),T(e,"left","0"),T(e,"top","0"),T(e,"clip","rect(0 0 0 0)"),T(e,"clip-path","inset(50%)"),T(e,"overflow","hidden"),T(e,"white-space","nowrap"),T(e,"width","1px"),T(e,"height","1px")},m(o,s){K(o,e,s),t&&t.m(e,null)},p(o,s){o[5]?t?t.p(o,s):(t=qe(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&B(e),t&&t.d()}}}function qe(r){let e;return{c(){e=Xe(r[6])},l(t){e=Ye(t,r[6])},m(t,o){K(t,e,o)},p(t,o){o&64&&Qe(e,t[6])},d(t){t&&B(e)}}}function vt(r){let e,t,o,s,f;const n=[wt,gt],c=[];function _(w,R){return w[0][1]?0:1}e=_(r),t=c[e]=n[e](r);let d=r[4]&&Ce(r);return{c(){t.c(),o=Fe(),d&&d.c(),s=C()},l(w){t.l(w),o=Ge(w),d&&d.l(w),s=C()},m(w,R){c[e].m(w,R),K(w,o,R),d&&d.m(w,R),K(w,s,R),f=!0},p(w,[R]){let S=e;e=_(w),e===S?c[e].p(w,R):(se(),q(c[S],1,1,()=>{c[S]=null}),oe(),t=c[e],t?t.p(w,R):(t=c[e]=n[e](w),t.c()),V(t,1),t.m(o.parentNode,o)),w[4]?d?d.p(w,R):(d=Ce(w),d.c(),d.m(s.parentNode,s)):d&&(d.d(1),d=null)},i(w){f||(V(t),f=!0)},o(w){q(t),f=!1},d(w){c[e].d(w),w&&B(o),d&&d.d(w),w&&B(s)}}}function bt(r,e,t){let{stores:o}=e,{page:s}=e,{components:f}=e,{data_0:n=null}=e,{data_1:c=null}=e,{errors:_}=e;He(o.page.notify);let d=!1,w=!1,R=null;return me(()=>{const S=o.page.subscribe(()=>{d&&(t(5,w=!0),t(6,R=document.title||"untitled page"))});return t(4,d=!0),S}),r.$$set=S=>{"stores"in S&&t(7,o=S.stores),"page"in S&&t(8,s=S.page),"components"in S&&t(0,f=S.components),"data_0"in S&&t(1,n=S.data_0),"data_1"in S&&t(2,c=S.data_1),"errors"in S&&t(3,_=S.errors)},r.$$.update=()=>{r.$$.dirty&384&&o.page.set(s)},[f,n,c,_,d,w,R,o,s]}class kt extends ze{constructor(e){super(),Je(this,e,bt,vt,Ke,{stores:7,page:8,components:0,data_0:1,data_1:2,errors:3})}}const Et={},ie=[()=>X(()=>import("./chunks/0-0f8b0ad5.js"),["chunks/0-0f8b0ad5.js","chunks/_layout-1daba58d.js","components/pages/_layout.svelte-8e251a78.js","chunks/index-3e215a55.js"],import.meta.url),()=>X(()=>import("./chunks/1-81ab3539.js"),["chunks/1-81ab3539.js","components/pages/_error.svelte-4ea803b0.js","chunks/index-3e215a55.js","chunks/singletons-b4efd3d5.js"],import.meta.url),()=>X(()=>import("./chunks/2-bf37ea15.js"),["chunks/2-bf37ea15.js","components/pages/_page.svelte-184526f5.js","chunks/index-3e215a55.js"],import.meta.url),()=>X(()=>import("./chunks/3-778c650d.js"),["chunks/3-778c650d.js","components/pages/_slug_/_page.svelte-f581815d.js","chunks/index-3e215a55.js"],import.meta.url)],St=[],Rt={"":[-3],"[slug]":[-4]},$t="/__data.js",Be="sveltekit:scroll",N="sveltekit:index",te=_t(ie,St,Rt,Et),we=ie[0],ye=ie[1];we();ye();let Y={};try{Y=JSON.parse(sessionStorage[Be])}catch{}function _e(r){Y[r]=ge()}function Lt({target:r,base:e,trailing_slash:t}){const o=[],s={id:null,promise:null},f={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},c=!1,_=!0,d=!1,w=1,R=null,S=!1,z,L=history.state?.[N];L||(L=Date.now(),history.replaceState({...history.state,[N]:L},"",location.href));const A=Y[L];A&&(history.scrollRestoration="manual",scrollTo(A.x,A.y));let D=!1,F,ke;function Ee(){if(!R){const a=new URL(location.href);R=Promise.resolve().then(async()=>{const l=fe(a);await $e(l,a,[]),R=null,S=!1})}return R}async function Se(a,{noscroll:l=!1,replaceState:p=!1,keepfocus:i=!1,state:u={}},v){return typeof a=="string"&&(a=new URL(a,Ie(document))),ue({url:a,scroll:l?ge():null,keepfocus:i,redirect_chain:v,details:{state:u,replaceState:p},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Re(a){const l=fe(a);if(!l)throw new Error("Attempted to prefetch a URL that does not belong to this app");return s.promise=Oe(l),s.id=l.id,s.promise}async function $e(a,l,p,i,u){const v=ke={};let g=a&&await Oe(a);if(!g&&l.origin===location.origin&&l.pathname===location.pathname&&(g=await Z({status:404,error:new Error(`Not found: ${l.pathname}`),url:l,routeId:null})),!g)return await x(l),!1;if(l=a?.url||l,ke!==v)return!1;if(o.length=0,g.type==="redirect")if(p.length>10||p.includes(l.pathname))g=await Z({status:500,error:new Error("Redirect loop"),url:l,routeId:null});else return Se(new URL(g.location,l).href,{},[...p,l.pathname]),!1;else g.props?.page?.status>=400&&await J.updated.check()&&await x(l);if(d=!0,i&&i.details){const{details:y}=i,E=y.replaceState?0:1;y.state[N]=L+=E,history[y.replaceState?"replaceState":"pushState"](y.state,"",l)}if(c?(n=g.state,g.props.page&&(g.props.page.url=l),z.$set(g.props)):Le(g),i){const{scroll:y,keepfocus:E}=i;if(!E){const m=document.body,k=m.getAttribute("tabindex");m.tabIndex=-1,m.focus({preventScroll:!0}),setTimeout(()=>{getSelection()?.removeAllRanges()}),k!==null?m.setAttribute("tabindex",k):m.removeAttribute("tabindex")}if(await Ue(),_){const m=l.hash&&document.getElementById(l.hash.slice(1));y?scrollTo(y.x,y.y):m?m.scrollIntoView():scrollTo(0,0)}}else await Ue();s.promise=null,s.id=null,_=!0,g.props.page&&(F=g.props.page),u&&u(),d=!1}function Le(a){n=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),F=a.props.page,z=new kt({target:r,props:{...a.props,stores:J},hydrate:!0});const p={from:null,to:re("to",{params:n.params,routeId:n.route?.id??null,url:new URL(location.href)}),type:"load"};f.after_navigate.forEach(i=>i(p)),c=!0}async function Q({url:a,params:l,branch:p,status:i,error:u,route:v,validation_errors:g}){const y=p.filter(Boolean),E={type:"loaded",state:{url:a,params:l,branch:p,error:u,route:v,session_id:w},props:{components:y.map(h=>h.node.component),errors:g}};let m={},k=!F;for(let h=0;h<y.length;h+=1){const $=y[h];m={...m,...$.data},(k||!n.branch.some(P=>P===$))&&(E.props[`data_${h}`]=m,k=k||Object.keys($.data??{}).length>0)}if(k||(k=Object.keys(F.data).length!==Object.keys(m).length),!n.url||a.href!==n.url.href||n.error!==u||k){E.props.page={error:u,params:l,routeId:v&&v.id,status:i,url:a,data:k?m:F.data};const h=($,P)=>{Object.defineProperty(E.props.page,$,{get:()=>{throw new Error(`$page.${$} has been replaced by $page.url.${P}`)}})};h("origin","origin"),h("path","pathname"),h("query","searchParams")}return E}async function le({loader:a,parent:l,url:p,params:i,routeId:u,server_data_node:v}){let g=null;const y={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await a();if(E.shared?.load){let m=function(...h){for(const $ of h){const{href:P}=new URL($,p);y.dependencies.add(P)}};const k={};for(const h in i)Object.defineProperty(k,h,{get(){return y.params.add(h),i[h]},enumerable:!0});const O={routeId:u,params:k,data:v?.data??null,url:ot(p,()=>{y.url=!0}),async fetch(h,$){let P;typeof h=="string"?P=h:(P=h.url,$={body:h.method==="GET"||h.method==="HEAD"?void 0:await h.blob(),cache:h.cache,credentials:h.credentials,headers:h.headers,integrity:h.integrity,keepalive:h.keepalive,method:h.method,mode:h.mode,redirect:h.redirect,referrer:h.referrer,referrerPolicy:h.referrerPolicy,signal:h.signal,...$});const b=new URL(P,p).href;return m(b),c?ft(b,$):ct(P,b,$)},setHeaders:()=>{},depends:m,parent(){return y.parent=!0,l()}};Object.defineProperties(O,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),g=await E.shared.load.call(null,O)??null}return{node:E,loader:a,server:v,shared:E.shared?.load?{type:"data",data:g,uses:y}:null,data:g??v?.data??null}}function Pe(a,l,p){if(S)return!0;if(!p)return!1;if(p.parent&&l||a.url&&p.url)return!0;for(const i of a.params)if(p.params.has(i))return!0;for(const i of p.dependencies)if(o.some(u=>u(new URL(i))))return!0;return!1}function ce(a,l){return a?.type==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,url:!!a.uses.url}}:a?.type==="skip"?l??null:null}async function Oe({id:a,url:l,params:p,route:i}){if(s.id===a&&s.promise)return s.promise;const{errors:u,layouts:v,leaf:g}=i,y=n.url&&{url:a!==n.url.pathname+n.url.search,params:Object.keys(p).filter(b=>n.params[b]!==p[b])},E=[...v,g];u.forEach(b=>b?.().catch(()=>{})),E.forEach(b=>b?.[1]().catch(()=>{}));let m=null;const k=E.reduce((b,U,I)=>{const j=n.branch[I],M=!!U?.[0]&&(j?.loader!==U[1]||Pe(y,b.some(Boolean),j.server?.uses));return b.push(M),b},[]);if(k.some(Boolean)){try{m=await Ve(l,k)}catch(b){return Z({status:500,error:b,url:l,routeId:i.id})}if(m.type==="redirect")return m}const O=m?.nodes;let h=!1;const $=E.map(async(b,U)=>{if(!b)return;const I=n.branch[U],j=O?.[U]??null;if((!j||j.type==="skip")&&b[1]===I?.loader&&!Pe(y,h,I.shared?.uses))return I;if(h=!0,j?.type==="error")throw j.httperror?mt(j.httperror.status,j.httperror.message):j.error;return le({loader:b[1],url:l,params:p,routeId:i.id,parent:async()=>{const de={};for(let pe=0;pe<U;pe+=1)Object.assign(de,(await $[pe])?.data);return de},server_data_node:ce(j,I?.server)})});for(const b of $)b.catch(()=>{});const P=[];for(let b=0;b<E.length;b+=1)if(E[b])try{P.push(await $[b])}catch(U){const I=U;if(I instanceof De)return{type:"redirect",location:I.location};const j=U instanceof ne?U.status:500;for(;b--;)if(u[b]){let M,ee=b;for(;!P[ee];)ee-=1;try{return M={node:await u[b](),loader:u[b],data:{},server:null,shared:null},await Q({url:l,params:p,branch:P.slice(0,ee+1).concat(M),status:j,error:I,route:i})}catch{continue}}await x(l);return}else P.push(void 0);return await Q({url:l,params:p,branch:P,status:200,error:null,route:i})}async function Z({status:a,error:l,url:p,routeId:i}){const u={},v=await we();let g=null;if(v.server)try{const m=await Ve(p,[!0]);if(m.type!=="data"||m.nodes[0]&&m.nodes[0].type!=="data")throw 0;g=m.nodes[0]??null}catch{await x(p);return}const y=await le({loader:we,url:p,params:u,routeId:i,parent:()=>Promise.resolve({}),server_data_node:ce(g)}),E={node:await ye(),loader:ye,shared:null,server:null,data:null};return await Q({url:p,params:u,branch:[y,E],status:a,error:l,route:null})}function fe(a){if(je(a))return;const l=decodeURI(a.pathname.slice(e.length)||"/");for(const p of te){const i=p.exec(l);if(i){const u=new URL(a.origin+nt(a.pathname,t)+a.search+a.hash);return{id:u.pathname+u.search,route:p,params:at(i),url:u}}}}function je(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function ue({url:a,scroll:l,keepfocus:p,redirect_chain:i,details:u,type:v,delta:g,accepted:y,blocked:E}){let m=!1;const k=fe(a),O={from:re("from",{params:n.params,routeId:n.route?.id??null,url:n.url}),to:re("to",{params:k?.params??null,routeId:k?.route.id??null,url:a}),type:v};g!==void 0&&(O.delta=g);const h={...O,cancel:()=>{m=!0}};if(f.before_navigate.forEach($=>$(h)),m){E();return}_e(L),y(),c&&J.navigating.set(O),await $e(k,a,i,{scroll:l,keepfocus:p,details:u},()=>{f.after_navigate.forEach($=>$(O)),J.navigating.set(null)})}function x(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{me(()=>(f.after_navigate.push(a),()=>{const l=f.after_navigate.indexOf(a);f.after_navigate.splice(l,1)}))},before_navigate:a=>{me(()=>(f.before_navigate.push(a),()=>{const l=f.before_navigate.indexOf(a);f.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(d||!c)&&(_=!1)},goto:(a,l={})=>Se(a,l,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")o.push(a);else{const{href:l}=new URL(a,location.href);o.push(p=>p.href===l)}return Ee()},invalidateAll:()=>(S=!0,Ee()),prefetch:async a=>{const l=new URL(a,Ie(document));await Re(l)},prefetch_routes:async a=>{const p=(a?te.filter(i=>a.some(u=>i.exec(u))):te).map(i=>Promise.all([...i.layouts,i.leaf].map(u=>u?.[1]())));await Promise.all(p)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{let u=!1;const v={from:re("from",{params:n.params,routeId:n.route?.id??null,url:n.url}),to:null,type:"unload",cancel:()=>u=!0};f.before_navigate.forEach(g=>g(v)),u?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){_e(L);try{sessionStorage[Be]=JSON.stringify(Y)}catch{}}});const a=i=>{const{url:u,options:v}=Ae(i);if(u&&v.prefetch){if(je(u))return;Re(u)}};let l;const p=i=>{clearTimeout(l),l=setTimeout(()=>{i.target?.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:u,url:v,options:g}=Ae(i);if(!u||!v)return;const y=u instanceof SVGAElement;if(!y&&!(v.protocol==="https:"||v.protocol==="http:"))return;const E=(u.getAttribute("rel")||"").split(/\s+/);if(u.hasAttribute("download")||E.includes("external")||g.reload||(y?u.target.baseVal:u.target))return;const[m,k]=v.href.split("#");if(k!==void 0&&m===location.href.split("#")[0]){D=!0,_e(L),J.page.set({...F,url:v}),J.page.notify();return}ue({url:v,scroll:g.noscroll?ge():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:v.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[N]===L)return;const u=i.state[N]-L;ue({url:new URL(location.href),scroll:Y[i.state[N]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{L=i.state[N]},blocked:()=>{history.go(-u)},type:"popstate",delta:u})}}),addEventListener("hashchange",()=>{D&&(D=!1,history.replaceState({...history.state,[N]:++L},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&J.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:p,params:i,routeId:u,data:v,errors:g})=>{const y=new URL(location.href);let E;try{const m=p.map(async(k,O)=>{const h=v[O];return le({loader:ie[k],url:y,params:i,routeId:u,parent:async()=>{const $={};for(let P=0;P<O;P+=1)Object.assign($,(await m[P]).data);return $},server_data_node:ce(h)})});E=await Q({url:y,params:i,branch:await Promise.all(m),status:a,error:l?.__is_http_error?new ne(l.status,l.message):l,validation_errors:g,route:te.find(k=>k.id===u)??null})}catch(m){const k=m;if(k instanceof De){await x(new URL(m.location,location.href));return}E=await Z({status:k instanceof ne?k.status:500,error:k,url:y,routeId:u})}Le(E)}}}let Pt=1;async function Ve(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+$t,t.searchParams.set("__invalid",e.map(s=>s?"y":"n").join("")),t.searchParams.set("__id",String(Pt++)),await X(()=>import(t.href),[],import.meta.url);const o=window.__sveltekit_data;return delete window.__sveltekit_data,o}const Ot=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function re(r,e){for(const t of Ot)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)}});return e}async function It({env:r,hydrate:e,paths:t,target:o,trailing_slash:s}){Ze(t);const f=Lt({target:o,base:t.base,trailing_slash:s});et({client:f}),e?await f._hydrate(e):f.goto(location.href,{replaceState:!0}),f._start_router()}export{It as start};

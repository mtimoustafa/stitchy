function _(){}function L(t){return t()}function q(){return Object.create(null)}function b(t){t.forEach(L)}function O(t){return typeof t=="function"}function U(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let y;function ot(t,e){return y||(y=document.createElement("a")),y.href=e,t===y.href}function B(t){return Object.keys(t).length===0}function D(t,...e){if(t==null)return _;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function st(t,e,n){t.$$.on_destroy.push(D(e,n))}function ut(t,e,n){return t.set(n),e}function ct(t,e){t.appendChild(e)}function it(t,e,n){t.insertBefore(e,n||null)}function F(t){t.parentNode.removeChild(t)}function ft(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function at(t){return document.createElement(t)}function G(t){return document.createTextNode(t)}function lt(){return G(" ")}function dt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function ht(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function H(t){return Array.from(t.childNodes)}function _t(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function mt(t,e){t.value=e==null?"":e}function I(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}let g;function p(t){g=t}function M(){if(!g)throw new Error("Function called outside component initialization");return g}function pt(){const t=M();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const s=I(e,n);r.slice().forEach(a=>{a.call(t,s)})}}}const m=[],z=[],x=[],T=[],P=Promise.resolve();let k=!1;function X(){k||(k=!0,P.then(N))}function S(t){x.push(t)}const w=new Set;let $=0;function N(){const t=g;do{for(;$<m.length;){const e=m[$];$++,p(e),J(e.$$)}for(p(null),m.length=0,$=0;z.length;)z.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];w.has(n)||(w.add(n),n())}x.length=0}while(m.length);for(;T.length;)T.pop()();k=!1,w.clear(),p(t)}function J(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const E=new Set;let d;function gt(){d={r:0,c:[],p:d}}function bt(){d.r||b(d.c),d=d.p}function K(t,e){t&&t.i&&(E.delete(t),t.i(e))}function yt(t,e,n,r){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function $t(t){t&&t.c()}function Q(t,e,n,r){const{fragment:s,on_mount:a,on_destroy:l,after_update:c}=t.$$;s&&s.m(e,n),r||S(()=>{const i=a.map(L).filter(O);l?l.push(...i):b(i),t.$$.on_mount=[]}),c.forEach(S)}function W(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(t,e){t.$$.dirty[0]===-1&&(m.push(t),X(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function vt(t,e,n,r,s,a,l,c=[-1]){const i=g;p(t);const o=t.$$={fragment:null,ctx:null,props:a,update:_,not_equal:s,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:q(),dirty:c,skip_bound:!1,root:e.target||i.$$.root};l&&l(o.root);let R=!1;if(o.ctx=n?n(t,e.props||{},(f,j,...A)=>{const V=A.length?A[0]:j;return o.ctx&&s(o.ctx[f],o.ctx[f]=V)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](V),R&&Y(t,f)),j}):[],o.update(),R=!0,b(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){const f=H(e.target);o.fragment&&o.fragment.l(f),f.forEach(F)}else o.fragment&&o.fragment.c();e.intro&&K(t.$$.fragment),Q(t,e.target,e.anchor,e.customElement),N()}p(i)}class xt{$destroy(){W(this,1),this.$destroy=_}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!B(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var v,Z=new Uint8Array(16);function tt(){if(!v&&(v=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!v))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return v(Z)}var et=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function nt(t){return typeof t=="string"&&et.test(t)}var u=[];for(var C=0;C<256;++C)u.push((C+256).toString(16).substr(1));function rt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(u[t[e+0]]+u[t[e+1]]+u[t[e+2]]+u[t[e+3]]+"-"+u[t[e+4]]+u[t[e+5]]+"-"+u[t[e+6]]+u[t[e+7]]+"-"+u[t[e+8]]+u[t[e+9]]+"-"+u[t[e+10]]+u[t[e+11]]+u[t[e+12]]+u[t[e+13]]+u[t[e+14]]+u[t[e+15]]).toLowerCase();if(!nt(n))throw TypeError("Stringified UUID is invalid");return n}function Et(t,e,n){t=t||{};var r=t.random||(t.rng||tt)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(var s=0;s<16;++s)e[n+s]=r[s];return e}return rt(r)}const h=[];function wt(t,e=_){let n;const r=new Set;function s(c){if(U(t,c)&&(t=c,n)){const i=!h.length;for(const o of r)o[1](),h.push(o,t);if(i){for(let o=0;o<h.length;o+=2)h[o][0](h[o+1]);h.length=0}}}function a(c){s(c(t))}function l(c,i=_){const o=[c,i];return r.add(o),r.size===1&&(n=e(s)||_),c(t),()=>{r.delete(o),r.size===0&&(n(),n=null)}}return{set:s,update:a,subscribe:l}}export{gt as A,bt as B,xt as S,lt as a,ht as b,it as c,ct as d,at as e,_t as f,F as g,ft as h,vt as i,st as j,pt as k,dt as l,mt as m,_ as n,ut as o,$t as p,Q as q,b as r,U as s,G as t,K as u,Et as v,wt as w,yt as x,W as y,ot as z};

function j(){}function tt(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function R(){return Object.create(null)}function $(t){t.forEach(J)}function K(t){return typeof t=="function"}function $t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function Et(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function et(t){return Object.keys(t).length===0}function nt(t,...e){if(t==null)return j;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function vt(t,e,n){t.$$.on_destroy.push(nt(e,n))}function kt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?tt(n.ctx.slice(),t[1](i(e))):n.ctx}function Nt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function At(t,e,n,i,r,u){if(r){const s=Q(e,n,i,u);t.p(s,r)}}function St(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function jt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Mt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}let M=!1;function it(){M=!0}function rt(){M=!1}function st(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,a=(r>0&&e[n[r]].claim_order<=l?r+1:st(1,r,_=>e[n[_]].claim_order,l))-1;i[c]=n[a]+1;const d=a+1;n[d]=c,r=Math.max(d,r)}const u=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);u.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<u.length&&s[c].claim_order>=u[l].claim_order;)l++;const a=l<u.length?u[l]:null;t.insertBefore(s[c],a)}}function ot(t,e){if(M){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ot(t,e,n){M&&!n?ot(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function ut(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function Tt(){return B(" ")}function Ct(){return B("")}function Dt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ft(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const at=["width","height"];function Lt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&at.indexOf(i)===-1?t[i]=e[i]:ft(t,i,e[i])}function _t(t){return Array.from(t.childNodes)}function dt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function U(t,e,n,i,r=!1){dt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function ht(t,e,n,i){return U(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Pt(t,e,n){return ht(t,e,n,ut)}function mt(t,e){return U(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>B(e),!0)}function qt(t){return mt(t," ")}function Bt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ht(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function zt(t,e,n){t.classList[n?"add":"remove"](e)}function Ft(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Rt(t,e){return new t(e)}let v;function E(t){v=t}function V(){if(!v)throw new Error("Function called outside component initialization");return v}function Gt(t){V().$$.on_mount.push(t)}function It(t){V().$$.after_update.push(t)}const w=[],G=[];let b=[];const I=[],W=Promise.resolve();let P=!1;function X(){P||(P=!0,W.then(Y))}function Jt(){return X(),W}function q(t){b.push(t)}const L=new Set;let x=0;function Y(){if(x!==0)return;const t=v;do{try{for(;x<w.length;){const e=w[x];x++,E(e),pt(e.$$)}}catch(e){throw w.length=0,x=0,e}for(E(null),w.length=0,x=0;G.length;)G.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];L.has(n)||(L.add(n),n())}b.length=0}while(w.length);for(;I.length;)I.pop()();P=!1,L.clear(),E(t)}function pt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}function yt(t){const e=[],n=[];b.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),b=e}const S=new Set;let g;function Kt(){g={r:0,c:[],p:g}}function Qt(){g.r||$(g.c),g=g.p}function Z(t,e){t&&t.i&&(S.delete(t),t.i(e))}function gt(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),g.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Ut(t,e){gt(t,1,1,()=>{e.delete(t.key)})}function Vt(t,e,n,i,r,u,s,o,c,l,a,d){let _=t.length,m=u.length,h=_;const O={};for(;h--;)O[t[h].key]=h;const k=[],T=new Map,C=new Map,H=[];for(h=m;h--;){const f=d(r,u,h),p=n(f);let y=s.get(p);y?i&&H.push(()=>y.p(f,e)):(y=l(p,f),y.c()),T.set(p,k[h]=y),p in O&&C.set(p,Math.abs(h-O[p]))}const z=new Set,F=new Set;function D(f){Z(f,1),f.m(o,a),s.set(f.key,f),a=f.first,m--}for(;_&&m;){const f=k[m-1],p=t[_-1],y=f.key,N=p.key;f===p?(a=f.first,_--,m--):T.has(N)?!s.has(y)||z.has(y)?D(f):F.has(N)?_--:C.get(y)>C.get(N)?(F.add(y),D(f)):(z.add(N),_--):(c(p,s),_--)}for(;_--;){const f=t[_];T.has(f.key)||c(f,s)}for(;m;)D(k[m-1]);return $(H),k}function Wt(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const s=t[u],o=e[u];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(n[c]=o[c],r[c]=1);t[u]=o}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Xt(t){t&&t.c()}function Yt(t,e){t&&t.l(e)}function xt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||q(()=>{const s=t.$$.on_mount.map(J).filter(K);t.$$.on_destroy?t.$$.on_destroy.push(...s):$(s),t.$$.on_mount=[]}),u.forEach(q)}function wt(t,e){const n=t.$$;n.fragment!==null&&(yt(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(w.push(t),X(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Zt(t,e,n,i,r,u,s,o=[-1]){const c=v;E(t);const l=t.$$={fragment:null,ctx:[],props:u,update:j,not_equal:r,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:R(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return l.ctx&&r(l.ctx[d],l.ctx[d]=h)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](h),a&&bt(t,d)),_}):[],l.update(),a=!0,$(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){it();const d=_t(e.target);l.fragment&&l.fragment.l(d),d.forEach(lt)}else l.fragment&&l.fragment.c();e.intro&&Z(t.$$.fragment),xt(t,e.target,e.anchor,e.customElement),rt(),Y()}E(c)}class te{$destroy(){wt(this,1),this.$destroy=j}$on(e,n){if(!K(n))return j;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{xt as A,wt as B,ot as C,Et as D,zt as E,Dt as F,$ as G,kt as H,At as I,St as J,Nt as K,j as L,vt as M,Ft as N,Vt as O,Ut as P,tt as Q,Lt as R,te as S,Wt as T,Mt as U,jt as V,Tt as a,Ot as b,qt as c,gt as d,Ct as e,Qt as f,Z as g,lt as h,Zt as i,It as j,ut as k,Pt as l,_t as m,ft as n,Gt as o,Ht as p,B as q,mt as r,$t as s,Jt as t,Bt as u,Kt as v,G as w,Rt as x,Xt as y,Yt as z};

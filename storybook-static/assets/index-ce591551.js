function E(){}function ct(t,n){for(const e in n)t[e]=n[e];return t}function M(t){return t()}function A(){return Object.create(null)}function g(t){t.forEach(M)}function O(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function z(t){return Object.keys(t).length===0}let b=!1;function F(){b=!0}function H(){b=!1}function I(t,n,e,i){for(;t<n;){const l=t+(n-t>>1);e(l)<=i?t=l+1:n=l}return t}function P(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let o=0;o<n.length;o++){const f=n[o];f.claim_order!==void 0&&r.push(f)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let l=0;for(let r=0;r<n.length;r++){const o=n[r].claim_order,f=(l>0&&n[e[l]].claim_order<=o?l+1:I(1,l,$=>n[e[$]].claim_order,o))-1;i[r]=e[f]+1;const s=f+1;e[s]=r,l=Math.max(s,l)}const a=[],c=[];let u=n.length-1;for(let r=e[l]+1;r!=0;r=i[r-1]){for(a.push(n[r-1]);u>=r;u--)c.push(n[u]);u--}for(;u>=0;u--)c.push(n[u]);a.reverse(),c.sort((r,o)=>r.claim_order-o.claim_order);for(let r=0,o=0;r<c.length;r++){for(;o<a.length&&c[r].claim_order>=a[o].claim_order;)o++;const f=o<a.length?a[o]:null;t.insertBefore(c[r],f)}}function G(t,n){if(b){for(P(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ot(t,n,e){b&&!e?G(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function W(t){t.parentNode&&t.parentNode.removeChild(t)}function J(t){return document.createElement(t)}function K(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function ut(){return N(" ")}function at(){return N("")}function st(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function ft(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Q(t){return Array.from(t.childNodes)}function R(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,i,l=!1){R(t);const a=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(n(u)){const r=e(u);return r===void 0?t.splice(c,1):t[c]=r,l||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(n(u)){const r=e(u);return r===void 0?t.splice(c,1):t[c]=r,l?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function D(t,n,e,i){return T(t,l=>l.nodeName===n,l=>{const a=[];for(let c=0;c<l.attributes.length;c++){const u=l.attributes[c];e[u.name]||a.push(u.name)}a.forEach(c=>l.removeAttribute(c))},()=>i(n))}function dt(t,n,e){return D(t,n,e,J)}function _t(t,n,e){return D(t,n,e,K)}function V(t,n){return T(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>N(n),!0)}function ht(t){return V(t," ")}function mt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function X(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,e,i,n),l}function pt(t,n){return new t(n)}let y;function p(t){y=t}function L(){if(!y)throw new Error("Function called outside component initialization");return y}function yt(t){L().$$.on_mount.push(t)}function gt(){const t=L();return(n,e,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[n];if(l){const a=X(n,e,{cancelable:i});return l.slice().forEach(c=>{c.call(t,a)}),!a.defaultPrevented}return!0}}function $t(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],C=[];let m=[];const B=[],Y=Promise.resolve();let v=!1;function Z(){v||(v=!0,Y.then(q))}function k(t){m.push(t)}const w=new Set;let _=0;function q(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const n=h[_];_++,p(n),U(n.$$)}}catch(n){throw h.length=0,_=0,n}for(p(null),h.length=0,_=0;C.length;)C.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];w.has(e)||(w.add(e),e())}m.length=0}while(h.length);for(;B.length;)B.pop()();v=!1,w.clear(),p(t)}function U(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}function tt(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const x=new Set;let d;function xt(){d={r:0,c:[],p:d}}function bt(){d.r||g(d.c),d=d.p}function nt(t,n){t&&t.i&&(x.delete(t),t.i(n))}function wt(t,n,e,i){if(t&&t.o){if(x.has(t))return;x.add(t),d.c.push(()=>{x.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Et(t,n){const e={},i={},l={$$scope:1};let a=t.length;for(;a--;){const c=t[a],u=n[a];if(u){for(const r in c)r in u||(i[r]=1);for(const r in u)l[r]||(e[r]=u[r],l[r]=1);t[a]=u}else for(const r in c)l[r]=1}for(const c in i)c in e||(e[c]=void 0);return e}function vt(t){return typeof t=="object"&&t!==null?t:{}}function kt(t){t&&t.c()}function Nt(t,n){t&&t.l(n)}function et(t,n,e,i){const{fragment:l,after_update:a}=t.$$;l&&l.m(n,e),i||k(()=>{const c=t.$$.on_mount.map(M).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),a.forEach(k)}function it(t,n){const e=t.$$;e.fragment!==null&&(tt(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){t.$$.dirty[0]===-1&&(h.push(t),Z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function St(t,n,e,i,l,a,c,u=[-1]){const r=y;p(t);const o=t.$$={fragment:null,ctx:[],props:a,update:E,not_equal:l,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:A(),dirty:u,skip_bound:!1,root:n.target||r.$$.root};c&&c(o.root);let f=!1;if(o.ctx=e?e(t,n.props||{},(s,$,...S)=>{const j=S.length?S[0]:$;return o.ctx&&l(o.ctx[s],o.ctx[s]=j)&&(!o.skip_bound&&o.bound[s]&&o.bound[s](j),f&&rt(t,s)),$}):[],o.update(),f=!0,g(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){F();const s=Q(n.target);o.fragment&&o.fragment.l(s),s.forEach(W)}else o.fragment&&o.fragment.c();n.intro&&nt(t.$$.fragment),et(t,n.target,n.anchor,n.customElement),H(),q()}p(r)}class jt{$destroy(){it(this,1),this.$destroy=E}$on(n,e){if(!O(e))return E;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const l=i.indexOf(e);l!==-1&&i.splice(l,1)}}$set(n){this.$$set&&!z(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{V as A,_t as B,ft as C,G as D,gt as E,E as F,mt as G,st as H,$t as I,jt as S,ot as a,nt as b,bt as c,W as d,at as e,C as f,xt as g,pt as h,St as i,kt as j,Nt as k,Et as l,et as m,vt as n,yt as o,it as p,ct as q,J as r,lt as s,wt as t,ut as u,N as v,K as w,dt as x,Q as y,ht as z};
//# sourceMappingURL=index-ce591551.js.map

var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(){return l(" ")}function d(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function p(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}let $;function h(t){$=t}const m=[],g=[],v=[],b=[],y=Promise.resolve();let _=!1;function x(t){v.push(t)}function j(){const t=new Set;do{for(;m.length;){const t=m.shift();h(t),k(t.$$)}for(;g.length;)g.pop()();for(let n=0;n<v.length;n+=1){const e=v[n];t.has(e)||(e(),t.add(e))}v.length=0}while(m.length);for(;b.length;)b.pop()();_=!1}function k(t){t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(x))}const w=new Set;function A(t,n){t.$$.dirty||(m.push(t),_||(_=!0,y.then(j)),t.$$.dirty=e()),t.$$.dirty[n]=!0}function E(c,a,u,i,s,l){const f=$;h(c);const d=a.props||{},p=c.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:null};let m=!1;var g,v,b;p.ctx=u?u(c,d,(t,n)=>{p.ctx&&s(p.ctx[t],p.ctx[t]=n)&&(p.bound[t]&&p.bound[t](n),m&&A(c,t))}):d,p.update(),m=!0,r(p.before_update),p.fragment=i(p.ctx),a.target&&(a.hydrate?p.fragment.l((b=a.target,Array.from(b.childNodes))):p.fragment.c(),a.intro&&((g=c.$$.fragment)&&g.i&&(w.delete(g),g.i(v))),function(t,e,c){const{fragment:a,on_mount:u,on_destroy:i,after_update:s}=t.$$;a.m(e,c),x(()=>{const e=u.map(n).filter(o);i?i.push(...e):r(e),t.$$.on_mount=[]}),s.forEach(x)}(c,a.target,a.anchor),j()),h(f)}class M{$destroy(){var n,e;e=1,(n=this).$$.fragment&&(r(n.$$.on_destroy),n.$$.fragment.d(e),n.$$.on_destroy=n.$$.fragment=null,n.$$.ctx={}),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function C(t){var n;return{c(){(n=s("div")).innerHTML="<p>University of Mazandaran. Babolsar. Mazandaran</p> <p>Asadi: 0911 897 1878</p> <p>Arefi: 09 ...</p> <p>Mafi:  09 ...</p>",p(n,"class","content svelte-jcj22w")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function L(t){var n;return{c(){(n=s("div")).innerHTML='<h1 class="svelte-jcj22w">Yucatan</h1> <p>Yucatan dev team</p>',p(n,"class","content svelte-jcj22w")},m(t,e){u(t,n,e)},d(t){t&&i(n)}}}function N(n){var e,o,c,$,h,m,g,v,b;function y(t){return"main"==t.page?L:"about"==t.page?C:void 0}var _=y(n),x=_&&_(n);return{c(){e=s("div"),(o=s("span")).textContent="Yucatan .",c=f(),($=s("a")).textContent="Home",h=f(),(m=s("a")).textContent="About us",g=f(),x&&x.c(),v=l(""),p($,"href","!#"),p($,"class","tab-link svelte-jcj22w"),p(m,"href","!#"),p(m,"class","tab-link svelte-jcj22w"),p(e,"class","header svelte-jcj22w"),b=[d($,"click",n.click_handler),d(m,"click",n.click_handler_1)]},m(t,n){u(t,e,n),a(e,o),a(e,c),a(e,$),a(e,h),a(e,m),u(t,g,n),x&&x.m(t,n),u(t,v,n)},p(t,n){_!==(_=y(n))&&(x&&x.d(1),(x=_&&_(n))&&(x.c(),x.m(v.parentNode,v)))},i:t,o:t,d(t){t&&(i(e),i(g)),x&&x.d(t),t&&i(v),r(b)}}}function H(t,n,e){let{page:r="main"}=n;return t.$set=(t=>{"page"in t&&e("page",r=t.page)}),{page:r,click_handler:function(t){const n=r="main";return e("page",r),n},click_handler_1:function(t){const n=r="about";return e("page",r),n}}}return new class extends M{constructor(t){super(),E(this,t,H,N,c,["page"])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map

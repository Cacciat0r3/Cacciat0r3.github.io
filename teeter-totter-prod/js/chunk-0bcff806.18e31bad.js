(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bcff806"],{"057f":function(t,e,r){var n=r("c6b6"),o=r("fc6a"),i=r("241c").f,c=r("f36a"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return i(t)}catch(e){return c(a)}};t.exports.f=function(t){return a&&"Window"==n(t)?f(t):i(o(t))}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),c=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2a7d":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",t._g({staticClass:"button",attrs:{disabled:t.disabled,type:t.type}},t.clickListeners),[t._t("default")],2)},o=[],i=r("5530"),c={name:"Button",props:{disabled:{type:Boolean,default:!1},type:{type:String,default:"button"}},computed:{clickListeners:function(){return Object(i["a"])({},this.$listeners)}}},a=c,f=(r("ef55"),r("2877")),s=Object(f["a"])(a,n,o,!1,null,null,null);e["a"]=s.exports},"428f":function(t,e,r){var n=r("da84");t.exports=n},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),c=i("filter");n({target:"Array",proto:!0,forced:!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"746f":function(t,e,r){var n=r("428f"),o=r("1a2d"),i=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},8418:function(t,e,r){"use strict";var n=r("a04b"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var c=n(e);c in t?o.f(t,c,i(0,r)):t[c]=r}},"8e00":function(t,e,r){},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),c=r("2ba4"),a=r("c65b"),f=r("e330"),s=r("c430"),u=r("83ab"),b=r("4930"),l=r("d039"),d=r("1a2d"),p=r("e8b5"),v=r("1626"),y=r("861d"),g=r("3a9b"),h=r("d9b5"),m=r("825a"),O=r("7b0b"),w=r("fc6a"),j=r("a04b"),S=r("577e"),P=r("5c6c"),_=r("7c73"),k=r("df75"),C=r("241c"),B=r("057f"),x=r("7418"),D=r("06cf"),E=r("9bf2"),N=r("d1e7"),J=r("f36a"),I=r("6eeb"),$=r("5692"),A=r("f772"),F=r("d012"),L=r("90e3"),T=r("b622"),Q=r("e538"),W=r("746f"),Y=r("d44e"),q=r("69f3"),z=r("b727").forEach,G=A("hidden"),H="Symbol",K="prototype",M=T("toPrimitive"),R=q.set,U=q.getterFor(H),V=Object[K],X=o.Symbol,Z=X&&X[K],tt=o.TypeError,et=o.QObject,rt=i("JSON","stringify"),nt=D.f,ot=E.f,it=B.f,ct=N.f,at=f([].push),ft=$("symbols"),st=$("op-symbols"),ut=$("string-to-symbol-registry"),bt=$("symbol-to-string-registry"),lt=$("wks"),dt=!et||!et[K]||!et[K].findChild,pt=u&&l((function(){return 7!=_(ot({},"a",{get:function(){return ot(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=nt(V,e);n&&delete V[e],ot(t,e,r),n&&t!==V&&ot(V,e,n)}:ot,vt=function(t,e){var r=ft[t]=_(Z);return R(r,{type:H,tag:t,description:e}),u||(r.description=e),r},yt=function(t,e,r){t===V&&yt(st,e,r),m(t);var n=j(e);return m(r),d(ft,n)?(r.enumerable?(d(t,G)&&t[G][n]&&(t[G][n]=!1),r=_(r,{enumerable:P(0,!1)})):(d(t,G)||ot(t,G,P(1,{})),t[G][n]=!0),pt(t,n,r)):ot(t,n,r)},gt=function(t,e){m(t);var r=w(e),n=k(r).concat(jt(r));return z(n,(function(e){u&&!a(mt,r,e)||yt(t,e,r[e])})),t},ht=function(t,e){return void 0===e?_(t):gt(_(t),e)},mt=function(t){var e=j(t),r=a(ct,this,e);return!(this===V&&d(ft,e)&&!d(st,e))&&(!(r||!d(this,e)||!d(ft,e)||d(this,G)&&this[G][e])||r)},Ot=function(t,e){var r=w(t),n=j(e);if(r!==V||!d(ft,n)||d(st,n)){var o=nt(r,n);return!o||!d(ft,n)||d(r,G)&&r[G][n]||(o.enumerable=!0),o}},wt=function(t){var e=it(w(t)),r=[];return z(e,(function(t){d(ft,t)||d(F,t)||at(r,t)})),r},jt=function(t){var e=t===V,r=it(e?st:w(t)),n=[];return z(r,(function(t){!d(ft,t)||e&&!d(V,t)||at(n,ft[t])})),n};if(b||(X=function(){if(g(Z,this))throw tt("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?S(arguments[0]):void 0,e=L(t),r=function(t){this===V&&a(r,st,t),d(this,G)&&d(this[G],e)&&(this[G][e]=!1),pt(this,e,P(1,t))};return u&&dt&&pt(V,e,{configurable:!0,set:r}),vt(e,t)},Z=X[K],I(Z,"toString",(function(){return U(this).tag})),I(X,"withoutSetter",(function(t){return vt(L(t),t)})),N.f=mt,E.f=yt,D.f=Ot,C.f=B.f=wt,x.f=jt,Q.f=function(t){return vt(T(t),t)},u&&(ot(Z,"description",{configurable:!0,get:function(){return U(this).description}}),s||I(V,"propertyIsEnumerable",mt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!b,sham:!b},{Symbol:X}),z(k(lt),(function(t){W(t)})),n({target:H,stat:!0,forced:!b},{for:function(t){var e=S(t);if(d(ut,e))return ut[e];var r=X(e);return ut[e]=r,bt[r]=e,r},keyFor:function(t){if(!h(t))throw tt(t+" is not a symbol");if(d(bt,t))return bt[t]},useSetter:function(){dt=!0},useSimple:function(){dt=!1}}),n({target:"Object",stat:!0,forced:!b,sham:!u},{create:ht,defineProperty:yt,defineProperties:gt,getOwnPropertyDescriptor:Ot}),n({target:"Object",stat:!0,forced:!b},{getOwnPropertyNames:wt,getOwnPropertySymbols:jt}),n({target:"Object",stat:!0,forced:l((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(O(t))}}),rt){var St=!b||l((function(){var t=X();return"[null]"!=rt([t])||"{}"!=rt({a:t})||"{}"!=rt(Object(t))}));n({target:"JSON",stat:!0,forced:St},{stringify:function(t,e,r){var n=J(arguments),o=e;if((y(e)||void 0!==t)&&!h(t))return p(e)||(e=function(t,e){if(v(o)&&(e=a(o,this,t,e)),!h(e))return e}),n[1]=e,c(rt,null,n)}})}if(!Z[M]){var Pt=Z.valueOf;I(Z,M,(function(t){return a(Pt,this)}))}Y(X,H),F[G]=!0},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),c=r("d039"),a=c((function(){i(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(t){return i(o(t))}})},d191:function(t,e,r){"use strict";r("8e00")},da8d:function(t,e,r){},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),c=r("fc6a"),a=r("06cf"),f=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),o=a.f,s=i(n),u={},b=0;while(s.length>b)r=o(n,e=s[b++]),void 0!==r&&f(u,e,r);return u}})},dc0d:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"finish"},[r("h1",{staticClass:"finish-title"},[t._v("Nice try!")]),r("div",{staticClass:"finish-info"},[r("h2",{staticClass:"finish-info-title"},[t._v("Your score: "),r("span",{staticClass:"value"},[t._v(t._s(t.myScore))])]),r("h2",{staticClass:"finish-info-title"},[t._v("Best score: "),r("span",{staticClass:"value best"},[t._v(t._s(t.bestScore))])])]),r("router-link",{attrs:{to:"/game",custom:""}},[r("Button",{staticClass:"primary"},[t._v("Try Again")])],1),r("router-link",{attrs:{to:"/",custom:""}},[r("Button",{staticClass:"secondary"},[t._v("Back to the rules")])],1)],1)},o=[],i=r("2a7d"),c={components:{Button:i["a"]},data:function(){return{myScore:localStorage.getItem("myScore"),bestScore:localStorage.getItem("bestScore")}}},a=c,f=(r("d191"),r("2877")),s=Object(f["a"])(a,n,o,!1,null,"7c4dc703",null);e["default"]=s.exports},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),c=r("06cf").f,a=r("83ab"),f=o((function(){c(1)})),s=!a||f;n({target:"Object",stat:!0,forced:s,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},ef55:function(t,e,r){"use strict";r("da8d")}}]);
//# sourceMappingURL=chunk-0bcff806.18e31bad.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{R8uD:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0});var r,o=t("q1tI"),u=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return(i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var l,a=function(e,n){return e(n={exports:{}},n.exports),n.exports}((function(e,n){Object.defineProperty(n,"__esModule",{value:!0});var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,n){return e(n={exports:{}},n.exports),n.exports}var o=function(e){return e&&e.Math==Math&&e},u=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof t&&t)||Function("return this")(),i=function(e){try{return!!e()}catch(n){return!0}},l=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,s={f:f&&!a.call({1:2},1)?function(e){var n=f(this,e);return!!n&&n.enumerable}:a},p=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}},d={}.toString,E="".split,y=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return d.call(e).slice(8,-1)}(e)?E.call(e,""):Object(e)}:Object,h=function(e){return y(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},v=function(e){return"object"==typeof e?null!==e:"function"==typeof e},T=function(e,n){if(!v(e))return e;var t,r;if(n&&"function"==typeof(t=e.toString)&&!v(r=t.call(e)))return r;if("function"==typeof(t=e.valueOf)&&!v(r=t.call(e)))return r;if(!n&&"function"==typeof(t=e.toString)&&!v(r=t.call(e)))return r;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,O=function(e,n){return m.call(e,n)},b=u.document,S=v(b)&&v(b.createElement),g=function(e){return S?b.createElement(e):{}},_=!l&&!i((function(){return 7!=Object.defineProperty(g("div"),"a",{get:function(){return 7}}).a})),I=Object.getOwnPropertyDescriptor,D={f:l?I:function(e,n){if(e=h(e),n=T(n,!0),_)try{return I(e,n)}catch(t){}if(O(e,n))return p(!s.f.call(e,n),e[n])}},N=function(e){if(!v(e))throw TypeError(String(e)+" is not an object");return e},A=Object.defineProperty,L={f:l?A:function(e,n,t){if(N(e),n=T(n,!0),N(t),_)try{return A(e,n,t)}catch(r){}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(e[n]=t.value),e}},w=l?function(e,n,t){return L.f(e,n,p(1,t))}:function(e,n,t){return e[n]=t,e},R=function(e,n){try{w(u,e,n)}catch(t){u[e]=n}return n},j=u["__core-js_shared__"]||R("__core-js_shared__",{}),P=Function.toString;"function"!=typeof j.inspectSource&&(j.inspectSource=function(e){return P.call(e)});var M,H,C,k=j.inspectSource,G=u.WeakMap,x="function"==typeof G&&/native code/.test(k(G)),Y=r((function(e){(e.exports=function(e,n){return j[e]||(j[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),B=0,K=Math.random(),U=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++B+K).toString(36)},F=Y("keys"),V=function(e){return F[e]||(F[e]=U(e))},q={},z=u.WeakMap;if(x){var Q=new z,W=Q.get,J=Q.has,X=Q.set;M=function(e,n){return X.call(Q,e,n),n},H=function(e){return W.call(Q,e)||{}},C=function(e){return J.call(Q,e)}}else{var Z=V("state");q[Z]=!0,M=function(e,n){return w(e,Z,n),n},H=function(e){return O(e,Z)?e[Z]:{}},C=function(e){return O(e,Z)}}var $={set:M,get:H,has:C,enforce:function(e){return C(e)?H(e):M(e,{})},getterFor:function(e){return function(n){var t;if(!v(n)||(t=H(n)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return t}}},ee=r((function(e){var n=$.get,t=$.enforce,r=String(String).split("String");(e.exports=function(e,n,o,i){var c=!!i&&!!i.unsafe,l=!!i&&!!i.enumerable,a=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof n||O(o,"name")||w(o,"name",n),t(o).source=r.join("string"==typeof n?n:"")),e!==u?(c?!a&&e[n]&&(l=!0):delete e[n],l?e[n]=o:w(e,n,o)):l?e[n]=o:R(n,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||k(this)}))})),ne=u,te=function(e){return"function"==typeof e?e:void 0},re=function(e,n){return arguments.length<2?te(ne[e])||te(u[e]):ne[e]&&ne[e][n]||u[e]&&u[e][n]},oe=Math.ceil,ue=Math.floor,ie=function(e){return isNaN(e=+e)?0:(e>0?ue:oe)(e)},ce=Math.min,le=Math.max,ae=Math.min,fe=function(e){return function(n,t,r){var o,u,i=h(n),c=(o=i.length)>0?ce(ie(o),9007199254740991):0,l=function(e,n){var t=ie(e);return t<0?le(t+n,0):ae(t,n)}(r,c);if(e&&t!=t){for(;c>l;)if((u=i[l++])!=u)return!0}else for(;c>l;l++)if((e||l in i)&&i[l]===t)return e||l||0;return!e&&-1}},se={includes:fe(!0),indexOf:fe(!1)},pe=se.indexOf,de=function(e,n){var t,r=h(e),o=0,u=[];for(t in r)!O(q,t)&&O(r,t)&&u.push(t);for(;n.length>o;)O(r,t=n[o++])&&(~pe(u,t)||u.push(t));return u},Ee=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ye=Ee.concat("length","prototype"),he={f:Object.getOwnPropertyNames||function(e){return de(e,ye)}},ve={f:Object.getOwnPropertySymbols},Te=re("Reflect","ownKeys")||function(e){var n=he.f(N(e)),t=ve.f;return t?n.concat(t(e)):n},me=function(e,n){for(var t=Te(n),r=L.f,o=D.f,u=0;u<t.length;u++){var i=t[u];O(e,i)||r(e,i,o(n,i))}},Oe=/#|\.prototype\./,be=function(e,n){var t=ge[Se(e)];return t==Ie||t!=_e&&("function"==typeof n?i(n):!!n)},Se=be.normalize=function(e){return String(e).replace(Oe,".").toLowerCase()},ge=be.data={},_e=be.NATIVE="N",Ie=be.POLYFILL="P",De=be,Ne=D.f,Ae=function(e,n){var t,r,o,i,c,l=e.target,a=e.global,f=e.stat;if(t=a?u:f?u[l]||R(l,{}):(u[l]||{}).prototype)for(r in n){if(i=n[r],o=e.noTargetGet?(c=Ne(t,r))&&c.value:t[r],!De(a?r:l+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;me(i,o)}(e.sham||o&&o.sham)&&w(i,"sham",!0),ee(t,r,i,e)}},Le=Object.keys||function(e){return de(e,Ee)},we=s.f,Re=function(e){return function(n){for(var t,r=h(n),o=Le(r),u=o.length,i=0,c=[];u>i;)t=o[i++],l&&!we.call(r,t)||c.push(e?[t,r[t]]:r[t]);return c}},je={entries:Re(!0),values:Re(!1)}.values;Ae({target:"Object",stat:!0},{values:function(e){return je(e)}});ne.Object.values;var Pe,Me=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),He=Me&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ce=Y("wks"),ke=u.Symbol,Ge=He?ke:ke&&ke.withoutSetter||U,xe=l?Object.defineProperties:function(e,n){N(e);for(var t,r=Le(n),o=r.length,u=0;o>u;)L.f(e,t=r[u++],n[t]);return e},Ye=re("document","documentElement"),Be=V("IE_PROTO"),Ke=function(){},Ue=function(e){return"<script>"+e+"<\/script>"},Fe=function(){try{Pe=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,n;Fe=Pe?function(e){e.write(Ue("")),e.close();var n=e.parentWindow.Object;return e=null,n}(Pe):((n=g("iframe")).style.display="none",Ye.appendChild(n),n.src=String("javascript:"),(e=n.contentWindow.document).open(),e.write(Ue("document.F=Object")),e.close(),e.F);for(var t=Ee.length;t--;)delete Fe.prototype[Ee[t]];return Fe()};q[Be]=!0;var Ve,qe=Object.create||function(e,n){var t;return null!==e?(Ke.prototype=N(e),t=new Ke,Ke.prototype=null,t[Be]=e):t=Fe(),void 0===n?t:xe(t,n)},ze=(O(Ce,Ve="unscopables")||(Me&&O(ke,Ve)?Ce[Ve]=ke[Ve]:Ce[Ve]=Ge("Symbol."+Ve)),Ce[Ve]),Qe=Array.prototype;null==Qe[ze]&&L.f(Qe,ze,{configurable:!0,value:qe(null)});var We,Je=Object.defineProperty,Xe={},Ze=function(e){throw e},$e=se.includes;Ae({target:"Array",proto:!0,forced:!function(e,n){if(O(Xe,e))return Xe[e];n||(n={});var t=[][e],r=!!O(n,"ACCESSORS")&&n.ACCESSORS,o=O(n,0)?n[0]:Ze,u=O(n,1)?n[1]:void 0;return Xe[e]=!!t&&!i((function(){if(r&&!l)return!0;var e={length:-1};r?Je(e,1,{enumerable:!0,get:Ze}):e[1]=1,t.call(e,o,u)}))}("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return $e(this,e,arguments.length>1?arguments[1]:void 0)}}),We="includes",Qe[ze][We]=!0;var en,nn,tn,rn=function(e,n,t){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===n)return e;switch(t){case 0:return function(){return e.call(n)};case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,o){return e.call(n,t,r,o)}}return function(){return e.apply(n,arguments)}},on=Function.call;en="includes",rn(on,u["Array"].prototype[en],nn);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(tn||(tn={}));var un,cn=tn;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(un||(un={}));var ln,an=un,fn=[cn.PARAGRAPH,cn.HEADING_1,cn.HEADING_2,cn.HEADING_3,cn.HEADING_4,cn.HEADING_5,cn.HEADING_6,cn.OL_LIST,cn.UL_LIST,cn.HR,cn.QUOTE,cn.EMBEDDED_ENTRY,cn.EMBEDDED_ASSET],sn=[cn.HR,cn.EMBEDDED_ENTRY,cn.EMBEDDED_ASSET],pn=((ln={})[cn.OL_LIST]=[cn.LIST_ITEM],ln[cn.UL_LIST]=[cn.LIST_ITEM],ln[cn.LIST_ITEM]=fn.slice(),ln[cn.QUOTE]=[cn.PARAGRAPH],ln),dn={nodeType:cn.DOCUMENT,data:{},content:[{nodeType:cn.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};var En=Object.freeze({isInline:function(e){return Object.values(an).includes(e.nodeType)},isBlock:function(e){return Object.values(cn).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});n.BLOCKS=cn,n.CONTAINERS=pn,n.EMPTY_DOCUMENT=dn,n.INLINES=an,n.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},n.TOP_LEVEL_BLOCKS=fn,n.VOID_BLOCKS=sn,n.helpers=En}));(l=a)&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")&&l.default;var f,s,p=a.BLOCKS,d=(a.CONTAINERS,a.EMPTY_DOCUMENT,a.INLINES),E=a.MARKS,y=(a.TOP_LEVEL_BLOCKS,a.VOID_BLOCKS,a.helpers);function h(e,n){return e.map((function(e,t){return r=v(e,n),u=t,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:u}):r;var r,u}))}function v(e,n){var t=n.renderNode,r=n.renderMark,o=n.renderText;if(y.isText(e))return e.marks.reduce((function(e,n){return r[n.type]?r[n.type](e):e}),o?o(e.value):e.value);var i=h(e.content,n);return e.nodeType&&t[e.nodeType]?t[e.nodeType](e,i):u.createElement(u.Fragment,null,i)}var T=((f={})[p.DOCUMENT]=function(e,n){return n},f[p.PARAGRAPH]=function(e,n){return u.createElement("p",null,n)},f[p.HEADING_1]=function(e,n){return u.createElement("h1",null,n)},f[p.HEADING_2]=function(e,n){return u.createElement("h2",null,n)},f[p.HEADING_3]=function(e,n){return u.createElement("h3",null,n)},f[p.HEADING_4]=function(e,n){return u.createElement("h4",null,n)},f[p.HEADING_5]=function(e,n){return u.createElement("h5",null,n)},f[p.HEADING_6]=function(e,n){return u.createElement("h6",null,n)},f[p.EMBEDDED_ENTRY]=function(e,n){return u.createElement("div",null,n)},f[p.UL_LIST]=function(e,n){return u.createElement("ul",null,n)},f[p.OL_LIST]=function(e,n){return u.createElement("ol",null,n)},f[p.LIST_ITEM]=function(e,n){return u.createElement("li",null,n)},f[p.QUOTE]=function(e,n){return u.createElement("blockquote",null,n)},f[p.HR]=function(){return u.createElement("hr",null)},f[d.ASSET_HYPERLINK]=function(e){return O(d.ASSET_HYPERLINK,e)},f[d.ENTRY_HYPERLINK]=function(e){return O(d.ENTRY_HYPERLINK,e)},f[d.EMBEDDED_ENTRY]=function(e){return O(d.EMBEDDED_ENTRY,e)},f[d.HYPERLINK]=function(e,n){return u.createElement("a",{href:e.data.uri},n)},f),m=((s={})[E.BOLD]=function(e){return u.createElement("b",null,e)},s[E.ITALIC]=function(e){return u.createElement("i",null,e)},s[E.UNDERLINE]=function(e){return u.createElement("u",null,e)},s[E.CODE]=function(e){return u.createElement("code",null,e)},s);function O(e,n){return u.createElement("span",{key:n.data.target.sys.id},"type: ",n.nodeType," id: ",n.data.target.sys.id)}n.documentToReactComponents=function(e,n){return void 0===n&&(n={}),e?v(e,{renderNode:i({},T,n.renderNode),renderMark:i({},m,n.renderMark),renderText:n.renderText}):null}}).call(this,t("yLpj"))},cZrw:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),o=t.n(r),u=t("R8uD");n.default=function(e){var n=e.pageContext;return console.log("pageContext : ",JSON.stringify(n)),o.a.createElement("div",null,o.a.createElement("div",null,n.title),o.a.createElement("div",null,Object(u.documentToReactComponents)(n.content.json)))}},yLpj:function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(r){"object"==typeof window&&(t=window)}e.exports=t}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-864c69ef46dcfbc282eb.js.map
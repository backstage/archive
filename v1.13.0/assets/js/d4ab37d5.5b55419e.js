/*! For license information please see d4ab37d5.5b55419e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[122641],{603905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(667294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,h=p["".concat(l,".").concat(d)]||p[d]||f[d]||c;return t?n.createElement(h,o(o({ref:r},u),{},{components:t})):n.createElement(h,o({ref:r},u))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},964463:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});t(827378);var n=t(603905);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={id:"plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.getindexer",title:"ElasticSearchSearchEngine.getIndexer()",description:"API reference for ElasticSearchSearchEngine.getIndexer()"},l=void 0,s={unversionedId:"reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.getindexer",id:"reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.getindexer",title:"ElasticSearchSearchEngine.getIndexer()",description:"API reference for ElasticSearchSearchEngine.getIndexer()",source:"@site/../docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.getindexer.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.getindexer",permalink:"/v1.13.0/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.getindexer",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.getindexer.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.getindexer",title:"ElasticSearchSearchEngine.getIndexer()",description:"API reference for ElasticSearchSearchEngine.getIndexer()"}},u={},p=[{value:"Parameters",id:"parameters",level:2}],f={toc:p};function d(e){var{components:r}=e,t=o(e,["components"]);return(0,n.kt)("wrapper",c(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({},f,t),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/reference/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/reference/plugin-search-backend-module-elasticsearch"},(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-search-backend-module-elasticsearch"))," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine"},(0,n.kt)("inlineCode",{parentName:"a"},"ElasticSearchSearchEngine"))," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.getindexer"},(0,n.kt)("inlineCode",{parentName:"a"},"getIndexer"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"getIndexer(type: string): Promise<ElasticSearchSearchEngineIndexer>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengineindexer"},"ElasticSearchSearchEngineIndexer"),">"))}d.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,c){for(var o,i,l=a(e),s=1;s<arguments.length;s++){for(var u in o=Object(arguments[s]))t.call(o,u)&&(l[u]=o[u]);if(r){i=r(o);for(var p=0;p<i.length;p++)n.call(o,i[p])&&(l[i[p]]=o[i[p]])}}return l}},541535:(e,r,t)=>{var n=t(862525),a=60103,c=60106;var o=60109,i=60110,l=60112;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),c=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),o=p("react.provider"),i=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),s=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}function b(){}function m(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var v=m.prototype=new b;v.constructor=m,n(v,g.prototype),v.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,c={},o=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(o=""+r.key),r)k.call(r,n)&&!j.hasOwnProperty(n)&&(c[n]=r[n]);var l=arguments.length-2;if(1===l)c.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];c.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===c[n]&&(c[n]=l[n]);return{$$typeof:a,type:e,key:o,ref:i,props:c,_owner:O.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g;function E(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function x(e,r,t,n,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case c:l=!0}}if(l)return o=o(l=e),e=""===n?"."+E(l,0):n,Array.isArray(o)?(t="",null!=e&&(t=e.replace(P,"$&/")+"/"),x(o,r,t,"",(function(e){return e}))):null!=o&&(S(o)&&(o=function(e,r){return{$$typeof:a,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(o,t+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+e)),r.push(o)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=n+E(i=e[s],s);l+=x(i,r,t,u,o)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(i=e.next()).done;)l+=x(i=i.value,r,t,u=n+E(i,s++),o);else if("object"===i)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return l}function N(e,r,t){if(null==e)return e;var n=[],a=0;return x(e,n,"","",(function(e){return r.call(t,e,a++)})),n}function _(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function C(){var e=I.current;if(null===e)throw Error(d(321));return e}},827378:(e,r,t)=>{t(541535)}}]);
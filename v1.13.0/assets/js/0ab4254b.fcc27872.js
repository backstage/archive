/*! For license information please see 0ab4254b.fcc27872.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[810532],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,h=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(h,c(c({ref:t},s),{},{components:r})):n.createElement(h,c({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},951750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});r(827378);var n=r(603905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"architecture",title:"Search Architecture",description:"Documentation on Search Architecture"},l=void 0,u={unversionedId:"features/search/architecture",id:"features/search/architecture",title:"Search Architecture",description:"Documentation on Search Architecture",source:"@site/../docs/features/search/architecture.md",sourceDirName:"features/search",slug:"/features/search/architecture",permalink:"/v1.13.0/docs/features/search/architecture",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/search/architecture.md",tags:[],version:"current",frontMatter:{id:"architecture",title:"Search Architecture",description:"Documentation on Search Architecture"},sidebar:"docs",previous:{title:"Search Concepts",permalink:"/v1.13.0/docs/features/search/concepts"},next:{title:"Search Engines",permalink:"/v1.13.0/docs/features/search/search-engines"}},s={},p=[{value:"Tech Stack",id:"tech-stack",level:2}],f={toc:p};function d(e){var{components:t}=e,i=c(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},f,i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Below you can explore the Search Architecture. Our aim with this architecture is\nto support a wide variety of search engines, while providing a simple developer\nexperience for plugin developers, and a good out-of-the-box experience for\nBackstage end-users."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Search Architecture",src:r(295103).Z,width:"764",height:"881"})),(0,n.kt)("p",null,"At a base-level, we want to support the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We aim to enable the capability to search across the entire Backstage\necosystem including, but not limited to, entities in the software catalog.\nSearchable content won't be required to relate directly to the software\ncatalog, but by convention, we may encourage loose relationships using\nwell-known field names or attributes."),(0,n.kt)("li",{parentName:"ul"},"We aim to enable the capability to deploy Backstage using any search engine,\nby providing an integration and translation layer between the core search\nplugin and search engine specific logic that can be extended for different\nsearch engines. We may also introduce the ability to replace the backend API\nendpoint with a custom endpoint for simpler customization.")),(0,n.kt)("p",null,"More advanced use-cases we hope to support with this architecture include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It should be possible for any plugin to expose new content to search. (e.g.\nentity metadata, documentation from TechDocs)"),(0,n.kt)("li",{parentName:"ul"},"It should be possible for any plugin to append relevant metadata to existing\ncontent in search. (e.g. location (path) for TechDocs page)"),(0,n.kt)("li",{parentName:"ul"},"It should be possible to refine search queries (e.g. ranking, scoring, etc.)"),(0,n.kt)("li",{parentName:"ul"},"It should be possible to customize the search UI"),(0,n.kt)("li",{parentName:"ul"},"It should be possible to add search functionality to any Backstage plugin or\ndeployment")),(0,n.kt)("p",null,"Architecture non-goals:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"At this time, we do not intend to directly support event-driven or incremental\nindex management. Instead, we'll be focused on scheduled, bulk index\nmanagement.")),(0,n.kt)("h2",{id:"tech-stack"},"Tech Stack"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Stack"),(0,n.kt)("th",{parentName:"tr",align:null},"Location"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Frontend Plugin"),(0,n.kt)("td",{parentName:"tr",align:null},"@backstage/plugin-search")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Frontend Plugin Library"),(0,n.kt)("td",{parentName:"tr",align:null},"@backstage/plugin-search-react")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Isomorphic Plugin Library"),(0,n.kt)("td",{parentName:"tr",align:null},"@backstage/plugin-search-common")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Backend Plugin"),(0,n.kt)("td",{parentName:"tr",align:null},"@backstage/plugin-search-backend")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Backend Plugin Library"),(0,n.kt)("td",{parentName:"tr",align:null},"@backstage/plugin-search-backend-node")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Backend Plugin Module"),(0,n.kt)("td",{parentName:"tr",align:null},"@backstage/plugin-search-backend-module-elasticsearch")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Backend Plugin Module"),(0,n.kt)("td",{parentName:"tr",align:null},"@backstage/plugin-search-backend-module-pg")))))}d.isMDXComponent=!0},295103:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture.drawio-0af92b3bf372766547f7db6c3fcea92c.svg"},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var c,i,l=a(e),u=1;u<arguments.length;u++){for(var s in c=Object(arguments[u]))r.call(c,s)&&(l[s]=c[s]);if(t){i=t(c);for(var p=0;p<i.length;p++)n.call(c,i[p])&&(l[i[p]]=c[i[p]])}}return l}},541535:(e,t,r)=>{var n=r(862525),a=60103,o=60106;var c=60109,i=60110,l=60112;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),c=p("react.provider"),i=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),s=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function y(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}function m(){}function g(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var k=g.prototype=new m;k.constructor=g,n(k,y.prototype),k.isPureReactComponent=!0;var v={current:null},O=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)O.call(t,n)&&!w.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:v.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,r,n,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return c=c(l=e),e=""===n?"."+S(l,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),x(c,t,r,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||l&&l.key===c.key?"":(""+c.key).replace(N,"$&/")+"/")+e)),t.push(c)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=n+S(i=e[u],u);l+=x(i,t,r,s,c)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(i=e.next()).done;)l+=x(i=i.value,t,r,s=n+S(i,u++),c);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function _(e,t,r){if(null==e)return e;var n=[],a=0;return x(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function D(){var e=A.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
/*! For license information please see 2559bbd3.1edcb4a4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[686649],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),h=n,d=p["".concat(s,".").concat(h)]||p[h]||f[h]||o;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},61962:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});r(827378);var a=r(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={id:"search-overview",title:"Search Documentation",sidebar_label:"Overview",description:"Backstage Search lets you find the right information you are looking for in the Backstage ecosystem."},c="Backstage Search",s={unversionedId:"features/search/search-overview",id:"features/search/search-overview",title:"Search Documentation",description:"Backstage Search lets you find the right information you are looking for in the Backstage ecosystem.",source:"@site/../docs/features/search/README.md",sourceDirName:"features/search",slug:"/features/search/",permalink:"/v1.12.0/docs/features/search/",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/search/README.md",tags:[],version:"current",frontMatter:{id:"search-overview",title:"Search Documentation",sidebar_label:"Overview",description:"Backstage Search lets you find the right information you are looking for in the Backstage ecosystem."},sidebar:"docs",previous:{title:"Migrating to v1beta3 templates",permalink:"/v1.12.0/docs/features/software-templates/migrating-from-v1beta2-to-v1beta3"},next:{title:"Getting Started with Search",permalink:"/v1.12.0/docs/features/search/getting-started"}},l={},u=[{value:"What is it?",id:"what-is-it",level:2},{value:"Features",id:"features",level:2},{value:"Project roadmap",id:"project-roadmap",level:2},{value:"Supported",id:"supported",level:2},{value:"Plugins integrated with Backstage Search",id:"plugins-integrated-with-backstage-search",level:3},{value:"Search engines",id:"search-engines",level:3},{value:"Get involved",id:"get-involved",level:2}],p={toc:u};function f(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",n({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"backstage-search"}),"Backstage Search"),(0,a.kt)("h2",n({},{id:"what-is-it"}),"What is it?"),(0,a.kt)("p",null,"Backstage Search lets you find the right information you are looking for in the Backstage ecosystem."),(0,a.kt)("h2",n({},{id:"features"}),"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A search that lets you bring your own search engine."),(0,a.kt)("li",{parentName:"ul"},"A search that lets you extend it by creating collators for easily indexing content from plugins and other sources."),(0,a.kt)("li",{parentName:"ul"},"A search that lets you create composable search page experiences."),(0,a.kt)("li",{parentName:"ul"},"A search that lets you customize the look and feel of each search result.")),(0,a.kt)("p",null,"See the more detailed ",(0,a.kt)("a",n({parentName:"p"},{href:"/v1.12.0/docs/features/search/architecture"}),"architecture")," and ",(0,a.kt)("a",n({parentName:"p"},{href:"/v1.12.0/docs/features/search/architecture#tech-stack"}),"tech stack"),"."),(0,a.kt)("h2",n({},{id:"project-roadmap"}),"Project roadmap"),(0,a.kt)("p",null,"No current plans. Check ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/backstage/backstage/issues?q=is%3Aopen+is%3Aissue+label%3Asearch"}),"Backstage issues labeled ",(0,a.kt)("inlineCode",{parentName:"a"},"search")),"\nfor community-led ideas and initiatives."),(0,a.kt)("h2",n({},{id:"supported"}),"Supported"),(0,a.kt)("p",null,"The following sections show the plugins and search engines currently supported by Backstage Search."),(0,a.kt)("h3",n({},{id:"plugins-integrated-with-backstage-search"}),"Plugins integrated with Backstage Search"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Plugin"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Support Status"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Software Catalog"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/features/search/how-to-guides#how-to-index-techdocs-documents"}),"TechDocs")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"https://github.com/backstage/backstage/blob/master/plugins/stack-overflow-backend/README.md#index-stack-overflow-questions-to-search"}),"Stack Overflow")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u2705")))),(0,a.kt)("h3",n({},{id:"search-engines"}),"Search engines"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",n({parentName:"p"},{href:"/v1.12.0/docs/features/search/architecture"}),"Backstage Search Architecture")," to get an overview of how\nthe search engines are used."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Search Engines"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Support Status"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/features/search/search-engines#elasticsearch"}),"Elasticsearch/OpenSearch")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/features/search/search-engines#lunr"}),"Lunr")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/features/search/search-engines#postgres"}),"Postgres")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Community \u2705")))),(0,a.kt)("p",null,(0,a.kt)("a",n({parentName:"p"},{href:"#get-involved"}),"Reach out to us")," if you want to chat about support for more plugin integrations and\nsearch engines."),(0,a.kt)("h2",n({},{id:"get-involved"}),"Get involved"),(0,a.kt)("p",null,"For any questions, feedback, or to help move search forward, reach out to us in\nthe ",(0,a.kt)("strong",{parentName:"p"},"#search")," channel of our\n",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/backstage/backstage#community"}),"Discord chatroom"),"."))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(n){return!1}}()?Object.assign:function(e,o){for(var i,c,s=n(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))r.call(i,u)&&(s[u]=i[u]);if(t){c=t(i);for(var p=0;p<c.length;p++)a.call(i,c[p])&&(s[c[p]]=i[c[p]])}}return s}},541535:(e,t,r)=>{var a=r(862525),n=60103,o=60106;var i=60109,c=60110,s=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;n=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),c=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||d}function y(){}function k(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var v=k.prototype=new y;v.constructor=k,a(v,m.prototype),v.isPureReactComponent=!0;var b={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var a,o={},i=null,c=null;if(null!=t)for(a in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,a)&&!O.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:c,props:o,_owner:b.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,a,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case o:s=!0}}if(s)return i=i(s=e),e=""===a?"."+P(s,0):a,Array.isArray(i)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),_(i,t,r,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(S,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=""===a?".":a+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=a+P(c=e[l],l);s+=_(c,t,r,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(c=e.next()).done;)s+=_(c=c.value,t,r,u=a+P(c,l++),i);else if("object"===c)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function E(e,t,r){if(null==e)return e;var a=[],n=0;return _(e,a,"","",(function(e){return t.call(r,e,n++)})),a}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function C(){var e=A.current;if(null===e)throw Error(h(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
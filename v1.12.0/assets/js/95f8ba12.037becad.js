/*! For license information please see 95f8ba12.037becad.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[487413],{603905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(667294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,g=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return t?n.createElement(g,c(c({ref:r},u),{},{components:t})):n.createElement(g,c({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},685465:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>u});t(827378);var n=t(603905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const c={id:"plugin-catalog-backend.catalogbuilder.addprocessor",title:"CatalogBuilder.addProcessor()",description:"API reference for CatalogBuilder.addProcessor()"},l=void 0,i={unversionedId:"reference/plugin-catalog-backend.catalogbuilder.addprocessor",id:"reference/plugin-catalog-backend.catalogbuilder.addprocessor",title:"CatalogBuilder.addProcessor()",description:"API reference for CatalogBuilder.addProcessor()",source:"@site/../docs/reference/plugin-catalog-backend.catalogbuilder.addprocessor.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend.catalogbuilder.addprocessor",permalink:"/v1.12.0/docs/reference/plugin-catalog-backend.catalogbuilder.addprocessor",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend.catalogbuilder.addprocessor.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend.catalogbuilder.addprocessor",title:"CatalogBuilder.addProcessor()",description:"API reference for CatalogBuilder.addProcessor()"}},s={},u=[{value:"Parameters",id:"parameters",level:2}],p={toc:u};function f(e){var{components:r}=e,t=o(e,["components"]);return(0,n.kt)("wrapper",a({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-catalog-backend"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-catalog-backend"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-catalog-backend.catalogbuilder"}),(0,n.kt)("inlineCode",{parentName:"a"},"CatalogBuilder"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-catalog-backend.catalogbuilder.addprocessor"}),(0,n.kt)("inlineCode",{parentName:"a"},"addProcessor"))),(0,n.kt)("p",null,"Adds entity processors. These are responsible for reading, parsing, and processing entities before they are persisted in the catalog."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"addProcessor(...processors: Array<CatalogProcessor | Array<CatalogProcessor>>): CatalogBuilder;\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"processors"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Array","<",(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-catalog-node.catalogprocessor"}),"CatalogProcessor")," ","|"," Array","<",(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-catalog-node.catalogprocessor"}),"CatalogProcessor"),">",">"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"One or more processors")))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-catalog-backend.catalogbuilder"}),"CatalogBuilder")))}f.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var c,l,i=a(e),s=1;s<arguments.length;s++){for(var u in c=Object(arguments[s]))t.call(c,u)&&(i[u]=c[u]);if(r){l=r(c);for(var p=0;p<l.length;p++)n.call(c,l[p])&&(i[l[p]]=c[l[p]])}}return i}},541535:(e,r,t)=>{var n=t(862525),a=60103,o=60106;var c=60109,l=60110,i=60112;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),c=p("react.provider"),l=p("react.context"),i=p("react.forward_ref"),p("react.suspense"),s=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||g}function m(){}function v(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||g}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var h=v.prototype=new m;h.constructor=v,n(h,b.prototype),h.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function P(e,r,t){var n,o={},c=null,l=null;if(null!=r)for(n in void 0!==r.ref&&(l=r.ref),void 0!==r.key&&(c=""+r.key),r)O.call(r,n)&&!j.hasOwnProperty(n)&&(o[n]=r[n]);var i=arguments.length-2;if(1===i)o.children=t;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:a,type:e,key:c,ref:l,props:o,_owner:k.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g;function N(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function _(e,r,t,n,c){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case o:i=!0}}if(i)return c=c(i=e),e=""===n?"."+N(i,0):n,Array.isArray(c)?(t="",null!=e&&(t=e.replace(C,"$&/")+"/"),_(c,r,t,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,r){return{$$typeof:a,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(C,"$&/")+"/")+e)),r.push(c)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=n+N(l=e[s],s);i+=_(l,r,t,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(l=e.next()).done;)i+=_(l=l.value,r,t,u=n+N(l,s++),c);else if("object"===l)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function S(e,r,t){if(null==e)return e;var n=[],a=0;return _(e,n,"","",(function(e){return r.call(t,e,a++)})),n}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function A(){var e=x.current;if(null===e)throw Error(d(321));return e}},827378:(e,r,t)=>{t(541535)}}]);
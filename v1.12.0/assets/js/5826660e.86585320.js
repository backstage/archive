/*! For license information please see 5826660e.86585320.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[535702],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=u(r),y=o,d=l["".concat(p,".").concat(y)]||l[y]||f[y]||c;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},384830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>s});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={id:"backend-plugin-api.cacheserviceoptions",title:"CacheServiceOptions",description:"API reference for CacheServiceOptions"},i=void 0,p={unversionedId:"reference/backend-plugin-api.cacheserviceoptions",id:"reference/backend-plugin-api.cacheserviceoptions",title:"CacheServiceOptions",description:"API reference for CacheServiceOptions",source:"@site/../docs/reference/backend-plugin-api.cacheserviceoptions.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.cacheserviceoptions",permalink:"/v1.12.0/docs/reference/backend-plugin-api.cacheserviceoptions",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.cacheserviceoptions.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.cacheserviceoptions",title:"CacheServiceOptions",description:"API reference for CacheServiceOptions"}},u={},s=[],l={toc:s};function f(e){var{components:t}=e,r=c(e,["components"]);return(0,n.kt)("wrapper",o({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/backend-plugin-api"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/backend-plugin-api"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/backend-plugin-api.cacheserviceoptions"}),(0,n.kt)("inlineCode",{parentName:"a"},"CacheServiceOptions"))),(0,n.kt)("p",null,"Options passed to ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/backend-plugin-api.cacheservice.withoptions"}),"CacheService.withOptions()"),"."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"type CacheServiceOptions = {\n    defaultTtl?: number;\n};\n")))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,c){for(var a,i,p=o(e),u=1;u<arguments.length;u++){for(var s in a=Object(arguments[u]))r.call(a,s)&&(p[s]=a[s]);if(t){i=t(a);for(var l=0;l<i.length;l++)n.call(a,i[l])&&(p[i[l]]=a[i[l]])}}return p}},541535:(e,t,r)=>{var n=r(862525),o=60103,c=60106;var a=60109,i=60110,p=60112;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),c=l("react.portal"),l("react.fragment"),l("react.strict_mode"),l("react.profiler"),a=l("react.provider"),i=l("react.context"),p=l("react.forward_ref"),l("react.suspense"),u=l("react.memo"),s=l("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function b(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||d}function h(){}function m(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||d}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var g=m.prototype=new h;g.constructor=m,n(g,b.prototype),g.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,c={},a=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,n)&&!j.hasOwnProperty(n)&&(c[n]=t[n]);var p=arguments.length-2;if(1===p)c.children=r;else if(1<p){for(var u=Array(p),s=0;s<p;s++)u[s]=arguments[s+2];c.children=u}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===c[n]&&(c[n]=p[n]);return{$$typeof:o,type:e,key:a,ref:i,props:c,_owner:O.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var p=!1;if(null===e)p=!0;else switch(i){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case o:case c:p=!0}}if(p)return a=a(p=e),e=""===n?"."+_(p,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),C(a,t,r,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||p&&p.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(p=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=n+_(i=e[u],u);p+=C(i,t,r,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(i=e.next()).done;)p+=C(i=i.value,t,r,s=n+_(i,u++),a);else if("object"===i)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return p}function E(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var N={current:null};function T(){var e=N.current;if(null===e)throw Error(y(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
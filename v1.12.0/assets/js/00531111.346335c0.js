/*! For license information please see 00531111.346335c0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[424821],{603905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>b});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(t),y=o,b=f["".concat(i,".").concat(y)]||f[y]||s[y]||a;return t?n.createElement(b,c(c({ref:r},u),{},{components:t})):n.createElement(b,c({ref:r},u))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=y;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[f]="string"==typeof e?e:o,c[1]=p;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},429388:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>c,metadata:()=>i,toc:()=>u});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c={id:"core-app-api.errorboundaryfallbackprops",title:"ErrorBoundaryFallbackProps",description:"API reference for ErrorBoundaryFallbackProps"},p=void 0,i={unversionedId:"reference/core-app-api.errorboundaryfallbackprops",id:"reference/core-app-api.errorboundaryfallbackprops",title:"ErrorBoundaryFallbackProps",description:"API reference for ErrorBoundaryFallbackProps",source:"@site/../docs/reference/core-app-api.errorboundaryfallbackprops.md",sourceDirName:"reference",slug:"/reference/core-app-api.errorboundaryfallbackprops",permalink:"/v1.12.0/docs/reference/core-app-api.errorboundaryfallbackprops",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.errorboundaryfallbackprops.md",tags:[],version:"current",frontMatter:{id:"core-app-api.errorboundaryfallbackprops",title:"ErrorBoundaryFallbackProps",description:"API reference for ErrorBoundaryFallbackProps"}},l={},u=[],f={toc:u};function s(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},f,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/core-app-api"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/core-app-api"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/core-app-api.errorboundaryfallbackprops"}),(0,n.kt)("inlineCode",{parentName:"a"},"ErrorBoundaryFallbackProps"))),(0,n.kt)("p",null,"Props for the fallback error boundary."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"type ErrorBoundaryFallbackProps = {\n    plugin?: BackstagePlugin;\n    error: Error;\n    resetError: () => void;\n};\n")),(0,n.kt)("b",null,"References:")," [BackstagePlugin](/v1.12.0/docs/reference/core-plugin-api.backstageplugin)")}s.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var c,p,i=o(e),l=1;l<arguments.length;l++){for(var u in c=Object(arguments[l]))t.call(c,u)&&(i[u]=c[u]);if(r){p=r(c);for(var f=0;f<p.length;f++)n.call(c,p[f])&&(i[p[f]]=c[p[f]])}}return i}},541535:(e,r,t)=>{var n=t(862525),o=60103,a=60106;var c=60109,p=60110,i=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),c=f("react.provider"),p=f("react.context"),i=f("react.forward_ref"),f("react.suspense"),l=f("react.memo"),u=f("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function m(e,r,t){this.props=e,this.context=r,this.refs=d,this.updater=t||b}function v(){}function g(e,r,t){this.props=e,this.context=r,this.refs=d,this.updater=t||b}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var h=g.prototype=new v;h.constructor=g,n(h,m.prototype),h.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,a={},c=null,p=null;if(null!=r)for(n in void 0!==r.ref&&(p=r.ref),void 0!==r.key&&(c=""+r.key),r)O.call(r,n)&&!j.hasOwnProperty(n)&&(a[n]=r[n]);var i=arguments.length-2;if(1===i)a.children=t;else if(1<i){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:o,type:e,key:c,ref:p,props:a,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g;function _(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,c){var p=typeof e;"undefined"!==p&&"boolean"!==p||(e=null);var i=!1;if(null===e)i=!0;else switch(p){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case a:i=!0}}if(i)return c=c(i=e),e=""===n?"."+_(i,0):n,Array.isArray(c)?(t="",null!=e&&(t=e.replace(E,"$&/")+"/"),S(c,r,t,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(E,"$&/")+"/")+e)),r.push(c)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=n+_(p=e[l],l);i+=S(p,r,t,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(p=e.next()).done;)i+=S(p=p.value,r,t,u=n+_(p,l++),c);else if("object"===p)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function x(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var N={current:null};function F(){var e=N.current;if(null===e)throw Error(y(321));return e}},827378:(e,r,t)=>{t(541535)}}]);
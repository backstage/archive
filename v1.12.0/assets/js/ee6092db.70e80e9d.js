/*! For license information please see ee6092db.70e80e9d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[333648],{603905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(t),y=o,m=l["".concat(i,".").concat(y)]||l[y]||f[y]||c;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=y;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u[l]="string"==typeof e?e:o,a[1]=u;for(var s=2;s<c;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},376371:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>p});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={id:"plugin-search-common.queryrequestoptions",title:"QueryRequestOptions",description:"API reference for QueryRequestOptions"},u=void 0,i={unversionedId:"reference/plugin-search-common.queryrequestoptions",id:"reference/plugin-search-common.queryrequestoptions",title:"QueryRequestOptions",description:"API reference for QueryRequestOptions",source:"@site/../docs/reference/plugin-search-common.queryrequestoptions.md",sourceDirName:"reference",slug:"/reference/plugin-search-common.queryrequestoptions",permalink:"/v1.12.0/docs/reference/plugin-search-common.queryrequestoptions",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-common.queryrequestoptions.md",tags:[],version:"current",frontMatter:{id:"plugin-search-common.queryrequestoptions",title:"QueryRequestOptions",description:"API reference for QueryRequestOptions"}},s={},p=[],l={toc:p};function f(e){var{components:r}=e,t=c(e,["components"]);return(0,n.kt)("wrapper",o({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-search-common"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-search-common"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-search-common.queryrequestoptions"}),(0,n.kt)("inlineCode",{parentName:"a"},"QueryRequestOptions"))),(0,n.kt)("p",null,"Options when querying a search engine."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"type QueryRequestOptions = {\n    token?: string;\n};\n")))}f.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,c){for(var a,u,i=o(e),s=1;s<arguments.length;s++){for(var p in a=Object(arguments[s]))t.call(a,p)&&(i[p]=a[p]);if(r){u=r(a);for(var l=0;l<u.length;l++)n.call(a,u[l])&&(i[u[l]]=a[u[l]])}}return i}},541535:(e,r,t)=>{var n=t(862525),o=60103,c=60106;var a=60109,u=60110,i=60112;var s=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),c=l("react.portal"),l("react.fragment"),l("react.strict_mode"),l("react.profiler"),a=l("react.provider"),u=l("react.context"),i=l("react.forward_ref"),l("react.suspense"),s=l("react.memo"),p=l("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function b(e,r,t){this.props=e,this.context=r,this.refs=d,this.updater=t||m}function h(){}function g(e,r,t){this.props=e,this.context=r,this.refs=d,this.updater=t||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var v=g.prototype=new h;v.constructor=g,n(v,b.prototype),v.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,c={},a=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(a=""+r.key),r)j.call(r,n)&&!k.hasOwnProperty(n)&&(c[n]=r[n]);var i=arguments.length-2;if(1===i)c.children=t;else if(1<i){for(var s=Array(i),p=0;p<i;p++)s[p]=arguments[p+2];c.children=s}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===c[n]&&(c[n]=i[n]);return{$$typeof:o,type:e,key:a,ref:u,props:c,_owner:O.current}}function q(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function _(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case c:i=!0}}if(i)return a=a(i=e),e=""===n?"."+_(i,0):n,Array.isArray(a)?(t="",null!=e&&(t=e.replace(P,"$&/")+"/"),S(a,r,t,"",(function(e){return e}))):null!=a&&(q(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),r.push(a)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var p=n+_(u=e[s],s);i+=S(u,r,t,p,a)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),s=0;!(u=e.next()).done;)i+=S(u=u.value,r,t,p=n+_(u,s++),a);else if("object"===u)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function E(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function x(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function R(){var e=C.current;if(null===e)throw Error(y(321));return e}},827378:(e,r,t)=>{t(541535)}}]);
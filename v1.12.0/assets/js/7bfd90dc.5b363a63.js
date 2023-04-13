/*! For license information please see 7bfd90dc.5b363a63.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[80678],{603905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(667294);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=n.createContext({}),f=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=f(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=f(t),y=c,d=p["".concat(l,".").concat(y)]||p[y]||s[y]||o;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function d(e,r){var t=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var o=t.length,i=new Array(o);i[0]=y;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[p]="string"==typeof e?e:c,i[1]=a;for(var f=2;f<o;f++)i[f]=t[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},406189:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>f,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});t(827378);var n=t(603905);function c(){return c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}const i={id:"backend-plugin-api.coreservices.lifecycle",title:"coreServices.lifecycle",description:"API reference for coreServices.lifecycle"},a=void 0,l={unversionedId:"reference/backend-plugin-api.coreservices.lifecycle",id:"reference/backend-plugin-api.coreservices.lifecycle",title:"coreServices.lifecycle",description:"API reference for coreServices.lifecycle",source:"@site/../docs/reference/backend-plugin-api.coreservices.lifecycle.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.coreservices.lifecycle",permalink:"/v1.12.0/docs/reference/backend-plugin-api.coreservices.lifecycle",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.coreservices.lifecycle.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.coreservices.lifecycle",title:"coreServices.lifecycle",description:"API reference for coreServices.lifecycle"}},f={},u=[],p={toc:u};function s(e){var{components:r}=e,t=o(e,["components"]);return(0,n.kt)("wrapper",c({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",c({parentName:"p"},{href:"/v1.12.0/docs/reference/backend-plugin-api"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/backend-plugin-api"))," ",">"," ",(0,n.kt)("a",c({parentName:"p"},{href:"/v1.12.0/docs/reference/backend-plugin-api.coreservices"}),(0,n.kt)("inlineCode",{parentName:"a"},"coreServices"))," ",">"," ",(0,n.kt)("a",c({parentName:"p"},{href:"/v1.12.0/docs/reference/backend-plugin-api.coreservices.lifecycle"}),(0,n.kt)("inlineCode",{parentName:"a"},"lifecycle"))),(0,n.kt)("p",null,"The service reference for the plugin scoped ",(0,n.kt)("a",c({parentName:"p"},{href:"/v1.12.0/docs/reference/backend-plugin-api.lifecycleservice"}),"LifecycleService"),"."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-typescript"}),'lifecycle: import("../system").ServiceRef<import("./LifecycleService").LifecycleService, "plugin">\n')))}s.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(c){return!1}}()?Object.assign:function(e,o){for(var i,a,l=c(e),f=1;f<arguments.length;f++){for(var u in i=Object(arguments[f]))t.call(i,u)&&(l[u]=i[u]);if(r){a=r(i);for(var p=0;p<a.length;p++)n.call(i,a[p])&&(l[a[p]]=i[a[p]])}}return l}},541535:(e,r,t)=>{var n=t(862525),c=60103,o=60106;var i=60109,a=60110,l=60112;var f=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;c=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),a=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),f=p("react.memo"),u=p("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function b(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||d}function m(){}function g(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||d}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var h=g.prototype=new m;h.constructor=g,n(h,b.prototype),h.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,o={},i=null,a=null;if(null!=r)for(n in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(i=""+r.key),r)k.call(r,n)&&!j.hasOwnProperty(n)&&(o[n]=r[n]);var l=arguments.length-2;if(1===l)o.children=t;else if(1<l){for(var f=Array(l),u=0;u<l;u++)f[u]=arguments[u+2];o.children=f}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:c,type:e,key:i,ref:a,props:o,_owner:O.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var P=/\/+/g;function _(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function E(e,r,t,n,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case c:case o:l=!0}}if(l)return i=i(l=e),e=""===n?"."+_(l,0):n,Array.isArray(i)?(t="",null!=e&&(t=e.replace(P,"$&/")+"/"),E(i,r,t,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,r){return{$$typeof:c,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),r.push(i)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var u=n+_(a=e[f],f);l+=E(a,r,t,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),f=0;!(a=e.next()).done;)l+=E(a=a.value,r,t,u=n+_(a,f++),i);else if("object"===a)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return l}function x(e,r,t){if(null==e)return e;var n=[],c=0;return E(e,n,"","",(function(e){return r.call(t,e,c++)})),n}function N(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function T(){var e=C.current;if(null===e)throw Error(y(321));return e}},827378:(e,r,t)=>{t(541535)}}]);
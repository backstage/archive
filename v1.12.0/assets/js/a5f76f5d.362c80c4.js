/*! For license information please see a5f76f5d.362c80c4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[93701],{603905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),y=o,m=u["".concat(i,".").concat(y)]||u[y]||f[y]||a;return t?n.createElement(m,c(c({ref:r},p),{},{components:t})):n.createElement(m,c({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=y;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},413067:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>p});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c={id:"core-components.progress",title:"Progress()",description:"API reference for Progress()"},s=void 0,i={unversionedId:"reference/core-components.progress",id:"reference/core-components.progress",title:"Progress()",description:"API reference for Progress()",source:"@site/../docs/reference/core-components.progress.md",sourceDirName:"reference",slug:"/reference/core-components.progress",permalink:"/v1.12.0/docs/reference/core-components.progress",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-components.progress.md",tags:[],version:"current",frontMatter:{id:"core-components.progress",title:"Progress()",description:"API reference for Progress()"}},l={},p=[{value:"Parameters",id:"parameters",level:2}],u={toc:p};function f(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/core-components"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/core-components"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/core-components.progress"}),(0,n.kt)("inlineCode",{parentName:"a"},"Progress"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"function Progress(props: PropsWithChildren<LinearProgressProps>): JSX.Element;\n")),(0,n.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"props"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"PropsWithChildren","<","LinearProgressProps",">"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"JSX.Element"))}f.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var c,s,i=o(e),l=1;l<arguments.length;l++){for(var p in c=Object(arguments[l]))t.call(c,p)&&(i[p]=c[p]);if(r){s=r(c);for(var u=0;u<s.length;u++)n.call(c,s[u])&&(i[s[u]]=c[s[u]])}}return i}},541535:(e,r,t)=>{var n=t(862525),o=60103,a=60106;var c=60109,s=60110,i=60112;var l=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),a=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),c=u("react.provider"),s=u("react.context"),i=u("react.forward_ref"),u("react.suspense"),l=u("react.memo"),p=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function b(e,r,t){this.props=e,this.context=r,this.refs=d,this.updater=t||m}function g(){}function h(e,r,t){this.props=e,this.context=r,this.refs=d,this.updater=t||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var v=h.prototype=new g;v.constructor=h,n(v,b.prototype),v.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function P(e,r,t){var n,a={},c=null,s=null;if(null!=r)for(n in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(c=""+r.key),r)k.call(r,n)&&!j.hasOwnProperty(n)&&(a[n]=r[n]);var i=arguments.length-2;if(1===i)a.children=t;else if(1<i){for(var l=Array(i),p=0;p<i;p++)l[p]=arguments[p+2];a.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:o,type:e,key:c,ref:s,props:a,_owner:O.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function _(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function N(e,r,t,n,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case a:i=!0}}if(i)return c=c(i=e),e=""===n?"."+_(i,0):n,Array.isArray(c)?(t="",null!=e&&(t=e.replace(S,"$&/")+"/"),N(c,r,t,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(S,"$&/")+"/")+e)),r.push(c)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var p=n+_(s=e[l],l);i+=N(s,r,t,p,c)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),l=0;!(s=e.next()).done;)i+=N(s=s.value,r,t,p=n+_(s,l++),c);else if("object"===s)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function E(e,r,t){if(null==e)return e;var n=[],o=0;return N(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function x(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function T(){var e=C.current;if(null===e)throw Error(y(321));return e}},827378:(e,r,t)=>{t(541535)}}]);
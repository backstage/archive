/*! For license information please see a3f1b30b.1610a239.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[6700],{603905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>y});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(t),d=o,y=s["".concat(c,".").concat(d)]||s[d]||f[d]||i;return t?n.createElement(y,a(a({ref:r},l),{},{components:t})):n.createElement(y,a({ref:r},l))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u[s]="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},603336:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={id:"core-plugin-api.pendingoauthrequest",title:"PendingOAuthRequest",description:"API reference for PendingOAuthRequest"},u=void 0,c={unversionedId:"reference/core-plugin-api.pendingoauthrequest",id:"reference/core-plugin-api.pendingoauthrequest",title:"PendingOAuthRequest",description:"API reference for PendingOAuthRequest",source:"@site/../docs/reference/core-plugin-api.pendingoauthrequest.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.pendingoauthrequest",permalink:"/v1.12.0/docs/reference/core-plugin-api.pendingoauthrequest",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.pendingoauthrequest.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.pendingoauthrequest",title:"PendingOAuthRequest",description:"API reference for PendingOAuthRequest"}},p={},l=[{value:"Remarks",id:"remarks",level:2}],s={toc:l};function f(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",o({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/core-plugin-api"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/core-plugin-api"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/core-plugin-api.pendingoauthrequest"}),(0,n.kt)("inlineCode",{parentName:"a"},"PendingOAuthRequest"))),(0,n.kt)("p",null,"An pending auth request for a single auth provider. The request will remain in this pending state until either reject() or trigger() is called."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"type PendingOAuthRequest = {\n    provider: AuthProviderInfo;\n    reject(): void;\n    trigger(): Promise<void>;\n};\n")),(0,n.kt)("b",null,"References:")," [AuthProviderInfo](/v1.12.0/docs/reference/core-plugin-api.authproviderinfo)",(0,n.kt)("h2",o({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"Any new requests for the same provider are merged into the existing pending request, meaning there will only ever be a single pending request for a given provider."))}f.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,u,c=o(e),p=1;p<arguments.length;p++){for(var l in a=Object(arguments[p]))t.call(a,l)&&(c[l]=a[l]);if(r){u=r(a);for(var s=0;s<u.length;s++)n.call(a,u[s])&&(c[u[s]]=a[u[s]])}}return c}},541535:(e,r,t)=>{var n=t(862525),o=60103,i=60106;var a=60109,u=60110,c=60112;var p=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),i=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),a=s("react.provider"),u=s("react.context"),c=s("react.forward_ref"),s("react.suspense"),p=s("react.memo"),l=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function h(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||y}function v(){}function m(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var b=m.prototype=new v;b.constructor=m,n(b,h.prototype),b.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,i={},a=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(a=""+r.key),r)j.call(r,n)&&!k.hasOwnProperty(n)&&(i[n]=r[n]);var c=arguments.length-2;if(1===c)i.children=t;else if(1<c){for(var p=Array(c),l=0;l<c;l++)p[l]=arguments[l+2];i.children=p}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===i[n]&&(i[n]=c[n]);return{$$typeof:o,type:e,key:a,ref:u,props:i,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var q=/\/+/g;function _(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return a=a(c=e),e=""===n?"."+_(c,0):n,Array.isArray(a)?(t="",null!=e&&(t=e.replace(q,"$&/")+"/"),S(a,r,t,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(q,"$&/")+"/")+e)),r.push(a)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var l=n+_(u=e[p],p);c+=S(u,r,t,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),p=0;!(u=e.next()).done;)c+=S(u=u.value,r,t,l=n+_(u,p++),a);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return c}function A(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function x(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function R(){var e=E.current;if(null===e)throw Error(d(321));return e}},827378:(e,r,t)=>{t(541535)}}]);
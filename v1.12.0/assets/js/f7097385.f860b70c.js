/*! For license information please see f7097385.f860b70c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[89508],{603905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),a=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=a(e.components);return n.createElement(u.Provider,{value:r},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=a(t),m=o,y=l["".concat(u,".").concat(m)]||l[m]||f[m]||i;return t?n.createElement(y,s(s({ref:r},p),{},{components:t})):n.createElement(y,s({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=m;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c[l]="string"==typeof e?e:o,s[1]=c;for(var a=2;a<i;a++)s[a]=t[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16666:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"plugin-permission-common.authorizepermissionrequest",title:"AuthorizePermissionRequest",description:"API reference for AuthorizePermissionRequest"},c=void 0,u={unversionedId:"reference/plugin-permission-common.authorizepermissionrequest",id:"reference/plugin-permission-common.authorizepermissionrequest",title:"AuthorizePermissionRequest",description:"API reference for AuthorizePermissionRequest",source:"@site/../docs/reference/plugin-permission-common.authorizepermissionrequest.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common.authorizepermissionrequest",permalink:"/v1.12.0/docs/reference/plugin-permission-common.authorizepermissionrequest",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-common.authorizepermissionrequest.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-common.authorizepermissionrequest",title:"AuthorizePermissionRequest",description:"API reference for AuthorizePermissionRequest"}},a={},p=[],l={toc:p};function f(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",o({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-permission-common"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-permission-common"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-permission-common.authorizepermissionrequest"}),(0,n.kt)("inlineCode",{parentName:"a"},"AuthorizePermissionRequest"))),(0,n.kt)("p",null,"Request object for ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-permission-common.permissionevaluator.authorize"}),"PermissionEvaluator.authorize()"),". If a ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-permission-common.resourcepermission"}),"ResourcePermission")," is provided, it must include a corresponding ",(0,n.kt)("inlineCode",{parentName:"p"},"resourceRef"),"."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"type AuthorizePermissionRequest = {\n    permission: Exclude<Permission, ResourcePermission>;\n    resourceRef?: never;\n} | {\n    permission: ResourcePermission;\n    resourceRef: string;\n};\n")),(0,n.kt)("b",null,"References:")," [Permission](/v1.12.0/docs/reference/plugin-permission-common.permission), [ResourcePermission](/v1.12.0/docs/reference/plugin-permission-common.resourcepermission)")}f.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var s,c,u=o(e),a=1;a<arguments.length;a++){for(var p in s=Object(arguments[a]))t.call(s,p)&&(u[p]=s[p]);if(r){c=r(s);for(var l=0;l<c.length;l++)n.call(s,c[l])&&(u[c[l]]=s[c[l]])}}return u}},541535:(e,r,t)=>{var n=t(862525),o=60103,i=60106;var s=60109,c=60110,u=60112;var a=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),i=l("react.portal"),l("react.fragment"),l("react.strict_mode"),l("react.profiler"),s=l("react.provider"),c=l("react.context"),u=l("react.forward_ref"),l("react.suspense"),a=l("react.memo"),p=l("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function h(e,r,t){this.props=e,this.context=r,this.refs=d,this.updater=t||y}function b(){}function v(e,r,t){this.props=e,this.context=r,this.refs=d,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var g=v.prototype=new b;g.constructor=v,n(g,h.prototype),g.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function P(e,r,t){var n,i={},s=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(s=""+r.key),r)j.call(r,n)&&!k.hasOwnProperty(n)&&(i[n]=r[n]);var u=arguments.length-2;if(1===u)i.children=t;else if(1<u){for(var a=Array(u),p=0;p<u;p++)a[p]=arguments[p+2];i.children=a}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===i[n]&&(i[n]=u[n]);return{$$typeof:o,type:e,key:s,ref:c,props:i,_owner:O.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var q=/\/+/g;function _(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function R(e,r,t,n,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case i:u=!0}}if(u)return s=s(u=e),e=""===n?"."+_(u,0):n,Array.isArray(s)?(t="",null!=e&&(t=e.replace(q,"$&/")+"/"),R(s,r,t,"",(function(e){return e}))):null!=s&&(w(s)&&(s=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,t+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(q,"$&/")+"/")+e)),r.push(s)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var a=0;a<e.length;a++){var p=n+_(c=e[a],a);u+=R(c,r,t,p,s)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),a=0;!(c=e.next()).done;)u+=R(c=c.value,r,t,p=n+_(c,a++),s);else if("object"===c)throw r=""+e,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return u}function S(e,r,t){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function z(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function x(){var e=E.current;if(null===e)throw Error(m(321));return e}},827378:(e,r,t)=>{t(541535)}}]);
/*! For license information please see 9f60a7ae.8c98c1ef.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[688933],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),m=o,d=l["".concat(c,".").concat(m)]||l[m]||f[m]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},594364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={id:"plugin-permission-common.isupdatepermission",title:"isUpdatePermission()",description:"API reference for isUpdatePermission()"},s=void 0,c={unversionedId:"reference/plugin-permission-common.isupdatepermission",id:"reference/plugin-permission-common.isupdatepermission",title:"isUpdatePermission()",description:"API reference for isUpdatePermission()",source:"@site/../docs/reference/plugin-permission-common.isupdatepermission.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common.isupdatepermission",permalink:"/v1.12.0/docs/reference/plugin-permission-common.isupdatepermission",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-common.isupdatepermission.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-common.isupdatepermission",title:"isUpdatePermission()",description:"API reference for isUpdatePermission()"}},p={},u=[{value:"Parameters",id:"parameters",level:2}],l={toc:u};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-permission-common"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-permission-common"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-permission-common.isupdatepermission"}),(0,n.kt)("inlineCode",{parentName:"a"},"isUpdatePermission"))),(0,n.kt)("p",null,"Check if a given permission is related to an update action."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"function isUpdatePermission(permission: Permission): boolean;\n")),(0,n.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"permission"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-permission-common.permission"}),"Permission")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"boolean"))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,s,c=o(e),p=1;p<arguments.length;p++){for(var u in a=Object(arguments[p]))r.call(a,u)&&(c[u]=a[u]);if(t){s=t(a);for(var l=0;l<s.length;l++)n.call(a,s[l])&&(c[s[l]]=a[s[l]])}}return c}},541535:(e,t,r)=>{var n=r(862525),o=60103,i=60106;var a=60109,s=60110,c=60112;var p=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),i=l("react.portal"),l("react.fragment"),l("react.strict_mode"),l("react.profiler"),a=l("react.provider"),s=l("react.context"),c=l("react.forward_ref"),l("react.suspense"),p=l("react.memo"),u=l("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}function g(){}function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var h=v.prototype=new g;h.constructor=v,n(h,b.prototype),h.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,i={},a=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,n)&&!j.hasOwnProperty(n)&&(i[n]=t[n]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var p=Array(c),u=0;u<c;u++)p[u]=arguments[u+2];i.children=p}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===i[n]&&(i[n]=c[n]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return a=a(c=e),e=""===n?"."+N(c,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),S(a,t,r,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(_,"$&/")+"/")+e)),t.push(a)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var u=n+N(s=e[p],p);c+=S(s,t,r,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),p=0;!(s=e.next()).done;)c+=S(s=s.value,t,r,u=n+N(s,p++),a);else if("object"===s)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function E(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function U(){var e=C.current;if(null===e)throw Error(m(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
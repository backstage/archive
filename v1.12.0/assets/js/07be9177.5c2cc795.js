/*! For license information please see 07be9177.5c2cc795.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[684611],{603905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=s(r),y=o,m=p["".concat(u,".").concat(y)]||p[y]||l[y]||a;return r?n.createElement(m,c(c({ref:t},f),{},{components:r})):n.createElement(m,c({ref:t},f))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=y;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},827443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>u,toc:()=>f});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={id:"integration-react.scmauthtokenresponse.token",title:"ScmAuthTokenResponse.token",description:"API reference for ScmAuthTokenResponse.token"},i=void 0,u={unversionedId:"reference/integration-react.scmauthtokenresponse.token",id:"reference/integration-react.scmauthtokenresponse.token",title:"ScmAuthTokenResponse.token",description:"API reference for ScmAuthTokenResponse.token",source:"@site/../docs/reference/integration-react.scmauthtokenresponse.token.md",sourceDirName:"reference",slug:"/reference/integration-react.scmauthtokenresponse.token",permalink:"/v1.12.0/docs/reference/integration-react.scmauthtokenresponse.token",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/integration-react.scmauthtokenresponse.token.md",tags:[],version:"current",frontMatter:{id:"integration-react.scmauthtokenresponse.token",title:"ScmAuthTokenResponse.token",description:"API reference for ScmAuthTokenResponse.token"}},s={},f=[],p={toc:f};function l(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/integration-react"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/integration-react"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/integration-react.scmauthtokenresponse"}),(0,n.kt)("inlineCode",{parentName:"a"},"ScmAuthTokenResponse"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/integration-react.scmauthtokenresponse.token"}),(0,n.kt)("inlineCode",{parentName:"a"},"token"))),(0,n.kt)("p",null,"An authorization token that can be used to authenticate requests."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"token: string;\n")))}l.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var c,i,u=o(e),s=1;s<arguments.length;s++){for(var f in c=Object(arguments[s]))r.call(c,f)&&(u[f]=c[f]);if(t){i=t(c);for(var p=0;p<i.length;p++)n.call(c,i[p])&&(u[i[p]]=c[i[p]])}}return u}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var c=60109,i=60110,u=60112;var s=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),c=p("react.provider"),i=p("react.context"),u=p("react.forward_ref"),p("react.suspense"),s=p("react.memo"),f=p("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function h(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||m}function b(){}function k(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var v=k.prototype=new b;v.constructor=k,n(v,h.prototype),v.isPureReactComponent=!0;var g={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)O.call(t,n)&&!j.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var s=Array(u),f=0;f<u;f++)s[f]=arguments[f+2];a.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:g.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,r,n,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return c=c(u=e),e=""===n?"."+_(u,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),A(c,t,r,"",(function(e){return e}))):null!=c&&(S(c)&&(c=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+e)),t.push(c)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var f=n+_(i=e[s],s);u+=A(i,t,r,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(i=e.next()).done;)u+=A(i=i.value,t,r,f=n+_(i,s++),c);else if("object"===i)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function E(e,t,r){if(null==e)return e;var n=[],o=0;return A(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function C(){var e=x.current;if(null===e)throw Error(y(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
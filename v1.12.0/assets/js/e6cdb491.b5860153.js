/*! For license information please see e6cdb491.b5860153.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[107926],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),f=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=f(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=f(r),g=o,y=s["".concat(u,".").concat(g)]||s[g]||p[g]||i;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var f=2;f<i;f++)a[f]=r[f];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},309037:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>l});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={id:"integration.readgithubintegrationconfig",title:"readGitHubIntegrationConfig",description:"API reference for readGitHubIntegrationConfig"},c=void 0,u={unversionedId:"reference/integration.readgithubintegrationconfig",id:"reference/integration.readgithubintegrationconfig",title:"readGitHubIntegrationConfig",description:"API reference for readGitHubIntegrationConfig",source:"@site/../docs/reference/integration.readgithubintegrationconfig.md",sourceDirName:"reference",slug:"/reference/integration.readgithubintegrationconfig",permalink:"/v1.12.0/docs/reference/integration.readgithubintegrationconfig",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/integration.readgithubintegrationconfig.md",tags:[],version:"current",frontMatter:{id:"integration.readgithubintegrationconfig",title:"readGitHubIntegrationConfig",description:"API reference for readGitHubIntegrationConfig"}},f={},l=[],s={toc:l};function p(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/integration"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/integration"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/integration.readgithubintegrationconfig"}),(0,n.kt)("inlineCode",{parentName:"a"},"readGitHubIntegrationConfig"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,n.kt)("p",{parentName:"blockquote"},"Use ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/integration.readgithubintegrationconfig"}),"readGithubIntegrationConfig()")," instead.")),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"readGitHubIntegrationConfig: typeof readGithubIntegrationConfig\n")))}p.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,c,u=o(e),f=1;f<arguments.length;f++){for(var l in a=Object(arguments[f]))r.call(a,l)&&(u[l]=a[l]);if(t){c=t(a);for(var s=0;s<c.length;s++)n.call(a,c[s])&&(u[c[s]]=a[c[s]])}}return u}},541535:(e,t,r)=>{var n=r(862525),o=60103,i=60106;var a=60109,c=60110,u=60112;var f=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),i=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),a=s("react.provider"),c=s("react.context"),u=s("react.forward_ref"),s("react.suspense"),f=s("react.memo"),l=s("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function b(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||y}function h(){}function m(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var v=m.prototype=new h;v.constructor=m,n(v,b.prototype),v.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,i={},a=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,n)&&!k.hasOwnProperty(n)&&(i[n]=t[n]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var f=Array(u),l=0;l<u;l++)f[l]=arguments[l+2];i.children=f}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===i[n]&&(i[n]=u[n]);return{$$typeof:o,type:e,key:a,ref:c,props:i,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case i:u=!0}}if(u)return a=a(u=e),e=""===n?"."+C(u,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),S(a,t,r,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(_,"$&/")+"/")+e)),t.push(a)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var l=n+C(c=e[f],f);u+=S(c,t,r,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),f=0;!(c=e.next()).done;)u+=S(c=c.value,t,r,l=n+C(c,f++),a);else if("object"===c)throw t=""+e,Error(g(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function I(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function N(){var e=x.current;if(null===e)throw Error(g(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
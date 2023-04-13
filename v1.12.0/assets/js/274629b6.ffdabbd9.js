/*! For license information please see 274629b6.ffdabbd9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[95291],{603905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>b});var n=r(667294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),s=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},l=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},f="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),f=s(r),y=o,b=f["".concat(u,".").concat(y)]||f[y]||p[y]||i;return r?n.createElement(b,a(a({ref:e},l),{},{components:r})):n.createElement(b,a({ref:e},l))}));function b(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=y;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c[f]="string"==typeof t?t:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},433514:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>l});r(827378);var n=r(603905);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const a={id:"plugin-github-actions.entitylatestgithubactionruncard",title:"EntityLatestGithubActionRunCard",description:"API reference for EntityLatestGithubActionRunCard"},c=void 0,u={unversionedId:"reference/plugin-github-actions.entitylatestgithubactionruncard",id:"reference/plugin-github-actions.entitylatestgithubactionruncard",title:"EntityLatestGithubActionRunCard",description:"API reference for EntityLatestGithubActionRunCard",source:"@site/../docs/reference/plugin-github-actions.entitylatestgithubactionruncard.md",sourceDirName:"reference",slug:"/reference/plugin-github-actions.entitylatestgithubactionruncard",permalink:"/v1.12.0/docs/reference/plugin-github-actions.entitylatestgithubactionruncard",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-github-actions.entitylatestgithubactionruncard.md",tags:[],version:"current",frontMatter:{id:"plugin-github-actions.entitylatestgithubactionruncard",title:"EntityLatestGithubActionRunCard",description:"API reference for EntityLatestGithubActionRunCard"}},s={},l=[],f={toc:l};function p(t){var{components:e}=t,r=i(t,["components"]);return(0,n.kt)("wrapper",o({},f,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-github-actions"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-github-actions"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-github-actions.entitylatestgithubactionruncard"}),(0,n.kt)("inlineCode",{parentName:"a"},"EntityLatestGithubActionRunCard"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),'EntityLatestGithubActionRunCard: (props: {\n    branch: string;\n    variant?: import("@backstage/core-components").InfoCardVariants | undefined;\n}) => JSX.Element\n')))}p.isMDXComponent=!0},862525:t=>{var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(t,i){for(var a,c,u=o(t),s=1;s<arguments.length;s++){for(var l in a=Object(arguments[s]))r.call(a,l)&&(u[l]=a[l]);if(e){c=e(a);for(var f=0;f<c.length;f++)n.call(a,c[f])&&(u[c[f]]=a[c[f]])}}return u}},541535:(t,e,r)=>{var n=r(862525),o=60103,i=60106;var a=60109,c=60110,u=60112;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),a=f("react.provider"),c=f("react.context"),u=f("react.forward_ref"),f("react.suspense"),s=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function y(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function h(t,e,r){this.props=t,this.context=e,this.refs=d,this.updater=r||b}function g(){}function m(t,e,r){this.props=t,this.context=e,this.refs=d,this.updater=r||b}h.prototype.isReactComponent={},h.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error(y(85));this.updater.enqueueSetState(this,t,e,"setState")},h.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},g.prototype=h.prototype;var v=m.prototype=new g;v.constructor=m,n(v,h.prototype),v.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(t,e,r){var n,i={},a=null,c=null;if(null!=e)for(n in void 0!==e.ref&&(c=e.ref),void 0!==e.key&&(a=""+e.key),e)j.call(e,n)&&!k.hasOwnProperty(n)&&(i[n]=e[n]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];i.children=s}if(t&&t.defaultProps)for(n in u=t.defaultProps)void 0===i[n]&&(i[n]=u[n]);return{$$typeof:o,type:t,key:a,ref:c,props:i,_owner:O.current}}function P(t){return"object"==typeof t&&null!==t&&t.$$typeof===o}var E=/\/+/g;function _(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function S(t,e,r,n,a){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var u=!1;if(null===t)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case o:case i:u=!0}}if(u)return a=a(u=t),t=""===n?"."+_(u,0):n,Array.isArray(a)?(r="",null!=t&&(r=t.replace(E,"$&/")+"/"),S(a,e,r,"",(function(t){return t}))):null!=a&&(P(a)&&(a=function(t,e){return{$$typeof:o,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(a,r+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+t)),e.push(a)),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var s=0;s<t.length;s++){var l=n+_(c=t[s],s);u+=S(c,e,r,l,a)}else if(l=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=p&&t[p]||t["@@iterator"])?t:null}(t),"function"==typeof l)for(t=l.call(t),s=0;!(c=t.next()).done;)u+=S(c=c.value,e,r,l=n+_(c,s++),a);else if("object"===c)throw e=""+t,Error(y(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e));return u}function C(t,e,r){if(null==t)return t;var n=[],o=0;return S(t,n,"","",(function(t){return e.call(r,t,o++)})),n}function A(t){if(-1===t._status){var e=t._result;e=e(),t._status=0,t._result=e,e.then((function(e){0===t._status&&(e=e.default,t._status=1,t._result=e)}),(function(e){0===t._status&&(t._status=2,t._result=e)}))}if(1===t._status)return t._result;throw t._result}var x={current:null};function R(){var t=x.current;if(null===t)throw Error(y(321));return t}},827378:(t,e,r)=>{r(541535)}}]);
/*! For license information please see 9c8e1876.7fff8bcd.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[896049],{603905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),u=l(r),y=o,d=u["".concat(i,".").concat(y)]||u[y]||p[y]||s;return r?n.createElement(d,c(c({ref:t},f),{},{components:r})):n.createElement(d,c({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,c=new Array(s);c[0]=y;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<s;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},929577:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>f});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={id:"plugin-scaffolder.listactionsresponse",title:"ListActionsResponse",description:"API reference for ListActionsResponse"},a=void 0,i={unversionedId:"reference/plugin-scaffolder.listactionsresponse",id:"reference/plugin-scaffolder.listactionsresponse",title:"ListActionsResponse",description:"API reference for ListActionsResponse",source:"@site/../docs/reference/plugin-scaffolder.listactionsresponse.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder.listactionsresponse",permalink:"/v1.12.0/docs/reference/plugin-scaffolder.listactionsresponse",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder.listactionsresponse.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder.listactionsresponse",title:"ListActionsResponse",description:"API reference for ListActionsResponse"}},l={},f=[],u={toc:f};function p(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-scaffolder"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-scaffolder"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-scaffolder.listactionsresponse"}),(0,n.kt)("inlineCode",{parentName:"a"},"ListActionsResponse"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,n.kt)("p",{parentName:"blockquote"},"use import from ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-react.listactionsresponse"}),"ListActionsResponse")," instead as this has now been moved.")),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"type ListActionsResponse = ListActionsResponseTemp;\n")),(0,n.kt)("b",null,"References:")," [ListActionsResponseTemp](/v1.12.0/docs/reference/plugin-scaffolder-react.listactionsresponse)")}p.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,s){for(var c,a,i=o(e),l=1;l<arguments.length;l++){for(var f in c=Object(arguments[l]))r.call(c,f)&&(i[f]=c[f]);if(t){a=t(c);for(var u=0;u<a.length;u++)n.call(c,a[u])&&(i[a[u]]=c[a[u]])}}return i}},541535:(e,t,r)=>{var n=r(862525),o=60103,s=60106;var c=60109,a=60110,i=60112;var l=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),s=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),c=u("react.provider"),a=u("react.context"),i=u("react.forward_ref"),u("react.suspense"),l=u("react.memo"),f=u("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function m(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||d}function v(){}function g(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var h=g.prototype=new v;h.constructor=g,n(h,m.prototype),h.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,s={},c=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)j.call(t,n)&&!k.hasOwnProperty(n)&&(s[n]=t[n]);var i=arguments.length-2;if(1===i)s.children=r;else if(1<i){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+2];s.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===s[n]&&(s[n]=i[n]);return{$$typeof:o,type:e,key:c,ref:a,props:s,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,r,n,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case s:i=!0}}if(i)return c=c(i=e),e=""===n?"."+S(i,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),A(c,t,r,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(_,"$&/")+"/")+e)),t.push(c)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var f=n+S(a=e[l],l);i+=A(a,t,r,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),l=0;!(a=e.next()).done;)i+=A(a=a.value,t,r,f=n+S(a,l++),c);else if("object"===a)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function R(e,t,r){if(null==e)return e;var n=[],o=0;return A(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function N(){var e=x.current;if(null===e)throw Error(y(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
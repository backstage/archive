/*! For license information please see 45779ecd.2af964c2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[349534],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[f]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},115559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>p});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"plugin-cloudbuild.pulltiming",title:"PullTiming",description:"API reference for PullTiming"},a=void 0,u={unversionedId:"reference/plugin-cloudbuild.pulltiming",id:"reference/plugin-cloudbuild.pulltiming",title:"PullTiming",description:"API reference for PullTiming",source:"@site/../docs/reference/plugin-cloudbuild.pulltiming.md",sourceDirName:"reference",slug:"/reference/plugin-cloudbuild.pulltiming",permalink:"/v1.12.0/docs/reference/plugin-cloudbuild.pulltiming",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-cloudbuild.pulltiming.md",tags:[],version:"current",frontMatter:{id:"plugin-cloudbuild.pulltiming",title:"PullTiming",description:"API reference for PullTiming"}},c={},p=[{value:"Properties",id:"properties",level:2}],f={toc:p};function s(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-cloudbuild"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-cloudbuild"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-cloudbuild.pulltiming"}),(0,n.kt)("inlineCode",{parentName:"a"},"PullTiming"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"export interface PullTiming \n")),(0,n.kt)("h2",o({},{id:"properties"}),"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-cloudbuild.pulltiming.endtime"}),"endTime")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-cloudbuild.pulltiming.starttime"}),"startTime")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))))}s.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var l,a,u=o(e),c=1;c<arguments.length;c++){for(var p in l=Object(arguments[c]))r.call(l,p)&&(u[p]=l[p]);if(t){a=t(l);for(var f=0;f<a.length;f++)n.call(l,a[f])&&(u[a[f]]=l[a[f]])}}return u}},541535:(e,t,r)=>{var n=r(862525),o=60103,i=60106;var l=60109,a=60110,u=60112;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),l=f("react.provider"),a=f("react.context"),u=f("react.forward_ref"),f("react.suspense"),c=f("react.memo"),p=f("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var h=v.prototype=new b;h.constructor=v,n(h,g.prototype),h.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,i={},l=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(l=""+t.key),t)O.call(t,n)&&!j.hasOwnProperty(n)&&(i[n]=t[n]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var c=Array(u),p=0;p<u;p++)c[p]=arguments[p+2];i.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===i[n]&&(i[n]=u[n]);return{$$typeof:o,type:e,key:l,ref:a,props:i,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,l){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case i:u=!0}}if(u)return l=l(u=e),e=""===n?"."+_(u,0):n,Array.isArray(l)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),S(l,t,r,"",(function(e){return e}))):null!=l&&(P(l)&&(l=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||u&&u.key===l.key?"":(""+l.key).replace(N,"$&/")+"/")+e)),t.push(l)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var p=n+_(a=e[c],c);u+=S(a,t,r,p,l)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),c=0;!(a=e.next()).done;)u+=S(a=a.value,t,r,p=n+_(a,c++),l);else if("object"===a)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function T(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function C(){var e=E.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
/*! For license information please see 4c7c34fa.db20da76.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[974509],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=n.createContext({}),i=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(f.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,f=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(r),d=o,m=u["".concat(f,".").concat(d)]||u[d]||p[d]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var f in t)hasOwnProperty.call(t,f)&&(c[f]=t[f]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},831295:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>f,toc:()=>s});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"plugin-scaffolder.scaffolderclient.streamlogs",title:"ScaffolderClient.streamLogs()",description:"API reference for ScaffolderClient.streamLogs()"},c=void 0,f={unversionedId:"reference/plugin-scaffolder.scaffolderclient.streamlogs",id:"reference/plugin-scaffolder.scaffolderclient.streamlogs",title:"ScaffolderClient.streamLogs()",description:"API reference for ScaffolderClient.streamLogs()",source:"@site/../docs/reference/plugin-scaffolder.scaffolderclient.streamlogs.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder.scaffolderclient.streamlogs",permalink:"/v1.12.0/docs/reference/plugin-scaffolder.scaffolderclient.streamlogs",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder.scaffolderclient.streamlogs.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder.scaffolderclient.streamlogs",title:"ScaffolderClient.streamLogs()",description:"API reference for ScaffolderClient.streamLogs()"}},i={},s=[{value:"Parameters",id:"parameters",level:2}],u={toc:s};function p(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-scaffolder"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-scaffolder"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-scaffolder.scaffolderclient"}),(0,n.kt)("inlineCode",{parentName:"a"},"ScaffolderClient"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-scaffolder.scaffolderclient.streamlogs"}),(0,n.kt)("inlineCode",{parentName:"a"},"streamLogs"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"streamLogs(options: ScaffolderStreamLogsOptions): Observable<LogEvent>;\n")),(0,n.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-react.scaffolderstreamlogsoptions"}),"ScaffolderStreamLogsOptions")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/types.observable"}),"Observable"),"<",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-react.logevent"}),"LogEvent"),">"))}p.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var l,c,f=o(e),i=1;i<arguments.length;i++){for(var s in l=Object(arguments[i]))r.call(l,s)&&(f[s]=l[s]);if(t){c=t(l);for(var u=0;u<c.length;u++)n.call(l,c[u])&&(f[c[u]]=l[c[u]])}}return f}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var l=60109,c=60110,f=60112;var i=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),a=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),l=u("react.provider"),c=u("react.context"),f=u("react.forward_ref"),u("react.suspense"),i=u("react.memo"),s=u("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var h=v.prototype=new b;h.constructor=v,n(h,g.prototype),h.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},l=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(l=""+t.key),t)k.call(t,n)&&!j.hasOwnProperty(n)&&(a[n]=t[n]);var f=arguments.length-2;if(1===f)a.children=r;else if(1<f){for(var i=Array(f),s=0;s<f;s++)i[s]=arguments[s+2];a.children=i}if(e&&e.defaultProps)for(n in f=e.defaultProps)void 0===a[n]&&(a[n]=f[n]);return{$$typeof:o,type:e,key:l,ref:c,props:a,_owner:O.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,l){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var f=!1;if(null===e)f=!0;else switch(c){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case o:case a:f=!0}}if(f)return l=l(f=e),e=""===n?"."+N(f,0):n,Array.isArray(l)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),_(l,t,r,"",(function(e){return e}))):null!=l&&(S(l)&&(l=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||f&&f.key===l.key?"":(""+l.key).replace(P,"$&/")+"/")+e)),t.push(l)),1;if(f=0,n=""===n?".":n+":",Array.isArray(e))for(var i=0;i<e.length;i++){var s=n+N(c=e[i],i);f+=_(c,t,r,s,l)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),i=0;!(c=e.next()).done;)f+=_(c=c.value,t,r,s=n+N(c,i++),l);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return f}function C(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function L(){var e=x.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
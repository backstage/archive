/*! For license information please see be4cd15f.c7d23da9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[148927],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,y=f["".concat(p,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[f]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},377988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>u});n(827378);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"backend-plugin-api.extensionpointconfig",title:"ExtensionPointConfig",description:"API reference for ExtensionPointConfig"},c=void 0,p={unversionedId:"reference/backend-plugin-api.extensionpointconfig",id:"reference/backend-plugin-api.extensionpointconfig",title:"ExtensionPointConfig",description:"API reference for ExtensionPointConfig",source:"@site/../docs/reference/backend-plugin-api.extensionpointconfig.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.extensionpointconfig",permalink:"/v1.12.0/docs/reference/backend-plugin-api.extensionpointconfig",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.extensionpointconfig.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.extensionpointconfig",title:"ExtensionPointConfig",description:"API reference for ExtensionPointConfig"}},l={},u=[{value:"Properties",id:"properties",level:2}],f={toc:u};function s(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/backend-plugin-api"}),(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/backend-plugin-api"))," ",">"," ",(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/backend-plugin-api.extensionpointconfig"}),(0,r.kt)("inlineCode",{parentName:"a"},"ExtensionPointConfig"))),(0,r.kt)("p",null,"The configuration options passed to ",(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/backend-plugin-api.createextensionpoint"}),"createExtensionPoint()"),"."),(0,r.kt)("b",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"export interface ExtensionPointConfig \n")),(0,r.kt)("h2",o({},{id:"properties"}),"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("a",o({parentName:"td"},{href:"/v1.12.0/docs/reference/backend-plugin-api.extensionpointconfig.id"}),"id")),(0,r.kt)("td",o({parentName:"tr"},{align:null})),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"The ID of this extension point.")))))}s.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,c,p=o(e),l=1;l<arguments.length;l++){for(var u in a=Object(arguments[l]))n.call(a,u)&&(p[u]=a[u]);if(t){c=t(a);for(var f=0;f<c.length;f++)r.call(a,c[f])&&(p[c[f]]=a[c[f]])}}return p}},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;var a=60109,c=60110,p=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),a=f("react.provider"),c=f("react.context"),p=f("react.forward_ref"),f("react.suspense"),l=f("react.memo"),u=f("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||y}function m(){}function h(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var v=h.prototype=new m;v.constructor=h,r(v,b.prototype),v.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,i={},a=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)O.call(t,r)&&!j.hasOwnProperty(r)&&(i[r]=t[r]);var p=arguments.length-2;if(1===p)i.children=n;else if(1<p){for(var l=Array(p),u=0;u<p;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in p=e.defaultProps)void 0===i[r]&&(i[r]=p[r]);return{$$typeof:o,type:e,key:a,ref:c,props:i,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var x=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,r,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var p=!1;if(null===e)p=!0;else switch(c){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case o:case i:p=!0}}if(p)return a=a(p=e),e=""===r?"."+N(p,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(x,"$&/")+"/"),E(a,t,n,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||p&&p.key===a.key?"":(""+a.key).replace(x,"$&/")+"/")+e)),t.push(a)),1;if(p=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+N(c=e[l],l);p+=E(c,t,n,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(c=e.next()).done;)p+=E(c=c.value,t,n,u=r+N(c,l++),a);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return p}function _(e,t,n){if(null==e)return e;var r=[],o=0;return E(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function T(){var e=C.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
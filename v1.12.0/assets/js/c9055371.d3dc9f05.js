/*! For license information please see c9055371.d3dc9f05.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[126286],{603905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(t),d=o,y=s["".concat(i,".").concat(d)]||s[d]||f[d]||a;return t?n.createElement(y,p(p({ref:r},u),{},{components:t})):n.createElement(y,p({ref:r},u))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[s]="string"==typeof e?e:o,p[1]=c;for(var l=2;l<a;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},284740:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>i,toc:()=>u});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const p={id:"plugin-techdocs-node.directorypreparer.prepare",title:"DirectoryPreparer.prepare()",description:"API reference for DirectoryPreparer.prepare()"},c=void 0,i={unversionedId:"reference/plugin-techdocs-node.directorypreparer.prepare",id:"reference/plugin-techdocs-node.directorypreparer.prepare",title:"DirectoryPreparer.prepare()",description:"API reference for DirectoryPreparer.prepare()",source:"@site/../docs/reference/plugin-techdocs-node.directorypreparer.prepare.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-node.directorypreparer.prepare",permalink:"/v1.12.0/docs/reference/plugin-techdocs-node.directorypreparer.prepare",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-techdocs-node.directorypreparer.prepare.md",tags:[],version:"current",frontMatter:{id:"plugin-techdocs-node.directorypreparer.prepare",title:"DirectoryPreparer.prepare()",description:"API reference for DirectoryPreparer.prepare()"}},l={},u=[{value:"Parameters",id:"parameters",level:2}],s={toc:u};function f(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-techdocs-node"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-techdocs-node"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-techdocs-node.directorypreparer"}),(0,n.kt)("inlineCode",{parentName:"a"},"DirectoryPreparer"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-techdocs-node.directorypreparer.prepare"}),(0,n.kt)("inlineCode",{parentName:"a"},"prepare"))),(0,n.kt)("p",null,"Given an Entity definition from the Software Catalog, go and prepare a directory with contents from the location in temporary storage and return the path."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"prepare(entity: Entity, options?: PreparerOptions): Promise<PreparerResponse>;\n")),(0,n.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"entity"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/v1.12.0/docs/reference/catalog-model.entity"}),"Entity")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"The entity from the Software Catalog")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-techdocs-node.prepareroptions"}),"PreparerOptions")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)")," If etag is provided, it will be used to check if the target has updated since the last build.")))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-techdocs-node.preparerresponse"}),"PreparerResponse"),">"))}f.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var p,c,i=o(e),l=1;l<arguments.length;l++){for(var u in p=Object(arguments[l]))t.call(p,u)&&(i[u]=p[u]);if(r){c=r(p);for(var s=0;s<c.length;s++)n.call(p,c[s])&&(i[c[s]]=p[c[s]])}}return i}},541535:(e,r,t)=>{var n=t(862525),o=60103,a=60106;var p=60109,c=60110,i=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),a=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),p=s("react.provider"),c=s("react.context"),i=s("react.forward_ref"),s("react.suspense"),l=s("react.memo"),u=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}function g(){}function b(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var v=b.prototype=new g;v.constructor=b,n(v,h.prototype),v.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,a={},p=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(p=""+r.key),r)O.call(r,n)&&!j.hasOwnProperty(n)&&(a[n]=r[n]);var i=arguments.length-2;if(1===i)a.children=t;else if(1<i){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:o,type:e,key:p,ref:c,props:a,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function _(e,r,t,n,p){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case a:i=!0}}if(i)return p=p(i=e),e=""===n?"."+S(i,0):n,Array.isArray(p)?(t="",null!=e&&(t=e.replace(N,"$&/")+"/"),_(p,r,t,"",(function(e){return e}))):null!=p&&(P(p)&&(p=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(p,t+(!p.key||i&&i.key===p.key?"":(""+p.key).replace(N,"$&/")+"/")+e)),r.push(p)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=n+S(c=e[l],l);i+=_(c,r,t,u,p)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(c=e.next()).done;)i+=_(c=c.value,r,t,u=n+S(c,l++),p);else if("object"===c)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function E(e,r,t){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function D(){var e=x.current;if(null===e)throw Error(d(321));return e}},827378:(e,r,t)=>{t(541535)}}]);
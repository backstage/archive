/*! For license information please see 11ad4899.fd6f4759.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[369690],{603905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),i=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(p.Provider,{value:r},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=i(t),m=o,y=l["".concat(p,".").concat(m)]||l[m]||f[m]||s;return t?n.createElement(y,a(a({ref:r},u),{},{components:t})):n.createElement(y,a({ref:r},u))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[l]="string"==typeof e?e:o,a[1]=c;for(var i=2;i<s;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},134044:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>u});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={id:"errors.responseerror.fromresponse",title:"ResponseError.fromResponse()",description:"API reference for ResponseError.fromResponse()"},c=void 0,p={unversionedId:"reference/errors.responseerror.fromresponse",id:"reference/errors.responseerror.fromresponse",title:"ResponseError.fromResponse()",description:"API reference for ResponseError.fromResponse()",source:"@site/../docs/reference/errors.responseerror.fromresponse.md",sourceDirName:"reference",slug:"/reference/errors.responseerror.fromresponse",permalink:"/v1.12.0/docs/reference/errors.responseerror.fromresponse",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/errors.responseerror.fromresponse.md",tags:[],version:"current",frontMatter:{id:"errors.responseerror.fromresponse",title:"ResponseError.fromResponse()",description:"API reference for ResponseError.fromResponse()"}},i={},u=[{value:"Parameters",id:"parameters",level:2}],l={toc:u};function f(e){var{components:r}=e,t=s(e,["components"]);return(0,n.kt)("wrapper",o({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/errors"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/errors"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/errors.responseerror"}),(0,n.kt)("inlineCode",{parentName:"a"},"ResponseError"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/errors.responseerror.fromresponse"}),(0,n.kt)("inlineCode",{parentName:"a"},"fromResponse"))),(0,n.kt)("p",null,"Constructs a ResponseError based on a failed response."),(0,n.kt)("p",null,"Assumes that the response has already been checked to be not ok. This function consumes the body of the response, and assumes that it hasn't been consumed before."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"static fromResponse(response: ConsumedResponse & {\n        text(): Promise<string>;\n    }): Promise<ResponseError>;\n")),(0,n.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"response"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/v1.12.0/docs/reference/errors.consumedresponse"}),"ConsumedResponse")," ","&"," { text(): Promise","<","string",">","; }"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/errors.responseerror"}),"ResponseError"),">"))}f.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,s){for(var a,c,p=o(e),i=1;i<arguments.length;i++){for(var u in a=Object(arguments[i]))t.call(a,u)&&(p[u]=a[u]);if(r){c=r(a);for(var l=0;l<c.length;l++)n.call(a,c[l])&&(p[c[l]]=a[c[l]])}}return p}},541535:(e,r,t)=>{var n=t(862525),o=60103,s=60106;var a=60109,c=60110,p=60112;var i=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),s=l("react.portal"),l("react.fragment"),l("react.strict_mode"),l("react.profiler"),a=l("react.provider"),c=l("react.context"),p=l("react.forward_ref"),l("react.suspense"),i=l("react.memo"),u=l("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function b(e,r,t){this.props=e,this.context=r,this.refs=d,this.updater=t||y}function h(){}function v(e,r,t){this.props=e,this.context=r,this.refs=d,this.updater=t||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var g=v.prototype=new h;g.constructor=v,n(g,b.prototype),g.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,s={},a=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(a=""+r.key),r)O.call(r,n)&&!j.hasOwnProperty(n)&&(s[n]=r[n]);var p=arguments.length-2;if(1===p)s.children=t;else if(1<p){for(var i=Array(p),u=0;u<p;u++)i[u]=arguments[u+2];s.children=i}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===s[n]&&(s[n]=p[n]);return{$$typeof:o,type:e,key:a,ref:c,props:s,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g;function N(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function R(e,r,t,n,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var p=!1;if(null===e)p=!0;else switch(c){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case o:case s:p=!0}}if(p)return a=a(p=e),e=""===n?"."+N(p,0):n,Array.isArray(a)?(t="",null!=e&&(t=e.replace(E,"$&/")+"/"),R(a,r,t,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||p&&p.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),r.push(a)),1;if(p=0,n=""===n?".":n+":",Array.isArray(e))for(var i=0;i<e.length;i++){var u=n+N(c=e[i],i);p+=R(c,r,t,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),i=0;!(c=e.next()).done;)p+=R(c=c.value,r,t,u=n+N(c,i++),a);else if("object"===c)throw r=""+e,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return p}function _(e,r,t){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function S(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function C(){var e=x.current;if(null===e)throw Error(m(321));return e}},827378:(e,r,t)=>{t(541535)}}]);
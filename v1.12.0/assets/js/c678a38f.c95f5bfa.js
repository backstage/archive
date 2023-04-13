/*! For license information please see c678a38f.c95f5bfa.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[919674],{603905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(667294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=r.createContext({}),l=function(e){var n=r.useContext(f),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(f.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,f=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(t),g=o,d=s["".concat(f,".").concat(g)]||s[g]||p[g]||i;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var c={};for(var f in n)hasOwnProperty.call(n,f)&&(c[f]=n[f]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},544969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>f,toc:()=>u});t(827378);var r=t(603905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={id:"plugin-jenkins-backend.jenkinsconfig.fromconfig",title:"JenkinsConfig.fromConfig()",description:"API reference for JenkinsConfig.fromConfig()"},c=void 0,f={unversionedId:"reference/plugin-jenkins-backend.jenkinsconfig.fromconfig",id:"reference/plugin-jenkins-backend.jenkinsconfig.fromconfig",title:"JenkinsConfig.fromConfig()",description:"API reference for JenkinsConfig.fromConfig()",source:"@site/../docs/reference/plugin-jenkins-backend.jenkinsconfig.fromconfig.md",sourceDirName:"reference",slug:"/reference/plugin-jenkins-backend.jenkinsconfig.fromconfig",permalink:"/v1.12.0/docs/reference/plugin-jenkins-backend.jenkinsconfig.fromconfig",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-jenkins-backend.jenkinsconfig.fromconfig.md",tags:[],version:"current",frontMatter:{id:"plugin-jenkins-backend.jenkinsconfig.fromconfig",title:"JenkinsConfig.fromConfig()",description:"API reference for JenkinsConfig.fromConfig()"}},l={},u=[{value:"Parameters",id:"parameters",level:2}],s={toc:u};function p(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",o({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-jenkins-backend"}),(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-jenkins-backend"))," ",">"," ",(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-jenkins-backend.jenkinsconfig"}),(0,r.kt)("inlineCode",{parentName:"a"},"JenkinsConfig"))," ",">"," ",(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-jenkins-backend.jenkinsconfig.fromconfig"}),(0,r.kt)("inlineCode",{parentName:"a"},"fromConfig"))),(0,r.kt)("p",null,"Read all Jenkins instance configurations."),(0,r.kt)("b",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"static fromConfig(config: Config): JenkinsConfig;\n")),(0,r.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"config"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),(0,r.kt)("a",o({parentName:"td"},{href:"/v1.12.0/docs/reference/config.config"}),"Config")),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Root configuration")))),(0,r.kt)("b",null,"Returns:"),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-jenkins-backend.jenkinsconfig"}),"JenkinsConfig")),(0,r.kt)("p",null,"A JenkinsConfig that contains all configured Jenkins instances."))}p.isMDXComponent=!0},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,c,f=o(e),l=1;l<arguments.length;l++){for(var u in a=Object(arguments[l]))t.call(a,u)&&(f[u]=a[u]);if(n){c=n(a);for(var s=0;s<c.length;s++)r.call(a,c[s])&&(f[c[s]]=a[c[s]])}}return f}},541535:(e,n,t)=>{var r=t(862525),o=60103,i=60106;var a=60109,c=60110,f=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),i=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),a=s("react.provider"),c=s("react.context"),f=s("react.forward_ref"),s("react.suspense"),l=s("react.memo"),u=s("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||d}function k(){}function b(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||d}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=y.prototype;var v=b.prototype=new k;v.constructor=b,r(v,y.prototype),v.isPureReactComponent=!0;var h={current:null},j=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function w(e,n,t){var r,i={},a=null,c=null;if(null!=n)for(r in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(a=""+n.key),n)j.call(n,r)&&!O.hasOwnProperty(r)&&(i[r]=n[r]);var f=arguments.length-2;if(1===f)i.children=t;else if(1<f){for(var l=Array(f),u=0;u<f;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in f=e.defaultProps)void 0===i[r]&&(i[r]=f[r]);return{$$typeof:o,type:e,key:a,ref:c,props:i,_owner:h.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function N(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function _(e,n,t,r,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var f=!1;if(null===e)f=!0;else switch(c){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case o:case i:f=!0}}if(f)return a=a(f=e),e=""===r?"."+N(f,0):r,Array.isArray(a)?(t="",null!=e&&(t=e.replace(P,"$&/")+"/"),_(a,n,t,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||f&&f.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),n.push(a)),1;if(f=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+N(c=e[l],l);f+=_(c,n,t,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(c=e.next()).done;)f+=_(c=c.value,n,t,u=r+N(c,l++),a);else if("object"===c)throw n=""+e,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return f}function S(e,n,t){if(null==e)return e;var r=[],o=0;return _(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function E(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function J(){var e=x.current;if(null===e)throw Error(g(321));return e}},827378:(e,n,t)=>{t(541535)}}]);
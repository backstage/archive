/*! For license information please see 89deedb6.2b940a34.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[534099],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,g=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(g,s(s({ref:t},l),{},{components:r})):n.createElement(g,s({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[f]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},200851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>f});r(827378);var n=r(603905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher.fromconfig",title:"AwsSqsConsumingEventPublisher.fromConfig()",description:"API reference for AwsSqsConsumingEventPublisher.fromConfig()"},c=void 0,u={unversionedId:"reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher.fromconfig",id:"reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher.fromconfig",title:"AwsSqsConsumingEventPublisher.fromConfig()",description:"API reference for AwsSqsConsumingEventPublisher.fromConfig()",source:"@site/../docs/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher.fromconfig.md",sourceDirName:"reference",slug:"/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher.fromconfig",permalink:"/v1.13.0/docs/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher.fromconfig",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher.fromconfig.md",tags:[],version:"current",frontMatter:{id:"plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher.fromconfig",title:"AwsSqsConsumingEventPublisher.fromConfig()",description:"API reference for AwsSqsConsumingEventPublisher.fromConfig()"}},l={},f=[{value:"Parameters",id:"parameters",level:2}],p={toc:f};function m(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/reference/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/reference/plugin-events-backend-module-aws-sqs"},(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-events-backend-module-aws-sqs"))," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher"},(0,n.kt)("inlineCode",{parentName:"a"},"AwsSqsConsumingEventPublisher"))," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher.fromconfig"},(0,n.kt)("inlineCode",{parentName:"a"},"fromConfig"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"static fromConfig(env: {\n        config: Config;\n        logger: Logger;\n        scheduler: PluginTaskScheduler;\n    }): AwsSqsConsumingEventPublisher[];\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"env"),(0,n.kt)("td",{parentName:"tr",align:null},"{ config: ",(0,n.kt)("a",{parentName:"td",href:"/v1.13.0/docs/reference/config.config"},"Config"),"; logger: Logger; scheduler: ",(0,n.kt)("a",{parentName:"td",href:"/v1.13.0/docs/reference/backend-tasks.plugintaskscheduler"},"PluginTaskScheduler"),"; }"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher"},"AwsSqsConsumingEventPublisher"),"[","]"))}m.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var s,i,c=o(e),u=1;u<arguments.length;u++){for(var l in s=Object(arguments[u]))r.call(s,l)&&(c[l]=s[l]);if(t){i=t(s);for(var f=0;f<i.length;f++)n.call(s,i[f])&&(c[i[f]]=s[i[f]])}}return c}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var s=60109,i=60110,c=60112;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),s=f("react.provider"),i=f("react.context"),c=f("react.forward_ref"),f("react.suspense"),u=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function d(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||g}function y(){}function v(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||g}d.prototype.isReactComponent={},d.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},d.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=d.prototype;var h=v.prototype=new y;h.constructor=v,n(h,d.prototype),h.isPureReactComponent=!0;var w={current:null},k=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,a={},s=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)k.call(t,n)&&!O.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:s,ref:i,props:a,_owner:w.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var q=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return s=s(c=e),e=""===n?"."+S(c,0):n,Array.isArray(s)?(r="",null!=e&&(r=e.replace(q,"$&/")+"/"),C(s,t,r,"",(function(e){return e}))):null!=s&&(P(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(q,"$&/")+"/")+e)),t.push(s)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=n+S(i=e[u],u);c+=C(i,t,r,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)c+=C(i=i.value,t,r,l=n+S(i,u++),s);else if("object"===i)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function E(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function N(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function A(){var e=_.current;if(null===e)throw Error(m(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
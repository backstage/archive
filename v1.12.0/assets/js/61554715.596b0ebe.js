/*! For license information please see 61554715.596b0ebe.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[91055],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=s(r),h=o,g=p["".concat(c,".").concat(h)]||p[h]||f[h]||i;return r?n.createElement(g,u(u({ref:t},l),{},{components:r})):n.createElement(g,u({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,u[1]=a;for(var s=2;s<i;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},866369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>l});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const u={id:"plugin-lighthouse-common.lighthouseapi",title:"LighthouseApi",description:"API reference for LighthouseApi"},a=void 0,c={unversionedId:"reference/plugin-lighthouse-common.lighthouseapi",id:"reference/plugin-lighthouse-common.lighthouseapi",title:"LighthouseApi",description:"API reference for LighthouseApi",source:"@site/../docs/reference/plugin-lighthouse-common.lighthouseapi.md",sourceDirName:"reference",slug:"/reference/plugin-lighthouse-common.lighthouseapi",permalink:"/v1.12.0/docs/reference/plugin-lighthouse-common.lighthouseapi",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-lighthouse-common.lighthouseapi.md",tags:[],version:"current",frontMatter:{id:"plugin-lighthouse-common.lighthouseapi",title:"LighthouseApi",description:"API reference for LighthouseApi"}},s={},l=[],p={toc:l};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-lighthouse-common"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-lighthouse-common"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-lighthouse-common.lighthouseapi"}),(0,n.kt)("inlineCode",{parentName:"a"},"LighthouseApi"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"type LighthouseApi = {\n    url: string;\n    getWebsiteList: (listOptions: LASListRequest) => Promise<WebsiteListResponse>;\n    getWebsiteForAuditId: (auditId: string) => Promise<Website>;\n    triggerAudit: (payload: TriggerAuditPayload) => Promise<Audit>;\n    getWebsiteByUrl: (websiteUrl: string) => Promise<Website>;\n};\n")),(0,n.kt)("b",null,"References:")," [LASListRequest](/v1.12.0/docs/reference/plugin-lighthouse-common.laslistrequest), [WebsiteListResponse](/v1.12.0/docs/reference/plugin-lighthouse-common.websitelistresponse), [Website](/v1.12.0/docs/reference/plugin-lighthouse-common.website), [TriggerAuditPayload](/v1.12.0/docs/reference/plugin-lighthouse-common.triggerauditpayload), [Audit](/v1.12.0/docs/reference/plugin-lighthouse-common.audit)")}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var u,a,c=o(e),s=1;s<arguments.length;s++){for(var l in u=Object(arguments[s]))r.call(u,l)&&(c[l]=u[l]);if(t){a=t(u);for(var p=0;p<a.length;p++)n.call(u,a[p])&&(c[a[p]]=u[a[p]])}}return c}},541535:(e,t,r)=>{var n=r(862525),o=60103,i=60106;var u=60109,a=60110,c=60112;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),i=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),u=p("react.provider"),a=p("react.context"),c=p("react.forward_ref"),p("react.suspense"),s=p("react.memo"),l=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||g}function d(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||g}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},d.prototype=m.prototype;var v=b.prototype=new d;v.constructor=b,n(v,m.prototype),v.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,i={},u=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)j.call(t,n)&&!w.hasOwnProperty(n)&&(i[n]=t[n]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===i[n]&&(i[n]=c[n]);return{$$typeof:o,type:e,key:u,ref:a,props:i,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var A=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return u=u(c=e),e=""===n?"."+S(c,0):n,Array.isArray(u)?(r="",null!=e&&(r=e.replace(A,"$&/")+"/"),_(u,t,r,"",(function(e){return e}))):null!=u&&(P(u)&&(u=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,r+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(A,"$&/")+"/")+e)),t.push(u)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=n+S(a=e[s],s);c+=_(a,t,r,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(a=e.next()).done;)c+=_(a=a.value,t,r,l=n+S(a,s++),u);else if("object"===a)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function E(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var L={current:null};function C(){var e=L.current;if(null===e)throw Error(h(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
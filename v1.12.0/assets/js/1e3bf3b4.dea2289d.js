/*! For license information please see 1e3bf3b4.dea2289d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[758816],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),y=o,h=f["".concat(p,".").concat(y)]||f[y]||l[y]||a;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[f]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},505035:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>p,toc:()=>s});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"core-app-api.oauthapicreateoptions",title:"OAuthApiCreateOptions",description:"API reference for OAuthApiCreateOptions"},c=void 0,p={unversionedId:"reference/core-app-api.oauthapicreateoptions",id:"reference/core-app-api.oauthapicreateoptions",title:"OAuthApiCreateOptions",description:"API reference for OAuthApiCreateOptions",source:"@site/../docs/reference/core-app-api.oauthapicreateoptions.md",sourceDirName:"reference",slug:"/reference/core-app-api.oauthapicreateoptions",permalink:"/v1.12.0/docs/reference/core-app-api.oauthapicreateoptions",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.oauthapicreateoptions.md",tags:[],version:"current",frontMatter:{id:"core-app-api.oauthapicreateoptions",title:"OAuthApiCreateOptions",description:"API reference for OAuthApiCreateOptions"}},u={},s=[],f={toc:s};function l(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/core-app-api"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/core-app-api"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/core-app-api.oauthapicreateoptions"}),(0,n.kt)("inlineCode",{parentName:"a"},"OAuthApiCreateOptions"))),(0,n.kt)("p",null,"Create options for OAuth APIs."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"type OAuthApiCreateOptions = AuthApiCreateOptions & {\n    oauthRequestApi: OAuthRequestApi;\n    defaultScopes?: string[];\n};\n")),(0,n.kt)("b",null,"References:")," [AuthApiCreateOptions](/v1.12.0/docs/reference/core-app-api.authapicreateoptions), [OAuthRequestApi](/v1.12.0/docs/reference/core-plugin-api.oauthrequestapi)")}l.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,p=o(e),u=1;u<arguments.length;u++){for(var s in i=Object(arguments[u]))r.call(i,s)&&(p[s]=i[s]);if(t){c=t(i);for(var f=0;f<c.length;f++)n.call(i,c[f])&&(p[c[f]]=i[c[f]])}}return p}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var i=60109,c=60110,p=60112;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),i=f("react.provider"),c=f("react.context"),p=f("react.forward_ref"),f("react.suspense"),u=f("react.memo"),s=f("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function b(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||h}function O(){}function m(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=b.prototype;var v=m.prototype=new O;v.constructor=m,n(v,b.prototype),v.isPureReactComponent=!0;var g={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,n)&&!k.hasOwnProperty(n)&&(a[n]=t[n]);var p=arguments.length-2;if(1===p)a.children=r;else if(1<p){for(var u=Array(p),s=0;s<p;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===a[n]&&(a[n]=p[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:g.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var p=!1;if(null===e)p=!0;else switch(c){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case o:case a:p=!0}}if(p)return i=i(p=e),e=""===n?"."+C(p,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),_(i,t,r,"",(function(e){return e}))):null!=i&&(A(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||p&&p.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(p=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=n+C(c=e[u],u);p+=_(c,t,r,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(c=e.next()).done;)p+=_(c=c.value,t,r,s=n+C(c,u++),i);else if("object"===c)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return p}function S(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function N(){var e=x.current;if(null===e)throw Error(y(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
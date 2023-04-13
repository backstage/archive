/*! For license information please see 054b626a.7b835bca.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[40167],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,y=f["".concat(i,".").concat(m)]||f[m]||p[m]||c;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[f]="string"==typeof e?e:o,a[1]=u;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},187620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});n(827378);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"core-components.usecontent",title:"useContent()",description:"API reference for useContent()"},u=void 0,i={unversionedId:"reference/core-components.usecontent",id:"reference/core-components.usecontent",title:"useContent()",description:"API reference for useContent()",source:"@site/../docs/reference/core-components.usecontent.md",sourceDirName:"reference",slug:"/reference/core-components.usecontent",permalink:"/v1.12.0/docs/reference/core-components.usecontent",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-components.usecontent.md",tags:[],version:"current",frontMatter:{id:"core-components.usecontent",title:"useContent()",description:"API reference for useContent()"}},l={},s=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2}],f={toc:s};function p(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)("wrapper",o({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/core-components"}),(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/core-components"))," ",">"," ",(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/core-components.usecontent"}),(0,r.kt)("inlineCode",{parentName:"a"},"useContent"))),(0,r.kt)("p",null,"This hook provides a react ref to the main content. Allows to set an element as the main content and focus on that component."),(0,r.kt)("p",null,"*","Note: If ",(0,r.kt)("inlineCode",{parentName:"p"},"contentRef")," is not set ",(0,r.kt)("inlineCode",{parentName:"p"},"focusContent")," is noop. ",(0,r.kt)("inlineCode",{parentName:"p"},"Content")," component sets this ref automatically","*"),(0,r.kt)("b",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"function useContent(): {\n    focusContent: () => void;\n    contentRef: React.MutableRefObject<HTMLElement | null> | undefined;\n};\n")),(0,r.kt)("b",null,"Returns:"),(0,r.kt)("p",null,"{ focusContent: () =",">"," void; contentRef: React.MutableRefObject","<","HTMLElement ","|"," null",">"," ","|"," undefined; }"),(0,r.kt)("h2",o({},{id:"example-1"}),"Example 1"),(0,r.kt)("p",null,"Focus current content"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"})," const { focusContent} = useContent();\n...\n <Button onClick={focusContent}>\n    focus main content\n </Button>\n")),(0,r.kt)("h2",o({},{id:"example-2"}),"Example 2"),(0,r.kt)("p",null,"Set the reference to an Html element"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{})," const { contentRef } = useContent();\n...\n <article ref={contentRef} tabIndex={-1}>Main Content</article>\n")))}p.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,c){for(var a,u,i=o(e),l=1;l<arguments.length;l++){for(var s in a=Object(arguments[l]))n.call(a,s)&&(i[s]=a[s]);if(t){u=t(a);for(var f=0;f<u.length;f++)r.call(a,u[f])&&(i[u[f]]=a[u[f]])}}return i}},541535:(e,t,n)=>{var r=n(862525),o=60103,c=60106;var a=60109,u=60110,i=60112;var l=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),c=f("react.portal"),f("react.fragment"),f("react.strict_mode"),f("react.profiler"),a=f("react.provider"),u=f("react.context"),i=f("react.forward_ref"),f("react.suspense"),l=f("react.memo"),s=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function b(e,t,n){this.props=e,this.context=t,this.refs=d,this.updater=n||y}function v(){}function h(e,t,n){this.props=e,this.context=t,this.refs=d,this.updater=n||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var g=h.prototype=new v;g.constructor=h,r(g,b.prototype),g.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,c={},a=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,r)&&!j.hasOwnProperty(r)&&(c[r]=t[r]);var i=arguments.length-2;if(1===i)c.children=n;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];c.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===c[r]&&(c[r]=i[r]);return{$$typeof:o,type:e,key:a,ref:u,props:c,_owner:O.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,n,r,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case c:i=!0}}if(i)return a=a(i=e),e=""===r?"."+x(i,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),_(a,t,n,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(i=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=r+x(u=e[l],l);i+=_(u,t,n,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),l=0;!(u=e.next()).done;)i+=_(u=u.value,t,n,s=r+x(u,l++),a);else if("object"===u)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function S(e,t,n){if(null==e)return e;var r=[],o=0;return _(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var N={current:null};function R(){var e=N.current;if(null===e)throw Error(m(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
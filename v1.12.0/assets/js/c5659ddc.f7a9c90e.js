/*! For license information please see c5659ddc.f7a9c90e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[262141],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(r),y=a,v=p["".concat(u,".").concat(y)]||p[y]||f[y]||o;return r?n.createElement(v,l(l({ref:t},s),{},{components:r})):n.createElement(v,l({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=y;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},392628:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>s});r(827378);var n=r(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={id:"plugin-vault.isvaultavailable",title:"isVaultAvailable()",description:"API reference for isVaultAvailable()"},i=void 0,u={unversionedId:"reference/plugin-vault.isvaultavailable",id:"reference/plugin-vault.isvaultavailable",title:"isVaultAvailable()",description:"API reference for isVaultAvailable()",source:"@site/../docs/reference/plugin-vault.isvaultavailable.md",sourceDirName:"reference",slug:"/reference/plugin-vault.isvaultavailable",permalink:"/v1.12.0/docs/reference/plugin-vault.isvaultavailable",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-vault.isvaultavailable.md",tags:[],version:"current",frontMatter:{id:"plugin-vault.isvaultavailable",title:"isVaultAvailable()",description:"API reference for isVaultAvailable()"}},c={},s=[{value:"Parameters",id:"parameters",level:2}],p={toc:s};function f(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-vault"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-vault"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-vault.isvaultavailable"}),(0,n.kt)("inlineCode",{parentName:"a"},"isVaultAvailable"))),(0,n.kt)("p",null,"Checks if an entity contains the annotation for Vault."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"function isVaultAvailable(entity: Entity): boolean;\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"entity"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/catalog-model.entity"}),"Entity")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The entity to check if the annotation exists")))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"boolean"),(0,n.kt)("p",null,"If the annotation exists or not"))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var l,i,u=a(e),c=1;c<arguments.length;c++){for(var s in l=Object(arguments[c]))r.call(l,s)&&(u[s]=l[s]);if(t){i=t(l);for(var p=0;p<i.length;p++)n.call(l,i[p])&&(u[i[p]]=l[i[p]])}}return u}},541535:(e,t,r)=>{var n=r(862525),a=60103,o=60106;var l=60109,i=60110,u=60112;var c=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),l=p("react.provider"),i=p("react.context"),u=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),s=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function d(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||v}function m(){}function g(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||v}d.prototype.isReactComponent={},d.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},d.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=d.prototype;var h=g.prototype=new m;h.constructor=g,n(h,d.prototype),h.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,o={},l=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)O.call(t,n)&&!j.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:l,ref:i,props:o,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var _=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case o:u=!0}}if(u)return l=l(u=e),e=""===n?"."+N(u,0):n,Array.isArray(l)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),S(l,t,r,"",(function(e){return e}))):null!=l&&(P(l)&&(l=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||u&&u.key===l.key?"":(""+l.key).replace(_,"$&/")+"/")+e)),t.push(l)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var s=n+N(i=e[c],c);u+=S(i,t,r,s,l)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),c=0;!(i=e.next()).done;)u+=S(i=i.value,t,r,s=n+N(i,c++),l);else if("object"===i)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function E(e,t,r){if(null==e)return e;var n=[],a=0;return S(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function C(){var e=A.current;if(null===e)throw Error(y(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
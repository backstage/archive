/*! For license information please see 3b64201f.67e18e4b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[428744],{603905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),i=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=i(e.components);return n.createElement(p.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=i(t),y=o,d=s["".concat(p,".").concat(y)]||s[y]||f[y]||c;return t?n.createElement(d,a(a({ref:r},l),{},{components:t})):n.createElement(d,a({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=y;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u[s]="string"==typeof e?e:o,a[1]=u;for(var i=2;i<c;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},171648:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>l});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={id:"plugin-explore.groupsexplorercontent",title:"GroupsExplorerContent",description:"API reference for GroupsExplorerContent"},u=void 0,p={unversionedId:"reference/plugin-explore.groupsexplorercontent",id:"reference/plugin-explore.groupsexplorercontent",title:"GroupsExplorerContent",description:"API reference for GroupsExplorerContent",source:"@site/../docs/reference/plugin-explore.groupsexplorercontent.md",sourceDirName:"reference",slug:"/reference/plugin-explore.groupsexplorercontent",permalink:"/v1.12.0/docs/reference/plugin-explore.groupsexplorercontent",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-explore.groupsexplorercontent.md",tags:[],version:"current",frontMatter:{id:"plugin-explore.groupsexplorercontent",title:"GroupsExplorerContent",description:"API reference for GroupsExplorerContent"}},i={},l=[],s={toc:l};function f(e){var{components:r}=e,t=c(e,["components"]);return(0,n.kt)("wrapper",o({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-explore"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-explore"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-explore.groupsexplorercontent"}),(0,n.kt)("inlineCode",{parentName:"a"},"GroupsExplorerContent"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"GroupsExplorerContent: (props: {\n    title?: string | undefined;\n}) => JSX.Element\n")))}f.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,c){for(var a,u,p=o(e),i=1;i<arguments.length;i++){for(var l in a=Object(arguments[i]))t.call(a,l)&&(p[l]=a[l]);if(r){u=r(a);for(var s=0;s<u.length;s++)n.call(a,u[s])&&(p[u[s]]=a[u[s]])}}return p}},541535:(e,r,t)=>{var n=t(862525),o=60103,c=60106;var a=60109,u=60110,p=60112;var i=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),c=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),a=s("react.provider"),u=s("react.context"),p=s("react.forward_ref"),s("react.suspense"),i=s("react.memo"),l=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function b(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||d}function m(){}function v(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||d}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var h=v.prototype=new m;h.constructor=v,n(h,b.prototype),h.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,c={},a=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(a=""+r.key),r)j.call(r,n)&&!x.hasOwnProperty(n)&&(c[n]=r[n]);var p=arguments.length-2;if(1===p)c.children=t;else if(1<p){for(var i=Array(p),l=0;l<p;l++)i[l]=arguments[l+2];c.children=i}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===c[n]&&(c[n]=p[n]);return{$$typeof:o,type:e,key:a,ref:u,props:c,_owner:O.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function E(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function _(e,r,t,n,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var p=!1;if(null===e)p=!0;else switch(u){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case o:case c:p=!0}}if(p)return a=a(p=e),e=""===n?"."+E(p,0):n,Array.isArray(a)?(t="",null!=e&&(t=e.replace(P,"$&/")+"/"),_(a,r,t,"",(function(e){return e}))):null!=a&&(k(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||p&&p.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),r.push(a)),1;if(p=0,n=""===n?".":n+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=n+E(u=e[i],i);p+=_(u,r,t,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(u=e.next()).done;)p+=_(u=u.value,r,t,l=n+E(u,i++),a);else if("object"===u)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return p}function S(e,r,t){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var N={current:null};function $(){var e=N.current;if(null===e)throw Error(y(321));return e}},827378:(e,r,t)=>{t(541535)}}]);
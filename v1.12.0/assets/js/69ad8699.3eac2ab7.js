/*! For license information please see 69ad8699.3eac2ab7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[231212],{603905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),y=o,m=s["".concat(l,".").concat(y)]||s[y]||f[y]||c;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=y;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},708857:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={id:"plugin-search-react.searchautocompletefilterprops",title:"SearchAutocompleteFilterProps",description:"API reference for SearchAutocompleteFilterProps"},i=void 0,l={unversionedId:"reference/plugin-search-react.searchautocompletefilterprops",id:"reference/plugin-search-react.searchautocompletefilterprops",title:"SearchAutocompleteFilterProps",description:"API reference for SearchAutocompleteFilterProps",source:"@site/../docs/reference/plugin-search-react.searchautocompletefilterprops.md",sourceDirName:"reference",slug:"/reference/plugin-search-react.searchautocompletefilterprops",permalink:"/v1.12.0/docs/reference/plugin-search-react.searchautocompletefilterprops",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-react.searchautocompletefilterprops.md",tags:[],version:"current",frontMatter:{id:"plugin-search-react.searchautocompletefilterprops",title:"SearchAutocompleteFilterProps",description:"API reference for SearchAutocompleteFilterProps"}},p={},u=[],s={toc:u};function f(e){var{components:r}=e,t=c(e,["components"]);return(0,n.kt)("wrapper",o({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-search-react"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-search-react"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-search-react.searchautocompletefilterprops"}),(0,n.kt)("inlineCode",{parentName:"a"},"SearchAutocompleteFilterProps"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"type SearchAutocompleteFilterProps = SearchFilterComponentProps & {\n    filterSelectedOptions?: boolean;\n    limitTags?: number;\n    multiple?: boolean;\n};\n")),(0,n.kt)("b",null,"References:")," [SearchFilterComponentProps](/v1.12.0/docs/reference/plugin-search-react.searchfiltercomponentprops)")}f.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,c){for(var a,i,l=o(e),p=1;p<arguments.length;p++){for(var u in a=Object(arguments[p]))t.call(a,u)&&(l[u]=a[u]);if(r){i=r(a);for(var s=0;s<i.length;s++)n.call(a,i[s])&&(l[i[s]]=a[i[s]])}}return l}},541535:(e,r,t)=>{var n=t(862525),o=60103,c=60106;var a=60109,i=60110,l=60112;var p=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),c=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),a=s("react.provider"),i=s("react.context"),l=s("react.forward_ref"),s("react.suspense"),p=s("react.memo"),u=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function d(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||m}function b(){}function v(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||m}d.prototype.isReactComponent={},d.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,r,"setState")},d.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=d.prototype;var g=v.prototype=new b;g.constructor=v,n(g,d.prototype),g.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,c={},a=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(a=""+r.key),r)j.call(r,n)&&!k.hasOwnProperty(n)&&(c[n]=r[n]);var l=arguments.length-2;if(1===l)c.children=t;else if(1<l){for(var p=Array(l),u=0;u<l;u++)p[u]=arguments[u+2];c.children=p}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===c[n]&&(c[n]=l[n]);return{$$typeof:o,type:e,key:a,ref:i,props:c,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function _(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function A(e,r,t,n,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case c:l=!0}}if(l)return a=a(l=e),e=""===n?"."+_(l,0):n,Array.isArray(a)?(t="",null!=e&&(t=e.replace(S,"$&/")+"/"),A(a,r,t,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(S,"$&/")+"/")+e)),r.push(a)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var u=n+_(i=e[p],p);l+=A(i,r,t,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),p=0;!(i=e.next()).done;)l+=A(i=i.value,r,t,u=n+_(i,p++),a);else if("object"===i)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return l}function E(e,r,t){if(null==e)return e;var n=[],o=0;return A(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function x(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function F(){var e=C.current;if(null===e)throw Error(y(321));return e}},827378:(e,r,t)=>{t(541535)}}]);
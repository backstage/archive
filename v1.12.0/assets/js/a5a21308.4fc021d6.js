/*! For license information please see a5a21308.4fc021d6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[383877],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(667294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(r),y=i,d=p["".concat(s,".").concat(y)]||p[y]||f[y]||l;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=y;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},405160:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u});r(827378);var n=r(603905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const o={id:"plugin-playlist-backend.listplaylistsfilter",title:"ListPlaylistsFilter",description:"API reference for ListPlaylistsFilter"},a=void 0,s={unversionedId:"reference/plugin-playlist-backend.listplaylistsfilter",id:"reference/plugin-playlist-backend.listplaylistsfilter",title:"ListPlaylistsFilter",description:"API reference for ListPlaylistsFilter",source:"@site/../docs/reference/plugin-playlist-backend.listplaylistsfilter.md",sourceDirName:"reference",slug:"/reference/plugin-playlist-backend.listplaylistsfilter",permalink:"/v1.12.0/docs/reference/plugin-playlist-backend.listplaylistsfilter",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-playlist-backend.listplaylistsfilter.md",tags:[],version:"current",frontMatter:{id:"plugin-playlist-backend.listplaylistsfilter",title:"ListPlaylistsFilter",description:"API reference for ListPlaylistsFilter"}},c={},u=[],p={toc:u};function f(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",i({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",i({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",i({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-playlist-backend"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-playlist-backend"))," ",">"," ",(0,n.kt)("a",i({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-playlist-backend.listplaylistsfilter"}),(0,n.kt)("inlineCode",{parentName:"a"},"ListPlaylistsFilter"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-typescript"}),"type ListPlaylistsFilter = {\n    allOf: ListPlaylistsFilter[];\n} | {\n    anyOf: ListPlaylistsFilter[];\n} | {\n    not: ListPlaylistsFilter;\n} | ListPlaylistsMatchFilter;\n")),(0,n.kt)("b",null,"References:")," [ListPlaylistsFilter](/v1.12.0/docs/reference/plugin-playlist-backend.listplaylistsfilter), [ListPlaylistsMatchFilter](/v1.12.0/docs/reference/plugin-playlist-backend.listplaylistsmatchfilter)")}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(i){return!1}}()?Object.assign:function(e,l){for(var o,a,s=i(e),c=1;c<arguments.length;c++){for(var u in o=Object(arguments[c]))r.call(o,u)&&(s[u]=o[u]);if(t){a=t(o);for(var p=0;p<a.length;p++)n.call(o,a[p])&&(s[a[p]]=o[a[p]])}}return s}},541535:(e,t,r)=>{var n=r(862525),i=60103,l=60106;var o=60109,a=60110,s=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;i=p("react.element"),l=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),o=p("react.provider"),a=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function m(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||d}function v(){}function g(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var h=g.prototype=new v;h.constructor=g,n(h,m.prototype),h.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,l={},o=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,n)&&!j.hasOwnProperty(n)&&(l[n]=t[n]);var s=arguments.length-2;if(1===s)l.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];l.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===l[n]&&(l[n]=s[n]);return{$$typeof:i,type:e,key:o,ref:a,props:l,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var _=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,r,n,o){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case i:case l:s=!0}}if(s)return o=o(s=e),e=""===n?"."+S(s,0):n,Array.isArray(o)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),E(o,t,r,"",(function(e){return e}))):null!=o&&(P(o)&&(o=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(_,"$&/")+"/")+e)),t.push(o)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=n+S(a=e[c],c);s+=E(a,t,r,u,o)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(a=e.next()).done;)s+=E(a=a.value,t,r,u=n+S(a,c++),o);else if("object"===a)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function F(e,t,r){if(null==e)return e;var n=[],i=0;return E(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var L={current:null};function C(){var e=L.current;if(null===e)throw Error(y(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
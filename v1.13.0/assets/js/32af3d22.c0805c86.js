/*! For license information please see 32af3d22.c0805c86.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[830425],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(667294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),y=i,m=u["".concat(p,".").concat(y)]||u[y]||f[y]||a;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},879905:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>u});r(827378);var n=r(603905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const l={id:"plugin-playlist.playlistapi.removeplaylistentities",title:"PlaylistApi.removePlaylistEntities()",description:"API reference for PlaylistApi.removePlaylistEntities()"},p=void 0,c={unversionedId:"reference/plugin-playlist.playlistapi.removeplaylistentities",id:"reference/plugin-playlist.playlistapi.removeplaylistentities",title:"PlaylistApi.removePlaylistEntities()",description:"API reference for PlaylistApi.removePlaylistEntities()",source:"@site/../docs/reference/plugin-playlist.playlistapi.removeplaylistentities.md",sourceDirName:"reference",slug:"/reference/plugin-playlist.playlistapi.removeplaylistentities",permalink:"/v1.13.0/docs/reference/plugin-playlist.playlistapi.removeplaylistentities",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-playlist.playlistapi.removeplaylistentities.md",tags:[],version:"current",frontMatter:{id:"plugin-playlist.playlistapi.removeplaylistentities",title:"PlaylistApi.removePlaylistEntities()",description:"API reference for PlaylistApi.removePlaylistEntities()"}},s={},u=[{value:"Parameters",id:"parameters",level:2}],f={toc:u};function y(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/reference/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/reference/plugin-playlist"},(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-playlist"))," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/reference/plugin-playlist.playlistapi"},(0,n.kt)("inlineCode",{parentName:"a"},"PlaylistApi"))," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/reference/plugin-playlist.playlistapi.removeplaylistentities"},(0,n.kt)("inlineCode",{parentName:"a"},"removePlaylistEntities"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"removePlaylistEntities(playlistId: string, entityRefs: string[]): Promise<void>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"playlistId"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"entityRefs"),(0,n.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<","void",">"))}y.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(i){return!1}}()?Object.assign:function(e,a){for(var o,l,p=i(e),c=1;c<arguments.length;c++){for(var s in o=Object(arguments[c]))r.call(o,s)&&(p[s]=o[s]);if(t){l=t(o);for(var u=0;u<l.length;u++)n.call(o,l[u])&&(p[l[u]]=o[l[u]])}}return p}},541535:(e,t,r)=>{var n=r(862525),i=60103,a=60106;var o=60109,l=60110,p=60112;var c=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;i=u("react.element"),a=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),o=u("react.provider"),l=u("react.context"),p=u("react.forward_ref"),u("react.suspense"),c=u("react.memo"),s=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function d(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||m}function v(){}function g(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||m}d.prototype.isReactComponent={},d.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},d.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=d.prototype;var O=g.prototype=new v;O.constructor=g,n(O,d.prototype),O.isPureReactComponent=!0;var h={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,a={},o=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)j.call(t,n)&&!k.hasOwnProperty(n)&&(a[n]=t[n]);var p=arguments.length-2;if(1===p)a.children=r;else if(1<p){for(var c=Array(p),s=0;s<p;s++)c[s]=arguments[s+2];a.children=c}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===a[n]&&(a[n]=p[n]);return{$$typeof:i,type:e,key:o,ref:l,props:a,_owner:h.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var N=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var p=!1;if(null===e)p=!0;else switch(l){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case i:case a:p=!0}}if(p)return o=o(p=e),e=""===n?"."+E(p,0):n,Array.isArray(o)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),S(o,t,r,"",(function(e){return e}))):null!=o&&(w(o)&&(o=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||p&&p.key===o.key?"":(""+o.key).replace(N,"$&/")+"/")+e)),t.push(o)),1;if(p=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var s=n+E(l=e[c],c);p+=S(l,t,r,s,o)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),c=0;!(l=e.next()).done;)p+=S(l=l.value,t,r,s=n+E(l,c++),o);else if("object"===l)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return p}function _(e,t,r){if(null==e)return e;var n=[],i=0;return S(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function C(){var e=A.current;if(null===e)throw Error(y(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
/*! For license information please see b305bd42.95e6405a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[266104],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),d=o,y=s["".concat(i,".").concat(d)]||s[d]||f[d]||a;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:o,c[1]=p;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>u});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={id:"core-components.dependencygraph",title:"DependencyGraph()",description:"API reference for DependencyGraph()"},p=void 0,i={unversionedId:"reference/core-components.dependencygraph",id:"reference/core-components.dependencygraph",title:"DependencyGraph()",description:"API reference for DependencyGraph()",source:"@site/../docs/reference/core-components.dependencygraph.md",sourceDirName:"reference",slug:"/reference/core-components.dependencygraph",permalink:"/v1.12.0/docs/reference/core-components.dependencygraph",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-components.dependencygraph.md",tags:[],version:"current",frontMatter:{id:"core-components.dependencygraph",title:"DependencyGraph()",description:"API reference for DependencyGraph()"}},l={},u=[{value:"Parameters",id:"parameters",level:2}],s={toc:u};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/core-components"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/core-components"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/core-components.dependencygraph"}),(0,n.kt)("inlineCode",{parentName:"a"},"DependencyGraph"))),(0,n.kt)("p",null,"Graph component used to visualize relations between entities"),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"function DependencyGraph<NodeData, EdgeData>(props: DependencyGraphProps<NodeData, EdgeData>): JSX.Element;\n")),(0,n.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"props"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/v1.12.0/docs/reference/core-components.dependencygraphprops"}),"DependencyGraphProps"),"<","NodeData, EdgeData",">"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"JSX.Element"))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var c,p,i=o(e),l=1;l<arguments.length;l++){for(var u in c=Object(arguments[l]))r.call(c,u)&&(i[u]=c[u]);if(t){p=t(c);for(var s=0;s<p.length;s++)n.call(c,p[s])&&(i[p[s]]=c[p[s]])}}return i}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var c=60109,p=60110,i=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),a=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),c=s("react.provider"),p=s("react.context"),i=s("react.forward_ref"),s("react.suspense"),l=s("react.memo"),u=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var v=g.prototype=new b;v.constructor=g,n(v,h.prototype),v.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},c=null,p=null;if(null!=t)for(n in void 0!==t.ref&&(p=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,n)&&!j.hasOwnProperty(n)&&(a[n]=t[n]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:o,type:e,key:c,ref:p,props:a,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,c){var p=typeof e;"undefined"!==p&&"boolean"!==p||(e=null);var i=!1;if(null===e)i=!0;else switch(p){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case a:i=!0}}if(i)return c=c(i=e),e=""===n?"."+D(i,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),S(c,t,r,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(N,"$&/")+"/")+e)),t.push(c)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=n+D(p=e[l],l);i+=S(p,t,r,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(p=e.next()).done;)i+=S(p=p.value,t,r,u=n+D(p,l++),c);else if("object"===p)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function _(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function C(){var e=x.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
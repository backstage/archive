/*! For license information please see aabe7074.f414ef90.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[94818],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,b=p["".concat(u,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},452958:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>s});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"plugin-events-backend-module-gitlab.gitlabeventrouter",title:"GitlabEventRouter",description:"API reference for GitlabEventRouter"},i=void 0,u={unversionedId:"reference/plugin-events-backend-module-gitlab.gitlabeventrouter",id:"reference/plugin-events-backend-module-gitlab.gitlabeventrouter",title:"GitlabEventRouter",description:"API reference for GitlabEventRouter",source:"@site/../docs/reference/plugin-events-backend-module-gitlab.gitlabeventrouter.md",sourceDirName:"reference",slug:"/reference/plugin-events-backend-module-gitlab.gitlabeventrouter",permalink:"/v1.12.0/docs/reference/plugin-events-backend-module-gitlab.gitlabeventrouter",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-events-backend-module-gitlab.gitlabeventrouter.md",tags:[],version:"current",frontMatter:{id:"plugin-events-backend-module-gitlab.gitlabeventrouter",title:"GitlabEventRouter",description:"API reference for GitlabEventRouter"}},c={},s=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}],p={toc:s};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-events-backend-module-gitlab"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-events-backend-module-gitlab"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-events-backend-module-gitlab.gitlabeventrouter"}),(0,n.kt)("inlineCode",{parentName:"a"},"GitlabEventRouter"))),(0,n.kt)("p",null,"Subscribes to the generic ",(0,n.kt)("inlineCode",{parentName:"p"},"gitlab")," topic and publishes the events under the more concrete sub-topic depending on the ",(0,n.kt)("inlineCode",{parentName:"p"},"$.event_name")," field provided."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class GitlabEventRouter extends SubTopicEventRouter \n")),(0,n.kt)("b",null,"Extends:")," [SubTopicEventRouter](/v1.12.0/docs/reference/plugin-events-node.subtopiceventrouter)",(0,n.kt)("h2",o({},{id:"constructors"}),"Constructors"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Constructor"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-events-backend-module-gitlab.gitlabeventrouter._constructor_"}),"(constructor)()")),(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Constructs a new instance of the ",(0,n.kt)("code",null,"GitlabEventRouter")," class")))),(0,n.kt)("h2",o({},{id:"methods"}),"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-events-backend-module-gitlab.gitlabeventrouter.determinesubtopic"}),"determineSubTopic(params)")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"protected")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var l,i,u=o(e),c=1;c<arguments.length;c++){for(var s in l=Object(arguments[c]))r.call(l,s)&&(u[s]=l[s]);if(t){i=t(l);for(var p=0;p<i.length;p++)n.call(l,i[p])&&(u[i[p]]=l[i[p]])}}return u}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var l=60109,i=60110,u=60112;var c=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),l=p("react.provider"),i=p("react.context"),u=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),s=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||b}function g(){}function y(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||b}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var h=y.prototype=new g;h.constructor=y,n(h,v.prototype),h.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},l=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)O.call(t,n)&&!j.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];a.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:l,ref:i,props:a,_owner:k.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return l=l(u=e),e=""===n?"."+P(u,0):n,Array.isArray(l)?(r="",null!=e&&(r=e.replace(E,"$&/")+"/"),_(l,t,r,"",(function(e){return e}))):null!=l&&(N(l)&&(l=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||u&&u.key===l.key?"":(""+l.key).replace(E,"$&/")+"/")+e)),t.push(l)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var s=n+P(i=e[c],c);u+=_(i,t,r,s,l)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),c=0;!(i=e.next()).done;)u+=_(i=i.value,t,r,s=n+P(i,c++),l);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function S(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function R(){var e=x.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
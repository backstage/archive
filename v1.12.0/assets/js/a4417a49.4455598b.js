/*! For license information please see a4417a49.4455598b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[707641],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,h=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(h,a(a({ref:t},l),{},{components:r})):n.createElement(h,a({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},921244:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={id:"adrs-overview",title:"Architecture Decision Records (ADR)",sidebar_label:"Overview",description:"Overview of Architecture Decision Records (ADR)"},c=void 0,s={unversionedId:"architecture-decisions/adrs-overview",id:"architecture-decisions/adrs-overview",title:"Architecture Decision Records (ADR)",description:"Overview of Architecture Decision Records (ADR)",source:"@site/../docs/architecture-decisions/index.md",sourceDirName:"architecture-decisions",slug:"/architecture-decisions/",permalink:"/v1.12.0/docs/architecture-decisions/",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/architecture-decisions/index.md",tags:[],version:"current",frontMatter:{id:"adrs-overview",title:"Architecture Decision Records (ADR)",sidebar_label:"Overview",description:"Overview of Architecture Decision Records (ADR)"},sidebar:"docs",previous:{title:"Migration to Yarn 3",permalink:"/v1.12.0/docs/tutorials/yarn-migration"},next:{title:"ADR001: Architecture Decision Record (ADR) log",permalink:"/v1.12.0/docs/architecture-decisions/adrs-adr001"}},u={},l=[{value:"Contributing",id:"contributing",level:2},{value:"Creating an ADR",id:"creating-an-adr",level:3},{value:"Superseding an ADR",id:"superseding-an-adr",level:2}],p={toc:l};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The substantial architecture decisions made in the Backstage project live here.\nFor more information about ADRs, when to write them, and why, please see\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://engineering.atspotify.com/2020/04/14/when-should-i-write-an-architecture-decision-record/"}),"this blog post"),"."),(0,n.kt)("p",null,"Records are never deleted but can be marked as superseded by new decisions or\ndeprecated."),(0,n.kt)("p",null,"Records should be stored under the ",(0,n.kt)("inlineCode",{parentName:"p"},"architecture-decisions")," directory."),(0,n.kt)("h2",o({},{id:"contributing"}),"Contributing"),(0,n.kt)("h3",o({},{id:"creating-an-adr"}),"Creating an ADR"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Copy ",(0,n.kt)("inlineCode",{parentName:"li"},"docs/architecture-decisions/adr000-template.md")," to\n",(0,n.kt)("inlineCode",{parentName:"li"},"docs/architecture-decisions/adr000-my-decision.md")," (my-decision should be\ndescriptive. Do not assign an ADR number.)"),(0,n.kt)("li",{parentName:"ul"},"Fill in the ADR following the guidelines in the template"),(0,n.kt)("li",{parentName:"ul"},"Submit a pull request"),(0,n.kt)("li",{parentName:"ul"},"Address and integrate feedback from the community"),(0,n.kt)("li",{parentName:"ul"},"Eventually, assign a number"),(0,n.kt)("li",{parentName:"ul"},"Add the path of the ADR to the microsite sidebar in\n",(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/backstage/backstage/blob/master/microsite/sidebars.json"}),(0,n.kt)("inlineCode",{parentName:"a"},"sidebars.json"))),(0,n.kt)("li",{parentName:"ul"},"Add the path of the ADR to the\n",(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/backstage/backstage/blob/master/mkdocs.yml"}),(0,n.kt)("inlineCode",{parentName:"a"},"mkdocs.yml"))),(0,n.kt)("li",{parentName:"ul"},"Merge the pull request")),(0,n.kt)("h2",o({},{id:"superseding-an-adr"}),"Superseding an ADR"),(0,n.kt)("p",null,'If an ADR supersedes an older ADR then the status of the older ADR is changed to\n"superseded by ADR-XXXX", and links to the new ADR.'))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,c,s=o(e),u=1;u<arguments.length;u++){for(var l in a=Object(arguments[u]))r.call(a,l)&&(s[l]=a[l]);if(t){c=t(a);for(var p=0;p<c.length;p++)n.call(a,c[p])&&(s[c[p]]=a[c[p]])}}return s}},541535:(e,t,r)=>{var n=r(862525),o=60103,i=60106;var a=60109,c=60110,s=60112;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),i=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),a=p("react.provider"),c=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),l=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var g=v.prototype=new b;g.constructor=v,n(g,m.prototype),g.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,i={},a=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)O.call(t,n)&&!w.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:o,type:e,key:a,ref:c,props:i,_owner:k.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var D=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return a=a(s=e),e=""===n?"."+R(s,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(D,"$&/")+"/"),_(a,t,r,"",(function(e){return e}))):null!=a&&(A(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(D,"$&/")+"/")+e)),t.push(a)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=n+R(c=e[u],u);s+=_(c,t,r,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(c=e.next()).done;)s+=_(c=c.value,t,r,l=n+R(c,u++),a);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function P(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function N(){var e=C.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
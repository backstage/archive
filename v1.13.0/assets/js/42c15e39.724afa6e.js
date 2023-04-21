/*! For license information please see 42c15e39.724afa6e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[870624],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},737961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>u});n(827378);var r=n(603905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={id:"adrs-adr011",title:"ADR011: Plugin Package Structure",description:"Architecture Decision Record (ADR) for Plugin Package Structure"},l=void 0,s={unversionedId:"architecture-decisions/adrs-adr011",id:"architecture-decisions/adrs-adr011",title:"ADR011: Plugin Package Structure",description:"Architecture Decision Record (ADR) for Plugin Package Structure",source:"@site/../docs/architecture-decisions/adr011-plugin-package-structure.md",sourceDirName:"architecture-decisions",slug:"/architecture-decisions/adrs-adr011",permalink:"/v1.13.0/docs/architecture-decisions/adrs-adr011",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/architecture-decisions/adr011-plugin-package-structure.md",tags:[],version:"current",frontMatter:{id:"adrs-adr011",title:"ADR011: Plugin Package Structure",description:"Architecture Decision Record (ADR) for Plugin Package Structure"},sidebar:"docs",previous:{title:"ADR010: Use the Luxon Date Library",permalink:"/v1.13.0/docs/architecture-decisions/adrs-adr010"},next:{title:"ADR012: Use Luxon.toLocaleString and date/time presets",permalink:"/v1.13.0/docs/architecture-decisions/adrs-adr012"}},p={},u=[{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],d={toc:u};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"A core feature of Backstage is the extensibility via plugins. The Backstage\nrepository is open for contributions of plugins. Even most of the core features\nare implemented as plugins. A plugin consists of one or multiple packages in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/")," directory. Up till now, we have a simple conventions for naming\nplugin packages: Plugins are named ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", with the option of having a related\nbackend plugin called ",(0,r.kt)("inlineCode",{parentName:"p"},"x-backend")," (where ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is the plugin name, like ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog"),"\nor ",(0,r.kt)("inlineCode",{parentName:"p"},"techdocs"),"). There is a need for sharing code between the frontend and\nbackend of a plugin, between backend plugins, or components and hooks between\ndifferent frontend plugins\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/issues/3655#issuecomment-758166746"},"some examples"),").\nThis results in emerging plugin packages with shared code, like\n",(0,r.kt)("inlineCode",{parentName:"p"},"packages/catalog-client")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/techdocs-common"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"There is a common phrase in software development:\n",(0,r.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/TwoHardThings.html"},"Naming things is hard"))),(0,r.kt)("p",null,"To keep the contributed plugins consistent, this Architecture Decision Record\nprovides rules for naming plugin packages."),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("p",null,"We will place all plugin related code in the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/")," directory. The\n",(0,r.kt)("inlineCode",{parentName:"p"},"packages/")," directory is reserved for core package of Backstage."),(0,r.kt)("p",null,"We follow this structure for plugin packages (where ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is the plugin name, for\nexample ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"techdocs"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x"),": Contains the main frontend code of the plugin."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x-module-<name>"),": Contains optional modules related to the frontend plugin\npackage."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x-backend"),": Contains the main backend code of the plugin."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x-backend-module-<name>"),": Contains optional modules related to the backend\nplugin package."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x-react"),": Contains shared widgets, hooks and similar that both the plugin\nitself (",(0,r.kt)("inlineCode",{parentName:"li"},"x"),") and third-party frontend plugins can depend on."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x-node"),": Contains utilities for backends that both the plugin backend itself\n(",(0,r.kt)("inlineCode",{parentName:"li"},"x-backend"),") and third-party backend plugins can depend on."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x-common"),": An isomorphic package with platform agnostic models, clients, and\nutilities that all packages above or any third-party plugin package can depend\non.")),(0,r.kt)("p",null,"We prefix the package names with ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-"),"."),(0,r.kt)("p",null,"This structure is based on a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/issues/3655#issuecomment-758166746"},"suggestion in issue #3655"),"."),(0,r.kt)("h2",{id:"consequences"},"Consequences"),(0,r.kt)("p",null,"We will actively migrate existing packages that are part of a plugin to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/")," folder. This affects packages like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"packages/techdocs-common")," which should be moved to ",(0,r.kt)("inlineCode",{parentName:"li"},"plugins/techdocs-node"),"\nand named ",(0,r.kt)("inlineCode",{parentName:"li"},"@backstage/plugin-techdocs-node"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"packages/catalog-client")," which will be part of a future\n",(0,r.kt)("inlineCode",{parentName:"li"},"plugins/catalog-common")," and named ",(0,r.kt)("inlineCode",{parentName:"li"},"@backstage/plugin-catalog-common"),"."),(0,r.kt)("li",{parentName:"ul"},"While the new location of ",(0,r.kt)("inlineCode",{parentName:"li"},"packages/catalog-model")," should be\n",(0,r.kt)("inlineCode",{parentName:"li"},"plugins/catalog-common")," we might want to do an exception here, as it's a very\ncentral package.")),(0,r.kt)("p",null,"We will actively migrate optional features of backend plugins into separate\n",(0,r.kt)("inlineCode",{parentName:"p"},"x-backend-module-<name>")," packages, for example the more specialized processors\nin the catalog backend."),(0,r.kt)("p",null,"The limited set of rules might not be sufficient in the future. If additional\npackages are required, we will revisit this decision and extend the pattern."),(0,r.kt)("p",null,"If possible, we will add tools, such as lint rules, to help enforce the package\nnames and dependencies between them or CLI commands to generate these packages."),(0,r.kt)("p",null,"The distinction between core packages and plugins helps us to setup\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/about-code-owners"},"CODEOWNERS"),"\nin the repository. We can set the code owners for the ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/")," folder to the\ncore team and create additional rules (like ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/x*"),") for plugin\nmaintainers."))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,c,l=a(e),s=1;s<arguments.length;s++){for(var p in i=Object(arguments[s]))n.call(i,p)&&(l[p]=i[p]);if(t){c=t(i);for(var u=0;u<c.length;u++)r.call(i,c[u])&&(l[c[u]]=i[c[u]])}}return l}},541535:(e,t,n)=>{var r=n(862525),a=60103,o=60106;var i=60109,c=60110,l=60112;var s=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),c=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),s=u("react.memo"),p=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function h(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function k(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=h.prototype;var y=b.prototype=new k;y.constructor=b,r(y,h.prototype),y.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!O.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var s=Array(l),p=0;p<l;p++)s[p]=arguments[p+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:v.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,n,r,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return i=i(l=e),e=""===r?"."+P(l,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(N,"$&/")+"/"),x(i,t,n,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var p=r+P(c=e[s],s);l+=x(c,t,n,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),s=0;!(c=e.next()).done;)l+=x(c=c.value,t,n,p=r+P(c,s++),i);else if("object"===c)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function S(e,t,n){if(null==e)return e;var r=[],a=0;return x(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function D(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function E(){var e=_.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
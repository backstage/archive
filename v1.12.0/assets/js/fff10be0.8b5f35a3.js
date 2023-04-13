/*! For license information please see fff10be0.8b5f35a3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[431728],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},601806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});n(827378);var r=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"naming-patterns",title:"Backend System Naming Patterns",sidebar_label:"Naming Patterns",description:"Naming patterns in the backend system"},o=void 0,c={unversionedId:"backend-system/architecture/naming-patterns",id:"backend-system/architecture/naming-patterns",title:"Backend System Naming Patterns",description:"Naming patterns in the backend system",source:"@site/../docs/backend-system/architecture/07-naming-patterns.md",sourceDirName:"backend-system/architecture",slug:"/backend-system/architecture/naming-patterns",permalink:"/v1.12.0/docs/backend-system/architecture/naming-patterns",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/architecture/07-naming-patterns.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"naming-patterns",title:"Backend System Naming Patterns",sidebar_label:"Naming Patterns",description:"Naming patterns in the backend system"},sidebar:"docs",previous:{title:"Modules",permalink:"/v1.12.0/docs/backend-system/architecture/modules"},next:{title:"Overview",permalink:"/v1.12.0/docs/backend-system/building-backends/index"}},p={},s=[{value:"Plugins",id:"plugins",level:3},{value:"Modules",id:"modules",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Services",id:"services",level:3}],u={toc:s};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"DISCLAIMER: The new backend system is in alpha, and still under active development. While we have reviewed the interfaces carefully, they may still be iterated on before the stable release."))),(0,r.kt)("p",null,"These are the naming patterns to adhere to within the backend system. They help us keep exports consistent across packages and make it easier to understand the usage and intent of exports."),(0,r.kt)("h3",a({},{id:"plugins"}),"Plugins"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Pattern"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Examples"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"export"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<id>Plugin")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"catalogPlugin"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"scaffolderPlugin"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ID"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"'<id>'")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"'catalog'"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"'scaffolder'"))))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"export const catalogPlugin = createBackendPlugin({\n  pluginId: 'catalog',\n  ...\n})\n")),(0,r.kt)("h3",a({},{id:"modules"}),"Modules"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Pattern"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Examples"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"export"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<pluginId>Module<ModuleId>")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"catalogModuleGithubEntityProvider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ID"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"'<moduleId>'")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"'githubEntityProvider'"))))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"export const catalogModuleGithubEntityProvider = createBackendModule({\n  pluginId: 'catalog',\n  moduleId: 'githubEntityProvider',\n  ...\n})\n")),(0,r.kt)("h3",a({},{id:"extensions"}),"Extensions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Pattern"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Examples"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Interface"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<PluginId><Name>ExtensionPoint")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"CatalogProcessingExtensionPoint"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Reference"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<pluginId><Name>ExtensionPoint")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"catalogProcessingExtensionPoint"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ID"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"'<pluginId>.<name>'")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"'catalog.processing'"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"'foo.barBaz'"))))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"export interface CatalogProcessingExtensionPoint {\n  ...\n}\n\nexport const catalogProcessingExtensionPoint = createExtensionPoint<CatalogProcessingExtensionPoint>({\n  id: 'catalog.processing',\n  ...\n})\n")),(0,r.kt)("h3",a({},{id:"services"}),"Services"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Pattern"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Examples"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Interface"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<Name>Service")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"LoggerService"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DatabaseService"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Reference"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<name>ServiceRef")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"loggerServiceRef"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"databaseServiceRef"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ID"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<pluginId>.<name>")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"'core.rootHttpRouter'"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"'catalog.catalogClient'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Factory"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"<name>ServiceFactory")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"loggerServiceFactory"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"databaseServiceFactory"))))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"export interface CatalogClientService {\n  ...\n}\n\nexport const catalogClientServiceRef = createServiceRef<CatalogClientService>({\n  id: 'catalog.catalogClient',\n  ...\n})\n\nexport const catalogClientServiceFactory = createServiceFactory({\n  service: catalogClientServiceRef,\n  ...\n})\n")),(0,r.kt)("p",null,"An exception to the above service reference naming pattern has been made for the all of the core services in the core API. The ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/backend-plugin-api")," makes all core service references available via a single ",(0,r.kt)("inlineCode",{parentName:"p"},"coreServices")," collection. Likewise, the ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/backend-test-utils")," exports all mock service implementations via a single ",(0,r.kt)("inlineCode",{parentName:"p"},"mockServices")," collection. This means that the table above is slightly misleading, since ",(0,r.kt)("inlineCode",{parentName:"p"},"loggerServiceRef")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"databaseServiceRef")," are instead available as ",(0,r.kt)("inlineCode",{parentName:"p"},"coreServices.logger")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"coreService.database"),". We recommend that plugins avoid this patterns unless they have a very large number of services that they need to export."),(0,r.kt)("p",null,"While it is often preferred to prefix root scoped services with ",(0,r.kt)("inlineCode",{parentName:"p"},"Root"),", it is not required. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"RootHttpRouterService")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RootLifecycleService")," follow this pattern, but ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigService")," doesn't and it is a root scoped service."))}d.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,i){for(var l,o,c=a(e),p=1;p<arguments.length;p++){for(var s in l=Object(arguments[p]))n.call(l,s)&&(c[s]=l[s]);if(t){o=t(l);for(var u=0;u<o.length;u++)r.call(l,o[u])&&(c[o[u]]=l[o[u]])}}return c}},541535:(e,t,n)=>{var r=n(862525),a=60103,i=60106;var l=60109,o=60110,c=60112;var p=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),i=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),l=u("react.provider"),o=u("react.context"),c=u("react.forward_ref"),u("react.suspense"),p=u("react.memo"),s=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k={};function g(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||f}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=g.prototype;var v=b.prototype=new y;v.constructor=b,r(v,g.prototype),v.isPureReactComponent=!0;var h={current:null},N=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r,i={},l=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(l=""+t.key),t)N.call(t,r)&&!C.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var p=Array(c),s=0;s<c;s++)p[s]=arguments[s+2];i.children=p}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:a,type:e,key:l,ref:o,props:i,_owner:h.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var x=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,n,r,l){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case i:c=!0}}if(c)return l=l(c=e),e=""===r?"."+S(c,0):r,Array.isArray(l)?(n="",null!=e&&(n=e.replace(x,"$&/")+"/"),j(l,t,n,"",(function(e){return e}))):null!=l&&(O(l)&&(l=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,n+(!l.key||c&&c.key===l.key?"":(""+l.key).replace(x,"$&/")+"/")+e)),t.push(l)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var p=0;p<e.length;p++){var s=r+S(o=e[p],p);c+=j(o,t,n,s,l)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),p=0;!(o=e.next()).done;)c+=j(o=o.value,t,n,s=r+S(o,p++),l);else if("object"===o)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function w(e,t,n){if(null==e)return e;var r=[],a=0;return j(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function I(){var e=_.current;if(null===e)throw Error(m(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
/*! For license information please see cfccd5aa.e89b348a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[983088],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,y=u["".concat(p,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},734608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});r(827378);var n=r(603905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"proxying",title:"Proxying",description:"Documentation on Proxying"},p=void 0,c={unversionedId:"plugins/proxying",id:"plugins/proxying",title:"Proxying",description:"Documentation on Proxying",source:"@site/../docs/plugins/proxying.md",sourceDirName:"plugins",slug:"/plugins/proxying",permalink:"/v1.13.0/docs/plugins/proxying",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/proxying.md",tags:[],version:"current",frontMatter:{id:"proxying",title:"Proxying",description:"Documentation on Proxying"},sidebar:"docs",previous:{title:"Feature Flags",permalink:"/v1.13.0/docs/plugins/feature-flags"},next:{title:"Backend plugins",permalink:"/v1.13.0/docs/plugins/backend-plugin"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Configuration",id:"configuration",level:2}],f={toc:u};function d(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Backstage backend comes packaged with a basic HTTP proxy, that can aid in\nreaching backend service APIs from frontend plugin code. See\n",(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/plugins/call-existing-api"},"Call Existing API")," for a description of when the proxy\ncan be the best choice for communicating with an API."),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"The plugin is already added to a default Backstage project."),(0,n.kt)("p",null,"In ",(0,n.kt)("inlineCode",{parentName:"p"},"packages/backend/src/index.ts"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const proxyEnv = useHotMemoize(module, () => createEnv('proxy'));\n\nconst service = createServiceBuilder(module)\n  .loadConfig(configReader)\n  /** ... other routers ... */\n  .addRouter('/proxy', await proxy(proxyEnv));\n")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"Configuration for the proxy plugin lives under a ",(0,n.kt)("inlineCode",{parentName:"p"},"proxy")," root key of your\n",(0,n.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," file."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"# in app-config.yaml\nproxy:\n  simple-example: http://simple.example.com:8080\n  '/larger-example/v1':\n    target: http://larger.example.com:8080/svc.v1\n    headers:\n      Authorization: ${EXAMPLE_AUTH_HEADER}\n      # ...or interpolating a value into part of a string,\n      # Authorization: Bearer ${EXAMPLE_AUTH_TOKEN}\n")),(0,n.kt)("p",null,"Each key under the proxy configuration entry is a route to match, below the\nprefix that the proxy plugin is mounted on. If it does not start with a slash,\none will be prefixed automatically. For example, if the backend mounts the proxy\nplugin as ",(0,n.kt)("inlineCode",{parentName:"p"},"/proxy"),", the above configuration will lead to the proxy acting on\nbackend requests to ",(0,n.kt)("inlineCode",{parentName:"p"},"/api/proxy/simple-example/...")," and\n",(0,n.kt)("inlineCode",{parentName:"p"},"/api/proxy/larger-example/v1/..."),"."),(0,n.kt)("p",null,"The value inside each route is either a simple URL string, or an object on the\nformat accepted by\n",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/http-proxy-middleware"},"http-proxy-middleware"),"."),(0,n.kt)("p",null,"If the value is a string, it is assumed to correspond to:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"target: <the string>\nchangeOrigin: true\npathRewrite:\n  '^<url prefix><the string>/': '/'\n")),(0,n.kt)("p",null,"When the target is an object, it is given verbatim to ",(0,n.kt)("inlineCode",{parentName:"p"},"http-proxy-middleware"),"\nexcept with the following caveats for convenience:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"changeOrigin")," is not specified, it is set to ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),". This is the most\ncommonly useful value."),(0,n.kt)("li",{parentName:"ul"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"pathRewrite")," is not specified, it is set to a single rewrite that removes\nthe entire prefix and route. In the above example, a rewrite of\n",(0,n.kt)("inlineCode",{parentName:"li"},"'^/api/proxy/larger-example/v1/': '/'")," is added. That means that a request to\n",(0,n.kt)("inlineCode",{parentName:"li"},"/api/proxy/larger-example/v1/some/path")," will be translated to a request to\n",(0,n.kt)("inlineCode",{parentName:"li"},"http://larger.example.com:8080/svc.v1/some/path"),".")),(0,n.kt)("p",null,"There are also additional settings:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"allowedMethods"),": Limit the forwarded HTTP methods. For example\n",(0,n.kt)("inlineCode",{parentName:"li"},"allowedMethods: ['GET']")," enforces read-only access."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"allowedHeaders"),": A list of headers that should be forwarded to and received\nfrom the target.")),(0,n.kt)("p",null,"By default, the proxy will only forward safe HTTP request headers to the target.\nThose are based on the headers that are considered safe for CORS and includes\nheaders like ",(0,n.kt)("inlineCode",{parentName:"p"},"content-type")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"last-modified"),", as well as all headers that are\nset by the proxy. If the proxy should forward other headers like\n",(0,n.kt)("inlineCode",{parentName:"p"},"authorization"),", this must be enabled by the ",(0,n.kt)("inlineCode",{parentName:"p"},"allowedHeaders")," config, for\nexample ",(0,n.kt)("inlineCode",{parentName:"p"},"allowedHeaders: ['Authorization']"),". This should help to not\naccidentally forward confidential headers (",(0,n.kt)("inlineCode",{parentName:"p"},"cookie"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"X-Auth-Request-User"),") to\nthird-parties."),(0,n.kt)("p",null,"The same logic applies to headers that are sent from the target back to the\nfrontend."))}d.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,l,p=o(e),c=1;c<arguments.length;c++){for(var s in i=Object(arguments[c]))r.call(i,s)&&(p[s]=i[s]);if(t){l=t(i);for(var u=0;u<l.length;u++)n.call(i,l[u])&&(p[l[u]]=i[l[u]])}}return p}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var i=60109,l=60110,p=60112;var c=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),a=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),l=u("react.context"),p=u("react.forward_ref"),u("react.suspense"),c=u("react.memo"),s=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function g(){}function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var v=b.prototype=new g;v.constructor=b,n(v,h.prototype),v.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,a={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,n)&&!O.hasOwnProperty(n)&&(a[n]=t[n]);var p=arguments.length-2;if(1===p)a.children=r;else if(1<p){for(var c=Array(p),s=0;s<p;s++)c[s]=arguments[s+2];a.children=c}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===a[n]&&(a[n]=p[n]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:k.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var p=!1;if(null===e)p=!0;else switch(l){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case o:case a:p=!0}}if(p)return i=i(p=e),e=""===n?"."+N(p,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),C(i,t,r,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||p&&p.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(p=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var s=n+N(l=e[c],c);p+=C(l,t,r,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),c=0;!(l=e.next()).done;)p+=C(l=l.value,t,r,s=n+N(l,c++),i);else if("object"===l)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return p}function E(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function _(){var e=T.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
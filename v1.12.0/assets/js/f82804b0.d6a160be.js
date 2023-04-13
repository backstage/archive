/*! For license information please see f82804b0.d6a160be.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[833467],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),b=o,m=p["".concat(s,".").concat(b)]||p[b]||f[b]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},699833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"locations",title:"Bitbucket Server Locations",sidebar_label:"Locations",description:"Integrating source code stored in Bitbucket Server into the Backstage catalog"},c=void 0,s={unversionedId:"integrations/bitbucketServer/locations",id:"integrations/bitbucketServer/locations",title:"Bitbucket Server Locations",description:"Integrating source code stored in Bitbucket Server into the Backstage catalog",source:"@site/../docs/integrations/bitbucketServer/locations.md",sourceDirName:"integrations/bitbucketServer",slug:"/integrations/bitbucketServer/locations",permalink:"/v1.12.0/docs/integrations/bitbucketServer/locations",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/bitbucketServer/locations.md",tags:[],version:"current",frontMatter:{id:"locations",title:"Bitbucket Server Locations",sidebar_label:"Locations",description:"Integrating source code stored in Bitbucket Server into the Backstage catalog"},sidebar:"docs",previous:{title:"Discovery",permalink:"/v1.12.0/docs/integrations/bitbucketCloud/discovery"},next:{title:"Discovery",permalink:"/v1.12.0/docs/integrations/bitbucketServer/discovery"}},l={},u=[{value:"Configuration",id:"configuration",level:2}],p={toc:u};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Bitbucket Server integration supports loading catalog entities from Bitbucket Server.\nEntities can be added to\n",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/features/software-catalog/configuration"}),"static catalog configuration"),",\nor registered with the\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/tree/master/plugins/catalog-import"}),"catalog-import"),"\nplugin."),(0,n.kt)("h2",o({},{id:"configuration"}),"Configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-yaml"}),"integrations:\n  bitbucketServer:\n    - host: bitbucket.mycompany.com\n      apiBaseUrl: https://bitbucket.mycompany.com/rest/api/1.0\n      token: ${BITBUCKET_SERVER_TOKEN}\n")),(0,n.kt)("p",null,"or with Basic Auth"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-yaml"}),"integrations:\n  bitbucketServer:\n    - host: bitbucket.company.com\n      apiBaseUrl: https://bitbucket.mycompany.com/rest/api/1.0\n      username: ${BITBUCKET_SERVER_USERNAME}\n      password: ${BITBUCKET_SERVER_PASSWORD}\n")),(0,n.kt)("p",null,"Directly under the ",(0,n.kt)("inlineCode",{parentName:"p"},"bitbucketServer")," key is a list of provider configurations, where\nyou can list the Bitbucket Server providers you want to fetch data from. Each entry is\na structure with the following elements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"host"),": The host of the Bitbucket Server instance, e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"bitbucket.mycompany.com"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"token")," (optional):\nA ",(0,n.kt)("a",o({parentName:"li"},{href:"https://confluence.atlassian.com/bitbucketserver/personal-access-tokens-939515499.html"}),"personal access token"),"\nas expected by Bitbucket Server."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"username")," (optional):\nuse for ",(0,n.kt)("a",o({parentName:"li"},{href:"https://developer.atlassian.com/server/bitbucket/how-tos/command-line-rest/#authentication"}),"Basic Auth")," for Bitbucket Server."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"password")," (optional):\nuse for ",(0,n.kt)("a",o({parentName:"li"},{href:"https://developer.atlassian.com/server/bitbucket/how-tos/command-line-rest/#authentication"}),"Basic Auth")," for Bitbucket Server.\nNote: a token can also be used as a substitute for the password, see ",(0,n.kt)("a",o({parentName:"li"},{href:"https://confluence.atlassian.com/bitbucketserver/personal-access-tokens-939515499.html"}),"HTTP access tokens"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"apiBaseUrl")," (optional): The URL of the Bitbucket Server API. For self-hosted\ninstallations, it is commonly at ",(0,n.kt)("inlineCode",{parentName:"li"},"https://<host>/rest/api/1.0"),".")))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,s=o(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))r.call(i,u)&&(s[u]=i[u]);if(t){c=t(i);for(var p=0;p<c.length;p++)n.call(i,c[p])&&(s[c[p]]=i[c[p]])}}return s}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var i=60109,c=60110,s=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),c=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function d(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}function v(){}function h(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}d.prototype.isReactComponent={},d.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},d.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=d.prototype;var k=h.prototype=new v;k.constructor=h,n(k,d.prototype),k.isPureReactComponent=!0;var g={current:null},O=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,a={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,n)&&!w.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:g.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,r,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return i=i(s=e),e=""===n?"."+N(s,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),E(i,t,r,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=n+N(c=e[l],l);s+=E(c,t,r,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(c=e.next()).done;)s+=E(c=c.value,t,r,u=n+N(c,l++),i);else if("object"===c)throw t=""+e,Error(b(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function B(e,t,r){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function T(){var e=C.current;if(null===e)throw Error(b(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
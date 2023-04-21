/*! For license information please see 42a57044.bb4bcc79.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[770884],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(667294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(r),d=i,b=s["".concat(u,".").concat(d)]||s[d]||f[d]||o;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},202856:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>s});r(827378);var n=r(603905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const c={id:"provider",title:"Bitbucket Server Authentication Provider",sidebar_label:"Bitbucket Server",description:"Adding Bitbucket Server OAuth as an authentication provider in Backstage"},u=void 0,l={unversionedId:"auth/bitbucketServer/provider",id:"auth/bitbucketServer/provider",title:"Bitbucket Server Authentication Provider",description:"Adding Bitbucket Server OAuth as an authentication provider in Backstage",source:"@site/../docs/auth/bitbucketServer/provider.md",sourceDirName:"auth/bitbucketServer",slug:"/auth/bitbucketServer/provider",permalink:"/v1.13.0/docs/auth/bitbucketServer/provider",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/bitbucketServer/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"Bitbucket Server Authentication Provider",sidebar_label:"Bitbucket Server",description:"Adding Bitbucket Server OAuth as an authentication provider in Backstage"}},p={},s=[{value:"Create an Application Link in Bitbucket Server",id:"create-an-application-link-in-bitbucket-server",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2},{value:"Using Bitbucket Server for sign-in",id:"using-bitbucket-server-for-sign-in",level:2}],f={toc:s};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Backstage ",(0,n.kt)("inlineCode",{parentName:"p"},"core-plugin-api")," package comes with a Bitbucket Server authentication provider that can authenticate\nusers using Bitbucket Server. This does ",(0,n.kt)("strong",{parentName:"p"},"NOT")," work with Bitbucket Cloud."),(0,n.kt)("h2",{id:"create-an-application-link-in-bitbucket-server"},"Create an Application Link in Bitbucket Server"),(0,n.kt)("p",null,"To add Bitbucket Server authentication, you must create an outgoing application link. Follow the steps described in\nthe ",(0,n.kt)("a",{parentName:"p",href:"https://confluence.atlassian.com/bitbucketserver/configure-an-outgoing-link-1108483656.html"},"Bitbucket Server documentation"),"\nto create one."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"The provider configuration can then be added to your ",(0,n.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," under the root ",(0,n.kt)("inlineCode",{parentName:"p"},"auth")," configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"auth:\n  environment: development\n  providers:\n    bitbucketServer:\n      development:\n        host: bitbucket.org\n        clientId: ${AUTH_BITBUCKET_SERVER_CLIENT_ID}\n        clientSecret: ${AUTH_BITBUCKET_SERVER_CLIENT_SECRET}\n")),(0,n.kt)("p",null,"The Bitbucket Server provider is a structure with two configuration keys:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"clientId"),": The client ID that was generated by Bitbucket, e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"b0f868455c15dcdff5c5fb5d173ae684"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"clientSecret"),": The client secret tied to the generated client ID.")),(0,n.kt)("h2",{id:"adding-the-provider-to-the-backstage-frontend"},"Adding the provider to the Backstage frontend"),(0,n.kt)("p",null,"To add the provider to the frontend, add the ",(0,n.kt)("inlineCode",{parentName:"p"},"bitbucketServerAuthApi")," reference and ",(0,n.kt)("inlineCode",{parentName:"p"},"SignInPage")," component as shown\nin ",(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/auth/#adding-the-provider-to-the-sign-in-page"},"Adding the provider to the sign-in page"),"."),(0,n.kt)("h2",{id:"using-bitbucket-server-for-sign-in"},"Using Bitbucket Server for sign-in"),(0,n.kt)("p",null,"In order to use the Bitbucket Server provider for sign-in, you must configure it with a ",(0,n.kt)("inlineCode",{parentName:"p"},"signIn.resolver"),". See\nthe ",(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/auth/identity-resolver"},"Sign-In Resolver documentation")," for more details on how this is done. Note that for the\nBitbucket Server provider, you'll want to use ",(0,n.kt)("inlineCode",{parentName:"p"},"bitbucketServer")," as the provider ID,\nand ",(0,n.kt)("inlineCode",{parentName:"p"},"providers.bitbucketServer.create")," for the provider factory."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-auth-backend")," plugin also comes with a built-in resolver that can be used if desired.\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"emailMatchingUserEntityProfileEmail")," identifies users by matching their Bitbucket Server email address to the email\naddress of ",(0,n.kt)("inlineCode",{parentName:"p"},"User")," entities in the catalog. Note that you must populate your catalog with matching entities or users will\nnot be able to sign in with this resolver."))}d.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(i){return!1}}()?Object.assign:function(e,o){for(var a,c,u=i(e),l=1;l<arguments.length;l++){for(var p in a=Object(arguments[l]))r.call(a,p)&&(u[p]=a[p]);if(t){c=t(a);for(var s=0;s<c.length;s++)n.call(a,c[s])&&(u[c[s]]=a[c[s]])}}return u}},541535:(e,t,r)=>{var n=r(862525),i=60103,o=60106;var a=60109,c=60110,u=60112;var l=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;i=s("react.element"),o=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),a=s("react.provider"),c=s("react.context"),u=s("react.forward_ref"),s("react.suspense"),l=s("react.memo"),p=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function h(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||b}function y(){}function g(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||b}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var k=g.prototype=new y;k.constructor=g,n(k,h.prototype),k.isPureReactComponent=!0;var m={current:null},O=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,o={},a=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)O.call(t,n)&&!w.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var l=Array(u),p=0;p<u;p++)l[p]=arguments[p+2];o.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:i,type:e,key:a,ref:c,props:o,_owner:m.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case i:case o:u=!0}}if(u)return a=a(u=e),e=""===n?"."+C(u,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),_(a,t,r,"",(function(e){return e}))):null!=a&&(j(a)&&(a=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var p=n+C(c=e[l],l);u+=_(c,t,r,p,a)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),l=0;!(c=e.next()).done;)u+=_(c=c.value,t,r,p=n+C(c,l++),a);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function N(e,t,r){if(null==e)return e;var n=[],i=0;return _(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function B(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function T(){var e=E.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
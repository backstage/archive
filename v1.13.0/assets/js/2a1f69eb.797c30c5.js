/*! For license information please see 2a1f69eb.797c30c5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[768161],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),d=o,f=l["".concat(c,".").concat(d)]||l[d]||h[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>l});n(827378);var r=n(603905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"oauth",title:"OAuth and OpenID Connect",description:"This section describes how Backstage allows plugins to request OAuth Access Tokens and OpenID Connect ID Tokens on behalf of the user, to be used for auth to various third party APIs"},c=void 0,u={unversionedId:"auth/oauth",id:"auth/oauth",title:"OAuth and OpenID Connect",description:"This section describes how Backstage allows plugins to request OAuth Access Tokens and OpenID Connect ID Tokens on behalf of the user, to be used for auth to various third party APIs",source:"@site/../docs/auth/oauth.md",sourceDirName:"auth",slug:"/auth/oauth",permalink:"/v1.13.0/docs/auth/oauth",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/oauth.md",tags:[],version:"current",frontMatter:{id:"oauth",title:"OAuth and OpenID Connect",description:"This section describes how Backstage allows plugins to request OAuth Access Tokens and OpenID Connect ID Tokens on behalf of the user, to be used for auth to various third party APIs"},sidebar:"docs",previous:{title:"Sign-in Identities and Resolvers",permalink:"/v1.13.0/docs/auth/identity-resolver"},next:{title:"OIDC provider from scratch",permalink:"/v1.13.0/docs/auth/oidc"}},p={},l=[{value:"Summary",id:"summary",level:2},{value:"Background",id:"background",level:2},{value:"OAuth in @backstage/core-app-api and auth-backend",id:"oauth-in-backstagecore-app-api-and-auth-backend",level:2},{value:"OAuth Flow",id:"oauth-flow",level:2},{value:"Sequence Diagram",id:"sequence-diagram",level:3}],h={toc:l};function d(e){var{components:t}=e,s=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},h,s),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section describes how Backstage allows plugins to request OAuth Access\nTokens and OpenID Connect ID Tokens on behalf of the user, to be used for auth\nto various third party APIs."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"There are occasions when the user wants to perform actions towards third party\nservices that require authorization via OAuth. Backstage provides standardized\n",(0,r.kt)("a",{parentName:"p",href:"/v1.13.0/docs/api/utility-apis"},"Utility APIs")," such as the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/packages/core-plugin-api/src/apis/definitions/auth.ts"},"GoogleAuthApi"),"\nfor that use-case. Backstage also includes a set of implementations of these\nAPIs that integrate with the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/plugins/auth-backend"},"auth-backend"),"\nplugin to provide a popup-based OAuth flow."),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"Access control in OAuth is implemented in terms of scope, which is a list of\npermissions given to the app. An OAuth service can issue Access Tokens that are\ntied to a certain set of scopes, such as viewing profile information, reading\nand/or writing user data in the service. The scope format and handling is\nspecific to each OAuth provider, and the set of available scopes are typically\nfound in the documentation describing the auth solution of the provider, for\nexample\n",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2/scopes"},"developers.google.com/identity/protocols/oauth2/scopes"),"."),(0,r.kt)("p",null,"As a part of logging in with an OAuth provider, the user needs to consent to\nboth the login itself and the set of scopes that the app is requesting to use.\nThis is done by loading a page provided by the OAuth provider, where a user can\nchoose an account to log in with, and accept or reject the request. If the user\naccepts the login request, a token is issued, and any holder of the token can\nuse it to make authenticated requests towards the third party service."),(0,r.kt)("h2",{id:"oauth-in-backstagecore-app-api-and-auth-backend"},"OAuth in @backstage/core-app-api and auth-backend"),(0,r.kt)("p",null,"The default OAuth implementation in Backstage is based on an OAuth server-side\noffline access flow, which means that it uses the backend as a helper in order\nto trade credentials. A benefit of this type of flow is that it does not require\nthe use of third party cookies, and is robust on a wide selection of browsers\nand privacy browsing plugins, strict security settings, etc."),(0,r.kt)("p",null,"The implementation also uses a popup-based flow, where auth requests are handled\nin a new popup window that is opened by the app. By using a popup-based flow it\nis possible to request authentication at any point in the app, without requiring\na redirect. Because of this there is no need to ask for all scopes upfront, or\ninterrupt the app with a redirect and forcing plugin authors to take care in\nrestoring state after a redirect has been made. All in all it makes it much\neasier to make authenticated requests inside a plugin."),(0,r.kt)("h2",{id:"oauth-flow"},"OAuth Flow"),(0,r.kt)("p",null,"The following describes the OAuth flow implemented by the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/plugins/auth-backend"},"auth-backend"),"\nand\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/packages/core-app-api/src/lib/AuthConnector/DefaultAuthConnector.ts"},"DefaultAuthConnector"),"\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/core-app-api"),"."),(0,r.kt)("p",null,"Component and APIs can request Access or ID Tokens from any available Auth\nprovider. If there already exists a cached fresh token that covers (at least)\nthe requested scopes, it will be returned immediately. If the OAuth provider\nimplements token refreshes, this check will also trigger a token refresh attempt\nif no session is available."),(0,r.kt)("p",null,"If new scopes are requested, or the user is not yet logged in with that\nprovider, a dialog is shown informing the user that they need to log in with the\nspecified provider. If the user agrees to continue, a separate popup window is\nopened that implements the entire consent flow."),(0,r.kt)("p",null,"The popup window is pointed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/start")," endpoint of the auth provider in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"auth-backend")," plugin, which then redirects to the OAuth consent screen of the\nprovider. The consent screen is controlled by the OAuth provider, and will do\nthings like prompting the user to log in with an account, and possibly reviewing\nthe set of requested scopes. If the login request is accepted, the popup window\nwill be redirected back to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/handler/frame")," endpoint of the auth backend.\nThe redirect URL will contain a short-term authorization code, which is picked\nup by the backend and exchanged for long-term tokens via a call to the OAuth\nprovider. The Access and possibly ID Token is then handed back to the main\nBackstage page via ",(0,r.kt)("inlineCode",{parentName:"p"},"postMessage"),". If the OAuth provider implements offline\nrefresh, a refresh token will be stored in an HTTP-only cookie scoped to the\nspecific provider in the ",(0,r.kt)("inlineCode",{parentName:"p"},"auth-backend")," plugin."),(0,r.kt)("p",null,"To protect against certain attacks, the above flow also includes a simple nonce\ncheck and a lightweight CSRF protection header. The nonce check is done to\nprotect against attacks where an attacker tricks a user to log in with an\naccount of the attacker's choosing in order to gather data. In the first part of\nthe flow where the popup is directed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/start")," endpoint, a nonce is\ngenerated and placed in both a cookie and the OAuth state. The nonces received\nin the cookie and OAuth state in the redirect handler are then checked, and the\nauth attempt will fail if they're not valid. The CSRF protection for the\n",(0,r.kt)("inlineCode",{parentName:"p"},"/refresh")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/logout")," endpoints is implemented by simply checking for the\npresence of a ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Requested-With")," header."),(0,r.kt)("p",null,"The target origin of the ",(0,r.kt)("inlineCode",{parentName:"p"},"postMessage")," is also of importance to keep the flow\nsecure. It is configured to a single value for each auth provider and\nenvironment. Without a single configured origin, any page could open a popup and\nrequest an access token."),(0,r.kt)("h3",{id:"sequence-diagram"},"Sequence Diagram"),(0,r.kt)("p",null,"The following diagram visualizes the flow described in the previous section."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sequence Diagram",src:n(68637).Z,width:"1214",height:"1145"})))}d.isMDXComponent=!0},68637:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/oauth-popup-flow-7431baabe02096c65743ce4eb4b4cd5a.svg"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,s,c=o(e),u=1;u<arguments.length;u++){for(var p in i=Object(arguments[u]))n.call(i,p)&&(c[p]=i[p]);if(t){s=t(i);for(var l=0;l<s.length;l++)r.call(i,s[l])&&(c[s[l]]=i[s[l]])}}return c}},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;var i=60109,s=60110,c=60112;var u=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),a=l("react.portal"),l("react.fragment"),l("react.strict_mode"),l("react.profiler"),i=l("react.provider"),s=l("react.context"),c=l("react.forward_ref"),l("react.suspense"),u=l("react.memo"),p=l("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function g(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||f}function m(){}function y(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var k=y.prototype=new m;k.constructor=y,r(k,g.prototype),k.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,a={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!O.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var u=Array(c),p=0;p<c;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:v.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===r?"."+T(c,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),C(i,t,n,"",(function(e){return e}))):null!=i&&(A(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var p=r+T(s=e[u],u);c+=C(s,t,n,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(s=e.next()).done;)c+=C(s=s.value,t,n,p=r+T(s,u++),i);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function I(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var q={current:null};function D(){var e=q.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
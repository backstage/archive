/*! For license information please see a44eafd1.91ad66f2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[938306],{603905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>b});var n=t(667294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=a,b=s["".concat(i,".").concat(d)]||s[d]||f[d]||o;return t?n.createElement(b,c(c({ref:r},p),{},{components:t})):n.createElement(b,c({ref:r},p))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[s]="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},290986:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>p});t(827378);var n=t(603905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const c={id:"backend-common.bitbucketserverurlreader.readurl",title:"BitbucketServerUrlReader.readUrl()",description:"API reference for BitbucketServerUrlReader.readUrl()"},l=void 0,i={unversionedId:"reference/backend-common.bitbucketserverurlreader.readurl",id:"reference/backend-common.bitbucketserverurlreader.readurl",title:"BitbucketServerUrlReader.readUrl()",description:"API reference for BitbucketServerUrlReader.readUrl()",source:"@site/../docs/reference/backend-common.bitbucketserverurlreader.readurl.md",sourceDirName:"reference",slug:"/reference/backend-common.bitbucketserverurlreader.readurl",permalink:"/v1.12.0/docs/reference/backend-common.bitbucketserverurlreader.readurl",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-common.bitbucketserverurlreader.readurl.md",tags:[],version:"current",frontMatter:{id:"backend-common.bitbucketserverurlreader.readurl",title:"BitbucketServerUrlReader.readUrl()",description:"API reference for BitbucketServerUrlReader.readUrl()"}},u={},p=[{value:"Parameters",id:"parameters",level:2}],s={toc:p};function f(e){var{components:r}=e,t=o(e,["components"]);return(0,n.kt)("wrapper",a({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/v1.12.0/docs/reference/backend-common"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/backend-common"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/v1.12.0/docs/reference/backend-common.bitbucketserverurlreader"}),(0,n.kt)("inlineCode",{parentName:"a"},"BitbucketServerUrlReader"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/v1.12.0/docs/reference/backend-common.bitbucketserverurlreader.readurl"}),(0,n.kt)("inlineCode",{parentName:"a"},"readUrl"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"readUrl(url: string, options?: ReadUrlOptions): Promise<ReadUrlResponse>;\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"url"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/backend-plugin-api.readurloptions"}),"ReadUrlOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("i",null,"(Optional)"))))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",a({parentName:"p"},{href:"/v1.12.0/docs/reference/backend-plugin-api.readurlresponse"}),"ReadUrlResponse"),">"))}f.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var c,l,i=a(e),u=1;u<arguments.length;u++){for(var p in c=Object(arguments[u]))t.call(c,p)&&(i[p]=c[p]);if(r){l=r(c);for(var s=0;s<l.length;s++)n.call(c,l[s])&&(i[l[s]]=c[l[s]])}}return i}},541535:(e,r,t)=>{var n=t(862525),a=60103,o=60106;var c=60109,l=60110,i=60112;var u=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;a=s("react.element"),o=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),c=s("react.provider"),l=s("react.context"),i=s("react.forward_ref"),s("react.suspense"),u=s("react.memo"),p=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||b}function v(){}function k(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||b}y.prototype.isReactComponent={},y.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var h=k.prototype=new v;h.constructor=k,n(h,y.prototype),h.isPureReactComponent=!0;var g={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,o={},c=null,l=null;if(null!=r)for(n in void 0!==r.ref&&(l=r.ref),void 0!==r.key&&(c=""+r.key),r)O.call(r,n)&&!j.hasOwnProperty(n)&&(o[n]=r[n]);var i=arguments.length-2;if(1===i)o.children=t;else if(1<i){for(var u=Array(i),p=0;p<i;p++)u[p]=arguments[p+2];o.children=u}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:a,type:e,key:c,ref:l,props:o,_owner:g.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function U(e,r,t,n,c){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case o:i=!0}}if(i)return c=c(i=e),e=""===n?"."+S(i,0):n,Array.isArray(c)?(t="",null!=e&&(t=e.replace(N,"$&/")+"/"),U(c,r,t,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,r){return{$$typeof:a,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(N,"$&/")+"/")+e)),r.push(c)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var p=n+S(l=e[u],u);i+=U(l,r,t,p,c)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(l=e.next()).done;)i+=U(l=l.value,r,t,p=n+S(l,u++),c);else if("object"===l)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function _(e,r,t){if(null==e)return e;var n=[],a=0;return U(e,n,"","",(function(e){return r.call(t,e,a++)})),n}function R(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function x(){var e=E.current;if(null===e)throw Error(d(321));return e}},827378:(e,r,t)=>{t(541535)}}]);
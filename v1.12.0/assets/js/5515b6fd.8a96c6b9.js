/*! For license information please see 5515b6fd.8a96c6b9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[757049],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),y=o,d=p["".concat(l,".").concat(y)]||p[y]||f[y]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},259834:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"index",title:"Deploying Backstage",sidebar_label:"Overview",description:"Packaging Backstage and deploying to production"},c=void 0,l={unversionedId:"deployment/index",id:"deployment/index",title:"Deploying Backstage",description:"Packaging Backstage and deploying to production",source:"@site/../docs/deployment/index.md",sourceDirName:"deployment",slug:"/deployment/",permalink:"/v1.12.0/docs/deployment/",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/deployment/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Deploying Backstage",sidebar_label:"Overview",description:"Packaging Backstage and deploying to production"},sidebar:"docs",previous:{title:"5. Frontend Components with Authorization",permalink:"/v1.12.0/docs/permissions/plugin-authors/05-frontend-authorization"},next:{title:"Scaling",permalink:"/v1.12.0/docs/deployment/scaling"}},s={},u=[],p={toc:u};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Backstage provides tooling to build Docker images, but can be deployed with or\nwithout Docker on many different infrastructures. The ",(0,n.kt)("em",{parentName:"p"},"best")," way to deploy\nBackstage is in ",(0,n.kt)("em",{parentName:"p"},"the same way")," you deploy other software at your organization."),(0,n.kt)("p",null,"This documentation shows common examples that may be useful when deploying\nBackstage for the first time, or for those without established deployment\npractices."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: The ",(0,n.kt)("em",{parentName:"p"},"easiest")," way to explore Backstage is to visit the\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://demo.backstage.io"}),"live demo site"),".")),(0,n.kt)("p",null,"At Spotify, we deploy software generally by:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Building a Docker image"),(0,n.kt)("li",{parentName:"ol"},"Storing the Docker image on a container registry"),(0,n.kt)("li",{parentName:"ol"},"Referencing the image in a Kubernetes Deployment YAML"),(0,n.kt)("li",{parentName:"ol"},"Applying that Deployment to a Kubernetes cluster")),(0,n.kt)("p",null,"This method is covered in ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/deployment/docker"}),"Building a Docker image")," and\n",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/deployment/k8s"}),"Deploying with Kubernetes"),"."),(0,n.kt)("p",null,"There is also an example of deploying on ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/deployment/heroku"}),"Heroku"),", which only\nrequires the first two steps."),(0,n.kt)("p",null,"There is also a contrib guide to deploying Backstage with\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/master/contrib/docs/tutorials/aws-fargate-deployment.md"}),"AWS Fargate and Aurora PostgreSQL"),"."),(0,n.kt)("p",null,"Please consider contributing other deployment guides if you get Backstage set up\non common infrastructure, it would be a great benefit to the community."),(0,n.kt)("p",null,"If you need to run Backstage behind a corporate proxy, this\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/master/contrib/docs/tutorials/help-im-behind-a-corporate-proxy.md"}),"contributed guide"),"\nmay help."))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,l=o(e),s=1;s<arguments.length;s++){for(var u in i=Object(arguments[s]))r.call(i,u)&&(l[u]=i[u]);if(t){c=t(i);for(var p=0;p<c.length;p++)n.call(i,c[p])&&(l[c[p]]=i[c[p]])}}return l}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var i=60109,c=60110,l=60112;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),c=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),s=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function b(){}function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var k=h.prototype=new b;k.constructor=h,n(k,g.prototype),k.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,a={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,n)&&!O.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:v.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var x=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return i=i(l=e),e=""===n?"."+S(l,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(x,"$&/")+"/"),_(i,t,r,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(x,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=n+S(c=e[s],s);l+=_(c,t,r,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(c=e.next()).done;)l+=_(c=c.value,t,r,u=n+S(c,s++),i);else if("object"===c)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function N(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function D(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function T(){var e=E.current;if(null===e)throw Error(y(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
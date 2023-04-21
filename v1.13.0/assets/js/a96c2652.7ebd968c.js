"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[962945],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),b=o,g=p["".concat(s,".").concat(b)]||p[b]||f[b]||a;return r?n.createElement(g,c(c({ref:t},l),{},{components:r})):n.createElement(g,c({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},221262:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>p});r(667294);var n=r(603905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"New Backstage feature: Kubernetes for Service owners",author:"Matthew Clarke, Spotify",authorURL:"https://github.com/mclarke47"},s=void 0,u={permalink:"/v1.13.0/blog/2021/01/12/new-backstage-feature-kubernetes-for-service-owners",source:"@site/blog/2021-01-12-new-backstage-feature-kubernetes-for-service-owners.md",title:"New Backstage feature: Kubernetes for Service owners",description:"Animation of Kubernetes and cloud provider icons becoming the Backstage logo",date:"2021-01-12T00:00:00.000Z",formattedDate:"January 12, 2021",tags:[],readingTime:3.59,hasTruncateMarker:!0,authors:[{name:"Matthew Clarke, Spotify",url:"https://github.com/mclarke47"}],frontMatter:{title:"New Backstage feature: Kubernetes for Service owners",author:"Matthew Clarke, Spotify",authorURL:"https://github.com/mclarke47"},prevItem:{title:"Where do you start when adopting Backstage?",permalink:"/v1.13.0/blog/2021/05/20/adopting-backstage"},nextItem:{title:"Announcing the Backstage Stability Index",permalink:"/v1.13.0/blog/2020/12/22/stability-index"}},l={authorsImageUrls:[void 0]},p=[],f={toc:p};function b(e){var{components:t}=e,i=c(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Animation of Kubernetes and cloud provider icons becoming the Backstage logo",src:r(285927).Z,width:"800",height:"450"})),(0,n.kt)("p",null,"TLDR; We\u2019re rethinking the Kubernetes developer experience with a new feature: a Kubernetes monitoring tool that\u2019s designed around the needs of service owners, not cluster admins. Now developers can easily check the health of their services no matter how or where those services are deployed \u2014 whether it\u2019s on a local host for testing or in production on dozens of clusters around the world."),(0,n.kt)("p",null,"And since Backstage uses the native Kubernetes API, the feature works with whichever cloud provider (AWS, Azure, GCP, etc.) or managed service (OpenShift, IBM Cloud, GKE, etc.) you already use."))}b.isMDXComponent=!0},285927:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/backstage-k8s-1-hero-85649533931182a78497138b2dc803c2.gif"}}]);
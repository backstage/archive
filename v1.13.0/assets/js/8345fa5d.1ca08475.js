"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[159610],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),g=o,m=l["".concat(s,".").concat(g)]||l[g]||f[g]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},588779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>l});r(667294);var n=r(603905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={title:"Announcing Backstage Software Templates",author:"Stefan \xc5lund, Spotify",authorURL:"https://twitter.com/stalund"},s=void 0,u={permalink:"/v1.13.0/blog/2020/08/05/announcing-backstage-software-templates",source:"@site/blog/2020-08-05-announcing-backstage-software-templates.md",title:"Announcing Backstage Software Templates",description:"TL;DR Today we are announcing a new Backstage feature: Software Templates. Simplify setup, standardize tooling, and deploy with the click of a button. Using automated templates, your engineers can spin up a new microservice, website, or other software component with your organization\u2019s best practices built-in, right from the start.",date:"2020-08-05T00:00:00.000Z",formattedDate:"August 5, 2020",tags:[],readingTime:3.885,hasTruncateMarker:!0,authors:[{name:"Stefan \xc5lund, Spotify",url:"https://twitter.com/stalund"}],frontMatter:{title:"Announcing Backstage Software Templates",author:"Stefan \xc5lund, Spotify",authorURL:"https://twitter.com/stalund"},prevItem:{title:"Announcing TechDocs: Spotify\u2019s docs-like-code plugin for Backstage",permalink:"/v1.13.0/blog/2020/09/08/announcing-tech-docs"},nextItem:{title:"How to enable authentication in Backstage using Passport",permalink:"/v1.13.0/blog/2020/07/01/how-to-enable-authentication-in-backstage-using-passport"}},p={authorsImageUrls:[void 0]},l=[],f={toc:l};function g(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"TL;DR")," Today we are announcing a new Backstage feature: Software Templates. Simplify setup, standardize tooling, and deploy with the click of a button. Using automated templates, your engineers can spin up a new microservice, website, or other software component with your organization\u2019s best practices built-in, right from the start."),(0,n.kt)("video",{width:"100%",height:"100%",controls:!0},(0,n.kt)("source",{src:"/blog/assets/2020-08-05/feature.mp4",type:"video/mp4"})))}g.isMDXComponent=!0}}]);
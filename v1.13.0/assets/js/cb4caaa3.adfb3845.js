"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[805389],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),g=a,y=l["".concat(s,".").concat(g)]||l[g]||f[g]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},894014:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>l});r(667294);var n=r(603905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={title:"Backstage Security Audit & Updates",author:"Patrik Oldsberg, Spotify",authorURL:"https://github.com/Rugvip"},s=void 0,u={permalink:"/v1.13.0/blog/2022/08/23/backstage-security-audit",source:"@site/blog/2022-08-23-backstage-security-audit.md",title:"Backstage Security Audit & Updates",description:"TL;DR Backstage\u2019s security posture continues to mature! Today, we\u2019re releasing a report from an independent security audit and the first version of the Backstage Threat Model.",date:"2022-08-23T00:00:00.000Z",formattedDate:"August 23, 2022",tags:[],readingTime:3.845,hasTruncateMarker:!0,authors:[{name:"Patrik Oldsberg, Spotify",url:"https://github.com/Rugvip"}],frontMatter:{title:"Backstage Security Audit & Updates",author:"Patrik Oldsberg, Spotify",authorURL:"https://github.com/Rugvip"},prevItem:{title:"FYI \ud83d\udce3 The Plugin Analytics API",permalink:"/v1.13.0/blog/2022/09/08/fyi-plugin-analytics-api"},nextItem:{title:"Releasing Backstage Search 1.0",permalink:"/v1.13.0/blog/2022/07/19/releasing-backstage-search-1.0"}},p={authorsImageUrls:[void 0]},l=[],f={toc:l};function g(e){var{components:t}=e,c=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},f,c),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"TL;DR")," Backstage\u2019s security posture continues to mature! Today, we\u2019re releasing a report from an independent security audit and the first version of the Backstage Threat Model."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Backstage Security Audit &amp; Updates",src:r(405702).Z,width:"1200",height:"630"})),(0,n.kt)("p",null,"As an ",(0,n.kt)("a",{parentName:"p",href:"https://www.cncf.io/blog/2022/03/15/backstage-project-joins-the-cncf-incubator/"},"Incubating project")," within the ",(0,n.kt)("a",{parentName:"p",href:"https://www.cncf.io/"},"Cloud Native Computing Foundation (CNCF)"),", Backstage was fortunate enough to take advantage of a sponsored security audit. The ",(0,n.kt)("a",{parentName:"p",href:"https://ostif.org/"},"Open Source Technology Improvement Fund (OSTIF)")," sponsored the audit as part of its ongoing efforts to secure the open source software ecosystem, and the audit itself was performed by ",(0,n.kt)("a",{parentName:"p",href:"https://x41-dsec.de/"},"X41 D-Sec"),". Our goal with the audit was to evaluate and improve Backstage\u2019s security posture, focusing on the core Backstage framework and plugins."))}g.isMDXComponent=!0},405702:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/backstage-security-audit-d0283e8fb2fc980642fd9b4be7057cf5.png"}}]);
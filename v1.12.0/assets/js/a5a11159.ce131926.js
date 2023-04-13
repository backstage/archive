"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[182564],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,h=p["".concat(s,".").concat(m)]||p[m]||f[m]||o;return r?a.createElement(h,c(c({ref:t},u),{},{components:r})):a.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},833244:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>u});r(667294);var a=r(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const c={title:"Releasing Backstage Search 1.0",author:"Emma Indal, Spotify",authorURL:"https://www.linkedin.com/in/emma-indal"},i=void 0,s={permalink:"/v1.12.0/blog/2022/07/19/releasing-backstage-search-1.0",source:"@site/blog/2022-07-19-releasing-backstage-search-1.0.md",title:"Releasing Backstage Search 1.0",description:"TL;DR If you\u2019ve been waiting for Backstage Search to come out of beta, we\u2019re excited to announce that Backstage Search 1.0 is here!",date:"2022-07-19T00:00:00.000Z",formattedDate:"July 19, 2022",tags:[],readingTime:2.99,hasTruncateMarker:!0,authors:[{name:"Emma Indal, Spotify",url:"https://www.linkedin.com/in/emma-indal"}],frontMatter:{title:"Releasing Backstage Search 1.0",author:"Emma Indal, Spotify",authorURL:"https://www.linkedin.com/in/emma-indal"},prevItem:{title:"Backstage Security Audit & Updates",permalink:"/v1.12.0/blog/2022/08/23/backstage-security-audit"},nextItem:{title:"Introducing the TechDocs Addon Framework",permalink:"/v1.12.0/blog/2022/05/13/techdocs-addon-framework"}},l={authorsImageUrls:[void 0]},u=[],p={toc:u};function f(e){var{components:t}=e,c=o(e,["components"]);return(0,a.kt)("wrapper",n({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TL;DR")," If you\u2019ve been waiting for Backstage Search to come out of beta, we\u2019re excited to announce that ",(0,a.kt)("a",n({parentName:"p"},{href:"https://backstage.io/docs/features/search/#backstage-search-10"}),"Backstage Search 1.0")," is here!"),(0,a.kt)("p",null,"We first released the Backstage Search Platform over a year ago. Backstage Search Platform is a search experience built for you, by you."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Releasing Backstage Search 1.0",src:r(822023).Z,width:"1201",height:"631"})),(0,a.kt)("p",null,"Backstage Search Platform makes it possible for you to search across your entire software ecosystem. With a Search platform that is customizable and extendable, you can identify your needs within your organization and set up search to solve these problems. Whether it is to search through the Software Catalog or technical documentation generated by the TechDocs plugin."))}f.isMDXComponent=!0},822023:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/releasing-backstage-search-v1-9712f17175a99b07d3c0fb933cc3f3a4.png"}}]);
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[161604],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(r),g=o,b=l["".concat(u,".").concat(g)]||l[g]||f[g]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},294779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>l});r(667294);var n=r(603905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={title:"Introducing Lighthouse for Backstage",author:"Paul Marbach, Spotify",authorURL:"http://twitter.com/fastfrwrd",authorImageURL:"https://pbs.twimg.com/profile_images/1224058798958088192/JPxS8uzR_400x400.jpg"},u=void 0,p={permalink:"/v1.13.0/blog/2020/04/06/lighthouse-plugin",source:"@site/blog/2020-04-06-lighthouse-plugin.md",title:"Introducing Lighthouse for Backstage",description:"image illustrating the Lighthouse plugin for Backstage",date:"2020-04-06T00:00:00.000Z",formattedDate:"April 6, 2020",tags:[],readingTime:2,hasTruncateMarker:!0,authors:[{name:"Paul Marbach, Spotify",url:"http://twitter.com/fastfrwrd",imageURL:"https://pbs.twimg.com/profile_images/1224058798958088192/JPxS8uzR_400x400.jpg"}],frontMatter:{title:"Introducing Lighthouse for Backstage",author:"Paul Marbach, Spotify",authorURL:"http://twitter.com/fastfrwrd",authorImageURL:"https://pbs.twimg.com/profile_images/1224058798958088192/JPxS8uzR_400x400.jpg"},prevItem:{title:"How to quickly set up Backstage",permalink:"/v1.13.0/blog/2020/04/30/how-to-quickly-set-up-backstage"},nextItem:{title:"What the heck is Backstage anyway?",permalink:"/v1.13.0/blog/2020/03/18/what-is-backstage"}},s={authorsImageUrls:[void 0]},l=[],f={toc:l};function g(e){var{components:t}=e,c=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,c),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image illustrating the Lighthouse plugin for Backstage",src:r(979661).Z,width:"2249",height:"1308"})),(0,n.kt)("p",null,"We\u2019re proud to announce that our first internal plugin at Spotify has been open-sourced as part of Backstage. This plugin works with the newly open-sourced ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/spotify/lighthouse-audit-service"},"lighthouse-audit-service")," to run and track Lighthouse audits for your websites."))}g.isMDXComponent=!0},979661:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/lead-7129a22cda9f200e8c8ba655ad086573.png"}}]);
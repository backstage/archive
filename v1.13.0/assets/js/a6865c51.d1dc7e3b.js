"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[885756],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=o,d=p["".concat(c,".").concat(g)]||p[g]||m[g]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},665744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>p});n(667294);var r=n(603905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"New Cost Insights plugin: The engineer\u2019s solution to taming cloud costs",author:"Janisa Anandamohan, Spotify",authorURL:"https://twitter.com/janisa_a"},c=void 0,l={permalink:"/v1.13.0/blog/2020/10/22/cost-insights-plugin",source:"@site/blog/2020-10-22-cost-insights-plugin.md",title:"New Cost Insights plugin: The engineer\u2019s solution to taming cloud costs",description:"How did Spotify save millions on cloud costs within a matter of months?? We made cost optimization just another part of the daily development process. Our newly open sourced Cost Insights plugin makes a team\u2019s cloud costs visible \u2014 and actionable \u2014 right inside Backstage. So engineers can see the impact of their cloud usage (down to a product and resource level) and make optimizations wherever and whenever it makes sense. By managing cloud costs from the ground up, you can make smarter decisions that let you continue to build and scale quickly, without wasting resources.",date:"2020-10-22T00:00:00.000Z",formattedDate:"October 22, 2020",tags:[],readingTime:5.525,hasTruncateMarker:!0,authors:[{name:"Janisa Anandamohan, Spotify",url:"https://twitter.com/janisa_a"}],frontMatter:{title:"New Cost Insights plugin: The engineer\u2019s solution to taming cloud costs",author:"Janisa Anandamohan, Spotify",authorURL:"https://twitter.com/janisa_a"},prevItem:{title:"Announcing the Backstage Stability Index",permalink:"/v1.13.0/blog/2020/12/22/stability-index"},nextItem:{title:"How to design for Backstage (even if you\u2019re not a designer)",permalink:"/v1.13.0/blog/2020/09/30/backstage-design-system"}},u={authorsImageUrls:[void 0]},p=[],m={toc:p};function g(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"How did Spotify save millions on cloud costs within a matter of months?? We made cost optimization just another part of the daily development process. Our newly open sourced ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/plugins/cost-insights"},"Cost Insights plugin")," makes a team\u2019s cloud costs visible \u2014 and actionable \u2014 right inside Backstage. So engineers can see the impact of their cloud usage (down to a product and resource level) and make optimizations wherever and whenever it makes sense. By managing cloud costs from the ground up, you can make smarter decisions that let you continue to build and scale quickly, without wasting resources."),(0,r.kt)("iframe",{width:"780",height:"440",src:"https://www.youtube.com/embed/YLAd5hdXR_Q",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,r.kt)("p",null,"Are we turning engineers into accountants? Nope, we\u2019re just letting engineers do what they do best, in the place that feels natural to them: inside Backstage."))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[392671],{603905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>f});var r=a(667294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},h=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=u(a),p=o,f=c["".concat(l,".").concat(p)]||c[p]||g[p]||i;return a?r.createElement(f,n(n({ref:t},h),{},{components:a})):r.createElement(f,n({ref:t},h))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,n[1]=s;for(var u=2;u<i;u++)n[u]=a[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},890409:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>n,metadata:()=>l,toc:()=>h});a(667294);var r=a(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const n={title:"Introducing Lighthouse for Backstage",author:"Paul Marbach, Spotify",authorURL:"http://twitter.com/fastfrwrd",authorImageURL:"https://pbs.twimg.com/profile_images/1224058798958088192/JPxS8uzR_400x400.jpg"},s=void 0,l={permalink:"/v1.12.0/blog/2020/04/06/lighthouse-plugin",source:"@site/blog/2020-04-06-lighthouse-plugin.md",title:"Introducing Lighthouse for Backstage",description:"image illustrating the Lighthouse plugin for Backstage",date:"2020-04-06T00:00:00.000Z",formattedDate:"April 6, 2020",tags:[],readingTime:2,hasTruncateMarker:!0,authors:[{name:"Paul Marbach, Spotify",url:"http://twitter.com/fastfrwrd",imageURL:"https://pbs.twimg.com/profile_images/1224058798958088192/JPxS8uzR_400x400.jpg"}],frontMatter:{title:"Introducing Lighthouse for Backstage",author:"Paul Marbach, Spotify",authorURL:"http://twitter.com/fastfrwrd",authorImageURL:"https://pbs.twimg.com/profile_images/1224058798958088192/JPxS8uzR_400x400.jpg"},prevItem:{title:"How to quickly set up Backstage",permalink:"/v1.12.0/blog/2020/04/30/how-to-quickly-set-up-backstage"},nextItem:{title:"What the heck is Backstage anyway?",permalink:"/v1.12.0/blog/2020/03/18/what-is-backstage"}},u={authorsImageUrls:[void 0]},h=[{value:"What is Lighthouse?",id:"what-is-lighthouse",level:2},{value:"Lighthouse, tracked over time",id:"lighthouse-tracked-over-time",level:2},{value:"Using Lighthouse in Backstage",id:"using-lighthouse-in-backstage",level:2},{value:"A personal note",id:"a-personal-note",level:2}],c={toc:h};function g(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image illustrating the Lighthouse plugin for Backstage",src:a(979661).Z,width:"2249",height:"1308"})),(0,r.kt)("p",null,"We\u2019re proud to announce that our first internal plugin at Spotify has been open-sourced as part of Backstage. This plugin works with the newly open-sourced ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/spotify/lighthouse-audit-service"}),"lighthouse-audit-service")," to run and track Lighthouse audits for your websites."),(0,r.kt)("h2",o({},{id:"what-is-lighthouse"}),"What is Lighthouse?"),(0,r.kt)("p",null,"Google's ",(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.google.com/web/tools/lighthouse"}),"Lighthouse")," auditing tool for websites is a great open-source resource for benchmarking and improving the accessibility, performance, SEO, and best practices of your site."),(0,r.kt)("p",null,"At Spotify, we keep track of Lighthouse audit scores over time to look at trends and areas for investment. We particularly look to Lighthouse to give us ",(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.google.com/web/tools/lighthouse/v3/scoring#a11y"}),"accessibility recommendations"),"; in the next few months, we plan to roll out Lighthouse accessibility category scores as a benchmark metric for all websites at Spotify."),(0,r.kt)("h2",o({},{id:"lighthouse-tracked-over-time"}),"Lighthouse, tracked over time"),(0,r.kt)("p",null,"What makes the plugin unique is that we can track a website's audit performance over time using the main metrics that Lighthouse outputs, rather than simply running reports. The sparklines show, at a glance, how all of your websites are holding up over recent builds."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image of the audit list in the Lighthouse plugin",src:a(8755).Z,width:"3584",height:"1930"})),(0,r.kt)("p",null,"Lighthouse reports can be viewed directly in Backstage, with the ability to travel back and forth through your audit history, so you can quickly diagnose which release caused a performance or SEO regression."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image of the audit view in the Lighthouse plugin",src:a(891350).Z,width:"3584",height:"1938"})),(0,r.kt)("p",null,"Trigger an audit directly from Backstage, or trigger audits programmatically with your new lighthouse-audit-service instance. Schedule them after builds as a sort of smoke test, or trigger them on a schedule (as we do at Spotify) to get a daily snapshot of your website."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image of the create audit form in the Lighthouse plugin",src:a(884933).Z,width:"2930",height:"1544"})),(0,r.kt)("h2",o({},{id:"using-lighthouse-in-backstage"}),"Using Lighthouse in Backstage"),(0,r.kt)("p",null,"To learn how you can enable Lighthouse auditing within Backstage, head over to the ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/tree/master/plugins/lighthouse"}),"README")," for the plugin to get started."),(0,r.kt)("h2",o({},{id:"a-personal-note"}),"A personal note"),(0,r.kt)("p",null,"I want to thank the folks on the Backstage team for approaching me to open-source this plugin. I have found working on Backstage to be a really rewarding and fun time, and I'm so glad that the core team members have put in the effort to make Backstage something that anyone in the industry can use. I can't wait to play with all the plugins the community is going to create. I am hopeful that this plugin can help illustrate just a sliver of what we use Backstage for at Spotify."))}g.isMDXComponent=!0},8755:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/audit-list-f77e3ad5f5c9c8812d941db16cf3619d.png"},891350:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/audit-view-9e371d17035eb90390ed3550b42e4ba3.png"},884933:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-audit-11bdc17d5d7b7275c5f15a0a8d22c048.png"},979661:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/lead-7129a22cda9f200e8c8ba655ad086573.png"}}]);
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[530358],{603905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>g});var o=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||n;return a?o.createElement(g,s(s({ref:t},h),{},{components:a})):o.createElement(g,s({ref:t},h))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<n;c++)s[c]=a[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},338564:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>h});a(667294);var o=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},r.apply(this,arguments)}function n(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={title:"Backstage Service Catalog released in alpha",author:"Stefan \xc5lund, Spotify",authorURL:"http://twitter.com/stalund",image:"https://backstage.io/blog/assets/6/header.png"},i=void 0,l={permalink:"/v1.12.0/blog/2020/06/22/backstage-service-catalog-alpha",source:"@site/blog/2020-06-22-backstage-service-catalog-alpha.md",title:"Backstage Service Catalog released in alpha",description:"TL;DR Today we are announcing the availability of the Backstage Service Catalog in alpha. This has been the community\u2019s most requested feature. Even if the catalog is not ready for production yet, we think this release already demonstrates how Backstage can provide value for your company right out of the box. With your early input and feedback, we hope to create a stronger generally available product.",date:"2020-06-22T00:00:00.000Z",formattedDate:"June 22, 2020",tags:[],readingTime:3.7,hasTruncateMarker:!0,authors:[{name:"Stefan \xc5lund, Spotify",url:"http://twitter.com/stalund"}],frontMatter:{title:"Backstage Service Catalog released in alpha",author:"Stefan \xc5lund, Spotify",authorURL:"http://twitter.com/stalund",image:"https://backstage.io/blog/assets/6/header.png"},prevItem:{title:"How to enable authentication in Backstage using Passport",permalink:"/v1.12.0/blog/2020/07/01/how-to-enable-authentication-in-backstage-using-passport"},nextItem:{title:"Starting Phase 2: The Service Catalog",permalink:"/v1.12.0/blog/2020/05/22/phase-2-service-catalog"}},c={authorsImageUrls:[void 0]},h=[{value:"You asked, we listened",id:"you-asked-we-listened",level:2},{value:"What is the service catalog?",id:"what-is-the-service-catalog",level:2},{value:"What does alpha mean?",id:"what-does-alpha-mean",level:2}],u={toc:h};function p(e){var{components:t}=e,s=n(e,["components"]);return(0,o.kt)("wrapper",r({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TL;DR")," Today we are announcing the availability of the Backstage Service Catalog in alpha. This has been the community\u2019s most requested feature. Even if the catalog is not ready for production yet, we think this release already demonstrates how Backstage can provide value for your company right out of the box. With your early input and feedback, we hope to create a stronger generally available product."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(282991).Z,width:"2354",height:"1427"})),(0,o.kt)("h2",r({},{id:"you-asked-we-listened"}),"You asked, we listened"),(0,o.kt)("p",null,"When we ",(0,o.kt)("a",r({parentName:"p"},{href:"https://backstage.io/blog/2020/03/16/announcing-backstage"}),"released")," Backstage as an open source project back in March, it didn\u2019t have all of the features that our internal version of Backstage has today. One of the main reasons we pushed to release it, despite it being in such a nascent stage, was so that we could start building the next phase of Backstage around the community\u2019s needs. We\u2019ve had hours of conversations with so many of you \u2014 thank you to everyone who has jumped on a video call, attended one of our working sessions, or watched our ",(0,o.kt)("a",r({parentName:"p"},{href:"https://backstage.io/demos"}),"demo videos")," and provided feedback via ",(0,o.kt)("a",r({parentName:"p"},{href:"https://discord.com/invite/MUpMjP2"}),"Discord"),"."),(0,o.kt)("p",null,"Today, we wanted to share what we\u2019ve learned from talking with many of you at companies that have shown interest in adopting Backstage. Here it is in short:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The problem of scaling autonomous engineering organisations without creating too much complexity is not a unique problem to Spotify."),(0,o.kt)("li",{parentName:"ul"},'The "extensible frontend platform" that we focused on in the first phase of the project is not the only thing you are looking for.')),(0,o.kt)("p",null,"With these insights we decided to re-focus our efforts towards the most requested feature: the Backstage Service Catalog."),(0,o.kt)("h2",r({},{id:"what-is-the-service-catalog"}),"What is the service catalog?"),(0,o.kt)("p",null,"The Backstage Service Catalog \u2014 actually, a software catalog, since it includes more than just services \u2014 is a centralized system that keeps track of ownership and metadata for all the software in your ecosystem (services, websites, libraries, data pipelines, etc). The catalog is built around the concept of ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/architecture-decisions/adrs-adr002"}),"metadata yaml files")," stored together with the code, which are then harvested and visualized in Backstage."),(0,o.kt)("p",null,"This was our pitch for the virtues of a service catalog when we first ",(0,o.kt)("a",r({parentName:"p"},{href:"https://backstage.io/blog/2020/05/22/phase-2-service-catalog"}),"announced")," it as part of Phase 2:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"With a single catalog, Backstage makes it easy for a team to manage ten services \u2014 and makes it possible for your company to manage thousands of them. Because the system is practically self-organizing, it requires hardly any oversight from a governing or centralized team. Developers can get a uniform overview of all their software and related resources (such as server utilisation, data pipelines, pull request status), regardless of how and where they are running, as well as an easy way to onboard and manage those resources.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"On top of that, we have found that the service catalog is a great way to organise the infrastructure tools you use to manage the software as well. This is how Backstage creates one developer portal for all your tools. Rather than asking teams to jump between different infrastructure UI\u2019s (and incurring additional cognitive overhead each time they make a context switch), most of these tools can be organised around the entities in the catalog:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(475728).Z,width:"959",height:"276"})),(0,o.kt)("p",null,"You\u2019ll be able to see many of these virtues in action with this alpha release \u2014 though, with some caveats, of course, since it is, after all, an alpha."),(0,o.kt)("h2",r({},{id:"what-does-alpha-mean"}),"What does alpha mean?"),(0,o.kt)("p",null,'Alpha is our shorthand for "we don\u2019t yet think Backstage is ready for production, but we\u2019d love for you to test it and provide us with feedback". However, you should be able to try out the functionality of the service catalog:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Register software components (",(0,o.kt)("a",r({parentName:"li"},{href:"https://github.com/backstage/backstage/tree/master/packages/catalog-model/examples"}),"examples"),")"),(0,o.kt)("li",{parentName:"ol"},"See all components represented in the catalog"),(0,o.kt)("li",{parentName:"ol"},"Search across all components"),(0,o.kt)("li",{parentName:"ol"},"Get an overview of the metadata of the components"),(0,o.kt)("li",{parentName:"ol"},"Click through and get more information about a specific component (service, website, etc)"),(0,o.kt)("li",{parentName:"ol"},"See example tooling (plugins) that helps you manage the component")),(0,o.kt)("p",null,"As with most alpha releases, you should expect things to change quite a lot until we reach the beta stage (we\u2019re targeting the end of summer). There are obviously many things missing as well, but we wanted to start collecting feedback early and make it easier to see the end-to-end flow."),(0,o.kt)("p",null,"If you have feedback or questions, please open a ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/issues"}),"GitHub issue"),", ping us on ",(0,o.kt)("a",r({parentName:"p"},{href:"https://discord.gg/backstage-687207715902193673"}),"Discord chat")," or send us an email at ",(0,o.kt)("a",r({parentName:"p"},{href:"mailto:backstage-interest@spotify.com"}),"backstage-interest@spotify.com")," \ud83d\ude4f"),(0,o.kt)("p",null,"To get regular product updates and news about the Backstage community, sign up for the ",(0,o.kt)("a",r({parentName:"p"},{href:"https://info.backstage.spotify.com/newsletter_subscribe"}),"Backstage newsletter"),"."))}p.isMDXComponent=!0},475728:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/tabs-abfdf72185d3ceb1d92c4237f7f78809.png"},282991:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/header-93351b4254863212ce2c149a2a5ea388.png"}}]);
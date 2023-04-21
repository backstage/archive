"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[571370],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=a,d=p["".concat(l,".").concat(g)]||p[g]||f[g]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},777211:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});r(667294);var n=r(603905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={title:"Announcing Backstage",author:"Stefan \xc5lund, Spotify",authorURL:"http://twitter.com/stalund",authorImageURL:"https://pbs.twimg.com/profile_images/121166861/6919c047c0d0edaace78c3009b28e917-user-full-200-130.generated_400x400.jpg"},l=void 0,c={permalink:"/v1.13.0/blog/2020/03/16/announcing-backstage",source:"@site/blog/2020-03-16-announcing-backstage.md",title:"Announcing Backstage",description:"What is Backstage?",date:"2020-03-16T00:00:00.000Z",formattedDate:"March 16, 2020",tags:[],readingTime:3.515,hasTruncateMarker:!0,authors:[{name:"Stefan \xc5lund, Spotify",url:"http://twitter.com/stalund",imageURL:"https://pbs.twimg.com/profile_images/121166861/6919c047c0d0edaace78c3009b28e917-user-full-200-130.generated_400x400.jpg"}],frontMatter:{title:"Announcing Backstage",author:"Stefan \xc5lund, Spotify",authorURL:"http://twitter.com/stalund",authorImageURL:"https://pbs.twimg.com/profile_images/121166861/6919c047c0d0edaace78c3009b28e917-user-full-200-130.generated_400x400.jpg"},prevItem:{title:"What the heck is Backstage anyway?",permalink:"/v1.13.0/blog/2020/03/18/what-is-backstage"}},u={authorsImageUrls:[void 0]},p=[{value:"What is Backstage?",id:"what-is-backstage",level:2},{value:"As simple as writing a plugin.",id:"as-simple-as-writing-a-plugin",level:2},{value:"The Spotify story",id:"the-spotify-story",level:2},{value:"Project roadmap",id:"project-roadmap",level:2}],f={toc:p};function g(e){var{components:t}=e,s=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},f,s),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-backstage"},"What is Backstage?"),(0,n.kt)("p",null,"Backstage is Spotify's open source platform for building developer portals."),(0,n.kt)("p",null,"It\u2019s the first open source infrastructure platform by Spotify that allows you to focus on building your application instead of reinventing the button. With an elegant and unified, yet opinionated UI/UX for all your tooling and infrastructure, Backstage enables engineers to get up and running faster, which ultimately makes their lives easier and more productive."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:r(354767).Z,width:"1552",height:"989"})),(0,n.kt)("h2",{id:"as-simple-as-writing-a-plugin"},"As simple as writing a plugin."),(0,n.kt)("p",null,"Backstage makes it easy to unify all of your infrastructure tooling, services, and documentation under a single, easy-to-use interface. So your engineers will always know where to find the right tool for the job. And engineers will already know how to use each tool \u2014 because everything uses the same, familiar UI."),(0,n.kt)("p",null,"The number of open source infrastructure projects and tools ",(0,n.kt)("a",{parentName:"p",href:"https://landscape.cncf.io/"},"landscape")," is exploding. As the sheer volume of projects increases, companies and their engineers find it increasingly difficult to keep track and adopt all of the tooling fast enough to keep pace. Most of the tools were built by a different individual, team, or company, which means that there is no single UI/UX, and simply getting the tool installed and started can be a painful challenge- let alone wrangling each tool to work with one another within your existing ecosystem. Due to varying qualities and the varying UI/UX of each open source project, we'd like to introduce Backstage as a best-of-breed platform for developers to use... all in service of ensuring a flawless, consistent user experience."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"illustration",src:r(868910).Z,width:"1354",height:"865"})),(0,n.kt)("h2",{id:"the-spotify-story"},"The Spotify story"),(0,n.kt)("p",null,"A best-in-class developer portal \u2014 from a music company? Since the very beginning, Spotify has been known for its agile, autonomous engineering culture. More than music, we\u2019re a tech company that has always put engineers first, empowering our developers with the ability to innovate quickly and at scale. Backstage is the natural result of that focus."),(0,n.kt)("p",null,"Since adopting Backstage internally at Spotify, we\u2019ve seen a 55% decrease in onboarding time for our engineers (as measured by time until 10th pull request). Over 280 engineering teams inside Spotify are using Backstage to manage 2,000+ backend services, 300+ websites, 4,000+ data pipelines, and 200+ mobile features."),(0,n.kt)("h2",{id:"project-roadmap"},"Project roadmap"),(0,n.kt)("p",null,"We created Backstage about 4 years ago, and today, we\u2019ve decided to share the goodness with the greater engineering community. While our version of Backstage has had the benefit of time to mature and evolve, the first iteration of our open source version is still nascent. I wanted to take a moment to share with you what our vision for Backstage OSS is so that 1. users and our community gain a better understanding of where we\u2019re envisioning the product to go and more importantly, 2. you can provide input and feedback so that together, we can create a better infrastructure experience for developers everywhere."),(0,n.kt)("p",null,"We are envisioning three phases of the project and we have already begun work on various aspects of these phases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Phase 1:")," Extensible frontend platform (now) - You will be able to easily create a single consistent UI layer for your internal infrastructure and tools. A set of reusable UX patterns and components help ensure a consistent experience between tools.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Phase 2:")," Manage your stuff (next 2-3 months) - Manage anything from microservices to software components to infrastructure and your service catalog. Regardless of whether you want to create a new library, view service deployment status in Kubernetes, or check the test coverage for a website -- Backstage will provide all of those tools - and many more - in a single developer portal.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Phase 3:")," Ecosystem (later) - Everyone's infrastructure stack is different. By fostering a vibrant community of contributors we hope to provide an ecosystem of Open Source plugins/integrations that allows you to pick the tools that match your stack."))),(0,n.kt)("p",null,"Our vision for Backstage is for it to become the trusted standard toolbox (read: UI layer) for the open source infrastructure landscape. Think of it like Kubernetes for developer experience. We realize this is an ambitious goal. We can\u2019t do it alone. If this sounds interesting or you'd like to help us shape our product vision, we'd love to talk. You can email us directly: ",(0,n.kt)("a",{parentName:"p",href:"mailto:backstage-interest@spotify.com"},"backstage-interest@spotify.com"),"."))}g.isMDXComponent=!0},354767:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/blog_1-2f866d19821c1dfe6e4a1f6baf879715.png"},868910:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/illustration-99a9e6cef4809097daeb356e602ceeef.svg"}}]);
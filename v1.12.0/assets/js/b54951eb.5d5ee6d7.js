"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[859901],{603905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(667294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),g=o,m=p["".concat(l,".").concat(g)]||p[g]||h[g]||n;return a?r.createElement(m,s(s({ref:t},u),{},{components:a})):r.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},319599:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});a(667294);var r=a(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function n(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const s={title:"Starting Phase 2: The Service Catalog",author:"Stefan \xc5lund, Spotify",authorURL:"http://twitter.com/stalund",authorImageURL:"https://pbs.twimg.com/profile_images/121166861/6919c047c0d0edaace78c3009b28e917-user-full-200-130.generated_400x400.jpg"},i=void 0,l={permalink:"/v1.12.0/blog/2020/05/22/phase-2-service-catalog",source:"@site/blog/2020-05-22-phase-2-service-catalog.md",title:"Starting Phase 2: The Service Catalog",description:"TL;DR Thanks to the help from the Backstage community, we\u2019ve made excellent progress and are now moving into Phase 2 of Backstage \u2014 building out a Service Catalog and the surrounding systems that will help unify the tools you use to manage your software.",date:"2020-05-22T00:00:00.000Z",formattedDate:"May 22, 2020",tags:[],readingTime:3.615,hasTruncateMarker:!0,authors:[{name:"Stefan \xc5lund, Spotify",url:"http://twitter.com/stalund",imageURL:"https://pbs.twimg.com/profile_images/121166861/6919c047c0d0edaace78c3009b28e917-user-full-200-130.generated_400x400.jpg"}],frontMatter:{title:"Starting Phase 2: The Service Catalog",author:"Stefan \xc5lund, Spotify",authorURL:"http://twitter.com/stalund",authorImageURL:"https://pbs.twimg.com/profile_images/121166861/6919c047c0d0edaace78c3009b28e917-user-full-200-130.generated_400x400.jpg"},prevItem:{title:"Backstage Service Catalog released in alpha",permalink:"/v1.12.0/blog/2020/06/22/backstage-service-catalog-alpha"},nextItem:{title:"Introducing Tech Radar for Backstage",permalink:"/v1.12.0/blog/2020/05/14/tech-radar-plugin"}},c={authorsImageUrls:[void 0]},u=[{value:"Progress so far",id:"progress-so-far",level:2},{value:"So what is Phase 2?",id:"so-what-is-phase-2",level:2},{value:"Timeline",id:"timeline",level:2},{value:"Long-term vision",id:"long-term-vision",level:2}],p={toc:u};function h(e){var{components:t}=e,s=n(e,["components"]);return(0,r.kt)("wrapper",o({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TL;DR")," Thanks to the help from the Backstage community, we\u2019ve made excellent progress and are now moving into Phase 2 of Backstage \u2014 building out a Service Catalog and the surrounding systems that will help unify the tools you use to manage your software."),(0,r.kt)("p",null,"We released the open source version of Backstage a little less than two months ago, and have been thrilled to see so many people jumping in and contributing to the project in its early stages. We\u2019re excited to see what the community can build together as we progress through ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage#project-roadmap"}),"each phase of Backstage"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(442281).Z,width:"1440",height:"900"})),(0,r.kt)("h2",o({},{id:"progress-so-far"}),"Progress so far"),(0,r.kt)("p",null,"Phase 1 was all about building an extensible frontend platform, enabling teams to start creating a single, consistent UI layer for your internal infrastructure and tools in the form of ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/labels/plugin"}),"plugins"),". In fact, thanks to our amazing (30+) ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/graphs/contributors"}),"contributors"),", we were able to complete most of Phase 1 earlier than expected. \ud83c\udf89"),(0,r.kt)("p",null,"Today, we are happy to announce that we are shifting our focus to Phase 2!"),(0,r.kt)("h2",o({},{id:"so-what-is-phase-2"}),"So what is Phase 2?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},'The core of building Platforms rests in versatile entity management. Entities represent the nouns or the "truths" of our world.'))),(0,r.kt)("p",null,"Quote from ",(0,r.kt)("a",o({parentName:"p"},{href:"https://www.kislayverma.com/post/platform-nuts-bolts-extendable-data-models"}),"Platform Nuts & Bolts: Extendable Data Models")),(0,r.kt)("p",null,"Entities, or what we refer to as \u201ccomponents\u201d in Backstage, represent all software, including services, websites, libraries, data pipelines, and so forth. The focus of Phase 2 will be on adding an entity model in Backstage that makes it easy for engineers to create and manage the software components they own."),(0,r.kt)("p",null,"With the ability to create a plethora of components in Backstage, how does one keep track of all the software in the ecosystem? Therein lies the highlight feature of Phase 2: the ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/milestone/4"}),"Service Catalog"),". The service catalog \u2014 or software catalog \u2014 is a centralized system that keeps track of ownership and metadata about all software in your ecosystem. The catalog is built around the concept of ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/architecture-decisions/adrs-adr002"}),"metadata yaml files")," stored together with the code, which are then harvested and visualized in Backstage."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(442281).Z,width:"1440",height:"900"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(367389).Z,width:"1440",height:"900"})),(0,r.kt)("p",null,"With a single catalog, Backstage makes it easy for a team to manage ten services \u2014 and makes it possible for your company to manage thousands of them. Because the system is practically self-organizing, it requires hardly any oversight from a governing or centralized team. Developers can get a uniform overview of all their software and related resources (such as server utilisation, data pipelines, pull request status), regardless of how and where they are running, as well as an easy way to onboard and manage those resources."),(0,r.kt)("p",null,"On top of that, we have found that the service catalog is a great way to organise the infrastructure tools you use to manage the software as well. This is how Backstage creates one developer portal for all your tools. Rather than asking teams to jump between different infrastructure UI\u2019s (and incurring additional cognitive overhead each time they make a context switch), most of these tools can be organised around the entities in the catalog:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(475728).Z,width:"959",height:"276"})),(0,r.kt)("p",null,"More concretely, having this structure in place will allow plugins such as ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/tree/master/plugins/circleci"}),"CircleCI")," to show only the builds for the specific service you are viewing, or a ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/issues/631"}),"Spinnaker")," plugin to show running deployments, or an Open API plugin to ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/issues/627"}),"show documentation")," for endpoints exposed by the service, or the ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/tree/master/plugins/lighthouse"}),"Lighthouse")," plugin to show audit reports for your website. You get the point."),(0,r.kt)("h2",o({},{id:"timeline"}),"Timeline"),(0,r.kt)("p",null,"Our estimated timeline has us delivering these pieces in increments leading up to June 22. But with the support of the community we wouldn\u2019t be surprised if things land earlier than that. \ud83d\ude4f"),(0,r.kt)("p",null,"If you are interested in joining us, check out our ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/milestones"}),"Milestones")," and connected Issues."),(0,r.kt)("h2",o({},{id:"long-term-vision"}),"Long-term vision"),(0,r.kt)("p",null,"Our vision for Backstage is for it to become the trusted, standard toolbox (read: UX layer) for the open source infrastructure landscape. Imagine a future where regardless of what infrastructure you use inside your company, there is an open source plugin available that you can pick up and add to your deployment of Backstage."),(0,r.kt)("p",null,"Spotify will continue to release more of our ",(0,r.kt)("a",o({parentName:"p"},{href:"https://backstage.io/blog/2020/04/06/lighthouse-plugin"}),"internal")," ",(0,r.kt)("a",o({parentName:"p"},{href:"https://backstage.io/blog/2020/05/14/tech-radar-plugin"}),"plugins"),", but participation from developers and companies can help us build a healthy community. We are excited to see how Backstage has helped many of you, and look forward to seeing all the new plugins you and your teams will build!"))}h.isMDXComponent=!0},442281:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Service_Catalog_MVP-80a59399ceab0bda37ef936166a77d60.png"},367389:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Service_Catalog_MVP_service-57fed869455677e818de9a8d4757e401.png"},475728:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tabs-abfdf72185d3ceb1d92c4237f7f78809.png"}}]);
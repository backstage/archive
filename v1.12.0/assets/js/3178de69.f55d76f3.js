"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[466949],{603905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||n;return a?o.createElement(m,i(i({ref:t},u),{},{components:a})):o.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},173683:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});a(667294);var o=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},r.apply(this,arguments)}function n(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={title:"What the heck is Backstage anyway?",author:"Stefan \xc5lund, Spotify",authorURL:"http://twitter.com/stalund",authorImageURL:"https://pbs.twimg.com/profile_images/121166861/6919c047c0d0edaace78c3009b28e917-user-full-200-130.generated_400x400.jpg"},s=void 0,l={permalink:"/v1.12.0/blog/2020/03/18/what-is-backstage",source:"@site/blog/2020-03-18-what-is-backstage.md",title:"What the heck is Backstage anyway?",description:"img",date:"2020-03-18T00:00:00.000Z",formattedDate:"March 18, 2020",tags:[],readingTime:4.975,hasTruncateMarker:!0,authors:[{name:"Stefan \xc5lund, Spotify",url:"http://twitter.com/stalund",imageURL:"https://pbs.twimg.com/profile_images/121166861/6919c047c0d0edaace78c3009b28e917-user-full-200-130.generated_400x400.jpg"}],frontMatter:{title:"What the heck is Backstage anyway?",author:"Stefan \xc5lund, Spotify",authorURL:"http://twitter.com/stalund",authorImageURL:"https://pbs.twimg.com/profile_images/121166861/6919c047c0d0edaace78c3009b28e917-user-full-200-130.generated_400x400.jpg"},prevItem:{title:"Introducing Lighthouse for Backstage",permalink:"/v1.12.0/blog/2020/04/06/lighthouse-plugin"},nextItem:{title:"Announcing Backstage",permalink:"/v1.12.0/blog/2020/03/16/announcing-backstage"}},c={authorsImageUrls:[void 0]},u=[{value:"What\u2019s the big infrastructure problem?",id:"whats-the-big-infrastructure-problem",level:2},{value:"What\u2019s the fix?",id:"whats-the-fix",level:2},{value:"Why did we build it?",id:"why-did-we-build-it",level:2},{value:"What are examples of how Backstage is used at Spotify?",id:"what-are-examples-of-how-backstage-is-used-at-spotify",level:2},{value:"1. Creating a new microservice",id:"1-creating-a-new-microservice",level:3},{value:"2. Following a pull request from review to production",id:"2-following-a-pull-request-from-review-to-production",level:3},{value:"3. Centralised technical documentation",id:"3-centralised-technical-documentation",level:3},{value:"4. Review performance of your team\u2019s mobile features",id:"4-review-performance-of-your-teams-mobile-features",level:3},{value:"Why did we make Backstage open source?",id:"why-did-we-make-backstage-open-source",level:2},{value:"What\u2019s next?",id:"whats-next",level:2}],p={toc:u};function d(e){var{components:t}=e,i=n(e,["components"]);return(0,o.kt)("wrapper",r({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(238536).Z,width:"3030",height:"765"})),(0,o.kt)("p",null,"Two days ago, we released the open source version of ",(0,o.kt)("a",r({parentName:"p"},{href:"https://backstage.io/"}),"Backstage"),", our homegrown developer portal. And we learned a thing or two via the feedback we received. So, I wanted to take this opportunity to further explain what we\u2019re trying to do with Backstage \u2014 and more importantly, what we want to give to the greater engineering community beyond Spotify."),(0,o.kt)("h2",r({},{id:"whats-the-big-infrastructure-problem"}),"What\u2019s the big infrastructure problem?"),(0,o.kt)("p",null,"As companies grow, their infrastructure systems get messier. Consider a team that wants to deploy something to the cloud. While Spotify has many awesome engineers, not every engineer is well-versed in our chosen cloud-provider tooling. Yet everyone is required to know and understand Terraform, GCP/AWS/Azure CLIs, GitLab CI, Prometheus, Kubernetes, Docker, various monitoring and alerting tools, and much, much more. Once other resources come into play (databases, queueing, etc.), each engineer requires even more tools and domain-specific knowledge (or \u201cdisciplines\u201d), from backend to machine learning, to mobile and data."),(0,o.kt)("h2",r({},{id:"whats-the-fix"}),"What\u2019s the fix?"),(0,o.kt)("p",null,"Backstage unifies all your infrastructure tooling, services, and documentation with a single, consistent UI. All of it! Imagine if all your tools \u2014 GCP, Bigtable, CI pipelines, TensorFlow Extended, and whatever else is hiding in your stack \u2014 all had the same, easy-to-use interface. That\u2019s Backstage. One front end for all your infrastructure."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(393134).Z,width:"640",height:"392"})),(0,o.kt)("p",null,"Backstage gives developers a uniform overview of all their resources, regardless of how and where they are running, as well as an easy way to onboard and start using those tools. It also allows the creation of new resources, such as backend services running in Kubernetes, with a few clicks of a button \u2014 all without having to leave the same, familiar interface of Backstage."),(0,o.kt)("h2",r({},{id:"why-did-we-build-it"}),"Why did we build it?"),(0,o.kt)("p",null,"To some observers, it may seem odd that a music company is launching a best-in-class developer portal. But if you ",(0,o.kt)("a",r({parentName:"p"},{href:"https://backstage.io/background"}),"dig deeper"),", you\u2019ll find that since the very beginning, Spotify has been known for its agile, autonomous engineering culture. More than music, we\u2019re a tech company that has always put engineers first, empowering our developers with the ability to innovate quickly and at scale. Backstage is the natural result of that focus."),(0,o.kt)("h2",r({},{id:"what-are-examples-of-how-backstage-is-used-at-spotify"}),"What are examples of how Backstage is used at Spotify?"),(0,o.kt)("p",null,"Our internal installation of Backstage has over 100 different integrations \u2014 we call them \u201cplugins\u201d. Since the open-source version currently does not have any end-to-end use cases, it can be challenging to understand what problems Backstage can solve for you. To make things more tangible, let\u2019s have a look at four of the common use-cases:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Creating a new microservice"),(0,o.kt)("li",{parentName:"ol"},"Following a pull request from review to production"),(0,o.kt)("li",{parentName:"ol"},"Centralised technical documentation"),(0,o.kt)("li",{parentName:"ol"},"Review performance of your team\u2019s mobile features")),(0,o.kt)("p",null,"These are just a few examples. Expect us to continue providing examples of how Backstage is used inside Spotify while we build out more end-2-end use-cases in the open."),(0,o.kt)("h3",r({},{id:"1-creating-a-new-microservice"}),"1. Creating a new microservice"),(0,o.kt)("p",null,"Creating any new software component at Spotify, such as a new microservice, is done with a few clicks in Backstage. Developers choose between a number of standard templates \u2014 all with best-practices built in."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(614539).Z,width:"596",height:"369"})),(0,o.kt)("p",null,"After inputting some metadata about your service, a new repository is created with a \u201chello world\u201d service that automatically builds and deploys in production on Kubernetes (",(0,o.kt)("a",r({parentName:"p"},{href:"https://cloud.google.com/kubernetes-engine"}),"GKE"),"). Ownership information is automatically captured in our service/software catalog and users can see a list of all the services they own."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(312434).Z,width:"512",height:"348"})),(0,o.kt)("h3",r({},{id:"2-following-a-pull-request-from-review-to-production"}),"2. Following a pull request from review to production"),(0,o.kt)("p",null,"As soon as you submit a pull request to Spotify\u2019s GitHub Enterprise, our CI system automatically posts a link to the CI/CD view in Backstage. The view provides you with all the information you need: build progress, test coverage changes, a re-trigger button, etc., so that you don\u2019t have to look for this information across different systems."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(559954).Z,width:"596",height:"380"})),(0,o.kt)("p",null,"Our homegrown CI system uses Jenkins under the hood, but Spotify engineers don\u2019t need to know that. They interact directly with GitHub Enterprise and Backstage."),(0,o.kt)("h3",r({},{id:"3-centralised-technical-documentation"}),"3. Centralised technical documentation"),(0,o.kt)("p",null,"Spotify uses a ",(0,o.kt)("a",r({parentName:"p"},{href:"https://www.youtube.com/watch?v=uFGCaZmA6d4"}),"docs-like-code")," approach. Engineers write technical documentation in Markdown files that live together with the code. During CI, a beautiful-looking documentation site is created using ",(0,o.kt)("a",r({parentName:"p"},{href:"https://www.mkdocs.org/"}),"MkDocs"),", and all sites are rendered centrally in a Backstage plugin."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(705998).Z,width:"596",height:"380"})),(0,o.kt)("p",null,"On top of the static documentation we also incorporate additional metadata about the documentation site \u2014 such as owner, open issue and related Stack Overflow tags."),(0,o.kt)("h3",r({},{id:"4-review-performance-of-your-teams-mobile-features"}),"4. Review performance of your team\u2019s mobile features"),(0,o.kt)("p",null,"Our mobile apps are developed by many different teams. The codebase is divided up into different features, each owned and maintained by a separate team. If an app developer on one team wants to understand how their feature is affecting overall app performance, there\u2019s a plugin for that:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(860269).Z,width:"596",height:"380"}),"\n",(0,o.kt)("em",{parentName:"p"},"Figures above for illustrative purposes only.")),(0,o.kt)("p",null,"Developers can also look at crashes, releases, test coverage over time and many more tools in the same location."),(0,o.kt)("h2",r({},{id:"why-did-we-make-backstage-open-source"}),"Why did we make Backstage open source?"),(0,o.kt)("p",null,"When discussing infrastructure challenges with peer companies, it\u2019s clear that we are not alone in struggling with fragmentation across our developer ecosystem. As companies adopt more open-source tooling, and build more infrastructure internally, the complexity grows. It gets harder for individual engineers to find and use all these distinct tools."),(0,o.kt)("p",null,"Similar to how Backstage ties together all of Spotify\u2019s infrastructure, our ambition is to make the open-source version of Backstage the standard UX layer across the broader infrastructure landscape. We decided to release Backstage early so we could collaborate more closely with companies that have a similar problem \u2014 and that want to provide a better developer experience to their teams."),(0,o.kt)("h2",r({},{id:"whats-next"}),"What\u2019s next?"),(0,o.kt)("p",null,"We are envisioning ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/milestones"}),"three phases")," of the project (so far), and we have already begun work on various aspects of these phases. The best way to track the work and see where you can jump in and help out is:"),(0,o.kt)("p",null,(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/milestones"}),"https://github.com/backstage/backstage/milestones")),(0,o.kt)("p",null,"Want to discuss the project or need support? Join us on ",(0,o.kt)("a",r({parentName:"p"},{href:"https://discord.gg/backstage-687207715902193673"}),"Discord")," or reach out on ",(0,o.kt)("a",r({parentName:"p"},{href:"mailto:backstage-interest@spotify.com"}),"backstage-interest@spotify.com"),"."))}d.isMDXComponent=!0},614539:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/1-073fb6643dd3ed94a67f5b32b2803510.png"},312434:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/2-60e11d7e89b6189858356856592b0f2c.png"},559954:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/3-991dfcb18cf4e3c51ceef636ac22a85f.png"},705998:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/4-748ff63b316b041d67cf06082c41deb1.png"},860269:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/5-ad42426b7b0a0642be4c49ba3df60b6d.png"},393134:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/screen-b6c3288bb38dc51f0b90a344b08e0470.gif"},238536:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/spotify-labs-header-fa7cc7fbc23cf01390bd905628a0165f.png"}}]);
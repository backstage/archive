"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[505125],{603905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=r,g=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},64732:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});a(667294);var n=a(603905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={title:"How to enable authentication in Backstage using Passport",author:"Lee Mills, Spotify",authorURL:"https://github.com/leemills83",authorImageURL:"https://avatars1.githubusercontent.com/u/1236238?s=460&v=4"},p=void 0,l={permalink:"/v1.13.0/blog/2020/07/01/how-to-enable-authentication-in-backstage-using-passport",source:"@site/blog/2020-07-01-how-to-enable-authentication-in-backstage-using-passport.md",title:"How to enable authentication in Backstage using Passport",description:"auth-landing-page",date:"2020-07-01T00:00:00.000Z",formattedDate:"July 1, 2020",tags:[],readingTime:2.01,hasTruncateMarker:!0,authors:[{name:"Lee Mills, Spotify",url:"https://github.com/leemills83",imageURL:"https://avatars1.githubusercontent.com/u/1236238?s=460&v=4"}],frontMatter:{title:"How to enable authentication in Backstage using Passport",author:"Lee Mills, Spotify",authorURL:"https://github.com/leemills83",authorImageURL:"https://avatars1.githubusercontent.com/u/1236238?s=460&v=4"},prevItem:{title:"Announcing Backstage Software Templates",permalink:"/v1.13.0/blog/2020/08/05/announcing-backstage-software-templates"},nextItem:{title:"Backstage Service Catalog released in alpha",permalink:"/v1.13.0/blog/2020/06/22/backstage-service-catalog-alpha"}},c={authorsImageUrls:[void 0]},u=[{value:"What is Passport?",id:"what-is-passport",level:2},{value:"Using authentication in Backstage",id:"using-authentication-in-backstage",level:2},{value:"Ready to get started by adding your chosen provider and implementation?",id:"ready-to-get-started-by-adding-your-chosen-provider-and-implementation",level:2},{value:"Interested in contributing to the next steps for authentication?",id:"interested-in-contributing-to-the-next-steps-for-authentication",level:2}],d={toc:u};function h(e){var{components:t}=e,s=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},d,s),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"auth-landing-page",src:a(13e4).Z,width:"1548",height:"622"})),(0,n.kt)("p",null,"Getting authentication right is important. It helps keep your platform safe, it\u2019s one of the first things users will interact with, and there are many different authentication providers to support. To this end, we chose to use ",(0,n.kt)("a",{parentName:"p",href:"http://www.passportjs.org/"},"Passport")," to provide an easy-to-use, out-of-the-box experience that can be extended to your own, pre-existing authentication providers (known as strategies). The Auth APIs in Backstage serve two purposes: identify the user and provide a way for plugins to request access to third-party services on behalf of the user. We\u2019ve already implemented Google and GitHub authentication to provide examples and to get you started."),(0,n.kt)("h2",{id:"what-is-passport"},"What is Passport?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.passportjs.org/"},"Passport")," is Express-compatible authentication middleware for Node.js that provides access to over 500 authentication providers, covering everything from Google, Facebook, and Twitter to generic OAuth, SAML, and local. Check out all of the currently available ",(0,n.kt)("a",{parentName:"p",href:"http://www.passportjs.org/"},"strategies listed on the Passport site"),"."),(0,n.kt)("p",null,"Passport has allowed us to leverage an existing open-source authentication framework that will, in turn, give users the freedom to add and extend alternative authentication strategies to their instance of Backstage."),(0,n.kt)("h2",{id:"using-authentication-in-backstage"},"Using authentication in Backstage"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"auth-landing-page",src:a(498465).Z,width:"206",height:"185"})),(0,n.kt)("p",null,"First, check out the provided Google and GitHub implementations! ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/blog/2020/04/30/how-to-quickly-set-up-backstage"},"Spin up a local copy of Backstage")," along with our example-backend. You can find more documentation on setting up the example backend ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/packages/backend"},"here"),", but be sure to include the relevant client IDs and secrets when running ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn start"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"AUTH_GOOGLE_CLIENT_ID=x AUTH_GOOGLE_CLIENT_SECRET=x AUTH_GITHUB_CLIENT_ID=x AUTH_GITHUB_CLIENT_SECRET=x SENTRY_TOKEN=x LOG_LEVEL=debug yarn start\n")),(0,n.kt)("p",null,"You can find the implementation for these strategies along with a lightweight proof-of-concept implementation for SAML authentication at ",(0,n.kt)("inlineCode",{parentName:"p"},"<root>/plugins/auth-backend/src/providers"),"."),(0,n.kt)("h2",{id:"ready-to-get-started-by-adding-your-chosen-provider-and-implementation"},"Ready to get started by adding your chosen provider and implementation?"),(0,n.kt)("p",null,"Getting started is really straightforward, and can be broadly broken down into five steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("a",{parentName:"li",href:"http://www.passportjs.org/"},"Passport-based provider package that best suits your needs"),"."),(0,n.kt)("li",{parentName:"ol"},"Add a new provider to ",(0,n.kt)("inlineCode",{parentName:"li"},"plugins/auth-backend/src/providers/")),(0,n.kt)("li",{parentName:"ol"},"Implement the provider, extending the suitable framework, if needed."),(0,n.kt)("li",{parentName:"ol"},"Add the provider to the backend."),(0,n.kt)("li",{parentName:"ol"},"Add a frontend Auth Utility API.")),(0,n.kt)("p",null,"For full details, take a look at our ",(0,n.kt)("a",{parentName:"p",href:"/docs/auth/add-auth-provider"},"\u201cAdding authentication providers\u201d documentation")," and at the ",(0,n.kt)("a",{parentName:"p",href:"http://www.passportjs.org/docs/"},"excellent documentation")," provided by Passport."),(0,n.kt)("h2",{id:"interested-in-contributing-to-the-next-steps-for-authentication"},"Interested in contributing to the next steps for authentication?"),(0,n.kt)("p",null,"We\u2019ve already seen both GitLab and Okta contributions from the community \u2014 and we\u2019re thinking about a few more providers we\u2019d like to add to Backstage, too. You can find those, and other authentication-related issues, in our repository by filtering with the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/issues?q=is%3Aissue+is%3Aopen+label%3Aauth"},"auth label"),"."))}h.isMDXComponent=!0},13e4:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/auth-landing-36c55882496255abe67830e1ea6db2ea.png"},498465:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/auth-sidebar-7757b6f66cada94c378abb527b01859a.png"}}]);
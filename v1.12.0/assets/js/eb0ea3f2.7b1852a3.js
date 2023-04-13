/*! For license information please see eb0ea3f2.7b1852a3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[339867],{603905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(667294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(a),k=l,h=u["".concat(o,".").concat(k)]||u[k]||g[k]||i;return a?n.createElement(h,r(r({ref:t},s),{},{components:a})):n.createElement(h,r({ref:t},s))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=k;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:l,r[1]=c;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},536682:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>s});a(827378);var n=a(603905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}const r={},c="Release v1.5.0-next.1",o={unversionedId:"releases/v1.5.0-next.1-changelog",id:"releases/v1.5.0-next.1-changelog",title:"Release v1.5.0-next.1",description:"@backstage/integration@1.3.0-next.1",source:"@site/../docs/releases/v1.5.0-next.1-changelog.md",sourceDirName:"releases",slug:"/releases/v1.5.0-next.1-changelog",permalink:"/v1.12.0/docs/releases/v1.5.0-next.1-changelog",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.5.0-next.1-changelog.md",tags:[],version:"current",frontMatter:{}},p={},s=[{value:"@backstage/integration@1.3.0-next.1",id:"backstageintegration130-next1",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"Patch Changes",id:"patch-changes",level:3},{value:"@backstage/plugin-catalog@1.5.0-next.1",id:"backstageplugin-catalog150-next1",level:2},{value:"Minor Changes",id:"minor-changes-1",level:3},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"@backstage/plugin-scaffolder@1.5.0-next.1",id:"backstageplugin-scaffolder150-next1",level:2},{value:"Minor Changes",id:"minor-changes-2",level:3},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"@backstage/plugin-scaffolder-backend@1.5.0-next.1",id:"backstageplugin-scaffolder-backend150-next1",level:2},{value:"Minor Changes",id:"minor-changes-3",level:3},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"@backstage/plugin-sonarqube@0.4.0-next.1",id:"backstageplugin-sonarqube040-next1",level:2},{value:"Minor Changes",id:"minor-changes-4",level:3},{value:"Patch Changes",id:"patch-changes-4",level:3},{value:"@backstage/plugin-sonarqube-backend@0.1.0-next.0",id:"backstageplugin-sonarqube-backend010-next0",level:2},{value:"Minor Changes",id:"minor-changes-5",level:3},{value:"Patch Changes",id:"patch-changes-5",level:3},{value:"@backstage/plugin-techdocs-node@1.3.0-next.1",id:"backstageplugin-techdocs-node130-next1",level:2},{value:"Minor Changes",id:"minor-changes-6",level:3},{value:"Patch Changes",id:"patch-changes-6",level:3},{value:"@backstage/backend-common@0.15.0-next.1",id:"backstagebackend-common0150-next1",level:2},{value:"Patch Changes",id:"patch-changes-7",level:3},{value:"@backstage/core-components@0.10.1-next.1",id:"backstagecore-components0101-next1",level:2},{value:"Patch Changes",id:"patch-changes-8",level:3},{value:"@backstage/create-app@0.4.30-next.1",id:"backstagecreate-app0430-next1",level:2},{value:"Patch Changes",id:"patch-changes-9",level:3},{value:"@techdocs/cli@1.1.4-next.1",id:"techdocscli114-next1",level:2},{value:"Patch Changes",id:"patch-changes-10",level:3},{value:"@backstage/plugin-api-docs@0.8.8-next.1",id:"backstageplugin-api-docs088-next1",level:2},{value:"Patch Changes",id:"patch-changes-11",level:3},{value:"@backstage/plugin-catalog-backend@1.3.1-next.1",id:"backstageplugin-catalog-backend131-next1",level:2},{value:"Patch Changes",id:"patch-changes-12",level:3},{value:"@backstage/plugin-catalog-backend-module-github@0.1.6-next.1",id:"backstageplugin-catalog-backend-module-github016-next1",level:2},{value:"Patch Changes",id:"patch-changes-13",level:3},{value:"@backstage/plugin-catalog-common@1.0.5-next.0",id:"backstageplugin-catalog-common105-next0",level:2},{value:"Patch Changes",id:"patch-changes-14",level:3},{value:"@backstage/plugin-catalog-react@1.1.3-next.1",id:"backstageplugin-catalog-react113-next1",level:2},{value:"Patch Changes",id:"patch-changes-15",level:3},{value:"@backstage/plugin-home@0.4.24-next.1",id:"backstageplugin-home0424-next1",level:2},{value:"Patch Changes",id:"patch-changes-16",level:3},{value:"@backstage/plugin-jenkins@0.7.7-next.1",id:"backstageplugin-jenkins077-next1",level:2},{value:"Patch Changes",id:"patch-changes-17",level:3},{value:"@backstage/plugin-jenkins-backend@0.1.25-next.1",id:"backstageplugin-jenkins-backend0125-next1",level:2},{value:"Patch Changes",id:"patch-changes-18",level:3},{value:"@backstage/plugin-jenkins-common@0.1.7-next.0",id:"backstageplugin-jenkins-common017-next0",level:2},{value:"Patch Changes",id:"patch-changes-19",level:3},{value:"@backstage/plugin-kubernetes@0.7.1-next.1",id:"backstageplugin-kubernetes071-next1",level:2},{value:"Patch Changes",id:"patch-changes-20",level:3},{value:"@backstage/plugin-techdocs@1.3.1-next.1",id:"backstageplugin-techdocs131-next1",level:2},{value:"Patch Changes",id:"patch-changes-21",level:3},{value:"@backstage/plugin-techdocs-backend@1.2.1-next.1",id:"backstageplugin-techdocs-backend121-next1",level:2},{value:"Patch Changes",id:"patch-changes-22",level:3},{value:"@backstage/plugin-techdocs-module-addons-contrib@1.0.3-next.1",id:"backstageplugin-techdocs-module-addons-contrib103-next1",level:2},{value:"Patch Changes",id:"patch-changes-23",level:3},{value:"@backstage/plugin-techdocs-react@1.0.3-next.1",id:"backstageplugin-techdocs-react103-next1",level:2},{value:"Patch Changes",id:"patch-changes-24",level:3},{value:"example-app@0.2.74-next.1",id:"example-app0274-next1",level:2},{value:"Patch Changes",id:"patch-changes-25",level:3}],u={toc:s};function g(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",l({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",l({},{id:"release-v150-next1"}),"Release v1.5.0-next.1"),(0,n.kt)("h2",l({},{id:"backstageintegration130-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:integration@1.3.0-next.1"}),"integration@1.3.0-next.1")),(0,n.kt)("h3",l({},{id:"minor-changes"}),"Minor Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ad35364e97: feat(techdocs): add edit button support for bitbucketServer")),(0,n.kt)("h3",l({},{id:"patch-changes"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1f27d83933: Fixed bug in getGitLabFileFetchUrl where a target whose path did not contain the\n",(0,n.kt)("inlineCode",{parentName:"li"},"/-/")," scope would result in a fetch URL that did not support\nprivate-token-based authentication.")),(0,n.kt)("h2",l({},{id:"backstageplugin-catalog150-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-catalog@1.5.0-next.1"}),"plugin-catalog@1.5.0-next.1")),(0,n.kt)("h3",l({},{id:"minor-changes-1"}),"Minor Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fe94398418: Allow changing the subtitle of the ",(0,n.kt)("inlineCode",{parentName:"li"},"CatalogTable")," component")),(0,n.kt)("h3",l({},{id:"patch-changes-1"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:core-components@0.10.1-next.1"}),"core-components@0.10.1-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-catalog-common@1.0.5-next.0"}),"plugin-catalog-common@1.0.5-next.0")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-catalog-react@1.1.3-next.1"}),"plugin-catalog-react@1.1.3-next.1"))))),(0,n.kt)("h2",l({},{id:"backstageplugin-scaffolder150-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-scaffolder@1.5.0-next.1"}),"plugin-scaffolder@1.5.0-next.1")),(0,n.kt)("h3",l({},{id:"minor-changes-2"}),"Minor Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"c4b452e16a: Starting the implementation of the Wizard page for the ",(0,n.kt)("inlineCode",{parentName:"li"},"next")," scaffolder plugin")),(0,n.kt)("h3",l({},{id:"patch-changes-2"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:core-components@0.10.1-next.1"}),"core-components@0.10.1-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-catalog-common@1.0.5-next.0"}),"plugin-catalog-common@1.0.5-next.0")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:integration@1.3.0-next.1"}),"integration@1.3.0-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-catalog-react@1.1.3-next.1"}),"plugin-catalog-react@1.1.3-next.1"))))),(0,n.kt)("h2",l({},{id:"backstageplugin-scaffolder-backend150-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-scaffolder-backend@1.5.0-next.1"}),"plugin-scaffolder-backend@1.5.0-next.1")),(0,n.kt)("h3",l({},{id:"minor-changes-3"}),"Minor Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"c4b452e16a: Starting the implementation of the Wizard page for the ",(0,n.kt)("inlineCode",{parentName:"li"},"next")," scaffolder plugin")),(0,n.kt)("h3",l({},{id:"patch-changes-3"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:backend-common@0.15.0-next.1"}),"backend-common@0.15.0-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:integration@1.3.0-next.1"}),"integration@1.3.0-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-catalog-backend@1.3.1-next.1"}),"plugin-catalog-backend@1.3.1-next.1"))))),(0,n.kt)("h2",l({},{id:"backstageplugin-sonarqube040-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-sonarqube@0.4.0-next.1"}),"plugin-sonarqube@0.4.0-next.1")),(0,n.kt)("h3",l({},{id:"minor-changes-4"}),"Minor Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"619b515172: ",(0,n.kt)("strong",{parentName:"p"},"BREAKING")," This plugin now call the ",(0,n.kt)("inlineCode",{parentName:"p"},"sonarqube-backend")," plugin instead of relying on the proxy plugin"),(0,n.kt)("p",{parentName:"li"},"The whole proxy's ",(0,n.kt)("inlineCode",{parentName:"p"},"'/sonarqube':")," key can be removed from your configuration files."),(0,n.kt)("p",{parentName:"li"},"Then head to the ",(0,n.kt)("a",l({parentName:"p"},{href:"https://github.com/backstage/backstage/tree/master/plugins/sonarqube-backend/README.md"}),"README in sonarqube-backend plugin page")," to learn how to set-up the link to your Sonarqube instances."))),(0,n.kt)("h3",l({},{id:"patch-changes-4"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"f9c310a439: Add ability to provide an optional Sonarqube instance into the annotation in the ",(0,n.kt)("inlineCode",{parentName:"li"},"catalog-info.yaml")," file"),(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:core-components@0.10.1-next.1"}),"core-components@0.10.1-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-catalog-react@1.1.3-next.1"}),"plugin-catalog-react@1.1.3-next.1"))))),(0,n.kt)("h2",l({},{id:"backstageplugin-sonarqube-backend010-next0"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-sonarqube-backend@0.1.0-next.0"}),"plugin-sonarqube-backend@0.1.0-next.0")),(0,n.kt)("h3",l({},{id:"minor-changes-5"}),"Minor Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"e2be9ab3a4: Initial creation of the plugin")),(0,n.kt)("h3",l({},{id:"patch-changes-5"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:backend-common@0.15.0-next.1"}),"backend-common@0.15.0-next.1"))))),(0,n.kt)("h2",l({},{id:"backstageplugin-techdocs-node130-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-techdocs-node@1.3.0-next.1"}),"plugin-techdocs-node@1.3.0-next.1")),(0,n.kt)("h3",l({},{id:"minor-changes-6"}),"Minor Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ad35364e97: feat(techdocs): add edit button support for bitbucketServer")),(0,n.kt)("h3",l({},{id:"patch-changes-6"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"f833344611: Bump default ",(0,n.kt)("inlineCode",{parentName:"li"},"TechDocs")," image to ",(0,n.kt)("inlineCode",{parentName:"li"},"v1.1.0"),", see the release ",(0,n.kt)("a",l({parentName:"li"},{href:"https://github.com/backstage/techdocs-container/releases/tag/v1.1.0"}),"here"),"."),(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:backend-common@0.15.0-next.1"}),"backend-common@0.15.0-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:integration@1.3.0-next.1"}),"integration@1.3.0-next.1"))))),(0,n.kt)("h2",l({},{id:"backstagebackend-common0150-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:backend-common@0.15.0-next.1"}),"backend-common@0.15.0-next.1")),(0,n.kt)("h3",l({},{id:"patch-changes-7"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1732a18a7a: Exported ",(0,n.kt)("inlineCode",{parentName:"li"},"redactLogLine")," function to be able to use it in custom loggers and renamed it to ",(0,n.kt)("inlineCode",{parentName:"li"},"redactWinstonLogLine"),"."),(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:integration@1.3.0-next.1"}),"integration@1.3.0-next.1"))))),(0,n.kt)("h2",l({},{id:"backstagecore-components0101-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:core-components@0.10.1-next.1"}),"core-components@0.10.1-next.1")),(0,n.kt)("h3",l({},{id:"patch-changes-8"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a22af3edc8: Adding a ",(0,n.kt)("inlineCode",{parentName:"li"},"className")," prop to the ",(0,n.kt)("inlineCode",{parentName:"li"},"MarkdownContent")," component")),(0,n.kt)("h2",l({},{id:"backstagecreate-app0430-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:create-app@0.4.30-next.1"}),"create-app@0.4.30-next.1")),(0,n.kt)("h3",l({},{id:"patch-changes-9"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bumped create-app version.")),(0,n.kt)("h2",l({},{id:"techdocscli114-next1"}),"@techdocs/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:cli@1.1.4-next.1"}),"cli@1.1.4-next.1")),(0,n.kt)("h3",l({},{id:"patch-changes-10"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:backend-common@0.15.0-next.1"}),"backend-common@0.15.0-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-techdocs-node@1.3.0-next.1"}),"plugin-techdocs-node@1.3.0-next.1"))))),(0,n.kt)("h2",l({},{id:"backstageplugin-api-docs088-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-api-docs@0.8.8-next.1"}),"plugin-api-docs@0.8.8-next.1")),(0,n.kt)("h3",l({},{id:"patch-changes-11"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"dae12c71cf: Updated dependency ",(0,n.kt)("inlineCode",{parentName:"li"},"@asyncapi/react-component")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"1.0.0-next.40"),"."),(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:core-components@0.10.1-next.1"}),"core-components@0.10.1-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-catalog@1.5.0-next.1"}),"plugin-catalog@1.5.0-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-catalog-react@1.1.3-next.1"}),"plugin-catalog-react@1.1.3-next.1"))))),(0,n.kt)("h2",l({},{id:"backstageplugin-catalog-backend131-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-catalog-backend@1.3.1-next.1"}),"plugin-catalog-backend@1.3.1-next.1")),(0,n.kt)("h3",l({},{id:"patch-changes-12"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"e3d3018531: Fix issue for conditional decisions based on properties stored as arrays, like tags."),(0,n.kt)("p",{parentName:"li"},"Before this change, having a permission policy returning conditional decisions based on metadata like tags, such like ",(0,n.kt)("inlineCode",{parentName:"p"},"createCatalogConditionalDecision(permission, catalogConditions.hasMetadata('tags', 'java'),)"),", was producing wrong results. The issue occurred when authorizing entities already loaded from the database, for example when authorizing ",(0,n.kt)("inlineCode",{parentName:"p"},"catalogEntityDeletePermission"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Updated dependencies"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-catalog-common@1.0.5-next.0"}),"plugin-catalog-common@1.0.5-next.0")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:backend-common@0.15.0-next.1"}),"backend-common@0.15.0-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:integration@1.3.0-next.1"}),"integration@1.3.0-next.1"))))),(0,n.kt)("h2",l({},{id:"backstageplugin-catalog-backend-module-github016-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-catalog-backend-module-github@0.1.6-next.1"}),"plugin-catalog-backend-module-github@0.1.6-next.1")),(0,n.kt)("h3",l({},{id:"patch-changes-13"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"f48950e34b: Github Entity Provider functionality for adding entities to the catalog."),(0,n.kt)("p",{parentName:"li"},"This provider replaces the GithubDiscoveryProcessor functionality as providers offer more flexibility with scheduling ingestion, removing and preventing orphaned entities."),(0,n.kt)("p",{parentName:"li"},"More information can be found on the ",(0,n.kt)("a",l({parentName:"p"},{href:"https://backstage.io/docs/integrations/github/discovery"}),"GitHub Discovery")," page.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Updated dependencies"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:backend-common@0.15.0-next.1"}),"backend-common@0.15.0-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:integration@1.3.0-next.1"}),"integration@1.3.0-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-catalog-backend@1.3.1-next.1"}),"plugin-catalog-backend@1.3.1-next.1"))))),(0,n.kt)("h2",l({},{id:"backstageplugin-catalog-common105-next0"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-catalog-common@1.0.5-next.0"}),"plugin-catalog-common@1.0.5-next.0")),(0,n.kt)("h3",l({},{id:"patch-changes-14"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"92103db537: Export aggregated list of all catalog permissions")),(0,n.kt)("h2",l({},{id:"backstageplugin-catalog-react113-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-catalog-react@1.1.3-next.1"}),"plugin-catalog-react@1.1.3-next.1")),(0,n.kt)("h3",l({},{id:"patch-changes-15"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:core-components@0.10.1-next.1"}),"core-components@0.10.1-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-catalog-common@1.0.5-next.0"}),"plugin-catalog-common@1.0.5-next.0")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:integration@1.3.0-next.1"}),"integration@1.3.0-next.1"))))),(0,n.kt)("h2",l({},{id:"backstageplugin-home0424-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-home@0.4.24-next.1"}),"plugin-home@0.4.24-next.1")),(0,n.kt)("h3",l({},{id:"patch-changes-16"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"df7b9158b8: Add wrap-around for the listing of tools to prevent increasing width with name length."),(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:core-components@0.10.1-next.1"}),"core-components@0.10.1-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-catalog-react@1.1.3-next.1"}),"plugin-catalog-react@1.1.3-next.1"))))),(0,n.kt)("h2",l({},{id:"backstageplugin-jenkins077-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-jenkins@0.7.7-next.1"}),"plugin-jenkins@0.7.7-next.1")),(0,n.kt)("h3",l({},{id:"patch-changes-17"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:core-components@0.10.1-next.1"}),"core-components@0.10.1-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-catalog-react@1.1.3-next.1"}),"plugin-catalog-react@1.1.3-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-jenkins-common@0.1.7-next.0"}),"plugin-jenkins-common@0.1.7-next.0"))))),(0,n.kt)("h2",l({},{id:"backstageplugin-jenkins-backend0125-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-jenkins-backend@0.1.25-next.1"}),"plugin-jenkins-backend@0.1.25-next.1")),(0,n.kt)("h3",l({},{id:"patch-changes-18"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:backend-common@0.15.0-next.1"}),"backend-common@0.15.0-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-jenkins-common@0.1.7-next.0"}),"plugin-jenkins-common@0.1.7-next.0"))))),(0,n.kt)("h2",l({},{id:"backstageplugin-jenkins-common017-next0"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-jenkins-common@0.1.7-next.0"}),"plugin-jenkins-common@0.1.7-next.0")),(0,n.kt)("h3",l({},{id:"patch-changes-19"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-catalog-common@1.0.5-next.0"}),"plugin-catalog-common@1.0.5-next.0"))))),(0,n.kt)("h2",l({},{id:"backstageplugin-kubernetes071-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-kubernetes@0.7.1-next.1"}),"plugin-kubernetes@0.7.1-next.1")),(0,n.kt)("h3",l({},{id:"patch-changes-20"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"860ed68343: Fixed bug in CronJobsAccordions component that causes an error when cronjobs use a kubernetes alias, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"@hourly")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"@daily")," instead of standard cron syntax."),(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:core-components@0.10.1-next.1"}),"core-components@0.10.1-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-catalog-react@1.1.3-next.1"}),"plugin-catalog-react@1.1.3-next.1"))))),(0,n.kt)("h2",l({},{id:"backstageplugin-techdocs131-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-techdocs@1.3.1-next.1"}),"plugin-techdocs@1.3.1-next.1")),(0,n.kt)("h3",l({},{id:"patch-changes-21"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"b86ed4d990: Add highlight to active navigation item and navigation parents."),(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:core-components@0.10.1-next.1"}),"core-components@0.10.1-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:integration@1.3.0-next.1"}),"integration@1.3.0-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-techdocs-react@1.0.3-next.1"}),"plugin-techdocs-react@1.0.3-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-catalog-react@1.1.3-next.1"}),"plugin-catalog-react@1.1.3-next.1"))))),(0,n.kt)("h2",l({},{id:"backstageplugin-techdocs-backend121-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-techdocs-backend@1.2.1-next.1"}),"plugin-techdocs-backend@1.2.1-next.1")),(0,n.kt)("h3",l({},{id:"patch-changes-22"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-catalog-common@1.0.5-next.0"}),"plugin-catalog-common@1.0.5-next.0")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:backend-common@0.15.0-next.1"}),"backend-common@0.15.0-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:integration@1.3.0-next.1"}),"integration@1.3.0-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-techdocs-node@1.3.0-next.1"}),"plugin-techdocs-node@1.3.0-next.1"))))),(0,n.kt)("h2",l({},{id:"backstageplugin-techdocs-module-addons-contrib103-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-techdocs-module-addons-contrib@1.0.3-next.1"}),"plugin-techdocs-module-addons-contrib@1.0.3-next.1")),(0,n.kt)("h3",l({},{id:"patch-changes-23"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ad35364e97: feat(techdocs): add edit button support for bitbucketServer"),(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:core-components@0.10.1-next.1"}),"core-components@0.10.1-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:integration@1.3.0-next.1"}),"integration@1.3.0-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-techdocs-react@1.0.3-next.1"}),"plugin-techdocs-react@1.0.3-next.1"))))),(0,n.kt)("h2",l({},{id:"backstageplugin-techdocs-react103-next1"}),"@backstage/",(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:plugin-techdocs-react@1.0.3-next.1"}),"plugin-techdocs-react@1.0.3-next.1")),(0,n.kt)("h3",l({},{id:"patch-changes-24"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"29d6cf0147: Add ",(0,n.kt)("inlineCode",{parentName:"li"},"toLowerEntityRefMaybe()")," helper function for handling ",(0,n.kt)("inlineCode",{parentName:"li"},"techdocs.legacyUseCaseSensitiveTripletPaths")," flag.\nPass modified ",(0,n.kt)("inlineCode",{parentName:"li"},"entityRef")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"TechDocsReaderPageContext")," to handle the ",(0,n.kt)("inlineCode",{parentName:"li"},"techdocs.legacyUseCaseSensitiveTripletPaths")," flag."),(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:core-components@0.10.1-next.1"}),"core-components@0.10.1-next.1"))))),(0,n.kt)("h2",l({},{id:"example-app0274-next1"}),(0,n.kt)("a",l({parentName:"h2"},{href:"mailto:example-app@0.2.74-next.1"}),"example-app@0.2.74-next.1")),(0,n.kt)("h3",l({},{id:"patch-changes-25"}),"Patch Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-kubernetes@0.7.1-next.1"}),"plugin-kubernetes@0.7.1-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-home@0.4.24-next.1"}),"plugin-home@0.4.24-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:core-components@0.10.1-next.1"}),"core-components@0.10.1-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-scaffolder@1.5.0-next.1"}),"plugin-scaffolder@1.5.0-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-techdocs@1.3.1-next.1"}),"plugin-techdocs@1.3.1-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-catalog-common@1.0.5-next.0"}),"plugin-catalog-common@1.0.5-next.0")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-techdocs-module-addons-contrib@1.0.3-next.1"}),"plugin-techdocs-module-addons-contrib@1.0.3-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-api-docs@0.8.8-next.1"}),"plugin-api-docs@0.8.8-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-techdocs-react@1.0.3-next.1"}),"plugin-techdocs-react@1.0.3-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-catalog-react@1.1.3-next.1"}),"plugin-catalog-react@1.1.3-next.1")),(0,n.kt)("li",{parentName:"ul"},"@backstage/",(0,n.kt)("a",l({parentName:"li"},{href:"mailto:plugin-jenkins@0.7.7-next.1"}),"plugin-jenkins@0.7.7-next.1"))))))}g.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(l){return!1}}()?Object.assign:function(e,i){for(var r,c,o=l(e),p=1;p<arguments.length;p++){for(var s in r=Object(arguments[p]))a.call(r,s)&&(o[s]=r[s]);if(t){c=t(r);for(var u=0;u<c.length;u++)n.call(r,c[u])&&(o[c[u]]=r[c[u]])}}return o}},541535:(e,t,a)=>{var n=a(862525),l=60103,i=60106;var r=60109,c=60110,o=60112;var p=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;l=u("react.element"),i=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),r=u("react.provider"),c=u("react.context"),o=u("react.forward_ref"),u("react.suspense"),p=u("react.memo"),s=u("react.lazy")}var g="function"==typeof Symbol&&Symbol.iterator;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function d(e,t,a){this.props=e,this.context=t,this.refs=m,this.updater=a||h}function b(){}function f(e,t,a){this.props=e,this.context=t,this.refs=m,this.updater=a||h}d.prototype.isReactComponent={},d.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(k(85));this.updater.enqueueSetState(this,e,t,"setState")},d.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=d.prototype;var x=f.prototype=new b;x.constructor=f,n(x,d.prototype),x.isPureReactComponent=!0;var N={current:null},v=Object.prototype.hasOwnProperty,y={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,a){var n,i={},r=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(r=""+t.key),t)v.call(t,n)&&!y.hasOwnProperty(n)&&(i[n]=t[n]);var o=arguments.length-2;if(1===o)i.children=a;else if(1<o){for(var p=Array(o),s=0;s<o;s++)p[s]=arguments[s+2];i.children=p}if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===i[n]&&(i[n]=o[n]);return{$$typeof:l,type:e,key:r,ref:c,props:i,_owner:N.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var j=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,a,n,r){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var o=!1;if(null===e)o=!0;else switch(c){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case l:case i:o=!0}}if(o)return r=r(o=e),e=""===n?"."+w(o,0):n,Array.isArray(r)?(a="",null!=e&&(a=e.replace(j,"$&/")+"/"),O(r,t,a,"",(function(e){return e}))):null!=r&&(P(r)&&(r=function(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(r,a+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(j,"$&/")+"/")+e)),t.push(r)),1;if(o=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var s=n+w(c=e[p],p);o+=O(c,t,a,s,r)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=g&&e[g]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),p=0;!(c=e.next()).done;)o+=O(c=c.value,t,a,s=n+w(c,p++),r);else if("object"===c)throw t=""+e,Error(k(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return o}function U(e,t,a){if(null==e)return e;var n=[],l=0;return O(e,n,"","",(function(e){return t.call(a,e,l++)})),n}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function M(){var e=E.current;if(null===e)throw Error(k(321));return e}},827378:(e,t,a)=>{a(541535)}}]);
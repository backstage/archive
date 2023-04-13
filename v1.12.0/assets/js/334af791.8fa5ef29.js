/*! For license information please see 334af791.8fa5ef29.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[478638],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,g=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},889783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});n(827378);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"discovery",title:"GitLab Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in GitLab"},l=void 0,s={unversionedId:"integrations/gitlab/discovery",id:"integrations/gitlab/discovery",title:"GitLab Discovery",description:"Automatically discovering catalog entities from repositories in GitLab",source:"@site/../docs/integrations/gitlab/discovery.md",sourceDirName:"integrations/gitlab",slug:"/integrations/gitlab/discovery",permalink:"/v1.12.0/docs/integrations/gitlab/discovery",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/gitlab/discovery.md",tags:[],version:"current",frontMatter:{id:"discovery",title:"GitLab Discovery",sidebar_label:"Discovery",description:"Automatically discovering catalog entities from repositories in GitLab"},sidebar:"docs",previous:{title:"Locations",permalink:"/v1.12.0/docs/integrations/gitlab/locations"},next:{title:"Org Data",permalink:"/v1.12.0/docs/integrations/gitlab/org"}},c={},u=[{value:"Alternative processor",id:"alternative-processor",level:2}],p={toc:u};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The GitLab integration has a special entity provider for discovering catalog\nentities from GitLab. The entity provider will crawl the GitLab instance and register\nentities matching the configured paths. This can be useful as an alternative to\nstatic locations or manually adding things to the catalog."),(0,r.kt)("p",null,"To use the discovery provider, you'll need a GitLab integration\n",(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/integrations/gitlab/locations"}),"set up")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"token"),". Then you can add a provider config per group\nto the catalog configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-yaml"}),'catalog:\n  providers:\n    gitlab:\n      yourProviderId:\n        host: gitlab-host # Identifies one of the hosts set up in the integrations\n        fallbackBranch: main # Optional. Fallback to be used if there is no default branch configured at the Gitlab repository. It is only used, if `branch` is undefined. Uses `master` as default\n        group: example-group # Optional. Group and subgroup (if needed) to look for repositories. If not present the whole instance will be scanned\n        entityFilename: catalog-info.yaml # Optional. Defaults to `catalog-info.yaml`\n        projectPattern: \'[\\s\\S]*\' # Optional. Filters found projects based on provided patter. Defaults to `[\\s\\S]*`, which means to not filter anything\n        schedule: # optional; same options as in TaskScheduleDefinition\n          # supports cron, ISO duration, "human duration" as used in code\n          frequency: { minutes: 30 }\n          # supports ISO duration, "human duration" as used in code\n          timeout: { minutes: 3 }\n')),(0,r.kt)("p",null,"As this provider is not one of the default providers, you will first need to install\nthe gitlab catalog plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"# From your Backstage root directory\nyarn add --cwd packages/backend @backstage/plugin-catalog-backend-module-gitlab\n")),(0,r.kt)("p",null,"Once you've done that, you'll also need to add the segment below to ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/backend/src/plugins/catalog.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',title:'"packages/backend/src/plugins/catalog.ts"'}),"import { GitlabDiscoveryEntityProvider } from '@backstage/plugin-catalog-backend-module-gitlab';\n\nconst builder = await CatalogBuilder.create(env);\n/** ... other processors and/or providers ... */\nbuilder.addEntityProvider(\n  ...GitlabDiscoveryEntityProvider.fromConfig(env.config, {\n    logger: env.logger,\n    // optional: alternatively, use scheduler with schedule defined in app-config.yaml\n    schedule: env.scheduler.createScheduledTaskRunner({\n      frequency: { minutes: 30 },\n      timeout: { minutes: 3 },\n    }),\n    // optional: alternatively, use schedule\n    scheduler: env.scheduler,\n  }),\n);\n")),(0,r.kt)("h2",o({},{id:"alternative-processor"}),"Alternative processor"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-yaml"}),"catalog:\n  locations:\n    - type: gitlab-discovery\n      target: https://gitlab.com/group/subgroup/blob/main/catalog-info.yaml\n")),(0,r.kt)("p",null,"As alternative to the entity provider ",(0,r.kt)("inlineCode",{parentName:"p"},"GitlabDiscoveryEntityProvider"),"\nyou can still use the ",(0,r.kt)("inlineCode",{parentName:"p"},"GitLabDiscoveryProcessor"),"."),(0,r.kt)("p",null,"Note the ",(0,r.kt)("inlineCode",{parentName:"p"},"gitlab-discovery")," type, as this is not a regular ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," processor."),(0,r.kt)("p",null,"The target is composed of three parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The base URL, ",(0,r.kt)("inlineCode",{parentName:"li"},"https://gitlab.com")," in this case"),(0,r.kt)("li",{parentName:"ul"},"The group path, ",(0,r.kt)("inlineCode",{parentName:"li"},"group/subgroup")," in this case. This is optional: If you omit\nthis path the processor will scan the entire GitLab instance instead."),(0,r.kt)("li",{parentName:"ul"},"The path within each repository to find the catalog YAML file. This will\nusually be ",(0,r.kt)("inlineCode",{parentName:"li"},"/blob/main/catalog-info.yaml"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"/blob/master/catalog-info.yaml")," or\na similar variation for catalog files stored in the root directory of each\nrepository. If you want to use the repository's default branch use the ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),"\nwildcard, e.g.: ",(0,r.kt)("inlineCode",{parentName:"li"},"/blob/*/catalog-info.yaml"))),(0,r.kt)("p",null,"Finally, you will have to add the processor in the catalog initialization code\nof your backend."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',title:'"packages/backend/src/plugins/catalog.ts"'}),"/* highlight-add-next-line */\nimport { GitLabDiscoveryProcessor } from '@backstage/plugin-catalog-backend-module-gitlab';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  /* highlight-add-start */\n  builder.addProcessor(\n    GitLabDiscoveryProcessor.fromConfig(env.config, { logger: env.logger }),\n  );\n  /* highlight-add-end */\n\n  // ..\n}\n")),(0,r.kt)("p",null,"If you don't want create location object if file with component definition do not exists in project, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"skipReposWithoutExactFileMatch")," option. That can reduce count of request to gitlab with 404 status code."))}d.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,l,s=o(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(s[u]=i[u]);if(t){l=t(i);for(var p=0;p<l.length;p++)r.call(i,l[p])&&(s[l[p]]=i[l[p]])}}return s}},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;var i=60109,l=60110,s=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),l=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}function h(){}function m(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var v=m.prototype=new h;v.constructor=m,r(v,b.prototype),v.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,r)&&!w.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return i=i(s=e),e=""===r?"."+C(s,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(N,"$&/")+"/"),S(i,t,n,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=r+C(l=e[c],c);s+=S(l,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=S(l=l.value,t,n,u=r+C(l,c++),i);else if("object"===l)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function _(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var D={current:null};function E(){var e=D.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
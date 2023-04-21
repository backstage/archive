/*! For license information please see e6230c69.6157d816.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[606825],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},376070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(827378);var r=n(603905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"yarn-migration",title:"Migration to Yarn 3",description:"Guide for how to migrate a Backstage project to use Yarn 3"},s=void 0,p={unversionedId:"tutorials/yarn-migration",id:"tutorials/yarn-migration",title:"Migration to Yarn 3",description:"Guide for how to migrate a Backstage project to use Yarn 3",source:"@site/../docs/tutorials/yarn-migration.md",sourceDirName:"tutorials",slug:"/tutorials/yarn-migration",permalink:"/v1.13.0/docs/tutorials/yarn-migration",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tutorials/yarn-migration.md",tags:[],version:"current",frontMatter:{id:"yarn-migration",title:"Migration to Yarn 3",description:"Guide for how to migrate a Backstage project to use Yarn 3"},sidebar:"docs",previous:{title:"Using the Backstage Proxy from Within a Plugin",permalink:"/v1.13.0/docs/tutorials/using-backstage-proxy-within-plugin"},next:{title:"Overview",permalink:"/v1.13.0/docs/architecture-decisions/"}},c={},u=[{value:"Migration",id:"migration",level:2},{value:"Ignore File Updates",id:"ignore-file-updates",level:3},{value:"Installation",id:"installation",level:3},{value:"Migrate Usage",id:"migrate-usage",level:3}],d={toc:u};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: We do not yet recommend all projects to migrate to Yarn 3. Only do so if you have specific reasons for it.")),(0,r.kt)("p",null,"While Backstage projects created with ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/create-app")," use ",(0,r.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/"},"Yarn 1")," by default, it\nis possible to switch them to instead use ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn 3"),". Tools like ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn backstage-cli versions:bump")," will\nstill work, as they recognize both lockfile formats."),(0,r.kt)("h2",{id:"migration"},"Migration"),(0,r.kt)("p",null,"In addition to this guide, also be sure to check out the ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/getting-started/migration"},"Yarn migration guide")," as well."),(0,r.kt)("h3",{id:"ignore-file-updates"},"Ignore File Updates"),(0,r.kt)("p",null,"First off, be sure to have the updated ignore entries in your app. These are included in all newly created projects, but might be missing in yours:"),(0,r.kt)("p",null,"Add the following to ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gitignore"},"# Yarn 3 files\n.pnp.*\n.yarn/*\n!.yarn/patches\n!.yarn/plugins\n!.yarn/releases\n!.yarn/sdks\n!.yarn/versions\n")),(0,r.kt)("p",null,"And this to ",(0,r.kt)("inlineCode",{parentName:"p"},".dockerignore"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gitignore"},".yarn/cache\n.yarn/install-state.gz\n")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Let's move on to the actual installation. We'd recommend making separate Git commits of most of these steps, in case you need to go back and debug anything. To install Yarn 3, run the following command in the project root:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn set version stable\n")),(0,r.kt)("p",null,"We'll need the Yarn workspace tools plugin later on, so let's install that too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn plugin import @yarnpkg/plugin-workspace-tools\n")),(0,r.kt)("p",null,"Now we're ready to re-install all dependencies. This will update your ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn.lock")," and switch the project to use ",(0,r.kt)("inlineCode",{parentName:"p"},"node-modules")," as the Yarn node linker."),(0,r.kt)("p",null,"In case you had a ",(0,r.kt)("inlineCode",{parentName:"p"},".yarnrc")," you can delete it now, but be sure to migrate over any options to ",(0,r.kt)("inlineCode",{parentName:"p"},".yarnrc.yml"),". See the ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/configuration/manifest"},"Yarn configuration docs")," for a full list of options. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"registry")," is now ",(0,r.kt)("inlineCode",{parentName:"p"},"npmRegistryServer"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"network-timeout")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"httpTimeout"),"."),(0,r.kt)("h3",{id:"migrate-usage"},"Migrate Usage"),(0,r.kt)("p",null,"At this point you'll be all set up with Yarn 3! What remains is to migrate any usage of Yarn according to their ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/getting-started/migration"},"migration guide"),". For example, any ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn install --frozen-lockfile")," commands should be replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn install --immutable"),"."),(0,r.kt)("p",null,"You'll also need to update any ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"s to add instructions to copy in your Yarn 3 installation into the image:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"COPY .yarn ./.yarn\nCOPY .yarnrc.yml ./\n")),(0,r.kt)("p",null,"In a multi-stage ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", each stage that runs a ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," command will also need the Yarn 3 installation. For example, in the final stage you may need to add the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"COPY --from=build --chown=node:node /app/.yarn ./.yarn\nCOPY --from=build --chown=node:node /app/.yarnrc.yml  ./\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--production")," flag to ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn install")," has been removed in Yarn 3, instead you need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn workspaces focus --all --production")," to avoid installing development dependencies in your production deployment. A tradeoff of this is that ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn workspaces focus")," does not support the ",(0,r.kt)("inlineCode",{parentName:"p"},"--immutable")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'RUN yarn workspaces focus --all --production && rm -rf "$(yarn cache clean)"\n')),(0,r.kt)("p",null,"Additionally, ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn config")," has been reworked from being able to store any arbitrary key-value pairs to only supporting a handful of predefined pairs. Previously, we would set our preferred ",(0,r.kt)("inlineCode",{parentName:"p"},"python3")," interpreter to work around ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/issues/11583"},"any issues related to node-gyp")," so we need to provide an appropriate substitute."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:16-bullseye-slim\n\n# highlight-add-start\n# Set Python interpreter for `node-gyp` to use\nENV PYTHON /usr/bin/python3\n# highlight-add-end\n\n# Install sqlite3 dependencies. You can skip this if you don\'t use sqlite3 in the image,\n# in which case you should also move better-sqlite3 to "devDependencies" in package.json.\nRUN apt-get update && \\\n    apt-get install -y --no-install-recommends libsqlite3-dev python3 build-essential && \\\n    # highlight-remove-start\n    rm -rf /var/lib/apt/lists/* && \\\n    yarn config set python /usr/bin/python3\n    # highlight-remove-end\n    # highlight-add-next-line\n    rm -rf /var/lib/apt/lists/*\n')),(0,r.kt)("p",null,"You'll want to make sure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"PYTHON")," environment variable is declared relatively early, before any instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"Yarn")," are invoked as ",(0,r.kt)("inlineCode",{parentName:"p"},"node-gyp")," is indirectly triggered by some modules during installation."),(0,r.kt)("p",null,"If you have any internal CLI tools in your project that are exposed through ",(0,r.kt)("inlineCode",{parentName:"p"},'"bin"')," entries in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", then you'll need to add these packages as dependencies in your project root ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". This is to make sure Yarn picks up the executables and makes them available through ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn <executable>"),"."))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,l,s=a(e),p=1;p<arguments.length;p++){for(var c in i=Object(arguments[p]))n.call(i,c)&&(s[c]=i[c]);if(t){l=t(i);for(var u=0;u<l.length;u++)r.call(i,l[u])&&(s[l[u]]=i[l[u]])}}return s}},541535:(e,t,n)=>{var r=n(862525),a=60103,o=60106;var i=60109,l=60110,s=60112;var p=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),l=u("react.context"),s=u("react.forward_ref"),u("react.suspense"),p=u("react.memo"),c=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}function h(){}function k(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=g.prototype;var b=k.prototype=new h;b.constructor=k,r(b,g.prototype),b.isPureReactComponent=!0;var v={current:null},O=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,r)&&!w.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var p=Array(s),c=0;c<s;c++)p[c]=arguments[c+2];o.children=p}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:v.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function Y(e,t,n,r,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case a:case o:s=!0}}if(s)return i=i(s=e),e=""===r?"."+P(s,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),Y(i,t,n,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var p=0;p<e.length;p++){var c=r+P(l=e[p],p);s+=Y(l,t,n,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),p=0;!(l=e.next()).done;)s+=Y(l=l.value,t,n,c=r+P(l,p++),i);else if("object"===l)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function S(e,t,n){if(null==e)return e;var r=[],a=0;return Y(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function E(){var e=_.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
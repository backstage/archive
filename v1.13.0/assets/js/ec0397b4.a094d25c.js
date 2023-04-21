/*! For license information please see ec0397b4.a094d25c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[382884],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},143676:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});a(827378);var n=a(603905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={id:"package-role-migration",title:"Package Role Migration",description:"Guide for how to migrate packages to use the new role utility"},s=void 0,c={unversionedId:"tutorials/package-role-migration",id:"tutorials/package-role-migration",title:"Package Role Migration",description:"Guide for how to migrate packages to use the new role utility",source:"@site/../docs/tutorials/package-role-migration.md",sourceDirName:"tutorials",slug:"/tutorials/package-role-migration",permalink:"/v1.13.0/docs/tutorials/package-role-migration",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tutorials/package-role-migration.md",tags:[],version:"current",frontMatter:{id:"package-role-migration",title:"Package Role Migration",description:"Guide for how to migrate packages to use the new role utility"},sidebar:"docs",previous:{title:"React Router 6.0 Migration",permalink:"/v1.13.0/docs/tutorials/react-router-stable-migration"},next:{title:"Migrating away from @backstage/core",permalink:"/v1.13.0/docs/tutorials/migrating-away-from-core"}},p={},u=[{value:"Migration",id:"migration",level:2},{value:"TL;DR, Step 1-4:",id:"tldr-step-1-4",level:3},{value:"Step 1 - Add package roles",id:"step-1---add-package-roles",level:3},{value:"Step 2 - Migrate package scripts",id:"step-2---migrate-package-scripts",level:3},{value:"Step 3 - Migrate package ESLint configurations",id:"step-3---migrate-package-eslint-configurations",level:3},{value:"Step 4 - Use <code>backstage-cli repo</code>",id:"step-4---use-backstage-cli-repo",level:3},{value:"FAQ",id:"faq",level:2},{value:"Why were package roles introduced?",id:"why-were-package-roles-introduced",level:3},{value:"Do I have to migrate to using package roles?",id:"do-i-have-to-migrate-to-using-package-roles",level:3},{value:"I have a package where none of the existing roles apply",id:"i-have-a-package-where-none-of-the-existing-roles-apply",level:3},{value:"Should I include the role in published packages?",id:"should-i-include-the-role-in-published-packages",level:3}],d={toc:u};function g(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Backstage CLI has introduced the concept of package roles, whose purpose is to\nenable more powerful tooling, optimizations, and leaner package configuration. More background and\ninformation about the change can be found in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/issues/8729"},"original RFC")," and the ",(0,n.kt)("a",{parentName:"p",href:"#faq"},"FAQ")," on this page."),(0,n.kt)("p",null,"Package roles are implemented through a well-known ",(0,n.kt)("inlineCode",{parentName:"p"},'"backstage"."role"')," field in the\n",(0,n.kt)("inlineCode",{parentName:"p"},"package.json")," of each package. There are a handful of roles defined so far, and it\nis not possible to use values outside the ",(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/local-dev/cli-build-system#package-roles"},"set of predefined roles"),"."),(0,n.kt)("p",null,"With roles in place in all packages, the Backstage CLI is able to automatically\ndetermine how to handle each package. For example, the different build commands\nhave been replaced by a single one that instead knows how to build each role.\nThe test and lint configurations are also selected automatically based on the role, and\na new category of ",(0,n.kt)("inlineCode",{parentName:"p"},"repo")," commands have been introduced in the CLI, which are able\nto operate across all packages simultaneously."),(0,n.kt)("p",null,"Package roles have been used in the Backstage main repository for a while, and\nwe now recommend that all Backstage projects are migrated to use package roles."),(0,n.kt)("h2",{id:"migration"},"Migration"),(0,n.kt)("p",null,"In order to make the migration as smooth as possible ",(0,n.kt)("inlineCode",{parentName:"p"},"@backstage/cli")," provides\na number of migration utilities. Using these in combination with some manual review\nand optional steps should be all you need to migrate to package roles in most projects."),(0,n.kt)("p",null,"Before you begin the migration, make sure you have updated to the most recent version of\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"@backstage/cli"),"."),(0,n.kt)("h3",{id:"tldr-step-1-4"},"TL;DR, Step 1-4:"),(0,n.kt)("p",null,"This is a shorter version of all of the steps below, in case you're in a hurry."),(0,n.kt)("p",null,"Run the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"yarn backstage-cli migrate package-roles\nyarn backstage-cli migrate package-scripts\nyarn backstage-cli migrate package-lint-configs\n")),(0,n.kt)("p",null,"Have a look at the new commands under ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn backstage-cli repo"),", and switch to them wherever you can. They tend to be much faster compared to their ",(0,n.kt)("inlineCode",{parentName:"p"},"lerna")," equivalents."),(0,n.kt)("h3",{id:"step-1---add-package-roles"},"Step 1 - Add package roles"),(0,n.kt)("p",null,"The first step is to add the ",(0,n.kt)("inlineCode",{parentName:"p"},'"backstage"."role"')," field to each package. This can of course be done manually, but the following command will attempt to automatically detect the role of each package in your project:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"yarn backstage-cli migrate package-roles\n")),(0,n.kt)("p",null,"The automatic detection is not perfect, so it is recommended to manually review the\nroles that were assigned to each package.\nYou can use the ",(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/local-dev/cli-build-system#package-roles"},"package role definitions")," as a reference."),(0,n.kt)("h3",{id:"step-2---migrate-package-scripts"},"Step 2 - Migrate package scripts"),(0,n.kt)("p",null,"The migration to package roles also introduces a new ",(0,n.kt)("inlineCode",{parentName:"p"},"package")," command category to the CLI.\nEach command under the ",(0,n.kt)("inlineCode",{parentName:"p"},"package")," category is designed to be mapped directly to an entry in ",(0,n.kt)("inlineCode",{parentName:"p"},'"scripts"')," in ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json"),". These commands replace the existing commands like ",(0,n.kt)("inlineCode",{parentName:"p"},"build"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"app:build"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"lint"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"test"),". They look something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "start": "backstage-cli package start",\n    "build": "backstage-cli package build",\n    "lint": "backstage-cli package lint",\n    ...\n  }\n}\n')),(0,n.kt)("p",null,"Every package role has a fixed set of recommended scripts. It is strongly recommended that you use these scripts, as it allows for optimizations in other parts of the CLI. You can migrate to using all of these scripts by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"yarn backstage-cli migrate package-scripts\n")),(0,n.kt)("p",null,"The migration command also carries over any existing flags that were being passed in the old scripts."),(0,n.kt)("p",null,"If you in the end do not want to use this exact script setup, it is still recommended to migrate to using the ",(0,n.kt)("inlineCode",{parentName:"p"},"package")," commands, as the top-level commands will be deprecated and removed. If you don't want to use package roles either, you can pass an explicit role to some of the package commands, for example ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn backstage-cli package build --role web-library"),"."),(0,n.kt)("h3",{id:"step-3---migrate-package-eslint-configurations"},"Step 3 - Migrate package ESLint configurations"),(0,n.kt)("p",null,"An area that has been simplified as part of the move to package roles is the ESLint configuration. Rather than having each package select which configuration they want (and getting it wrong), they now use a shared configuration factory that utilizes the package role. You can read more about the new configuration setup in the ",(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/local-dev/cli-build-system#linting"},"build system documentation"),"."),(0,n.kt)("p",null,"To migrate the ESLint configuration of all packages in your project, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"yarn backstage-cli migrate package-lint-configs\n")),(0,n.kt)("p",null,"This will migrate all existing ",(0,n.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," that extend the old configuration from ",(0,n.kt)("inlineCode",{parentName:"p"},"@backstage/cli"),", as well as carry over any additional configuration."),(0,n.kt)("h3",{id:"step-4---use-backstage-cli-repo"},"Step 4 - Use ",(0,n.kt)("inlineCode",{parentName:"h3"},"backstage-cli repo")),(0,n.kt)("p",null,"The Backstage CLI recently introduced a new ",(0,n.kt)("inlineCode",{parentName:"p"},"repo")," command category, which houses commands that operate on an entire monorepo at once. These commands work particularly well once packages have been migrated to use roles, as that allows for some very effective optimizations. It is typically much faster to use these commands compared to using tools like ",(0,n.kt)("inlineCode",{parentName:"p"},"lerna"),", as they're able to avoid the overhead of calling package scripts through ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn")," and can operate on multiple packages at once. You can read more about the ",(0,n.kt)("inlineCode",{parentName:"p"},"repo")," command in the ",(0,n.kt)("a",{parentName:"p",href:"/v1.13.0/docs/local-dev/cli-commands#repo-build"},"CLI command documentation"),"."),(0,n.kt)("p",null,"The way to execute this step of the migration is not as well defined as the previous steps, as it depends on what your development and CI/CD setup looks like. Look for the following patterns to replace in your root ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json")," as well as CI/CD setup:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Commands that lint the entire repo should be replaced with ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn backstage-cli repo lint")," along with a ",(0,n.kt)("inlineCode",{parentName:"p"},"--since")," flag if needed. For example this:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"lerna run lint --since origin/master --\n")),(0,n.kt)("p",{parentName:"li"},"would be replaced by the following:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"backstage-cli repo lint --since origin/master\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In places where the entire repo is being built, use ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn backstage-cli repo build"),", which also supports the ",(0,n.kt)("inlineCode",{parentName:"p"},"--since")," flag. The migration here is a bit more nuanced as it depends on why you are building all packages."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you are building all packages to ",(0,n.kt)("strong",{parentName:"li"},"verify")," that you are able to build them, you most likely want ",(0,n.kt)("inlineCode",{parentName:"li"},"backstage-cli repo build --all"),". The ",(0,n.kt)("inlineCode",{parentName:"li"},"--all")," flag signals that bundled packages like ",(0,n.kt)("inlineCode",{parentName:"li"},"packages/app")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"packages/backend")," should be built as well. Pair this up with a ",(0,n.kt)("inlineCode",{parentName:"li"},"--since")," flag in CI to avoid needing to build all packages."),(0,n.kt)("li",{parentName:"ul"},"If you are building all packages to ",(0,n.kt)("strong",{parentName:"li"},"publish")," them, then ",(0,n.kt)("inlineCode",{parentName:"li"},"backstage-cli repo build")," is enough, as it builds all published packages."),(0,n.kt)("li",{parentName:"ul"},"If you are building all packages to ",(0,n.kt)("strong",{parentName:"li"},"deploy")," them, you likely don't want to use the ",(0,n.kt)("inlineCode",{parentName:"li"},"repo")," command at all, simply call ",(0,n.kt)("inlineCode",{parentName:"li"},"yarn build")," in the packages you want to deploy instead. For example, if you are deploying the backend with a docker host build, it's enough to call ",(0,n.kt)("inlineCode",{parentName:"li"},"yarn build")," inside ",(0,n.kt)("inlineCode",{parentName:"li"},"packages/backend"),". In a standard ",(0,n.kt)("inlineCode",{parentName:"li"},"@backstage/create-app")," there is also a shorthand for building the backend from the root, ",(0,n.kt)("inlineCode",{parentName:"li"},"yarn build:backend"),".")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"why-were-package-roles-introduced"},"Why were package roles introduced?"),(0,n.kt)("p",null,"To keep configuration lean, allow for more utilities and tooling, and to enable optimizations in the build system. You can read more about the reasoning in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/issues/8729"},"original RFC"),"."),(0,n.kt)("h3",{id:"do-i-have-to-migrate-to-using-package-roles"},"Do I have to migrate to using package roles?"),(0,n.kt)("p",null,"Short answer - yes."),(0,n.kt)("p",null,"Longer answer - mostly, you can get around having to declare the role of your packages by instead explicitly declaring the role in the command invocation or configuration. For example, the ",(0,n.kt)("inlineCode",{parentName:"p"},"app:build")," command will go away, but you can replace it with ",(0,n.kt)("inlineCode",{parentName:"p"},"package build --role frontend")," if you don't want to declare the role in ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json")," . It is however strongly recommended to declare the package roles."),(0,n.kt)("h3",{id:"i-have-a-package-where-none-of-the-existing-roles-apply"},"I have a package where none of the existing roles apply"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"web-library"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"node-library")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"common-library")," roles are general purpose roles that should cover most use cases. If you feel like none of those roles work for you, then please open an issue in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage"},"Backstage repo")," and suggest the addition of a new role."),(0,n.kt)("h3",{id:"should-i-include-the-role-in-published-packages"},"Should I include the role in published packages?"),(0,n.kt)("p",null,"Yes. While there is nothing that will consume the role at the moment, it is likely that future tooling will be able to provide a better experience for users when published packages include the role."))}g.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}()?Object.assign:function(e,o){for(var i,l,s=r(e),c=1;c<arguments.length;c++){for(var p in i=Object(arguments[c]))a.call(i,p)&&(s[p]=i[p]);if(t){l=t(i);for(var u=0;u<l.length;u++)n.call(i,l[u])&&(s[l[u]]=i[l[u]])}}return s}},541535:(e,t,a)=>{var n=a(862525),r=60103,o=60106;var i=60109,l=60110,s=60112;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;r=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),l=u("react.context"),s=u("react.forward_ref"),u("react.suspense"),c=u("react.memo"),p=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function k(e,t,a){this.props=e,this.context=t,this.refs=h,this.updater=a||m}function f(){}function y(e,t,a){this.props=e,this.context=t,this.refs=h,this.updater=a||m}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},f.prototype=k.prototype;var b=y.prototype=new f;b.constructor=y,n(b,k.prototype),b.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,a){var n,o={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,n)&&!N.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=a;else if(1<s){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+2];o.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:r,type:e,key:i,ref:l,props:o,_owner:v.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var j=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,a,n,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case o:s=!0}}if(s)return i=i(s=e),e=""===n?"."+S(s,0):n,Array.isArray(i)?(a="",null!=e&&(a=e.replace(j,"$&/")+"/"),P(i,t,a,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(j,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var p=n+S(l=e[c],c);s+=P(l,t,a,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),c=0;!(l=e.next()).done;)s+=P(l=l.value,t,a,p=n+S(l,c++),i);else if("object"===l)throw t=""+e,Error(g(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function x(e,t,a){if(null==e)return e;var n=[],r=0;return P(e,n,"","",(function(e){return t.call(a,e,r++)})),n}function I(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function E(){var e=T.current;if(null===e)throw Error(g(321));return e}},827378:(e,t,a)=>{a(541535)}}]);
/*! For license information please see 4d57b9a2.09d8bcc4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[475917],{603905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,h=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(827378);var r=n(603905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"migrating-away-from-core",title:"Migrating away from @backstage/core",description:"Guide on how to migrate to the new Backstage core libraries."},p=void 0,c={unversionedId:"tutorials/migrating-away-from-core",id:"tutorials/migrating-away-from-core",title:"Migrating away from @backstage/core",description:"Guide on how to migrate to the new Backstage core libraries.",source:"@site/../docs/tutorials/migrating-away-from-core.md",sourceDirName:"tutorials",slug:"/tutorials/migrating-away-from-core",permalink:"/v1.13.0/docs/tutorials/migrating-away-from-core",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tutorials/migrating-away-from-core.md",tags:[],version:"current",frontMatter:{id:"migrating-away-from-core",title:"Migrating away from @backstage/core",description:"Guide on how to migrate to the new Backstage core libraries."},sidebar:"docs",previous:{title:"Package Role Migration",permalink:"/v1.13.0/docs/tutorials/package-role-migration"},next:{title:"Configuring Plugin Databases",permalink:"/v1.13.0/docs/tutorials/configuring-plugin-databases"}},l={},u=[{value:"Migration",id:"migration",level:2},{value:"Step 1 - Run codemod",id:"step-1---run-codemod",level:3},{value:"Step 2 - Update dependencies",id:"step-2---update-dependencies",level:3},{value:"Step 3 - Manual review",id:"step-3---manual-review",level:3},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Removed <code>IconKey</code> type",id:"removed-iconkey-type",level:3},{value:"Constrained <code>IconComponent</code> type",id:"constrained-iconcomponent-type",level:3}],d={toc:u};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/core")," package has been split into three separate packages,\n",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/core-app-api"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/core-plugin-api"),", and\n",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/core-components"),". For more information about the reasoning behind\nthis change and the naming of the packages, see the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/issues/4872"},"original RFC")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/5825"},"initial PR"),"."),(0,r.kt)("p",null,"The main purpose of the split is to make plugins more decoupled from the app,\nand open up for the possibility of combining plugins using many different\nversions of the core libraries. This should significantly reduce the maintenance\nburden on plugin authors, as well as reduce the impact of breaking changes in\nthe core APIs."),(0,r.kt)("h2",{id:"migration"},"Migration"),(0,r.kt)("p",null,"At a high level the migration is done by simply replacing usages of\n",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/core")," with one or more of the three new core libraries. There are a\nfew breaking changes in the new packages that are listed below, but for most\nplugins the migration is a simple replacement. In order to make the migration as\nsmooth as possible we provide a collection of tools to automate the majority of\nthe migration effort."),(0,r.kt)("p",null,"Below is a list of steps that should get most projects completely migrated, the\norder of the steps is a recommendation but not required, so don't worry if you\nneed to go back to previous steps to fix things."),(0,r.kt)("h3",{id:"step-1---run-codemod"},"Step 1 - Run codemod"),(0,r.kt)("p",null,"The first step is to run\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@backstage/codemods"},(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/codemods")),"\nacross your project. This will automatically convert all module imports in your\nsource code to use one of the three new core packages instead. For example, the\nfollowing change might occur:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/* highlight-remove-next-line */\nimport { useApi, configApiRef, InfoCard } from '@backstage/core';\n/* highlight-add-start */\nimport { useApi, configApiRef } from '@backstage/core-plugin-api';\nimport { InfoCard } from '@backstage/core-components';\n/* highlight-add-end */\n")),(0,r.kt)("p",null,"In a typical app created with ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/create-app"),", you would run the\nfollowing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx @backstage/codemods apply core-imports packages plugins\n")),(0,r.kt)("p",null,"The last two arguments, ",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins"),", are the folders that the\ncodemod should be applied to. Add or remove folders as needed for your project."),(0,r.kt)("p",null,"The codemod might fail for some files because of the missing ",(0,r.kt)("inlineCode",{parentName:"p"},"IconKey")," type in\nany of the new packages. This is one of the few breaking changes. To fix, remove\nany ",(0,r.kt)("inlineCode",{parentName:"p"},"IconKey")," imports and replace usages of it with the ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," type, see the\nbreaking changes section below for details. Once usages of ",(0,r.kt)("inlineCode",{parentName:"p"},"IconKey")," type have\nbeen removed, you can re-run the codemod for those files."),(0,r.kt)("p",null,"Note that while the codemod tries to stick to using the existing formatting in\nyour project, it doesn't always manage to do that. If you're using ",(0,r.kt)("inlineCode",{parentName:"p"},"prettier")," to\nformat the code in your project, it's best to run ",(0,r.kt)("inlineCode",{parentName:"p"},"prettier --write")," on any\nfiles that were changed by the codemod."),(0,r.kt)("h3",{id:"step-2---update-dependencies"},"Step 2 - Update dependencies"),(0,r.kt)("p",null,"The next step is to update dependencies in your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," files. Any\npackage that currently depends on ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/core")," will need to have it\nreplaced by one or more of the new packages. The app package should have all\nthree packages added to ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),", while for plugins and additional non-app\npackages, the ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/core-plugin-api")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/core-components"),"\npackages should be added to the set of regular ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),", and\n",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/core-app-api")," should be added to ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," for usage in\ntests."),(0,r.kt)("p",null,"A tool that can help out with step is the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin:diff")," command from the\n",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/cli"),", it will compare your plugin to the base plugin template and\nsuggest changes where the plugin deviates. A quick way to get this step done if\nyou have up-to-date project is to run the following in the project root:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# The --yes flag causes all suggested changes to be accepted automatically\nyarn diff --yes\n")),(0,r.kt)("p",null,"If you do not have the ",(0,r.kt)("inlineCode",{parentName:"p"},"diff")," command set up in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", you can also\nmanually execute the following in each plugin folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn backstage-cli plugin:diff --yes\n")),(0,r.kt)("h3",{id:"step-3---manual-review"},"Step 3 - Manual review"),(0,r.kt)("p",null,"At this point your app is either completely or very close to being migrated. Run\ntype checks with ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn tsc")," to check if you hit any of the breaking changes\nbelow or if there are any other things to fix. It can also be worthwhile\nsearching for occurrences of ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/core")," in the codebase, as that might\nfind usages in for example ",(0,r.kt)("inlineCode",{parentName:"p"},"jest")," mock calls, which aren't handled by the\ncodemod."),(0,r.kt)("p",null,"As a final step you'll want to boot up the app and take it through any regular\nverification step that you have set up for your project. Don't hesitate to open\na GitHub issue, PR, or reach out on Discord if you hit any snags, or if there\nare any additional steps or hints that you think should be added to this guide!"),(0,r.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,r.kt)("p",null,"The following is a list of breaking changes between ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/core")," and the\nthree new core packages. Not that this list may not be exhaustive depending on\nwhen you migrate your app, as new releases of the new core packages may bring\nfurther changes."),(0,r.kt)("h3",{id:"removed-iconkey-type"},"Removed ",(0,r.kt)("inlineCode",{parentName:"h3"},"IconKey")," type"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"IconKey")," type used to be a string union of all known keys used for the app\nicons available through ",(0,r.kt)("inlineCode",{parentName:"p"},"useApp().getSystemIcon(key)"),". The type has been removed\nsince the set of allowed icon keys is no longer constrained, and there is\ninstead only a guarantee that the app provides a minimum set of icons, but can\nprovide any icons it wants beyond that. Migration is done by simply replacing\nold usages by the ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," type."),(0,r.kt)("h3",{id:"constrained-iconcomponent-type"},"Constrained ",(0,r.kt)("inlineCode",{parentName:"h3"},"IconComponent")," type"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"IconComponent")," type used to allow all of the props from the MUI ",(0,r.kt)("inlineCode",{parentName:"p"},"SvgIcon"),".\nThis encouraged some bad patterns in open source plugins such as applying colors\nto the icons, which in turn hurt the ability to replace the icons with custom\nones. The ",(0,r.kt)("inlineCode",{parentName:"p"},"IconComponent")," type, which is now exported from\n",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/core-plugin-api"),", now only accepts a ",(0,r.kt)("inlineCode",{parentName:"p"},"fontSize")," prop used to set the\nsize of the icon. The type is compatible with the MUI ",(0,r.kt)("inlineCode",{parentName:"p"},"SvgIcon"),", but there may\nbe situations where an icon needs an explicit cast to ",(0,r.kt)("inlineCode",{parentName:"p"},"IconComponent")," in order\nto narrow the type."))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,s,p=o(e),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))n.call(i,l)&&(p[l]=i[l]);if(t){s=t(i);for(var u=0;u<s.length;u++)r.call(i,s[u])&&(p[s[u]]=i[s[u]])}}return p}},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;var i=60109,s=60110,p=60112;var c=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),a=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),s=u("react.context"),p=u("react.forward_ref"),u("react.suspense"),c=u("react.memo"),l=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var k=b.prototype=new y;k.constructor=b,r(k,m.prototype),k.isPureReactComponent=!0;var w={current:null},v=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,a={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,r)&&!O.hasOwnProperty(r)&&(a[r]=t[r]);var p=arguments.length-2;if(1===p)a.children=n;else if(1<p){for(var c=Array(p),l=0;l<p;l++)c[l]=arguments[l+2];a.children=c}if(e&&e.defaultProps)for(r in p=e.defaultProps)void 0===a[r]&&(a[r]=p[r]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var p=!1;if(null===e)p=!0;else switch(s){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case o:case a:p=!0}}if(p)return i=i(p=e),e=""===r?"."+P(p,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(N,"$&/")+"/"),S(i,t,n,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||p&&p.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(p=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var l=r+P(s=e[c],c);p+=S(s,t,n,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(s=e.next()).done;)p+=S(s=s.value,t,n,l=r+P(s,c++),i);else if("object"===s)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return p}function x(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function _(){var e=I.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
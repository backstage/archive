/*! For license information please see 96326998.7f1af9c3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[775518],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(a),f=n,m=u["".concat(c,".").concat(f)]||u[f]||h[f]||o;return a?r.createElement(m,s(s({ref:t},p),{},{components:a})):r.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},461421:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});a(827378);var r=a(603905);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={id:"v1.1.0",title:"v1.1.0",description:"Backstage Release v1.1.0"},c=void 0,l={unversionedId:"releases/v1.1.0",id:"releases/v1.1.0",title:"v1.1.0",description:"Backstage Release v1.1.0",source:"@site/../docs/releases/v1.1.0.md",sourceDirName:"releases",slug:"/releases/v1.1.0",permalink:"/v1.13.0/docs/releases/v1.1.0",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.1.0.md",tags:[],version:"current",frontMatter:{id:"v1.1.0",title:"v1.1.0",description:"Backstage Release v1.1.0"},sidebar:"releases",previous:{title:"v1.2.0",permalink:"/v1.13.0/docs/releases/v1.2.0"},next:{title:"v1.0.0",permalink:"/v1.13.0/docs/releases/v1.0.0"}},p={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Auth",id:"auth",level:3},{value:"CLI",id:"cli",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Permissions",id:"permissions",level:3},{value:"Stack Overflow",id:"stack-overflow",level:3},{value:"Misc",id:"misc",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}],h={toc:u};function f(e){var{components:t}=e,a=s(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},h,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These are the release notes for the v1.1.0 release of ",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/"},"Backstage"),"."),(0,r.kt)("p",null,"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."),(0,r.kt)("h2",{id:"highlights"},"Highlights"),(0,r.kt)("h3",{id:"auth"},"Auth"),(0,r.kt)("p",null,"The auth ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/plugins/auth-backend"},"backend")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/plugins/auth-node"},"node package")," received a few ",(0,r.kt)("strong",{parentName:"p"},"BREAKING")," changes."),(0,r.kt)("p",null,"You are now required to always return a ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," from the result of a sign-in resolver, and all default sign-in resolvers have been removed. This means that you will have to make a conscious choice to use one of a few predefined resolver functions to be able to use a given auth provider for signing in, or to write your own. Don\u2019t worry, it\u2019s actually rather straightforward to do, and ends up clarifying responsibilities for safe authentication and catalog ownership."),(0,r.kt)("p",null,"There are also a number of deprecations among the exported auth backend types, which you may want to adapt to."),(0,r.kt)("p",null,"For more information, see the relevant ",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/auth/identity-resolver"},"documentation section")," about sign-in resolvers, and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/plugins/auth-backend/CHANGELOG.md#0130"},"backend"),"/",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/plugins/auth-node/CHANGELOG.md#020"},"node")," changelogs."),(0,r.kt)("h3",{id:"cli"},"CLI"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/packages/cli"},"CLI")," has bumped the ",(0,r.kt)("inlineCode",{parentName:"p"},"jest")," version from ",(0,r.kt)("inlineCode",{parentName:"p"},"^26.0.1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"^27.5.1"),". You can find the complete list of breaking changes ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/releases/tag/v27.0.0"},"here"),"."),(0,r.kt)("p",null,"We strongly recommend having completed the ",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/tutorials/package-role-migration"},"package role migration")," before upgrading to this version, as the package roles are used to automatically determine the testing environment for each package."),(0,r.kt)("p",null,"Note that one of the breaking changes of Jest 27 is that the ",(0,r.kt)("inlineCode",{parentName:"p"},"jsdom")," environment no longer includes ",(0,r.kt)("inlineCode",{parentName:"p"},"setImmediate")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"clearImmediate"),", which means you might need to update some of your frontend packages. Another notable change is that ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.useFakeTimers")," now defaults to the ",(0,r.kt)("inlineCode",{parentName:"p"},"'modern'")," implementation, which also mocks microtasks."),(0,r.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/plugins/kubernetes-backend"},"Kubernetes backend")," has a ",(0,r.kt)("strong",{parentName:"p"},"BREAKING")," change, in that cluster suppliers now need to cache their results to allow frequent calls to their methods. This was done to pave the way for custom suppliers that dynamically fetch results from the real authority, instead of hard coding them in config. Thanks ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/heyLu"},"@heyLu"),"! (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/10428"},"#10428"),")"),(0,r.kt)("h3",{id:"permissions"},"Permissions"),(0,r.kt)("p",null,"The permission related packages received a number of ",(0,r.kt)("strong",{parentName:"p"},"BREAKING")," changes. Among other things, the names of types were settled to be made more crisp and clear. This will mostly apply to those who write custom permissions. This all goes to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/plugins/permission-common/CHANGELOG.md#060"},"common"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/plugins/permission-node/CHANGELOG.md#060"},"node"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/plugins/permission-react/CHANGELOG.md#040"},"react")," packages, whose changelogs are linked here."),(0,r.kt)("h3",{id:"stack-overflow"},"Stack Overflow"),(0,r.kt)("p",null,"There\u2019s a new Stack Overflow ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/plugins/stack-overflow"},"frontend")," plugin with a corresponding ","[backend]","(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/plugins/stack-overflow-backend%5D"},"https://github.com/backstage/backstage/tree/master/plugins/stack-overflow-backend]"),"!"),(0,r.kt)("h3",{id:"misc"},"Misc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/plugins/cicd-statistics"},"CI/CD Statistics plugin")," now has GitLab support, through the new ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/plugins/cicd-statistics-module-gitlab"},"GitLab module"),". Thanks ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/djamaile"},"@djamaile"),"! (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/10140"},"#10140"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The catalog ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/tree/master/plugins/catalog-backend-module-aws"},"AWS module")," added a new ",(0,r.kt)("inlineCode",{parentName:"p"},"AwsS3EntityProvider")," as a replacement for the ",(0,r.kt)("inlineCode",{parentName:"p"},"AwsS3DiscoveryProcessor"),". Thanks ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pjungermann"},"@pjungermann"),"! (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/10480"},"#10480"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The permissions-related exports from the catalog backend have some ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/plugins/catalog-backend/CHANGELOG.md#110"},"breaking changes"),". These are all in alpha still, so this only applies to you if you are developing catalog permissions and import from ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-catalog-backend/alpha"),"."))),(0,r.kt)("h2",{id:"security-fixes"},"Security Fixes"),(0,r.kt)("p",null,"This release does not contain any security fixes."),(0,r.kt)("h2",{id:"upgrade-path"},"Upgrade path"),(0,r.kt)("p",null,"We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/getting-started/keeping-backstage-updated"},"keeping Backstage updated"),"."),(0,r.kt)("h2",{id:"links-and-references"},"Links and References"),(0,r.kt)("p",null,"Below you can find a list of links and references to help you learn about and start using this new release."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://backstage.io/"},"Backstage official website"),", ",(0,r.kt)("a",{parentName:"li",href:"https://backstage.io/docs/"},"documentation"),", and ",(0,r.kt)("a",{parentName:"li",href:"https://backstage.io/docs/getting-started/"},"getting started guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/backstage/backstage"},"GitHub repository")),(0,r.kt)("li",{parentName:"ul"},"Backstage's ",(0,r.kt)("a",{parentName:"li",href:"https://backstage.io/docs/overview/versioning-policy"},"versioning and support policy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/backstage-687207715902193673"},"Community Discord")," for discussions and support"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.1.0-changelog.md"},"Changelog")),(0,r.kt)("li",{parentName:"ul"},"Backstage ",(0,r.kt)("a",{parentName:"li",href:"https://backstage.io/demos"},"Demos"),", ",(0,r.kt)("a",{parentName:"li",href:"https://backstage.io/blog"},"Blog"),", ",(0,r.kt)("a",{parentName:"li",href:"https://backstage.io/docs/overview/roadmap"},"Roadmap")," and ",(0,r.kt)("a",{parentName:"li",href:"https://backstage.io/plugins"},"Plugins"))),(0,r.kt)("p",null,"Sign up for our ",(0,r.kt)("a",{parentName:"p",href:"https://mailchi.mp/spotify/backstage-community"},"newsletter")," if you want to be informed about what is happening in the world of Backstage."))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(e,o){for(var s,i,c=n(e),l=1;l<arguments.length;l++){for(var p in s=Object(arguments[l]))a.call(s,p)&&(c[p]=s[p]);if(t){i=t(s);for(var u=0;u<i.length;u++)r.call(s,i[u])&&(c[i[u]]=s[i[u]])}}return c}},541535:(e,t,a)=>{var r=a(862525),n=60103,o=60106;var s=60109,i=60110,c=60112;var l=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;n=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),s=u("react.provider"),i=u("react.context"),c=u("react.forward_ref"),u("react.suspense"),l=u("react.memo"),p=u("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function d(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||m}function k(){}function b(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||m}d.prototype.isReactComponent={},d.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},d.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=d.prototype;var y=b.prototype=new k;y.constructor=b,r(y,d.prototype),y.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,a){var r,o={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,r)&&!O.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=a;else if(1<c){for(var l=Array(c),p=0;p<c;p++)l[p]=arguments[p+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:n,type:e,key:s,ref:i,props:o,_owner:v.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,a,r,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case o:c=!0}}if(c)return s=s(c=e),e=""===r?"."+C(c,0):r,Array.isArray(s)?(a="",null!=e&&(a=e.replace(P,"$&/")+"/"),S(s,t,a,"",(function(e){return e}))):null!=s&&(j(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,a+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+e)),t.push(s)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var p=r+C(i=e[l],l);c+=S(i,t,a,p,s)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),l=0;!(i=e.next()).done;)c+=S(i=i.value,t,a,p=r+C(i,l++),s);else if("object"===i)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function T(e,t,a){if(null==e)return e;var r=[],n=0;return S(e,r,"","",(function(e){return t.call(a,e,n++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function x(){var e=_.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,a)=>{a(541535)}}]);
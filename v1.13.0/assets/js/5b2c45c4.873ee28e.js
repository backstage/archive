/*! For license information please see 5b2c45c4.873ee28e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[219440],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,h=c["".concat(s,".").concat(d)]||c[d]||f[d]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},236511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});n(827378);var r=n(603905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={id:"github-apps",title:"GitHub Apps",description:"Configure GitHub Apps for Backend Authentication"},s=void 0,p={unversionedId:"integrations/github/github-apps",id:"integrations/github/github-apps",title:"GitHub Apps",description:"Configure GitHub Apps for Backend Authentication",source:"@site/../docs/integrations/github/github-apps.md",sourceDirName:"integrations/github",slug:"/integrations/github/github-apps",permalink:"/v1.13.0/docs/integrations/github/github-apps",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/github/github-apps.md",tags:[],version:"current",frontMatter:{id:"github-apps",title:"GitHub Apps",description:"Configure GitHub Apps for Backend Authentication"},sidebar:"docs",previous:{title:"Org Data",permalink:"/v1.13.0/docs/integrations/github/org"},next:{title:"Locations",permalink:"/v1.13.0/docs/integrations/gitlab/locations"}},u={},c=[{value:"Caveats",id:"caveats",level:2},{value:"Using the CLI (public GitHub only)",id:"using-the-cli-public-github-only",level:3},{value:"GitHub Enterprise",id:"github-enterprise",level:3},{value:"Including in Integrations Config",id:"including-in-integrations-config",level:3},{value:"Limiting the GitHub App installations",id:"limiting-the-github-app-installations",level:3},{value:"App permissions",id:"app-permissions",level:3}],f={toc:c};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Backstage can be configured to use GitHub Apps for backend authentication. This\ncomes with advantages such as higher rate limits and that Backstage can act as\nan application instead of a user or bot account."),(0,r.kt)("p",null,"It also provides a much clearer and better authorization model as a opposed to\nthe OAuth apps and their respective scopes."),(0,r.kt)("h2",{id:"caveats"},"Caveats"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This authentication method is built for authenticating towards\norganization repositories and not towards personal repositories."),(0,r.kt)("li",{parentName:"ul"},"It's not possible to have multiple Backstage GitHub Apps installed in the same\nGitHub organization, to be handled by Backstage. We currently don't check\nthrough all the registered GitHub Apps to see which ones are installed for a\nparticular repository. We only respect global Organization installs right now."),(0,r.kt)("li",{parentName:"ul"},"App permissions is not managed by Backstage. They're created with some simple\ndefault permissions which you are free to change as you need, but you will\nneed to update them in the GitHub web console, not in Backstage right now. The\npermissions that are defaulted are ",(0,r.kt)("inlineCode",{parentName:"li"},"metadata:read")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"contents:read"),"."),(0,r.kt)("li",{parentName:"ul"},"The created GitHub App is private by default, this is most likely what you\nwant for github.com but it's recommended to make your application public for\nGitHub Enterprise in order to share application across your GHE organizations.")),(0,r.kt)("p",null,"A GitHub app created with the cli will have read\naccess by default. You have to manually update the GitHub App settings in GitHub\nto grant the app more permissions if needed."),(0,r.kt)("h3",{id:"using-the-cli-public-github-only"},"Using the CLI (public GitHub only)"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"backstage-cli")," to create a GitHub App using a manifest file\nthat we provide. This gives us a way to automate some of the work required to\ncreate a GitHub app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"yarn backstage-cli create-github-app <github org>\n")),(0,r.kt)("p",null,"You can read more about the\n",(0,r.kt)("a",{parentName:"p",href:"/v1.13.0/docs/local-dev/cli-commands#create-github-app"},(0,r.kt)("inlineCode",{parentName:"a"},"backstage-cli create-github-app"))," command."),(0,r.kt)("p",null,"Once you've gone through the CLI command, it should produce a YAML file in the\nroot of the project which you can then use as an ",(0,r.kt)("inlineCode",{parentName:"p"},"include")," in your\n",(0,r.kt)("inlineCode",{parentName:"p"},"app-config.yaml"),". You can go ahead and\n",(0,r.kt)("a",{parentName:"p",href:"#including-in-integrations-config"},"skip ahead")," if you've already got an app."),(0,r.kt)("p",null,"Note that the created app will have a webhook that is disabled by default and\npoints to ",(0,r.kt)("inlineCode",{parentName:"p"},"smee.io"),", which is intended for local development. There's also\ncurrently no part of Backstage that makes use of the webhook."),(0,r.kt)("h3",{id:"github-enterprise"},"GitHub Enterprise"),(0,r.kt)("p",null,"You have to create the GitHub Application manually using these\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/developers/apps/creating-a-github-app"},"instructions"),"\nas GitHub Enterprise does not support creation of apps from manifests."),(0,r.kt)("p",null,"Once the application is created you have to generate a private key for the\napplication and place it in a YAML file."),(0,r.kt)("p",null,"The YAML file must include the following information. Please note that the\nindentation for the ",(0,r.kt)("inlineCode",{parentName:"p"},"privateKey")," is required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"appId: app id\nclientId: client id\nclientSecret: client secret\nwebhookSecret: webhook secret\nprivateKey: |\n  -----BEGIN RSA PRIVATE KEY-----\n  ...Key content...\n  -----END RSA PRIVATE KEY-----\n")),(0,r.kt)("h3",{id:"including-in-integrations-config"},"Including in Integrations Config"),(0,r.kt)("p",null,"Once the credentials are stored in a YAML file generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"create-github-app"),",\nor manually by following the ",(0,r.kt)("a",{parentName:"p",href:"#github-enterprise"},"GitHub Enterprise"),"\ninstructions, they can be included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," under the\n",(0,r.kt)("inlineCode",{parentName:"p"},"integrations")," section."),(0,r.kt)("p",null,"Please note that the credentials file is highly sensitive and should NOT be\nchecked into any kind of version control. Instead use your preferred secure\nmethod of distributing secrets."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"integrations:\n  github:\n    - host: github.com\n      apps:\n        - $include: example-backstage-app-credentials.yaml\n")),(0,r.kt)("h3",{id:"limiting-the-github-app-installations"},"Limiting the GitHub App installations"),(0,r.kt)("p",null,"If you want to limit the GitHub app installations visible to backstage you may\noptionally include the ",(0,r.kt)("inlineCode",{parentName:"p"},"allowedInstallationOwners")," option. If you configure\nmultiple apps, specifying this will bring some small performance benefits\nas backstage can more easily select which app to use for a URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"appId: app id\nallowedInstallationOwners: ['GlobexCorp']\nclientId: client id\nclientSecret: client secret\nwebhookSecret: webhook secret\nprivateKey: |\n  -----BEGIN RSA PRIVATE KEY-----\n  ...Key content...\n  -----END RSA PRIVATE KEY-----\n")),(0,r.kt)("p",null,"This will result in backstage preventing the use of any installation that is not\nwithin the allow list."),(0,r.kt)("h3",{id:"app-permissions"},"App permissions"),(0,r.kt)("p",null,"When creating a GitHub App, you must select permissions to define the level of\naccess for the app. The permissions required vary depending on your use of the\nintegration:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Reading software components:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Contents"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Read-only")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Reading organization data:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Members"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Read-only")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Publishing software templates:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Administration"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Read & write")," (for creating repositories)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Contents"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Read & write")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Metadata"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Read-only")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Pull requests"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Read & write")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Issues"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Read & write")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Workflows"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Read & write")," (if templates include GitHub workflows)")))))}d.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,a){for(var o,l,s=i(e),p=1;p<arguments.length;p++){for(var u in o=Object(arguments[p]))n.call(o,u)&&(s[u]=o[u]);if(t){l=t(o);for(var c=0;c<l.length;c++)r.call(o,l[c])&&(s[l[c]]=o[l[c]])}}return s}},541535:(e,t,n)=>{var r=n(862525),i=60103,a=60106;var o=60109,l=60110,s=60112;var p=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;i=c("react.element"),a=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),o=c("react.provider"),l=c("react.context"),s=c("react.forward_ref"),c("react.suspense"),p=c("react.memo"),u=c("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function g(){}function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var k=y.prototype=new g;k.constructor=y,r(k,b.prototype),k.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,a={},o=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,r)&&!O.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var p=Array(s),u=0;u<s;u++)p[u]=arguments[u+2];a.children=p}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:i,type:e,key:o,ref:l,props:a,_owner:v.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var C=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,n,r,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case i:case a:s=!0}}if(s)return o=o(s=e),e=""===r?"."+P(s,0):r,Array.isArray(o)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),A(o,t,n,"",(function(e){return e}))):null!=o&&(j(o)&&(o=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(C,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var p=0;p<e.length;p++){var u=r+P(l=e[p],p);s+=A(l,t,n,u,o)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),p=0;!(l=e.next()).done;)s+=A(l=l.value,t,n,u=r+P(l,p++),o);else if("object"===l)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function E(e,t,n){if(null==e)return e;var r=[],i=0;return A(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function G(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function H(){var e=S.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
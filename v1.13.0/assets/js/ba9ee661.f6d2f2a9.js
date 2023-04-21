/*! For license information please see ba9ee661.f6d2f2a9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[479121],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},857036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(827378);var r=n(603905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"create-an-app",title:"Create an App",description:"Documentation on Creating an App"},s=void 0,p={unversionedId:"getting-started/create-an-app",id:"getting-started/create-an-app",title:"Create an App",description:"Documentation on Creating an App",source:"@site/../docs/getting-started/create-an-app.md",sourceDirName:"getting-started",slug:"/getting-started/create-an-app",permalink:"/v1.13.0/docs/getting-started/create-an-app",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/getting-started/create-an-app.md",tags:[],version:"current",frontMatter:{id:"create-an-app",title:"Create an App",description:"Documentation on Creating an App"},sidebar:"docs",previous:{title:"Getting Started, configuring Backstage",permalink:"/v1.13.0/docs/getting-started/configuration"},next:{title:"Running Backstage Locally",permalink:"/v1.13.0/docs/getting-started/running-backstage-locally"}},c={},u=[{value:"Create an app",id:"create-an-app",level:2},{value:"General folder structure",id:"general-folder-structure",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Couldn&#39;t find any versions for &quot;file-saver&quot;",id:"couldnt-find-any-versions-for-file-saver",level:4},{value:"Can&#39;t find Python executable &quot;python&quot;",id:"cant-find-python-executable-python",level:4},{value:"Could not execute command yarn install",id:"could-not-execute-command-yarn-install",level:4},{value:"Run the app",id:"run-the-app",level:2}],f={toc:u};function d(e){var{components:t}=e,l=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},f,l),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To get set up quickly with your own Backstage project you can create a Backstage\nApp."),(0,r.kt)("p",null,"A Backstage App is a monorepo setup with ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna")," that includes everything you\nneed to run Backstage in your own environment."),(0,r.kt)("p",null,"If you intend to develop a plugin or contribute to the Backstage project, you\nmay want to ",(0,r.kt)("a",{parentName:"p",href:"/v1.13.0/docs/getting-started/running-backstage-locally"},"Run Backstage Locally")," instead."),(0,r.kt)("h2",{id:"create-an-app"},"Create an app"),(0,r.kt)("p",null,"To create a Backstage app, you will need to have\nNode.js ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/about/releases/"},"Active LTS Release")," installed."),(0,r.kt)("p",null,"Backstage provides a utility for creating new apps. It guides you through the\ninitial setup of selecting the name of the app and a database for the backend.\nThe database options are either SQLite or PostgreSQL, where the latter requires\nyou to set up a separate database instance. If in doubt, choose SQLite, but\ndon't worry about the choice, it's easy to change later! Here is a\n",(0,r.kt)("a",{parentName:"p",href:"/v1.13.0/docs/tutorials/switching-sqlite-postgres"},"tutorial")," for it."),(0,r.kt)("p",null,"The easiest way to run the create app package is with ",(0,r.kt)("inlineCode",{parentName:"p"},"npx"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @backstage/create-app\n")),(0,r.kt)("p",null,"This will create a new Backstage App inside the current folder. The name of the\napp-folder is the name that was provided when prompted."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create app",src:n(586587).Z,width:"386",height:"1015"})),(0,r.kt)("p",null,"Inside that directory, it will generate all the files and folder structure\nneeded for you to run your app."),(0,r.kt)("h3",{id:"general-folder-structure"},"General folder structure"),(0,r.kt)("p",null,"Below is a simplified layout of the files and folders generated when creating an\napp."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"app\n\u251c\u2500\u2500 app-config.yaml\n\u251c\u2500\u2500 catalog-info.yaml\n\u251c\u2500\u2500 lerna.json\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 packages\n \xa0  \u251c\u2500\u2500 app\n\xa0\xa0  \u2514\u2500\u2500 backend\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"app-config.yaml"),": Main configuration file for the app. See\n",(0,r.kt)("a",{parentName:"li",href:"https://backstage.io/docs/conf/"},"Configuration")," for more information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"catalog-info.yaml"),": Catalog Entities descriptors. See\n",(0,r.kt)("a",{parentName:"li",href:"https://backstage.io/docs/features/software-catalog/descriptor-format"},"Descriptor Format of Catalog Entities"),"\nto get started."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lerna.json"),": Contains information about workspaces and other lerna\nconfiguration needed for the monorepo setup."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"package.json"),": Root package.json for the project. ",(0,r.kt)("em",{parentName:"li"},"Note: Be sure that you\ndon't add any npm dependencies here as they probably should be installed in\nthe intended workspace rather than in the root.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"packages/"),': Lerna leaf packages or "workspaces". Everything here is going\nto be a separate package, managed by lerna.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"packages/app/"),": An fully functioning Backstage frontend app, that acts as a\ngood starting point for you to get to know Backstage."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"packages/backend/"),": We include a backend that helps power features such as\n",(0,r.kt)("a",{parentName:"li",href:"https://backstage.io/docs/auth/"},"Authentication"),",\n",(0,r.kt)("a",{parentName:"li",href:"https://backstage.io/docs/features/software-catalog/"},"Software Catalog"),",\n",(0,r.kt)("a",{parentName:"li",href:"https://backstage.io/docs/features/software-templates/"},"Software Templates"),"\nand ",(0,r.kt)("a",{parentName:"li",href:"https://backstage.io/docs/features/techdocs/"},"TechDocs"),"\namongst other things.")),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"The create app command doesn't always work as expected, this is a collection of\nsome of the commonly encountered issues and solutions."),(0,r.kt)("h4",{id:"couldnt-find-any-versions-for-file-saver"},'Couldn\'t find any versions for "file-saver"'),(0,r.kt)("p",null,"You may encounter the following error message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Couldn\'t find any versions for "file-saver" that matches "eligrey-FileSaver.js-1.3.8.tar.gz-art-external"\n')),(0,r.kt)("p",null,"This is likely because you have a globally configured npm proxy, which breaks\nthe installation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"material-table")," dependency. This is a known issue and\nbeing worked on in ",(0,r.kt)("inlineCode",{parentName:"p"},"material-table"),", but for now you can work around it using\nthe following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NPM_CONFIG_REGISTRY=https://registry.npmjs.org npx @backstage/create-app\n")),(0,r.kt)("h4",{id:"cant-find-python-executable-python"},'Can\'t find Python executable "python"'),(0,r.kt)("p",null,"The install process may also fail if no Python installation is available. Python\nis commonly available in most systems already, but if it isn't you can head for\nexample ",(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"here")," to install it."),(0,r.kt)("h4",{id:"could-not-execute-command-yarn-install"},"Could not execute command yarn install"),(0,r.kt)("p",null,"Install yarn on your system with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install --global yarn")," or for more details\nrefer to the\n",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/getting-started/running-backstage-locally#prerequisites"},"prerequisites")),(0,r.kt)("h2",{id:"run-the-app"},"Run the app"),(0,r.kt)("p",null,"When the installation is complete you can open the app folder and start the app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-backstage-app\nyarn dev\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn dev")," command will run both the frontend and backend as separate\nprocesses (named ",(0,r.kt)("inlineCode",{parentName:"p"},"[0]")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"[1]"),") in the same window. When the command finishes\nrunning, it should open up a browser window displaying your app. If not, you can\nopen a browser and directly navigate to the frontend at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,r.kt)("p",null,"Now you're free to hack away on your own Backstage installation!"),(0,r.kt)("p",null,"As you get more experienced with the app, in future you can run just the\nfrontend with ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start")," in one window, and the backend with\n",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start-backend")," in a different window."))}d.isMDXComponent=!0},586587:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-app_output-aae53df8840c4eb4413b2e0d22248db5.png"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,l,s=a(e),p=1;p<arguments.length;p++){for(var c in i=Object(arguments[p]))n.call(i,c)&&(s[c]=i[c]);if(t){l=t(i);for(var u=0;u<l.length;u++)r.call(i,l[u])&&(s[l[u]]=i[l[u]])}}return s}},541535:(e,t,n)=>{var r=n(862525),a=60103,o=60106;var i=60109,l=60110,s=60112;var p=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),l=u("react.context"),s=u("react.forward_ref"),u("react.suspense"),p=u("react.memo"),c=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function m(){}function k(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var b=k.prototype=new m;b.constructor=k,r(b,y.prototype),b.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!O.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var p=Array(s),c=0;c<s;c++)p[c]=arguments[c+2];o.children=p}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:v.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case a:case o:s=!0}}if(s)return i=i(s=e),e=""===r?"."+P(s,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),S(i,t,n,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var p=0;p<e.length;p++){var c=r+P(l=e[p],p);s+=S(l,t,n,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),p=0;!(l=e.next()).done;)s+=S(l=l.value,t,n,c=r+P(l,p++),i);else if("object"===l)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function x(e,t,n){if(null==e)return e;var r=[],a=0;return S(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function _(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function E(){var e=T.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
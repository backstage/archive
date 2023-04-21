/*! For license information please see 24a11b9b.61d5e1f4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[64672],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},780421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});n(827378);var r=n(603905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"configuration",title:"Software Template Configuration",sidebar_label:"Configuration",description:"Configuration options for Backstage Software Templates"},s=void 0,c={unversionedId:"features/software-templates/configuration",id:"features/software-templates/configuration",title:"Software Template Configuration",description:"Configuration options for Backstage Software Templates",source:"@site/../docs/features/software-templates/configuration.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/configuration",permalink:"/v1.13.0/docs/features/software-templates/configuration",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Software Template Configuration",sidebar_label:"Configuration",description:"Configuration options for Backstage Software Templates"},sidebar:"docs",previous:{title:"Overview",permalink:"/v1.13.0/docs/features/software-templates/"},next:{title:"Adding your own Templates",permalink:"/v1.13.0/docs/features/software-templates/adding-templates"}},u={},p=[{value:"Publishing defaults",id:"publishing-defaults",level:2},{value:"Disabling Docker in Docker situation (Optional)",id:"disabling-docker-in-docker-situation-optional",level:2},{value:"Customizing the ScaffolderPage with Grouping and Filtering",id:"customizing-the-scaffolderpage-with-grouping-and-filtering",level:2}],f={toc:p};function d(e){var{components:t}=e,l=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,l),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Backstage software templates create source code, so your Backstage application\nneeds to be set up to allow repository creation."),(0,r.kt)("p",null,"This is done in your ",(0,r.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," by adding\n",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/integrations/"},"Backstage integrations")," for the\nappropriate source code repository for your organization."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Integrations may already be set up as part of your ",(0,r.kt)("inlineCode",{parentName:"p"},"app-config.yaml"),".")),(0,r.kt)("p",null,"The next step is to ",(0,r.kt)("a",{parentName:"p",href:"http://backstage.io/docs/features/software-templates/adding-templates"},"add templates"),"\nto your Backstage app."),(0,r.kt)("h2",{id:"publishing-defaults"},"Publishing defaults"),(0,r.kt)("p",null,"Software templates can define ",(0,r.kt)("em",{parentName:"p"},"publish")," actions, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"publish:github"),", to\ncreate new repositories or submit pull / merge requests to existing\nrepositories. You can configure the author and commit message through the\n",(0,r.kt)("inlineCode",{parentName:"p"},"scaffolder")," configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"app-config.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"scaffolder:\n  defaultAuthor:\n    name: M.C. Hammer # Defaults to `Scaffolder`\n    email: hammer@donthurtem.com # Defaults to `scaffolder@backstage.io`\n  defaultCommitMessage: \"U can't touch this\" # Defaults to 'Initial commit'\n")),(0,r.kt)("p",null,"To configure who can see the new repositories created from software templates,\nadd the ",(0,r.kt)("inlineCode",{parentName:"p"},"repoVisibility")," key within a software template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: publish\n  name: Publish\n  action: publish:github\n  input:\n    repoUrl: '{{ parameters.repoUrl }}'\n    repoVisibility: public # or 'internal' or 'private'\n")),(0,r.kt)("h2",{id:"disabling-docker-in-docker-situation-optional"},"Disabling Docker in Docker situation (Optional)"),(0,r.kt)("p",null,"Software templates use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch:template")," action by default, which requires no\nexternal dependencies and offers a\n",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/software-templates/builtin-actions#using-cookiecuttercompat-mode"},"Cookiecutter-compatible mode"),".\nThere is also a ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch:cookiecutter")," action, which uses\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cookiecutter/cookiecutter"},"Cookiecutter")," directly for\ntemplating. By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch:cookiecutter")," action will use the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/scripts/Cookiecutter.dockerfile"},"scaffolder-backend/Cookiecutter"),"\ndocker image."),(0,r.kt)("p",null,"If you are running Backstage from a Docker container and you want to avoid\ncalling a container inside a container, you can set up Cookiecutter in your own\nimage, this will use the local installation instead."),(0,r.kt)("p",null,"You can do so by including the following lines in the last step of your\n",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"RUN apt-get update && apt-get install -y python3 python3-pip\nRUN pip3 install cookiecutter\n")),(0,r.kt)("h2",{id:"customizing-the-scaffolderpage-with-grouping-and-filtering"},"Customizing the ScaffolderPage with Grouping and Filtering"),(0,r.kt)("p",null,"Once you have more than a few software templates you may want to customize your\n",(0,r.kt)("inlineCode",{parentName:"p"},"ScaffolderPage")," by grouping and surfacing certain templates together. You can\naccomplish this by creating ",(0,r.kt)("inlineCode",{parentName:"p"},"groups")," and passing them to your ",(0,r.kt)("inlineCode",{parentName:"p"},"ScaffolderPage"),"\nlike below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<ScaffolderPage\n  groups={[\n    {\n      title: \"Recommended\",\n      filter: entity =>\n        entity?.metadata?.tags?.includes('recommended') ?? false,\n    },\n  ]}\n/>\n")),(0,r.kt)("p",null,"This code will group all templates with the 'recommended' tag together at the\ntop of the page above any other templates not filtered by this group or others."),(0,r.kt)("p",null,"You can also further customize groups by passing in a ",(0,r.kt)("inlineCode",{parentName:"p"},"titleComponent")," instead\nof a ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," which will be a component to use as the header instead of just the\ndefault ",(0,r.kt)("inlineCode",{parentName:"p"},"ContentHeader")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," set as it's value.\n",(0,r.kt)("img",{alt:"Grouped Templates",src:n(610391).Z,width:"3570",height:"2034"})),(0,r.kt)("p",null,"There is also an option to hide some templates.\nYou can have several use cases for that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"it's still in an experimental phase, so you can combine it with feature flagging for example"),(0,r.kt)("li",{parentName:"ul"},"you don't want to make them accessible from template list, but only open it on some action with pre-filled data."),(0,r.kt)("li",{parentName:"ul"},"show different set of templates depends on target environment")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"<ScaffolderPage\n  templateFilter={entity =>\n    entity?.metadata?.tags?.includes('experimental') ?? false\n  }\n/>\n")))}d.isMDXComponent=!0},610391:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/grouped-templates-4be3346a6689c891dd384684ad8fd59e.png"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,l,s=o(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(s[u]=i[u]);if(t){l=t(i);for(var p=0;p<l.length;p++)r.call(i,l[p])&&(s[l[p]]=i[l[p]])}}return s}},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;var i=60109,l=60110,s=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),l=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function h(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=y.prototype;var k=b.prototype=new h;k.constructor=b,r(k,y.prototype),k.isPureReactComponent=!0;var w={current:null},v=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,r)&&!O.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return i=i(s=e),e=""===r?"."+P(s,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(N,"$&/")+"/"),S(i,t,n,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=r+P(l=e[c],c);s+=S(l,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=S(l=l.value,t,n,u=r+P(l,c++),i);else if("object"===l)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function _(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var D={current:null};function T(){var e=D.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
/*! For license information please see 5b10bb72.003885b0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[327419],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,g=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},336857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>s});n(827378);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"create-a-plugin",title:"Create a Backstage Plugin",description:"Documentation on How to Create a Backstage Plugin"},l=void 0,c={unversionedId:"plugins/create-a-plugin",id:"plugins/create-a-plugin",title:"Create a Backstage Plugin",description:"Documentation on How to Create a Backstage Plugin",source:"@site/../docs/plugins/create-a-plugin.md",sourceDirName:"plugins",slug:"/plugins/create-a-plugin",permalink:"/v1.12.0/docs/plugins/create-a-plugin",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/create-a-plugin.md",tags:[],version:"current",frontMatter:{id:"create-a-plugin",title:"Create a Backstage Plugin",description:"Documentation on How to Create a Backstage Plugin"},sidebar:"docs",previous:{title:"Existing plugins",permalink:"/v1.12.0/docs/plugins/existing-plugins"},next:{title:"Plugin Development",permalink:"/v1.12.0/docs/plugins/plugin-development"}},u={},s=[{value:"Create a Plugin",id:"create-a-plugin",level:2}],p={toc:s};function f(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)("wrapper",o({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Backstage Plugin adds functionality to Backstage."),(0,r.kt)("h2",o({},{id:"create-a-plugin"}),"Create a Plugin"),(0,r.kt)("p",null,"To create a new plugin, make sure you've run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn install")," and installed\ndependencies, then run the following on your command line (a shortcut to\ninvoking the\n",(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/local-dev/cli-commands#new"}),(0,r.kt)("inlineCode",{parentName:"a"},"backstage-cli new --select plugin")),")\nfrom the root of your project."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yarn new --select plugin\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(676285).Z,width:"454",height:"530"})),(0,r.kt)("p",null,"This will create a new Backstage Plugin based on the ID that was provided. It\nwill be built and added to the Backstage App automatically."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the Backstage App is already running (with ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn dev"),") you\nshould be able to see the default page for your new plugin directly by\nnavigating to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/my-plugin"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9403).Z,width:"1552",height:"989"})),(0,r.kt)("p",null,"You can also serve the plugin in isolation by running ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start")," in the plugin\ndirectory. Or by using the yarn workspace command, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yarn workspace @backstage/plugin-my-plugin start # Also supports --check\n")),(0,r.kt)("p",null,"This method of serving the plugin provides quicker iteration speed and a faster\nstartup and hot reloads. It is only meant for local development, and the setup\nfor it can be found inside the plugin's ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/")," directory."))}f.isMDXComponent=!0},676285:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-plugin_output-9d6c4192d058ed85c75109a4d907eae6.png"},9403:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/my-plugin_screenshot-f22dc7520c6896fbaeeff8f717227c1b.png"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,l,c=o(e),u=1;u<arguments.length;u++){for(var s in i=Object(arguments[u]))n.call(i,s)&&(c[s]=i[s]);if(t){l=t(i);for(var p=0;p<l.length;p++)r.call(i,l[p])&&(c[l[p]]=i[l[p]])}}return c}},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;var i=60109,l=60110,c=60112;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),l=p("react.context"),c=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),s=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}function h(){}function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=m.prototype;var v=b.prototype=new h;v.constructor=b,r(v,m.prototype),v.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!O.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var u=Array(c),s=0;s<c;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===r?"."+_(c,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),S(i,t,n,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=r+_(l=e[u],u);c+=S(l,t,n,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(l=e.next()).done;)c+=S(l=l.value,t,n,s=r+_(l,u++),i);else if("object"===l)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function x(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function N(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function D(){var e=E.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
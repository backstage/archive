/*! For license information please see 7c59564d.b4ec1d14.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[824611],{603905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(667294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=r,g=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},223195:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});t(827378);var a=t(603905);function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const i={id:"backend-plugin",title:"Backend plugins",description:"Creating and Developing Backend plugins"},l=void 0,s={unversionedId:"plugins/backend-plugin",id:"plugins/backend-plugin",title:"Backend plugins",description:"Creating and Developing Backend plugins",source:"@site/../docs/plugins/backend-plugin.md",sourceDirName:"plugins",slug:"/plugins/backend-plugin",permalink:"/v1.12.0/docs/plugins/backend-plugin",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/backend-plugin.md",tags:[],version:"current",frontMatter:{id:"backend-plugin",title:"Backend plugins",description:"Creating and Developing Backend plugins"},sidebar:"docs",previous:{title:"Proxying",permalink:"/v1.12.0/docs/plugins/proxying"},next:{title:"Call Existing API",permalink:"/v1.12.0/docs/plugins/call-existing-api"}},c={},u=[{value:"Creating a Backend Plugin",id:"creating-a-backend-plugin",level:2},{value:"Developing your Backend Plugin",id:"developing-your-backend-plugin",level:2},{value:"Making Use of a Database",id:"making-use-of-a-database",level:2},{value:"Making Use of the User&#39;s Identity",id:"making-use-of-the-users-identity",level:2}],p={toc:u};function d(e){var{components:n}=e,t=o(e,["components"]);return(0,a.kt)("wrapper",r({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page describes the process of creating and managing backend plugins in your\nBackstage repository."),(0,a.kt)("h2",r({},{id:"creating-a-backend-plugin"}),"Creating a Backend Plugin"),(0,a.kt)("p",null,"A new, bare-bones backend plugin package can be created by issuing the following\ncommand in your Backstage repository root:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-sh"}),"yarn new --select backend-plugin\n")),(0,a.kt)("p",null,"Please also see the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," flag for the ",(0,a.kt)("inlineCode",{parentName:"p"},"new")," command for some\nfurther options that are available, notably the ",(0,a.kt)("inlineCode",{parentName:"p"},"--scope")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-private"),"\nflags that control naming and publishing of the newly created package. Your repo\nroot ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," will probably also have some default values already set up\nfor these."),(0,a.kt)("p",null,"You will be asked to supply a name for the plugin. This is an identifier that\nwill be part of the NPM package name, so make it short and containing only\nlowercase characters separated by dashes, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"carmen"),", if it's a\npackage that adds an integration with a system named Carmen, for example. The\nfull NPM package name would then be something like\n",(0,a.kt)("inlineCode",{parentName:"p"},"@internal/plugin-carmen-backend"),", depending on the other flags passed to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"new")," command, and your settings for the ",(0,a.kt)("inlineCode",{parentName:"p"},"new")," command in\nyour root ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("p",null,"Creating the plugin will take a little while, so be patient. It will helpfully\nrun the initial installation and build commands, so that your package is ready\nto be hacked on! It will be located in a new folder in your ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," directory,\nin this example ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/carmen-backend"),"."),(0,a.kt)("p",null,"For simple development purposes, a backend plugin can actually be started in a\nstandalone mode. You can do a first-light test of your service:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-sh"}),"cd plugins/carmen-backend\nyarn start\n")),(0,a.kt)("p",null,"This will think for a bit, and then say ",(0,a.kt)("inlineCode",{parentName:"p"},"Listening on :7007"),". In a different\nterminal window, now run"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-sh"}),"curl localhost:7007/carmen/health\n")),(0,a.kt)("p",null,"This should return ",(0,a.kt)("inlineCode",{parentName:"p"},'{"status":"ok"}'),". Success! Press ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + c")," to stop it\nagain."),(0,a.kt)("h2",r({},{id:"developing-your-backend-plugin"}),"Developing your Backend Plugin"),(0,a.kt)("p",null,"A freshly created backend plugin does basically nothing, in terms of the overall\napp. It has a small set of basic dependencies and exposes an Express router in\n",(0,a.kt)("inlineCode",{parentName:"p"},"src/service/router.ts"),". This is where you will start adding routes and\nconnecting those to actual underlying functionality. But nothing in your\nBackstage application / backend exposes it."),(0,a.kt)("p",null,"To actually attach and run the plugin router, you will make some modifications\nto your backend."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"# From your Backstage root directory\nyarn add --cwd packages/backend @internal/plugin-carmen-backend@^0.1.0 # Change this to match the plugin's package.json\n")),(0,a.kt)("p",null,"Create a new file named ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/backend/src/plugins/carmen.ts"),", and add the\nfollowing to it"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"import { createRouter } from '@internal/plugin-carmen-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  // Here is where you will add all of the required initialization code that\n  // your backend plugin needs to be able to start!\n\n  // The env contains a lot of goodies, but our router currently only\n  // needs a logger\n  return await createRouter({\n    logger: env.logger,\n  });\n}\n")),(0,a.kt)("p",null,"And finally, wire this into the overall backend router. Edit\n",(0,a.kt)("inlineCode",{parentName:"p"},"packages/backend/src/index.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"import carmen from './plugins/carmen';\n// ...\nasync function main() {\n  // ...\n  const carmenEnv = useHotMemoize(module, () => createEnv('carmen'));\n  apiRouter.use('/carmen', await carmen(carmenEnv));\n")),(0,a.kt)("p",null,"After you start the backend (e.g. using ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn start-backend")," from the repo\nroot), you should be able to fetch data from it."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-sh"}),"# Note the extra /api here\ncurl localhost:7007/api/carmen/health\n")),(0,a.kt)("p",null,"This should return ",(0,a.kt)("inlineCode",{parentName:"p"},'{"status":"ok"}')," like before. Success!"),(0,a.kt)("h2",r({},{id:"making-use-of-a-database"}),"Making Use of a Database"),(0,a.kt)("p",null,"The Backstage backend comes with a builtin facility for SQL database access.\nMost plugins that have persistence needs will choose to make use of this\nfacility, so that Backstage operators can manage database needs uniformly."),(0,a.kt)("p",null,"As part of the environment object that is passed to your ",(0,a.kt)("inlineCode",{parentName:"p"},"createPlugin"),"\nfunction, there is a ",(0,a.kt)("inlineCode",{parentName:"p"},"database")," field. You can use that to get a\n",(0,a.kt)("a",r({parentName:"p"},{href:"http://knexjs.org/"}),"Knex")," connection object."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"// in packages/backend/src/plugins/carmen.ts\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const db: Knex<any, unknown[]> = await env.database.getClient();\n\n  // You will then pass this client into your actual plugin implementation\n  // code, maybe similar to the following:\n  const model = new CarmenDatabaseModel(db);\n  return await createRouter({\n    model: model,\n    logger: env.logger,\n  });\n}\n")),(0,a.kt)("p",null,"You may note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"getClient")," call has no parameters. This is because all\nplugin database needs are configured under the ",(0,a.kt)("inlineCode",{parentName:"p"},"backend.database")," config key of\nyour ",(0,a.kt)("inlineCode",{parentName:"p"},"app-config.yaml"),". The framework may even make sure behind the scenes that\nthe logical database is created automatically if it doesn't exist, based on\nrules that the Backstage operator decides on."),(0,a.kt)("p",null,"The framework does not handle database schema migrations for you, however. The\nbuiltin plugins in the main repo have chosen to use the Knex library to manage\nschema migrations as well, but you can do so in any manner that you see fit."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",r({parentName:"p"},{href:"http://knexjs.org/"}),"Knex library documentation")," for examples and\ndetails on how to write schema migrations and perform SQL queries against your\ndatabase.."),(0,a.kt)("h2",r({},{id:"making-use-of-the-users-identity"}),"Making Use of the User's Identity"),(0,a.kt)("p",null,"The Backstage backend comes with a facility for retrieving the identity of the\nlogged in user."),(0,a.kt)("p",null,"As part of the environment object that is passed to your ",(0,a.kt)("inlineCode",{parentName:"p"},"createPlugin"),"\nfunction, there is a ",(0,a.kt)("inlineCode",{parentName:"p"},"identity")," field. You can use that to get an identity\nfrom the request."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"// in packages/backend/src/plugins/carmen.ts\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  return await createRouter({\n    model: model,\n    logger: env.logger,\n    identity: env.identity,\n  });\n}\n")),(0,a.kt)("p",null,"The plugin can then extract the identity from the request."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"export async function createRouter(\n  options: RouterOptions,\n): Promise<express.Router> {\n  const router = Router();\n\n  router.post('/example', async (req, res) => {\n    const identity = await identity.getIdentity({ request: req });\n    ...\n  });\n")))}d.isMDXComponent=!0},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}}()?Object.assign:function(e,o){for(var i,l,s=r(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))t.call(i,u)&&(s[u]=i[u]);if(n){l=n(i);for(var p=0;p<l.length;p++)a.call(i,l[p])&&(s[l[p]]=i[l[p]])}}return s}},541535:(e,n,t)=>{var a=t(862525),r=60103,o=60106;var i=60109,l=60110,s=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;r=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),l=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||g}function k(){}function y(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||g}h.prototype.isReactComponent={},h.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,n,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=h.prototype;var b=y.prototype=new k;b.constructor=y,a(b,h.prototype),b.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,n,t){var a,o={},i=null,l=null;if(null!=n)for(a in void 0!==n.ref&&(l=n.ref),void 0!==n.key&&(i=""+n.key),n)w.call(n,a)&&!O.hasOwnProperty(a)&&(o[a]=n[a]);var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:r,type:e,key:i,ref:l,props:o,_owner:v.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function P(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function x(e,n,t,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case o:s=!0}}if(s)return i=i(s=e),e=""===a?"."+P(s,0):a,Array.isArray(i)?(t="",null!=e&&(t=e.replace(C,"$&/")+"/"),x(i,n,t,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),n.push(i)),1;if(s=0,a=""===a?".":a+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=a+P(l=e[c],c);s+=x(l,n,t,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=x(l=l.value,n,t,u=a+P(l,c++),i);else if("object"===l)throw n=""+e,Error(f(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return s}function E(e,n,t){if(null==e)return e;var a=[],r=0;return x(e,a,"","",(function(e){return n.call(t,e,r++)})),a}function S(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function _(){var e=T.current;if(null===e)throw Error(f(321));return e}},827378:(e,n,t)=>{t(541535)}}]);
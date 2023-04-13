/*! For license information please see 31d4cbf1.9a884e9f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[47657],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,h=s["".concat(p,".").concat(d)]||s[d]||f[d]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},587005:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>u});r(827378);var n=r(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"plugin-graphiql.graphqlendpoints",title:"GraphQLEndpoints",description:"API reference for GraphQLEndpoints"},l=void 0,p={unversionedId:"reference/plugin-graphiql.graphqlendpoints",id:"reference/plugin-graphiql.graphqlendpoints",title:"GraphQLEndpoints",description:"API reference for GraphQLEndpoints",source:"@site/../docs/reference/plugin-graphiql.graphqlendpoints.md",sourceDirName:"reference",slug:"/reference/plugin-graphiql.graphqlendpoints",permalink:"/v1.12.0/docs/reference/plugin-graphiql.graphqlendpoints",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-graphiql.graphqlendpoints.md",tags:[],version:"current",frontMatter:{id:"plugin-graphiql.graphqlendpoints",title:"GraphQLEndpoints",description:"API reference for GraphQLEndpoints"}},c={},u=[{value:"Methods",id:"methods",level:2}],s={toc:u};function f(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-graphiql"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-graphiql"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-graphiql.graphqlendpoints"}),(0,n.kt)("inlineCode",{parentName:"a"},"GraphQLEndpoints"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class GraphQLEndpoints implements GraphQLBrowseApi \n")),(0,n.kt)("b",null,"Implements:")," [GraphQLBrowseApi](/v1.12.0/docs/reference/plugin-graphiql.graphqlbrowseapi)",(0,n.kt)("h2",a({},{id:"methods"}),"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-graphiql.graphqlendpoints.create"}),"create(config)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-graphiql.graphqlendpoints.from"}),"from(endpoints)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-graphiql.graphqlendpoints.getendpoints"}),"getEndpoints()")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-graphiql.graphqlendpoints.github"}),"github(config)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"static")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("p",null,"Creates a GitHub GraphQL endpoint that uses the GithubAuth API to authenticate requests."),(0,n.kt)("p",null,"If a request requires more permissions than is granted by the existing session, the fetcher will automatically ask for the additional scopes that are required."))))))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,l,p=a(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))r.call(i,u)&&(p[u]=i[u]);if(t){l=t(i);for(var s=0;s<l.length;s++)n.call(i,l[s])&&(p[l[s]]=i[l[s]])}}return p}},541535:(e,t,r)=>{var n=r(862525),a=60103,o=60106;var i=60109,l=60110,p=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;a=s("react.element"),o=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),i=s("react.provider"),l=s("react.context"),p=s("react.forward_ref"),s("react.suspense"),c=s("react.memo"),u=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function m(){}function b(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var v=b.prototype=new m;v.constructor=b,n(v,y.prototype),v.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,o={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,n)&&!j.hasOwnProperty(n)&&(o[n]=t[n]);var p=arguments.length-2;if(1===p)o.children=r;else if(1<p){for(var c=Array(p),u=0;u<p;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===o[n]&&(o[n]=p[n]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:k.current}}function q(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,r,n,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var p=!1;if(null===e)p=!0;else switch(l){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case a:case o:p=!0}}if(p)return i=i(p=e),e=""===n?"."+P(p,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),E(i,t,r,"",(function(e){return e}))):null!=i&&(q(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||p&&p.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(p=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=n+P(l=e[c],c);p+=E(l,t,r,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)p+=E(l=l.value,t,r,u=n+P(l,c++),i);else if("object"===l)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return p}function _(e,t,r){if(null==e)return e;var n=[],a=0;return E(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function C(){var e=x.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
/*! For license information please see 6ee80634.21ccd902.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[674160],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return r?a.createElement(d,l(l({ref:t},s),{},{components:r})):a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},638558:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>s});r(827378);var a=r(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={id:"theme",title:"@backstage/theme",description:"API Reference for @backstage/theme"},i=void 0,c={unversionedId:"reference/theme",id:"reference/theme",title:"@backstage/theme",description:"API Reference for @backstage/theme",source:"@site/../docs/reference/theme.md",sourceDirName:"reference",slug:"/reference/theme",permalink:"/v1.12.0/docs/reference/theme",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/theme.md",tags:[],version:"current",frontMatter:{id:"theme",title:"@backstage/theme",description:"API Reference for @backstage/theme"}},p={},s=[{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}],u={toc:s};function f(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",n({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",n({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,a.kt)("a",n({parentName:"p"},{href:"/v1.12.0/docs/reference/theme"}),(0,a.kt)("inlineCode",{parentName:"a"},"@backstage/theme"))),(0,a.kt)("p",null,(0,a.kt)("a",n({parentName:"p"},{href:"https://mui.com"}),"material-ui")," theme for use with Backstage"),(0,a.kt)("h2",n({},{id:"functions"}),"Functions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Function"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/theme.createtheme"}),"createTheme(options)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Creates a Backstage MUI theme using a palette. The theme is created with the common Backstage options and component styles.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/theme.createthemeoptions"}),"createThemeOptions(options)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"A helper for creating theme options.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/theme.createthemeoverrides"}),"createThemeOverrides(theme)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"A helper for creating theme overrides.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/theme.genpagetheme"}),"genPageTheme(props)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Utility to not have to write colors and shapes twice.")))),(0,a.kt)("h2",n({},{id:"interfaces"}),"Interfaces"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Interface"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/theme.backstagetheme"}),"BackstageTheme")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"A Backstage theme.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/theme.backstagethemeoptions"}),"BackstageThemeOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Backstage theme options.")))),(0,a.kt)("h2",n({},{id:"variables"}),"Variables"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Variable"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/theme.colorvariants"}),"colorVariants")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The color range variants that are used in e.g. colorful bursts.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/theme.darktheme"}),"darkTheme")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The default Backstage dark theme.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/theme.lighttheme"}),"lightTheme")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The default Backstage light theme.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/theme.pagetheme"}),"pageTheme")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"All of the builtin page themes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/theme.shapes"}),"shapes")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The default predefined burst shapes.")))),(0,a.kt)("h2",n({},{id:"type-aliases"}),"Type Aliases"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type Alias"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/theme.backstagepalette"}),"BackstagePalette")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The full Backstage palette.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/theme.backstagepaletteadditions"}),"BackstagePaletteAdditions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Backstage specific additions to the material-ui palette.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/theme.backstagepaletteoptions"}),"BackstagePaletteOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The full Backstage palette options.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/theme.pagetheme"}),"PageTheme")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The theme definitions for a given layout page.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/theme.pagethemeselector"}),"PageThemeSelector")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Selector for what page theme to use.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/theme.simplethemeoptions"}),"SimpleThemeOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"A simpler configuration for creating a new theme that just tweaks some parts of the backstage one.")))))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(n){return!1}}()?Object.assign:function(e,o){for(var l,i,c=n(e),p=1;p<arguments.length;p++){for(var s in l=Object(arguments[p]))r.call(l,s)&&(c[s]=l[s]);if(t){i=t(l);for(var u=0;u<i.length;u++)a.call(l,i[u])&&(c[i[u]]=l[i[u]])}}return c}},541535:(e,t,r)=>{var a=r(862525),n=60103,o=60106;var l=60109,i=60110,c=60112;var p=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;n=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),l=u("react.provider"),i=u("react.context"),c=u("react.forward_ref"),u("react.suspense"),p=u("react.memo"),s=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function k(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}function g(){}function y(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=k.prototype;var b=y.prototype=new g;b.constructor=y,a(b,k.prototype),b.isPureReactComponent=!0;var v={current:null},N=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var a,o={},l=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)N.call(t,a)&&!O.hasOwnProperty(a)&&(o[a]=t[a]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var p=Array(c),s=0;s<c;s++)p[s]=arguments[s+2];o.children=p}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===o[a]&&(o[a]=c[a]);return{$$typeof:n,type:e,key:l,ref:i,props:o,_owner:v.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,a,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case o:c=!0}}if(c)return l=l(c=e),e=""===a?"."+T(c,0):a,Array.isArray(l)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),S(l,t,r,"",(function(e){return e}))):null!=l&&(w(l)&&(l=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||c&&c.key===l.key?"":(""+l.key).replace(P,"$&/")+"/")+e)),t.push(l)),1;if(c=0,a=""===a?".":a+":",Array.isArray(e))for(var p=0;p<e.length;p++){var s=a+T(i=e[p],p);c+=S(i,t,r,s,l)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),p=0;!(i=e.next()).done;)c+=S(i=i.value,t,r,s=a+T(i,p++),l);else if("object"===i)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function _(e,t,r){if(null==e)return e;var a=[],n=0;return S(e,a,"","",(function(e){return t.call(r,e,n++)})),a}function A(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function x(){var e=E.current;if(null===e)throw Error(m(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
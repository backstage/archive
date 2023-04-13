/*! For license information please see e6186116.a60ed8ad.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[804142],{603905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=p(t),d=o,m=l["".concat(c,".").concat(d)]||l[d]||f[d]||i;return t?n.createElement(m,s(s({ref:r},u),{},{components:t})):n.createElement(m,s({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[l]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},157991:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"plugin-permission-node.createconditionexports",title:"createConditionExports",description:"API reference for createConditionExports"},a=void 0,c={unversionedId:"reference/plugin-permission-node.createconditionexports",id:"reference/plugin-permission-node.createconditionexports",title:"createConditionExports",description:"API reference for createConditionExports",source:"@site/../docs/reference/plugin-permission-node.createconditionexports.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node.createconditionexports",permalink:"/v1.12.0/docs/reference/plugin-permission-node.createconditionexports",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-node.createconditionexports.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-node.createconditionexports",title:"createConditionExports",description:"API reference for createConditionExports"}},p={},u=[{value:"Remarks",id:"remarks",level:2}],l={toc:u};function f(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",o({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-permission-node"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-permission-node"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-permission-node.createconditionexports"}),(0,n.kt)("inlineCode",{parentName:"a"},"createConditionExports"))),(0,n.kt)("p",null,"Creates the recommended condition-related exports for a given plugin based on the built-in ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-permission-node.permissionrule"}),"PermissionRule"),"s it supports."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),'createConditionExports: <TResourceType extends string, TResource, TRules extends Record<string, PermissionRule<TResource, any, TResourceType, import("@backstage/plugin-permission-common").PermissionRuleParams>>>(options: {\n    pluginId: string;\n    resourceType: TResourceType;\n    rules: TRules;\n}) => {\n    conditions: Conditions<TRules>;\n    createConditionalDecision: (permission: ResourcePermission<TResourceType>, conditions: PermissionCriteria<PermissionCondition<TResourceType, import("@backstage/plugin-permission-common").PermissionRuleParams>>) => ConditionalPolicyDecision;\n}\n')),(0,n.kt)("h2",o({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"The function returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"conditions")," object containing a ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-permission-common.permissioncondition"}),"PermissionCondition")," factory for each of the supplied ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-permission-node.permissionrule"}),"PermissionRule"),"s, along with a ",(0,n.kt)("inlineCode",{parentName:"p"},"createConditionalDecision")," function which builds the wrapper object needed to enclose conditions when authoring ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-permission-node.permissionpolicy"}),"PermissionPolicy")," implementations."),(0,n.kt)("p",null,"Plugin authors should generally call this method with all the built-in ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-permission-node.permissionrule"}),"PermissionRule"),"s the plugin supports, and export the resulting ",(0,n.kt)("inlineCode",{parentName:"p"},"conditions")," object and ",(0,n.kt)("inlineCode",{parentName:"p"},"createConditionalDecision")," function so that they can be used by ",(0,n.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-permission-node.permissionpolicy"}),"PermissionPolicy")," authors."))}f.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var s,a,c=o(e),p=1;p<arguments.length;p++){for(var u in s=Object(arguments[p]))t.call(s,u)&&(c[u]=s[u]);if(r){a=r(s);for(var l=0;l<a.length;l++)n.call(s,a[l])&&(c[a[l]]=s[a[l]])}}return c}},541535:(e,r,t)=>{var n=t(862525),o=60103,i=60106;var s=60109,a=60110,c=60112;var p=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),i=l("react.portal"),l("react.fragment"),l("react.strict_mode"),l("react.profiler"),s=l("react.provider"),a=l("react.context"),c=l("react.forward_ref"),l("react.suspense"),p=l("react.memo"),u=l("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||m}function h(){}function b(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=g.prototype;var v=b.prototype=new h;v.constructor=b,n(v,g.prototype),v.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,i={},s=null,a=null;if(null!=r)for(n in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(s=""+r.key),r)O.call(r,n)&&!j.hasOwnProperty(n)&&(i[n]=r[n]);var c=arguments.length-2;if(1===c)i.children=t;else if(1<c){for(var p=Array(c),u=0;u<c;u++)p[u]=arguments[u+2];i.children=p}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===i[n]&&(i[n]=c[n]);return{$$typeof:o,type:e,key:s,ref:a,props:i,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var x=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function T(e,r,t,n,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return s=s(c=e),e=""===n?"."+C(c,0):n,Array.isArray(s)?(t="",null!=e&&(t=e.replace(x,"$&/")+"/"),T(s,r,t,"",(function(e){return e}))):null!=s&&(P(s)&&(s=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,t+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(x,"$&/")+"/")+e)),r.push(s)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var u=n+C(a=e[p],p);c+=T(a,r,t,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),p=0;!(a=e.next()).done;)c+=T(a=a.value,r,t,u=n+C(a,p++),s);else if("object"===a)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return c}function R(e,r,t){if(null==e)return e;var n=[],o=0;return T(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var _={current:null};function N(){var e=_.current;if(null===e)throw Error(d(321));return e}},827378:(e,r,t)=>{t(541535)}}]);
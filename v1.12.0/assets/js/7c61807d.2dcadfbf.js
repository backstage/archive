/*! For license information please see 7c61807d.2dcadfbf.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[922619],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,g=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},750194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});n(827378);var o=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"locations",sidebar_label:"Locations",title:"Google Cloud Storage Locations",description:"Setting up an integration with Google Cloud Storage"},l=void 0,c={unversionedId:"integrations/google-cloud-storage/locations",id:"integrations/google-cloud-storage/locations",title:"Google Cloud Storage Locations",description:"Setting up an integration with Google Cloud Storage",source:"@site/../docs/integrations/google-cloud-storage/locations.md",sourceDirName:"integrations/google-cloud-storage",slug:"/integrations/google-cloud-storage/locations",permalink:"/v1.12.0/docs/integrations/google-cloud-storage/locations",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/google-cloud-storage/locations.md",tags:[],version:"current",frontMatter:{id:"locations",sidebar_label:"Locations",title:"Google Cloud Storage Locations",description:"Setting up an integration with Google Cloud Storage"},sidebar:"docs",previous:{title:"Locations",permalink:"/v1.12.0/docs/integrations/gitea/locations"},next:{title:"Org Data",permalink:"/v1.12.0/docs/integrations/ldap/org"}},s={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Explicit credentials",id:"explicit-credentials",level:3},{value:"Automatic discovery of Google credentials",id:"automatic-discovery-of-google-credentials",level:3},{value:"Usage",id:"usage",level:2}],p={toc:u};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,o.kt)("wrapper",r({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Backstage catalog can import entities from a yaml file stored in a GCS\n(Google Cloud Storage) bucket. To enable the ingestion of said entities the\n",(0,o.kt)("inlineCode",{parentName:"p"},"GoogleGcs")," integration must be enabled first."),(0,o.kt)("h2",r({},{id:"configuration"}),"Configuration"),(0,o.kt)("p",null,"To configure the integration add the appropriate credentials to the Backstage\nbackend. There are two main ways to do this: by explicitly setting a\n",(0,o.kt)("inlineCode",{parentName:"p"},"clientEmail")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"privateKey")," or by letting the Google Storage SDK discover\nthe credentials automatically."),(0,o.kt)("h3",r({},{id:"explicit-credentials"}),"Explicit credentials"),(0,o.kt)("p",null,"Explicit credentials can be set in the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-yaml"}),"integrations:\n  googleGcs:\n    clientEmail: ${GCS_CLIENT_EMAIL}\n    privateKey: ${GCS_PRIVATE_KEY}\n")),(0,o.kt)("p",null,"Then make sure the environment variables ",(0,o.kt)("inlineCode",{parentName:"p"},"GCS_CLIENT_EMAIL")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"GCS_PRIVATE_KEY")," are set when you run Backstage."),(0,o.kt)("h3",r({},{id:"automatic-discovery-of-google-credentials"}),"Automatic discovery of Google credentials"),(0,o.kt)("p",null,"Since this integration uses the Google Storage SDK, you can also choose to not\nprovide any explicit credentials and let the SDK discover them automatically."),(0,o.kt)("p",null,"Please note that for this method to work you must add an empty ",(0,o.kt)("inlineCode",{parentName:"p"},"googleGcs")," object to the ",(0,o.kt)("inlineCode",{parentName:"p"},"integrations")," section in ",(0,o.kt)("inlineCode",{parentName:"p"},"app-config.yaml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-yaml"}),"integrations:\n  googleGcs: {}\n")),(0,o.kt)("p",null,"One of these discovery methods is to provide an environment variable called\n",(0,o.kt)("inlineCode",{parentName:"p"},"GOOGLE_APPLICATION_CREDENTIALS")," and set it to the file path of your JSON\nservice account key."),(0,o.kt)("p",null,"For more details and methods to provide credentials to the Google Storage SDK\nyou can check ",(0,o.kt)("a",r({parentName:"p"},{href:"https://cloud.google.com/docs/authentication/production#auth-cloud-implicit-nodejs"}),"this documentation page"),"."),(0,o.kt)("h2",r({},{id:"usage"}),"Usage"),(0,o.kt)("p",null,"To use this integration to import entities from a GCS bucket go to the Google\nconsole and browse the file you would like to import. Then copy the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Authenticated URL")," and paste it into the text box in the ",(0,o.kt)("inlineCode",{parentName:"p"},"register component"),"\nform. This URL should look like\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://storage.cloud.google.com/<bucket>/<path>/catalog-info.yaml"),"."))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(r){return!1}}()?Object.assign:function(e,a){for(var i,l,c=r(e),s=1;s<arguments.length;s++){for(var u in i=Object(arguments[s]))n.call(i,u)&&(c[u]=i[u]);if(t){l=t(i);for(var p=0;p<l.length;p++)o.call(i,l[p])&&(c[l[p]]=i[l[p]])}}return c}},541535:(e,t,n)=>{var o=n(862525),r=60103,a=60106;var i=60109,l=60110,c=60112;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;r=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),l=p("react.context"),c=p("react.forward_ref"),p("react.suspense"),s=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}function h(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||g}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=m.prototype;var b=v.prototype=new h;b.constructor=v,o(b,m.prototype),b.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var o,a={},i=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,o)&&!j.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var s=Array(c),u=0;u<c;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:r,type:e,key:i,ref:l,props:a,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case a:c=!0}}if(c)return i=i(c=e),e=""===o?"."+_(c,0):o,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),E(i,t,n,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(c=0,o=""===o?".":o+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=o+_(l=e[s],s);c+=E(l,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(l=e.next()).done;)c+=E(l=l.value,t,n,u=o+_(l,s++),i);else if("object"===l)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function P(e,t,n){if(null==e)return e;var o=[],r=0;return E(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function N(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function G(){var e=x.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
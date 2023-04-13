/*! For license information please see 377da21a.7806ae78.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[374572],{603905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>m});var n=r(667294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=c(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,l(l({ref:e},p),{},{components:r})):n.createElement(m,l({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},560896:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});r(827378);var n=r(603905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const l={id:"test-utils",title:"@backstage/test-utils",description:"API Reference for @backstage/test-utils"},i=void 0,s={unversionedId:"reference/test-utils",id:"reference/test-utils",title:"@backstage/test-utils",description:"API Reference for @backstage/test-utils",source:"@site/../docs/reference/test-utils.md",sourceDirName:"reference",slug:"/reference/test-utils",permalink:"/v1.12.0/docs/reference/test-utils",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/test-utils.md",tags:[],version:"current",frontMatter:{id:"test-utils",title:"@backstage/test-utils",description:"API Reference for @backstage/test-utils"}},c={},p=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}],u={toc:p};function d(t){var{components:e}=t,r=o(t,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/v1.12.0/docs/reference/test-utils"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/test-utils"))),(0,n.kt)("p",null,"Utilities to test Backstage plugins and apps."),(0,n.kt)("h2",a({},{id:"classes"}),"Classes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Class"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.mockanalyticsapi"}),"MockAnalyticsApi")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Mock implementation of ",(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/core-plugin-api.analyticsapi"}),"AnalyticsApi")," with helpers to ensure that events are sent correctly. Use getEvents in tests to verify captured events.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.mockconfigapi"}),"MockConfigApi")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"MockConfigApi is a thin wrapper around ",(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/config.configreader"}),"ConfigReader")," that can be used to mock configuration using a plain object.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.mockerrorapi"}),"MockErrorApi")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Mock implementation of the ",(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/core-plugin-api.errorapi"}),"ErrorApi")," to be used in tests. Includes withForError and getErrors methods for error testing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.mockfetchapi"}),"MockFetchApi")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A test helper implementation of ",(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/core-plugin-api.fetchapi"}),"FetchApi"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.mockpermissionapi"}),"MockPermissionApi")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Mock implementation of ",(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-permission-react.permissionapi"}),"PermissionApi"),". Supply a requestHandler function to override the mock result returned for a given request.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.mockstorageapi"}),"MockStorageApi")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Mock implementation of the ",(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/core-plugin-api.storageapi"}),"StorageApi")," to be used in tests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.testapiregistry"}),"TestApiRegistry")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The ",(0,n.kt)("code",null,"TestApiRegistry")," is an ",(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/core-plugin-api.apiholder"}),"ApiHolder")," implementation that is particularly well suited for development and test environments such as unit tests, storybooks, and isolated plugin development setups.")))),(0,n.kt)("h2",a({},{id:"functions"}),"Functions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Function"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.createtestappwrapper"}),"createTestAppWrapper(options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Creates a Wrapper component that wraps a component inside a Backstage test app, providing a mocked theme and app context, along with mocked APIs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.mockbreakpoint"}),"mockBreakpoint(options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("p",null,"This is a mocking method suggested in the Jest docs, as it is not implemented in JSDOM yet. It can be used to mock values for the MUI ",(0,n.kt)("code",null,"useMediaQuery")," hook if it is used in a tested component."),(0,n.kt)("p",null,"For issues checkout the documentation: ",(0,n.kt)("a",a({parentName:"td"},{href:"https://jestjs.io/docs/manual-mocks%5C#mocking-methods-which-are-not-implemented-in-jsdom"}),"https://jestjs.io/docs/manual-mocks\\#mocking-methods-which-are-not-implemented-in-jsdom")),(0,n.kt)("p",null,"If there are any updates from MUI React on testing ",(0,n.kt)("code",null,"useMediaQuery")," this mock should be replaced ",(0,n.kt)("a",a({parentName:"td"},{href:"https://material-ui.com/components/use-media-query/%5C#testing"}),"https://material-ui.com/components/use-media-query/\\#testing")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.renderintestapp"}),"renderInTestApp(Component, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("p",null,"Renders a component inside a Backstage test app, providing a mocked theme and app context, along with mocked APIs."),(0,n.kt)("p",null,"The render executes async effects similar to ",(0,n.kt)("code",null,"renderWithEffects"),". To avoid this behavior, use a regular ",(0,n.kt)("code",null,"render()")," + ",(0,n.kt)("code",null,"wrapInTestApp()")," instead."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.renderwitheffects"}),"renderWithEffects(nodes, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Simplifies rendering of async components in by taking care of the wrapping inside act")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.setuprequestmockhandlers"}),"setupRequestMockHandlers(worker)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Sets up handlers for request mocking")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.withlogcollector"}),"withLogCollector(callback)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Asynchronous log collector with that collects all categories")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.withlogcollector_1"}),"withLogCollector(callback)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Synchronous log collector with that collects all categories")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.withlogcollector_2"}),"withLogCollector(logsToCollect, callback)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Asynchronous log collector with that only collects selected categories")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.withlogcollector_3"}),"withLogCollector(logsToCollect, callback)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Synchronous log collector with that only collects selected categories")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.wrapintestapp"}),"wrapInTestApp(Component, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Wraps a component inside a Backstage test app, providing a mocked theme and app context, along with mocked APIs.")))),(0,n.kt)("h2",a({},{id:"interfaces"}),"Interfaces"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Interface"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.mockfetchapioptions"}),"MockFetchApiOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The options given when constructing a ",(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.mockfetchapi"}),"MockFetchApi"),".")))),(0,n.kt)("h2",a({},{id:"variables"}),"Variables"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Variable"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.testapiprovider"}),"TestApiProvider")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("p",null,"The ",(0,n.kt)("code",null,"TestApiProvider")," is a Utility API context provider that is particularly well suited for development and test environments such as unit tests, storybooks, and isolated plugin development setups."),(0,n.kt)("p",null,"It lets you provide any number of API implementations, without necessarily having to fully implement each of the APIs."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.textcontentmatcher"}),"textContentMatcher")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Returns a ",(0,n.kt)("code",null,"@testing-library/react")," valid MatcherFunction for supplied text")))),(0,n.kt)("h2",a({},{id:"type-aliases"}),"Type Aliases"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type Alias"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.asynclogcollector"}),"AsyncLogCollector")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"AsyncLogCollector type used in ",(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.withlogcollector"}),"withLogCollector()")," callback function.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.collectedlogs"}),"CollectedLogs")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Map of severity level and corresponding log lines.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.errorwithcontext"}),"ErrorWithContext")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"ErrorWithContext contains error and ErrorApiErrorContext")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.logcollector"}),"LogCollector")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Union type used in ",(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.withlogcollector_2"}),"withLogCollector()")," callback function.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.logfuncs"}),"LogFuncs")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Severity levels of ",(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.collectedlogs"}),"CollectedLogs"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.mockerrorapioptions"}),"MockErrorApiOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Constructor arguments for ",(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.mockerrorapi"}),"MockErrorApi"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.mockstoragebucket"}),"MockStorageBucket")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Type for map holding data in ",(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.mockstorageapi"}),"MockStorageApi"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.synclogcollector"}),"SyncLogCollector")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"SyncLogCollector type used in ",(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.withlogcollector_1"}),"withLogCollector()")," callback function.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.testapiproviderprops"}),"TestApiProviderProps")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Properties for the ",(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.testapiprovider"}),"TestApiProvider")," component.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/v1.12.0/docs/reference/test-utils.testappoptions"}),"TestAppOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Options to customize the behavior of the test app wrapper.")))))}d.isMDXComponent=!0},862525:t=>{var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(t,o){for(var l,i,s=a(t),c=1;c<arguments.length;c++){for(var p in l=Object(arguments[c]))r.call(l,p)&&(s[p]=l[p]);if(e){i=e(l);for(var u=0;u<i.length;u++)n.call(l,i[u])&&(s[i[u]]=l[i[u]])}}return s}},541535:(t,e,r)=>{var n=r(862525),a=60103,o=60106;var l=60109,i=60110,s=60112;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),l=u("react.provider"),i=u("react.context"),s=u("react.forward_ref"),u("react.suspense"),c=u("react.memo"),p=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k={};function h(t,e,r){this.props=t,this.context=e,this.refs=k,this.updater=r||m}function g(){}function y(t,e,r){this.props=t,this.context=e,this.refs=k,this.updater=r||m}h.prototype.isReactComponent={},h.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error(f(85));this.updater.enqueueSetState(this,t,e,"setState")},h.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},g.prototype=h.prototype;var N=y.prototype=new g;N.constructor=y,n(N,h.prototype),N.isPureReactComponent=!0;var v={current:null},b=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function O(t,e,r){var n,o={},l=null,i=null;if(null!=e)for(n in void 0!==e.ref&&(i=e.ref),void 0!==e.key&&(l=""+e.key),e)b.call(e,n)&&!w.hasOwnProperty(n)&&(o[n]=e[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+2];o.children=c}if(t&&t.defaultProps)for(n in s=t.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:a,type:t,key:l,ref:i,props:o,_owner:v.current}}function j(t){return"object"==typeof t&&null!==t&&t.$$typeof===a}var A=/\/+/g;function C(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function P(t,e,r,n,l){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var s=!1;if(null===t)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case a:case o:s=!0}}if(s)return l=l(s=t),t=""===n?"."+C(s,0):n,Array.isArray(l)?(r="",null!=t&&(r=t.replace(A,"$&/")+"/"),P(l,e,r,"",(function(t){return t}))):null!=l&&(j(l)&&(l=function(t,e){return{$$typeof:a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(l,r+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(A,"$&/")+"/")+t)),e.push(l)),1;if(s=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var p=n+C(i=t[c],c);s+=P(i,e,r,p,l)}else if(p=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=d&&t[d]||t["@@iterator"])?t:null}(t),"function"==typeof p)for(t=p.call(t),c=0;!(i=t.next()).done;)s+=P(i=i.value,e,r,p=n+C(i,c++),l);else if("object"===i)throw e=""+t,Error(f(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e));return s}function S(t,e,r){if(null==t)return t;var n=[],a=0;return P(t,n,"","",(function(t){return e.call(r,t,a++)})),n}function M(t){if(-1===t._status){var e=t._result;e=e(),t._status=0,t._result=e,e.then((function(e){0===t._status&&(e=e.default,t._status=1,t._result=e)}),(function(e){0===t._status&&(t._status=2,t._result=e)}))}if(1===t._status)return t._result;throw t._result}var T={current:null};function E(){var t=T.current;if(null===t)throw Error(f(321));return t}},827378:(t,e,r)=>{r(541535)}}]);
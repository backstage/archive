/*! For license information please see c739296b.fb482586.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[274536],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),f=n,k=d["".concat(c,".").concat(f)]||d[f]||u[f]||l;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},787836:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});a(827378);var r=a(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const o={id:"plugin-scaffolder-backend",title:"@backstage/plugin-scaffolder-backend",description:"API Reference for @backstage/plugin-scaffolder-backend"},i=void 0,c={unversionedId:"reference/plugin-scaffolder-backend",id:"reference/plugin-scaffolder-backend",title:"@backstage/plugin-scaffolder-backend",description:"API Reference for @backstage/plugin-scaffolder-backend",source:"@site/../docs/reference/plugin-scaffolder-backend.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend",permalink:"/v1.12.0/docs/reference/plugin-scaffolder-backend",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-backend.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend",title:"@backstage/plugin-scaffolder-backend",description:"API Reference for @backstage/plugin-scaffolder-backend"}},s={},p=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}],d={toc:p};function u(e){var{components:t}=e,a=l(e,["components"]);return(0,r.kt)("wrapper",n({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",n({parentName:"p"},{href:"/v1.12.0/docs/reference/"}),"Home")," ",">"," ",(0,r.kt)("a",n({parentName:"p"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend"}),(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-scaffolder-backend"))),(0,r.kt)("p",null,"The Backstage backend plugin that helps you create new things"),(0,r.kt)("h2",n({},{id:"classes"}),"Classes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Class"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.databasetaskstore"}),"DatabaseTaskStore")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"DatabaseTaskStore")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.scaffolderentitiesprocessor"}),"ScaffolderEntitiesProcessor")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.taskmanager"}),"TaskManager")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"TaskManager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.taskworker"}),"TaskWorker")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"TaskWorker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.templateactionregistry"}),"TemplateActionRegistry")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Registry of all registered template actions.")))),(0,r.kt)("h2",n({},{id:"functions"}),"Functions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Function"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createcatalogregisteraction"}),"createCatalogRegisterAction(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Registers entities from a catalog descriptor file in the workspace into the software catalog.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createcatalogwriteaction"}),"createCatalogWriteAction()")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Writes a catalog descriptor file containing the provided entity to a path in the workspace.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createdebuglogaction"}),"createDebugLogAction()")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Writes a message into the log or lists all files in the workspace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createfetchcatalogentityaction"}),"createFetchCatalogEntityAction(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Returns entity or entities from the catalog by entity reference(s).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createfetchplainaction"}),"createFetchPlainAction(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Downloads content and places it in the workspace, or optionally in a subdirectory specified by the 'targetPath' input option.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createfetchtemplateaction"}),"createFetchTemplateAction(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Downloads a skeleton, templates variables into file and directory names and content. Then places the result in the workspace, or optionally in a subdirectory specified by the 'targetPath' input option.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.creategithubactionsdispatchaction"}),"createGithubActionsDispatchAction(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Creates a new action that dispatches a GitHub Action workflow for a given branch or tag.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.creategithubissueslabelaction"}),"createGithubIssuesLabelAction(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Adds labels to a pull request or issue on GitHub")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.creategithubrepocreateaction"}),"createGithubRepoCreateAction(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Creates a new action that initializes a git repository")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.creategithubrepopushaction"}),"createGithubRepoPushAction(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Creates a new action that initializes a git repository of the content in the workspace and publishes it to GitHub.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.creategithubwebhookaction"}),"createGithubWebhookAction(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Creates new action that creates a webhook for a repository on GitHub.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createpublishazureaction"}),"createPublishAzureAction(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Creates a new action that initializes a git repository of the content in the workspace and publishes it to Azure.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createpublishbitbucketaction"}),"createPublishBitbucketAction(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Creates a new action that initializes a git repository of the content in the workspace and publishes it to Bitbucket.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createpublishbitbucketcloudaction"}),"createPublishBitbucketCloudAction(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Creates a new action that initializes a git repository of the content in the workspace and publishes it to Bitbucket Cloud.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createpublishbitbucketserveraction"}),"createPublishBitbucketServerAction(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Creates a new action that initializes a git repository of the content in the workspace and publishes it to Bitbucket Server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createpublishgerritaction"}),"createPublishGerritAction(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Creates a new action that initializes a git repository of the content in the workspace and publishes it to a Gerrit instance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createpublishgerritreviewaction"}),"createPublishGerritReviewAction(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Creates a new action that creates a Gerrit review")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createpublishgithubaction"}),"createPublishGithubAction(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Creates a new action that initializes a git repository of the content in the workspace and publishes it to GitHub.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createpublishgitlabaction"}),"createPublishGitlabAction(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Creates a new action that initializes a git repository of the content in the workspace and publishes it to GitLab.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createrouter"}),"createRouter(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"A method to create a router for the scaffolder backend plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.fetchcontents"}),"fetchContents(options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"A helper function that reads the contents of a directory from the given URL. Can be used in your own actions, and also used behind fetch:template and fetch:plain")))),(0,r.kt)("h2",n({},{id:"interfaces"}),"Interfaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Interface"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createbuiltinactionsoptions"}),"CreateBuiltInActionsOptions")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"The options passed to ",(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createbuiltinactions"}),"createBuiltinActions"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.creategithubpullrequestactionoptions"}),"CreateGithubPullRequestActionOptions")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"The options passed to ",(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createpublishgithubpullrequestaction"}),"createPublishGithubPullRequestAction")," method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.currentclaimedtask"}),"CurrentClaimedTask")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Stores the state of the current claimed task passed to the TaskContext")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.routeroptions"}),"RouterOptions")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"RouterOptions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.taskbroker"}),"TaskBroker")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"TaskBroker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.taskcontext"}),"TaskContext")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Task")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.taskstore"}),"TaskStore")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"TaskStore")))),(0,r.kt)("h2",n({},{id:"variables"}),"Variables"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Variable"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createbuiltinactions"}),"createBuiltinActions")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"A function to generate create a list of default actions that the scaffolder provides. Is called internally in the default setup, but can be used when adding your own actions or overriding the default ones")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createfilesystemdeleteaction"}),"createFilesystemDeleteAction")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Creates new action that enables deletion of files and directories in the workspace.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createfilesystemrenameaction"}),"createFilesystemRenameAction")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Creates a new action that allows renames of files and directories in the workspace.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createpublishgithubpullrequestaction"}),"createPublishGithubPullRequestAction")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Creates a Github Pull Request action.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createpublishgitlabmergerequestaction"}),"createPublishGitlabMergeRequestAction")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Create a new action that creates a gitlab merge request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createtemplateaction"}),"createTemplateAction")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.executeshellcommand"}),"executeShellCommand")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Run a command in a sub-process, normally a shell command.")))),(0,r.kt)("h2",n({},{id:"type-aliases"}),"Type Aliases"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Type Alias"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.actioncontext"}),"ActionContext")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.creategithubpullrequestclientfactoryinput"}),"CreateGithubPullRequestClientFactoryInput")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"The options passed to the client factory function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.createworkeroptions"}),"CreateWorkerOptions")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"CreateWorkerOptions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.databasetaskstoreoptions"}),"DatabaseTaskStoreOptions")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"DatabaseTaskStore")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.octokitwithpullrequestpluginclient"}),"OctokitWithPullRequestPluginClient")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.runcommandoptions"}),"RunCommandOptions")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.serializedtask"}),"SerializedTask")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"SerializedTask")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.serializedtaskevent"}),"SerializedTaskEvent")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"SerializedTaskEvent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.taskbrokerdispatchoptions"}),"TaskBrokerDispatchOptions")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"The options passed to ",(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.taskbroker.dispatch"}),"TaskBroker.dispatch()")," Currently a spec and optional secrets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.taskbrokerdispatchresult"}),"TaskBrokerDispatchResult")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"The result of ",(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.taskbroker.dispatch"}),"TaskBroker.dispatch()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.taskcompletionstate"}),"TaskCompletionState")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"The state of a completed task.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.taskeventtype"}),"TaskEventType")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"TaskEventType")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.tasksecrets"}),"TaskSecrets")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.taskstatus"}),"TaskStatus")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"The status of each step of the Task")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.taskstorecreatetaskoptions"}),"TaskStoreCreateTaskOptions")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"The options passed to ",(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.taskstore.createtask"}),"TaskStore.createTask()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.taskstorecreatetaskresult"}),"TaskStoreCreateTaskResult")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"The response from ",(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.taskstore.createtask"}),"TaskStore.createTask()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.taskstoreemitoptions"}),"TaskStoreEmitOptions")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"TaskStoreEmitOptions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.taskstorelisteventsoptions"}),"TaskStoreListEventsOptions")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"TaskStoreListEventsOptions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.taskstoreshutdowntaskoptions"}),"TaskStoreShutDownTaskOptions")),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"TaskStoreShutDownTaskOptions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.templateaction"}),"TemplateAction")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.templatefilter"}),"TemplateFilter")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/v1.12.0/docs/reference/plugin-scaffolder-backend.templateglobal"}),"TemplateGlobal")),(0,r.kt)("td",n({parentName:"tr"},{align:null}))))))}u.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(e,l){for(var o,i,c=n(e),s=1;s<arguments.length;s++){for(var p in o=Object(arguments[s]))a.call(o,p)&&(c[p]=o[p]);if(t){i=t(o);for(var d=0;d<i.length;d++)r.call(o,i[d])&&(c[i[d]]=o[i[d]])}}return c}},541535:(e,t,a)=>{var r=a(862525),n=60103,l=60106;var o=60109,i=60110,c=60112;var s=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;n=d("react.element"),l=d("react.portal"),d("react.fragment"),d("react.strict_mode"),d("react.profiler"),o=d("react.provider"),i=d("react.context"),c=d("react.forward_ref"),d("react.suspense"),s=d("react.memo"),p=d("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function b(e,t,a){this.props=e,this.context=t,this.refs=m,this.updater=a||k}function g(){}function h(e,t,a){this.props=e,this.context=t,this.refs=m,this.updater=a||k}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var N=h.prototype=new g;N.constructor=h,r(N,b.prototype),N.isPureReactComponent=!0;var y={current:null},v=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,a){var r,l={},o=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)v.call(t,r)&&!w.hasOwnProperty(r)&&(l[r]=t[r]);var c=arguments.length-2;if(1===c)l.children=a;else if(1<c){for(var s=Array(c),p=0;p<c;p++)s[p]=arguments[p+2];l.children=s}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===l[r]&&(l[r]=c[r]);return{$$typeof:n,type:e,key:o,ref:i,props:l,_owner:y.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,a,r,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case l:c=!0}}if(c)return o=o(c=e),e=""===r?"."+A(c,0):r,Array.isArray(o)?(a="",null!=e&&(a=e.replace(C,"$&/")+"/"),S(o,t,a,"",(function(e){return e}))):null!=o&&(O(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(C,"$&/")+"/")+e)),t.push(o)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var p=r+A(i=e[s],s);c+=S(i,t,a,p,o)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),s=0;!(i=e.next()).done;)c+=S(i=i.value,t,a,p=r+A(i,s++),o);else if("object"===i)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function j(e,t,a){if(null==e)return e;var r=[],n=0;return S(e,r,"","",(function(e){return t.call(a,e,n++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function E(){var e=R.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,a)=>{a(541535)}}]);
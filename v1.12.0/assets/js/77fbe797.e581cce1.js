/*! For license information please see 77fbe797.e581cce1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[325124],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=h(n),u=o,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var h=2;h<i;h++)r[h]=n[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},648852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});n(827378);var a=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const r={id:"life-of-an-entity",title:"The Life of an Entity",sidebar_label:"The Life of an Entity",description:"The life cycle of entities, from being introduced into the catalog, through processing, to being removed again"},s=void 0,l={unversionedId:"features/software-catalog/life-of-an-entity",id:"features/software-catalog/life-of-an-entity",title:"The Life of an Entity",description:"The life cycle of entities, from being introduced into the catalog, through processing, to being removed again",source:"@site/../docs/features/software-catalog/life-of-an-entity.md",sourceDirName:"features/software-catalog",slug:"/features/software-catalog/life-of-an-entity",permalink:"/v1.12.0/docs/features/software-catalog/life-of-an-entity",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-catalog/life-of-an-entity.md",tags:[],version:"current",frontMatter:{id:"life-of-an-entity",title:"The Life of an Entity",sidebar_label:"The Life of an Entity",description:"The life cycle of entities, from being introduced into the catalog, through processing, to being removed again"},sidebar:"docs",previous:{title:"Overview",permalink:"/v1.12.0/docs/features/software-catalog/"},next:{title:"Catalog Configuration",permalink:"/v1.12.0/docs/features/software-catalog/configuration"}},h={},c=[{value:"Key Concepts",id:"key-concepts",level:2},{value:"Ingestion",id:"ingestion",level:2},{value:"Processing",id:"processing",level:2},{value:"Stitching",id:"stitching",level:2},{value:"Errors",id:"errors",level:2},{value:"Orphaning",id:"orphaning",level:2},{value:"Implicit Deletion",id:"implicit-deletion",level:2},{value:"Explicit Deletion",id:"explicit-deletion",level:2}],p={toc:c};function d(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)("wrapper",o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document gives a high level overview of the catalog backend, and the\ntechnical processes involved in making entities flow through it. It is mainly\naimed at developers who want to understand the internals while installing or\nextending the catalog. However, it can be informative for other personas too."),(0,a.kt)("h2",o({},{id:"key-concepts"}),"Key Concepts"),(0,a.kt)("p",null,"The catalog forms a hub of sorts, where entities are ingested from various\nauthoritative sources and held in a database, subject to automated processing,\nand then presented through an API for quick and easy access by Backstage and\nothers. The most common source is ",(0,a.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/features/software-catalog/descriptor-format"}),"YAML files")," on a\nstandard format, living in version control systems near the source code of\nsystems that they describe. Those files are registered with the catalog and\nmaintained by the respective owners. The catalog makes sure to keep itself up to\ndate with changes to those files."),(0,a.kt)("p",null,"The main extension points where developers can customize the catalog are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Entity providers"),", that feed initial raw entity data into the catalog,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Policies"),", that establish baseline rules about the shape of entities,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Processors"),", that validate, analyze, and mutate the raw entity data into its\nfinal form.")),(0,a.kt)("p",null,"The high level processes involved are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Ingestion"),", where entity providers fetch raw entity data from external\nsources and seed it into the database,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Processing"),", where the policies and processors continually treat the ingested\ndata and may emit both other raw entities (that are also subject to\nprocessing), errors, relations to other entities, etc.,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Stitching"),", where all of the data emitted by various processors are assembled\ntogether into the final output entity.")),(0,a.kt)("p",null,"An entity is not visible to the outside world (through the catalog API), until\nit has passed through the last process and landed among the final entities."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"General overview",src:n(803513).Z,width:"442",height:"621"})),(0,a.kt)("p",null,"The details of these processes are described below."),(0,a.kt)("h2",o({},{id:"ingestion"}),"Ingestion"),(0,a.kt)("p",null,"Each catalog deployment has a number of ",(0,a.kt)("em",{parentName:"p"},"entity providers")," installed. They are\nresponsible for fetching data from external authoritative sources in any way\nthat they see fit, translating those into entity objects, and notifying the\ndatabase when those entities are added or removed. These are the ",(0,a.kt)("em",{parentName:"p"},"unprocessed\nentities")," that will be subject to later processing (see below), and they form\nthe very basis of existence for entities. If there were no entity providers, no\nentities would ever enter the system."),(0,a.kt)("p",null,"The database always keeps track of the set of entities that belong to each\nprovider; no two providers can try to output the same entity. And when a\nprovider signals the removal of an entity, then that leads to an ",(0,a.kt)("em",{parentName:"p"},"eager\ndeletion"),": the entity and all auxiliary data that it has led to in the database\nis immediately purged."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ingestion overview",src:n(467235).Z,width:"451",height:"321"})),(0,a.kt)("p",null,"There are two providers installed by default: the one that deals with user\nregistered locations (e.g. URLs to YAML files), and the one that deals with\nstatic locations in the app-config. You can add more third party providers by\npassing them to the catalog builder in your backend initialization code, and you\ncan easily write your own."),(0,a.kt)("p",null,"An entity provider is a class that implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityProvider")," interface. It\nhas three main parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The identity: Each provider instance has a unique, stable identifier that the\ndatabase can use to keep track of the originator of each unprocessed entity."),(0,a.kt)("li",{parentName:"ul"},"The connection: During backend startup, each provider is attached to the\ncatalog runtime."),(0,a.kt)("li",{parentName:"ul"},"The stream of events: During its lifetime, the provider can issue change\nevents to the runtime at any point in time, to modify its set of unprocessed\nentities.")),(0,a.kt)("p",null,"It is entirely up to the provider to choose how and when it produces these\nchange events. For example, the app-config provider only fires off an update at\nstartup and then lies dormant. The location database provider does an initial\nupdate at startup, and then small delta updates every time a location database\nchange is detected. The LDAP provider is driven externally by a timer loop that\noccasionally triggers a full update. Some future provider may be entirely event\ndriven, feeding off an event bus or web hook. There is no magic coordination\namong providers; if they need to arrange synchronization or locking among\nthemselves for example to avoid duplicate work across multiple catalog service\nmachines, they need to handle that out-of-band."),(0,a.kt)("p",null,"The entities that are emitted get some coarse validation applied to them, to\nensure that they at least adhere to the most basic schema rules about how an\nentity should be shaped. For example, they need to have a ",(0,a.kt)("inlineCode",{parentName:"p"},"kind"),", a\n",(0,a.kt)("inlineCode",{parentName:"p"},"metadata.name"),", and optionally a ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata.namespace"),", among others. Apart from\nthat, the ingestion stage considers its work done, and stores the unprocessed\nentities to be picked up at a later time by the processing system. This means\nthat the more precise validation rules that you put in place on entities are\n",(0,a.kt)("em",{parentName:"p"},"not")," yet applied at this stage."),(0,a.kt)("h2",o({},{id:"processing"}),"Processing"),(0,a.kt)("p",null,'Every unprocessed entity comes with a timestamp, which tells at what time that\nthe processing loop should next try to process it. When the entity first\nappears, this timestamp is set to "now" - asking for it to be picked up as soon\nas possible.'),(0,a.kt)("p",null,"Each catalog deployment has a number of ",(0,a.kt)("em",{parentName:"p"},"processors")," installed. They are\nresponsible for receiving unprocessed entities that the catalog decided are due\nfor processing, and then running that data through a number of processing\nstages, mutating the entity and emitting auxiliary data about it. When all of\nthat is done, the catalog takes all of that information and stores it as the\nprocessed entity, and errors and relations to other entities separately. Then,\nthe catalog checks to see what entities are touched by that output, and triggers\nthe final assembly of those (see Stitching below)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Processing overview",src:n(18834).Z,width:"442",height:"451"})),(0,a.kt)("p",null,"Entities are always processed one by one, but all of your catalog service hosts\ncollaborate in doing so to distribute the load. Note how each processor can\ncontribute to one or more of the fixed steps in the processing pipeline. First\nall of the processors' contributions to one step are run in the order that the\nprocessors were registered, then all of their contributions to the next step in\nthe same order, and so on."),(0,a.kt)("p",null,"Each step has the opportunity to optionally modify the entity, and to optionally\nemit other information. For example, the processor might look at information in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"spec")," field of the entity, and emit relations that correspond to those\ndeclarations. If the processor emits an entity, then that entity gets stored\nverbatim with a timestamp saying that it, too, should be processed as soon as\npossible. If errors are emitted, then that signals that something is wrong with\nthe entity and that it should not replace whatever previously error-free version\nwe had among the final entities. If relations are emitted, then they are put in\na dedicated relations table to be picked up by the stitching process below."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Optional low level detail note: When entities are emitted, the catalog keeps\ntrack of the edges between the emitting entity and the ones emitted. This\nhappens behind the scenes, hidden from the outside, and is used to form a\ngraph. This is ",(0,a.kt)("em",{parentName:"p"},"not")," the same thing as relations! The purpose of these edges,\nis to be able to detect when an entity becomes orphaned (see below), and to be\nable to perform eager deletions throughout the graph when a root is explicitly\nunregistered and nothing else is keeping lower nodes alive. We will talk more\nabout orphaning and deletions later on in this article.")),(0,a.kt)("p",null,"When the final step has completed, and no errors were encountered, the processed\nentity and all of the relations are finally persisted in the database. Then the\ncatalog considers this entity, and all of the entities it had relations to,\nsubject for stitching."),(0,a.kt)("p",null,"It is worth noting here that the processing does not lead to deletion or\nunregistration of entities; it can only call new entities into existence or\nupdate entities that it has previously called into existence. More about that\nlater."),(0,a.kt)("h2",o({},{id:"stitching"}),"Stitching"),(0,a.kt)("p",null,"Stitching finalizes the entity, by gathering all of the output from the previous\nsteps and merging them into the final object which is what is visible from the\ncatalog API. As the final entity itself gets updated, the stitcher makes sure\nthat the search table gets refreshed accordingly as well."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: The search table mentioned here is not related to the core Search\nfeature of Backstage. It's rather the table that backs the ability to filter\ncatalog API query results.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Stitching overview",src:n(85794).Z,width:"512",height:"542"})),(0,a.kt)("p",null,"The diagram shows how the stitcher reads from several sources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The processed entity, as returned from the processing step"),(0,a.kt)("li",{parentName:"ul"},"The errors, if any, that were emitted by the processing step"),(0,a.kt)("li",{parentName:"ul"},"All relations that were emitted by the processing step, as well as any\nrelations emitted by ",(0,a.kt)("em",{parentName:"li"},"other")," entity processing steps that happen to point at\nthe current entity")),(0,a.kt)("p",null,"The last part is noteworthy: This is how the stitcher is able to collect all of\nthe relation edges, both incoming and outgoing, no matter who produced them."),(0,a.kt)("p",null,"The stitching is currently a fixed process, that cannot be modified or extended.\nThis means that any modifications you want to make on the final result, has to\nhappen during ingestion or processing."),(0,a.kt)("h2",o({},{id:"errors"}),"Errors"),(0,a.kt)("p",null,"Errors during the ingestion and processing of entities can happen in a variety\nof ways, and they may happen at a far later point in time than when they were\nregistered. For example, a registered file may get deleted in the remote system,\nor the user may accidentally change the file contents in such a way that they\ncannot be parsed successfully, etc."),(0,a.kt)("p",null,"There are two main ways that these errors are surfaced."),(0,a.kt)("p",null,"First, the catalog backend will produce detailed logs that should contain\nsufficient information for a reader to find the causes for errors. Since these\nlogs are typically not easily found by end users, this can mainly be a useful\ntool for Backstage operators who want to debug problems either with statically\nregistered entities that are under their control, or to help end users find\nproblems."),(0,a.kt)("p",null,"Second, for most classes of errors, the entity itself will contain a status\nfield that describes the problem. The contents of this field is shown at the top\nof your entity page in Backstage, if you have placed the corresponding error\ncallout component (",(0,a.kt)("inlineCode",{parentName:"p"},"EntityProcessingErrorsPanel"),") there."),(0,a.kt)("p",null,"We are still working to improve the surfacing and observability around\nprocessing loop errors."),(0,a.kt)("h2",o({},{id:"orphaning"}),"Orphaning"),(0,a.kt)("p",null,"As mentioned earlier, entities internally form a graph. The edges go from\nprocessed parent entities, to child entities emitted while processing the\nparent."),(0,a.kt)("p",null,"The processing loop runs continuously, so these edges are reconsidered over\ntime. If processing a parent entity no longer emits a given child entity, then\nthat former edge is severed. If that child has no other edges pointing at it\neither, it becomes ",(0,a.kt)("em",{parentName:"p"},"orphaned"),". The end result is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The stitching process injects a ",(0,a.kt)("inlineCode",{parentName:"li"},"backstage.io/orphan: 'true'")," annotation on\nthe child entity."),(0,a.kt)("li",{parentName:"ul"},"The child entity is ",(0,a.kt)("em",{parentName:"li"},"not"),' removed from the catalog, but stays around until\nexplicitly deleted via the catalog API, or "reclaimed" by the original parent\nor another parent starting to reference it.'),(0,a.kt)("li",{parentName:"ul"},"The catalog page in Backstage for the child entity detects the new annotation\nand informs users about the orphan status.")),(0,a.kt)("p",null,"Orphaning can occur in several different scenarios."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'If a catalog-info YAML file is moved from one place to another in the version\ncontrol system without updating the registration in the catalog, it will\neffectively become orphaned "by" that registered location'),(0,a.kt)("li",{parentName:"ul"},"If the user edits a corresponding parent catalog-info YAML file removing the\nentity's entry - for example in the case of a ",(0,a.kt)("inlineCode",{parentName:"li"},"Location")," parent entity,\norphaning can happen if editing or removing the ",(0,a.kt)("inlineCode",{parentName:"li"},"target"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"targets")," lines\npointing to the file containing the child entity."),(0,a.kt)("li",{parentName:"ul"},"Another common cause is large batch processors such as the ones that crawl\nthrough remote systems looking for entities, no longer finding something that\nit used to find before. Maybe the data was moved, or deleted, in the remote\nsystem. So for example when a person leaves the company an LDAP org discovery\nprocessor might leave an orphaned ",(0,a.kt)("inlineCode",{parentName:"li"},"User")," entity behind. Note that this only\napplies to processors - ingestion that happens using entity providers work\ndifferently, described below.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that removing a file, or accidentally corrupting a file so that it cannot\nbe read successfully, does ",(0,a.kt)("em",{parentName:"p"},"not")," lead to orphaning. Hard errors, including the\ninability to find or read a distinct remote, are marked as such on the entity\nto inform the owner that something is wrong. But processing and other\nbehaviors continue as usual.")),(0,a.kt)("p",null,"The reason that the orphaning mechanism exists instead of having an eager\ndeletion triggered, is safety. Scenarios like these can happen purely by\naccident, due to the asynchronous nature of the system and the fallible nature\nof humans. In particular when external systems start consuming and relying on\nthe catalog, there could be substantial consequences to suddenly dropping\nentities without explicit owner consent. The catalog therefore takes the stance\nthat entities that often were added by direct user action should also be deleted\nonly by direct user action."),(0,a.kt)("p",null,'It is possible to use the catalog API to build automated "reaper" systems that\nfinally delete entities that are orphaned. This is however not something that\'s\nprovided out of the box.'),(0,a.kt)("h2",o({},{id:"implicit-deletion"}),"Implicit Deletion"),(0,a.kt)("p",null,"Entity providers - not processors - are subject to ",(0,a.kt)("em",{parentName:"p"},"eager")," deletion of entities,\nwhich may trigger the implicit deletion of more than just the entity you thought\nyou were deleting. This concept is explained here."),(0,a.kt)("p",null,'Recall that all entity providers manage a private "bucket" of entities, as\ndescribed in the ',(0,a.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/features/software-catalog/external-integrations"}),"External integrations")," article. They\ncan perform some operations on those entities, including additions, updates, and\ndeletions. Entity additions/updates are subject to the regular processing loops,\nwhich means that bucket entities may end up forming roots of an entire graph of\nentities that are emitted by those processors as they recursively work they way\nthrough the bucket contents and its descendants."),(0,a.kt)("p",null,"When a provider issues a deletion of an entity in its bucket, that entity as\nwell as ",(0,a.kt)("em",{parentName:"p"},"the entire tree of entities processed out of it"),", if any, are\nconsidered for immediate deletion. Note \"considered\" - they are deleted if and\nonly if they would otherwise have become orphaned (no other parent entities\nemitting them). Since the graph of entities is not strictly a tree, multiple\nroots may actually end up indirectly referencing a node farther down in the\ngraph. If that's the case, that node won't go away until all such roots go away."),(0,a.kt)("p",null,"URLs to yaml files that you register using either the Create button or add to\nyour app-config, are both handled by entity providers. That means that this\nimplicit deletion mechanism comes into play in some everyday circumstances.\nLet's illustrate."),(0,a.kt)("p",null,"Imagine that you have a monorepo, with a single ",(0,a.kt)("inlineCode",{parentName:"p"},"Location")," entity in a\ncatalog-info file at the root, and that entity points to three other\ncatalog-info files in the repo with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Component")," entity in each one."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-text"}),"/\n  feature_one/\n    catalog-info.yaml     <- kind: Component\n  feature_two/\n    catalog-info.yaml     <- kind: Component\n  feature_three/\n    catalog-info.yaml     <- kind: Component\n  catalog-info.yaml       <- kind: Location\n")),(0,a.kt)("p",null,"If you register the root ",(0,a.kt)("inlineCode",{parentName:"p"},"Location")," entity, the actual effect is that ",(0,a.kt)("em",{parentName:"p"},"five"),"\nentities appear in the catalog. First, one that is named ",(0,a.kt)("inlineCode",{parentName:"p"},"generated-"),'-something,\nwhich corresponds to the registered URL itself. That\'s the one that the provider\nhas put in its "bucket". Then, as processing loops chug along, the ',(0,a.kt)("inlineCode",{parentName:"p"},"Location"),"\nentity you pointed to appears as a child of that, and then the three ",(0,a.kt)("inlineCode",{parentName:"p"},"Component"),"\nentities appear in turn as children of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Location"),"."),(0,a.kt)("p",null,"As an end user of the Backstage interface, you may now want to delete one of the\nthree ",(0,a.kt)("inlineCode",{parentName:"p"},"Component")," entities. You do that by visiting the three-dots menu in the\ntop right of an entity view. The popup dialog that appears will inform you that\nactually this entity belongs to a certain root, and that you may want to remove\nthat root instead (which corresponds to unregistering the originally registered\nURL). If you choose to do so, ",(0,a.kt)("em",{parentName:"p"},"all")," of the aforementioned five entities will\nactually be deleted in the same operation."),(0,a.kt)("p",null,"If you did not want to perform this aggressive pruning, you might have instead\nchosen to remove one of the ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," rows of your ",(0,a.kt)("inlineCode",{parentName:"p"},"Location")," catalog-info file,\nand then deleted the catalog-info file that contained the ",(0,a.kt)("inlineCode",{parentName:"p"},"Component")," you wanted\nto get rid of. Now the catalog would be left with an orphaned component, and you\nwould instead be able to use the explicit deletion (see below) to delete that\nsingle component."),(0,a.kt)("h2",o({},{id:"explicit-deletion"}),"Explicit Deletion"),(0,a.kt)("p",null,"The catalog and its REST API also permits direct deletion of individual\nentities. This makes sense to do on orphaned entities; entities that aren't\nbeing actively kept up to date by any parent entities. The popup interface under\nthe three-dots menu option of entity views does offer this option, and the\norphaned status can be seen in an info box at the top of the entity's overview\npage."),(0,a.kt)("p",null,"However, if you were to try to do an explicit depletion on an entity that's\nbeing kept actively updated by a parent entity, it would just reappear again\nshortly thereafter when the processing loops reconsider the parent entity that's\nstill in there."))}d.isMDXComponent=!0},467235:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/life-of-an-entity_ingestion-e27dc42161836b86e63ddcde19b5bf2b.svg"},803513:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/life-of-an-entity_overview-ebdcd872ed5859928583a6660b983493.svg"},18834:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/life-of-an-entity_processing-6b46732e0191cabd850e7266190b7a8b.svg"},85794:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/life-of-an-entity_stitching-ca7c0d806d6265433e5066a26f9533f6.svg"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var r,s,l=o(e),h=1;h<arguments.length;h++){for(var c in r=Object(arguments[h]))n.call(r,c)&&(l[c]=r[c]);if(t){s=t(r);for(var p=0;p<s.length;p++)a.call(r,s[p])&&(l[s[p]]=r[s[p]])}}return l}},541535:(e,t,n)=>{var a=n(862525),o=60103,i=60106;var r=60109,s=60110,l=60112;var h=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),i=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),r=p("react.provider"),s=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),h=p("react.memo"),c=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(u(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=g.prototype;var v=b.prototype=new y;v.constructor=b,a(v,g.prototype),v.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,n){var a,i={},r=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(r=""+t.key),t)w.call(t,a)&&!N.hasOwnProperty(a)&&(i[a]=t[a]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var h=Array(l),c=0;c<l;c++)h[c]=arguments[c+2];i.children=h}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===i[a]&&(i[a]=l[a]);return{$$typeof:o,type:e,key:r,ref:s,props:i,_owner:k.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var j=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,a,r){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return r=r(l=e),e=""===a?"."+x(l,0):a,Array.isArray(r)?(n="",null!=e&&(n=e.replace(j,"$&/")+"/"),C(r,t,n,"",(function(e){return e}))):null!=r&&(O(r)&&(r=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(r,n+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(j,"$&/")+"/")+e)),t.push(r)),1;if(l=0,a=""===a?".":a+":",Array.isArray(e))for(var h=0;h<e.length;h++){var c=a+x(s=e[h],h);l+=C(s,t,n,c,r)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),h=0;!(s=e.next()).done;)l+=C(s=s.value,t,n,c=a+x(s,h++),r);else if("object"===s)throw t=""+e,Error(u(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function P(e,t,n){if(null==e)return e;var a=[],o=0;return C(e,a,"","",(function(e){return t.call(n,e,o++)})),a}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function S(){var e=I.current;if(null===e)throw Error(u(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
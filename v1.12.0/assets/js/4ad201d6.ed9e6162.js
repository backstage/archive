/*! For license information please see 4ad201d6.ed9e6162.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[733674],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(l,".").concat(g)]||u[g]||h[g]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},871851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});n(827378);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"integrating-search-into-plugins",title:"Integrating Search into a plugin",description:"How to integrate Search into a Backstage plugin"},s=void 0,l={unversionedId:"plugins/integrating-search-into-plugins",id:"plugins/integrating-search-into-plugins",title:"Integrating Search into a plugin",description:"How to integrate Search into a Backstage plugin",source:"@site/../docs/plugins/integrating-search-into-plugins.md",sourceDirName:"plugins",slug:"/plugins/integrating-search-into-plugins",permalink:"/v1.12.0/docs/plugins/integrating-search-into-plugins",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/integrating-search-into-plugins.md",tags:[],version:"current",frontMatter:{id:"integrating-search-into-plugins",title:"Integrating Search into a plugin",description:"How to integrate Search into a Backstage plugin"},sidebar:"docs",previous:{title:"Integrate into the Software Catalog",permalink:"/v1.12.0/docs/plugins/integrating-plugin-into-software-catalog"},next:{title:"Composability System",permalink:"/v1.12.0/docs/plugins/composability"}},c={},p=[{value:"Providing data to the search platform",id:"providing-data-to-the-search-platform",level:2},{value:"Create a collator",id:"create-a-collator",level:3},{value:"1. Install collator interface dependencies",id:"1-install-collator-interface-dependencies",level:4},{value:"2. Define your document type",id:"2-define-your-document-type",level:4},{value:"3. Use Backstage App configuration",id:"3-use-backstage-app-configuration",level:4},{value:"4. Implement your collator",id:"4-implement-your-collator",level:4},{value:"5. Test your collator",id:"5-test-your-collator",level:4},{value:"6. Make your plugins collator discoverable for others",id:"6-make-your-plugins-collator-discoverable-for-others",level:4},{value:"Building a search experience into your plugin",id:"building-a-search-experience-into-your-plugin",level:2},{value:"Search Experience Concepts",id:"search-experience-concepts",level:3},{value:"Search Experience Tutorials",id:"search-experience-tutorials",level:3},{value:"Improved &quot;404&quot; page experience",id:"improved-404-page-experience",level:4},{value:"Simple search page",id:"simple-search-page",level:4},{value:"Custom search control surfaces",id:"custom-search-control-surfaces",level:4},{value:"Custom search results",id:"custom-search-results",level:4}],u={toc:p};function h(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Backstage Search Platform was designed to give plugin developers the APIs\nand interfaces needed to offer search experiences within their plugins, while\nabstracting away (and instead empowering application integrators to choose) the\nspecific underlying search technologies."),(0,a.kt)("p",null,"On this page, you'll find concepts and tutorials for leveraging the Backstage\nSearch Platform in your plugin."),(0,a.kt)("h2",r({},{id:"providing-data-to-the-search-platform"}),"Providing data to the search platform"),(0,a.kt)("h3",r({},{id:"create-a-collator"}),"Create a collator"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Knowing what a ",(0,a.kt)("a",r({parentName:"p"},{href:"/v1.12.0/docs/features/search/concepts#collators"}),"collator")," is will help you as you build it out.")),(0,a.kt)("p",null,"Imagine you have a plugin that is responsible for storing FAQ snippets in a database. You want other engineers to be able to easily find your questions and answers. So that means you want them to be indexed by the search platform. Lets say the FAQ snippets can be viewed at a URL like ",(0,a.kt)("inlineCode",{parentName:"p"},"backstage.example.biz/faq-snippets"),"."),(0,a.kt)("p",null,"The search platform provides an interface (",(0,a.kt)("inlineCode",{parentName:"p"},"DocumentCollatorFactory")," from package ",(0,a.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-search-common"),') that allows you to do exactly that. It works by registering each of your entries as a "document" that later represents one search result each.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can always look at a working example, e.g. ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/master/plugins/stack-overflow-backend/src/search/StackOverflowQuestionsCollatorFactory.ts"}),"StackOverflowQuestionsCollatorFactory"),", if you are unsure or want to follow best practices.")),(0,a.kt)("h4",r({},{id:"1-install-collator-interface-dependencies"}),"1. Install collator interface dependencies"),(0,a.kt)("p",null,"We will need the interface ",(0,a.kt)("inlineCode",{parentName:"p"},"DocumentCollatorFactory")," from package ",(0,a.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-search-common"),", so let's add it to your plugins dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-sh"}),"# navigate to the plugin directory\n# (for this tutorial our plugin lives in the backstage repo, if your plugin lives in a separate repo you need to clone that first)\ncd plugins/faq-snippets\n\n# Create a new branch using Git command-line\ngit checkout -b tutorials/new-faq-snippets-collator\n\n# Install the package containing the interface\nyarn add @backstage/plugin-search-common\n")),(0,a.kt)("h4",r({},{id:"2-define-your-document-type"}),"2. Define your document type"),(0,a.kt)("p",null,"Before we can start generating documents from our FAQ entries, we first have to define a document type containing all necessary information we need to later display our entry as search result. The package ",(0,a.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-search-common")," we installed earlier contains a type ",(0,a.kt)("inlineCode",{parentName:"p"},"IndexableDocument")," that we can extend."),(0,a.kt)("p",null,"Create a new file ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/faq-snippets/src/search/collators/FaqSnippetDocument.ts")," and paste the following below:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"import { IndexableDocument } from '@backstage/plugin-search-common';\n\nexport interface FaqSnippetDocument extends IndexableDocument {\n  answered_by: string;\n}\n")),(0,a.kt)("h4",r({},{id:"3-use-backstage-app-configuration"}),"3. Use Backstage App configuration"),(0,a.kt)("p",null,"Your new collator could benefit from using configuration directly from the Backstage ",(0,a.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," file which is located on the project's root folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-yaml"}),"faq:\n  baseUrl: https://backstage.example.biz/faq-snippets\n")),(0,a.kt)("h4",r({},{id:"4-implement-your-collator"}),"4. Implement your collator"),(0,a.kt)("p",null,"Imagine your FAQs can be retrieved at the URL ",(0,a.kt)("inlineCode",{parentName:"p"},"https://backstage.example.biz/faq-snippets")," with following JSON response format:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "items": [\n    {\n      "id": 42,\n      "question": "What is The Answer to the Ultimate Question of Life, the Universe, and Everything?",\n      "answer": "Forty-two",\n      "user": "Deep Thought"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Below we provide an example implementation of how the FAQ collator factory could look like using our new document type, placed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/faq-snippets/src/search/collators/FaqCollatorFactory.ts")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"import fetch from 'cross-fetch';\nimport { Logger } from 'winston';\nimport { Config } from '@backstage/config';\nimport { Readable } from 'stream';\nimport { DocumentCollatorFactory } from '@backstage/plugin-search-common';\n\nimport { FaqDocument } from './FaqDocument';\n\nexport type FaqCollatorFactoryOptions = {\n  baseUrl?: string;\n  logger: Logger;\n};\n\nexport class FaqCollatorFactory implements DocumentCollatorFactory {\n  private readonly baseUrl: string | undefined;\n  private readonly logger: Logger;\n  public readonly type: string = 'faq-snippets';\n\n  private constructor(options: FaqCollatorFactoryOptions) {\n    this.baseUrl = options.baseUrl;\n    this.logger = options.logger;\n  }\n\n  static fromConfig(config: Config, options: FaqCollatorFactoryOptions) {\n    const baseUrl =\n      config.getOptionalString('faq.baseUrl') ||\n      'https://backstage.example.biz/faq-snippets';\n    return new FaqCollatorFactory({ ...options, baseUrl });\n  }\n\n  async getCollator() {\n    return Readable.from(this.execute());\n  }\n\n  async *execute(): AsyncGenerator<FaqDocument> {\n    if (!this.baseUrl) {\n      this.logger.error(`No faq.baseUrl configured in your app-config.yaml`);\n      return;\n    }\n\n    const response = await fetch(this.baseUrl);\n    const data = await response.json();\n\n    for (const faq of data.items) {\n      yield {\n        title: faq.question,\n        location: `/faq-snippets/${faq.id}`,\n        text: faq.answer,\n        answered_by: faq.user,\n      };\n    }\n  }\n}\n")),(0,a.kt)("h4",r({},{id:"5-test-your-collator"}),"5. Test your collator"),(0,a.kt)("p",null,"To verify your implementation works as expected make sure to add tests for it. For your convenience, there is the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://backstage.io/docs/reference/plugin-search-backend-node.testpipeline"}),(0,a.kt)("inlineCode",{parentName:"a"},"TestPipeline"))," utility that emulates a pipeline into which you can integrate your custom collator."),(0,a.kt)("p",null,"Look at ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/master/plugins/techdocs-backend/src/search/DefaultTechDocsCollatorFactory.test.ts"}),"DefaultTechDocsCollatorFactory test"),", for an example."),(0,a.kt)("h4",r({},{id:"6-make-your-plugins-collator-discoverable-for-others"}),"6. Make your plugins collator discoverable for others"),(0,a.kt)("p",null,"If you want to make your collator discoverable for other adopters, add it to the list of ",(0,a.kt)("a",r({parentName:"p"},{href:"https://backstage.io/docs/features/search/#plugins-integrated-with-backstage-search"}),"plugins integrated to search"),"."),(0,a.kt)("h2",r({},{id:"building-a-search-experience-into-your-plugin"}),"Building a search experience into your plugin"),(0,a.kt)("p",null,"While the core Search plugin offers components and extensions that empower app\nintegrators to compose a global search experience, you may find that you want a\nnarrower search experience just within your plugin. This could be as literal as\nan autocomplete-style search bar focused on documents provided by your plugin\n(for example, the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/master/plugins/techdocs/src/search/components/TechDocsSearch.tsx"}),"TechDocsSearch"),"\ncomponent), or as abstract as a widget that presents a list of links that\nare contextually related to something else on the page."),(0,a.kt)("h3",r({},{id:"search-experience-concepts"}),"Search Experience Concepts"),(0,a.kt)("p",null,"Knowing these high-level concepts will help you as you craft your in-plugin\nsearch experience."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All search experiences must be wrapped in a ",(0,a.kt)("inlineCode",{parentName:"li"},"<SearchContextProvider>"),", which\nis provided by ",(0,a.kt)("inlineCode",{parentName:"li"},"@backstage/plugin-search-react"),". This context keeps track\nof state necessary to perform search queries and display any results. As\ninputs to the query are updated (e.g. a ",(0,a.kt)("inlineCode",{parentName:"li"},"term")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"filter")," values), the\nupdated query is executed and ",(0,a.kt)("inlineCode",{parentName:"li"},"results")," are refreshed. Check out the\n",(0,a.kt)("a",r({parentName:"li"},{href:"https://backstage.io/docs/reference/plugin-search-react.searchcontextvalue"}),"SearchContextValue"),"\nfor details."),(0,a.kt)("li",{parentName:"ul"},"The aforementioned state can be modified and/or consumed via the\n",(0,a.kt)("inlineCode",{parentName:"li"},"useSearch()")," hook, also exported by ",(0,a.kt)("inlineCode",{parentName:"li"},"@backstage/plugin-search-react"),"."),(0,a.kt)("li",{parentName:"ul"},"For more literal search experiences, reusable components are available\nto import and compose into a cohesive experience in your plugin (e.g.\n",(0,a.kt)("inlineCode",{parentName:"li"},"<SearchBar />")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"<SearchFilter.Checkbox />"),"). You can see all such\ncomponents in ",(0,a.kt)("a",r({parentName:"li"},{href:"https://backstage.io/storybook/?path=/story/plugins-search-searchbar--default"}),"Backstage's storybook"),".")),(0,a.kt)("h3",r({},{id:"search-experience-tutorials"}),"Search Experience Tutorials"),(0,a.kt)("p",null,"The following tutorials make use of packages and plugins that you may not yet\nhave as dependencies for your plugin; be sure to add them before you use them!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"https://www.npmjs.com/package/@backstage/plugin-search-react"}),(0,a.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-search-react"))," - A\npackage containing components, hooks, and types that are shared across all\nfrontend plugins, including plugins like yours!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"https://www.npmjs.com/package/@backstage/plugin-search"}),(0,a.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-search"))," - The\nmain search plugin, used by app integrators to compose global search\nexperiences. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"https://www.npmjs.com/package/@backstage/core-components"}),(0,a.kt)("inlineCode",{parentName:"a"},"@backstage/core-components"))," - A\npackage containing generic components useful for a variety of experiences\nbuilt in Backstage.")),(0,a.kt)("h4",r({},{id:"improved-404-page-experience"}),'Improved "404" page experience'),(0,a.kt)("p",null,"Imagine you have a plugin that allows users to manage ",(0,a.kt)("em",{parentName:"p"},"widgets"),". Perhaps they\ncan be viewed at a URL like ",(0,a.kt)("inlineCode",{parentName:"p"},"backstage.example.biz/widgets/{widgetName}"),".\nAt some point, a widget is renamed, and links to that widget's page from\nchat systems, wikis, or browser bookmarks become stale, resulting in errors or\n404s."),(0,a.kt)("p",null,'What if instead of showing a broken page or the generic "looks like someone\ndropped the mic" 404 page, you showed a list of possibly related widgets?'),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-javascript"}),"import { Link } from '@backstage/core-components';\nimport { SearchResult } from '@backstage/plugin-search';\nimport { SearchContextProvider } from '@backstage/plugin-search-react';\n\nexport const Widget404Page = ({ widgetName }) => {\n  // Supplying this to <SearchContextProvider> runs a pre-filtered search with\n  // the given widgetName as the search term, focused on search result of type\n  // \"widget\" with no other filters.\n  const preFiltered = {\n    term: widgetName,\n    types: ['widget'],\n    filters: {},\n  };\n\n  return (\n    <SearchContextProvider initialState={preFiltered}>\n      {/* The <SearchResult> component allows us to iterate through results and\n          display them in whatever way fits best! */}\n      <SearchResult>\n        {({ results }) => (\n          {results.map(({ document }) => (\n            <Link to={document.location} key={document.location}>\n              {document.title}\n            </Link>\n          ))}\n        )}\n      <SearchResult>\n    </SearchContextProvider>\n  );\n);\n")),(0,a.kt)("p",null,"Not all search experiences require user input! As you can see, it's possible to\nleverage the Backstage Search Platform's frontend framework without necessarily\ngiving users input controls."),(0,a.kt)("h4",r({},{id:"simple-search-page"}),"Simple search page"),(0,a.kt)("p",null,"Of course, it's also possible to provide a more fully featured search\nexperience in your plugin. The simplest way is to leverage reusable components\nprovided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-search")," package, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-javascript"}),"import { useProfile } from '@internal/api';\nimport {\n  Content,\n  ContentHeader,\n  PageWithHeader,\n} from '@backstage/core-components';\nimport { SearchBar, SearchResult } from '@backstage/plugin-search';\nimport { SearchContextProvider } from '@backstage/plugin-search-react';\n\nexport const ManageMyWidgets = () => {\n  const { primaryTeam } = useProfile();\n  // In this example, note how we are pre-filtering results down to a specific\n  // owner field value (the currently logged-in user's team), but allowing the\n  // search term to be controlled by the user via the <SearchBar /> component.\n  const preFiltered = {\n    types: ['widget'],\n    term: '',\n    filters: {\n      owner: primaryTeam,\n    },\n  };\n\n  return (\n    <PageWithHeader title=\"Widgets Home\">\n      <Content>\n        <ContentHeader title=\"All your Widgets and More\" />\n        <SearchContextProvider initialState={preFiltered}>\n          <SearchBar />\n          <SearchResult>\n            {/* Render results here, just like above */}\n          </SearchResult>\n        </SearchContextProvider>\n      </Content>\n    </PageWithHeader>\n  );\n};\n")),(0,a.kt)("h4",r({},{id:"custom-search-control-surfaces"}),"Custom search control surfaces"),(0,a.kt)("p",null,"If the reusable search components provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-search")," aren't\nadequate, no problem! There's an API in place that you can use to author your\nown components to control the various parts of the search context."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-javascript"}),"import { useSearch } from '@backstage/plugin-search-react';\nimport ChipInput from 'material-ui-chip-input';\n\nexport const CustomChipFilter = ({ name }) => {\n  const { filters, setFilters } = useSearch();\n  const chipValues = filters[name] || [];\n\n  // When a chip value is changed, update the filters value by calling the\n  // setFilters function from the search context.\n  const handleChipChange = (chip, index) => {\n    // There may be filters set for other fields. Be sure to maintain them.\n    setFilters(prevState => {\n      const { [name]: filter = [], ...others } = prevState;\n\n      if (index === undefined) {\n        filter.push(chip);\n      } else {\n        filter.splice(index, 1);\n      }\n\n      return { ...others, [name]: filter };\n    });\n  };\n\n  return (\n    <ChipInput\n      value={chipValues}\n      onAdd={handleChipChange}\n      onDelete={handleChipChange}\n    />\n  );\n};\n")),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/master/plugins/search-react/src/context/SearchContext.tsx"}),"SearchContextValue type"),"\nfor more details on what methods and values are available for manipulating and\nreading the search context."),(0,a.kt)("p",null,"If you produce something generic and reusable, consider contributing your\ncomponent upstream so that all users of the Backstage Search Platform can\nbenefit. Issues and pull requests welcome."),(0,a.kt)("h4",r({},{id:"custom-search-results"}),"Custom search results"),(0,a.kt)("p",null,"Search results throughout Backstage are rendered as lists so that list items can easily be customized; although a ",(0,a.kt)("a",r({parentName:"p"},{href:"https://backstage.io/storybook/?path=/story/plugins-search-defaultresultlistitem--default"}),"default result list item")," is available, plugins are in the best position to provide custom result list items that surface relevant information only known to the plugin."),(0,a.kt)("p",null,"The example below imagines ",(0,a.kt)("inlineCode",{parentName:"p"},"YourCustomSearchResult")," as a type of search result that contains associated ",(0,a.kt)("inlineCode",{parentName:"p"},"tags")," which could be rendered as chips below the title/text."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"import { Link } from '@backstage/core-components';\nimport { useAnalytics } from '@backstage/core-plugin-api';\nimport { ResultHighlight } from '@backstage/plugin-search-common';\nimport { HighlightedSearchResultText } from '@backstage/plugin-search-react';\n\ntype CustomSearchResultListItemProps = {\n  result: YourCustomSearchResult;\n  rank?: number;\n  highlight?: ResultHighlight;\n};\n\nexport const CustomSearchResultListItem = (\n  props: CustomSearchResultListItemProps,\n) => {\n  const { title, text, location, tags } = props.result;\n\n  const analytics = useAnalytics();\n  const handleClick = () => {\n    analytics.captureEvent('discover', title, {\n      attributes: { to: location },\n      value: props.rank,\n    });\n  };\n\n  return (\n    <Link noTrack to={location} onClick={handleClick}>\n      <ListItem alignItems=\"center\">\n        <Box flexWrap=\"wrap\">\n          <ListItemText\n            primaryTypographyProps={{ variant: 'h6' }}\n            primary={\n              highlight?.fields?.title ? (\n                <HighlightedSearchResultText\n                  text={highlight.fields.title}\n                  preTag={highlight.preTag}\n                  postTag={highlight.postTag}\n                />\n              ) : (\n                title\n              )\n            }\n            secondary={\n              highlight?.fields?.text ? (\n                <HighlightedSearchResultText\n                  text={highlight.fields.text}\n                  preTag={highlight.preTag}\n                  postTag={highlight.postTag}\n                />\n              ) : (\n                text\n              )\n            }\n          />\n          {tags &&\n            tags.map((tag: string) => (\n              <Chip key={tag} label={`Tag: ${tag}`} size=\"small\" />\n            ))}\n        </Box>\n      </ListItem>\n      <Divider />\n    </Link>\n  );\n};\n")),(0,a.kt)("p",null,"The optional use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<HighlightedSearchResultText>")," component makes it possible to highlight relevant parts of the result based on the user's search query."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note on Analytics"),": In order for app integrators to track and improve search experiences across Backstage, it's important for them to understand when and what users search for, as well as what they click on after searching. When providing a custom result component, it's your responsibility as a plugin developer to instrument it according to search analytics conventions. In particular:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You must use the ",(0,a.kt)("inlineCode",{parentName:"li"},"analytics.captureEvent")," method, from the ",(0,a.kt)("inlineCode",{parentName:"li"},"useAnalytics()")," hook (detailed ",(0,a.kt)("a",r({parentName:"li"},{href:"/v1.12.0/docs/plugins/analytics"}),"plugin analytics docs are here"),")."),(0,a.kt)("li",{parentName:"ul"},"You must ensure that the action of the event, representing a click on a search result item, is ",(0,a.kt)("inlineCode",{parentName:"li"},"discover"),", and the subject is the ",(0,a.kt)("inlineCode",{parentName:"li"},"title")," of the clicked result. In addition, the ",(0,a.kt)("inlineCode",{parentName:"li"},"to")," attribute should be set to the result's ",(0,a.kt)("inlineCode",{parentName:"li"},"location"),", and the ",(0,a.kt)("inlineCode",{parentName:"li"},"value")," of the event must be set to the ",(0,a.kt)("inlineCode",{parentName:"li"},"rank")," (passed in as a prop)."),(0,a.kt)("li",{parentName:"ul"},"You must ensure that the aforementioned ",(0,a.kt)("inlineCode",{parentName:"li"},"captureEvent")," method is called when a user clicks the link; you should further ensure that the ",(0,a.kt)("inlineCode",{parentName:"li"},"noTrack")," prop is added to the link (which disables default link click tracking, in favor of this custom instrumentation).")),(0,a.kt)("p",null,"For other examples and inspiration on custom result list items, check out the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/c981e83/plugins/stack-overflow/src/search/StackOverflowSearchResultListItem/StackOverflowSearchResultListItem.tsx"}),(0,a.kt)("inlineCode",{parentName:"a"},"<StackOverflowSearchResultListItem>"))," or ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/c981e83/plugins/catalog/src/components/CatalogSearchResultListItem/CatalogSearchResultListItem.tsx"}),(0,a.kt)("inlineCode",{parentName:"a"},"<CatalogSearchResultListItem>"))," components."))}h.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}}()?Object.assign:function(e,o){for(var i,s,l=r(e),c=1;c<arguments.length;c++){for(var p in i=Object(arguments[c]))n.call(i,p)&&(l[p]=i[p]);if(t){s=t(i);for(var u=0;u<s.length;u++)a.call(i,s[u])&&(l[s[u]]=i[s[u]])}}return l}},541535:(e,t,n)=>{var a=n(862525),r=60103,o=60106;var i=60109,s=60110,l=60112;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;r=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),s=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),c=u("react.memo"),p=u("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function f(e,t,n){this.props=e,this.context=t,this.refs=d,this.updater=n||m}function k(){}function y(e,t,n){this.props=e,this.context=t,this.refs=d,this.updater=n||m}f.prototype.isReactComponent={},f.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},f.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=f.prototype;var b=y.prototype=new k;b.constructor=y,a(b,f.prototype),b.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var a,o={},i=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,a)&&!C.hasOwnProperty(a)&&(o[a]=t[a]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var c=Array(l),p=0;p<l;p++)c[p]=arguments[p+2];o.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===o[a]&&(o[a]=l[a]);return{$$typeof:r,type:e,key:i,ref:s,props:o,_owner:v.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var S=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,n,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case o:l=!0}}if(l)return i=i(l=e),e=""===a?"."+O(l,0):a,Array.isArray(i)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),j(i,t,n,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(S,"$&/")+"/")+e)),t.push(i)),1;if(l=0,a=""===a?".":a+":",Array.isArray(e))for(var c=0;c<e.length;c++){var p=a+O(s=e[c],c);l+=j(s,t,n,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),c=0;!(s=e.next()).done;)l+=j(s=s.value,t,n,p=a+O(s,c++),i);else if("object"===s)throw t=""+e,Error(g(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function T(e,t,n){if(null==e)return e;var a=[],r=0;return j(e,a,"","",(function(e){return t.call(n,e,r++)})),a}function q(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function I(){var e=P.current;if(null===e)throw Error(g(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
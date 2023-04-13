/*! For license information please see 20335c20.34a28506.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[231763],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,h=c["".concat(s,".").concat(d)]||c[d]||g[d]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},961591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>u});n(827378);var a=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"configuration",title:"Getting Started, configuring Backstage",description:"Getting started with your initial Backstage configuration"},l=void 0,s={unversionedId:"getting-started/configuration",id:"getting-started/configuration",title:"Getting Started, configuring Backstage",description:"Getting started with your initial Backstage configuration",source:"@site/../docs/getting-started/configuration.md",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/v1.12.0/docs/getting-started/configuration",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/getting-started/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Getting Started, configuring Backstage",description:"Getting started with your initial Backstage configuration"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/v1.12.0/docs/getting-started/"},next:{title:"Create an App",permalink:"/v1.12.0/docs/getting-started/create-an-app"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install and configure PostgreSQL",id:"install-and-configure-postgresql",level:3},{value:"Setting up authentication",id:"setting-up-authentication",level:3},{value:"Add sign-in option to the frontend",id:"add-sign-in-option-to-the-frontend",level:3},{value:"Setting up a GitHub Integration",id:"setting-up-a-github-integration",level:3},{value:"Explore what we&#39;ve done so far",id:"explore-what-weve-done-so-far",level:3},{value:"Login to Backstage and check profile",id:"login-to-backstage-and-check-profile",level:2},{value:"Register an existing component",id:"register-an-existing-component",level:2},{value:"Create a new component using a software template",id:"create-a-new-component-using-a-software-template",level:2}],c={toc:u};function g(e){var{components:t}=e,i=r(e,["components"]);return(0,a.kt)("wrapper",o({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is part two of the Getting Started documentation of Backstage. The steps in\nthis tutorial assume you've installed Backstage app from the npm repository,\nlike in the ",(0,a.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/getting-started/"}),"Getting Started guide")," and want to configure Backstage."),(0,a.kt)("p",null,"At the end of this tutorial, you can expect:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Backstage to use a PostgreSQL database"),(0,a.kt)("li",{parentName:"ul"},"You'll authenticate using one of the auth providers"),(0,a.kt)("li",{parentName:"ul"},"The Backstage GitHub integration to be configured"),(0,a.kt)("li",{parentName:"ul"},"You're able to use Software Templates")),(0,a.kt)("h3",o({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Access to a Linux-based operating system, such as Linux, MacOS or\n",(0,a.kt)("a",o({parentName:"li"},{href:"https://docs.microsoft.com/en-us/windows/wsl/"}),"Windows Subsystem for Linux")),(0,a.kt)("li",{parentName:"ul"},"An account with elevated rights to install prerequisites on your operating\nsystem"),(0,a.kt)("li",{parentName:"ul"},"If the database is not hosted on the same server as the Backstage app, the\nPostgreSQL port needs to be accessible (the default is 5432 or 5433)")),(0,a.kt)("h3",o({},{id:"install-and-configure-postgresql"}),"Install and configure PostgreSQL"),(0,a.kt)("p",null,"These instructions can be skipped if you already have a PostgreSQL server\ninstalled and created a schema and user. The example below is for Linux, but\nluckily there are detailed instructions on how to\n",(0,a.kt)("a",o({parentName:"p"},{href:"https://www.postgresql.org/download/"}),"install PostgreSQL")," to help you get\nstarted."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"sudo apt-get install postgresql\n")),(0,a.kt)("p",null,"Test if your database is working:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"sudo -u postgres psql\n")),(0,a.kt)("p",null,"You should see a very welcoming message, like:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-shell"}),'psql (12.9 (Ubuntu 12.9-0ubuntu0.20.04.1))\nType "help" for help.\n\npostgres=#\n')),(0,a.kt)("p",null,"For this tutorial we're going to use the existing postgres user. The next step\nis to set the password for this user:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"postgres=# ALTER USER postgres PASSWORD 'secret';\n")),(0,a.kt)("p",null,"That's enough database administration to get started. Type ",(0,a.kt)("inlineCode",{parentName:"p"},"\\q"),", followed by\npressing the enter key. Then again type ",(0,a.kt)("inlineCode",{parentName:"p"},"exit")," and press enter. Next, you need\nto install and configure the client."),(0,a.kt)("p",null,"Stop Backstage, and go to the root directory of your freshly installed Backstage\nApp. Use the following commands to start the PostgreSQL client installation:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"# From your Backstage root directory\nyarn add --cwd packages/backend pg\n")),(0,a.kt)("p",null,"Use your favorite editor to open ",(0,a.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," and add your PostgreSQL\nconfiguration. in the root directory of your Backstage app using the credentials\nfrom the previous steps."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-yaml",metastring:'title="app-config.yaml"',title:'"app-config.yaml"'}),"backend:\n  database:\n    # highlight-remove-start\n    client: better-sqlite3\n    connection: ':memory:'\n    # highlight-remove-end\n    # highlight-add-start\n    # config options: https://node-postgres.com/apis/client\n    client: pg\n    connection:\n      host: ${POSTGRES_HOST}\n      port: ${POSTGRES_PORT}\n      user: ${POSTGRES_USER}\n      password: ${POSTGRES_PASSWORD}\n      # https://node-postgres.com/features/ssl\n      # ssl: require # see https://www.postgresql.org/docs/current/libpq-ssl.html Table 33.1. SSL Mode Descriptions (e.g. require)\n        #ca: # if you have a CA file and want to verify it you can uncomment this section\n        #$file: <file-path>/ca/server.crt\n        # highlight-add-end\n")),(0,a.kt)("p",null,"You'll use the connection details from the previous step. You can either set the\n",(0,a.kt)("inlineCode",{parentName:"p"},"POSTGRES_")," environment variables prior to launching Backstage, or remove the\n",(0,a.kt)("inlineCode",{parentName:"p"},"${...}")," values and set actual values in this configuration file."),(0,a.kt)("p",null,"The default port for PostgreSQL is ",(0,a.kt)("inlineCode",{parentName:"p"},"5432")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"5433"),", and the host name could be\n",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," if installed locally. A word of caution: In general, using\nconnection details in a configuration file is not recommended."),(0,a.kt)("p",null,"Start the Backstage app:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"yarn dev\n")),(0,a.kt)("p",null,"After Backstage is completely started you'll notice the catalog is populated\nwith the information, still coming from the configuration files. If you add a\nnew component, or register an existing one it will be saved in the database.\nLater in this tutorial you'll add a service, and you can test if it's persistent\nas advertised."),(0,a.kt)("p",null,"If you want to read more about the database configuration, here are some helpful\nlinks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/v1.12.0/docs/tutorials/configuring-plugin-databases#privileges"}),"Configuring Plugin Databases")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"http://knexjs.org/"}),"Read more about Knex"),", which is the library we use for\nthe database backend")),(0,a.kt)("h3",o({},{id:"setting-up-authentication"}),"Setting up authentication"),(0,a.kt)("p",null,"There are multiple authentication providers available for you to use with\nBackstage, feel free to follow\n",(0,a.kt)("a",o({parentName:"p"},{href:"../auth/"}),"the instructions for adding authentication"),"."),(0,a.kt)("p",null,"For this tutorial we choose to use GitHub, a free service most of you might be\nfamiliar with. For other options, see\n",(0,a.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/auth/github/provider#create-an-oauth-app-on-github"}),"the auth provider documentation"),"."),(0,a.kt)("p",null,"Go to\n",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/settings/applications/new"}),"https://github.com/settings/applications/new"),"\nto create your OAuth App. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Homepage URL")," should point to Backstage's\nfrontend, in our tutorial it would be ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),". The\n",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization callback URL")," will point to the auth backend, which will most\nlikely be ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:7007/api/auth/github/handler/frame"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the GitHub OAuth creation page",src:n(67519).Z,width:"593",height:"554"})),(0,a.kt)("p",null,"Take note of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Client ID")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Client Secret"),". Open ",(0,a.kt)("inlineCode",{parentName:"p"},"app-config.yaml"),",\nand add your ",(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"clientSecret")," to this file. It should end up\nlooking like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-yaml",metastring:'title="app-config.yaml"',title:'"app-config.yaml"'}),"auth:\n  # see https://backstage.io/docs/auth/ to learn about auth providers\n  environment: development\n  providers:\n    github:\n      development:\n        clientId: YOUR CLIENT ID\n        clientSecret: YOUR CLIENT SECRET\n")),(0,a.kt)("h3",o({},{id:"add-sign-in-option-to-the-frontend"}),"Add sign-in option to the frontend"),(0,a.kt)("p",null,"Backstage will re-read the configuration. If there's no errors, that's great! We\ncan continue with the last part of the configuration. The next step is needed to\nchange the sign-in page, this you actually need to add in the source code."),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/app/src/App.tsx")," and below the last ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," line, add:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-typescript",metastring:'title="packages/app/src/App.tsx"',title:'"packages/app/src/App.tsx"'}),"import { githubAuthApiRef } from '@backstage/core-plugin-api';\nimport { SignInPage } from '@backstage/core-components';\n")),(0,a.kt)("p",null,"Search for ",(0,a.kt)("inlineCode",{parentName:"p"},"const app = createApp({")," in this file, and below ",(0,a.kt)("inlineCode",{parentName:"p"},"apis,")," add:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',title:'"packages/app/src/App.tsx"'}),"components: {\n  SignInPage: props => (\n    <SignInPage\n      {...props}\n      auto\n      provider={{\n        id: 'github-auth-provider',\n        title: 'GitHub',\n        message: 'Sign in using GitHub',\n        apiRef: githubAuthApiRef,\n      }}\n    />\n  ),\n},\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Note: The default Backstage app comes with a guest Sign In Resolver. This resolver makes all users share a single "guest" identity and is only intended as a minimum requirement to quickly get up and running. You can read more about how ',(0,a.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/auth/identity-resolver#sign-in-resolvers"}),"Sign In Resolvers")," play a role in creating a ",(0,a.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/auth/identity-resolver#backstage-user-identity"}),"Backstage User Identity")," for logged in users.")),(0,a.kt)("p",null,"Restart Backstage from the terminal, by stopping it with ",(0,a.kt)("inlineCode",{parentName:"p"},"Control-C"),", and starting it with ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn dev")," . You should be welcomed by a login prompt!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Sometimes the frontend starts before the backend resulting in errors on the sign in page. Wait for the backend to start and then reload Backstage to proceed.")),(0,a.kt)("p",null,"To learn more about Authentication in Backstage, here are some docs you\ncould read:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"../auth/"}),"Authentication in Backstage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/v1.12.0/docs/integrations/github/org"}),"Using organizational data from GitHub"))),(0,a.kt)("h3",o({},{id:"setting-up-a-github-integration"}),"Setting up a GitHub Integration"),(0,a.kt)("p",null,"The GitHub integration supports loading catalog entities from GitHub or GitHub\nEnterprise. Entities can be added to static catalog configuration, registered\nwith the catalog-import plugin, or discovered from a GitHub organization. Users\nand Groups can also be loaded from an organization. While using ",(0,a.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/integrations/github/github-apps"}),"GitHub Apps"),"\nmight be the best way to set up integrations, for this tutorial you'll use a\nPersonal Access Token."),(0,a.kt)("p",null,"Create your Personal Access Token by opening\n",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/settings/tokens/new"}),"the GitHub token creation page"),". Use a\nname to identify this token and put it in the notes field. Choose a number of\ndays for expiration. If you have a hard time picking a number, we suggest to go\nfor 7 days, it's a lucky number."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the GitHub Personal Access Token creation page",src:n(301483).Z,width:"784",height:"298"})),(0,a.kt)("p",null,"Set the scope to your likings. For this tutorial, selecting ",(0,a.kt)("inlineCode",{parentName:"p"},"repo")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow")," is required as the scaffolding job in this guide configures a GitHub actions workflow for the newly created project."),(0,a.kt)("p",null,"For this tutorial, we will be writing the token to ",(0,a.kt)("inlineCode",{parentName:"p"},"app-config.local.yaml"),". This file might not exist for you, so if it doesn't go ahead and create it alongside the ",(0,a.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," at the root of the project.\nThis file should also be excluded in ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore"),", to avoid accidental committing of this file."),(0,a.kt)("p",null,"In your ",(0,a.kt)("inlineCode",{parentName:"p"},"app-config.local.yaml")," go ahead and add the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-yaml",metastring:'title="app-config.local.yaml"',title:'"app-config.local.yaml"'}),"integrations:\n  github:\n    - host: github.com\n      token: ghp_urtokendeinfewinfiwebfweb # this should be the token from GitHub\n")),(0,a.kt)("p",null,"That's settled. This information will be leveraged by other plugins."),(0,a.kt)("p",null,"If you're looking for a more production way to manage this secret, then you can do the following with the token being stored in an environment variable called ",(0,a.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-yaml",metastring:'title="app-config.local.yaml"',title:'"app-config.local.yaml"'}),"integrations:\n  github:\n    - host: github.com\n      token: ${GITHUB_TOKEN} # this will use the environment variable GITHUB_TOKEN\n")),(0,a.kt)("p",null,"Some helpful links, for if you want to learn more about:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"../integrations/"}),"Other available integrations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/v1.12.0/docs/integrations/github/github-apps#docsNav"}),"Using GitHub Apps instead of a Personal Access Token"))),(0,a.kt)("h3",o({},{id:"explore-what-weve-done-so-far"}),"Explore what we've done so far"),(0,a.kt)("h2",o({},{id:"login-to-backstage-and-check-profile"}),"Login to Backstage and check profile"),(0,a.kt)("p",null,"Open your Backstage frontend. You should see your login screen if you're not\nlogged in yet. As soon as you've logged in, go to Settings, you'll see your\nprofile. Hopefully you'll recognize the profile picture and name on your screen,\notherwise something went terribly wrong."),(0,a.kt)("h2",o({},{id:"register-an-existing-component"}),"Register an existing component"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Register a new component, by going to ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," and choose\n",(0,a.kt)("inlineCode",{parentName:"p"},"Register existing component")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Software template main screen, with a blue button to add an existing component",src:n(956377).Z,width:"990",height:"217"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"As URL use ",(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/backstage/demo/blob/master/catalog-info.yaml"),".\nThis is used by our ",(0,a.kt)("a",o({parentName:"p"},{href:"https://demo.backstage.io"}),"demo site"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Register a new component wizard, asking for an URL to the existing component YAML file",src:n(481009).Z,width:"667",height:"451"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Hit ",(0,a.kt)("inlineCode",{parentName:"p"},"Analyze")," and review the changes. Apply them if correct."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Register a new component wizard, showing the metadata for the component YAML we use in this tutorial",src:n(644346).Z,width:"659",height:"511"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You should receive a message that your entities have been added.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you go back to ",(0,a.kt)("inlineCode",{parentName:"p"},"Home"),", you should be able to find ",(0,a.kt)("inlineCode",{parentName:"p"},"demo"),". You should be\nable to click it and see the details"))),(0,a.kt)("h2",o({},{id:"create-a-new-component-using-a-software-template"}),"Create a new component using a software template"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"create")," and choose to create a website with the ",(0,a.kt)("inlineCode",{parentName:"li"},"Example Node.js Template")),(0,a.kt)("li",{parentName:"ul"},"Type in a name, let's use ",(0,a.kt)("inlineCode",{parentName:"li"},"tutorial")," and click ",(0,a.kt)("inlineCode",{parentName:"li"},"Next Step"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Software template deployment input screen asking for a name",src:n(981041).Z,width:"926",height:"387"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You should see the following screen:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Software template deployment input screen asking for the GitHub username, and name of the new repo to create",src:n(851087).Z,width:"985",height:"639"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For host, it should default to github.com")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"As owner, type your GitHub username")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For the repository name, type ",(0,a.kt)("inlineCode",{parentName:"p"},"tutorial"),". Go to the next step")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Review the details of this new service, and press ",(0,a.kt)("inlineCode",{parentName:"p"},"Create")," if you want to\ndeploy it like this.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can follow along with the progress, and as soon as every step is\nfinished, you can take a look at your new service"))),(0,a.kt)("p",null,"Achievement unlocked. You've set up an installation of the core Backstage App,\nmade it persistent, and configured it so you are now able to use software\ntemplates."),(0,a.kt)("p",null,"Let us know how your experience was: ",(0,a.kt)("a",o({parentName:"p"},{href:"https://discord.gg/backstage-687207715902193673"}),"on discord"),",\nfile issues for any\n",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/issues/new?labels=help+wanted&template=feature_template.md"}),"feature"),"\nor\n",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/issues/new?labels=plugin&template=plugin_template.md&title=%5BPlugin%5D+THE+PLUGIN+NAME"}),"plugin suggestions"),",\nor\n",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/issues/new?labels=bug&template=bug_template.md"}),"bugs"),"\nyou have, and feel free to\n",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md"}),"contribute"),"!"))}g.isMDXComponent=!0},956377:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/b-existing-1-f016ed45f176600e6364e7c08bb57d65.png"},481009:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/b-existing-2-3a7f97195f7dc72488c6f844516aeee9.png"},644346:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/b-existing-3-3a36de16637c1cce6cdfd568da7bc8b1.png"},981041:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/b-scaffold-1-871f837941da85da9ca44153daa3d425.png"},851087:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/b-scaffold-2-70becaccaa4539823f1dde9492f06e0f.png"},67519:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gh-oauth-6ba1157307d9e1a95301a49e9ee1b05b.png"},301483:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gh-pat-b09e0abf61ff86557a8a986951584879.png"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var i,l,s=o(e),p=1;p<arguments.length;p++){for(var u in i=Object(arguments[p]))n.call(i,u)&&(s[u]=i[u]);if(t){l=t(i);for(var c=0;c<l.length;c++)a.call(i,l[c])&&(s[l[c]]=i[l[c]])}}return s}},541535:(e,t,n)=>{var a=n(862525),o=60103,r=60106;var i=60109,l=60110,s=60112;var p=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),i=c("react.provider"),l=c("react.context"),s=c("react.forward_ref"),c("react.suspense"),p=c("react.memo"),u=c("react.lazy")}var g="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function m(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||h}function k(){}function b(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=m.prototype;var y=b.prototype=new k;y.constructor=b,a(y,m.prototype),y.isPureReactComponent=!0;var w={current:null},v=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var a,r={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,a)&&!N.hasOwnProperty(a)&&(r[a]=t[a]);var s=arguments.length-2;if(1===s)r.children=n;else if(1<s){for(var p=Array(s),u=0;u<s;u++)p[u]=arguments[u+2];r.children=p}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===r[a]&&(r[a]=s[a]);return{$$typeof:o,type:e,key:i,ref:l,props:r,_owner:w.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,n,a,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case r:s=!0}}if(s)return i=i(s=e),e=""===a?"."+T(s,0):a,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),x(i,t,n,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=""===a?".":a+":",Array.isArray(e))for(var p=0;p<e.length;p++){var u=a+T(l=e[p],p);s+=x(l,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=g&&e[g]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),p=0;!(l=e.next()).done;)s+=x(l=l.value,t,n,u=a+T(l,p++),i);else if("object"===l)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function j(e,t,n){if(null==e)return e;var a=[],o=0;return x(e,a,"","",(function(e){return t.call(n,e,o++)})),a}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function G(){var e=A.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
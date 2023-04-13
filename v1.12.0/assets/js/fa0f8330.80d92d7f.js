/*! For license information please see fa0f8330.80d92d7f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[51533],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});n(827378);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"configuring-ci-cd",title:"Configuring CI/CD to generate and publish TechDocs sites",description:"Configuring CI/CD to generate and publish TechDocs sites to cloud storage"},s=void 0,c={unversionedId:"features/techdocs/configuring-ci-cd",id:"features/techdocs/configuring-ci-cd",title:"Configuring CI/CD to generate and publish TechDocs sites",description:"Configuring CI/CD to generate and publish TechDocs sites to cloud storage",source:"@site/../docs/features/techdocs/configuring-ci-cd.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/configuring-ci-cd",permalink:"/v1.12.0/docs/features/techdocs/configuring-ci-cd",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/techdocs/configuring-ci-cd.md",tags:[],version:"current",frontMatter:{id:"configuring-ci-cd",title:"Configuring CI/CD to generate and publish TechDocs sites",description:"Configuring CI/CD to generate and publish TechDocs sites to cloud storage"},sidebar:"docs",previous:{title:"Using Cloud Storage for TechDocs generated files",permalink:"/v1.12.0/docs/features/techdocs/using-cloud-storage"},next:{title:"TechDocs CLI",permalink:"/v1.12.0/docs/features/techdocs/cli"}},l={},u=[{value:"Steps",id:"steps",level:2},{value:"1. Setup a workflow",id:"1-setup-a-workflow",level:3},{value:"2. Prepare step",id:"2-prepare-step",level:3},{value:"3. Generate step",id:"3-generate-step",level:3},{value:"4. Publish step",id:"4-publish-step",level:3},{value:"Example: GitHub Actions CI and AWS S3",id:"example-github-actions-ci-and-aws-s3",level:2}],p={toc:u};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/features/techdocs/architecture#recommended-deployment"}),"Recommended deployment setup"),",\nTechDocs reads the static generated documentation files from a cloud storage\nbucket (GCS, AWS S3, etc.). The documentation site is generated on the CI/CD\nworkflow associated with the repository containing the documentation files. This\ndocument explains the steps needed to generate docs on CI and publish to a cloud\nstorage using ",(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/features/techdocs/cli"}),(0,r.kt)("inlineCode",{parentName:"a"},"techdocs-cli")),"."),(0,r.kt)("p",null,"The steps here target all kinds of CI providers (GitHub Actions, CircleCI,\nJenkins, etc.). Specific tools for individual providers will also be made\navailable here for simplicity (e.g. a GitHub Actions runner, CircleCI orb,\netc.)."),(0,r.kt)("p",null,"A summary of the instructions below looks like this -"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"# This is an example script\n\n# Prepare\nREPOSITORY_URL='https://github.com/org/repo'\ngit clone $REPOSITORY_URL\ncd repo\n\n# Install @techdocs/cli, mkdocs and mkdocs plugins\nnpm install -g @techdocs/cli\npip install mkdocs-techdocs-core==1.*\n\n# Generate\ntechdocs-cli generate --no-docker\n\n# Publish\ntechdocs-cli publish --publisher-type awsS3 --storage-name <bucket/container> --entity <Namespace/Kind/Name>\n")),(0,r.kt)("p",null,"That's it!"),(0,r.kt)("p",null,"Take a look at ",(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/features/techdocs/cli"}),(0,r.kt)("inlineCode",{parentName:"a"},"techdocs-cli"))," for the complete command reference,\ndetails, and options."),(0,r.kt)("h2",o({},{id:"steps"}),"Steps"),(0,r.kt)("h3",o({},{id:"1-setup-a-workflow"}),"1. Setup a workflow"),(0,r.kt)("p",null,"The TechDocs workflow should trigger on CI when any changes are made in the\nrepository containing the documentation files. You can be specific and configure\nthe workflow to be triggered only when files inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/")," directory or\n",(0,r.kt)("inlineCode",{parentName:"p"},"mkdocs.yml")," are changed."),(0,r.kt)("h3",o({},{id:"2-prepare-step"}),"2. Prepare step"),(0,r.kt)("p",null,"The first step on the CI is to clone your documentation source repository in a\nworking directory. This is almost always the first step in most CI workflows."),(0,r.kt)("p",null,"On GitHub Actions, you can add a step"),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/actions/checkout"}),(0,r.kt)("inlineCode",{parentName:"a"},"- uses: actions@checkout@v2")),"."),(0,r.kt)("p",null,"On CircleCI, you can add a special\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://circleci.com/docs/2.0/configuration-reference/#checkout"}),(0,r.kt)("inlineCode",{parentName:"a"},"checkout")),"\nstep."),(0,r.kt)("p",null,"Eventually we are trying to do a ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone <https://path/to/docs-repository/>"),"."),(0,r.kt)("h3",o({},{id:"3-generate-step"}),"3. Generate step"),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",o({parentName:"p"},{href:"https://www.npmjs.com/package/npx"}),(0,r.kt)("inlineCode",{parentName:"a"},"npx"))," to use it for running\n",(0,r.kt)("inlineCode",{parentName:"p"},"techdocs-cli"),". Or you can install using ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install -g @techdocs/cli"),"."),(0,r.kt)("p",null,"We are going to use the\n",(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/features/techdocs/cli#generate-techdocs-site-from-a-documentation-project"}),(0,r.kt)("inlineCode",{parentName:"a"},"techdocs-cli generate")),"\ncommand in this step."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"npx @techdocs/cli generate --no-docker --source-dir PATH_TO_REPO --output-dir ./site\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PATH_TO_REPO")," should be the location in the file path where the prepare step\nabove clones the repository."),(0,r.kt)("h3",o({},{id:"4-publish-step"}),"4. Publish step"),(0,r.kt)("p",null,"Depending on your cloud storage provider (AWS, Google Cloud, or Azure), set the\nnecessary authentication environment variables."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://cloud.google.com/storage/docs/authentication#libauth"}),"Google Cloud authentication")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/loading-node-credentials-environment.html"}),"AWS authentication"))),(0,r.kt)("p",null,"And then run the\n",(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/features/techdocs/cli#publish-generated-techdocs-sites"}),(0,r.kt)("inlineCode",{parentName:"a"},"techdocs-cli publish"))," command."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"npx @techdocs/cli publish --publisher-type <awsS3|googleGcs> --storage-name <bucket/container> --entity <namespace/kind/name> --directory ./site\n")),(0,r.kt)("p",null,"The updated TechDocs site built in this workflow is now ready to be served by\nthe TechDocs plugin in your Backstage app."),(0,r.kt)("h2",o({},{id:"example-github-actions-ci-and-aws-s3"}),"Example: GitHub Actions CI and AWS S3"),(0,r.kt)("p",null,"Here is an example workflow using GitHub Actions CI and AWS S3 storage. You can\nuse any CI and any other\n",(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/features/techdocs/#platforms-supported"}),"TechDocs supported cloud storage providers"),"."),(0,r.kt)("p",null,"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/techdocs.yml")," file in your\n",(0,r.kt)("a",o({parentName:"p"},{href:"/v1.12.0/docs/features/software-templates/"}),"Software Template(s)")," like this -"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-yaml"}),"name: Publish TechDocs Site\n\non:\n  push:\n    branches: [main]\n    # You can even set it to run only when TechDocs related files are updated.\n    # paths:\n    #   - \"docs/**\"\n    #   - \"mkdocs.yml\"\n\njobs:\n  publish-techdocs-site:\n    runs-on: ubuntu-latest\n\n    # The following secrets are required in your CI environment for publishing files to AWS S3.\n    # e.g. You can use GitHub Organization secrets to set them for all existing and new repositories.\n    env:\n      TECHDOCS_S3_BUCKET_NAME: ${{ secrets.TECHDOCS_S3_BUCKET_NAME }}\n      AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}\n      AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n      AWS_REGION: ${{ secrets.AWS_REGION }}\n      ENTITY_NAMESPACE: 'default'\n      ENTITY_KIND: 'Component'\n      ENTITY_NAME: 'my-doc-entity'\n      # In a Software template, Scaffolder will replace {{cookiecutter.component_id | jsonify}}\n      # with the correct entity name. This is same as metadata.name in the entity's catalog-info.yaml\n      # ENTITY_NAME: '{{ cookiecutter.component_id | jsonify }}'\n\n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v3\n\n      - uses: actions/setup-node@v3\n      - uses: actions/setup-python@v4\n        with:\n          python-version: '3.9'\n\n      # the 2 steps below can be removed if you aren't using plantuml in your documentation\n      - name: setup java\n        uses: actions/setup-java@v3\n        with:\n          distribution: 'zulu'\n          java-version: '11'\n      - name: download, validate, install plantuml and its dependencies\n        run: |\n          curl -o plantuml.jar -L http://sourceforge.net/projects/plantuml/files/plantuml.1.2021.4.jar/download\n          echo \"be498123d20eaea95a94b174d770ef94adfdca18  plantuml.jar\" | sha1sum -c -\n          mv plantuml.jar /opt/plantuml.jar\n          mkdir -p \"$HOME/.local/bin\"\n          echo $'#!/bin/sh\\n\\njava -jar '/opt/plantuml.jar' ${@}' >> \"$HOME/.local/bin/plantuml\"\n          chmod +x \"$HOME/.local/bin/plantuml\"\n          echo \"$HOME/.local/bin\" >> $GITHUB_PATH\n          sudo apt-get install -y graphviz\n\n      - name: Install techdocs-cli\n        run: sudo npm install -g @techdocs/cli\n\n      - name: Install mkdocs and mkdocs plugins\n        run: python -m pip install mkdocs-techdocs-core==1.*\n\n      - name: Generate docs site\n        run: techdocs-cli generate --no-docker --verbose\n\n      - name: Publish docs site\n        run: techdocs-cli publish --publisher-type awsS3 --storage-name $TECHDOCS_S3_BUCKET_NAME --entity $ENTITY_NAMESPACE/$ENTITY_KIND/$ENTITY_NAME\n")),(0,r.kt)("p",null,"When the new repository is scaffolded or new documentation updates are\ncommitted, the GitHub Action workflow will publish the TechDocs site, which can\nbe viewed in your Backstage app."))}d.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,s,c=o(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))n.call(i,u)&&(c[u]=i[u]);if(t){s=t(i);for(var p=0;p<s.length;p++)r.call(i,s[p])&&(c[s[p]]=i[s[p]])}}return c}},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;var i=60109,s=60110,c=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),s=p("react.context"),c=p("react.forward_ref"),p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=g.prototype;var k=b.prototype=new y;k.constructor=b,r(k,g.prototype),k.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,a={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!C.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:v.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var j=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===r?"."+T(c,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(j,"$&/")+"/"),E(i,t,n,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(j,"$&/")+"/")+e)),t.push(i)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+T(s=e[l],l);c+=E(s,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=E(s=s.value,t,n,u=r+T(s,l++),i);else if("object"===s)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function _(e,t,n){if(null==e)return e;var r=[],o=0;return E(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function N(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function A(){var e=I.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
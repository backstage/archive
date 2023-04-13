/*! For license information please see 7c9d75ad.c42e9b71.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[839293],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,f=d["".concat(c,".").concat(p)]||d[p]||h[p]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},143860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});n(827378);var o=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"configuration",title:"TechDocs Configuration Options",description:"Reference documentation for configuring TechDocs using app-config.yaml"},s=void 0,c={unversionedId:"features/techdocs/configuration",id:"features/techdocs/configuration",title:"TechDocs Configuration Options",description:"Reference documentation for configuring TechDocs using app-config.yaml",source:"@site/../docs/features/techdocs/configuration.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/configuration",permalink:"/v1.12.0/docs/features/techdocs/configuration",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/techdocs/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"TechDocs Configuration Options",description:"Reference documentation for configuring TechDocs using app-config.yaml"},sidebar:"docs",previous:{title:"Creating and Publishing Documentation",permalink:"/v1.12.0/docs/features/techdocs/creating-and-publishing"},next:{title:"Using Cloud Storage for TechDocs generated files",permalink:"/v1.12.0/docs/features/techdocs/using-cloud-storage"}},l={},u=[],d={toc:u};function h(e){var{components:t}=e,n=a(e,["components"]);return(0,o.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," in the Backstage app, you can configure TechDocs\nusing several options. This page serves as a reference to all the available\nconfiguration options for TechDocs."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-yaml"}),"# File: app-config.yaml\n\ntechdocs:\n  # techdocs.generator is used to configure how documentation sites are generated using MkDocs.\n\n  generator:\n    # techdocs.generator.runIn can be either 'docker' or 'local'. This is to determine how to run the generator - whether to\n    # spin up the techdocs-container docker image or to run mkdocs locally (assuming all the dependencies are taken care of).\n    # You want to change this to 'local' if you are running Backstage using your own custom Docker setup and want to avoid running\n    # into Docker in Docker situation. Read more here\n    # https://backstage.io/docs/features/techdocs/getting-started#disable-docker-in-docker-situation-optional\n\n    runIn: 'docker'\n\n    # (Optional) techdocs.generator.dockerImage can be used to control the docker image used during documentation generation. This can be useful\n    # if you want to use MkDocs plugins or other packages that are not included in the default techdocs-container (spotify/techdocs).\n    # NOTE: This setting is only used when techdocs.generator.runIn is set to 'docker'.\n\n    dockerImage: 'spotify/techdocs'\n\n    # (Optional) techdocs.generator.pullImage can be used to disable pulling the latest docker image by default. This can be useful when you are\n    # using a custom techdocs.generator.dockerImage and you have a custom docker login requirement. For example, you need to login to\n    # AWS ECR to pull the docker image.\n    # NOTE: Disabling this requires the docker image was pulled by other means before running the techdocs generator.\n\n    pullImage: true\n\n    mkdocs:\n      # (Optional)  techdocs.generator.omitTechdocsCoreMkdocsPlugin can be used to disable automatic addition of techdocs-core plugin to the mkdocs.yaml files.\n      # Defaults to false, which means that the techdocs-core plugin is always added to the mkdocs file.\n      omitTechdocsCorePlugin: false\n\n      # (Optional and not recommended) Configures the techdocs generator to\n      # attempt to ensure an index.md exists falling back to using <docs-dir>/README.md\n      # or README.md in case a default <docs-dir>/index.md is not provided.\n      # Note that https://www.mkdocs.org/user-guide/configuration/#edit_uri behavior\n      # will be broken in these scenarios.\n      legacyCopyReadmeMdToIndexMd: false\n\n  # techdocs.builder can be either 'local' or 'external'.\n  # Using the default build strategy, if builder is set to 'local' and you open a TechDocs page,\n  # techdocs-backend will try to generate the docs, publish to storage and show the generated docs afterwards.\n  # This is the \"Basic\" setup of the TechDocs Architecture.\n  # Using the default build strategy, if builder is set to 'external' (or anything other than 'local'), techdocs-backend\n  # will only fetch the docs and will NOT try to generate and publish.\n  # In this case, we assume that docs are being built by an external process (e.g. in the CI/CD pipeline of the repository).\n  # This is the \"Recommended\" setup of the architecture.\n  # Note that custom build strategies may alter this behaviour.\n  # Read more about the \"Basic\" and \"Recommended\" setups here https://backstage.io/docs/features/techdocs/architecture\n  # Read more about build strategies here: https://backstage.io/docs/features/techdocs/concepts#techdocs-build-strategy\n\n  builder: 'local'\n\n  # techdocs.publisher is used to configure the Storage option, whether you want to use the local filesystem to store generated docs\n  # or you want to use External storage providers like Google Cloud Storage, AWS S3, etc.\n\n  publisher:\n    # techdocs.publisher.type can be - 'local' or 'googleGcs' or 'awsS3' or 'azureBlobStorage'.\n    # When set to 'local', techdocs-backend will create a 'static' directory at its root to store generated documentation files.\n    # When set to 'googleGcs', techdocs-backend will use a Google Cloud Storage Bucket to store generated documentation files.\n    # When set to 'awsS3', techdocs-backend will use an Amazon Web Service (AWS) S3 bucket to store generated documentation files.\n\n    type: 'local'\n\n    # Optional when techdocs.publisher.type is set to 'local'.\n\n    local:\n      # (Optional). Set this to specify where the generated documentation is stored.\n      publishDirectory: '/path/to/local/directory'\n\n    # Required when techdocs.publisher.type is set to 'googleGcs'. Skip otherwise.\n\n    googleGcs:\n      # (Required) Cloud Storage Bucket Name\n      bucketName: 'techdocs-storage'\n\n      # (Optional) Location in storage bucket to save files\n      # If not set, the default location will be the root of the storage bucket\n      bucketRootPath: '/'\n\n      # (Optional) An API key is required to write to a storage bucket.\n      # If missing, GOOGLE_APPLICATION_CREDENTIALS environment variable will be used.\n      # https://cloud.google.com/docs/authentication/production\n      credentials:\n        $file: '/path/to/google_application_credentials.json'\n\n    # Required when techdocs.publisher.type is set to 'awsS3'. Skip otherwise.\n\n    awsS3:\n      # (Required) AWS S3 Bucket Name\n      bucketName: 'techdocs-storage'\n\n      # (Optional) Location in storage bucket to save files\n      # If not set, the default location will be the root of the storage bucket\n      bucketRootPath: '/'\n\n      # (Optional) The AWS account ID where the storage bucket is located.\n      # Credentials for the account ID must be configured in the 'aws' app config section.\n      # See the integration-aws-node package for details on how to configure credentials in\n      # the 'aws' app config section.\n      # https://www.npmjs.com/package/@backstage/integration-aws-node\n      # If account ID is not set and no credentials are set, environment variables or aws config file will be used to authenticate.\n      # https://www.npmjs.com/package/@aws-sdk/credential-provider-node\n      # https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-credentials-node.html\n      accountId: ${TECHDOCS_AWSS3_ACCOUNT_ID}\n\n      # (Optional) AWS credentials to use to write to the storage bucket.\n      # This configuration section is now deprecated.\n      # Configuring the account ID is now preferred, with credentials in the 'aws' app config section.\n      # If credentials are not set and no account ID is set, environment variables or aws config file will be used to authenticate.\n      # https://www.npmjs.com/package/@aws-sdk/credential-provider-node\n      # https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-credentials-node.html\n      credentials:\n        accessKeyId: ${TECHDOCS_AWSS3_ACCESS_KEY_ID_CREDENTIAL}\n        secretAccessKey: ${TECHDOCS_AWSS3_SECRET_ACCESS_KEY_CREDENTIAL}\n\n      # (Optional) AWS Region of the bucket.\n      # If not set, AWS_REGION environment variable or aws config file will be used.\n      # https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-region.html\n      region: ${AWS_REGION}\n\n      # (Optional) Endpoint URI to send requests to.\n      # If not set, the default endpoint is built from the configured region.\n      # https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/s3clientconfig.html#endpoint\n      endpoint: ${AWS_ENDPOINT}\n\n      # (Optional) HTTPS proxy to use for S3 Requests\n      # Defaults to using no proxy\n      # This allows docs to be published and read from behind a proxy\n      httpsProxy: ${HTTPS_PROXY}\n\n      # (Optional) Whether to use path style URLs when communicating with S3.\n      # Defaults to false.\n      # This allows providers like LocalStack, Minio and Wasabi (and possibly others) to be used to host tech docs.\n      s3ForcePathStyle: false\n\n      # (Optional) AWS Server Side Encryption\n      # Defaults to undefined.\n      # If not set, encrypted buckets will fail to publish.\n      # https://docs.aws.amazon.com/AmazonS3/latest/userguide/specifying-s3-encryption.html\n      sse: 'aws:kms' # or AES256\n\n    # Required when techdocs.publisher.type is set to 'azureBlobStorage'. Skip otherwise.\n\n    azureBlobStorage:\n      # (Required) Azure Blob Storage Container Name\n      containerName: 'techdocs-storage'\n\n      # (Required) An account name is required to write to a storage blob container.\n      # https://docs.microsoft.com/en-us/rest/api/storageservices/authorize-with-shared-key\n      credentials:\n        accountName: ${TECHDOCS_AZURE_BLOB_STORAGE_ACCOUNT_NAME}\n        # (Optional) An account key is required to write to a storage container.\n        # If missing,AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET environment variable will be used.\n        # https://docs.microsoft.com/en-us/azure/storage/common/storage-auth?toc=/azure/storage/blobs/toc.json\n        accountKey: ${TECHDOCS_AZURE_BLOB_STORAGE_ACCOUNT_KEY}\n\n  # (Optional and not recommended) Prior to version [0.x.y] of TechDocs, docs\n  # sites could only be accessed over paths with case-sensitive entity triplets\n  # e.g. (namespace/Kind/name). If you are upgrading from an older version of\n  # TechDocs and are unable to perform the necessary migration of files in your\n  # external storage, you can set this value to `true` to temporarily revert to\n  # the old, case-sensitive entity triplet behavior.\n  legacyUseCaseSensitiveTripletPaths: false\n\n  # techdocs.cache is optional, and is only recommended when you've configured\n  # an external techdocs.publisher.type above. Also requires backend.cache to\n  # be configured with a valid cache store. Configure techdocs.cache.ttl to\n  # enable caching of techdocs assets.\n  cache:\n    # Represents the number of milliseconds a statically built asset should\n    # stay cached. Cache invalidation is handled automatically by the frontend,\n    # which compares the build times in cached metadata vs. canonical storage,\n    # allowing long TTLs (e.g. 1 month/year)\n    ttl: 3600000\n\n    # (Optional) The time (in milliseconds) that the TechDocs backend will wait\n    # for a cache service to respond before continuing on as though the cached\n    # object was not found (e.g. when the cache sercice is unavailable). The\n    # default value is 1000\n    readTimeout: 500\n")))}h.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(r){return!1}}()?Object.assign:function(e,a){for(var i,s,c=r(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))n.call(i,u)&&(c[u]=i[u]);if(t){s=t(i);for(var d=0;d<s.length;d++)o.call(i,s[d])&&(c[s[d]]=i[s[d]])}}return c}},541535:(e,t,n)=>{var o=n(862525),r=60103,a=60106;var i=60109,s=60110,c=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;r=d("react.element"),a=d("react.portal"),d("react.fragment"),d("react.strict_mode"),d("react.profiler"),i=d("react.provider"),s=d("react.context"),c=d("react.forward_ref"),d("react.suspense"),l=d("react.memo"),u=d("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var w=y.prototype=new b;w.constructor=y,o(w,m.prototype),w.isPureReactComponent=!0;var v={current:null},k=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,o)&&!O.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:r,type:e,key:i,ref:s,props:a,_owner:v.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,o,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case a:c=!0}}if(c)return i=i(c=e),e=""===o?"."+_(c,0):o,Array.isArray(i)?(n="",null!=e&&(n=e.replace(E,"$&/")+"/"),C(i,t,n,"",(function(e){return e}))):null!=i&&(T(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+e)),t.push(i)),1;if(c=0,o=""===o?".":o+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=o+_(s=e[l],l);c+=C(s,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=C(s=s.value,t,n,u=o+_(s,l++),i);else if("object"===s)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function j(e,t,n){if(null==e)return e;var o=[],r=0;return C(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function D(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function I(){var e=A.current;if(null===e)throw Error(p(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
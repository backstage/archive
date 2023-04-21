/*! For license information please see dd8b883f.e53fc5c8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[879333],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},733899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});n(827378);var r=n(603905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"05-frontend-authorization",title:"5. Frontend Components with Authorization",description:"Placing frontend components behind authorization"},l=void 0,u={unversionedId:"permissions/plugin-authors/05-frontend-authorization",id:"permissions/plugin-authors/05-frontend-authorization",title:"5. Frontend Components with Authorization",description:"Placing frontend components behind authorization",source:"@site/../docs/permissions/plugin-authors/05-frontend-authorization.md",sourceDirName:"permissions/plugin-authors",slug:"/permissions/plugin-authors/05-frontend-authorization",permalink:"/v1.13.0/docs/permissions/plugin-authors/05-frontend-authorization",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/permissions/plugin-authors/05-frontend-authorization.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"05-frontend-authorization",title:"5. Frontend Components with Authorization",description:"Placing frontend components behind authorization"},sidebar:"docs",previous:{title:"4. Authorizing access to paginated data",permalink:"/v1.13.0/docs/permissions/plugin-authors/04-authorizing-access-to-paginated-data"},next:{title:"Overview",permalink:"/v1.13.0/docs/deployment/"}},c={},p=[{value:"Using <code>usePermission</code>",id:"using-usepermission",level:2},{value:"Using <code>RequirePermission</code>",id:"using-requirepermission",level:2}],d={toc:p};function h(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the previous sections, we learned how to protect our plugin's backend API routes with the permission framework. Most routes that return some data to be displayed (such as our ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /todos")," route) need no additional changes on the frontend, as the backend will simply return an empty list or a ",(0,r.kt)("inlineCode",{parentName:"p"},"404"),". However, for UI elements that trigger a mutative action, it's common practice to hide or disable them when a user doesn't have permission."),(0,r.kt)("p",null,'Take, for example, the "Add" button in our todo list application. When a user clicks this button, the frontend makes a ',(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/todos")," route of our backend. If a user tries to add a todo but is not authorized, they will have no way of knowing this until they perform the action and are faced with an error. This is a poor user experience. We can do better by disabling the add button."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Placing frontend components behind authorization cannot take the place of placing your backend routes behind authorization. Authorization checks on the frontend should be used in ",(0,r.kt)("em",{parentName:"p"},"addition")," to the corresponding backend authorization, as an improvement to the user experience. If you do not place your backend route behind authorization, a malicious actor can still send a request to the route even if you disabled the corresponding frontend component.")),(0,r.kt)("h2",{id:"using-usepermission"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"usePermission")),(0,r.kt)("p",null,"Let's start by adding the packages we will need:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn workspace @internal/plugin-todo-list \\\n  add @backstage/plugin-permission-react @internal/plugin-todo-list-common\n")),(0,r.kt)("p",null,"Let's make the following changes in ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/todo-list/src/components/TodoListPage/TodoListPage.tsx"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="plugins/todo-list/src/components/TodoListPage/TodoListPage.tsx"',title:'"plugins/todo-list/src/components/TodoListPage/TodoListPage.tsx"'},'import {\n  alertApiRef,\n  discoveryApiRef,\n  fetchApiRef,\n  useApi,\n} from \'@backstage/core-plugin-api\';\n/* highlight-add-start */\nimport { usePermission } from \'@backstage/plugin-permission-react\';\nimport { todoListCreatePermission } from \'@internal/plugin-todo-list-common\';\n/* highlight-add-end */\n\nfunction AddTodo({ onAdd }: { onAdd: (title: string) => any }) {\n  const title = useRef(\'\');\n  /* highlight-add-next-line */\n  const { loading: loadingPermission, allowed: canAddTodo } = usePermission({\n    permission: todoListCreatePermission,\n  });\n\n  return (\n    <>\n      <Typography variant="body1">Add todo</Typography>\n      <Box\n        component="span"\n        alignItems="flex-end"\n        display="flex"\n        flexDirection="row"\n      >\n        <TextField\n          placeholder="Write something here..."\n          onChange={e => (title.current = e.target.value)}\n        />\n        {/* highlight-remove-start */}\n        <Button variant="contained" onClick={handleAdd}>\n          Add\n        </Button>\n        {/* highlight-remove-end */}\n        {/* highlight-add-start */}\n        {!loadingPermission && (\n          <Button\n            disabled={!canAddTodo}\n            variant="contained"\n            onClick={() => onAdd(title.current)}\n          >\n            Add\n          </Button>\n        )}\n        {/* highlight-add-end */}\n      </Box>\n    </>\n  );\n}\n')),(0,r.kt)("p",null,"Here we are using the ",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/reference/plugin-permission-react.usepermission"},(0,r.kt)("inlineCode",{parentName:"a"},"usePermission")," hook")," to communicate with the permission policy and receive a decision on whether this user is authorized to create a todo list item."),(0,r.kt)("p",null,"It's really that simple! Let's change our policy to test the disabled button:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages/backend/src/plugins/permission.ts"',title:'"packages/backend/src/plugins/permission.ts"'},"if (isPermission(request.permission, todoListCreatePermission)) {\n  return {\n    /* highlight-remove-next-line */\n    result: AuthorizeResult.ALLOW,\n    /* highlight-add-next-line */\n    result: AuthorizeResult.DENY,\n  };\n}\n")),(0,r.kt)("p",null,"And now you should see that you are not able to create a todo item from the frontend!"),(0,r.kt)("h2",{id:"using-requirepermission"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"RequirePermission")),(0,r.kt)("p",null,"Providing a disabled state can be a helpful signal to users, but there may be cases where hiding the element is preferred. For such cases, you can use the provided ",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/reference/plugin-permission-react.requirepermission"},(0,r.kt)("inlineCode",{parentName:"a"},"RequirePermission")," component"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="plugins/todo-list/src/components/TodoListPage/TodoListPage.tsx"',title:'"plugins/todo-list/src/components/TodoListPage/TodoListPage.tsx"'},'import {\n  alertApiRef,\n  discoveryApiRef,\n  fetchApiRef,\n  useApi,\n} from \'@backstage/core-plugin-api\';\n/* highlight-remove-next-line */\nimport { usePermission } from \'@backstage/plugin-permission-react\';\n/* highlight-add-next-line */\nimport { RequirePermission } from \'@backstage/plugin-permission-react\';\nimport { todoListCreatePermission } from \'@internal/plugin-todo-list-common\';\n\nexport const TodoListPage = () => {\n  // ..\n  <Grid container spacing={3} direction="column">\n    {/* highlight-remove-start */}\n    <Grid item>\n      <AddTodo onAdd={handleAdd} />\n    </Grid>\n    {/* highlight-remove-end */}\n    {/* highlight-add-start */}\n    <RequirePermission permission={todoListCreatePermission} errorPage={<></>}>\n      <Grid item>\n        <AddTodo onAdd={handleAdd} />\n      </Grid>\n    </RequirePermission>\n    {/* highlight-add-end */}\n    <Grid item>\n      <TodoList key={key} onEdit={setEdit} />\n    </Grid>\n  </Grid>;\n};\n\nfunction AddTodo({ onAdd }: { onAdd: (title: string) => any }) {\n  const title = useRef(\'\');\n  /* highlight-remove-next-line */\n  const { loading: loadingPermission, allowed: canAddTodo } = usePermission({\n    permission: todoListCreatePermission,\n  });\n\n  return (\n    <>\n      <Typography variant="body1">Add todo</Typography>\n      <Box\n        component="span"\n        alignItems="flex-end"\n        display="flex"\n        flexDirection="row"\n      >\n        <TextField\n          placeholder="Write something here..."\n          onChange={e => (title.current = e.target.value)}\n        />\n        {/* highlight-remove-start */}\n        {!loadingPermission && (\n          <Button\n            disabled={!canAddTodo}\n            variant="contained"\n            onClick={() => onAdd(title.current)}\n          >\n            Add\n          </Button>\n        )}\n        {/* highlight-remove-end */}\n        {/* highlight-add-start */}\n        <Button variant="contained" onClick={() => onAdd(title.current)}>\n          Add\n        </Button>\n        {/* highlight-add-end */}\n      </Box>\n    </>\n  );\n}\n')),(0,r.kt)("p",null,"Now you should find that the component for adding a todo list item does not render at all. Success!"),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"RequirePermission")," to prevent access to routes as well. Here's how that would look in your ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/app/src/App.tsx"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',title:'"packages/app/src/App.tsx"'},'/* highlight-add-start */\nimport { RequirePermission } from \'@backstage/plugin-permission-react\';\nimport { todoListCreatePermission } from \'@internal/plugin-todo-list-common\';\n/* highlight-add-end */\n\nconst routes = (\n  <FlatRoutes>\n    <Route path="/search" element={<SearchPage />}>\n      {searchPage}\n    </Route>\n    <Route path="/settings" element={<UserSettingsPage />} />\n    {/* highlight-add-next-line */}\n    <Route path="/todo-list" element={\n      {/* You might want to create a "read" permission for this, we are just using this one as an example */}\n      {/* highlight-add-start */}\n      <RequirePermission permission={todoListCreatePermission}>\n        <TodoListPage />\n      </RequirePermission>\n      {/* highlight-add-end */}}\n      {/* ... */}\n    </Route>\n  </FlatRoutes>\n);\n')),(0,r.kt)("p",null,"Now if you try to navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://localhost:3000/todo-list")," you'll get and error page if you do not have permission."))}h.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,s,l=o(e),u=1;u<arguments.length;u++){for(var c in a=Object(arguments[u]))n.call(a,c)&&(l[c]=a[c]);if(t){s=t(a);for(var p=0;p<s.length;p++)r.call(a,s[p])&&(l[s[p]]=a[s[p]])}}return l}},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;var a=60109,s=60110,l=60112;var u=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),i=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),a=p("react.provider"),s=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),c=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function g(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=g.prototype;var k=b.prototype=new y;k.constructor=b,r(k,g.prototype),k.isPureReactComponent=!0;var v={current:null},P=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,i={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)P.call(t,r)&&!w.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:v.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var A=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return a=a(l=e),e=""===r?"."+x(l,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(A,"$&/")+"/"),C(a,t,n,"",(function(e){return e}))):null!=a&&(j(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(A,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var c=r+x(s=e[u],u);l+=C(s,t,n,c,a)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)l+=C(s=s.value,t,n,c=r+x(s,u++),a);else if("object"===s)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function T(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function N(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function S(){var e=R.current;if(null===e)throw Error(h(321));return e}},827378:(e,t,n)=>{n(541535)}}]);
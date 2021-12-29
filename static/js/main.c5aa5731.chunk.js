(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{119:function(t,e,n){},120:function(t,e,n){},146:function(t,e,n){"use strict";n.r(e);var a,i,o=n(0),s=n.n(o),c=n(33),d=n.n(c),r=(n(119),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,207)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),a(t),i(t),o(t),s(t)}))}),l=(n(120),n(18)),u=n(24),j=n(92),b=n.n(j).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"450eba89-6cf8-49a4-b3d7-e2348a11fbcd"}}),f=function(){return b.get("todo-lists")},h=function(t){return b.post("todo-lists",{title:t})},O=function(t){return b.delete("todo-lists/".concat(t))},p=function(t,e){return b.put("todo-lists/".concat(t),{title:e})},m=function(t){return b.get("todo-lists/".concat(t,"/tasks"))},g=function(t,e){return b.delete("todo-lists/".concat(t,"/tasks/").concat(e))},x=function(t,e){return b.post("todo-lists/".concat(t,"/tasks"),{title:e})},v=function(t,e,n){return b.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},k=function(t){return b.post("auth/login",t)},C=function(){return b.get("auth/me")},T=function(){return b.delete("auth/login")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(i||(i={}));var y=function(t,e){t.messages.length?e(N({error:t.messages[0]})):e(N({error:"Some error occurred"})),e(D({status:"failed"}))},I=function(t,e){e(N({error:t.message?t.message:"Some error occurred"})),e(D({status:"failed"}))},A=n(31),w=Object(A.c)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.value}}}),S=w.reducer,F=w.actions.setIsLoggedInAC,L=Object(A.c)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppErrorAC:function(t,e){t.error=e.payload.error},setAppStatusAC:function(t,e){t.status=e.payload.status},setInitializedAC:function(t,e){t.isInitialized=e.payload.status}}}),E=L.reducer,P=L.actions,N=P.setAppErrorAC,D=P.setAppStatusAC,R=P.setInitializedAC,z=Object(A.c)({name:"todolists",initialState:[],reducers:{removeTodolistAC:function(t,e){var n=t.findIndex((function(t){return t.id===e.payload.id}));n>-1&&t.splice(n,1)},addTodolistAC:function(t,e){t.unshift(Object(u.a)(Object(u.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))},changeTodolistTitleAC:function(t,e){var n=t.findIndex((function(t){return t.id===e.payload.id}));t[n].title=e.payload.title},changeTodolistFilterAC:function(t,e){var n=t.findIndex((function(t){return t.id===e.payload.id}));t[n].filter=e.payload.filter},changeTodolistEntityStatusAC:function(t,e){var n=t.findIndex((function(t){return t.id===e.payload.id}));t[n].entityStatus=e.payload.status},setTodolistsAC:function(t,e){return e.payload.todolists.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{filter:"all",entityStatus:"idle"})}))}},extraReducers:{}}),M=z.reducer,U=z.actions,q=U.removeTodolistAC,B=U.addTodolistAC,H=U.changeTodolistTitleAC,Z=U.changeTodolistFilterAC,J=U.changeTodolistEntityStatusAC,K=U.setTodolistsAC,_=(Object(A.b)("tasks/fetchTasks",(function(t,e){e.dispatch(D({status:"loading"})),m(t).then((function(n){var a=n.data.items;e.dispatch(W({tasks:a,todolistId:t})),e.dispatch(D({status:"succeeded"}))}))})),Object(A.c)({name:"tasks",initialState:{},reducers:{removeTaskAC:function(t,e){var n=t[e.payload.todolistId],a=n.findIndex((function(t){return t.id===e.payload.taskId}));a>-1&&n.splice(a,1)},addTaskAC:function(t,e){t[e.payload.task.todoListId].unshift(e.payload.task)},updateTaskAC:function(t,e){var n=t[e.payload.todolistId],a=n.findIndex((function(t){return t.id===e.payload.taskId}));a>-1&&(n[a]=Object(u.a)(Object(u.a)({},n[a]),e.payload.model))},setTasksAC:function(t,e){t[e.payload.todolistId]=e.payload.tasks}},extraReducers:function(t){t.addCase(B,(function(t,e){t[e.payload.todolist.id]=[]})),t.addCase(q,(function(t,e){delete t[e.payload.id]})),t.addCase(K,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))}))}})),G=_.reducer,V=_.actions,Y=V.removeTaskAC,$=V.addTaskAC,Q=V.updateTaskAC,W=V.setTasksAC,X=function(t,e,n){return function(a,i){var o=i().tasks[n].find((function(e){return e.id===t}));if(o){var s=Object(u.a)({deadline:o.deadline,description:o.description,priority:o.priority,startDate:o.startDate,title:o.title,status:o.status},e);v(n,t,s).then((function(i){if(0===i.data.resultCode){var o=Q({taskId:t,model:e,todolistId:n});a(o)}else y(i.data,a)})).catch((function(t){I(t,a)}))}else console.warn("task not found in the state")}},tt=n(196),et=n(203),nt=n(13),at=n(188),it=n(197),ot=n(195),st=n(2),ct=s.a.memo((function(t){var e=t.addItem,n=t.disabled,a=void 0!==n&&n;console.log("AddItemForm called");var i=Object(o.useState)(""),s=Object(nt.a)(i,2),c=s[0],d=s[1],r=Object(o.useState)(null),l=Object(nt.a)(r,2),u=l[0],j=l[1],b=function(){""!==c.trim()?(e(c),d("")):j("Title is required")};return Object(st.jsxs)("div",{children:[Object(st.jsx)(at.a,{variant:"outlined",disabled:a,error:!!u,value:c,onChange:function(t){d(t.currentTarget.value)},onKeyPress:function(t){null!==u&&j(null),13===t.charCode&&b()},label:"Title",helperText:u}),Object(st.jsx)(it.a,{color:"primary",onClick:b,disabled:a,children:Object(st.jsx)(ot.a,{children:"+"})})]})})),dt=n(101),rt=s.a.memo((function(t){console.log("EditableSpan called");var e=Object(o.useState)(!1),n=Object(nt.a)(e,2),a=n[0],i=n[1],s=Object(o.useState)(t.value),c=Object(nt.a)(s,2),d=c[0],r=c[1];return a?Object(st.jsx)(at.a,{value:d,onChange:function(t){r(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.onChange(d)}}):Object(st.jsx)("span",{onDoubleClick:function(){i(!0),r(t.value)},children:t.value})})),lt=n(190),ut=s.a.memo((function(t){var e=Object(o.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(o.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(o.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(st.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(st.jsx)(lt.a,{checked:t.task.status===a.Completed,color:"primary",onChange:n}),Object(st.jsx)(rt,{value:t.task.title,onChange:i}),Object(st.jsx)(it.a,{onClick:e,children:Object(st.jsx)(ot.a,{children:"x"})})]},t.task.id)})),jt=s.a.memo((function(t){var e=t.demo,n=void 0!==e&&e,i=Object(dt.a)(t,["demo"]);console.log("Todolist called");var s=Object(l.b)();Object(o.useEffect)((function(){if(!n){var t,e=(t=i.todolist.id,function(e){e(D({status:"loading"})),m(t).then((function(n){var a=n.data.items;e(W({tasks:a,todolistId:t})),e(D({status:"succeeded"}))}))});s(e)}}),[]);var c=Object(o.useCallback)((function(t){i.addTask(t,i.todolist.id)}),[i.addTask,i.todolist.id]),d=Object(o.useCallback)((function(t){i.changeTodolistTitle(i.todolist.id,t)}),[i.todolist.id,i.changeTodolistTitle]),r=Object(o.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),u=Object(o.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),j=Object(o.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),b=i.tasks;return"active"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===a.New}))),"completed"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===a.Completed}))),Object(st.jsxs)("div",{children:[Object(st.jsxs)("h3",{children:[Object(st.jsx)(rt,{value:i.todolist.title,onChange:d}),Object(st.jsx)(it.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus,children:Object(st.jsx)(ot.a,{children:"x"})})]}),Object(st.jsx)(ct,{addItem:c,disabled:"loading"===i.todolist.entityStatus}),Object(st.jsx)("div",{children:b.map((function(t){return Object(st.jsx)(ut,{task:t,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus},t.id)}))}),Object(st.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(st.jsx)(ot.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:r,color:"inherit",children:"All"}),Object(st.jsx)(ot.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:u,color:"primary",children:"Active"}),Object(st.jsx)(ot.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:j,color:"secondary",children:"Completed"})]})]})})),bt=n(14),ft=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(l.c)((function(t){return t.todolists})),i=Object(l.c)((function(t){return t.tasks})),s=Object(l.c)((function(t){return t.auth.isLoggedIn})),c=Object(l.b)();Object(o.useEffect)((function(){if(!n&&s){var t=function(t){t(D({status:"loading"})),f().then((function(e){t(K({todolists:e.data})),t(D({status:"succeeded"}))}))};c(t)}}),[]);var d=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){g(e,t).then((function(a){var i=Y({taskId:t,todolistId:e});n(i)}))}}(t,e);c(n)}),[]),r=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){n(D({status:"loading"})),x(e,t).then((function(t){if(0===t.data.resultCode){var e=t.data.data.item,a=$({task:e});n(a),n(D({status:"succeeded"}))}else y(t.data,n)})).catch((function(t){I(t,n)}))}}(t,e);c(n)}),[]),u=Object(o.useCallback)((function(t,e,n){var a=X(t,{status:e},n);c(a)}),[]),j=Object(o.useCallback)((function(t,e,n){var a=X(t,{title:e},n);c(a)}),[]),b=Object(o.useCallback)((function(t,e){var n=Z({id:e,filter:t});c(n)}),[]),m=Object(o.useCallback)((function(t){var e,n=(e=t,function(t){t(D({status:"loading"})),t(J({id:e,status:"loading"})),O(e).then((function(n){t(q({id:e})),t(D({status:"succeeded"}))}))});c(n)}),[]),v=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){p(t,e).then((function(a){n(H({id:t,title:e}))}))}}(t,e);c(n)}),[]),k=Object(o.useCallback)((function(t){var e=function(t){return function(e){e(D({status:"loading"})),h(t).then((function(t){e(B({todolist:t.data.data.item})),e(D({status:"succeeded"}))}))}}(t);c(e)}),[c]);return s?Object(st.jsxs)(st.Fragment,{children:[Object(st.jsx)(tt.a,{container:!0,style:{padding:"20px"},children:Object(st.jsx)(ct,{addItem:k})}),Object(st.jsx)(tt.a,{container:!0,spacing:3,children:a.map((function(t){var e=i[t.id];return Object(st.jsx)(tt.a,{item:!0,children:Object(st.jsx)(et.a,{style:{padding:"10px"},children:Object(st.jsx)(jt,{todolist:t,tasks:e,removeTask:d,changeFilter:b,addTask:r,changeTaskStatus:u,removeTodolist:m,changeTaskTitle:j,changeTodolistTitle:v,demo:n})})},t.id)}))})]}):Object(st.jsx)(bt.a,{to:"login"})},ht=n(199),Ot=n(200),pt=n(198),mt=n(202),gt=n(201),xt=n(192),vt=n(191),kt=s.a.forwardRef((function(t,e){return Object(st.jsx)(vt.a,Object(u.a)({elevation:6,ref:e,variant:"filled"},t))}));function Ct(){var t=Object(l.c)((function(t){return t.app.error})),e=Object(l.b)(),n=function(t,n){"clickaway"!==n&&e(N({error:null}))};return Object(st.jsx)(xt.a,{open:null!==t,autoHideDuration:6e3,onClose:n,children:Object(st.jsx)(kt,{onClose:n,severity:"error",sx:{width:"100%"},children:t})})}var Tt=n(193),yt=n(205),It=n(204),At=n(185),wt=n(100),St=function(){var t=Object(l.c)((function(t){return t.auth.isLoggedIn})),e=Object(l.b)(),n=Object(wt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<3&&(e.password="Min length is 4 symbols"):e.password="Required",e},onSubmit:function(t){var n;e((n=t,function(t){t(D({status:"loading"})),k(n).then((function(e){0===e.data.resultCode?(t(F({value:!0})),t(D({status:"succeeded"}))):y(e.data,t)})).catch((function(e){I(e,t)}))}))}});return t?Object(st.jsx)(bt.a,{to:"/"}):Object(st.jsx)(tt.a,{container:!0,justifyContent:"center",children:Object(st.jsx)(tt.a,{item:!0,justifyContent:"center",children:Object(st.jsxs)(Tt.a,{children:[Object(st.jsxs)(At.a,{children:[Object(st.jsxs)("p",{children:["To log in get registered",Object(st.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(st.jsx)("p",{children:"or use common test account credentials:"}),Object(st.jsx)("p",{children:"Email: sa.kozh@yandex.ru"}),Object(st.jsx)("p",{children:"Password: 123456789"})]}),Object(st.jsx)("form",{onSubmit:n.handleSubmit,children:Object(st.jsxs)(It.a,{children:[Object(st.jsx)(at.a,Object(u.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),n.touched.email&&n.errors.email?Object(st.jsx)("div",{style:{color:"red"},children:n.errors.email}):null,Object(st.jsx)(at.a,Object(u.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.touched.password&&n.errors.password?Object(st.jsx)("div",{style:{color:"red"},children:n.errors.password}):null,Object(st.jsx)(yt.a,{label:"Remember me",control:Object(st.jsx)(lt.a,Object(u.a)({},n.getFieldProps("rememberMe")))}),Object(st.jsx)(ot.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})})]})})})},Ft=n(206);var Lt=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(l.b)();Object(o.useEffect)((function(){a((function(t){C().then((function(e){0===e.data.resultCode&&t(F({value:!0}))})).finally((function(){return t(R({status:!0}))}))}))}),[]);var i=Object(l.c)((function(t){return t.app.status})),s=Object(l.c)((function(t){return t.app.isInitialized})),c=Object(l.c)((function(t){return t.auth.isLoggedIn}));return s?Object(st.jsxs)("div",{className:"App",children:[Object(st.jsx)(Ct,{}),Object(st.jsxs)(ht.a,{position:"static",children:[Object(st.jsxs)(Ot.a,{children:[Object(st.jsx)(it.a,{edge:"start",color:"inherit","aria-label":"menu"}),Object(st.jsx)(pt.a,{variant:"h6",children:"News"}),c?Object(st.jsx)(ot.a,{color:"inherit",onClick:function(){a((function(t){T().then((function(e){0===e.data.resultCode&&t(F({value:!1}))}))}))},children:"Logout"}):null]}),"loading"===i&&Object(st.jsx)(gt.a,{})]}),Object(st.jsx)(mt.a,{fixed:!0,children:Object(st.jsxs)(bt.d,{children:[Object(st.jsx)(bt.b,{path:"/",element:Object(st.jsx)(ft,{demo:n})}),Object(st.jsx)(bt.b,{path:"login",element:Object(st.jsx)(St,{})}),Object(st.jsx)(bt.b,{path:"404",element:Object(st.jsx)("h1",{children:"404: PAGE NOT FOUND"})}),Object(st.jsx)(bt.b,{path:"*",element:Object(st.jsx)(bt.a,{to:"/404"})})]})})]}):Object(st.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(st.jsx)(Ft.a,{})})},Et=n(29),Pt=n(56),Nt=Object(Et.b)({tasks:G,todolists:M,app:E,auth:S}),Dt=Object(A.a)({reducer:Nt,middleware:function(t){return t().prepend(Pt.a)}});window.store=Dt;var Rt=n(53);d.a.render(Object(st.jsx)(s.a.StrictMode,{children:Object(st.jsx)(Rt.a,{children:Object(st.jsx)(l.a,{store:Dt,children:Object(st.jsx)(Lt,{})})})}),document.getElementById("root")),r()}},[[146,1,2]]]);
//# sourceMappingURL=main.c5aa5731.chunk.js.map
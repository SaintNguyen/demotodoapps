(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(0),n=c.n(a),r=c(16),i=c.n(r),l=(c(39),c(40),c(5)),j=c(14),o=c(25),d=function(e){var t=e.children,c=Object(a.useState)(!1),n=Object(l.a)(c,2),r=n[0],i=n[1],d=Object(a.useState)([]),b=Object(l.a)(d,2),h=(b[0],b[1]),x=Object(a.useState)(!1),O=Object(l.a)(x,2),u=O[0],m=O[1];Object(a.useEffect)((function(){var e=localStorage.getItem("taskList");if(e){var t=JSON.parse(e);h(t)}}),[]);var p=[{path:"/",name:"Dashboard",icon:Object(s.jsx)(j.e,{})},{path:"/about",name:"About",icon:Object(s.jsx)(j.g,{})},{path:"/comment",name:"Comment",icon:Object(s.jsx)(j.b,{})},{path:"/analytics",name:"Analytics",icon:Object(s.jsx)(j.c,{})},{path:"/product",name:"Product",icon:Object(s.jsx)(j.d,{})},{path:"/productList",name:"Product List",icon:Object(s.jsx)(j.f,{})}];return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{style:{width:u?"200px":"50px"},className:"sidebar",children:[Object(s.jsxs)("div",{className:"top_section",children:[Object(s.jsx)("h1",{style:{display:u?"block":"none"},className:"gradient-text",children:"TODO"}),Object(s.jsx)("div",{style:{marginLeft:"-2px"},className:"bars",children:Object(s.jsx)(j.a,{onClick:function(){i(!r),m(!u)}})})]}),p.map((function(e,t){return Object(s.jsxs)(o.b,{to:e.path,className:"link",activeclassName:"active",children:[Object(s.jsx)("div",{className:"icon",children:e.icon}),Object(s.jsx)("h5",{style:{display:u?"block":"none",marginTop:"-15px"},className:"gradient-text",children:e.name})]},t)}))]}),Object(s.jsx)("main",{children:t})]})})},b=(c(42),c(43),c(4)),h=c(58),x=c(54),O=c(55),u=c(56),m=c(57),p=function(e){var t=e.modal,c=e.toggle,n=e.save,r=Object(a.useState)(""),i=Object(l.a)(r,2),j=i[0],o=i[1],d=Object(a.useState)(""),b=Object(l.a)(d,2),p=b[0],f=b[1],g=function(e){var t=e.target,c=t.name,s=t.value;"taskName"===c?o(s):f(s)};return Object(s.jsxs)(h.a,{isOpen:t,toggle:c,children:[Object(s.jsx)(x.a,{style:{"background-color":"#000"},toggle:c,children:Object(s.jsx)("h2",{className:"gradient-text",children:"Create Task"})}),Object(s.jsxs)(O.a,{style:{"background-color":"#000"},children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"gradient-text",children:Object(s.jsx)("h7",{children:"Task Name"})}),Object(s.jsx)("input",{type:"text",style:{"font-family":"Archivo Black, sans-serif","font-size":"20px"},className:"form-control",value:j,onChange:g,name:"taskName"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"gradient-text",children:Object(s.jsx)("h7",{children:"Description"})}),Object(s.jsx)("textarea",{rows:"5",style:{"font-family":"Great Vibes, cursive","font-size":"22px"},className:"form-control",value:p,onChange:g,name:"description"})]})]}),Object(s.jsxs)(u.a,{children:[Object(s.jsx)(m.a,{className:"button-85",role:"button",onClick:function(e){e.preventDefault();var t={};t.Name=j,t.Description=p,n(t)},children:Object(s.jsx)("h6",{className:"gradient-text",children:"Create"})})," ",Object(s.jsx)(m.a,{color:"secondary",onClick:c,children:Object(s.jsx)("h6",{children:"Cancel"})})]})]})},f=function(e){var t=e.modal,c=e.toggle,n=e.updateTask,r=e.taskObj,i=Object(a.useState)(""),j=Object(l.a)(i,2),o=j[0],d=j[1],b=Object(a.useState)(""),p=Object(l.a)(b,2),f=p[0],g=p[1],v=function(e){var t=e.target,c=t.name,s=t.value;"taskName"===c?d(s):g(s)};Object(a.useEffect)((function(){d(r.Name),g(r.Description)}),[]);return Object(s.jsxs)(h.a,{isOpen:t,toggle:c,children:[Object(s.jsx)(x.a,{style:{"background-color":"#000"},toggle:c,children:Object(s.jsx)("h2",{className:"gradient-text",children:"Update Task"})}),Object(s.jsxs)(O.a,{style:{"background-color":"#000"},children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"gradient-text",children:Object(s.jsx)("h7",{children:"Task Name"})}),Object(s.jsx)("input",{type:"text",style:{"font-family":"Archivo Black, sans-serif","font-size":"20px"},className:"form-control",value:o,onChange:v,name:"taskName"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"gradient-text",children:Object(s.jsx)("h7",{children:"Description"})}),Object(s.jsx)("textarea",{rows:"5",style:{"font-family":"Great Vibes, cursive","font-size":"22px"},className:"form-control",value:f,onChange:v,name:"description"})]})]}),Object(s.jsxs)(u.a,{children:[Object(s.jsx)(m.a,{className:"button-85",role:"button",onClick:function(e){e.preventDefault();var t={};t.Name=o,t.Description=f,n(t)},children:Object(s.jsx)("h6",{className:"gradient-text",children:"Update"})})," ",Object(s.jsx)(m.a,{color:"secondary",onClick:c,children:Object(s.jsx)("h6",{children:"Cancel"})})]})]})},g=function(e){var t=e.taskObj,c=e.index,n=e.deleteTask,r=e.updateListArray,i=Object(a.useState)(!1),j=Object(l.a)(i,2),o=j[0],d=j[1],b=[{primaryColor:"#5D93E1",secondaryColor:"#ECF3FC"},{primaryColor:"#F9D288",secondaryColor:"#FEFAF1"},{primaryColor:"#5DC250",secondaryColor:"#F2FAF1"},{primaryColor:"#F48687",secondaryColor:"#FDF1F1"},{primaryColor:"#B964F7",secondaryColor:"#F3F0FD"}];return Object(s.jsxs)("div",{class:"card-wrapper mr-5","data-aos":"zoom-in-right","data-aos-duration":"1200",children:[Object(s.jsx)("div",{class:"card-top",style:{"background-color":b[c%5].primaryColor}}),Object(s.jsxs)("div",{class:"task-holder",children:[Object(s.jsx)("span",{class:"card-header",style:{"background-color":b[c%5].secondaryColor,"border-radius":"10px"},children:t.Name}),Object(s.jsx)("textarea",{row:"5",className:"mt-3",style:{color:b[c%5].primaryColor},children:t.Description}),Object(s.jsxs)("div",{style:{position:"absolute",right:"20px",bottom:"20px"},children:[Object(s.jsx)("i",{class:"far fa-edit mr-3",style:{color:b[c%5].primaryColor,cursor:"pointer"},onClick:function(){return d(!0)}}),Object(s.jsx)("i",{class:"fas fa-trash-alt",style:{color:b[c%5].primaryColor,cursor:"pointer"},onClick:function(){n(c)}})]})]}),Object(s.jsx)(f,{modal:o,toggle:function(){d(!o)},updateTask:function(e){r(e,c)},taskObj:t})]})},v=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),i=Object(l.a)(r,2),j=i[0],o=i[1];Object(a.useEffect)((function(){var e=localStorage.getItem("taskList");if(e){var t=JSON.parse(e);o(t)}}),[]);var d=function(e){var t=j;t.splice(e,1),localStorage.setItem("taskList",JSON.stringify(t)),o(t),window.location.reload()},b=function(e,t){var c=j;c[t]=e,localStorage.setItem("taskList",JSON.stringify(c)),o(c),window.location.reload()};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"header text-center",children:[Object(s.jsx)("h2",{className:"gradient-text",children:"TODO LIST"}),Object(s.jsx)("button",{className:"button-85",role:"button",onClick:function(){return n(!0)},children:Object(s.jsx)("h6",{className:"gradient-text",children:"Create Task"})})]}),Object(s.jsx)("div",{className:"task-container",children:j&&j.map((function(e,t){return Object(s.jsx)(g,{taskObj:e,index:t,deleteTask:d,updateListArray:b})}))}),Object(s.jsx)(p,{toggle:function(){n(!c)},modal:c,save:function(e){var t=j;t.push(e),localStorage.setItem("taskList",JSON.stringify(t)),o(j),n(!1)}})]})},y=c.p+"static/media/XuanHuu.6c85c2c4.jpg",N=function(){return Object(s.jsxs)("header",{children:[Object(s.jsx)("nav",{class:"navbar navbar-expand-sm navbar-light fixed-top",id:"navbar",children:Object(s.jsx)("div",{class:"collapse navbar-collapse",children:Object(s.jsxs)("ul",{class:"navbar-nav",children:[Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)("h6",{children:Object(s.jsxs)("a",{href:"https://www.facebook.com/saintnguyen1112",class:"gradient-text",children:[Object(s.jsx)("i",{class:"fab fa-facebook-f","aria-hidden":"true",style:{"font-size":"18px"}}),"Facebook"]})})}),Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)("h6",{children:Object(s.jsxs)("a",{href:"https://www.instagram.com/xn__huung/",class:"gradient-text",children:[Object(s.jsx)("i",{class:"fab fa-instagram","aria-hidden":"true",style:{"font-size":"18px"}}),"Instagram"]})})}),Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)("h6",{children:Object(s.jsxs)("a",{href:"https://www.twitch.tv/saint_nguyen",class:"gradient-text",children:[Object(s.jsx)("i",{class:"fa-brands fa-twitch","aria-hidden":"true",style:{"font-size":"18px"}}),"Twitch"]})})})]})})}),Object(s.jsx)("h1",{class:"aos-item",children:Object(s.jsx)("b",{children:"Nguy\u1ec5n Xu\xe2n H\u1eefu"})}),Object(s.jsx)("div",{id:"line"}),Object(s.jsx)("h3",{class:"aos-item",children:"SV \u0110\u1ea1i h\u1ecdc S\u01b0 ph\u1ea1m TP. H\u1ed3 Ch\xed Minh"}),Object(s.jsxs)("div",{class:" presentation",children:[Object(s.jsxs)("div",{class:"col-6 col-md-3 infos",children:[Object(s.jsxs)("h5",{children:[Object(s.jsx)("i",{class:"fa fa-user"})," 20 Tu\u1ed5i"]}),Object(s.jsxs)("h5",{children:[Object(s.jsx)("i",{class:"fa fa-compass"})," Vi\u1ec7t Nam"]}),Object(s.jsxs)("h5",{children:[Object(s.jsx)("i",{class:"fa fa-phone"})," +84: 0393942398"]}),Object(s.jsxs)("h5",{children:[Object(s.jsx)("i",{class:"fa fa-envelope-open"})," nguyenxuanhuu12c3@gmail.com"]})]}),Object(s.jsxs)("div",{class:"d-none d-md-block col-md-6",children:[Object(s.jsx)("h5",{class:"typed",children:"H\u1ecd t\xean : Nguy\u1ec5n Xu\xe2n H\u1eefu"}),Object(s.jsx)("h5",{class:"typed",children:" Ng\xe0y Sinh : ng\xe0y 11 th\xe1ng 12 n\u0103m 2002"}),Object(s.jsx)("h5",{class:"typed",children:"MSSV : 46 . 01 . 104 . 064"}),Object(s.jsx)("h5",{class:"typed",children:"\u0110\u1ecba ch\u1ec9 : Qu\u1eadn 12 , TP. H\u1ed3 Ch\xed Minh . Hi\u1ec7n t\u1ea1i l\xe0 sinh vi\xean n\u0103m 3 khoa c\xf4ng ngh\u1ec7 th\xf4ng tin c\u1ee7a tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc S\u01b0 ph\u1ea1m TP.H\u1ed3 Ch\xed Minh ."})]}),Object(s.jsx)("div",{class:"col-6 col-md-3 photo",children:Object(s.jsx)("img",{src:y,alt:"huu"})})]})]})},k=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Comment page"})})},C=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Analytics page"})})},S=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"product page"})})},F=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"product list page"})})},w=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(o.a,{children:Object(s.jsx)(d,{children:Object(s.jsxs)(b.c,{children:[Object(s.jsx)(b.a,{path:"/",element:Object(s.jsx)(v,{})}),Object(s.jsx)(b.a,{path:"/dashboard",element:Object(s.jsx)(v,{})}),Object(s.jsx)(b.a,{path:"/about",element:Object(s.jsx)(N,{})}),Object(s.jsx)(b.a,{path:"/comment",element:Object(s.jsx)(k,{})}),Object(s.jsx)(b.a,{path:"/analytics",element:Object(s.jsx)(C,{})}),Object(s.jsx)(b.a,{path:"/product",element:Object(s.jsx)(S,{})}),Object(s.jsx)(b.a,{path:"/productList",element:Object(s.jsx)(F,{})})]})})})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,59)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(w,{})}),document.getElementById("root")),T()}},[[53,1,2]]]);
//# sourceMappingURL=main.7c277739.chunk.js.map
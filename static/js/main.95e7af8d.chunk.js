(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){e.exports={inputValue:"InputValues_inputValue__3d-KW",input:"InputValues_input__OwQjh",btn:"InputValues_btn__2ZERI",active:"InputValues_active__3hdH_"}},21:function(e,t,a){e.exports={valueItem:"Rem_valueItem__3_3Ef",btn:"Rem_btn__14f24"}},33:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(14),s=a.n(c),i=a(26),r=(a(33),a(7)),l=a(5),u=a.n(l),j=a(6),d=a(27),o=a(41),b=localStorage.getItem("local"),O=JSON.parse(b||"{}"),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE-VALUE":var a=e.filter((function(e){return e.id!==t.itemID}));return localStorage.setItem("local",JSON.stringify(a)),a;case"ADD-ITEM":var n=Object(d.a)(e),c={id:t.itemID,title:t.title};return n.push(c),localStorage.setItem("local",JSON.stringify(n)),n;default:return e}},m=a(13),v=a.n(m),x=a(17),g=a(8),_=localStorage.getItem("values"),h=JSON.parse(_||"{}"),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-ITEM":return Object(g.a)(Object(g.a)({},e),{},Object(x.a)({},t.itemID,[]));case"ADD-VALUE":var a=Object(g.a)({},e),n={id:Object(o.a)(),value:t.value};return a[t.itemID].push(n),localStorage.setItem("values",JSON.stringify(a)),a;case"DELETE-VALUE":var c=Object(g.a)({},e);return delete c[t.itemID],c;case"CHANGE-VALUE-TITLE":var s=Object(g.a)({},e);return s[t.productID]=s[t.productID].filter((function(e){return e.id===t.valID?e.value=t.title:e})),localStorage.setItem("values",JSON.stringify(s)),s;case"REMOVE-VALUE":var i=Object(g.a)({},e);return i[t.productID]=i[t.productID].filter((function(e){return e.id!==t.valID})),localStorage.setItem("values",JSON.stringify(i)),i;default:return e}},f=a(1),D=function(e){var t=e.itemID,a=e.mode,c=Object(n.useState)(""),s=Object(r.a)(c,2),i=s[0],l=s[1],u=Object(j.b)();return Object(f.jsxs)("div",{className:"".concat(v.a.inputValue," ").concat(a?v.a.active:""),children:[Object(f.jsx)("input",{className:v.a.input,value:i,onChange:function(e){l(e.currentTarget.value)},type:"text"}),Object(f.jsx)("button",{className:v.a.btn,onClick:function(){u(function(e,t){return{type:"ADD-VALUE",value:e,itemID:t}}(i,t)),l("")},children:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0441\u0442\u0430\u0442\u043e\u043a"})]})},E=function(){return Object(f.jsx)("div",{style:{width:"24px",height:"24px"},children:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(f.jsx)("path",{d:"M22,5H17V2a1,1,0,0,0-1-1H8A1,1,0,0,0,7,2V5H2A1,1,0,0,0,2,7H3.061L4,22.063A1,1,0,0,0,5,23H19a1,1,0,0,0,1-.937L20.939,7H22a1,1,0,0,0,0-2ZM9,3h6V5H9Zm9.061,18H5.939L5.064,7H18.936ZM9,11v6a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0Zm4,0v6a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0Zm3-1a1,1,0,0,1,1,1v6a1,1,0,0,1-2,0V11A1,1,0,0,1,16,10Z"})})})},N=a(21),V=a.n(N),S=function(e){var t=e.value,a=e.productID,c=e.valID,s=localStorage.getItem("values"),i=(JSON.parse(s||"{}"),Object(n.useState)(t)),l=Object(r.a)(i,2),u=l[0],d=l[1],o=Object(n.useState)(!1),b=Object(r.a)(o,2),O=b[0],p=b[1],m=Object(j.b)(),v=function(){p(!O)};return Object(f.jsxs)("div",{className:V.a.valueItem,children:[Object(f.jsx)("button",{onClick:function(){m(function(e,t){return{type:"REMOVE-VALUE",productID:e,valID:t}}(a,c))},className:V.a.btn,children:"x"}),O?Object(f.jsx)("input",{value:u,onChange:function(e){d(e.currentTarget.value)},onBlur:function(){m(function(e,t,a){return{type:"CHANGE-VALUE-TITLE",title:t,productID:a,valID:e}}(c,t,a)),v()},type:"text"}):Object(f.jsxs)("span",{onClick:v,children:[t,"\u043c"]})]})},y=function(){return Object(f.jsx)("div",{style:{width:"11px",height:"11px"},children:Object(f.jsxs)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 386.375 386.375",children:[Object(f.jsx)("g",{children:Object(f.jsx)("path",{d:"M21.05,286.875l76.5,76.5l-1.9,3.8l-95.6,19.2l19.1-95.6L21.05,286.875z M34.65,272.775l77.1,77.1l216.4-216.399 l-77.101-77.1L34.65,272.775z M374.85,34.375l-23-22.9c-15.3-15.3-38.199-15.3-53.5,0l-32.5,32.5l76.5,76.5l32.5-32.5 C390.15,72.675,390.15,47.775,374.85,34.375z"})}),Object(f.jsx)("g",{}),Object(f.jsx)("g",{}),Object(f.jsx)("g",{}),Object(f.jsx)("g",{}),Object(f.jsx)("g",{}),Object(f.jsx)("g",{}),Object(f.jsx)("g",{}),Object(f.jsx)("g",{}),Object(f.jsx)("g",{}),Object(f.jsx)("g",{}),Object(f.jsx)("g",{}),Object(f.jsx)("g",{}),Object(f.jsx)("g",{}),Object(f.jsx)("g",{}),Object(f.jsx)("g",{})]})})},A=function(){var e=Object(j.c)((function(e){return e.remaindesPage})),t=Object(j.c)((function(e){return e.valuesPage})),a=Object(j.b)(),c=Object(n.useState)(""),s=Object(r.a)(c,2),i=s[0],l=s[1],d=Object(n.useState)(!1),b=Object(r.a)(d,2),O=b[0],p=b[1],m=function(){p(!O)};return Object(f.jsxs)("div",{className:u.a.remaindesPage,children:[Object(f.jsxs)("div",{className:u.a.addProductInput,children:[Object(f.jsx)("h6",{className:u.a.logo,children:"\u0421\u043d\u0430\u0431\u0436\u0435\u043d\u0435\u0446"}),Object(f.jsx)("input",{className:u.a.input,value:i,onChange:function(e){l(e.currentTarget.value)},type:"text"}),Object(f.jsx)("button",{className:u.a.btn,onClick:function(){a(function(e){return{type:"ADD-ITEM",title:e,itemID:Object(o.a)()}}(i))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440"})]}),Object(f.jsx)("div",{className:u.a.remaindes,children:e?e.map((function(e){return Object(f.jsx)("div",{className:u.a.wrapper,children:Object(f.jsxs)("div",{className:u.a.valueWrapper,children:[Object(f.jsx)("button",{className:u.a.delete,onClick:function(){a({type:"DELETE-VALUE",itemID:e.id})},children:Object(f.jsx)(E,{})}),Object(f.jsxs)("div",{className:u.a.title,children:[e.title,Object(f.jsx)("button",{onClick:m,className:u.a.pen,children:Object(f.jsx)(y,{})})]}),Object(f.jsx)("div",{className:u.a.value,children:t[e.id].map((function(t){return Object(f.jsx)(S,{valID:t.id,productID:e.id,value:t.value},t.id)}))}),Object(f.jsx)(D,{mode:O,itemID:e.id})]})},e.id)})):""})]})};var w=function(e){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("div",{className:"routeWrapper",children:Object(f.jsx)(A,{})})})},L=a(12),R=Object(L.b)({remaindesPage:p,valuesPage:I}),T=Object(L.c)(R);s.a.render(Object(f.jsx)(i.a,{children:Object(f.jsx)(j.a,{store:T,children:Object(f.jsx)(w,{})})}),document.getElementById("root"))},5:function(e,t,a){e.exports={remaindesPage:"Remaindes_remaindesPage__pM2qW",addProductInput:"Remaindes_addProductInput__3de_r",logo:"Remaindes_logo__3jlLE",input:"Remaindes_input__3Gs71",btn:"Remaindes_btn__lmjIM",remaindes:"Remaindes_remaindes__2Ii1J",wrapper:"Remaindes_wrapper__3YU0m",title:"Remaindes_title__1I18T",pen:"Remaindes_pen__1iIJ4",value:"Remaindes_value__qkSOV",itemValue:"Remaindes_itemValue__12ZfN",valueWrapper:"Remaindes_valueWrapper__432mn",delete:"Remaindes_delete__1P249"}}},[[40,1,2]]]);
//# sourceMappingURL=main.95e7af8d.chunk.js.map
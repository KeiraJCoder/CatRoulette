(this["webpackJsonptindercat-app"]=this["webpackJsonptindercat-app"]||[]).push([[0],{1528:function(e,n,t){},1529:function(e,n,t){},1536:function(e,n,t){},1537:function(e,n,t){"use strict";t.r(n);var c=t(0),s=t(32),a=t.n(s),i=t(13),r=t.n(i),j=t(33),l=t(4),o=t(8),u=t(2),b=t(14),m=(t(1528),t(1529),t(1)),d=["btn--[primary","btn--outline"],h=["btn--medium"," btn--large"],O=function(e){var n=e.children,t=e.type,c=e.onClick,s=e.buttonStyle,a=e.buttonSize,i=d.includes(s)?s:d[0],r=h.includes(a)?a:h[0];return Object(m.jsx)(o.b,{to:"/sign-up",className:"btn-mobile",children:Object(m.jsx)("button",{className:"btn ".concat(i," ").concat(r),onClick:c,type:t,children:n})})};var f=function(){var e=Object(c.useState)(!1),n=Object(l.a)(e,2),t=n[0],s=n[1],a=Object(c.useState)(!0),i=Object(l.a)(a,2),r=i[0],j=i[1],u=function(){return s(!1)},b=function(){window.innerWidth<=960?j(!1):j(!0)};return Object(c.useEffect)((function(){b()}),[]),window.addEventListener("resize",b),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("nav",{className:"navbar",children:Object(m.jsxs)("div",{className:"navbar-container",children:[Object(m.jsxs)(o.b,{to:"/",className:"navbar-logo",children:["CAT ROULETTE ",Object(m.jsx)("i",{className:"fas fa-american-sign-language-interpreting"})]}),Object(m.jsx)("div",{className:"menu-icon",onClick:function(){return s(!t)},children:Object(m.jsx)("i",{className:t?"fas fa-times":"fas fa-bars"})}),Object(m.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(o.b,{to:"/home",className:"nav-links",onClick:u,children:"Home"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(o.b,{to:"/services",className:"nav-links",onClick:u,children:"Services"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(o.b,{to:"/products",className:"nav-links",onClick:u,children:"Products"})})]}),r&&Object(m.jsx)(O,{buttonStyle:"btn--outline",children:" CAT MERCH "})]})})})};var x=function(){return Object(m.jsxs)("div",{className:"hero-container",children:[Object(m.jsx)("h1",{children:" Delivery in 24 Hours "}),Object(m.jsx)("h2",{children:" Your future pet is waiting for you "}),Object(m.jsx)("div",{className:"hero-btns"})]})};var v=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(x,{})})};t(31);t(1536);var p=function(e){var n=e.item;return Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:n.url}),Object(m.jsxs)("p",{children:[n.name,"   \xa3",n.price]})]})},N=function(){var e=Object(c.useState)({}),n=Object(l.a)(e,2),t=n[0],s=n[1],a=function(){var e=Object(j.a)(r.a.mark((function e(){var n,t,c,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.thecatapi.com/v1/images/search?limit=15");case 2:return n=e.sent,e.next=5,n.json();case 5:for(t=e.sent,c=0;c<t.length;c++)(a=t[c]).name=b.name.firstName(),a.price=b.commerce.price();s(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(f,{}),Object(m.jsx)(u.c,{children:Object(m.jsx)(u.a,{path:"/",exact:!0,component:v})}),t.length>0&&t.map((function(e,n){return Object(m.jsx)(p,{item:e})}))]})})};a.a.render(Object(m.jsx)(N,{}),document.getElementById("root"))},31:function(e,n,t){}},[[1537,1,2]]]);
//# sourceMappingURL=main.10cb6c2e.chunk.js.map
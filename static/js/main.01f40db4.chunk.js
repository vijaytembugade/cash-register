(this["webpackJsonpcash-register"]=this["webpackJsonpcash-register"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),j=c(4),r=c.n(j),i=(c(9),c(10),c(2)),a=c(0),l=function(e){var t=e.change,c=Object(n.useState)(0),s=Object(i.a)(c,2),j=s[0],r=s[1],l=Object(n.useState)(0),b=Object(i.a)(l,2),h=b[0],o=b[1],O=Object(n.useState)(0),u=Object(i.a)(O,2),d=u[0],x=u[1],m=Object(n.useState)(0),f=Object(i.a)(m,2),g=f[0],v=f[1],N=Object(n.useState)(0),S=Object(i.a)(N,2),p=S[0],C=S[1],M=Object(n.useState)(0),k=Object(i.a)(M,2),A=k[0],y=k[1],F=Object(n.useState)(0),w=Object(i.a)(F,2),B=w[0],E=w[1];return Object(n.useEffect)((function(){console.log(t),t>=2e3&&(r(Math.floor(t/2e3)),t%=2e3,console.log(j)),t>=500&&(o(Math.floor(t/500)),t%=500),t>=100&&(x(Math.floor(t/100)),t%=100),t>=50&&(v(Math.floor(t/50)),t%=50),t>=20&&(C(Math.floor(t/20)),t%=20),t>=10&&(y(Math.floor(t/10)),t%=10),t<10&&E(t)}),[t]),console.log(j,h,d,g,p,A,B),Object(a.jsxs)("div",{children:[t>0&&Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"returnAmount",children:[Object(a.jsx)("br",{}),Object(a.jsxs)("h3",{children:["Amount to be returned: ",Object(a.jsxs)("strong",{children:[t," Rs."]})]}),Object(a.jsx)("br",{})]}),Object(a.jsxs)("table",{id:"tables",children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Note"}),Object(a.jsx)("th",{children:"2000"}),Object(a.jsx)("th",{children:"500"}),Object(a.jsx)("th",{children:"100"}),Object(a.jsx)("th",{children:"50"}),Object(a.jsx)("th",{children:"20"}),Object(a.jsx)("th",{children:"10"}),Object(a.jsx)("th",{children:"1"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"No.of Notes"}),Object(a.jsx)("th",{children:j}),Object(a.jsx)("th",{children:h}),Object(a.jsx)("th",{children:d}),Object(a.jsx)("th",{children:g}),Object(a.jsx)("th",{children:p}),Object(a.jsx)("th",{children:A}),Object(a.jsx)("th",{children:B})]})]})]}),t<0&&Object(a.jsx)("h2",{children:"Cash is less than bill amount!"}),0===t&&Object(a.jsx)("h2",{children:"No Amount should be return!"})]})};var b=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],j=Object(n.useState)(!1),r=Object(i.a)(j,2),b=r[0],h=r[1],o=Object(n.useState)(!1),O=Object(i.a)(o,2),u=O[0],d=O[1],x=Object(n.useState)(""),m=Object(i.a)(x,2),f=m[0],g=m[1],v=Object(n.useState)(""),N=Object(i.a)(v,2),S=N[0],p=N[1];return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{class:"heading",children:[Object(a.jsx)("h2",{children:"Cash Register Manager"}),Object(a.jsx)("p",{children:"Enter the bill amount and cash given by the customer and know minimum number of notes to return"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"title",children:"Bill Amount"}),Object(a.jsx)("input",{className:"amount",value:c,onChange:function(e){s(e.target.value)},type:"number"}),!b&&Object(a.jsx)("button",{onClick:function(){void 0!==c||null!==c||""!==c?h(!0):console.log("hello")},children:"Next"})]}),Object(a.jsx)("div",{children:b&&Object(a.jsxs)("div",{className:"totalAmount",children:[Object(a.jsx)("p",{className:"title",children:"Cash Given"}),Object(a.jsx)("input",{className:"totalAmountInput",value:f,onChange:function(e){return g(e.target.value)},type:"number"}),Object(a.jsx)("button",{onClick:function(){d(!0),p(f-c)},children:"Check"})]})}),Object(a.jsx)("div",{children:u&&Object(a.jsx)(l,{change:S})})]})};var h=function(){return Object(a.jsx)("div",{className:"main",children:Object(a.jsx)(b,{})})},o=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,j=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),j(e),r(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),o()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.01f40db4.chunk.js.map
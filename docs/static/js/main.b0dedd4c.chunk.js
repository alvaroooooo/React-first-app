(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(7),a=n.n(c),i=(n(15),n(2)),s=n(9),u=n(0),o=function(t){var e=t.setCategoria,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),e((function(t){return[a].concat(Object(s.a)(t))})),o("")},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){return o(t.target.value)}})})},j=n(10),l=n(6),p=n.n(l),b=n(8),f=function(){var t=Object(b.a)(p.a.mark((function t(e){var n,r,c,a,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(e,"&limit=5&api_key=fU74YvePxjm0mhor0c4SELoOtawZ92Nw"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(t){return console.log(t),Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:t.url,alt:t.title}),Object(u.jsxs)("p",{children:[" ",t.title," "]})]})},O=function(t){var e=t.categoria,n=Object(r.useState)([]),c=Object(i.a)(n,2),a=c[0],s=c[1];return Object(r.useEffect)((function(){f(e).then((function(t){return s(t)}))}),[e]),console.log(a),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{children:[" ",e," "]}),Object(u.jsx)("div",{className:"card-grid",children:a.map((function(t,e){return Object(u.jsx)(d,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(r.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:" GifExpertApp "}),Object(u.jsx)("hr",{}),Object(u.jsx)(o,{setCategoria:c}),n.map((function(t,e){return Object(u.jsx)(O,{categoria:t},t)}))]})};a.a.render(Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b0dedd4c.chunk.js.map
(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[6],{57:function(t,e,r){"use strict";r.d(e,"e",(function(){return o})),r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return f})),r.d(e,"c",(function(){return h})),r.d(e,"d",(function(){return b}));var n=r(61),a=r(62),c=r.n(a),u=r(63),s=r.n(u);function o(){return i.apply(this,arguments)}function i(){return(i=Object(n.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("/trending/movie/day");case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function p(t){return l.apply(this,arguments)}function l(){return(l=Object(n.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("/movie/".concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=Object(n.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("/movie/".concat(e,"/credits"));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=Object(n.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("/movie/".concat(e,"/reviews"));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function b(t){return j.apply(this,arguments)}function j(){return j=Object(n.a)(c.a.mark((function t(e){var r,n,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,t.prev=1,t.next=4,s.a.get("/search/movie?language=en-US&page=".concat(r,"&include_adult=false&query=").concat(e));case 4:return n=t.sent,t.abrupt("return",n.data.results);case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),j.apply(this,arguments)}s.a.defaults.baseURL="https://api.themoviedb.org/3",s.a.defaults.params={api_key:"961c0ec5d41119b20a04fc6b07024024"}},97:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return o}));var n=r(58),a=r(9),c=r(0),u=r(57),s=r(1);function o(){var t=Object(c.useState)([]),e=Object(n.a)(t,2),r=e[0],o=e[1];return Object(c.useEffect)((function(){Object(u.e)().then(o)}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"Trending today"}),r&&Object(s.jsx)("ul",{children:r.map((function(t){return Object(s.jsx)("li",{children:Object(s.jsx)(a.b,{to:"movies/".concat(t.id),children:t.title})},t.id)}))})]})}}}]);
//# sourceMappingURL=6.f838aeb7.chunk.js.map
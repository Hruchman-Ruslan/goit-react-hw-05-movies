"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[475],{18:function(t,n,r){r.d(n,{Df:function(){return s},TP:function(){return f},V0:function(){return p},tx:function(){return h},zv:function(){return l}});var e=r(5861),a=r(4687),c=r.n(a),i=r(1243),u="https://api.themoviedb.org/3/",o="db1fc310bcef39c6a9a836ce0736e327",s=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(u,"trending/all/day?api_key=").concat(o));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results.map((function(t){return{id:t.id,title:t.title}})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(u,"search/movie?api_key=").concat(o,"&query=").concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results.map((function(t){return{id:t.id,title:t.title}})));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(u,"movie/").concat(n,"?api_key=").concat(o));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(u,"movie/").concat(n,"/credits?api_key=").concat(o));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.cast.map((function(t){return{id:t.id,character:t.character,original_name:t.original_name,profile_path:t.profile_path}})));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(u,"movie/").concat(n,"/reviews?api_key=").concat(o));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results.map((function(t){return{id:t.id,content:t.content,author:t.author}})));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},4475:function(t,n,r){r.r(n),r.d(n,{default:function(){return d}});var e=r(5861),a=r(9439),c=r(4687),i=r.n(c),u=r(18),o=r(5575),s=r(2791),p=r(7689),f=r(184),l=function(t){var n=t.movie;return(0,f.jsx)("ul",{children:n.map((function(t){var n=t.id,r=t.character,e=t.original_name,a=t.profile_path;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(a),alt:e}),(0,f.jsx)("h2",{children:e}),(0,f.jsxs)("p",{children:["Character:",r]})]},n)}))})},h=r(1454),d=function(){var t=(0,s.useState)([]),n=(0,a.Z)(t,2),r=n[0],c=n[1],d=(0,s.useState)(!1),v=(0,a.Z)(d,2),m=v[0],w=v[1],x=(0,s.useState)(null),g=(0,a.Z)(x,2)[1],_=(0,p.UO)().movieId;return(0,s.useEffect)((function(){(0,e.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.prev=1,t.next=4,(0,u.zv)(_);case 4:n=t.sent,c(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),g("Sorry something went wrong");case 11:return t.prev=11,w(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()}),[_]),(0,f.jsxs)(o.$0,{children:[(0,f.jsx)(l,{movie:r}),m&&(0,f.jsx)(h.a,{})]})}},1454:function(t,n,r){r.d(n,{a:function(){return o}});var e,a=r(8966),c=r(168),i=r(5397).Z.div(e||(e=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n"]))),u=r(184),o=function(){return(0,u.jsx)(i,{children:(0,u.jsx)(a.VF,{height:"100",width:"100",color:"aqua",secondaryColor:"purple",radius:"12.5",ariaLabel:"mutating-dots-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}}}]);
//# sourceMappingURL=475.43eca600.chunk.js.map
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[7],{18:function(t,n,r){r.d(n,{Df:function(){return s},TP:function(){return f},V0:function(){return p},tx:function(){return h},zv:function(){return d}});var e=r(5861),a=r(4687),c=r.n(a),u=r(1243),i="https://api.themoviedb.org/3/",o="db1fc310bcef39c6a9a836ce0736e327",s=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"trending/all/day?api_key=").concat(o));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results.map((function(t){return{id:t.id,title:t.title}})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results.map((function(t){return{id:t.id,title:t.title}})));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(n,"?api_key=").concat(o));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(o));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.cast.map((function(t){return{id:t.id,character:t.character,original_name:t.original_name,profile_path:t.profile_path}})));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(o));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results.map((function(t){return{id:t.id,content:t.content,author:t.author}})));case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},1454:function(t,n,r){r.d(n,{a:function(){return o}});var e,a=r(8966),c=r(168),u=r(5397).Z.div(e||(e=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n"]))),i=r(184),o=function(){return(0,i.jsx)(u,{children:(0,i.jsx)(a.VF,{height:"100",width:"100",color:"aqua",secondaryColor:"purple",radius:"12.5",ariaLabel:"mutating-dots-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},7:function(t,n,r){r.r(n),r.d(n,{default:function(){return l}});var e=r(5861),a=r(9439),c=r(4687),u=r.n(c),i=r(18),o=r(5575),s=r(1454),p=r(2791),f=r(7689),d=r(184),h=function(t){var n=t.reviews;return(0,d.jsx)("ul",{children:n.map((function(t){var n=t.id,r=t.content,e=t.author;return(0,d.jsxs)("li",{children:[(0,d.jsxs)("h2",{children:["Author: ",e]}),(0,d.jsx)("p",{children:r})]},n)}))})},l=function(){var t=(0,p.useState)([]),n=(0,a.Z)(t,2),r=n[0],c=n[1],l=(0,p.useState)(!1),v=(0,a.Z)(l,2),w=v[0],x=v[1],m=(0,p.useState)(null),g=(0,a.Z)(m,2)[1],y=(0,f.UO)().movieId;return(0,p.useEffect)((function(){(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(!0),t.prev=1,t.next=4,(0,i.tx)(y);case 4:n=t.sent,c(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),g("Sorry something went wrong");case 11:return t.prev=11,x(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()}),[y]),(0,d.jsxs)(o.$0,{children:[(0,d.jsx)(h,{reviews:r}),w&&(0,d.jsx)(s.a,{})]})}}}]);
//# sourceMappingURL=7.12b2a289.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{nxWU:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),l=n.n(r),o=n("vOnD"),i=n("5RMe"),c=n("Hl5l"),p=n("Wbzz"),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.authorName,n=e.title,a=e.date,r=e.tags,o=e.slug;return l.a.createElement("div",{style:{border:"1px solid "+i.a.googleGrey100,padding:c.a.grid[2]+"px",borderRadius:4}},l.a.createElement(m,null,l.a.createElement("h3",null,t),l.a.createElement("p",null,a)),l.a.createElement(p.Link,{to:"/blog/"+o},l.a.createElement("h2",{style:{fontSize:40,margin:"20px 0",color:"black"}},n)),l.a.createElement("p",{style:{color:""+i.a.googleGrey600,margin:"20px 0 0 0"}},"tags"),l.a.createElement("ul",{style:{listStyle:"none"}},r&&r.map((function(e){return l.a.createElement(p.Link,{to:"/tag/"+e},l.a.createElement(u,null,e))})),r||l.a.createElement(p.Link,{to:"/tag/flutter"},l.a.createElement(u,null,"#flutter"))))},t}(l.a.Component);t.a=s;var u=o.a.li.withConfig({displayName:"post_item_container__TagListItem",componentId:"ta3ocr-0"})(["margin:10px 5px;font-size:15px;"]),m=o.a.div.withConfig({displayName:"post_item_container__BioSection",componentId:"ta3ocr-1"})(["margin:10px 0;color:black;h3{font-size:20px;margin:0;color:black;}p{font-size:12px;color:",";margin:5px 0 10px;}"],i.a.googleGrey600)},vx99:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),r=n("q1tI"),l=n.n(r),o=n("Bl7J"),i=n("vrFN"),c=n("nxWU"),p=n("Wbzz"),s=n("lZFM"),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return l.a.createElement(o.a,{location:this.props.location},l.a.createElement(i.a,{title:"Flutter by example contributors",description:"A list of the folks who contribute to flutter by example"}),l.a.createElement(s.b,null,l.a.createElement("div",{style:{margin:"50px 0"}},l.a.createElement("h1",{style:{fontSize:45,margin:0,padding:0}},"Community Articles")),l.a.createElement(p.StaticQuery,{query:m,render:function(e){var t=e.allStrapiBlogPost.edges;return l.a.createElement("ul",{style:{listStyle:"none"}},t.map((function(e,t){return l.a.createElement("li",{style:{margin:"0 0 30px"}},l.a.createElement(c.a,{key:e.node.id,authorName:e.node.user.username,title:e.node.title,date:e.node.created_at,slug:e.node.slug}))})))}})))},t}(l.a.Component);t.default=u;var m="4081451521"}}]);
//# sourceMappingURL=component---src-pages-blog-js-6e9e042fb4fd30a87878.js.map
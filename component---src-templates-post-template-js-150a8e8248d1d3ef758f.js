(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{J4bc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("Zttt"),i=n("Wbzz"),s=(n("pJf4"),n("7Qib")),l=n("d+ly"),u=n.n(l),c=n("gGy4"),m=function(){var e=Object(c.b)().author;return r.a.createElement("div",{className:u.a.author},r.a.createElement("p",{className:u.a.author__bio},e.bio,r.a.createElement("a",{className:u.a["author__bio-twitter"],href:Object(s.a)("twitter",e.contacts.twitter),rel:"noopener noreferrer",target:"_blank"},r.a.createElement("strong",null,e.name)," on Twitter")))},f=n("RPjP"),d=n.n(f),p=function(e){var t=e.postTitle,n=e.postSlug,a=Object(c.b)(),o=a.url,i=a.disqusShortname;return i?r.a.createElement(d.a,{shortname:i,identifier:t,title:t,url:o+n}):null},g=n("Mvws"),h=n.n(g),b=function(e){var t=e.body,n=e.title;return r.a.createElement("div",{className:h.a.content},r.a.createElement("h1",{className:h.a.content__title},n),r.a.createElement("div",{className:h.a.content__body,dangerouslySetInnerHTML:{__html:t}}))},y=n("wd/R"),v=n.n(y),_=n("myfg"),w=n.n(_),E=function(e){var t=e.date;return r.a.createElement("div",{className:w.a.meta},r.a.createElement("p",{className:w.a.meta__date},"Published ",v()(t).format("D MMM YYYY")))},N=n("WXWR"),k=n.n(N),O=function(e){var t=e.tags,n=e.tagSlugs;return r.a.createElement("div",{className:k.a.tags},r.a.createElement("ul",{className:k.a.tags__list},n&&n.map(function(e,n){return r.a.createElement("li",{className:k.a["tags__list-item"],key:t[n]},r.a.createElement(i.Link,{to:e,className:k.a["tags__list-item-link"]},t[n]))})))},j=n("gt/k"),S=n.n(j),q=function(e){var t=e.post,n=t.html,a=t.fields,o=a.tagSlugs,s=a.slug,l=t.frontmatter,u=l.tags,c=l.title,f=l.date;return r.a.createElement("div",{className:S.a.post},r.a.createElement(i.Link,{className:S.a["post__home-button"],to:"/"},"All Articles"),r.a.createElement("div",{className:S.a.post__content},r.a.createElement(b,{body:n,title:c})),r.a.createElement("div",{className:S.a.post__footer},r.a.createElement(E,{date:f}),u&&o&&r.a.createElement(O,{tags:u,tagSlugs:o}),r.a.createElement(m,null)),r.a.createElement("div",{className:S.a.post__comments},r.a.createElement(p,{postSlug:s,postTitle:t.frontmatter.title})))};n.d(t,"query",function(){return P});var P="1228609577";t.default=function(e){var t=e.data,n=Object(c.b)(),a=n.title,i=n.subtitle,s=t.markdownRemark.frontmatter,l=s.title,u=s.description,m=s.socialImage,f=null!==u?u:i;return r.a.createElement(o.a,{title:l+" - "+a,description:f,socialImage:m},r.a.createElement(q,{post:t.markdownRemark}))}},RPjP:function(e,t,n){"use strict";e.exports=n("SLms")},SLms:function(e,t,n){"use strict";n("sC2a"),n("JHok"),n("wZFJ"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("U6Bt"),n("sc67"),n("LagC"),n("pS08"),n("E5k/"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=s(n("q1tI")),i=s(n("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}var l=["shortname","identifier","title","url","category_id","onNewComment","language"],u=!1;function c(e,t){var n=t.onNewComment,a=t.language,r=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["onNewComment","language"]);for(var o in r)e.page[o]=r[o];e.language=a,n&&(e.callbacks={onNewComment:[n]})}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["default"].Component),r(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,n){return l.some(function(e){return e===n})?t:a({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))},{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!u){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),u=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};l.forEach(function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){c(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){c(this,t)},this.addDisqusScript())}}]),t}();m.displayName="DisqusThread",m.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},m.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=m}}]);
//# sourceMappingURL=component---src-templates-post-template-js-150a8e8248d1d3ef758f.js.map
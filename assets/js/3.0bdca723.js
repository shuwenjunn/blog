(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{262:function(t,e,n){},263:function(t,e,n){},264:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return h}));const i=/#.*$/,s=/\.(md|html)$/,r=/\/$/,o=/^(https?:|mailto:|tel:)/;function a(t){return o.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function l(t){if(a(t))return t;const e=t.match(i),n=e?e[0]:"",o=function(t){return decodeURI(t).replace(i,"").replace(s,"")}(t);return r.test(o)?t:o+".html"+n}function h(t,e,n){if(!t)return n;let i,s=e;for(;(s=s.$parent)&&!i;)i=s.$refs[t];return i&&i.$el&&(i=i.$el),i||n}},265:function(t,e,n){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(i,s,r){var o=s.prototype;r.utc=function(t){var e={date:t,utc:!0,args:arguments};return new s(e)},o.utc=function(e){var n=r(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},o.local=function(){return r(this.toDate(),{locale:this.$L,utc:!1})};var a=o.parse;o.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),a.call(this,t)};var c=o.init;o.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else c.call(this)};var u=o.utcOffset;o.utcOffset=function(i,s){var r=this.$utils().u;if(r(i))return this.$u?0:r(this.$offset)?u.call(this):this.$offset;if("string"==typeof i&&null===(i=function(t){void 0===t&&(t="");var i=t.match(e);if(!i)return null;var s=(""+i[0]).match(n)||["-",0,0],r=s[0],o=60*+s[1]+ +s[2];return 0===o?0:"+"===r?o:-o}(i)))return this;var o=Math.abs(i)<=16?60*i:i,a=this;if(s)return a.$offset=o,a.$u=0===i,a;if(0!==i){var c=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(o+c,t)).$offset=o,a.$x.$localOffset=c}else a=this.utc();return a};var l=o.format;o.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return l.call(this,e)},o.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},o.isUTC=function(){return!!this.$u},o.toISOString=function(){return this.toDate().toISOString()},o.toString=function(){return this.toDate().toUTCString()};var h=o.toDate;o.toDate=function(t){return"s"===t&&this.$offset?r(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():h.call(this)};var f=o.diff;o.diff=function(t,e,n){if(t&&this.$u===t.$u)return f.call(this,t,e,n);var i=this.local(),s=r(t).local();return f.call(i,s,e,n)}}}()},266:function(t,e,n){"use strict";n(262)},267:function(t,e,n){"use strict";n(263)},268:function(t,e,n){var i=n(114),s=n(107),r=n(269),o=n(273);t.exports=function(t,e){if(null==t)return{};var n=i(o(t),(function(t){return[t]}));return e=s(e),r(t,n,(function(t,n){return e(t,n[0])}))}},269:function(t,e,n){var i=n(56),s=n(270),r=n(51);t.exports=function(t,e,n){for(var o=-1,a=e.length,c={};++o<a;){var u=e[o],l=i(t,u);n(l,u)&&s(c,r(u,t),l)}return c}},270:function(t,e,n){var i=n(271),s=n(51),r=n(54),o=n(30),a=n(20);t.exports=function(t,e,n,c){if(!o(t))return t;for(var u=-1,l=(e=s(e,t)).length,h=l-1,f=t;null!=f&&++u<l;){var p=a(e[u]),d=n;if("__proto__"===p||"constructor"===p||"prototype"===p)return t;if(u!=h){var g=f[p];void 0===(d=c?c(g,p,f):void 0)&&(d=o(g)?g:r(e[u+1])?[]:{})}i(f,p,d),f=f[p]}return t}},271:function(t,e,n){var i=n(272),s=n(53),r=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var o=t[e];r.call(t,e)&&s(o,n)&&(void 0!==n||e in t)||i(t,e,n)}},272:function(t,e,n){var i=n(115);t.exports=function(t,e,n){"__proto__"==e&&i?i(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},273:function(t,e,n){var i=n(108),s=n(274),r=n(276);t.exports=function(t){return i(t,r,s)}},274:function(t,e,n){var i=n(52),s=n(275),r=n(109),o=n(110),a=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)i(e,r(t)),t=s(t);return e}:o;t.exports=a},275:function(t,e,n){var i=n(113)(Object.getPrototypeOf,Object);t.exports=i},276:function(t,e,n){var i=n(111),s=n(277),r=n(55);t.exports=function(t){return r(t)?i(t,!0):s(t)}},277:function(t,e,n){var i=n(30),s=n(112),r=n(278),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!i(t))return r(t);var e=s(t),n=[];for(var a in t)("constructor"!=a||!e&&o.call(t,a))&&n.push(a);return n}},278:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},279:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return f}));n(31);var i={data:()=>({comp:null}),computed:{page(){return this.$pagination.paginationIndex+1}},mounted(){n.e(2).then(n.t.bind(null,308,7)).then(t=>{this.comp=t.default})},methods:{clickCallback(t){const e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},s=(n(266),n(5)),r=Object(s.a)(i,(function(){var t=this._self._c;return this.comp?t(this.comp,{tag:"component",attrs:{value:this.page,"page-count":this.$pagination.length,"click-handler":this.clickCallback,"prev-text":this.$pagination.prevText,"next-text":this.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):this._e()}),[],!1,null,null,null).exports,o=(n(267),Object(s.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),a=n(32),c=n.n(a),u=n(268),l=n.n(u),h={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties(){return l()(this.$props,c.a)},commentProps(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},f=Object(s.a)(h,(function(){var t=this._self._c;return"vssue"===this.$service.comment.service?t("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?t("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},280:function(t,e,n){},281:function(t,e,n){},282:function(t,e,n){},283:function(t,e,n){},284:function(t,e,n){},291:function(t,e,n){"use strict";n(280)},292:function(t,e,n){"use strict";n(281)},293:function(t,e,n){"use strict";n(282)},294:function(t,e,n){"use strict";n(283)},295:function(t,e,n){"use strict";n(284)},309:function(t,e,n){"use strict";n.r(e);var i=n(264),s={props:["stick","tag"],data:()=>({needFloat:!1,stickBottom:0}),watch:{stick(){this.unStick(),this.stickHandle()}},mounted(){this.stickHandle()},beforeDestroy(){this.unStick()},methods:{stickHandle(){if(!this.stick)return;const t=Object(i.b)(this.stick,this);t&&(this._stickerScroll=()=>{const e=this.$el.getBoundingClientRect(),n=document.body.scrollTop+document.documentElement.scrollTop;this.needFloat=document.body.offsetHeight-n-e.height<t.offsetHeight,this.stickBottom=t.offsetHeight},this._stickerScroll(),window.addEventListener("scroll",this._stickerScroll))},unStick(){this.needFloat=!1,this.stickBottom=0,window.removeEventListener("scroll",this._stickerScroll)}}},r=(n(291),n(5));let o;function a(t){return t&&t.getBoundingClientRect?t.getBoundingClientRect().top+document.body.scrollTop+document.documentElement.scrollTop:0}var c={components:{Sticker:Object(r.a)(s,(function(){return(0,this._self._c)(this.tag||"div",{tag:"component",staticClass:"sticker",class:this.needFloat?["stick-float"]:void 0,style:this.needFloat?{bottom:this.stickBottom+"px"}:void 0},[this._t("default")],2)}),[],!1,null,null,null).exports},data:()=>({activeIndex:0}),computed:{visible(){return this.$frontmatter&&!1!==this.$frontmatter.toc&&!!(this.$page&&this.$page.headers&&this.$page.headers.length)}},watch:{activeIndex(){const t=(this.$refs.chairTocItem||[])[this.activeIndex];if(!t)return;const e=t.getBoundingClientRect(),n=this.$el.getBoundingClientRect(),i=e.top-n.top;i<20?this.$el.scrollTop=this.$el.scrollTop+i-20:i+e.height>n.height&&(this.$el.scrollTop+=e.top-(n.height-e.height))},$route(){}},mounted(){const t=()=>{this.$emit("visible-change",this.visible)};t(),this.$watch("visible",t),setTimeout(()=>this.triggerEvt(),1e3),this._onScroll=()=>this.onScroll(),this._onHashChange=()=>{const t=decodeURIComponent(location.hash.substring(1)),e=(this.$page.headers||[]).findIndex(e=>e.slug===t);e>=0&&(this.activeIndex=e);const n=t&&document.getElementById(t);n&&window.scrollTo(0,a(n)-20)},window.addEventListener("scroll",this._onScroll)},beforeDestroy(){window.removeEventListener("scroll",this._onScroll),window.removeEventListener("hashchange",this._onHashChange)},methods:{onScroll(){void 0===o&&(o=a(this.$el));const t=document.body.scrollTop+document.documentElement.scrollTop,e=this.$page.headers||[];let n=0;const i=t=>{this.activeIndex=t};for(;n<e.length;n++){if(!(a(document.getElementById(e[n].slug))-50<t)){n||i(n);break}i(n)}},triggerEvt(){this._onScroll(),this._onHashChange()}}},u=(n(292),Object(r.a)(c,(function(){var t=this,e=t._self._c;return t.visible?e("Sticker",t._b({staticClass:"vuepress-toc"},"Sticker",t.$attrs,!1),t._l(t.$page.headers,(function(n,i){return e("div",{key:i,ref:"chairTocItem",refInFor:!0,staticClass:"vuepress-toc-item",class:["vuepress-toc-h"+n.level,{active:t.activeIndex===i}]},[e("a",{attrs:{href:"#"+n.slug,title:n.title}},[t._v(t._s(n.title))])])})),0):t._e()}),[],!1,null,null,null).exports),l=n(116),h=n.n(l),f=n(265),p=n.n(f),d=n(4),g={name:"PostTag",props:{tag:{type:String,required:!0}}},v=(n(293),Object(r.a)(g,(function(){var t=this._self._c;return t("li",{staticClass:"post-tag"},[t("router-link",{attrs:{to:"/tag/"+this.tag}},[t("span",[this._v(this._s(this.tag))])])],1)}),[],!1,null,"42ccfcd5",null).exports);h.a.extend(p.a);var m={name:"PostMeta",components:{NavigationIcon:d.n,ClockIcon:d.a,PostTag:v},props:{tags:{type:[Array,String]},author:{type:String},date:{type:String},location:{type:String}},computed:{resolvedDate(){return h.a.utc(this.date).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvedTags(){return!this.tags||Array.isArray(this.tags)?this.tags:[this.tags]}}},$=(n(294),{components:{Toc:u,PostMeta:Object(r.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-meta"},[t.author?e("div",{staticClass:"post-meta-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[e("NavigationIcon"),t._v(" "),e("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.author))]),t._v(" "),t.location?e("span",{attrs:{itemprop:"address"}},[t._v("   in "+t._s(t.location))]):t._e()],1):t._e(),t._v(" "),t.date?e("div",{staticClass:"post-meta-date"},[e("ClockIcon"),t._v(" "),e("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:t.date}},[t._v("\n      "+t._s(t.resolvedDate)+"\n    ")])],1):t._e(),t._v(" "),t.tags?e("ul",{staticClass:"post-meta-tags",attrs:{itemprop:"keywords"}},t._l(t.resolvedTags,(function(t){return e("PostTag",{key:t,attrs:{tag:t}})})),1):t._e()])}),[],!1,null,null,null).exports,Comment:n(279).a,Newsletter:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,310))}}),_=(n(295),Object(r.a)($,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"vuepress-theme-blog__post-layout"}},[e("article",{staticClass:"vuepress-blog-theme-content",attrs:{itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[e("header",[e("h1",{staticClass:"post-title",attrs:{itemprop:"name headline"}},[t._v("\n        "+t._s(t.$frontmatter.title)+"\n      ")]),t._v(" "),e("PostMeta",{attrs:{tags:t.$frontmatter.tags,author:t.$frontmatter.author,date:t.$frontmatter.date,location:t.$frontmatter.location}})],1),t._v(" "),e("Content",{attrs:{itemprop:"articleBody"}}),t._v(" "),e("footer",[t.$service.email.enabled?e("Newsletter"):t._e(),t._v(" "),e("hr"),t._v(" "),e("Comment")],1)],1),t._v(" "),e("Toc")],1)}),[],!1,null,null,null));e.default=_.exports}}]);
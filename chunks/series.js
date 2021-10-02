(self.webpackChunk=self.webpackChunk||[]).push([[148],{25764:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a}),s(52327);var i=s(65611),n=s(72452),o=s(79928);const r={name:"aleSeries",components:{aleSearch:n.Z,lazy:i.Z},mixins:[o.Z],data:function(){return{collectionSource:"pageCollection",pageTitle:"Series",pageSubTitle:null,listReady:!1}},beforeCreate:function(){this.$store.commit("prop",{key:"pageCollection",value:[]}),this.$store.commit("prop",{key:"mutatingCollection",value:[]})},created:function(){this.makeCollection()},watch:{"$store.state.sticky.subPageSource":function(e){this.listReady=!1,this.$nextTick((function(){this.makeCollection()}))}},methods:{makeCollection:function(){var e=this,t=[],s=1,i=this.$store.state.library.series;_.eachRight(this.findSubPageSource(),(function(n){n.series&&_.each(n.series,(function(o){var r=_.find(t,{asin:o.asin});if(r)return r.books.push(n.title||n.shortTitle),!1;var a={name:o.name,asin:o.asin,added:s,books:[n.title||n.shortTitle]};("books"===e.$store.state.sticky.subPageSource&&i&&_.find(i,{asin:o.asin})||"wishlist"===e.$store.state.sticky.subPageSource)&&(++s,t.push(a))}))})),_.reverse(t),this.$store.commit("prop",{key:"pageCollection",value:t}),this.updateListRenderingOptions(),this.listReady=!0},updateListRenderingOptions:function(){var e,t,s=this,i={scope:[{active:!0,key:"name",tippy:"Search narrators by name"},{active:!0,key:"books",tippy:"Search narrators by book titles"}],filter:[{active:!0,type:"filterExtras",label:"Books in series",key:"inSeries",range:[1,(e=_.get(s.$store.state,s.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length})),t?t.books.length:1)],rangeMinDist:0,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){var e=_.get(s.$store.state,s.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length}));return t?t.books.length:1},condition:function(e){if(e.books){var t=this.range[0],s=this.range[1];return e.books.length>=t&&e.books.length<=s}}}],sort:[{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Ignores sorting and randomizes instead unless there's an active search."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'},{active:!0,current:!1,key:"name",label:"Name",type:"sort",tippy:"Sort by series name"},{active:!1,current:!1,key:"amount",label:"Number of books",type:"sort"}]};this.$setListRenderingOpts(i)}}},a=(0,s(40810).Z)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.$store.state.pageCollection&&e.$store.state.pageCollection.length&&e.listReady?s("div",{staticClass:"box-layout-wrapper",attrs:{id:"ale-series"}},[s("ale-search",{attrs:{collectionSource:e.collectionSource,pageTitle:e.pageTitle,pageSubTitle:e.pageSubTitle}}),e._v(" "),e._l(e.$store.getters.collection,(function(t,i){return t.asin?s("lazy",{key:"series:"+t.asin,staticClass:"single-box",attrs:{"data-asin":t.asin}},[s("router-link",{attrs:{to:{name:"series",params:{series:t.asin},query:{subPageSource:e.$store.state.sticky.subPageSource}}}},[s("h2",[e._v(e._s(t.name))]),e._v(" "),t.books&&t.books.length?s("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right"},expression:"{ placement: 'right' }"}],staticClass:"books-total",attrs:{content:"Total number of books I have in this series."}},[e._v("\n        "+e._s(t.books.length)+"\n      ")]):e._e()])],1):e._e()}))],2):e._e()}),[],!1,null,"04d9523d",null).exports},65611:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});const i={name:"lazy",props:["row","tag"],data:function(){return{observer:null,intersected:!1}},mounted:function(){this.$nextTick((function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&(e.intersected=!0,e.observer.disconnect())}),{threshold:0,rootMargin:"100px"}),this.observer.observe(this.$el)}))},destroyed:function(){this.observer&&this.observer.disconnect()}},n=(0,s(40810).Z)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.tag?"td"===e.tag?s("td",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2):e._e():s("div",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2)}),[],!1,null,null,null).exports}}]);
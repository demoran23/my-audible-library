(self.webpackChunk=self.webpackChunk||[]).push([[679],{4951:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l}),r(2327);var n=r(7758),a=r(7816),o=r(730),s=r(3486);const i={name:"aleNarrators",components:{aleSearch:a.Z,lazy:n.Z},mixins:[o.Z,s.Z],data:function(){return{collectionSource:"pageCollection",listReady:!1,pageTitle:"Narrators",pageSubTitle:null}},computed:{optionsOpenMargin:function(){return!!this.$store.state.searchOptOpenHeight&&{marginBottom:0}},galleryStyle:function(){return!!this.$store.state.searchOptOpenHeight&&{overflow:"hidden",height:this.$store.state.searchOptOpenHeight-2*this.$refs.wrapper.offsetTop+"px"}}},methods:{makeCollection:function(){var e=this,t=[],r=1;_.eachRight(e.subPageSource.collection,(function(n){n.narrators&&_.each(n.narrators,(function(a){var o=_.find(t,{name:a.name});if(o)return o.books.push(n.title||n.shortTitle),!1;var s={name:a.name,url:e.slugify(a.name),added:r,books:[n.title||n.shortTitle]};t.push(s),++r}))})),_.reverse(t),this.$store.commit("prop",{key:"pageCollection",value:t}),this.updateListRenderingOptions(),this.listReady=!0},updateListRenderingOptions:function(){var e,t,r=this,n={scope:[{active:!0,key:"name",tippy:"Search narrators by name"},{active:!0,key:"books",tippy:"Search narrators by book titles"}],filter:[{active:!1,type:"filterExtras",label:"Number of books",key:"books",range:[1,(e=_.get(r.$store.state,r.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length})),t?t.books.length:1)],rangeMinDist:0,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){var e=_.get(r.$store.state,r.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length}));return t?t.books.length:1},condition:function(e){if(e.books){var t=this.range[0],r=this.range[1];return e.books.length>=t&&e.books.length<=r}}}],sort:[{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Ignores sorting and randomizes instead unless there's an active search."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'},{active:!0,current:!1,key:"name",label:"Name",type:"sort",tippy:"Sort by narrator's name"},{active:!1,current:!1,key:"amount",label:"Number of books",type:"sort"}]};this.$setListRenderingOpts(n)}}},l=(0,r(810).Z)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.$store.state.pageCollection&&e.$store.state.pageCollection.length&&e.listReady?r("div",{ref:"wrapper",staticClass:"box-layout-wrapper",style:e.optionsOpenMargin,attrs:{id:"ale-narrators"}},[r("ale-search",{attrs:{collectionSource:e.collectionSource,pageTitle:e.pageTitle,pageSubTitle:e.pageSubTitle}}),e._v(" "),r("div",{staticClass:"page-content",style:e.galleryStyle},e._l(e.$store.getters.collection,(function(t,n){return t.name?r("lazy",{key:"narrators:"+t.name,staticClass:"single-box",attrs:{"data-name":t.name}},[r("router-link",{attrs:{to:{name:"narrator",params:{narrator:t.url},query:{subPageSource:e.subPageSource.name}}}},[r("h2",[e._v(e._s(t.name))]),e._v(" "),t.books&&t.books.length?r("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right"},expression:"{ placement: 'right' }"}],staticClass:"books-total",attrs:{content:"Total number of books with this narrator."}},[e._v("\n          "+e._s(t.books.length)+"\n        ")]):e._e()])],1):e._e()})),1)],1):e._e()}),[],!1,null,"657ec280",null).exports},7758:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});const n={name:"lazy",props:["row","tag"],data:function(){return{observer:null,intersected:!1}},mounted:function(){this.$nextTick((function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&(e.intersected=!0,e.observer.disconnect())}),{threshold:0,rootMargin:"100px"}),this.observer.observe(this.$el)}))},destroyed:function(){this.observer&&this.observer.disconnect()}},a=(0,r(810).Z)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.tag?"td"===e.tag?r("td",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2):e._e():r("div",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2)}),[],!1,null,null,null).exports}}]);
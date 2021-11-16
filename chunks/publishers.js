(self.webpackChunk=self.webpackChunk||[]).push([[914],{1999:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l}),s(2327);var n=s(7758),r=s(7816),o=s(730),i=s(3486);const a={name:"alePublishers",components:{aleSearch:r.Z,lazy:n.Z},mixins:[o.Z,i.Z],data:function(){return{collectionSource:"pageCollection",listReady:!1,pageTitle:"Publishers",pageSubTitle:null}},computed:{optionsOpenMargin:function(){return!!this.$store.state.searchOptOpenHeight&&{marginBottom:0}},galleryStyle:function(){return!!this.$store.state.searchOptOpenHeight&&{overflow:"hidden",height:this.$store.state.searchOptOpenHeight-2*this.$refs.wrapper.offsetTop+"px"}}},methods:{makeCollection:function(){var e=this,t=[],s=1;_.eachRight(e.subPageSource.collection,(function(n){n.publishers&&_.each(n.publishers,(function(r){var o=_.find(t,{name:r.name});if(o)return o.books.push(n.title||n.shortTitle),!1;var i={name:r.name,url:e.slugify(r.name),added:s,books:[n.title||n.shortTitle]};t.push(i),++s}))})),_.reverse(t),this.$store.commit("prop",{key:"pageCollection",value:t}),this.updateListRenderingOptions(),this.listReady=!0},updateListRenderingOptions:function(){var e,t,s=this,n={scope:[{active:!0,key:"name",tippy:"Search publishers by name"},{active:!0,key:"books",tippy:"Search publishers by book titles"}],filter:[{active:!1,type:"filterExtras",label:"Number of books",key:"books",range:[1,(e=_.get(s.$store.state,s.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length})),t?t.books.length:1)],rangeMinDist:0,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){var e=_.get(s.$store.state,s.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length}));return t?t.books.length:1},condition:function(e){if(e.books){var t=this.range[0],s=this.range[1];return e.books.length>=t&&e.books.length<=s}}}],sort:[{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Ignores sorting and randomizes instead unless there's an active search."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'},{active:!0,current:!1,key:"name",label:"Name",type:"sort",tippy:"Sort by publisher's name"},{active:!1,current:!1,key:"amount",label:"Number of books",type:"sort"}]};this.$setListRenderingOpts(n)}}},l=(0,s(810).Z)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.$store.state.pageCollection&&e.$store.state.pageCollection.length&&e.listReady?s("div",{ref:"wrapper",staticClass:"box-layout-wrapper",style:e.optionsOpenMargin,attrs:{id:"ale-publishers"}},[s("ale-search",{attrs:{collectionSource:e.collectionSource,pageTitle:e.pageTitle,pageSubTitle:e.pageSubTitle}}),e._v(" "),s("div",{staticClass:"page-content",style:e.galleryStyle},e._l(e.$store.getters.collection,(function(t,n){return t.name?s("lazy",{key:"publishers:"+t.name,staticClass:"single-box",attrs:{"data-name":t.name}},[s("router-link",{attrs:{to:{name:"publisher",params:{publisher:t.url},query:{subPageSource:e.subPageSource.name}}}},[s("h2",[e._v(e._s(t.name))]),e._v(" "),t.books&&t.books.length?s("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right"},expression:"{ placement: 'right' }"}],staticClass:"books-total",attrs:{content:"Total number of books from this publisher."}},[e._v("\n          "+e._s(t.books.length)+"\n        ")]):e._e()])],1):e._e()})),1)],1):e._e()}),[],!1,null,"7b3ece4a",null).exports},7758:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});const n={name:"lazy",props:["row","tag"],data:function(){return{observer:null,intersected:!1}},mounted:function(){this.$nextTick((function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&(e.intersected=!0,e.observer.disconnect())}),{threshold:0,rootMargin:"100px"}),this.observer.observe(this.$el)}))},destroyed:function(){this.observer&&this.observer.disconnect()}},r=(0,s(810).Z)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.tag?"td"===e.tag?s("td",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2):e._e():s("div",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2)}),[],!1,null,null,null).exports}}]);
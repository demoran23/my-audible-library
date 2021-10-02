(self.webpackChunk=self.webpackChunk||[]).push([[112],{65173:(t,o,a)=>{"use strict";a.r(o),a.d(o,{default:()=>s}),a(61418),a(63238),a(5769),a(14078);const e={name:"book",props:["book","index","sortValuesEnabled"],mixins:[a(26495).Z],components:{"sort-values":function(){return a.e(378).then(a.bind(a,69734))}},methods:{playSample:function(t,o){this.$root.$emit("play-audio",{from:"book",route:this.$route,book:t,index:o})}}},s=(0,a(40810).Z)(e,(function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"details-inner-wrap"},[t.sortValuesEnabled?a("sort-values",{attrs:{book:t.book}}):t._e(),t._v(" "),a("div",{staticClass:"ale-cover"},[t.book.sample?a("div",{staticClass:"ale-play-sample",on:{click:function(o){return t.playSample(t.book,t.index)}}},[a("div",[a("font-awesome",{attrs:{fas:"",icon:"play"}})],1)]):t._e(),t._v(" "),a("div",{staticClass:"ale-click-wrap",on:{click:function(o){return t.$root.$emit("book-clicked",{book:t.book})}}},[t.book.blurb?a("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{delay:150,placement:"left",flipBehavior:["left","right","top","bottom"],maxWidth:300},expression:"{ delay: 150, placement: 'left', flipBehavior: ['left', 'right', 'top', 'bottom'], maxWidth: 300 }"}],staticClass:"blurb-tooltip",attrs:{content:t.book.blurb}}):t._e(),t._v(" "),a("div",{staticClass:"info-icons-wrapper"},[t.book.favorite?a("div",{staticClass:"favorite-marker"},[a("span",[a("font-awesome",{attrs:{fas:"",icon:"heart"}})],1),t._v(" "),a("span",[t._v("favorite")])]):t._e(),t._v(" "),"Finished"===t.book.progress?a("div",{staticClass:"finished-marker"},[a("span",[a("font-awesome",{attrs:{fas:"",icon:"check"}})],1),t._v(" "),a("span",[t._v("finished")])]):t._e(),t._v(" "),t.book.fromPlusCatalog?a("div",{staticClass:"plus-catalog-marker"},[t.book.unavailable?a("span",[a("font-awesome",{attrs:{fas:"",icon:"lock"}})],1):a("span",[a("font-awesome",{attrs:{fas:"",icon:"plus-circle"}})],1),t._v(" "),a("span",[t._v("catalog")])]):t._e()]),t._v(" "),a("div",{staticClass:"ale-info-indicator"},[a("div",[a("font-awesome",{attrs:{fas:"",icon:"book"}})],1)]),t._v(" "),t.book.cover?a("div",{staticClass:"cover-img-wrapper"},[a("img",{staticClass:"ale-cover-image",attrs:{src:t.makeCoverUrl(t.book.cover,280),alt:""}})]):a("div",{staticClass:"placeholder-cover"},[a("div",{staticClass:"cover-content"},[t.book.titleShort||t.book.title?a("div",{staticClass:"title"},[t._v(t._s(t.book.titleShort||t.book.title))]):t._e(),t._v(" "),t.book.authors?a("div",{staticClass:"author"},[t._v(t._s(t.book.authors[0].name))]):t._e()])])])])],1)}),[],!1,null,"7019bb96",null).exports}}]);
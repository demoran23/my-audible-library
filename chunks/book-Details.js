(self.webpackChunk=self.webpackChunk||[]).push([[661],{34291:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});const i={methods:{makeGoodReadsUrl:function(t){var e=(t=t||this.book).authors?t.authors[0].name+" - ":"",o=e+(t.titleShort||t.title);if(e&&o||o)return"https://www.goodreads.com/search?q="+encodeURIComponent(e&&o)}}}},36084:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i}),o(20266);const i={mixins:[o(83223).Z],methods:{progressbarWidth:function(t){if(t.progress){if("finished"===t.progress.toLowerCase().trim())return{width:"100%"};if(t.length){var e=this.timeStringToSeconds(t.progress),o=this.timeStringToSeconds(t.length);return{width:(e=o-e)/o*100+"%"}}return{width:0}}return{width:0}}}}},66623:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i}),o(72410),o(63238),o(40895);const i={methods:{secondsToTimeString:function(t,e){var o=function(t,o){return e?t:("000"+t).slice(-1*o)},i=parseFloat(t).toFixed(3),s=Math.floor(i/60/60),r=Math.floor(i/60)%60,a=(Math.floor(i-60*r),i.slice(-3),(s.toString().length>1?s:o(s,2))+(e?"h ":".")),n=o(r,2)+(e?"m ":"");return e&&!s&&(a=""),a+n}}}},83223:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i}),o(1203);const i={methods:{timeStringToSeconds:function(t){if(t&&t.match(/\d/)){var e=t.match(/[0-9]( ?)+(m|min|分)/),o=t.match(/\d+/g),i={},s=function(t){return 60*+t*60},r=function(t){return 60*+t};return 2===o.length?(i.h=o[0],i.m=o[1],i.numbers=s(i.h)+r(i.m)):e?(i.m=o[0],i.numbers=r(i.m)):(i.h=o[0],i.numbers=s(i.h)),i.numbers}return 0}}}},33501:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>N}),o(911),o(20266);var i=o(83223),s=o(66623),r=o(36084),a=o(26495),n=(o(61418),o(63238),o(5769),o(14078),o(46796));const l={name:"carousel",props:["books","width"],mixins:[n.Z,a.Z],components:{splide:function(){return o.e(301).then(o.bind(o,27067)).then((function(t){return t.Splide}))},"splide-slide":function(){return o.e(301).then(o.bind(o,27067)).then((function(t){return t.SplideSlide}))}},data:function(){return{loaded:!1,options:{type:"loop",rewind:!0,width:null,trimSpace:!1,gap:"4px",lazyLoad:"nearby",preloadPages:1,perPage:5},coverSize:127}},mounted:function(){this.$nextTick((function(){var t=window.innerWidth,e=t<="716";this.options.width=e?t:this.$el.offsetWidth;var o=e?t-84:this.$el.offsetWidth-84;t<="500"&&(this.coverSize=102),t<="415"&&(this.coverSize=72),this.options.perPage=Math.floor(o/this.coverSize),this.loaded=!0}))},methods:{sliderTippyContent:function(t){return'<div style="font-weight: normal; text-align: left; padding: 10px; font-size: 13px; line-height: 17px">'+(t.title?'<div><h3 style="font-size: 1.2em; font-weight: bold; margin: 0 0 3px 0;">'+t.title+"</h3>":"")+(t.subHeading?'<div><h2 style="font-size: 1.1em; font-weight: normal; margin: 0 0 3px 0;">'+t.subHeading+"</h2>":"")+(t.authors?"<div><strong>Authors: </strong>"+t.authors+"</div>":"")+(t.narrators?"<div><strong>Narrators: </strong>"+t.narrators+"</div>":"")+(t.length?"<div><strong>Length: </strong>"+t.length+"</div>":"")+"</div>"}}};var c=o(40810);const u=(0,c.Z)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ale-carousel"},[o("h3",{staticClass:"ale-heading"},[t._t("default")],2),t._v(" "),t.loaded?o("splide",{ref:"splide",attrs:{options:t.options}},t._l(t.books,(function(e,i){return o("splide-slide",{key:i,staticClass:"ale-carousel-item"},[o("a",{directives:[{name:"tippy",rawName:"v-tippy"}],attrs:{href:t.makeUrl("book",e.asin),target:"_blank",content:t.sliderTippyContent(e)}},[o("img",{staticClass:"cover",attrs:{"data-splide-lazy":t.makeCoverUrl(e.cover,150),alt:""}})])])})),1):t._e()],1)}),[],!1,null,null,null).exports;o(52327),o(61013),o(95623),o(61514),o(1203);const h=(0,c.Z)({name:"openInApp",props:["book","size","muted"],data:function(){return{url:null}},created:function(){(this.muted||this.book&&this.book.asin)&&(this.url="https://smart.link/o3waqx4wg1gdn?asin="+this.book.asin)}},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.url?o("a",{staticClass:"audible-app-link",class:{muted:t.muted,placeholder:!t.book.asin},attrs:{href:t.url,target:"_blank",tabindex:t.muted?0:-1}},[o("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:t.muted?"left":"top",flipBehavior:t.muted?["left","top","bottom","right"]:["top","bottom","right","left"]},expression:"{ \n      placement: (muted ? 'left' : 'top'), \n      flipBehavior: (muted ? ['left', 'top', 'bottom', 'right'] : ['top', 'bottom', 'right', 'left']) \n    }"}],staticClass:"gr-icon",style:{width:(t.size||30)+"px",height:(t.size||30)+"px"},attrs:{content:"Open in app"}},[o("img",{attrs:{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTEuNSA5My43IiB3aWR0aD0iMTUxLjUiIGhlaWdodD0iOTMuNyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxnPjxnPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc1LjggODAuN2w3NS43LTQ3LjJ2MTIuOEw3NS44IDkzLjcgMCA0Ni4zVjMzLjVsNzUuOCA0Ny4yeiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc1LjggMjEuNWE0OC4xNyA0OC4xNyAwIDAgMC00MC43IDIxLjkgMTIuOTQgMTIuOTQgMCAwIDEgMS44LTEuNmMyMS4zLTE3LjcgNTItMTMuNyA2OC43IDguNmwxMS4xLTcuMWE0OS44MiA0OS44MiAwIDAgMC00MC45LTIxLjgiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03NS44IDQzLjRhMjcuNzIgMjcuNzIgMCAwIDAtMjIuNCAxMS41IDIyLjcgMjIuNyAwIDAgMSAxMy41LTQuNGM4LjIgMCAxNS41IDQuMiAyMC40IDExLjNsMTAuNi02LjZhMjUuNzkgMjUuNzkgMCAwIDAtMjIuMS0xMS44TTI0LjYgMjQuMkM1NS44LS40IDk5LjkgNi4zIDEyMy40IDM5bC4yLjIgMTEuNS03LjFhNzAuODIgNzAuODIgMCAwIDAtMTE4LjYgMCA2MC42MyA2MC42MyAwIDAgMSA4LjEtNy45Ii8+PC9nPjwvZz48L3N2Zz4=",alt:""}})])]):t._e()}),[],!1,null,"351f0ece",null).exports,g={name:"booksInSeries",props:["book"],mixins:[n.Z],components:{openInApp:h},data:function(){return{inSeries:!1,showAllToggle:!1,series:{collection:null,toggle:!1}}},created:function(){this.series.collection=this.getBooksInSeries(),this.series.count=this.getSeriesCount();var t=this;_.each(this.series.collection,(function(e){if(e.books.length)return t.inSeries=!0,!1}))},mounted:function(){var t=this;this.$store.state.sticky.booksInSeriesToggle&&this.$nextTick((function(){t.$root.$emit("resizeSummary")}))},methods:{toggleAll:function(){this.$store.commit("stickyProp",{key:"booksInSeriesAll",value:!this.$store.state.sticky.booksInSeriesAll}),this.series.collection=this.getBooksInSeries()},seriesNotInLibraryLink:function(t,e){return t.asin?this.makeUrl("book",t.asin):e?this.makeUrl("series",{asin:e}):void 0},goToBookInSeries:function(t,e){e?"series"!==this.$route.name?this.$router.push({name:"series",params:{series:t.asin},query:{book:e.asin}}):this.$root.$emit("book-clicked",{book:e}):t&&("series"!==this.$route.name?this.$router.push({name:"series",params:{series:t.asin}}):(this.$root.$emit("book-clicked",{book:null}),scroll({top:0})))},getBookNumber:function(t,e){var o=_.find(t.series,{asin:e}).bookNumbers;return o?o.join(","):""},getBooksInSeries:function(){var t=this,e=[];return t.book.series&&_.each(t.book.series,(function(o,i){var s=_.find(t.$store.state.library.series,{asin:o.asin});if(s){var r=s.books;s.allBooks&&(t.$store.state.sticky.booksInSeriesAll&&(r=s.allBooks),t.showAllToggle=!0),e.push({asin:o.asin,name:o.name,length:s.length,books:_.map(r,(function(e){var o=e.asin||e;return _.includes(s.books,o)?_.find(t.$store.state.library.books,{asin:o}):(e.notInLibrary=!0,e)}))})}})),e.length>0?e:null},getSeriesCount:function(){var t=[];return _.each(this.series.collection,(function(e){t.push(e.books.length)})),t.join(", ")},booksInSeriesLabelClick:function(){var t=this;this.$store.commit("stickyProp",{key:"booksInSeriesToggle",value:!this.$store.state.sticky.booksInSeriesToggle}),this.$nextTick((function(){t.$root.$emit("resizeSummary")}))},numbersClass:function(t){var e=t.progress;return{finished:!(!e||!e.toLowerCase().match("finished")),reading:!(!e||e.toLowerCase().match("finished")),unfinished:!t.progress,current:this.book.asin===t.asin,"not-in-library":t.notInLibrary}},iconTippyContent:function(t){if(t.notInLibrary)return"Not in library...";var e=this.numbersClass(t),o="";return e.finished?o="Finished!":e.unfinished?o="Not started...":e.reading&&(o="Started..."),o},booksInSeriesIcon:function(t){if(t.notInLibrary)return"ban";var e=this.numbersClass(t),o="";return e.finished?o="archive":e.unfinished?o="book":e.reading&&(o="book-reader"),o}}},d=(0,c.Z)(g,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.inSeries?o("div",[o("div",{staticClass:"label hidden-section-label my-books-in-series-label",on:{click:t.booksInSeriesLabelClick}},[o("span",{staticClass:"heading"},[t._v("My books in the series")]),t._v(" "),o("span",{staticClass:"count"},[t._v(t._s(t.series.count))]),t._v(" "),o("font-awesome",{attrs:{fas:"",icon:t.$store.state.sticky.booksInSeriesToggle?"chevron-up":"chevron-down"}})],1),t._v(" "),t.$store.state.sticky.booksInSeriesToggle?o("div",{staticClass:"hidden-section my-books-in-series"},[t.showAllToggle?o("div",{staticClass:"show-all-toggle"},[o("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right",flipBehavior:["right","top","bottom"]},expression:"{ placement: 'right', flipBehavior: ['right', 'top', 'bottom'] }"}],attrs:{content:t.$store.state.sticky.booksInSeriesAll?"Hide books in the series that are not in your library":"Show all books in the series"},on:{click:t.toggleAll}},[o("span",[t._v(t._s(t.$store.state.sticky.booksInSeriesAll?"Hide":"Show"))]),t._v(" "),o("font-awesome",{attrs:{icon:["fas","ban"]}})],1)]):t._e(),t._v(" "),t._l(t.series.collection,(function(e,i){return o("div",{key:e.asin,staticClass:"series-section"},[o("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right",flipBehavior:["right","top","bottom"],maxWidth:300,allowHTML:!0},expression:"{ placement: 'right', flipBehavior: ['right', 'top', 'bottom'], maxWidth: 300, allowHTML: true }"}],staticClass:"series-heading",attrs:{content:"<div style='text-align: left;'>The total number of books is based on every single listing in the series page, including different versions or bundles with books you may already have.</div>"}},[o("div",{staticClass:"series-name"},[o("a",{attrs:{href:"#"},on:{click:function(o){return o.preventDefault(),t.goToBookInSeries(e)}}},[t._v("\n            "+t._s(e.name)+"\n          ")])]),t._v(" "),o("div",{staticClass:"series-length"},[t._v("\n          "+t._s(e.books.length)+" / "+t._s(e.length)+"\n        ")])]),t._v(" "),t._l(e.books,(function(i,s){return o("div",{key:i.asin,staticClass:"numbers-list-item",class:t.numbersClass(i),attrs:{"data-series-name":e.name}},[o("open-in-app",{attrs:{size:14,book:i,muted:!0}}),t._v(" "),o("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"left",flipBehavior:["left","top","bottom"]},expression:"{ placement: 'left', flipBehavior: ['left', 'top', 'bottom'] }"}],staticClass:"icon",attrs:{content:t.iconTippyContent(i)}},[o("font-awesome",{attrs:{fas:"",icon:t.booksInSeriesIcon(i)}})],1),t._v(" "),i.notInLibrary&&i.asin?o("a",{staticClass:"clickety-click",attrs:{target:"_blank",href:t.seriesNotInLibraryLink(i,e.asin)}},[o("span",{staticClass:"numbers"},[t._v(t._s((i.notInLibrary?i.bookNumbers:t.getBookNumber(i,e.asin))||"∞"))]),t._v(" "),o("span",{staticClass:"title"},[t._v(t._s(i.title))])]):i.notInLibrary?o("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right",flipBehavior:["right","top","bottom"]},expression:"{ placement: 'right', flipBehavior: ['right', 'top', 'bottom'] }"}],staticClass:"clickety-click",staticStyle:{cursor:"default"},attrs:{content:"Not available..."}},[o("span",{staticClass:"numbers"},[t._v(t._s((i.notInLibrary?i.bookNumbers:t.getBookNumber(i,e.asin))||"∞"))]),t._v(" "),o("span",{staticClass:"title"},[t._v(t._s(i.title))])]):o("div",{staticClass:"clickety-click",on:{click:function(o){return o.preventDefault(),t.goToBookInSeries(e,i)}}},[o("span",{staticClass:"numbers"},[t._v(t._s(t.getBookNumber(i,e.asin)||"∞"))]),t._v(" "),o("span",{staticClass:"title"},[t._v(t._s(i.title))])])],1)}))],2)}))],2):t._e()]):t._e()}),[],!1,null,"00b89dd4",null).exports,m={name:"arrayToHTML",data:function(){return{inputDataExists:null}},props:["label","array","delim"],mixins:[n.Z],created:function(){this.inputDataExists=this.checkIfArrayHasData()},computed:{identifierClass:function(){return"details-"+_.kebabCase(this.label)}},methods:{checkIfArrayHasData:function(){return this.array&&!_.isEmpty(this.array)}}},p=(0,c.Z)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.inputDataExists?o("div",{class:t.identifierClass},[o("strong",{staticClass:"strong-label"},[t._v(t._s(t.label)+":")]),t._v(" "),t._l(t.array,(function(e,i){return o("span",{key:e.name+"("+i+")"},[o("span",[0!==i?o("span",[t._v(t._s(t.delim||", "))]):t._e(),t._v(" "),o("a",{attrs:{href:t.makeUrl(t.label.toLowerCase(),e),target:"_blank"}},[t._v(t._s(e.name))]),e.bookNumbers?o("span",{staticClass:"book-number"},[t._v("\n        (book\n        "),t._l(e.bookNumbers,(function(e,i){return o("span",[0!==i?o("span",[t._v(t._s(","))]):t._e(),o("span",[t._v(t._s(e))])])})),t._v(")")],2):t._e()])])}))],2):t._e()}),[],!1,null,null,null).exports,f={name:"bookSummary",props:["book","detailsEl"],mixins:[n.Z],components:{arrayToHTML:p},data:function(){return{summary:{readmore:{toggle:!1,exists:!1},maxHeight:null,maxHeightTemp:null}}},computed:{summaryHTML:function(){return this.book.summary||this.book.blurb}},mounted:function(){this.$nextTick((function(){this.getSummaryMaxHeight()}))},created:function(){this.$root.$on("afterWindowResize",this.getSummaryMaxHeight),this.$root.$on("resizeSummary",this.getSummaryMaxHeight)},beforeDestroy:function(){this.$root.$off("afterWindowResize",this.getSummaryMaxHeight),this.$root.$off("resizeSummary",this.getSummaryMaxHeight)},methods:{getSummaryMaxHeight:function(){window.innerWidth<=688?this.summaryHTML&&(this.summary.maxHeight=this.$refs.summaryMetaTop.offsetHeight+260+"px",this.summary.maxHeightTemp=this.summary.maxHeight):this.$nextTick((function(){var t=this.detailsEl.querySelector(".information").offsetHeight,e=this.$refs.summary.offsetHeight>t;this.summary.maxHeight=e?t+"px":null,this.summary.maxHeightTemp=t+"px"}))},summaryReadMoreclick:function(){var t=this.$refs.readMoreBtn.getBoundingClientRect().top;this.summary.readmore.toggle=!this.summary.readmore.toggle,this.summary.maxHeight=this.summary.readmore.toggle?"none":this.summary.maxHeightTemp,this.summary.readmore.toggle||this.$nextTick((function(){scroll({top:this.$refs.readMoreBtn.getBoundingClientRect().top+window.pageYOffset-t})}))}}},b=(0,c.Z)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"summaryWrapper",staticClass:"book-summary-wrapper",class:{expanded:t.summary.readmore.toggle},style:{maxHeight:t.summary.maxHeight,paddingBottom:t.summary.readmore.toggle?"40px":"0px"}},[o("div",{ref:"summary",staticClass:"book-summary"},[o("div",{ref:"summaryMetaTop",staticClass:"summary-meta-top"},[o("h2",{staticClass:"book-title"},[o("a",{attrs:{href:t.makeUrl("book",t.book.asin),target:"_blank",rel:"noopener nofollow noreferrer"}},[t._v("\n          "+t._s(t.book.title)+"\n        ")])]),t._v(" "),t.book.categories?o("div",{staticClass:"categories"},[t.book.categories?o("arrayToHTML",{attrs:{label:"Categories",array:t.book.categories,delim:" > "}}):t._e()],1):t._e(),t._v(" "),o("div",{staticClass:"inline-children smoll-text"},[t.book.releaseDate?o("div",{staticClass:"release-date"},[o("span",{staticClass:"strong-label"},[t._v("Released:")]),t._v(" "),o("span",[t._v(t._s(t.book.releaseDate))])]):t._e(),t._v(" "),t.book.storePageChanged?o("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{maxWidth:300},expression:"{ maxWidth: 300 }"}],staticClass:"store-page-changed",attrs:{content:"There is a store page for the book, but it's for a different version of the book. <br><br>This is the reason why some data is unavailable."}},[o("font-awesome",{attrs:{icon:["fas","shopping-bag"]}}),t._v("\n          changed\n        ")],1):t.book.storePageMissing?o("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{maxWidth:300},expression:"{ maxWidth: 300 }"}],staticClass:"store-page-missing",attrs:{content:"Store page was possibly removed or it became unavailable in your region since it was added. In some cases there may still be a store page for a different version of the book. <br><br>This is the reason why some data is unavailable."}},[o("font-awesome",{attrs:{icon:["fas","shopping-bag"]}}),t._v("\n          missing\n        ")],1):t._e()])]),t._v(" "),t.summaryHTML?o("div",{staticClass:"summary-inner-wrap",domProps:{innerHTML:t._s(t.summaryHTML)}}):t._e()]),t._v(" "),t.summary.maxHeight?o("div",{ref:"readMoreBtn",staticClass:"summary-read-more",on:{click:t.summaryReadMoreclick}},[o("span",[t._v(t._s(t.summary.readmore.toggle?"Read less":"Read more"))]),t._v(" "),o("font-awesome",{attrs:{fas:"",icon:t.summary.readmore.toggle?"chevron-up":"chevron-down"}})],1):t._e()])}),[],!1,null,"2b239898",null).exports,k={name:"goodReadsLink",props:["book","icon","topRight","size"],mixins:[o(34291).Z],data:function(){return{goodreadsUrl:null}},created:function(){this.book&&(this.goodreadsUrl=this.makeGoodReadsUrl())}},v=(0,c.Z)(k,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.goodreadsUrl?o("a",{class:{"top-right":t.topRight},attrs:{href:t.goodreadsUrl,target:"_blank"}},[t.icon?o("div",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"gr-icon",style:{width:(t.size||30)+"px",height:(t.size||30)+"px"},attrs:{content:"Search for the book in Goodreads"}},[o("img",{attrs:{src:"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01LjExMSAxOC45MDdoLjEyOWMuNTg1IDAgMS4xNzYgMCAxLjc2Mi4wMDUuMDc0IDAgLjE0My0uMDE5LjE2Ni4wOTguMzI4IDEuNjM2IDEuMzgzIDIuNTU5IDIuOSAyLjk5NSAxLjI0MS4zNTYgMi40OTUuMzY2IDMuNzQ5LjA4NCAxLjU1OC0uMzQ3IDIuNTgyLTEuMzI3IDMuMTM2LTIuODMxLjM2OS0xLjAwOC40OTQtMi4wNTMuNTA4LTMuMTE3LjAwNS0uMjcyLjAxNC0yLjIwMy0uMDA5LTIuNDc1bC0uMDQxLS4wMTRjLS4wMzcuMDctLjA3OS4xMzYtLjExNS4yMDYtMS4wMTkgMi4wMi0yLjgyNiAzLjE1OS00Ljg2MSAzLjIzOS00Ljc1LjE4OC03LjgxMi0yLjY3Mi03LjkzMi04LjI1OS0uMDIzLTEuMTExLjA4My0yLjE5OC4zODMtMy4yNjcuOTUtMy4zMzMgMy40NC01LjU0MSA3LjA5Ny01LjU2OSAyLjgyNi0uMDE5IDQuNjgxIDEuODE0IDUuMzU5IDMuMjk1LjAyMy4wNTIuMDYuMTA4LjExLjA4OVYuNDk4aDIuMDQzYzAgMTMuMTM5LjAwNSAxNS41NzIuMDA1IDE1LjU3Mi0uMDA1IDMuNjgtMS4yMzIgNi43MzYtNC43NSA3LjYwMy0zLjIwNS43OTItNy4zMzIuMjI1LTkuMDM5LTIuNjgxLS4zNjktLjYzMy0uNTQ0LTEuMzI3LS41OTktMi4wODZ6bTYuNzQ3LTE3LjE5NEM5LjQzNyAxLjY5IDYuODU0IDMuNjIxIDYuNTU0IDcuOTg1Yy0uMTg5IDIuNzY2LjY4MyA1LjcyOCAzLjI5OCA2Ljk2NiAxLjI3My42MDUgMy40MjcuNzAzIDQuOTk1LS40MDggMi4xOTUtMS41NTYgMi44OTEtNC41NDcgMi41MjctNy4yMTktLjQ0OC0zLjMzMy0yLjIwNS01LjYyNS01LjUxNi01LjYxMXoiIGZpbGw9IiM0ZTM0MmUiLz48L3N2Zz4=",alt:""}})]):o("span",[t._v("Search in Goodreads")])]):t._e()}),[],!1,null,"66a19166",null).exports;o(27471),o(72482);const y={name:"starRating",props:["size","rating","stars","ratings","number","numberOf","block","image","placeholderImage","placeholderOpacity","noPlaceholder"],data:function(){return{opt:null,config:{rating:null,length:null}}},created:function(){this.opt={rating:5,stars:5,size:15,number:!1,numberOf:!1,block:!1,image:!1,placeholderImage:!1,placeholderOpacity:!1,noPlaceholder:!1};var t=this.splitDecimals(this.rating);this.config.rating=this.toPercentage(t);var e=this.noPlaceholder||this.opt.noPlacehoder;this.config.length=e?this.config.rating.whole+(this.config.rating.fraction?1:0):parseInt(this.stars||this.opt.stars,10)},methods:{splitDecimals:function(t){var e,o=""+t;return o.indexOf(".")>-1?e=o.split("."):o.indexOf(",")>-1&&(e=o.split(",")),e?{whole:e[0],fraction:"."+e[1]}:{whole:t,fraction:null}},toPercentage:function(t){var e={whole:parseInt(t.whole,10)};return t.fraction&&(e.originalFraction=t.fraction),t.fraction&&(e.fraction=Math.floor(100*parseFloat(t.fraction,10))),e}}},M={name:"aleBookBasicInfo",props:["book","goodreads"],components:{goodReadsLink:v,arrayToHTML:p,starRating:(0,c.Z)(y,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.config.rating?o("div",{staticClass:"sRatings-wrapper",class:{"sRatings-block":t.block||t.opt.block},attrs:{"data-rating":t.rating||0}},[t._l(t.config.length,(function(e,i){return o("div",{key:i,style:{width:t.config.rating.whole===e-1&&(t.noPlaceholder||t.opt.noPlaceholder)&&t.config.rating.fraction?(t.size||t.opt.size)*t.config.rating.originalFraction+"px":(t.size||t.opt.size)+"px",height:(t.size||t.opt.size)+"px"},attrs:{"data-star":e,"data-whole":t.config.rating.whole===e,"data-fraction":t.config.rating.fraction&&t.config.rating.whole===e-1}},[t.config.rating.whole<=e&&!t.noPlaceholder&&!t.opt.noPlaceholder?o("div",{staticClass:"sRatings-placeholder",class:{"sRatings-show":t.config.rating.whole<e},style:{left:t.config.rating.fraction&&t.config.rating.whole===e-1?t.config.rating.fraction+"%":"0%","background-size":(t.size||t.opt.size)+"px","background-image":!!(t.image||t.placeholderImage||t.opt.placeholderImage)&&"url("+(t.image&&!t.placeholderImage?t.image:t.placeholderImage||t.opt.placeholderImage)+")",opacity:t.placeholderOpacity||t.opt.placeholderOpacity}}):t._e(),t._v(" "),t.config.rating.whole>=e||t.config.rating.fraction&&t.config.rating.whole===e-1?o("div",{staticClass:"sRatings-star",style:{width:t.config.rating.whole>=e||t.config.rating.whole===e-1&&(t.noPlaceholder||t.opt.noPlaceholder)?"100%":t.config.rating.fraction+"%","background-size":(t.size||t.opt.size)+"px","background-image":!(!t.image&&!t.opt.image)&&"url("+(t.image||t.opt.image)+")"}}):t._e()])})),t._v(" "),t.number||t.opt.number?o("div",{staticClass:"text-label",style:{width:!(!t.numberOf&&!t.opt.numberOf)&&"auto",padding:!(!t.numberOf&&!t.opt.numberOf)&&"0 6px"}},[t._v(t._s(t.numberOf||t.opt.numberOf?t.rating+"/"+(t.stars||t.opt.stars):t.rating))]):t._e(),t._v(" "),t.ratings?o("div",{staticClass:"rating-count"},[t._v("("+t._s(t.ratings)+" ratings)")]):t._e()],2):t._e()}),[],!1,null,"c8c094a8",null).exports},methods:{myRatingLabel:function(t){switch(parseFloat(t)){case 1:return"Not for me";case 2:return"It’s okay";case 3:return"Pretty good";case 4:return"It’s great";case 5:return"I love it"}}}},w=(0,c.Z)(M,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"basic-info"},[t.book.authors?o("arrayToHTML",{attrs:{label:"Author",array:t.book.authors}}):t._e(),t._v(" "),t.book.narrators?o("arrayToHTML",{attrs:{label:"Narrator",array:t.book.narrators}}):t._e(),t._v(" "),t.book.series?o("arrayToHTML",{attrs:{label:"Series",array:t.book.series}}):t._e(),t._v(" "),t.book.publishers?o("arrayToHTML",{attrs:{label:"Publisher",array:t.book.publishers}}):t._e(),t._v(" "),t.book.length?o("div",[o("strong",{staticClass:"strong-label"},[t._v("Length:")]),t._v("\n    "+t._s(t.book.length)+"\n  ")]):t._e(),t._v(" "),o("div",{staticClass:"line-it-up"},[t.book.rating?o("div",{staticClass:"rating"},[o("strong",{staticClass:"strong-label"},[t._v("Rating:")]),t._v(" "),o("star-rating",{attrs:{size:12,rating:t.book.rating,number:"true",ratings:t.book.ratings}})],1):t._e(),t._v(" "),t.book.myRating?o("div",{staticClass:"own-rating"},[o("strong",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"top",flipBehavior:["top","right","left","bottom"],allowHTML:!0},expression:"{ placement: 'top', flipBehavior: ['top', 'right', 'left', 'bottom'], allowHTML: true }"}],staticClass:"strong-label",attrs:{content:"<ul><li>1 = Not for me</li><li>2 = It’s okay</li><li>3 = Pretty good</li><li>4 = It’s great</li><li>5 = I love it</li></ul>"}},[t._v("My rating: ")]),t._v(" "),o("star-rating",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right",flipBehavior:["right","top","bottom"]},expression:"{ placement: 'right', flipBehavior: ['right', 'top', 'bottom']  }"}],attrs:{size:12,content:t.myRatingLabel(t.book.myRating),rating:t.book.myRating,number:"true"}})],1):t._e()])],1)}),[],!1,null,"6b86dd30",null).exports,I=(0,c.Z)({name:"favoriteBook",props:["topRight","size"]},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("font-awesome",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"favorite",class:{"top-right":t.topRight},style:{width:(t.size||30)+"px",height:"auto"},attrs:{fas:"",icon:"heart",content:"This book is one of my favorites!"}})}),[],!1,null,"cf36e8ec",null).exports;var x=o(8546);const T=(0,c.Z)({name:"openWebPlayer",props:["book","icon","topRight","size"],data:function(){return{url:null}},created:function(){this.book&&(this.url="https://www.audible.com/webplayer?asin="+this.book.asin)}},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.url?o("a",{class:{"top-right":t.topRight},attrs:{href:t.url,target:"_blank"}},[t.icon?o("div",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"gr-icon audible-app-link",style:{width:(t.size||30)+"px",height:(t.size||30)+"px"},attrs:{content:"Open web player"}},[o("img",{attrs:{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTEuNSA5My43IiB3aWR0aD0iMTUxLjUiIGhlaWdodD0iOTMuNyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxnPjxnPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc1LjggODAuN2w3NS43LTQ3LjJ2MTIuOEw3NS44IDkzLjcgMCA0Ni4zVjMzLjVsNzUuOCA0Ny4yeiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc1LjggMjEuNWE0OC4xNyA0OC4xNyAwIDAgMC00MC43IDIxLjkgMTIuOTQgMTIuOTQgMCAwIDEgMS44LTEuNmMyMS4zLTE3LjcgNTItMTMuNyA2OC43IDguNmwxMS4xLTcuMWE0OS44MiA0OS44MiAwIDAgMC00MC45LTIxLjgiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03NS44IDQzLjRhMjcuNzIgMjcuNzIgMCAwIDAtMjIuNCAxMS41IDIyLjcgMjIuNyAwIDAgMSAxMy41LTQuNGM4LjIgMCAxNS41IDQuMiAyMC40IDExLjNsMTAuNi02LjZhMjUuNzkgMjUuNzkgMCAwIDAtMjIuMS0xMS44TTI0LjYgMjQuMkM1NS44LS40IDk5LjkgNi4zIDEyMy40IDM5bC4yLjIgMTEuNS03LjFhNzAuODIgNzAuODIgMCAwIDAtMTE4LjYgMCA2MC42MyA2MC42MyAwIDAgMSA4LjEtNy45Ii8+PC9nPjwvZz48L3N2Zz4=",alt:""}})]):o("span",[t._v("Search in Goodreads")])]):t._e()}),[],!1,null,"a5b93062",null).exports,L={name:"book-info-toolbar",props:["book"],components:{goodReadsLink:v,favoriteBook:I,sampleButton:x.Z,openInApp:h,openWebPlayer:T},data:function(){return{size:20}}},S={name:"bookDetails",components:{bookBasicInfo:w,bookInfoToolbar:(0,c.Z)(L,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"book-info-toolbar"},[t.book.favorite?o("favorite-book",{attrs:{size:t.size,book:t.book}}):t._e(),t._v(" "),o("sampleButton",{attrs:{size:t.size,book:t.book}}),t._v(" "),o("good-reads-link",{attrs:{size:t.size,book:t.book,icon:!0}}),t._v(" "),o("open-in-app",{attrs:{size:t.size,book:t.book}}),t._v(" "),o("open-web-player",{attrs:{size:t.size,book:t.book,icon:!0}})],1)}),[],!1,null,null,null).exports,carousel:u,booksInSeries:d,arrayToHTML:p,bookSummary:b},mixins:[i.Z,s.Z,r.Z,a.Z,n.Z],props:["book","index","booksWrapper"],data:function(){return{maxWidth:"unset",scrollTop:0,loading:!0,clickedBook:null}},created:function(){this.clickedBook=document.querySelector('.ale-book[data-asin="'+this.book.asin+'"]')||document.querySelector('.ale-row[data-asin="'+this.book.asin+'"]'),this.resetScroll(),this.scrollTop=window.pageYOffset,this.$root.$on("afterWindowResize",this.onWindowResize)},mounted:function(){this.maxWidth=this.repositionBookDetails()+"px",this.$updateQuery({query:"book",value:this.book.asin}),this.loading=!1},beforeDestroy:function(){this.$root.$off("afterWindowResize",this.onWindowResize)},computed:{getMaxWidth:function(){return"spreadsheet"===this.$store.state.sticky.viewMode||window.innerWidth>800?this.maxWidth:"800px"}},methods:{onWindowResize:function(t){this.maxWidth=this.repositionBookDetails()+"px",t.widthChanged&&this.resetScroll()},changeUrl:function(){_.get(this.$route,"query.book")!==this.book.asin&&this.$router.replace({query:{book:this.book.asin}})},resetScroll:function(){this.$nextTick((function(){var t=document.querySelector("#ale-navigation.regular")?document.querySelector("#ale-navigation.regular").offsetHeight:0;"grid"===this.$store.state.sticky.viewMode?scroll({top:this.clickedBook.offsetTop-t-25}):document.querySelector(".list-view-inner-wrap").scroll({top:this.clickedBook.offsetTop-t-25})}))},repositionBookDetails:function(){var t=document.querySelector(".ale-books"),e=t.querySelector(".ale-book")?t.querySelectorAll(".ale-book"):t.querySelector("table tbody").querySelectorAll(".ale-row"),o={};o.el=e[this.index],o.index=this.index,o.width=o.el.getBoundingClientRect().width,o.siblings=e;var i={};i.el=t,i.width=i.el.getBoundingClientRect().width;var s={};s.cols=Math.floor(i.width/o.width)||1,s.cols<2?s.rowEndEl=o.el:(s.currentRow=Math.floor(o.index/s.cols)+1,s.rowEnd=s.currentRow*s.cols,s.getRowEndEl=function(t){var e=o.siblings[t];return e||(e=s.getRowEndEl(--t)),e},s.rowEndEl=s.getRowEndEl(s.rowEnd-1));var r=document.querySelector(".target-row-end");return r&&r.classList.remove("target-row-end"),s.rowEndEl.classList.add("target-row-end"),s.rowEndEl.parentNode.insertBefore(this.$refs.bookDetails,s.rowEndEl.nextSibling),"spreadsheet"!==this.$store.state.sticky.viewMode&&this.repositionBookDetailsArrow(o.el),"spreadsheet"===this.$store.state.sticky.viewMode?i.width-60:o.width*s.cols},repositionBookDetailsArrow:function(t){var e=t.getBoundingClientRect().left+window.scrollX+t.offsetWidth/2;this.$refs.arrow.style.left=e+"px"},openAdjacentBookDetails:function(t){var e=this;if("grid"===this.$store.state.sticky.viewMode)switch(t.srcKey){case"left":case"tabShift":this.$root.$emit("book-clicked",{book:this.$store.getters.collection[this.index-1]});break;case"right":case"tab":this.$root.$emit("book-clicked",{book:this.$store.getters.collection[this.index+1]});break;case"up":case"down":var o={};o.el=document.querySelector(".ale-books"),o.width=o.el.offsetWidth;var i={};i.el=this.clickedBook,i.index=this.index,i.width=i.el.offsetWidth;var s=Math.floor(o.width/i.width);this.$root.$emit("book-clicked",{book:"up"===t.srcKey?e.$store.getters.collection[this.index-s]:function t(o){var i=e.$store.getters.collection[o];return i||(i=t(--o)),i}(this.index+s)})}else switch(t.srcKey){case"left":case"up":case"tabShift":this.$root.$emit("book-clicked",{book:this.$store.getters.collection[this.index-1]});break;case"right":case"down":case"tab":this.$root.$emit("book-clicked",{book:this.$store.getters.collection[this.index+1]})}},closeBookDetails:function(){this.$emit("update:book",null),void 0!==this.$route.query&&this.$router.replace({query:{book:void 0}})},progressTooltip:function(t){if("finished"===t.progress.toLowerCase().trim()){var e=this.timeStringToSeconds(t.length);return"Finished: ( "+this.secondsToTimeString(e)+" )"}var o=this.timeStringToSeconds(t.progress),i=this.timeStringToSeconds(t.length),s=i-o;return"Progress: "+this.secondsToTimeString(s)+" / "+this.secondsToTimeString(i)},progressInfo:function(t){if(t.progress&&t.length){if("finished"===t.progress.toLowerCase().trim()){var e=this.timeStringToSeconds(t.length);return'<div class="stretch-center" style="flex: 1;"><strong>Finished!</strong> ( '+this.secondsToTimeString(e,!0)+" )</div>"}var o=this.timeStringToSeconds(t.progress),i=this.timeStringToSeconds(t.length),s=i-o;return"<strong>Progress: </strong><div>"+this.secondsToTimeString(s,!0)+" / "+this.secondsToTimeString(i,!0)+"</div>"}return"<div>Length: "+(t.length||"unkown")+"</div>"}}},N=(0,c.Z)(S,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"shortkey",rawName:"v-shortkey.once",value:["esc"],expression:"['esc']",modifiers:{once:!0}}],ref:"bookDetails",class:{"spreadsheet-details":"spreadsheet"===t.$store.state.sticky.viewMode},attrs:{id:"ale-bookdetails"},on:{shortkey:function(e){return t.closeBookDetails()}}},["spreadsheet"!==t.$store.state.sticky.viewMode?o("div",{ref:"arrow",staticClass:"arrow"}):t._e(),t._v(" "),o("div",{directives:[{name:"shortkey",rawName:"v-shortkey.once",value:{left:["arrowleft"],up:["arrowup"],right:["arrowright"],down:["arrowdown"],tab:["tab"],tabShift:["tab","shift"]},expression:"{ left: ['arrowleft'], up: ['arrowup'], right: ['arrowright'], down: ['arrowdown'], tab: ['tab'], tabShift: ['tab', 'shift'] }",modifiers:{once:!0}}],attrs:{id:"book-info-container"},on:{shortkey:t.openAdjacentBookDetails}},[o("div",{staticClass:"inner-wrap",style:{maxWidth:t.getMaxWidth}},[o("font-awesome",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"left",flipBehavior:["left","right"],allowHTML:!0},expression:"{ placement: 'left', flipBehavior: ['left', 'right'], allowHTML: true }"}],staticClass:"book-details-info",attrs:{icon:["fas","info-circle"],content:"<div style='text-align: left;'><h3 style='margin: 0; padding-top: 10px; padding-left: 15px;'>Shortcuts</h3><ul><li><strong>Close:</strong> Esc</li><li><strong>Previous book:</strong> shift+tab, left arrow, up arrow (spreadsheet)</li><li><strong>Next book:</strong> tab, right arrow, down arrow (spreadsheet)</li><li><strong>Previous row:</strong> up arrow (Grid view)</li><li><strong>Next row:</strong> down arrow (Grid view)</li></ul></div>"}}),t._v(" "),o("div",{staticClass:"top"},[o("div",{ref:"information",staticClass:"information"},[o("div",{staticClass:"cover-wrap"},[o("a",{attrs:{href:t.makeUrl("book",t.book.asin),target:"_blank"}},[o("div",{staticClass:"progressbar"},[o("div",{staticClass:"progress",style:t.progressbarWidth(t.book)})]),t._v(" "),t.book.cover&&t.$store.state.windowWidth>688?o("img",{staticClass:"cover",attrs:{src:t.makeCoverUrl(t.book.cover)}}):t._e()])]),t._v(" "),o("div",{staticClass:"progress-info",domProps:{innerHTML:t._s(t.progressInfo(t.book))}}),t._v(" "),o("div",{staticClass:"basic-details"},[o("book-info-toolbar",{attrs:{book:t.book}}),t._v(" "),o("book-basic-info",{attrs:{book:t.book}})],1),t._v(" "),o("books-in-series",{attrs:{book:t.book}})],1),t._v(" "),o("book-summary",{attrs:{detailsEl:t.$el,book:t.book}})],1),t._v(" "),!t.loading&&t.book.peopleAlsoBought?o("carousel",{key:this.maxWidth,attrs:{books:t.book.peopleAlsoBought}},[t._v("\n        Listeners also enjoyed\n      ")]):t._e(),t._v(" "),!t.loading&&t.book.moreLikeThis?o("carousel",{key:this.maxWidth,attrs:{books:t.book.moreLikeThis}},[t._v("\n        More listens like this\n      ")]):t._e()],1)])])}),[],!1,null,"18aaadff",null).exports},8546:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});const i=(0,o(40810).Z)({name:"sampleButton",props:["book","index","topRight","size"],methods:{playSample:function(t,e){this.$root.$emit("play-audio",{from:"sampleButton",route:this.$route,book:t,index:e})}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("font-awesome",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"pointer",class:{"top-right":t.topRight},style:{width:(t.size||30)+"px",height:"auto"},attrs:{fas:"",icon:"play-circle",content:"Play sample audio"},on:{click:function(e){return t.playSample(t.book,t.rowIndex)}}})}),[],!1,null,"ee87bac2",null).exports}}]);
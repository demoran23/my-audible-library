(self.webpackChunk=self.webpackChunk||[]).push([[384],{2753:(t,e,s)=>{"use strict";s.d(e,{Z:()=>v}),s(8010),s(2327),s(1013),s(5623),s(1514),s(9217);const i={methods:{sortName:function(t){return _.orderBy(t.books,(function(t){if(t.name)return t.name}),t.direction)}}},r={methods:{sortIsbns:function(t){return _.orderBy(t.books,(function(e){if(!e.isbns)return null;if("isbn10"===t.sortKey){var s=_.find(e.isbns,["type","ISBN_10"]);return s?""+s.identifier:null}if("isbn13"===t.sortKey){var i=_.find(e.isbns,["type","ISBN_13"]);return i?""+i.identifier:null}}),t.direction)}}},o={methods:{sortTitle:function(t){return _.orderBy(t.books,(function(e){var s=e[t.sortKey];return s?"title"===t.sortKey?e.title||e.titleShort:_.isArray(s)&&_.find(s,"name")?_.map(s,"name").join(", "):s:null}),t.direction)}}},n={methods:{sortAmount:function(t){return _.orderBy(t.books,(function(e){if("amountTotal"===t.sortKey){if(e.allBooks)return e.allBooks.length;if(e.allBooksMinusDupes)return e.allBooksMinusDupes.length}else if(e.books)return e.books.length}),t.direction)}}};var a=s(5619);const l={mixins:[a.Z],methods:{sortLength:function(t){var e=this;return _.orderBy(t.books,(function(t){return t.length?e.timeStringToSeconds(t.length):0}),t.direction)}}};s(5163);const c={methods:{sortRatings:function(t){return _.orderBy(t.books,(function(e){if(e[t.sortKey]){var s=e[t.sortKey];return Number(s)}return 0}),t.direction)}}};s(2077),s(1203);const u={methods:{sortByLength:function(t){return _.orderBy(t.books,(function(e){if("narratorsNumber"===t.sortKey){if(e.narrators){var s=_.find(e.narrators,(function(t){return t.name.match("full cast")}));return s&&1===e.narrators.length?99999999:e.narrators.length-(s?1:0)}return 0}return e[t.sortKey].length||0}),t.direction)}}};s(266);const h={mixins:[a.Z],methods:{sortProgress:function(t){var e=this;return _.orderBy(t.books,[function(t){if(t.progress){if("finished"===t.progress.toLowerCase().trim())return 100;if(t.length){var s=e.timeStringToSeconds(t.progress),i=e.timeStringToSeconds(t.length);return(s=i-s)/i*100}return 0}return 0},function(t){return t.length?!e.timeStringToSeconds(t.length):0}],t.direction)}}},p={methods:{sortDateAdded:function(t){return _.orderBy(t.books,(function(t){return t.added}),t.direction)}}},m={methods:{sortFavorites:function(t){return _.orderBy(t.books,(function(t){return t.favorite}),t.direction)}}},d={methods:{sortWhispersync:function(t){return _.orderBy(t.books,(function(e){var s=e[t.sortKey];return s?"owned"===s?2:"available"===s?1:void 0:0}),t.direction)}}};s(7471),s(2482),s(3512);const f={methods:{sortBookNumbers:function(t){var e=this.$route.params.series,s=_.find(this.$store.state.library.series,{asin:e});return _.orderBy(t.books,(function(t){return s.books.indexOf(t.asin)}),t.direction)},sortBookNumbersOriginal:function(t){var e=this.$route.params.series;return _.orderBy(t.books,(function(t){if(e&&t.series){var s=_.find(t.series,{asin:e});return _.isArray(s.bookNumbers)?s.bookNumbers[0]:void 0}if(_.find(t.series,"bookNumbers")){var i=_.filter(t.series,"bookNumbers");i=_.map(i,"bookNumbers"),i=_.flatten(i),_.isEmpty(i)&&(i=null);var r=_.isArray(i)?i[0]:i,o="string"==typeof r?r.split("-"):[r];return parseFloat(o[0])}return _.find(t.series)?-1:-2}),t.direction)}}},g={methods:{sortReleaseDate:function(t){return _.orderBy(t.books,(function(t){return t.releaseDate?new Date(t.releaseDate.split("-").join("/")):0}),t.direction)}}};s(911);const v={mixins:[i,r,o,n,l,c,h,u,p,m,d,f,g,{methods:{sortStringNameProp:function(t){var e=t.sortKey.replace(".name","");return _.orderBy(t.books,(function(t){return t[e]?t[e][0].name.toLowerCase():null}),t.direction)}}},{methods:{sortMissing:function(t){return _.orderBy(t.books,[function(t){return t.allBooks.length-t.books.length},function(t){return t.myRating}],[t.direction,"desc"])}}}],methods:{filterBooks:function(t){var e=_.filter(this.$store.state.listRenderingOpts.filter,{type:"filter",active:!0}),s=_.find(this.$store.state.listRenderingOpts.filter,{type:"filter"}),i=_.filter(this.$store.state.listRenderingOpts.filter,{type:"filterExtras",active:!0});return e||i?_.filter(t,(function(t){return function(t){var r=_.map(e,(function(e){return!!e.condition(t)})),o=_.map(i,(function(e){return!!e.condition(t)}));return(!s||_.includes(r,!0))&&!_.includes(o,!1)}(t)})):t},sortBooks:function(t){var e=_.find(this.$store.state.listRenderingOpts.sort,(function(t){return!("randomize"!==t.key||!t.active)||!!t.current||void 0}));if(e){var s={books:t,direction:e.active?"desc":"asc",sortKey:e.key};switch(s.sortKey){case"randomize":t=_.shuffle(t);break;case"bookNumbers":s.missingNumber=0,t=this.sortBookNumbersOriginal(s);break;case"seriesOrder":s.missingNumber=0,t=this.sortBookNumbers(s);break;case"added":t=this.sortDateAdded(s);break;case"releaseDate":t=this.sortReleaseDate(s);break;case"authors.name":case"narrators.name":case"publishers.name":case"categories":t=this.sortStringNameProp(s);break;case"narratorsNumber":t=this.sortByLength(s);break;case"title":case"series":case"format":case"isNew":case"language":case"fromPlusCatalog":case"unavailable":case"favorite":case"downloaded":case"storePageMissing":case"storePageChanged":case"tags":t=this.sortTitle(s);break;case"whispersync":t=this.sortWhispersync(s);break;case"length":t=this.sortLength(s);break;case"myRating":case"rating":case"ratings":t=this.sortRatings(s);break;case"progress":t=this.sortProgress(s);break;case"favorite":t=this.sortFavorites(s);break;case"name":t=this.sortName(s);break;case"amount":case"amountTotal":t=this.sortAmount(s);break;case"isbn10":case"isbn13":t=this.sortIsbns(s);break;case"missing":t=this.sortMissing(s)}}return t}}}},3486:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});const i={data:function(){return{subPageSource:{collection:null,name:null,wishlist:!1,library:!1,books:!1}}},methods:{findSubPageSource:function(){var t=this.$route.query.subPageSource||this.$store.state.sticky.subPageSource;return{collection:this.$store.state.library[t],name:t,wishlist:"wishlist"===t,library:"books"===t,books:"books"===t}}},watch:{"$route.query.subPageSource":function(t){!this.$route.meta.gallery&&this.$route.meta.subPage&&(this.listReady=!1,this.$nextTick((function(){this.subPageSource=this.findSubPageSource(),this.makeCollection()})))}},beforeCreate:function(){this.$store.commit("prop",{key:"pageCollection",value:[]}),this.$store.commit("prop",{key:"mutatingCollection",value:[]})},created:function(){this.$route.meta.subPage&&(this.subPageSource=this.findSubPageSource()),!this.$route.meta.gallery&&this.$route.meta.subPage&&this.makeCollection()}}},730:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i}),s(2759),s(2077),s(895),s(2482),s(911),s(3238);const i={methods:{slugify:function(t){var e="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s=new RegExp(e.split("").join("|"),"g");return encodeURIComponent(t.toString().toLowerCase().replace(/\s+/g,"-").replace(s,(function(t){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(e.indexOf(t))})).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""))}}}},5619:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i}),s(2077),s(1203);const i={methods:{timeStringToSeconds:function(t){if(t&&t.match(/\d/)){var e=t.match(/[0-9]( ?)+(m|min|分)/),s=t.match(/\d+/g),i={},r=function(t){return 60*+t*60},o=function(t){return 60*+t};return 2===s.length?(i.h=s[0],i.m=s[1],i.numbers=r(i.h)+o(i.m)):e?(i.m=s[0],i.numbers=o(i.m)):(i.h=s[0],i.numbers=r(i.h)),i.numbers}return 0}}}},7816:(t,e,s)=>{"use strict";s.d(e,{Z:()=>p}),s(5769),s(3238),s(1418),s(7460),s(4078),s(2077),s(3526),s(9217),s(8010),s(266),s(2327),s(1013),s(1203),s(911);var i=s(2631);var r=s(810);const o=(0,r.Z)({name:"searchIcons",props:["listName"],data:function(){return{items:[{name:"scope",on:!0,active:!1,icon:"microscope",tooltip:"Change the search scope for more accurate results"},{name:"filter",on:!0,active:!1,icon:"filter",tooltip:"Filter books"},{name:"sort",on:!0,active:!1,icon:"sort",tooltip:"Sort books"}]}},computed:{filtersActive:function(){return this.$store.getters.filterExtrasKeys||"notStarted,started,finished"!==this.$store.getters.filterKeys&&this.$store.getters.filterKeysLength}},methods:{openSearchOptions:function(t,e){var s=this.listName;this.$emit("update:listName",!1),s!==t.name&&this.$nextTick((function(){this.$emit("update:listName",t.name)}))}}},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icons"},[s("div",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"icon-wrap",attrs:{content:"Items in current selection: <strong>"+t.$store.getters.collection.length+"</strong> / <strong>"+t.$store.getters.collectionTotal+"</strong>"}},[s("div",{staticClass:"book-in-selection"},[s("div",{staticClass:"inner-wrap"},[t._v("\n        "+t._s(t.$store.getters.collection.length)+"\n      ")])])]),t._v(" "),t._l(t.items,(function(e){return s("div",{directives:[{name:"tippy",rawName:"v-tippy"}],key:e.name,staticClass:"icon-wrap",class:{disabled:!e.on},attrs:{content:e.tooltip},on:{click:function(s){return t.openSearchOptions(e,s)}}},["scope"!==e.name&&t.$store.state.listRenderingOpts[e.name].length>0||"scope"===e.name&&t.$store.state.listRenderingOpts[e.name].length>1?s("div",{staticClass:"search-opt-btn",class:{active:t.listName===e.name,"active-filters":"filter"===e.name&&t.filtersActive},attrs:{"data-option":e.name}},[s("font-awesome",{attrs:{fas:"",icon:e.icon}})],1):t._e()])}))],2)}),[],!1,null,"b2367542",null).exports,n={name:"searchOptions",props:["listName"],components:{sorter:s(7710).Z},data:function(){return{css:{arrow:{left:"0px"},options:{right:"0px"},filter:{top:"40px"}}}},created:function(){if(this.optionsList=this.$store.state.listRenderingOpts[this.listName],"filter"===this.listName){var t=document.querySelector("#ale-navigation.regular");this.css.filter={top:t?t.offsetHeight+"px":0}}},mounted:function(){this.repositionSearchOptions(),this.listName&&document.addEventListener("click",this.outsideClick),this.listName&&document.addEventListener("touchend",this.outsideClick),this.$root.$on("repositionSearchOpts",this.repositionSearchOptions),this.$root.$on("afterWindowResize",this.repositionSearchOptions)},beforeDestroy:function(){document.removeEventListener("click",this.outsideClick),document.removeEventListener("touchend",this.outsideClick),this.$root.$off("repositionSearchOpts",this.repositionSearchOptions),this.$root.$off("afterWindowResize",this.repositionSearchOptions),scroll({top:0,behavior:"smooth"}),this.$store.commit("prop",{key:"searchOptOpenHeight",value:null})},methods:{resetFilters:function(){this.$updateQuery({query:"filter",value:null}),this.$updateQuery({query:"filterExtras",value:null}),this.$store.commit("resetFilters"),this.$root.$emit("start-filter")},outsideClick:function(t){if(this.listName&&!this.$store.state.searchOptCloseGuard){var e=t.target.closest(".search-options-inner-wrap"),s=t.target.closest(".search-opt-btn");e||s||this.$emit("update:listName",!1)}},repositionSearchOptions:_.debounce((function(){this.$nextTick((function(){if("filter"===this.listName){var t=document.querySelector("#ale-navigation.regular");this.css.filter={top:t?t.offsetHeight+"px":0}}var e={};e.el=this.$refs.options,e.width=e.el.offsetWidth,e.left=e.el.offsetLeft;var s={};s.el=document.querySelector("#ale-search > .icons"),s.width=s.el.offsetWidth;var i={};i.el=document.querySelector(".search-opt-btn.active").parentNode,i.width=i.el.offsetWidth,i.left=i.el.offsetLeft,i.middle=s.width-(i.left+i.width/2),e.position=i.middle-e.width/2;var r=i.el.getBoundingClientRect().left+i.width/2+e.width/2-window.innerWidth,o=r>0?r+20:0;this.css.options.right=e.position+o+"px",this.css.arrow.left=e.width/2-10+o+"px"}))}),150,{leading:!0,trailing:!1}),sortersMounted:_.debounce((function(){var t=this.$refs.options.offsetHeight+this.$refs.options.offsetTop;window.innerHeight>t&&(t=window.innerHeight),this.$store.commit("prop",{key:"searchOptOpenHeight",value:t})}),250,{leading:!1,trailing:!0})}},a=(0,r.Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"options",class:t.listName+"-options",style:t.css.options,attrs:{id:"search-options"}},[s("div",{staticClass:"search-options-inner-wrap"},[s("div",{staticClass:"search-opts-arrow",style:t.css.arrow}),t._v(" "),"filter"===t.listName&&t.$store.getters.regularFilters?s("ul",{staticClass:"regular-filters",style:t.css.filter},[s("li",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"top",flipBehavior:["top","right","bottom","left"]},expression:"{ placement: 'top', flipBehavior: ['top', 'right', 'bottom', 'left'] }"}],staticClass:"reset-filters",attrs:{content:"Reset filters"},on:{click:t.resetFilters}},[s("font-awesome",{attrs:{fas:"",icon:"redo-alt"}})],1),t._v(" "),s("li",{staticClass:"total"},[s("span",{class:{difference:t.$store.getters.collection.length!==t.$store.getters.collectionTotal}},[t._v(t._s(t.$store.getters.collection.length))]),t._v(" / "+t._s(t.$store.getters.collectionTotal))]),t._v(" "),t._l(t.optionsList,(function(e,i){return("wishlist"===t.$route.name?"filter"!==e.type||e.excludeFromWishlist:"filter"!==e.type)?t._e():s("li",{key:e.key,staticClass:"search-option"},[s("sorter",{attrs:{label:e.label,item:e,index:i,currentList:t.optionsList,listName:t.listName},on:{"hook:mounted":t.sortersMounted}})],1)}))],2):t._e(),t._v(" "),s("ul",t._l(t.optionsList,(function(e,i){return("wishlist"===t.$route.name?e.excludeFromWishlist||"grid"!==t.$store.state.sticky.viewMode&&"sortValues"===e.key||"filter"===e.type:"grid"!==t.$store.state.sticky.viewMode&&"sortValues"===e.key||"filter"===e.type)?t._e():s("li",{key:e.key,staticClass:"search-option",class:{extras:e.type&&e.type.match(/extra/i),divider:"divider"===e.type}},["divider"!==e.type?s("sorter",{attrs:{label:e.label,item:e,index:i,currentList:t.optionsList,listName:t.listName},on:{"hook:mounted":t.sortersMounted}}):t._e()],1)})),0)])])}),[],!1,null,null,null).exports;var l=s(2753),c=s(9846),u=s(2382);const h={name:"aleBookdetails",components:{searchIcons:o,searchOptions:a,viewModeSwitcher:function(){return s.e(961).then(s.bind(s,2054))},pageTitle:c.Z,libraryWishlistSwitcher:u.Z},mixins:[l.Z],props:["collectionSource","pageTitle","pageSubTitle"],data:function(){return{enableZoomTimer:null,fuse:null,fuseOptions:{keys:["title"],location:0,distance:150,threshold:.25,shouldSort:!0,includeScore:!1,includeMatches:!1,useExtendedSearch:!0},listName:!1,waypointOpts:{rootMargin:"-37px"},fixedSearch:!1,highlightSearch:!1}},mounted:function(){if(this.$route.query.search){var t=decodeURIComponent(this.$route.query.search);this.$store.commit("prop",{key:"searchQuery",value:t})}this.$store.commit("prop",{key:"collectionSource",value:this.collectionSource});var e=this.$route.query.sort||this.$route.query.filter||this.$route.query.filterExtras,s=_.get(this.$store.state,this.collectionSource);e?((this.$route.query.filter||this.$route.query.filterExtras)&&(s=this.filterBooks(s)),this.$route.query.sort&&(s=this.sortBooks(s)),this.$store.commit("prop",{key:"mutatingCollection",value:s})):this.$store.commit("prop",{key:"mutatingCollection",value:this.sortBooks(this.filterBooks(s))}),this.$route.query.search&&(decodeURIComponent(this.$route.query.search),this.$route.query.sort&&(this.fuseOptions.shouldSort=!1),this.search()),this.$root.$on("ios-auto-zoom-disable",this.iosAutozoomDisable),this.$refs.aleSearch.addEventListener("touchstart",this.iosAutozoomDisable),this.$root.$on("start-scope",this.scope),this.$root.$on("start-sort",this.sort),this.$root.$on("start-filter",this.filter),this.$root.$on("search-focus",this.focusOnSearch),this.$store.commit("prop",{key:"searchMounted",value:!0})},beforeDestroy:function(){this.$store.commit("prop",{key:"searchQuery",value:""}),this.$root.$off("ios-auto-zoom-disable",this.iosAutozoomDisable),this.$refs.aleSearch.removeEventListener("touchstart",this.iosAutozoomDisable),this.$root.$off("start-scope",this.scope),this.$root.$off("start-sort",this.sort),this.$root.$off("start-filter",this.filter),this.$root.$off("search-focus",this.focusOnSearch),this.$store.commit("prop",{key:"searchMounted",value:!1})},methods:{scope:function(){this.$root.$emit("book-clicked",{book:null}),this.$store.getters.searchIsActive&&(this.$store.commit("prop",{key:"mutatingCollection",value:this.sortBooks(this.filterBooks(_.get(this.$store.state,this.collectionSource)))}),this.$store.state.searchSort||(this.fuseOptions.shouldSort=!1),this.search())},filter:function(){this.$root.$emit("book-clicked",{book:null}),this.$store.commit("prop",{key:"mutatingCollection",value:this.sortBooks(this.filterBooks(_.get(this.$store.state,this.collectionSource)))}),this.$store.getters.searchIsActive&&(this.$store.state.searchSort||(this.fuseOptions.shouldSort=!1),this.search())},sort:function(){this.$root.$emit("book-clicked",{book:null}),this.$store.commit("prop",{key:this.$store.getters.searchIsActive?"searchCollection":"mutatingCollection",value:this.sortBooks(this.$store.getters.collection)})},search:_.debounce((function(t,e){if(decodeURIComponent(this.$route.query.search),this.$root.$emit("book-clicked",{book:null}),t)if(this.fuseOptions.shouldSort=!0,this.$store.commit("prop",{key:"searchQuery",value:t.target.value}),this.$updateQuery({query:"search",value:encodeURIComponent(t.target.value)}),""!==t.target.value.trim())this.$route.query.sort&&(this.$updateQuery({query:"sort",value:null}),this.$updateQuery({query:"sortDir",value:null}));else{var s=_.find(this.$store.state.listRenderingOpts.sort,"current");this.$updateQuery({query:"sort",value:s.key}),this.$updateQuery({query:"sortDir",value:s.active?"desc":"asc"})}if(this.fuseOptions.shouldSort&&this.$store.commit("prop",{key:"searchSort",value:this.$store.getters.searchIsActive}),this.$store.getters.searchIsActive){var r=this.modifyQuery(this.$store.state.searchQuery);this.fuseOptions.keys=this.aliciaKeys,this.fuse=new i.Z(this.$store.state.mutatingCollection,this.fuseOptions);var o=this.fuse.search(r);o.length>0&&(o=_.map(o,(function(t){return t.item}))),this.$store.commit("prop",{key:"searchCollection",value:o})}else this.$store.commit("prop",{key:"searchCollection",value:[]})}),270,{leading:!1,trailing:!0}),searchEnterBlur:_.debounce((function(t){this.$refs.searchInput.blur()}),100,{leading:!1,trailing:!0}),restoreOptions:function(){updateListRenderingOpts()},focusOnSearch:function(){var t=this;scroll({top:0}),this.highlightSearch=!0,setTimeout((function(){t.highlightSearch=!1}),1200),this.$refs.searchInput.focus()},scrolling:_.throttle((function(t){!this.fixedSearch&&window.pageYOffset>44?this.fixedSearch=!0:this.fixedSearch&&window.pageYOffset<44&&(this.fixedSearch=!1)}),350),onWaypoint:function(t){var e=t.going;t.direction,e===this.$waypointMap.GOING_IN?this.fixedSearch=!1:this.fixedSearch=!0},modifyQuery:function(t){var e=t.match(/&/),s=t.match(/ ?and ?/);return e?t+"|"+t.replace("&","and"):s?t+"|"+t.replace("and","&"):t},iosAutozoomDisable:function(){if(document.querySelector(".is-ios")){var t=document.querySelector("head").querySelector("meta[name=viewport]");t.content="width=device-width, initial-scale=1.0, user-scalable=0",clearTimeout(this.enableZoomTimer),this.enableZoomTimer=setTimeout((function(){t.content="width=device-width, initial-scale=1.0, user-scalable=1"}),700)}}},computed:{aliciaKeys:function(){var t=_.filter(this.$store.state.listRenderingOpts.scope,["active",!0]);return _.map(t,(function(t){if(t.active)return t.key}))},placeholder:function(){var t;return"Search: "+(t=this.aliciaKeys,_.map(t,(function(t){return t.replace(".name","")})).join(", "))}}},p=(0,r.Z)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.pageTitle||t.pageSubTitle?s("page-title",{attrs:{pageTitle:t.pageTitle,pageSubTitle:t.pageSubTitle}}):t._e(),t._v(" "),t.$route.meta.subPage?s("library-wishlist-switcher",{attrs:{aboveSearch:!0}}):t._e(),t._v(" "),s("div",{ref:"searchWrap",class:{"search-fixed":t.fixedSearch,"highlight-search":t.highlightSearch},attrs:{id:"ale-search-wrap"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.listName,expression:"listName"}],attrs:{id:"search-dropdown-overlay"}}),t._v(" "),s("div",{ref:"aleSearch",attrs:{id:"ale-search"}},[s("div",{staticClass:"search-wrapper",on:{click:function(e){return t.$refs.searchInput.focus()}}},[s("input",{ref:"searchInput",attrs:{type:"search",placeholder:t.placeholder},domProps:{value:t.$store.state.searchQuery},on:{input:t.search,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchEnterBlur.apply(null,arguments)}}})]),t._v(" "),s("search-icons",{attrs:{"list-name":t.listName},on:{"update:listName":function(e){t.listName=e},"update:list-name":function(e){t.listName=e}}}),t._v(" "),t.listName?s("search-options",{attrs:{"list-name":t.listName},on:{"update:listName":function(e){t.listName=e},"update:list-name":function(e){t.listName=e}}}):t._e()],1),t._v(" "),t.$route.meta.gallery&&t.$store.state.windowWidth>=450?s("view-mode-switcher"):t._e()],1)],1)}),[],!1,null,null,null).exports},2382:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});const i=(0,s(810).Z)({name:"libraryWishlistSwitcher",props:["aboveSearch"],created:function(){},methods:{switcher:function(t){this.$updateQuery({query:"subPageSource",value:t}),this.$store.commit("stickyProp",{key:"subPageSource",value:t})}}},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.$route.meta.subPage&&!t.$route.meta.gallery&&(t.$store.state.library.books||t.$store.state.library.extras.pages.books)&&(t.$store.state.library.wishlist||t.$store.state.library.extras.pages.wishlist)?s("div",{class:{"above-search":t.aboveSearch},attrs:{id:"library-wishlist-switcher"}},[s("button",{class:{active:"books"===(t.$route.query.subPageSource||t.$store.state.sticky.subPageSource)},on:{click:function(e){return t.switcher("books")}}},[t._v("\n    Library\n  ")]),t._v(" "),s("button",{class:{active:"wishlist"===(t.$route.query.subPageSource||t.$store.state.sticky.subPageSource)},on:{click:function(e){return t.switcher("wishlist")}}},[t._v("\n    Wishlist\n  ")])]):t._e()}),[],!1,null,"6cbb47eb",null).exports},9846:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});const i=(0,s(810).Z)({name:"pageTitle",props:["pageTitle","pageSubTitle"],mounted:function(){this.pageTitle&&this.$store.commit("prop",{key:"pageTitle",value:this.pageTitle}),this.pageSubTitle&&this.$store.commit("prop",{key:"pageSubTitle",value:this.pageSubTitle})},beforeDestroy:function(){this.$store.commit("prop",{key:"pageTitle",value:null})}},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.pageTitle||t.pageSubTitle?s("div",{staticClass:"gallery-title-wrapper"},[t.pageTitle?s("h2",{staticClass:"gallery-title"},[t._v("\n    "+t._s(t.pageTitle)+"\n  ")]):t._e(),t._v(" "),s("div",{staticClass:"divider"}),t._v(" "),t.pageSubTitle?s("h3",{staticClass:"gallery-sub-title"},[t._v("\n    "+t._s(t.pageSubTitle)+"\n  ")]):t._e()]):t._e()}),[],!1,null,null,null).exports},7710:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r}),s(5769),s(3238),s(1418),s(7460),s(4078),s(2077),s(1203),s(8010),s(1013),s(5623),s(1514),s(5699),s(2482),s(2327);const i={name:"sorter",props:["label","currentList","listName","item","index","tippyTop"],mixins:[s(730).Z],components:{VueSlider:function(){return s.e(268).then(s.t.bind(s,7865,23))},Multiselect:function(){return s.e(268).then(s.bind(s,6813))}},data:function(){return{range:null,dropdownOptions:null}},created:function(){if(this.item.range){var t=this.item.rangeMin(),e=this.item.rangeMax();this.range={min:t,max:e,value:_.isArray(this.item.range)?this.item.range:[t,e]},this.item.rangeMarks&&(this.range.marks=this.item.rangeMarks(e));var s={listName:this.listName,index:this.index,value:this.item.value,range:this.range.value,active:this.item.active};this.$store.commit("updateListRenderingOpts",s)}this.$store.getters.filterExtrasKeys.match(this.item.key)&&!this.dropdownOptions&&this.item.dropdownOpts&&(this.dropdownOptions=this.item.dropdownOpts())},computed:{filterAmounts:function(){this.$root.$emit("repositionSearchOpts");var t=!(this.item.range||this.item.dropdownOpts),e=!t&&!0===this.item.active;if(t||e){var s=this,i=_.filter(this.$store.state.listRenderingOpts.filter,{type:"filterExtras",active:!0}),r="filter"===this.item.type?this.$store.getters.searchIsActive?this.$store.state.searchCollection:this.$store.getters.collectionSource:this.$store.getters.collection;return _.filter(r,(function(t){return s.item.condition(t)&&function(t){var e=_.map(i,(function(e){return!!e.condition(t)}));return!_.includes(e,!1)}(t)})).length}return 0},rangeVal:function(){return this.item.range&&!0!==this.item.range?this.item.range:this.range.value},inputVmodel:{get:function(){return this.item.active},set:function(t){var e={listName:this.listName,index:this.index,active:t};this.item.group&&(e.group=!0),this.$store.commit("updateListRenderingOpts",e),this.doTheThings(t)}},isActiveSortItem:function(){if("sort"===this.listName){if(!this.$store.state.searchSort)return _.findIndex(this.currentList,"current")===this.index}else if("filter"===this.listName)return!1}},methods:{tooltipFormatter:function(t){return t+this.item.rangeSuffix},dropdownChanged:function(t){var e={listName:this.listName,index:this.index,active:t.length>0,value:t};this.item.group&&(e.group=!0),this.$store.commit("updateListRenderingOpts",e),this.doTheThings(t,!0)},dropdownOpened:function(t){!this.dropdownOptions&&this.item.dropdownOpts&&(this.dropdownOptions=this.item.dropdownOpts())},rangeChanged:function(t){var e={listName:this.listName,index:this.index,active:!0,range:t};this.item.group&&(e.group=!0),this.$store.commit("updateListRenderingOpts",e),this.doTheThings(t,!0)},adjustRange:function(t){var e={listName:this.listName,index:this.index,active:!0,range:_.cloneDeep(this.rangeVal)};"left"===t?e.range[0]=this.range.min:e.range[1]=this.range.max,this.item.group&&(e.group=!0),this.$store.commit("updateListRenderingOpts",e),this.doTheThings(e.range,!0)},doTheThings:function(t,e){this.saveOptions(t,e),"sortValues"===this.item.key&&this.$root.$emit("book-clicked",{book:null}),"scope"===this.listName?this.$root.$emit("start-scope"):"sort"!==this.listName&&("randomize"!==this.item.key||this.$store.getters.searchIsActive)||"sortValues"===this.item.key?"filter"===this.listName&&this.$root.$emit("start-filter"):(this.$store.commit("prop",{key:"searchSort",value:!1}),this.$root.$emit("start-sort"))},saveOptions:function(t,e){if("sortValues"===this.item.key)this.$updateQuery({query:this.item.key,value:t});else if("sort"===this.item.type)this.$updateQuery({query:this.item.type,value:this.item.key}),this.$updateQuery({query:"sortDir",value:t?"desc":"asc"});else if("filter"===this.listName){if("filter"===this.item.type&&this.$updateQuery({query:this.item.type,value:encodeURIComponent(this.$store.getters.filterKeys)}),"filterExtras"===this.item.type){var s=this,i=_.map(s.$store.getters.filterExtrasKeys.split(","),(function(t){var e=_.find(s.$store.state.listRenderingOpts.filter,{key:t});return e&&e.range?encodeURIComponent(t+":"+e.range[0]+"-"+e.range[1]):e&&e.value&&e.value.length>0?encodeURIComponent(t+":")+_.map(e.value,(function(t){return encodeURIComponent(t)})).join("|"):t?encodeURIComponent(t):void 0}));this.$updateQuery({query:this.item.type,value:(1!==i.length||void 0!==i[0])&&i.join(",")})}}else"scope"===this.listName&&this.$updateQuery({query:this.listName,value:encodeURIComponent(this.$store.getters.scopeKeys)})}}},r=(0,s(810).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"sorter-button-wrapper"},[t.item?s("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{delay:150,maxWidth:350,placement:t.tippyTop?"top":"left",flipBehavior:t.tippyTop?["top","bottom","left","right"]:["left","top","bottom","right"],distance:t.listName?20:10},expression:"{ \n    delay: 150,\n    maxWidth: 350, \n    placement: (tippyTop ? 'top' : 'left'), \n    flipBehavior: (tippyTop ? ['top', 'bottom', 'left', 'right'] : ['left', 'top', 'bottom', 'right']),\n    distance: listName ? 20 : 10,\n  }"}],class:t.item.key,attrs:{content:!!t.item.tippy&&t.item.tippy}},[s("label",{staticClass:"sorter-button",class:{ranged:t.item.range,"faux-disabled":"filterExtras"===t.item.type&&t.filterAmounts<1,"is-dropdown":t.item.dropdownOpts}},[!1===t.label?s("span",{staticClass:"input-label",class:{active:t.isActiveSortItem}},[t._t("default")],2):t._e(),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVmodel,expression:"inputVmodel"}],attrs:{type:"checkbox",disabled:!!t.item.range&&t.item.range&&t.range.min===t.range.max},domProps:{value:t.index,checked:Array.isArray(t.inputVmodel)?t._i(t.inputVmodel,t.index)>-1:t.inputVmodel},on:{change:function(e){var s=t.inputVmodel,i=e.target,r=!!i.checked;if(Array.isArray(s)){var o=t.index,n=t._i(s,o);i.checked?n<0&&(t.inputVmodel=s.concat([o])):n>-1&&(t.inputVmodel=s.slice(0,n).concat(s.slice(n+1)))}else t.inputVmodel=r}}}),t._v(" "),"sort"===t.item.type?s("span",{staticClass:"sortbox",class:{active:t.isActiveSortItem}},[s("font-awesome",{attrs:{fas:"",icon:"sort-down"}}),t._v(" "),s("font-awesome",{attrs:{fas:"",icon:"sort-up"}})],1):t.item.radiobutton?s("span",{staticClass:"radiobutton"},[s("font-awesome",{attrs:{fas:"",icon:"circle"}}),t._v(" "),s("font-awesome",{attrs:{fas:"",icon:"circle"}})],1):s("span",{staticClass:"checkbox"},[s("font-awesome",{attrs:{fas:"",icon:"square"}}),t._v(" "),s("font-awesome",{attrs:{fas:"",icon:"check"}})],1),t._v(" "),!1!==t.label?s("span",{staticClass:"input-label",class:{active:t.isActiveSortItem}},[t._v("\n        "+t._s(t.item.label||t.item.key.replace(".name",""))+"\n      ")]):t._e(),t._v(" "),"filter"===t.listName?s("span",{staticClass:"books-in-filter"},[t._v("\n        "+t._s(t.filterAmounts)+"\n        ")]):t._e()]),t._v(" "),t.item.range?s("div",{staticClass:"range-slider"},[s("span",{staticStyle:{cursor:"w-resize"},on:{click:function(e){return t.adjustRange("left")}}},[t._v(t._s(t.rangeVal[0])+t._s(t.item.rangeSuffix))]),t._v(" "),s("vue-slider",{attrs:{dragOnClick:!0,adsorb:!0,lazy:!0,hideLabel:!0,included:!!t.range.marks,interval:t.item.rangeInterval||1,marks:t.range.marks||Math.abs(t.range.min-t.range.max)<=10,value:t.rangeVal,min:t.range.min,max:t.range.max,"min-range":t.item.rangeMinDist||0,"enable-cross":!1,"tooltip-formatter":t.item.tooltipFormatter||t.tooltipFormatter,"tooltip-placement":"top",tooltip:"active","use-keyboard":!1},on:{change:t.rangeChanged,"drag-start":function(e){return t.$store.commit("prop",{key:"searchOptCloseGuard",value:!0})},"drag-end":function(e){return t.$store.commit("prop",{key:"searchOptCloseGuard",value:!1})}}}),t._v(" "),s("span",{staticStyle:{cursor:"e-resize"},on:{click:function(e){return t.adjustRange("right")}}},[t._v(t._s(t.rangeVal[1])+t._s(t.item.rangeSuffix))])],1):t._e(),t._v(" "),t.item.dropdownOpts?s("div",[s("Multiselect",{ref:"multiselect",attrs:{value:t.item.value,placeholder:"Search...",options:t.dropdownOptions,mode:"tags",hideSelected:!0,clearOnSelect:!1,closeOnSelect:!1,multiple:!0,taggable:!0,searchable:!0},on:{change:t.dropdownChanged,open:t.dropdownOpened}})],1):t._e()]):t._e()])}),[],!1,null,"3459c286",null).exports}}]);
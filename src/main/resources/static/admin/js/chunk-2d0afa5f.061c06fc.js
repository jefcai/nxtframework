(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0afa5f"],{"0ee9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",[a("el-button",{attrs:{type:"primary"},on:{click:e.handleCreate}},[e._v("创建")]),e._v(" "),a("div",{staticStyle:{float:"right"}},[e._v("\n      是否推荐\n      "),a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.params.is_recommend,callback:function(t){e.$set(e.params,"is_recommend",t)},expression:"params.is_recommend"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v("\n      类别\n      "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.params.category_id,callback:function(t){e.$set(e.params,"category_id",t)},expression:"params.category_id"}},[a("el-option",{attrs:{value:"",label:"全部"}}),e._v(" "),e._l(e.category_list,(function(e){return a("el-option",{key:e.category_id,attrs:{label:e.category_name_display,value:e.category_id}})}))],2),e._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"搜索关键词"},model:{value:e.params.search_keyword,callback:function(t){e.$set(e.params,"search_keyword",t)},expression:"params.search_keyword"}}),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.change}},[e._v("筛选")])],1)],1),e._v(" "),a("el-card",{staticStyle:{"margin-top":"10px"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.listData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contentTitle",label:"标题"}}),e._v(" "),a("el-table-column",{attrs:{prop:"categoryName",label:"类型","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"日期"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.datelineCreateReadable))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"right",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-col",[a("i",{staticClass:"el-icon-bottom",on:{click:function(a){return e.handleSort(t.$index,t.row,"bot")}}}),e._v(" "),a("i",{staticClass:"el-icon-top",on:{click:function(a){return e.handleSort(t.$index,t.row,"top")}}})])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"",align:"right",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"推荐",align:"right",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){return e.changeRecommend(t.$index,t.row)}},model:{value:t.row.isRecommend,callback:function(a){e.$set(t.row,"isRecommend",a)},expression:"scope.row.isRecommend"}})]}}])})],1)],1),e._v(" "),a("el-row",{staticClass:"row-bg",staticStyle:{"margin-top":"20px"},attrs:{type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:12}},[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.handleDelete}},[e._v("删除")])],1),e._v(" "),a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:12}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-arrow-left"},on:{click:function(t){return e.handlePage(-1)}}},[e._v("上一页")]),e._v(" "),a("el-button",[e._v(e._s(e.listNumber)+"/"+e._s(e.pageCount))]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-arrow-right"},on:{click:function(t){return e.handlePage(1)}}},[e._v("下一页")])],1)],1)],1)},i=[],l=(a("96cf"),a("3b8d")),o=(a("ac6a"),a("db72")),r=a("5c96"),s=a("2f62"),c={data:function(){return{multipleSelection:[],options:[{value:"",label:"全部"},{value:"1",label:"仅含推荐"},{value:"0",label:"仅不推荐"}],value:"",params:{category_id:"",is_recommend:"",search_keyword:""},newParams:{}}},computed:Object(o["a"])({listData:function(){return this.$store.state.new.ListData},listNumber:function(){return this.$store.state.new.ListNumber}},Object(s["c"])({category_list:function(e){return e.new.CategoryListData},pageCount:function(e){return e.new.pageCount}})),created:function(){this.load(),this.$store.dispatch("new/getCategory")},methods:{load:function(){this.$store.commit("new/SET_LIST_NUMBER",1),this.$store.dispatch("new/getList",this.newParams)},change:function(){this.newParams=Object.assign({},this.params),this.$store.commit("new/SET_LIST_NUMBER",1),this.$store.dispatch("new/getList",this.newParams)},toggleSelection:function(e){var t=this;e?e.forEach((function(e){t.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handlePage:function(e){if(this.listNumber+e<1||this.listNumber+e>this.pageCount)return!1;this.$store.commit("new/SET_LIST_NUMBER",this.listNumber+e),this.$store.dispatch("new/getList",this.newParams)},handleSelectionChange:function(e){this.multipleSelection=e},handleSort:function(e,t,a){var n=0;if(n="top"===a?e-1:e+1,-1===n||n===this.listData.length)return!1;this.$store.commit("new/SWAP_LIST_DATA",{index:e,actionIndex:n}),this.$store.dispatch("new/swapData",{a_id:this.listData[n].id,b_id:this.listData[e].id})},handleDelete:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(this.multipleSelection),t=this.multipleSelection,a=0;case 3:if(!(a<t.length)){e.next=9;break}return e.next=6,this.$store.dispatch("new/deleteNew",t[a].id);case 6:a++,e.next=3;break;case 9:Object(r["Message"])({message:"删除成功！",type:"success",duration:1e3}),n=this,setTimeout((function(){n.load()}),500);case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleEdit:function(e,t){this.$router.push({name:"UpdateContent",params:{id:t.id}})},handleCreate:function(){this.$router.push({name:"CreateContent"})},changeRecommend:function(e,t){this.$store.dispatch("new/changeRecommend",{id:t.id,recommend:t.isRecommend})}}},u=c,d=a("2877"),h=Object(d["a"])(u,n,i,!1,null,null,null);t["default"]=h.exports}}]);
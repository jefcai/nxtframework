(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b52635a6"],{"6b5f":function(e,t,n){},"74b7":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-row",[n("el-button",{attrs:{type:"primary"},on:{click:e.handleCreate}},[e._v("新增运费模板")])],1),e._v(" "),e.heavyListData.length?n("el-card",{staticStyle:{"margin-top":"10px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",{staticStyle:{"margin-right":"50px"}},[e._v(e._s(e.heavyData.name))]),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:e.update_heavy}},[e._v("修改")]),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(t){return e.deleteFreight(e.heavyData.id)}}},[e._v("删除")]),e._v(" "),n("span",{staticStyle:{float:"right",padding:"3px 0"}},[e._v("\n        类型: 按重量计费\n      ")])],1),e._v(" "),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.heavyListData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange_heavy}},[n("el-table-column",{attrs:{prop:"productName",label:"配送区域"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("areaFilters")(t.row.regionList))+"\n        ")]}}],null,!1,11258266)}),e._v(" "),n("el-table-column",{attrs:{label:"首重量（克）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.billableQuantity)+"\n        ")]}}],null,!1,3637377831)}),e._v(" "),n("el-table-column",{attrs:{label:"运费（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n\n          "+e._s(t.row.billablePrice)+"\n\n        ")]}}],null,!1,2504644145)}),e._v(" "),n("el-table-column",{attrs:{label:"续重量（克）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n\n          "+e._s(t.row.additionQuantity)+"\n\n        ")]}}],null,!1,1553120786)}),e._v(" "),n("el-table-column",{attrs:{label:"运费（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n\n          "+e._s(t.row.additionPrice)+"\n\n        ")]}}],null,!1,1468359556)})],1)],1):e._e(),e._v(" "),e.piecesListData.length?n("el-card",{staticStyle:{"margin-top":"10px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",{staticStyle:{"margin-right":"50px"}},[e._v(e._s(e.piecesData.name))]),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:e.update_pieces}},[e._v("修改")]),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(t){return e.deleteFreight(e.piecesData.id)}}},[e._v("删除")]),e._v(" "),n("span",{staticStyle:{float:"right",padding:"3px 0"}},[e._v("\n        类型: 按件数计费\n      ")])],1),e._v(" "),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.piecesListData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange_pieces}},[n("el-table-column",{attrs:{prop:"productName",label:"配送区域"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("areaFilters")(t.row.regionList))+"\n        ")]}}],null,!1,11258266)}),e._v(" "),n("el-table-column",{attrs:{label:"首件数（件）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.billableQuantity)+"\n        ")]}}],null,!1,3637377831)}),e._v(" "),n("el-table-column",{attrs:{label:"运费（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n\n          "+e._s(t.row.billablePrice)+"\n\n        ")]}}],null,!1,2504644145)}),e._v(" "),n("el-table-column",{attrs:{label:"续件数（件）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n\n          "+e._s(t.row.additionQuantity)+"\n\n        ")]}}],null,!1,1553120786)}),e._v(" "),n("el-table-column",{attrs:{label:"运费（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n\n          "+e._s(t.row.additionPrice)+"\n\n        ")]}}],null,!1,1468359556)})],1)],1):e._e(),e._v(" "),e.volumeListData.length?n("el-card",{staticStyle:{"margin-top":"10px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",{staticStyle:{"margin-right":"50px"}},[e._v(e._s(e.volumeData.name))]),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:e.update_volume}},[e._v("修改")]),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(t){return e.deleteFreight(e.volumeData.id)}}},[e._v("删除")]),e._v(" "),n("span",{staticStyle:{float:"right",padding:"3px 0"}},[e._v("\n        类型: 按体积计费\n      ")])],1),e._v(" "),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.volumeListData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange_volume}},[n("el-table-column",{attrs:{prop:"productName",label:"配送区域"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("areaFilters")(t.row.regionList))+"\n        ")]}}],null,!1,11258266)}),e._v(" "),n("el-table-column",{attrs:{label:"首体积（立方米）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.billableQuantity)+"\n        ")]}}],null,!1,3637377831)}),e._v(" "),n("el-table-column",{attrs:{label:"运费（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n\n          "+e._s(t.row.billablePrice)+"\n\n        ")]}}],null,!1,2504644145)}),e._v(" "),n("el-table-column",{attrs:{label:"续体积（立方米）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n\n          "+e._s(t.row.additionQuantity)+"\n\n        ")]}}],null,!1,1553120786)}),e._v(" "),n("el-table-column",{attrs:{label:"运费（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n\n          "+e._s(t.row.additionPrice)+"\n\n        ")]}}],null,!1,1468359556)})],1)],1):e._e()],1)},l=[],i=(n("96cf"),n("3b8d")),r=(n("ac6a"),n("5c96"),n("2f62"),n("8a9d")),s={filters:{areaFilters:function(e){if(0===e.length)return"无";var t=[];return e.forEach((function(e){t.push(e.regionName)})),t.join(",")}},data:function(){return{multipleSelection_heavy:[],multipleSelection_pieces:[],multipleSelection_volume:[],piecesData:[],heavyData:[],volumeData:[],piecesListData:[],heavyListData:[],volumeListData:[]}},created:function(){this.load()},methods:{load:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["d"])({});case 2:t=e.sent,t.list.forEach((function(e){n.piecesListData=e.itemList,n.piecesData=e}));case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),handleSelectionChange_heavy:function(e){this.multipleSelection_heavy=e},handleSelectionChange_pieces:function(e){this.multipleSelection_pieces=e},handleSelectionChange_volume:function(e){this.multipleSelection_volume=e},deleteFreight:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=this,this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["b"])({id:t});case 2:l=e.sent,null!=l.status&&0===l.status?(n.$router.go(0),a.$message({type:"success",message:"删除成功"})):a.$message({type:"error",message:"删除失败"});case 4:case"end":return e.stop()}}),e)})))).catch((function(){a.$message({type:"info",message:"已取消删除"})}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleCreate:function(){this.$router.push({name:"CreateFreight"})},update_heavy:function(){this.$router.push({name:"UpdateFreight",params:{list:this.heavyData}})},update_pieces:function(){this.$router.push({name:"UpdateFreight",params:{list:this.piecesData}})},update_volume:function(){this.$router.push({name:"UpdateFreight",params:{list:this.volumeData}})}}},o=s,u=(n("e271"),n("2877")),c=Object(u["a"])(o,a,l,!1,null,"3507fcaf",null);t["default"]=c.exports},e271:function(e,t,n){"use strict";n("6b5f")}}]);
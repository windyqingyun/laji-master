webpackJsonp([26],{J5zB:function(a,t){},"z3t+":function(a,t,e){"use strict";function o(a){e("J5zB")}Object.defineProperty(t,"__esModule",{value:!0});var s=e("3cXf"),i=e.n(s),l={data:function(){return{dialogType:"edit",currentType:"label",load:{max:!0,min:!0},dialogVisible:!1,subData:{bookColor:"",bookLableName:""},rules:{bookColor:[{required:!0,message:"请选取颜色",trigger:"blur"}],bookLableName:[{required:!0,message:"内容不能为空",trigger:"blur"}],classificationName:[{required:!0,message:"请输入分类名",trigger:"blur"}]}}},mounted:function(){this.$store.dispatch("book/editBookEcho")},computed:{editBookEchoData:function(){return this.$store.state.book.editBookEchoData}},methods:{handleEdit:function(a,t){var e=this;this.dialogVisible=!0,this.currentType=a,this.$nextTick(function(){t?(e.dialogType="edit",e.subData=JSON.parse(i()(t))):(e.dialogType="add",e.subData="label"===a?{bookColor:"",bookLableName:""}:{classificationName:"",classificationmaxlco:"",classificationIco:"",orders:e.baseInfo.classificationList.length+1})})},handleDel:function(a){var t=this,e=function(e,o){t.$refs.propertyForm.validate(function(s){s&&(t.$myLoad("del"===a?"正在删除中...":"正在更新中..."),t.$ajax(e,o,function(e){t.dialogVisible=!1,t.$loading().close(),200===e.returnCode&&(t.$message({message:"del"===a?"删除成功":"更新成功",type:"success"}),t.$store.dispatch("book/editBookEcho"))}))})};"label"===this.currentType?"del"===a?e("/admin/deleteAttributeLable",{id:this.subData.id}):"update"===a?e("/admin/updateAttributeLable",this.subData):e("/admin/addAttributeLable",this.subData):"class"===this.currentType&&("del"===a?e("/admin/deleteClassification",{id:this.subData.id}):"update"===a?e("/admin/updateClassificationData",this.subData):e("/admin/addClassification",this.subData))},uploadProgress1:function(a){console.log(a),this.load.max=!1},uploadEnd1:function(a){this.load.max=!0,200===a.returnCode?(this.subData.classificationmaxlco=a.data,this.$store.dispatch("book/editBookEcho")):this.$message({message:a.msg,type:"warning"})},uploadProgress2:function(){this.load.min=!1},uploadEnd2:function(a){this.load.min=!0,200===a.returnCode?(this.subData.classificationIco=a.data,this.$store.dispatch("book/editBookEcho")):this.$message({message:a.msg,type:"warning"})}}},n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"book-property-wrap"},[e("el-alert",{attrs:{title:"操作说明",type:"info","show-icon":""}},[e("div",[e("p",[a._v("您可以通过点击标签名或分类名来修改相关信息，也可以直接删除。")]),a._v(" "),e("p",[e("span",{staticClass:"red"},[a._v("提示：")]),a._v("删除标签或分类会导致原来书籍标签或分类丢失，请谨慎使用！")]),a._v(" "),e("p",[e("span",[a._v("注意事项：")]),a._v("1.分类图标上传大图尺寸414X180、小图尺寸70X70，请严格按照尺寸要求操作")])])]),a._v(" "),e("el-row",{directives:[{name:"loading",rawName:"v-loading",value:this.$store.state.book.loading,expression:"this.$store.state.book.loading"}],staticClass:"mbt20 book-property-list",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},[e("h2",{staticClass:"tab-title"},[a._v("书籍标签")]),a._v(" "),a._l(a.editBookEchoData.booklablesList,function(t){return e("el-button",{key:t.id,style:{borderColor:t.bookColor,color:t.bookColor},attrs:{size:"small"},on:{click:function(e){a.handleEdit("label",t)}}},[a._v("\n            "+a._s(t.bookLableName))])}),a._v(" "),e("el-button",{attrs:{size:"small"},on:{click:function(t){a.handleEdit("label")}}},[a._v("+ 新建标签")])],2),a._v(" "),e("el-row",{directives:[{name:"loading",rawName:"v-loading",value:this.$store.state.book.loading,expression:"this.$store.state.book.loading"}],staticClass:"mbt20 book-property-list",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},[e("h2",{staticClass:"tab-title"},[a._v("书籍分类")]),a._v(" "),a._l(a.editBookEchoData.classificationList,function(t){return e("el-button",{key:t.id,attrs:{size:"small",type:"primary",plain:""},on:{click:function(e){a.handleEdit("class",t)}}},[a._v("\n        "+a._s(t.classificationName))])}),a._v(" "),e("el-button",{attrs:{size:"small"},on:{click:function(t){a.handleEdit("class")}}},[a._v("+ 新建分类")])],2),a._v(" "),e("el-dialog",{staticClass:"alertDialog",attrs:{title:"编辑标签",visible:a.dialogVisible},on:{"update:visible":function(t){a.dialogVisible=t}}},[e("el-form",{ref:"propertyForm",staticClass:"property-ruleForm",attrs:{model:a.subData,rules:a.rules,"label-width":"66px"}},["label"===a.currentType?[e("el-form-item",{attrs:{label:"颜  色",prop:"bookColor"}},[e("el-color-picker",{model:{value:a.subData.bookColor,callback:function(t){a.$set(a.subData,"bookColor",t)},expression:"subData.bookColor"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"标签名",prop:"bookLableName"}},[e("el-input",{attrs:{type:"text",placeholder:"请输入标签名"},model:{value:a.subData.bookLableName,callback:function(t){a.$set(a.subData,"bookLableName",t)},expression:"subData.bookLableName"}})],1)]:[e("el-form-item",{attrs:{label:"图  标"}},[a.subData.classificationmaxlco?e("img",{staticClass:"class-icon",attrs:{src:a.subData.classificationmaxlco,alt:""}}):a._e(),a._v(" "),"edit"==a.dialogType?e("el-upload",{staticClass:"upload-demo",attrs:{"show-file-list":!1,"on-success":a.uploadEnd1,"on-error":a.uploadEnd1,"on-progress":a.uploadProgress1,action:"/api/admin/updateClassification",data:{id:a.subData.id,type:1}}},[e("el-button",{attrs:{size:"small",type:"primary"}},[a.load.max?e("span",[a._v("上传大图")]):e("span",[e("i",{staticClass:"el-icon-loading"}),a._v(" 正在上传中...")])])],1):a._e(),a._v(" "),a.subData.classificationIco?e("img",{staticClass:"class-icon",attrs:{src:a.subData.classificationIco,alt:""}}):a._e(),a._v(" "),"edit"==a.dialogType?e("el-upload",{staticClass:"upload-demo",attrs:{"show-file-list":!1,"on-success":a.uploadEnd2,"on-error":a.uploadEnd2,"on-progress":a.uploadProgress2,action:"/api/admin/updateClassification",data:{id:a.subData.id,type:2}}},[e("el-button",{attrs:{size:"small",type:"primary"}},[a.load.min?e("span",[a._v("上传小图")]):e("span",[e("i",{staticClass:"el-icon-loading"}),a._v(" 正在上传中...")])])],1):a._e()],1),a._v(" "),e("el-form-item",{attrs:{label:"序列号",prop:"orders"}},[e("el-input",{attrs:{type:"text",placeholder:"请输入序列号"},model:{value:a.subData.orders,callback:function(t){a.$set(a.subData,"orders",t)},expression:"subData.orders"}})],1),a._v(" "),e("el-form-item",{attrs:{label:"分类名",prop:"classificationName"}},[e("el-input",{attrs:{type:"text",placeholder:"请输入分类名"},model:{value:a.subData.classificationName,callback:function(t){a.$set(a.subData,"classificationName",t)},expression:"subData.classificationName"}})],1)]],2),a._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},["edit"===a.dialogType?[e("el-button",{attrs:{type:"danger"},on:{click:function(t){a.handleDel("del")}}},[a._v("删 除")]),a._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(t){a.handleDel("update")}}},[a._v("更 新")])]:e("el-button",{attrs:{type:"primary"},on:{click:function(t){a.handleDel("add")}}},[a._v("添 加")])],2)],1)],1)},r=[],c=e("18Nq"),d=o,u=Object(c.a)(l,n,r,!1,d,null,null);t.default=u.exports}});
//# sourceMappingURL=26.2401a4d8ce1f9c189df7.js.map
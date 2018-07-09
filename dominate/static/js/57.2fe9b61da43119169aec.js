webpackJsonp([57],{"5LdX":function(t,e,a){"use strict";function o(t){a("nS0L")}Object.defineProperty(e,"__esModule",{value:!0});var l=a("3cXf"),s=a.n(l),i={data:function(){return{activeName:"base",baseData:{},DataChange:!1,bookDetail:{bookName:"",bookClassificationId:null,bookLabId:null,bookAuthorization:null,bookIntroduction:""},bookData:{},rules2:{bookName:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:1,max:20,message:"长度在 20 个字符以内",trigger:"blur"}],bookClassificationId:[{required:!0,type:"number",message:"请选择作品分类",trigger:"change"}],bookLabId:[{type:"array",required:!0,trigger:"change"},{type:"array",min:2,max:5,message:"请选择2-5个标签",trigger:"change"}],bookAuthorization:[{required:!0,type:"number",message:"请选择发布状态",trigger:"change"}],bookIntroduction:[{required:!0,message:"作品简介",trigger:"blur"},{min:1,max:400,message:"长度在 1 到 400 个字符",trigger:"blur"}]}}},methods:{getBookDetail:function(){var t=this;this.$store.dispatch("book_showBookInfo",{bookid:this.$route.params.bid}).then(function(e){delete e.booklableList,delete e.bookImage,e.bookLabId=function(){var t=[];return e.bookLabId.split(",").forEach(function(e){t.push(parseInt(e))}),t}(),e.lastUpdateTime=new Date(e.lastUpdateTime),e.bookCreatedTime=new Date(e.bookCreatedTime),e.topFrameTime&&(e.topFrameTime=new Date(e.topFrameTime)),e.signTime&&(e.signTime=new Date(e.signTime)),e.bookClassificationId=parseInt(e.bookClassificationId),t.bookDetail=e}),this.$store.dispatch("getBookDataView",{bookid:this.$route.params.bid}).then(function(e){t.bookData=e})},onSubmit:function(t){var e=this,a=JSON.parse(s()(this.bookDetail));a.bookLabId=a.bookLabId.toString(),a.bookIntroduction=this.$http.trim(a.bookIntroduction).replace(/\s*\n+\s*/g,"\n"),a.signTime||delete a.signTime,a.topFrameTime||delete a.topFrameTime,this.$refs[t].validate(function(t){if(!t)return e.$message({message:"请完善表单信息！",type:"warning"}),!1;e.$myLoad(),e.$ajax("/admin/sysbookupdate",a,function(t){e.$loading().close(),200===t.returnCode&&(e.bookData&&e.DataChange?e.$ajax("/admin/updateBookData",e.bookData,function(t){200===t.returnCode&&(e.$message({message:"修改成功",type:"success"}),e.getBaseInfo())}):e.$message({message:"修改成功",type:"success"}))})})},submit:function(){var t=this;this.bookDetail.bookLabId.length>5||this.bookDetail.bookLabId.length<2?this.$message({message:"请选择2-5个标签",type:"warning"}):this.bookDetail.bookIntroduction.length>400?this.$message({message:"长度在 1 到 400 个字符",type:"warning"}):(this.bookDetail.bookAuthorization===this.$store.state.bookAuthorization&&(this.bookDetail.bookAuthorization=null),this.bookDetail.bookCheckStatus=null,this.$store.dispatch("sysBookUpdate",this.bookDetail).then(function(e){t.$message({message:"修改成功！",type:"success"}),t.getBookDetail()}))}},created:function(){var t=this;this.$store.dispatch("book_EditBookEcho",{}).then(function(e){t.baseData=e,t.getBookDetail()})},watch:{"bookDetail.bookIntroduction":function(t){this.bookDetail.bookIntroduction=t.replace(/\s*\n+\s*/g,"\n\n")},bookData:function(t){this.DataChange=!0}}},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"book-detail-wrap"},[a("el-breadcrumb",{staticClass:"mbt20",attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[t._v("书籍管理")]),t._v(" "),a("el-breadcrumb-item",{attrs:{to:"/book/list"}},[t._v("书籍列表")]),t._v(" "),a("el-breadcrumb-item",[t._v("书籍详情")])],1),t._v(" "),a("el-alert",{staticClass:"mbt20",attrs:{title:"操作说明",type:"info","show-icon":""}},[a("div",[a("p",[t._v("新建书籍的作者必需已经存在，否则无法创建新书；书籍标签至少2个，最多不超过5个；且书籍简介不可超过字数上限")]),t._v(" "),a("p",[t._v("未创建过章节的书籍暂无扩展信息，")])])]),t._v(" "),a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{name:"base",label:"基本信息"}},[a("el-row",{staticClass:"el-row",attrs:{gutter:24}},[a("el-col",{staticClass:"el-title",attrs:{span:1}},[a("span",[t._v("书籍名称")])]),t._v(" "),a("el-col",{attrs:{span:20}},[a("el-input",{staticClass:"mw320",attrs:{readonly:""},model:{value:t.bookDetail.bookName,callback:function(e){t.$set(t.bookDetail,"bookName",e)},expression:"bookDetail.bookName"}})],1)],1),t._v(" "),a("el-row",{staticClass:"el-row",attrs:{gutter:24}},[a("el-col",{staticClass:"el-title",attrs:{span:1}},[a("span",[t._v("作品分类")])]),t._v(" "),a("el-col",{attrs:{span:20}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.bookDetail.bookClassificationId,callback:function(e){t.$set(t.bookDetail,"bookClassificationId",e)},expression:"bookDetail.bookClassificationId"}},t._l(t.baseData.classificationList,function(t,e){return a("el-option",{key:e,attrs:{label:t.classificationName,value:t.id}})}))],1)],1),t._v(" "),a("el-row",{staticClass:"el-row",attrs:{gutter:24}},[a("el-col",{staticClass:"el-title",attrs:{span:1}},[a("span",[t._v("书籍标签")])]),t._v(" "),a("el-col",{attrs:{span:20}},[a("el-checkbox-group",{model:{value:t.bookDetail.bookLabId,callback:function(e){t.$set(t.bookDetail,"bookLabId",e)},expression:"bookDetail.bookLabId"}},t._l(t.baseData.booklablesList,function(e,o){return a("el-checkbox",{key:o,attrs:{label:e.id,name:"bookLabId"}},[t._v(t._s(e.bookLableName))])}))],1)],1),t._v(" "),a("el-row",{staticClass:"el-row",attrs:{gutter:24}},[a("el-col",{staticClass:"el-title",attrs:{span:1}},[a("span",[t._v("千字单价")])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-input",{staticClass:"mw220",model:{value:t.bookDetail.bookPrice,callback:function(e){t.$set(t.bookDetail,"bookPrice",e)},expression:"bookDetail.bookPrice"}})],1),t._v(" "),a("el-col",{staticClass:"el-title",attrs:{span:1,offset:5}},[a("span",[t._v("创建时间")])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-date-picker",{attrs:{type:"datetime",readonly:"","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期时间"},model:{value:t.bookDetail.bookCreatedTime,callback:function(e){t.$set(t.bookDetail,"bookCreatedTime",e)},expression:"bookDetail.bookCreatedTime"}})],1)],1),t._v(" "),a("el-row",{staticClass:"el-row",attrs:{gutter:24}},[a("el-col",{staticClass:"el-title",attrs:{span:1}},[a("span",[t._v("最新更新")])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期时间"},model:{value:t.bookDetail.lastUpdateTime,callback:function(e){t.$set(t.bookDetail,"lastUpdateTime",e)},expression:"bookDetail.lastUpdateTime"}})],1),t._v(" "),a("el-col",{staticClass:"el-title",attrs:{span:1,offset:5}},[a("span",[t._v("上架时间")])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-date-picker",{attrs:{type:"datetime",readonly:"","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期时间"},model:{value:t.bookDetail.topFrameTime,callback:function(e){t.$set(t.bookDetail,"topFrameTime",e)},expression:"bookDetail.topFrameTime"}})],1)],1),t._v(" "),a("el-row",{staticClass:"el-row",attrs:{gutter:24}},[a("el-col",{staticClass:"el-title",attrs:{span:1}},[a("span",[t._v("签约时间")])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-date-picker",{attrs:{type:"datetime",readonly:"","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期时间"},model:{value:t.bookDetail.signTime,callback:function(e){t.$set(t.bookDetail,"signTime",e)},expression:"bookDetail.signTime"}})],1),t._v(" "),a("el-col",{staticClass:"el-title",attrs:{span:1,offset:5}},[a("span",[t._v("字母索引")])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-input",{staticClass:"mw220",model:{value:t.bookDetail.initials,callback:function(e){t.$set(t.bookDetail,"initials",e)},expression:"bookDetail.initials"}})],1)],1),t._v(" "),a("el-row",{staticClass:"el-row",attrs:{gutter:24}},[a("el-col",{staticClass:"el-title",attrs:{span:1}},[a("span",[t._v("发布状态")])]),t._v(" "),a("el-col",{attrs:{span:20}},[a("el-radio-group",{model:{value:t.bookDetail.bookAuthorization,callback:function(e){t.$set(t.bookDetail,"bookAuthorization",e)},expression:"bookDetail.bookAuthorization"}},[a("el-radio",{attrs:{label:0}},[t._v("网站首发")]),t._v(" "),a("el-radio",{attrs:{label:3}},[t._v("授权发布")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("首发签约")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("授权签约")])],1)],1)],1),t._v(" "),a("el-row",{staticClass:"el-row",attrs:{gutter:24}},[a("el-col",{staticClass:"el-title",attrs:{span:1}},[a("span",[t._v("作品简介")])]),t._v(" "),a("el-col",{attrs:{span:20}},[a("el-input",{staticClass:"book-intro",attrs:{type:"textarea"},model:{value:t.bookDetail.bookIntroduction,callback:function(e){t.$set(t.bookDetail,"bookIntroduction",e)},expression:"bookDetail.bookIntroduction"}}),t._v(" "),a("p",[a("span",{staticClass:"fr"},[t._v("字数"+t._s(t.bookDetail.bookIntroduction.length)+"/400")])])],1)],1),t._v(" "),a("el-row",{staticClass:"el-row",attrs:{gutter:24}},[a("el-col",{attrs:{span:2,offset:1}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submit()}}},[t._v("保存提交")])],1)],1)],1),t._v(" "),t.bookData?a("el-tab-pane",{attrs:{name:"extend",label:"扩展信息"}},[a("el-form",{ref:"detailForm2",attrs:{rules:t.rules2,model:t.bookDetail,"label-width":"80px"}},[a("el-row",{attrs:{gutter:40}},[a("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"金椒",prop:"goldenTicket"}},[a("el-input",{staticClass:"mw220",model:{value:t.bookData.goldenTicket,callback:function(e){t.$set(t.bookData,"goldenTicket",e)},expression:"bookData.goldenTicket"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"总收藏",prop:"bookCollection"}},[a("el-input",{staticClass:"mw220",model:{value:t.bookData.bookCollection,callback:function(e){t.$set(t.bookData,"bookCollection",e)},expression:"bookData.bookCollection"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:40}},[a("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"打赏",prop:"areward"}},[a("el-input",{staticClass:"mw220",model:{value:t.bookData.areward,callback:function(e){t.$set(t.bookData,"areward",e)},expression:"bookData.areward"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"总点击",prop:"bookClickCount"}},[a("el-input",{staticClass:"mw220",model:{value:t.bookData.bookClickCount,callback:function(e){t.$set(t.bookData,"bookClickCount",e)},expression:"bookData.bookClickCount"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:40}},[a("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"小米椒",prop:"bookRecommend"}},[a("el-input",{staticClass:"mw220",model:{value:t.bookData.bookRecommend,callback:function(e){t.$set(t.bookData,"bookRecommend",e)},expression:"bookData.bookRecommend"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"月点击",prop:"monthChick"}},[a("el-input",{staticClass:"mw220",model:{value:t.bookData.monthChick,callback:function(e){t.$set(t.bookData,"monthChick",e)},expression:"bookData.monthChick"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:40}},[a("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"订阅",prop:"shareds"}},[a("el-input",{staticClass:"mw220",model:{value:t.bookData.shareds,callback:function(e){t.$set(t.bookData,"shareds",e)},expression:"bookData.shareds"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"周点击",prop:"weekChick"}},[a("el-input",{staticClass:"mw220",model:{value:t.bookData.weekChick,callback:function(e){t.$set(t.bookData,"weekChick",e)},expression:"bookData.weekChick"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:40}},[a("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"第三方",prop:"threePartyIncome"}},[a("el-input",{staticClass:"mw220",model:{value:t.bookData.threePartyIncome,callback:function(e){t.$set(t.bookData,"threePartyIncome",e)},expression:"bookData.threePartyIncome"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"分享次数",prop:"shareds"}},[a("el-input",{staticClass:"mw220",model:{value:t.bookData.shareds,callback:function(e){t.$set(t.bookData,"shareds",e)},expression:"bookData.shareds"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:40}},[a("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"月报",prop:"monthlyAttendance"}},[a("el-input",{staticClass:"mw220",model:{value:t.bookData.monthlyAttendance,callback:function(e){t.$set(t.bookData,"monthlyAttendance",e)},expression:"bookData.monthlyAttendance"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"回访次数",prop:"bookVisit"}},[a("el-input",{staticClass:"mw220",model:{value:t.bookData.bookVisit,callback:function(e){t.$set(t.bookData,"bookVisit",e)},expression:"bookData.bookVisit"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:40}},[a("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"评分",prop:"bookIntegrals"}},[a("el-input",{staticClass:"mw220",model:{value:t.bookData.bookIntegrals,callback:function(e){t.$set(t.bookData,"bookIntegrals",e)},expression:"bookData.bookIntegrals"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"吐槽次数",prop:"tucaoIndex"}},[a("el-input",{staticClass:"mw220",model:{value:t.bookData.tucaoIndex,callback:function(e){t.$set(t.bookData,"tucaoIndex",e)},expression:"bookData.tucaoIndex"}})],1)],1)],1),t._v(" "),a("el-row",{attrs:{gutter:40}},[a("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"订阅",prop:"shareds"}},[a("el-input",{staticClass:"mw220",model:{value:t.bookData.shareds,callback:function(e){t.$set(t.bookData,"shareds",e)},expression:"bookData.shareds"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"评分次数",prop:"integralnum"}},[a("el-input",{staticClass:"mw220",model:{value:t.bookData.integralnum,callback:function(e){t.$set(t.bookData,"integralnum",e)},expression:"bookData.integralnum"}})],1)],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.onSubmit("detailForm2")}}},[t._v("保存提交")])],1)],1)],1):t._e()],1)],1)},n=[],c=a("18Nq"),b=o,m=Object(c.a)(i,r,n,!1,b,null,null);e.default=m.exports},nS0L:function(t,e){}});
//# sourceMappingURL=57.2fe9b61da43119169aec.js.map
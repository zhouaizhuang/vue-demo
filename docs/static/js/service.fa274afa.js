(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["service"],{"37ee":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"box",staticStyle:{height:"100vh","overflow-y":"auto"},attrs:{id:"box"},on:{scroll:t.scrollEvent}},[t.isShowBtn?s("div",{staticClass:"bgff5650 gf fs32r rds30r pt30r pb30r f ac xc fixed b30r l50 tx-50",staticStyle:{width:"7rem"}},[t._v("滚动到一定位置，我就显示出来了")]):t._e(),t._l(t.arr,(function(e,i){return s("div",{key:i,staticClass:"pt30r tc pb30r"},[t._v(t._s(e))])}))],2)},r=[],n={name:"watchScroll",components:{},data:function(){return{arr:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],isShowBtn:!1}},scrollId:null,methods:{scrollEvent:function(){var t=this,e=this.$refs.box.scrollTop;clearTimeout(this.scrollId),this.scrollId=setTimeout((function(){t.isShowBtn=e>200}),20)}},created:function(){}},a=n,c=s("2877"),l=Object(c["a"])(a,i,r,!1,null,null,null);e["default"]=l.exports},"6ae4":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"bg1890ff",staticStyle:{height:"300px"}},[t._v("12312")]),s("div",{staticClass:"bg1a1e23",staticStyle:{height:"300px"}},[t._v("12312")]),s("div",{staticClass:"bgc7a35d",staticStyle:{height:"300px"}},[t._v("12312")]),s("div",{staticClass:"bg1890ff",staticStyle:{height:"300px"}},[t._v("12312")]),s("div",{staticClass:"bg1a1e23",staticStyle:{height:"300px"}},[t._v("12312")])])}],n={name:"",components:{},data:function(){return{}},methods:{},created:function(){},mounted:function(){history.scrollRestoration&&(history.scrollRestoration="manual")}},a=n,c=s("2877"),l=Object(c["a"])(a,i,r,!1,null,"2df7ad42",null);e["default"]=l.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bugFix"],{e080:function(t,s,a){"use strict";a.r(s);var c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"auto  ovya rel",staticStyle:{width:"350px","padding-bottom":"100px"}},[a("div",{staticClass:"pt30 pb30 f ac xc"},[t._v("1")]),a("div",{staticClass:"pt30 pb30 f ac xc"},[t._v("2")]),a("div",{staticClass:"pt30 pb30 f ac xc"},[t._v("3")]),a("div",{staticClass:"pt30 pb30 f ac xc"},[t._v("4")]),a("div",{staticClass:"pt30 pb30 f ac xc"},[t._v("5")]),a("div",{staticClass:"w50 auto pt10 pb10 rds10 bg1890ff f ac xc fs24r gf",on:{click:t.openModal}},[t._v("点击出现弹窗")]),a("div",{staticClass:"pt30 pb30 f ac xc"},[t._v("6")]),a("div",{staticClass:"pt30 pb30 f ac xc"},[t._v("7")]),a("div",{staticClass:"pt30 pb30 f ac xc"},[t._v("8")]),a("div",{staticClass:"pt30 pb30 f ac xc"},[t._v("9")]),a("div",{staticClass:"pt30 pb30 f ac xc"},[t._v("10")]),a("div",{staticClass:"pt30 pb30 f ac xc"},[t._v("11")]),t.isShowModal?a("div",{staticClass:"fixed trbl0 zx100 rgba6",on:{click:t.closeModal}},[t._m(0)]):t._e()])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"abs t30 l50 tx-50 fs22 bgf pl30 pr30 pt30 pb30 rds10 tc ovya",staticStyle:{height:"160px",width:"260px"}},[a("div",{staticClass:"pb20"},[t._v("内容很多的时候")]),a("div",{staticClass:"pb20"},[t._v("这里数据依然可以滚动")]),a("div",{staticClass:"pb20"},[t._v("依然是可以滚动的")]),a("div",{staticClass:"pb20"},[t._v("可以滚动的")]),a("div",{staticClass:"pb20"},[t._v("滚动的")]),a("div",{staticClass:"pb20"},[t._v("的")]),a("div",{staticClass:"pb20"},[t._v("...")]),a("div",[t._v("滚到底部也不影响外层")])])}],o={name:"scrollThrough",data:function(){return{isShowModal:!1}},methods:{openModal:function(){this.isShowModal=!0,this.lockBody()},closeModal:function(){this.isShowModal=!1,this.resetBody()},lockBody:function(){var t=document,s=t.body,a=document.body.scrollTop||document.documentElement.scrollTop;s.style.position="fixed",s.style.width="100%",s.style.top="-".concat(a,"px")},resetBody:function(){var t=document,s=t.body,a=s.style.top;s.style.position="",s.style.width="",s.style.top="",document.body.scrollTop=-parseInt(a,10),document.documentElement.scrollTop=-parseInt(a,10)}},created:function(){},beforeDestroy:function(){this.resetBody()}},l=o,d=a("2877"),e=Object(d["a"])(l,c,i,!1,null,null,null);s["default"]=e.exports}}]);
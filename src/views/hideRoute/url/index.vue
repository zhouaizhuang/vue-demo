<template>
  <div v-if="!isShowPage" @click="clickMe" class="fixed zx10 trbl0"></div>
  <div v-else class="pl80r pr80r pt50r mh100vh">
    <div class="fs26 b mb30 tc">收藏网站</div>
    <div class="f">
      <div class="b" style="width:150px;">工具</div>
      <div class="f1 f xs ac rw">
        <a class="db w20 pb30 min190px g42b983 poi"><router-link class="g42b983" to="/desc_pc">在线加密解密</router-link></a>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://ai.usesless.com/scene/home">ChatpGPT</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://gpt.ipcl.cc">ChatpGPT1</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://open.u-tools.cn/341582.html">window工具exe</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://www.fontke.com/tool/code128/">在线生成code128编码（条形码）</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://tool.lu/">在线工具网址</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://www.jiumodiary.com/">电子书查找</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://www.gaitubao.com/tupian-wenzi/">在线图片转文字</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://online.easyscreenocr.com/ZH?utm_source=hao.logosc.cn&utm_medium=referral">在线OCR识别</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://www.youyedoc.com/">PPT模板</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://zh.wikihow.com">生活技能</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://open.u-tools.cn/341582.html">utools</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://res.u-tools.cn/videos/utools3.mp4">utools使用方法</a></div>
      </div>
    </div>
    <div class="f">
      <div class="b" style="width:150px;">前端类工具</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://www.npmjs.com/package/minirefresh">下拉刷新的npm仓库</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://www.wangeditor.com/demo/get-html.html">在线word格式转html（相当于富文本）</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://www.cnblogs.com/yundeblog/p/14793577.html">uniapp富文本解析插件</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://tinypng.com/">在线图片压缩</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://www.bejson.com/ui/compress_img/">在线图片压缩2</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://squoosh.app/">在线图片压缩3</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://jsrun.net/MfPKp/edit">在线解析html编码code</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://9elements.github.io/fancy-border-radius">在线调试border-radius</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://regexr-cn.com/">在线正则测试工具</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://codejiaonang.com/">正则练习</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="http://www.iconfont.cn/">阿里矢量图标</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://tool.lu/color/index.html">在线颜色进制转换</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://caniuse.com/">代码兼容性查询</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://map.yanue.net/">在线经纬度和地址互转</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="http://www.hellofont.cn/">在线字体识别</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://www.toptal.com/developers/cssminifier">在线CSS压缩</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://web.dev/measure/">站点性能测试</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://codepen.io/">代码在线演示</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://www.shapedivider.app/">在线定制svg</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://tool.lu/">在线工具网址</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://feathericons.com/">svg图标</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://simpleicons.org/">常见品牌的svg</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="http://www.bitbug.net/">在线图片转icon</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://www.photopea.com/">在线PS</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="http://120.92.142.115/">在线生成elementUI模板</a></div>
      </div>
    </div>
    <div class="f">
      <div class="b" style="width:150px;">前端收藏网站</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://vue-admin-beautiful.com/admin-pro/#/vab/table/comprehensiveTable">前端PC后台示例</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://blog.csdn.net/MOY37RQW1JarN33BgZk/article/details/124185709">为什么vue和react都选择了Hooks?</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="http://v4.iviewui.com/docs/introduce">基于vue2版本配套的view-design</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://www.iviewui.com/view-ui-plus/guide/introduce">基于vue3版本配套的view-ui-plus</a></div>
      </div>
    </div>
    <div class="f">
      <div class="b" style="width:150px;">娱乐</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://www.videofk.com/">视频下载</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://www.yikm.net/">在线小霸王游戏机</a></div>
      </div>
    </div>
    <div class="f">
      <div class="b" style="width:150px;">教育</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://le.ouchn.cn/home">终身教育平台</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://www.smartedu.cn/">国家中小学智慧教育平台</a></div>
      </div>
    </div>
    <div class="f">
      <div class="b" style="width:150px;">就业</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://www.gsxt.gov.cn/">国家企业信用信息公示系统</a></div>
      </div>
    </div>
    <div class="f">
      <div class="b" style="width:150px;">法律</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="http://www.12348.gov.cn/">中国法律服务网</a></div>
      </div>
    </div>
    <div class="f">
      <div class="b" style="width:150px;">医疗</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://www.nmpa.gov.cn/">国家药监局</a></div>
      </div>
    </div>
    <div class="f">
      <div class="b" style="width:150px;">房产</div>
      <div class="f1 f xs ac rw">
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="https://newhouse.fang.com/jsq/pg.htm">房产计算小工具</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="http://www.czgjj.com/hfmiswechat/wx_dkjsq_new.do?t=1652879576710">公积金贷款计算</a></div>
        <div class="db w20 pb30 min190px"><a class="g42b983 poi" href="http://m.cz.bendibao.com/mip/41193.shtm">常州学区划分表</a></div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
.min190px{min-width:190px;}
</style>
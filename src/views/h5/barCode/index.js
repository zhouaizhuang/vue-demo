/**
 * 注意事项：
 * 1、条形码如果宽度很小，会导致条码黑白色间距太小，进而导致quagga库无法识别
 * 2、因此，要注意条形码必须搞大点。这样识别率会非常高。   像这样的： 850F0DA1ADFB091C9生成的code码，大图是很容易识别的。
 * 在线生成code128编码的网址： https://www.fontke.com/tool/code128/
 */
import * as func from "./func.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      isShowBarCode: false, // 是否显示一维码扫描弹窗
      serviceCode: '',
    }
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
    // this.init()
  },
}
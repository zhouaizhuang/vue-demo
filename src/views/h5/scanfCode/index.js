// 不依赖微信环境的摄像头扫描识别二维码（可用）： https://blog.csdn.net/muguli2008/article/details/114134547
// https://blog.csdn.net/m0_47763320/article/details/126726681
// https://github.com/zxing/zxing
import { BrowserMultiFormatReader } from '@zxing/library'
import * as func from "./func.js"
export default {
  name: 'qr-code-search',
  components: {},
  data() {
    return {
      codeReader: new BrowserMultiFormatReader(),
      isShowVideo: false, // 是否开启摄像
      num: 1,
      serviceCode: '',
      deviceCode: '',
    }
  },
  methods: {
    ...func,
  },
  created() {
  },
}
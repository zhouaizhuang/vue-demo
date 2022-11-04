// https://blog.csdn.net/weixin_42684136/article/details/118190396
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
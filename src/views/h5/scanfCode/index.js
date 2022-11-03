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
      isShowServiceCode: false, // 是否是服务编码
      serviceCode: '',
      isShowDeviceCode: false, // 是否是设备编码
      deviceCode: '',
      // tipMsg: '尝试识别中....',
    }
  },
  methods: {
    ...func,
  },
  created() {
  },
}
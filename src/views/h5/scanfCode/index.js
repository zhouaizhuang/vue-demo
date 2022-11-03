// https://blog.csdn.net/weixin_42684136/article/details/118190396
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
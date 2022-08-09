import { loadJs } from "../../../common.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      
    }
  },
  methods:{
  },
  async created(){
    await loadJs("//res.wx.qq.com/open/js/jweixin-1.6.0.js") //加载微信js
    // 我调通过，但是这个项目由于域名不是对应的后端配置的域名了。因此是没效果的。
    // 调用接口获取配置-----> 
    // 注意：
    // 1、需要在微信公众号配置js安全域名，安全域名就是线上域名，只能在线上调试。比如https://health.gagctv.com/
    // 2、后端需要微信公众号的appid、appsecrect，从而调用微信后台提供的接口生成accessToken
    // 3、开启debug后，必须在微信浏览器中调试，才会有debug信息，出现config ok就正常了
    // 4、注意：只支持在微信浏览器中通过这个标签进行跳转
    const res = await this.$post('/robot/JsSdk') 
    const {appId, timestamp, nonceStr, signature} = res
    const url = window.location.href.split('#')[0]
    const obj = {
      debug: true,// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: appId,         // 必填，公众号的唯一标识，填自己的！
      timestamp: timestamp, // 必填，生成签名的时间戳，刚才接口拿到的数据
      nonceStr: nonceStr,   // 必填，生成签名的随机串
      signature: signature, // 必填，签名，见附录1
      jsApiList: ['updateAppMessageShareData'],
      url: encodeURIComponent(url),
      openTagList: ["wx-open-launch-weapp"] // 跳转小程序时必填
    }
    wx.config(obj)
    wx.ready(function (res) {
      console.log(JSON.stringify(res))
    })
    wx.error(function (res) {
      console.log(JSON.stringify(res))
    })
  },
  mounted(){
    
  },
}
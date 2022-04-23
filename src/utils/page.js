export const inBrowser = typeof window !== 'undefined'
export const UA = inBrowser && window.navigator.userAgent.toLowerCase()
// 是否是微信
export const isWeChat = (UA && (/MicroMessenger/i).test(UA))
// 设置网页标题
export const setTitle = title => document.title = title
// 异步加载js
export const loadJs = (function(url) {
  let loadedJs = []
  return function (){
    return new Promise((resolve, reject) => {
      if(loadedJs.includes(url)) { return resolve() }
      let script = document.createElement("script")
      script.type = "text/javascript"
      script.src = url
      document.head.appendChild(script)
      script.onload = () => {
        loadedJs.push(url)
        resolve()
      }
      script.onerror = () => reject()
    })
  }
})()
// 微信jssdk的初始化
export const wxInit = (function() {
  let wxInited = false
  return function(){
    return new Promise(async (resolve, reject) => {
      if (!isWeChat || wxInited) { resolve() }
      // ！！！！此处应该做配置数据的读取
      let siteConfig = window.vueRoot.siteConfig;
      const url = window.location.href.split('#')[0]
      const obj = {
        debug: false,
        appId: siteConfig.wxJssdk["appId"],
        timestamp: siteConfig.wxJssdk["timestamp"],
        nonceStr: siteConfig.wxJssdk["nonceStr"],
        signature: siteConfig.wxJssdk["signature"],
        url: encodeURIComponent(url),
        jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"]
      }
      wx.config(obj)
      wx.ready(function () {
        wxInited = true
        resolve()
      })
    })
  }
})()
/**
 * 设置微信分享
 * @param {*} obj 分享文案图片的配置对象
 * @returns 没有返回值
 * @举例子 setWxShare({title:'0元享4套户型设计，摆脱装修套路！', desc:'专业设计师1对1服务，不谈钱，先看方案！', imgUrl: 'https://upload.qianfanyun.com/jj_share_design_01.png'})
 */
export async function setWxShare (obj = {}) {
  if (!isWeChat) return
  const { title, desc, imgUrl } = obj // 分享标题、分享描述、分享图标
  const link = window.location.href // 分享链接链接域名或路径必须与当前页面对应的公众号JS安全域名一致
  await loadJs("//res.wx.qq.com/open/js/jweixin-1.6.0.js") //加载微信js
  await wxInit() //微信初始化
  // 分享朋友圈
  wx.ready(function () { 
    wx.updateTimelineShareData({ // 分享朋友圈
      title, desc,link,imgUrl,
      success: function () {}
    })
    wx.updateAppMessageShareData({ // 分享好友
      title, desc, link, imgUrl,
      success: function () {} // 设置成功
    })
  })
}
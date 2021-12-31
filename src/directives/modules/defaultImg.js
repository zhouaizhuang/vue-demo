/**
 * 默认图片 图片暂时没加载出来之前显示的默认图片、或者随机颜色
 * @param {String} - 图片链接
 * @param {Array | String} binding.value - [String, String] | String
 * 使用方法1、配置默认的图片： <img v-for="(item, index) in imgArr" :key="index" v-defaultImg="[item, 'https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png']">
 * 使用方法2、不配置图片，则显示随机颜色块：<img v-for="(item, index) in imgArr" :key="index" v-defaultImg="item">
 */
export const defaultImg = {
  inserted: function (el, binding) {
    let [src, defaultImg]  = ['', '']
    const bindVal = binding.value
    if (typeof bindVal == 'string') { // 值传入函数的话。那么监听事件就是默认值click，延迟事件就是默认的500ms
      src = bindVal
      // 如果没传入默认图片，则图片没加载出来之前显示的随机颜色块
      let color = Math.floor(Math.random() * 1000000)
      el.style.backgroundColor = `#${color}`
    } else {
      [src, defaultImg = ''] = bindVal
      // console.log(defaultImg)
      if(defaultImg) { el.src = defaultImg }
    }
    let img = new Image()
    img.src = src
    img.onload = function () {
      el.src= src
    }
  }
}

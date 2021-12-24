import { debounce, remove} from "../../common.js"
let [listenList, imageCatcheList] = [[], []]
const debounceScroll = debounce(() => {
  for(let i = 0, len = listenList.length; i < len; i++ ) {
    isCanShow(listenList[i])
  }
}, 10)
const isCanShow = (item) =>{
  const { ele, src } = item
  var top = ele.getBoundingClientRect().top //图片距离页面顶部的距离
  const vh = document.documentElement.clientHeight // 页面可视区域的高度
  if(top + 10 < vh) { //top + 10 已经进入了可视区域10像素
    var image = new Image()
    image.src = src
    image.onload = function() {
      console.log('开始渲染图片')
      ele.src = src;
      imageCatcheList.push(src)
      remove(listenList, item)
    }
    return true
  }
  return false
}
const addListener = (ele,binding) =>{
  let [src, defaultImg] = ['', 'https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png']
  const bindVal = binding.value
  if (typeof bindVal == 'string') { // 值传入函数的话。那么监听事件就是默认值click，延迟事件就是默认的500ms
    src = bindVal
  } else {
    [src, defaultImg] = bindVal
  }
  //如果已经加载过，则无需重新加载，直接将src赋值
  if(imageCatcheList.includes(src)){
    ele.src = src
    return false
  }
  var item = { ele, src }
  ele.src = defaultImg //图片显示默认的图片
  // 如果不能现在显示，那么就需要加入监听列表
  if(!isCanShow(item)){
    listenList.push(item) //否则将图片地址和元素均放入监听的lisenList里
    window.addEventListener('scroll', debounceScroll) //然后开始监听页面scroll事件
  }
}
/**
 * 图片懒加载指令
 * @param {Function} fn - 执行事件
 * @param {?String|"click"} event - 事件类型 例："click"
 * @param {?Number|500} time - 间隔时间
 * @param {Array} binding.value - [fn,event,time]
 * 使用默认图片<img v-for="(item, index) in imgArr" :key="index" v-lazyLoad="item" style="width:300px;height:50px;" class="db auto mb50r">
 * 主动传入设置的默认图片： <img v-for="(item, index) in imgArr" :key="index" v-lazyLoad="[item, 'https://upload.qianfanyun.com/jj_design_check.png']" style="width:300px;height:50px;" class="db auto mb50r">
 */
export const lazyLoad = {
  inserted: addListener,
  updated: addListener
}
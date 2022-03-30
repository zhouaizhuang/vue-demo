import { isObject, isArray, isFunction, isString, isReference } from "./check"
/**
 * 将后台数据同步过来
 * 场景举例：比如表单编辑的时候，用户之前有一些是选中状态的，但是查到的列表没这个状态，你只知道哪些id是选中的。那么就需要做同步。将列表数据中特定id的条目进行字段更新
 * @param {Array} arr 列表数据
 * @param {String || Array} ids 需要更新的id集合
 * @param {String} key 更新的键值
 * @param {*} val 目标id更新之后的值
 * @param {*} defVal 非目标id更新之后的值
 * @returns {Array}
 * 举例 syncBgData([{id:'1'}, {id:'2'}, {id:'3'}], '2,3')
 * [{id:'1', isChecked:false}, {id:'2', isChecked:true}, {id:'3', isChecked:true}]
 */
export const syncBgData = (arr, ids, key = 'isChecked', val = true, defVal = false) => arr.map(v => (v[key] = ids.includes(v.id) ? val : defVal, v))
/**
 * base64数据导出文件，文件下载
 * @举例 downloadFile('test.zip', 'https://yiluyouni.hlxapps.com/assets/zip/2940911562140942420.zip')
 */
export const downloadFile = function (fileName, data){
  // const url = window.URL.createObjectURL(new Blob([response]))
  const link = window.document.createElement('a')
  link.style.display = 'none'
  link.href = response
  // link.setAttribute('download', fileName)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
// 打开全屏
export const toFullScreen = function (){
  let el = document.documentElement;
  let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;
  //typeof rfs != "undefined" && rfs
  if (rfs) {
    rfs.call(el);
  }else if (typeof window.ActiveXObject !== "undefined") {
    //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
    let wscript = new ActiveXObject("WScript.Shell");
    if (wscript != null) {
      wscript.SendKeys("{F11}");
    }
  }else{
    alert("浏览器不支持全屏");
  }
}
// 退出全屏
export const exitFullscreen = function (){
  let el = parent.document;
  let cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen
  //typeof cfs != "undefined" && cfs
  if (cfs) {
    cfs.call(el)
  }else if (typeof window.ActiveXObject !== "undefined") {
    //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
    let wscript = new ActiveXObject("WScript.Shell")
    if (wscript != null) {
      wscript.SendKeys("{F11}")
    }
  }else{
    alert("切换失败,可尝试Esc退出")
  }
}
/**
 * 返回一个lower - upper之间的随机数
 * @param lower 下限
 * @param upper 上限
 * @param type 数据类型  float：浮点型    int：整型
 * @举例 random(0, 0.5) ==> 0.3567039135734613
 * @举例 random(1, 2) ===> 1.6718418553475423
 * @举例 random(-2, -1) ==> -1.4474325452361945
 * @举例 random(1, 8) ==> 6
 * 原生参考代码:  a = new Date % 100; // 两位整数随机数
 * a = new Date % 1000; // 三位整数随机数
 * a = new Date % 10000; // 四位整数随机数...依次类推
 */
export const random = function (lower, upper, type = 'float') {
  lower = Number(lower) || 0
  upper = Number(upper) || 0
  let res = Math.random() * (upper - lower) + lower
  if(type !== 'float') { res = round(res) }
  return res
}
/**
 * 获取随机颜色
 * @returns 
 */
export const randomColor = function () {
  const [r, g, b, a] = [random(0, 255,'int'), random(0, 255,'int'), random(0, 255,'int'), 1]
  return `rgba(${r}, ${g}, ${b}, ${a})`
}
// 禁止复制
export const noCopy = function () {
  ['contextmenu', 'selectstart', 'copy'].forEach(function(ev){
    document.addEventListener(ev, function(event){
      return event.returnValue = false
    })
  })
}
/**
 * 获取部分字段。举例：
 * @param obj 需要读取的对象
 * @param props 需要得到的字段
 * @举例 const obj = {name:'', age:123,school:{hh:11, kj:true}, asd:'qqwq'}
 * @举例 getProps(obj, {name:'', school:{hh:''}, asd:''}) ----> 得到其中部分字段。这个函数可以用户提升小程序列表页和详情页大量数据的渲染性能
 * 还可以直接传入对象数组像这种[{...},{...},{...},{...}]，返回相应字段的对象数组
 * 主要运用于优化移动端大量数据下拉加载更多导致setData的数据很庞大
 */
export const getProps = function (obj, props) {
  if(!isObject(props)) { throw new Error('参数有误，参数必须为object') }
  const filterProps = tmpObj => Object.keys(props).reduce((prev, v) => {
    return (prev[v] = isObject(props[v]) ? getProps(tmpObj[v], props[v]) : tmpObj[v] || ''), prev
  }, {})
  if(!isReference) { return obj }
  return isArray(obj) ? obj.map(item => filterProps(item)) : filterProps(obj)
}
/**
 * 保证json格式数据的可靠获取
 * @param run 需要执行的函数
 * @param defaultVal 默认值
 * @举例 const obj = { area: { city: null, cityName:'北京' }, areaName: '中国' }
 * @举例 safeGet(() => obj.area.city.town, '') ---> ''
 * @举例 避免了这种写法： obj.area && obj.area.city && obj.area.city.town ? obj.area.city.town : ''
 */
export const safeGet = function (run, defaultVal = '') {
  try {
    return run() || defaultVal
  } catch(e) {
    return defaultVal 
  } 
}
/**
 * 执行此函数，可以做一个延时功能。在需要延时执行一段逻辑的时候可以使用
 * @param {String|Number} t
 * @returns 返回一个promise对象，等待t时间后resolve
 * 举例子: await wait(500);   那么程序会在此处阻塞等待500ms
 * 举例子: await wait('500ms');   那么程序会在此处阻塞等待500ms
 * 举例子: await wait('0.5s');   那么程序会在此处阻塞等待500ms
 */
export const wait = function(t) {
  if(isString(t)) {
    if(t.includes('ms')) {
      t = t.replace('ms', '')
    } else if(t.includes('s')) {
      t = t.replace('s', '') * 1000
    }
  }
  return new Promise(resolve => setTimeout(() => resolve(), Number(t)))
}
/**
 * 深拷贝
 * @param {*} obj 传入任意类型都可以做深拷贝 
 * @returns 返回深拷贝的数据
 * @举例子 const obj = {name:'a', age:'18'};  deepCopy(obj) ----> {name:'a', age:'18'}
 */
export const deepCopy = function (obj) {
  if(!isReference(obj)) { return obj }  // 数字、日期、正则、函数、字符串、undefined、null、Symbol直接返回
  let res = isArray(obj) ? [] : {}
  return Object.keys(obj).reduce((prev, item) => (prev[item] = isReference(obj[item]) ? deepCopy(obj[item]) : obj[item], prev), res)
}
/**
 * 获取唯一ID。用于模板渲染的唯一key值
 * @returns 
 * @举例子 [{name:'a'}, {name:'b'}].map(v => ({...v, _id:guID()})) ---->  [{name:'a', _id: '1vc49wwugp3400'}, {name:'b', _id:'4vvfl6wivx4000'}]
 */
export const guID = () => Number(Math.random().toString().slice(3, 9) + Date.now()).toString(36)
/**
 * 函数防抖
 * @param {*} fn 需要防抖的函数
 * @param {*} wait 防抖时间
 * @returns 
 * const newFunc = debounce(fn, 2e3) ----> 这样的话执行newFunc()就会有防抖效果
 */
export const debounce = function (fn, wait=3e3) {
  if(!isFunction(fn)){throw new Error('传入的参数必须是个函数')}
  let timeout = null  // 使用闭包，让每次调用时点击定时器状态不丢失
  return function () { 
    clearTimeout(timeout) // 如果用户在定时器（上一次操作）执行前再次点击，那么上一次操作将被取消
    timeout = setTimeout(()=> fn(...arguments), wait)
  }
}
// 函数节流
export const throttling = function(fn, wait=3e3) {
  let timeout = null // 使用闭包，让每次调用时点击定时器状态不丢失
  let start = +new Date() // 记录第一次点击时的时间戳
  return function () {
    clearTimeout(timeout)
    let end = +new Date() // 记录第一次以后的每次点击的时间戳
    if (end - start >= wait) { // 当时间到达设置的延时时间则立即调用数据处理函数
      fn(...arguments)
      start = end // 执行处理函数后，将结束时间设置为开始时间，重新开始记时
    } else {
      timeout = setTimeout(() => fn(...arguments), wait) // 后续点击没有到达设置的延时，定时器设定延时进行调用
    }
  }
}
// 获取当前滚动距离顶部的距离
export const getScrollTop = () => (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
/**
 * 滚动的盒子到某个位置
 * 注意，如果想让这个盒子能滚动到某个位置。首先这个盒子必须是可滚动的，也就是高度得固定的
 * 比如设置个动态的height:100vh;，然后垂直滚动overflow-y: auto;这样才行的
 * @param {*} id 需要获取的dom的id
 * @param {*} pos 需要滚动到的目标位置
 * @returns
 */
export const scrollPos = (id = '', pos = 0) => document.getElementById(id).scrollTop = pos
// 获取cookie 示例：var og_third_app_token = og_getOgCookie('third_app_token')
export const getCookie = function (name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
  return arr = document.cookie.match(reg) ? unescape(arr[2]) : null
}
//  清除cookie
export const clearCookies = () => document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
/**
 * 选择器查询
 * @param {String} selector 
 * @returns 返回全部/单个dom
 * 举例子: queryAll('.lazyLoadClass') ---->  查出所有类名为.lazyLoadClass的dom集合并转成数组
 * 举例子: query('.lazyLoadClass') ---->  查出第一个类名为.lazyLoadClass的dom
 */
export const queryAll = selector => Array.from(document.querySelectorAll(selector))
export const query = selector => document.querySelector(selector)
// 本地存储
export const getLocalStorage = name => JSON.parse(localStorage.getItem(name))
export const setLocalStorage = (name, val) => localStorage.setItem(name, JSON.stringify(val))
// 会话存储
export const getSessionStorage = name => JSON.parse(sessionStorage.getItem(name))
export const setSessionStorage = (name, val) => sessionStorage.setItem(name, JSON.stringify(val))
// 获取元素相对于浏览器的位置, 返回一个对象
export const getPosition = function (e) {
  const offsety = Number(e.offsetTop)
  const offsetx = Number(e.offsetLeft)
  if (e.offsetParent !== null) {
    getPosition(e.offsetParent)
  }
  return { Left: offsetx, Top: offsety }
}
/**获取视口高度
 * @returns 
 */
export const getViewHeight = () => document.body.clientHeight + 'px'
/**
 * 获取距离视口的数据
 * 距离视窗的距离。一般现在通过 IntersectionObserver API实现了，请看https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html
 * @param {*} e 
 * @returns 
 */
export const getViewPos = function (e) {
  var rect = e.getBoundingClientRect()
  var top = document.documentElement.clientTop ? document.documentElement.clientTop : 0 // html元素对象的上边框的高度
  var left = document.documentElement.clientLeft ? document.documentElement.clientLeft : 0
  return {
    top: rect.top - top,  // 元素距离视口顶部的距离
    bottom: rect.bottom - top,  // 元素距离视口底部的距离
    left: rect.left - left,  // 元素距离视口左边的距离
    right: rect.right - left  // 元素距离视口右边的距离
  }
}
/**
 * 轻提示
 * @param str 提示的字符串内容
 * @param time 提示显示的时间
 * @param innerHTML 采用传入的html，不使用默认的样式
 * @举例 showToast('请输入手机号码')  // 弹出“请输入手机号码”这个提示，并且1500ms后自动消失
 */
 export const showToast = function (str, time = 1500, type = 0) {
  var pObj = document.createElement("div") // 创建，写内容
  const innerHTML = {
    0: `<div class="nowrap" style="position:fixed;z-index:9999;top:45%;left:50%;transform: translateX(-50%);font-size:0.30rem;padding:0.2rem 0.5rem;background:#4A4A4A;color:#fff;border-radius:0.15rem;min-width:3.8rem;text-align:center;">${str}</div>`,
    1: `<div class="nowrap" style="position:fixed;z-index:9999;top:45%;left:50%;transform: translateX(-50%);font-size:0.30rem;padding:0.2rem 0.5rem;background:#fff;color:#000;border-radius:0.15rem;min-width:3.8rem;text-align:center;">${str}</div>`,
  }
  pObj.innerHTML = innerHTML[type] //添加内容
  document.body.appendChild(pObj)
  setTimeout(() => document.body.removeChild(pObj), time);
}
/**
 * 删除css结点
 * @param id 需要删除的结点的id
 * @举例 removeCss('z-loading-style')  // 删除id为z-loading-style的css结点
 */
export const removeCss = function (id = '') {
  const selectDom = document.getElementById(id)
  if(selectDom){ document.getElementsByTagName('head').item(0).removeChild(selectDom) } // 清除样式
}
/**
 * 往网页头部动态追加css
 * @param css 可以手动传入需要载入的样式
 * @param id 这个css的id，方便以后进行删除操作
 * @举例 addCss('@keyframes moveY {0%{transform: translateY(0%);}100%{transform: translateY(-100%);}}', 'z-loading-style')  // 载入移动动画样式
 */
export const addCss = function (css = '', id = ""){
  removeCss(id) // 删除上次添加的这个id的CSS
  var styleObj = document.createElement('style')
  styleObj.id = id
  styleObj.innerHTML= css
  document.getElementsByTagName('head').item(0).appendChild(styleObj) // 添加样式到头部
  // document.head.append(styleObj)
}
/**
 * 删除DOM结点
 * @param id 需要删除的结点的id
 * @举例 removeDom('z-loading')  // 删除id为z-loading的dom
 */
export const removeDom = function (id = '') {
  const selectDom = document.getElementById(id)
  if(selectDom){ document.body.removeChild(selectDom) } // 清除DOM
}
/**
 * 往网页头部动态追加Dom
 * @param dom 可以手动传入需要载入的Dom
 * @param id 这个css的id，方便以后进行删除操作
 * @举例 addDom('<div>234324</div>', 'z-loading')  // 载入的dom
 */
export const addDom = function (dom = '', id = ""){
  removeDom(id) // 删除上次添加的这个id的DOM
  var divObj = document.createElement("div")
  divObj.id = id
  divObj.innerHTML = dom
  document.body.appendChild(divObj) // 添加Dom节点到body中
}
/**
 * 显示DOM
 * @param id 需要显示的结点的id
 * @举例 show('z-loading')  // 显示id为z-loading的dom结点
 */
export const show = function (id =''){
  const selectDom = document.getElementById(id)
  if(selectDom){ document.getElementById(id).style.display = 'block' }
}
/**
 * 删除DOM结点
 * @param id 需要隐藏的结点的id
 * @举例 hide('z-loading')  // 隐藏id为z-loading的dom结点
 */
export const hide = function (id =''){
  const selectDom = document.getElementById(id)
  if(selectDom){ document.getElementById(id).style.display = 'none' }
}
/**
 * 开启loading
 * @param str 提示的字符串内容
 * @param type loading类型   0：默认是蓝色转圈圈
 * @param dom 可以手动传入需要加载的dom结构
 * @param css 可以手动传入需要加载的样式
 * @举例 showLoading()  // 显示出loading转圈圈动画
 * 备注：次函数可以扩展，未来可以支持多种不同的loading，只要传入不同的type值就可以
 */
 export const showLoading = function({str='加载中...', type = 0, dom ='', css = ''} = {}) {
  const domObj = {
    0: `<div style="position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;background:rgba(255,255,255)">
      <div style="position:fixed;top:30%;left:50%;transform:transLateX(-50%);width:150px;text-align:center;">
        <svg style="width:60px;height:60px;animation: rotate360 2s linear infinite;">
          <circle cx="30" cy="30" r="20" fill="none" style="color:#1989FA;animation: loading-dash 1.5s ease-in-out infinite;stroke-dasharray: 90 120;stroke-dashoffset: 0;stroke-width: 2;stroke:#1989FA;stroke-linecap: round;"></circle>
        </svg>
        <div style="color:#0094FF;text-align:center;font-size:0.3rem;font-weight:700;">${str}</div>
      </div>
    </div>`
  }
  const cssObj = {
    0: `
    @keyframes rotate360 {
      0% {transform: rotate(0);}
      100% {transform: rotate(360deg);}
    }
    @keyframes loading-dash {
      0% { stroke-dasharray: 1 200; stroke-dashoffset: 0; }
      50% { stroke-dasharray: 90 150; stroke-dashoffset: -40px; }
      100% { stroke-dasharray: 90 150; stroke-dashoffset: -120px; }
    }`
  }
  const domStr = dom || domObj[type]
  const cssStr = css || cssObj[type]
  addCss(cssStr, 'z-loading-style') // 创建样式
  addDom(domStr, 'z-loading-dom') // 创建dom
}
/**
 * 关闭loading
 * @举例 hideLoading()  // 关闭loading转圈圈动画（将DOM和样式移除了）
 */
export const hideLoading = function(){
  removeCss('z-loading-style')
  removeDom('z-loading-dom')
}
/**
 * 设置标题
 * @param title 网页标题
 * @举例 setTitle('订餐管理系统')  // 设置首页标题为“订餐管理系统”
 */
export const setTitle = title => document.title = title
 /**
  * 跳转
  * @param href 链接地址
  * @举例 goUrl('https://www.baidu.com')  // 跳转到百度
  */
export const goUrl = href => window.location.href = href
/**
 * 密码强度检测。备注：这个函数要依据不同的项目的密码强度规则，做对应的改造
 * @param {String} str 密码
 * @returns {Number} 密码强度
 * @举例 checkPwd('ss142152')
 */
export const checkPwd = (str) => {
  var Lv = 0
  if (str.length < 6) { return Lv } 
  if (/[0-9]/.test(str)) { Lv++ } // 数字+1
  if (/[a-z]/.test(str)) { Lv++ } // 小写字母+1
  if (/[A-Z]/.test(str)) { Lv++ }  // 大写字母+1
  if (/[\.|-|_!@#$%^&*()`]/.test(str)) { Lv++ } // 特殊字符+1
  return Lv
}
/**
 * 温度转换  摄氏度  ---> 华氏度
 * @param {Number} 摄氏度
 * @returns 华氏度
 */
 export const c2f = celsius => celsius * 9 / 5 + 32
 /**
  * 温度转换 华氏度 ----> 摄氏度
  * @param {Number} 华氏度
  * @returns 摄氏度
  */
export const f2s = fahrenheit => (fahrenheit - 32) * 5 / 9
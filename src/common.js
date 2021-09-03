/*
**********************************************************************************************
******************************************公共方法*********************************************
**********************************************************************************************
*/
export const isType = type => val => type === Object.prototype.toString.call(val).slice(8, -1)
export const isArray = isType('Array')
export const isObject = isType('Object')
export const isNull = isType('Null')
export const isUndefined = isType('Undefined')
export const isFunction = isType('Function')
export const isRegExp = isType('RegExp')
export const isString = isType('String')
export const isNumber = isType('Number')
export const isDate = isType('Date')
export const isError = isType('Error')
export const isGt0 = val => /^\+?[1-9][0-9]*$/.test(val) // 是否是大于0的整数
export const isGtEq0 = val => /^\+?[1-9][0-9]*$/.test(val) || String(val) === '0' // 是否是大于等于0的整数
export const inBrowser = typeof window !== 'undefined'
export const inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform
export const weexPlatform = inWeex && WXEnvironment.platform.toLowerCase()
export const UA = inBrowser && window.navigator.userAgent.toLowerCase()
export const isIE = UA && /msie|trident/.test(UA)
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0
export const isEdge = UA && UA.indexOf('edge/') > 0
export const isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android')
export const isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios')
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
export const isPhantomJS = UA && /phantomjs/.test(UA)
export const isFF = UA && UA.match(/firefox\/(\d+)/)
export const isPhoneNum = val => /^1[3456789]\d{9}$/.test(val) // 检测是否是手机号码

// 异步加载js
// 举例子：await loadJs("//res.wx.qq.com/open/js/jweixin-1.6.0.js");
export const loadJs = async function(url) {
  let loadedJs = []
  return new Promise((resolve, reject) => {
    if (loadedJs.includes(url)) { resolve() }
    let script = document.createElement("script")
    script.type = "text/javascript"
    script.src = url
    script.onload = function () { loadedJs.push(url); resolve() }
    script.onerror = function () { reject() }
    document.head.appendChild(script)
  })
}
// 执行此函数，或导致函数执行阻塞在此处t毫秒
// 举例子: await wait(500);   那么程序会在此处阻塞等待500ms
export const wait = async function(t) {
  return new Promise(resolve => setTimeout(() => resolve(), t))
}
// 深拷贝
export const deepCopy = function (obj) {
  if(!(isArray(obj) || isObject(obj))) { return obj }  // 数字、日期、正则、函数、字符串、undefined、null、Symbol直接返回
  let res = isArray(obj) ? [] : {}
  return Object.keys(obj).reduce((prev, item) => {
    prev[item] = (isArray(obj[item]) || isObject(obj[item])) ? deepCopy(obj[item]) : obj[item]
    return prev
  }, res)
}
// 获取唯一ID
export const guID = function () {
  return Number(Math.random().toString().substr(3, 8) + Date.now()).toString(36)
}
// 函数防抖
export const debounce = function (fn, wait=3e3) {
  if(!isFunction(fn)){throw new Error('传入的参数必须是个函数')}
  let timeout = null  // 使用闭包，让每次调用时点击定时器状态不丢失
  return function () { 
    clearTimeout(timeout) // 如果用户在定时器（上一次操作）执行前再次点击，那么上一次操作将被取消
    timeout = setTimeout(()=> fn(...arguments), wait)
  }
}
// 函数节流
export const throttling = function  (fn, wait=3e3) {
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
export const getScrollTop = function() {
  return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
}
// 滚动的盒子到某个位置
// 注意，如果想让这个盒子能滚动到某个位置。首先这个盒子必须是可滚动的，也就是高度得固定的
// 不限制高度的盒子，根本不存在滚动，你去设置这个盒子的滚动位置就是耍流氓
// 比如设置个动态的height:100vh;，然后垂直滚动overflow-y: auto;这样才行的
// 使用事例：scrollPos('taskBox', 0) // 将id为taskBox的盒子滚动到这个盒子的顶部
export const scrollPos = function (id = '', pos = 0){
  document.getElementById(id).scrollTop = pos
}
// 获取cookie 示例：var og_third_app_token = og_getOgCookie('third_app_token')
export const getCookie = function (name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
  if (arr = document.cookie.match(reg)) {
    return unescape(arr[2])
  } else {
    return null
  }
}
// 本地存储
export const getLocalStorage = name => JSON.parse(localStorage.getItem(name))
export const setLocalStorage = (name, val) => localStorage.setItem(name, JSON.stringify(val))
// 获取操作系统类型
export const getOS = function() {
  const userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || ''
  // const vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || ''
  const appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || ''
  if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios'
  if (/android/i.test(userAgent)) return 'android'
  if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'
  if (/mac/i.test(appVersion)) return 'MacOSX'
  if (/win/i.test(appVersion)) return 'windows'
  if (/linux/i.test(appVersion)) return 'linux'
}
// 获取元素相对于浏览器的位置, 返回一个对象
export const getPosition = function (e) {
  const offsety = Number(e.offsetTop)
  const offsetx = Number(e.offsetLeft)
  if (e.offsetParent !== null) {
    getPosition(e.offsetParent)
  }
  return { Left: offsetx, Top: offsety }
}

/*
**********************************************************************************************
******************************************数组方法*********************************************
**********************************************************************************************
*/
/**洗牌算法**/
// [1,2,3,4,5,6].sort(() => .5 - Math.random()) // 基础版本
export const shuffle = function (arr){
  if(!isArray(arr)) { arr = [arr] }
  let n = arr.length, random
  while(0!=n){
    random =  (Math.random() * n--) >>> 0; // 无符号右移位运算符向下取整
    [arr[n], arr[random]] = [arr[random], arr[n]] // ES6的结构赋值实现变量互换
  }
  return arr
}
/**
 *  缓存函数计算结果
 * @举例 const cachedComputed = cached(function(val){ return val + 'ZZZ' })
 * @测试 cachedComputed('abc') ---> 'absZZZ' 第二次调用就不需要计算了直接取值 cachedComputed('abc') ---> 'absZZZ'
 * */ 
export const cached = function (fn) {
  const cache = {}
  return function (str) {
    return !cache[str] && (cache[str] = fn(str)), cache[str]
  }
}
// 扩展对象
// extend({}, {name:1}) ====> {name: 1}
export const extend = function(to, _from) {
  for (var key in _from) {
    to[key] = _from[key]
  }
  return to
}
// 对象数组转对象
// toObject([{name: 1}, {age:2}]) ====> {name:1, age:2}
export const toObject = function (arr) {
  var res = {}
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
}
// 检测是否大致相等
// looseEqual(1,'1') ===> true
// looseEqual({name:'zaz'},{'name':'zaz'}) ===> true
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a)
  var isObjectB = isObject(b)
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = isArray(a)
      var isArrayB = isArray(b)
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a)
        var keysB = Object.keys(b)
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}
// 获取进近似相等的val值，在数组arr中的位置。没找到相似的返回-1
// looseIndexOf([{name:'zaz'}], {name:'zaz'})  ===> 0
export const looseIndexOf = function (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}
// 一次性函数。只执行一次。后面再调用,没有任何函数内代码执行
// 示例：const aa = once(function (a, b){console.log(a + b)})
// aa(1,2) ===> 3   ------>  aa(3, 4) ===> undefined
export const once = function(fn) {
  var called = false
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}
// 生成一个映射函数，生成一个判断函数，用于判断
// const isMyStudent = makeMap('小明,小王') // 柯里化生成不同的判断函数
// isMyStudent('张三')   ===>  false
export const makeMap = function(str,expectsLowerCase = false) {
  var map = Object.create(null)
  var list = isString(str) ? str.split(',') : str
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase ? function (val) { return map[val.toLowerCase()]; } : function (val) { return map[val]; }
}
// 删除数组中某个元素
// const arr = ['a', 'b', 'c']
// remove(arr, 'b') ====> arr变更为['a', 'c']
export const remove = function(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) { return arr.splice(index, 1) }
  }
}
// 数组、字符串元素复制N次 
// 举例(重复生成数组元素)： repeat([{age:1}], 2) ====>[{age:1, _id: 'asdasd2j2'}, {age:1, _id: '123123c'}]  // 备注增加_id是为了for循环的key值不重复
// 举例（重复生成字符串）： repeat('abc', 2) ====>  'abcabc'
// 字符串复制实现： Array(3).join(0) ====> '00'    "0".repeat(2) ===> '00'
// 引用类型复制实现： Array(2).fill([{name: '张三'}]) ====> [[{name: '张三'}], [{name: '张三'}]]
export const repeat = function(obj = '', times = 1) {
  let res = isArray(obj) ? [] : ''
  if(isArray(obj)) {
    if(isObject(obj[0])) {
      for(let i =0; i < range(times, 1); i++) {
        const tmp = deepCopy(obj).map(v => ({...v, _id: guID()}))
        res = [...res, ...tmp]
      }
    } else {
      res = [...obj, ...obj]
    }
  } else {
    for(let j = 0; j < range(times, 1); j++){
      res += obj
    }
  }
  return res
}
// 按照某个字段进行排序。
// 举例：sortByProp([{name:'ss', age:30}, {name:'dd', age:14}], 'age') ----> [{name:'dd', age:14}, {name:'ss', age:30}]
// increase不传默认升序， 传false降序
export const sortByProp = function (arr, str, increase = true) {
  return arr.sort((a, b) => increase ? a[str] - b[str] : b[str] - a[str])
}
/**
* 数组去重
* 举例： noSame([1,2,3,4,'1'])
*/
export const noSame = function(arr) {
  const newData = arr.reduce((prev, item) => (prev.set(item, item), prev), new Map())
  return [...newData.keys()]
}
//递归解析数组中某个字段最深层该字段数组平铺。举例子：获取数组中每个对象的最深层的child属性
// const arr = [{ 
//   name: 'a',
//   child:[{
//       name:'b',
//       child: [ { name:'c' }]
//   }]
// }]
//getAreaFlat(arr, 'child')------> [{name:'c'}]
export const getAreaFlat = function (arr, props) {
  if(arr.some(item => isArray(item[props]) && item[props].length)) {
    arr = arr.reduce((prev, item) => isArray(item[props]) && item[props].length ? [...prev, ...item[props]] : [...prev, item], [])
    return getAreaFlat(arr, props)
  } else {
    return arr
  }
}
// 获取某个数组中某个字段的值，拼接成字符串。
// 举例： const arr = [{name:'a'}, {name:'b'}]
// getField(arr, 'name')----> 'a,b'
export const getField = function (arr, field, split = ',') {
  return arr.reduce((prev, item) => [...prev, item[field]], []).join(split)
}
// 获取某个数组中字段isChecked为true的条目。并取出其中特定字段。
// 举例：const arr = [{id:1, isChecked: true}, {id:2, isChecked:false}, {id:2, isChecked:true}]
// getChecked(arr, 'id')  ---> 1,2
export const getChecked = function (arr, field, checkStr = 'isChecked', split = ',') {
  return arr.reduce((prev, item) => (item[checkStr] && prev.push(item[field]), prev), []).join(split)
}
// 数组分块
// 举例子： chunk([1,2,3,4,5], 2) ====>   [[1,2], [3, 4], [5]]
export const chunk = function (arr, size = 0) {
  if(!isArray(arr)) {throw new Error('arr必须是数组类型')}
  size = Number(size)
  if(!isGt0(size)) {throw new Error('size必须为大于0的整数')}
  var targetArr = []
  for(var i = 0; i < arr.length; i += size) {
    targetArr.push(arr.slice(i, i + size));
  }
  return targetArr
}
// 数组（a 相对于 b 的）交集
// 举例子: difference([1,2,3], [1,2]) ====> [1, 2]
export const intersect = function (arr1, arr2){
  if(!isArray(arr1) || !isArray(arr2)) {throw new Error('参数必须是数组类型')}
  const tmp = new Set(arr2)
  return arr1.filter(x => tmp.has(x))
}
// 数组（a 相对于 b 的）差集
// 举例子: difference([1,2,3], [1,2]) ====> [3]
export const difference = function (arr1, arr2){
  if(!isArray(arr1) || !isArray(arr2)) {throw new Error('参数必须是数组类型')}
  const b = new Set(arr2)
  return arr1.filter(x => !b.has(x))
}
/*
**********************************************************************************************
******************************************字符串操作*********************************************
**********************************************************************************************
*/
// 去除字符串的首尾空格
export const trim = function (str = '') {
  return String(str).replace(/(^\s*)|(\s*$)/g, '')
}
// 固定裁剪几个字符之后显示省略号。举例：sliceStr('张三李四王五', 2) ----> "张三..."
export const sliceStr = function (str, num) {
  str = String(str)
  let newStr = str.substr(0, num)
  str.length > num && (newStr += '...')
  return newStr
}
// 字符串前置补0。举例: addZero('1', 2) ==> '01'
export const addZero = function (str, num) {
  return (Array(num+1).join('0') + str).slice(-num)
}
// 完美的统计字符串长度，能正确统计占四个字节的Unicode字符。举例：length('x\uD83D\uDE80y') ----> 3
export const length = function (str) {
  return [...str].length
}
// 字符串复制
export const copyLink = function (e){
  // if(!e) {
  //   return this.$Message.error('链接地址为空')
  // }
  var input = document.createElement("input")   // js创建一个input输入框
  input.value = e  // 将需要复制的文本赋值到创建的input输入框中
  document.body.appendChild(input)    // 将输入框暂时创建到实例里面
  input.select()   // 选中输入框中的内容
  document.execCommand("Copy")   // 执行复制操作
  document.body.removeChild(input) // 最后删除实例中临时创建的input输入框，完成复制操作
  // return this.$Message.success('复制成功')
}
/*
**********************************************************************************************
******************************************JSON操作*********************************************
**********************************************************************************************
*/
// 格式化JSON, 将null, undefined,转换为''，否则后端会认为undefined和null为字符串导致bug
// 举例子：formatJSON({name:null, age:undefined, school: '清华大学'}) ---> {name:'', age:'', school: '清华大学'}
export const formatJSON = function (obj) {
  if(!isObject(obj)) { return {} }
  return Object.keys(obj).reduce((prev, item) => {
    prev[item] = isNull(obj[item]) || isUndefined(obj[item]) || ['undefined', 'null'].includes(obj[item]) ? '' : obj[item]
    return prev
  }, {})
}
// 检查表单必填项是否为空，空则返回第一个为空的字段名。
// 举例：checkParams({name:'张三', age:'', school:''}) ----> 'age'
export const checkJSON = function (obj) {
  return Object.keys(obj).find(item => !Boolean(obj[item])) || ''
}
// JSON转url
// 举例子： JSON2url('../advise/index', { from: 'index', id_str:'1243' }) -----> '../advise/index?from=index&id_str=1243'
export const JSON2url = function (url = '', params = {}){
  params = formatJSON(params)
  return Object.keys(params).reduce((prev, item) => {
    prev += prev.includes('?') ? '&' : '?'
    prev += `${item}=${encodeURIComponent(params[item])}`
    return prev
  }, url) || ''
}
/**
 * url转JSON
 * @举例 url2JSON('http://www.baidu.com?name=asd&age=12') ----> {name: "asd", age: "12"}
 */
export const url2JSON = function (url = '') {
  const paramsStr = url.includes('?') ? (url.split('?')[1] || '') : url
  return paramsStr.split('&').reduce((prev, item) => {
    const [key, val] = item.split('=')
    return { ...prev, [key]: decodeURIComponent(val) } // 此处需要转码，否则中文和一些特殊字符就无法支持了
  }, {})
}
//base64数据导出文件，文件下载
/**
 * @举例 downloadFile('活动表格', 'http://xxxxxxx')
 */
export const downloadFile = function (filename, data){
  let DownloadLink = document.createElement('a')
  if (DownloadLink) {
    document.body.appendChild(DownloadLink)
    DownloadLink.style = 'display: none'
    DownloadLink.download = filename
    DownloadLink.href = data
    if (document.createEvent){
      let DownloadEvt = document.createEvent('MouseEvents')
      DownloadEvt.initEvent('click', true, false)
      DownloadLink.dispatchEvent(DownloadEvt)
    }
    else if ( document.createEventObject ){
      DownloadLink.fireEvent('onclick')
    } else if (typeof DownloadLink.onclick == 'function' ) {
      DownloadLink.onclick()
    }
    document.body.removeChild(DownloadLink)
  }
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
 * @举例 random(0, 0.5) ==> 0.3567039135734613
 * @举例 random(1, 2) ===> 1.6718418553475423
 * @举例 random(-2, -1) ==> -1.4474325452361945
 * 原生参考代码:  a = new Date % 100; // 两位整数随机数
 * a = new Date % 1000; // 三位整数随机数
 * a = new Date % 10000; // 四位整数随机数...依次类推
 */
export const random = function (lower, upper) {
    lower = +lower || 0
    upper = +upper || 0
    return Math.random() * (upper - lower) + lower
}
// 禁止复制
/*
['contextmenu', 'selectstart', 'copy'].forEach(function(ev){
    document.addEventListener(ev, function(event){
      return event.returnValue = false
    })
})
*/
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
  if(isArray(obj)) {
    return obj.map(item => {
      return Object.keys(props).reduce((prev, v) => {
        prev[v] = isObject(props[v]) ? getProps(item[v], props[v]) : item[v] || ''
        return prev
      }, {})
    })
  }else if(isObject(obj)) {
    return Object.keys(props).reduce((prev, item) => {
      prev[item] = isObject(props[item]) ? getProps(obj[item], props[item]) : obj[item] || ''
      return prev
    }, {})
  } else {
    return obj
  }
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

/*
**********************************************************************************************
******************************************金额操作*********************************************
**********************************************************************************************
*/
/**
 * 四舍五入返回N位有效数字（常用于金额计算）
 * @param num 要格式化的数字
 * @param type float->小数形式。  intFloat->当整数的时候不需要带两个小数0，带小数时，保留几位小数
 * @param prev 前置金额符号等等
 * @param prec 保留几位小数
 * @param sep 千分位符号
 * @举例 formatMoney(12322.1223, 'float') ====> "￥12,322.12" // 保留0位小数四舍五入得到 12
 * @举例 formatMoney(12322.1223, 'float', '', 1) ------> "12,322.1"  固定显示1位小数
 * @举例 formatMoney(12322, 'intFloat') ------> "12322"  当没有小数点就显示整数，否则显示整数
 */
export const formatMoney = function (num = 0, type = 'float', prev = '￥', prec = 2, dec = '.', sep = ',') {
  num = String(num).replace(/[^0-9+-Ee.]/g, '') || '0'
  prec = Number(prec)
  if((type === 'intFloat' && !num.includes('.')) || num === '0') { return num }
  let [intStr = '', floatStr = ''] = round(num, prec).split(dec) // 分割出整数和小数部分
  let re = /(-?\d+)(\d{3})/ // 匹配整数部分每个三位数
  while (re.test(intStr)) {
    intStr = intStr.replace(re, "$1" + sep + "$2") // 整数部分三位数添加分隔符如','
  }
  floatStr += new Array(prec + 1).join('0')
  return `${prev}${intStr}${dec}${floatStr.slice(0, prec)}`
}
/**
 * 四舍五入返回N位有效数字（常用于金额计算）
 * @param num 需要处理的的数字、支持传入字符串
 * @param prec 保留的小数位数
 * @举例 round(12.35) ==> 12  // 12.35 保留0位小数四舍五入得到 12
 * @举例 round(12.35, 1) ==> 12.4 // 12.35 保留1位小数四舍五入得到 12.4
 */
export const round = function (num, prec = 0) {
  prec = Number(prec)
  prec < 0 && (prec = 0)
  const k = Math.pow(10, prec)
  return String(Math.round(Number(num) * k) / k)
}
/**
 * 数据范围
 * @param num 需要限制的数字
 * @param min 限制最小值
 * @param max 限制最大值
 * @举例 range(12.23, 7, 10)  ===> 10 // 上限为10 因此返回10
 * @举例 range(12.23, 14, 20)  ===> 14 // 下限为14 因此返回10
 */
export const range = function (num, min = null, max = null) {
  if(min !== null) {
    num = Number(num) < Number(min) ? min : num
  }
  if(max !== null) {
    num = Number(num) > Number(max) ? max : num
  }
  return num
}
/*
**************日期时间操作********************
*/
// 获取日期字符串。
// 举例：获取今天日期:getDateStr(0)--->20200904
// 明天日期用-分割：getDateStr(1, '-')--->2020-09-05
export const getDateStr = function (AddDayCount = 0, split = '') {
  const dt = new Date()
  dt.setDate(dt.getDate() + AddDayCount) // 获取AddDayCount天后的日期
  return `0000${dt.getFullYear()}`.slice(-4) + split + `00${(dt.getMonth() + 1)}`.slice(-2) + split + `00${dt.getDate()}`.slice(-2)
}
// 获取传入日期是星期几, 不传默认是今天
export const getDay = function (date) {
  let day = date ? new Date(date).getDay() : new Date().getDay()
  return '星期' + "日一二三四五六"[day]
}
// 获取实时   年-月-周-日-时-分-秒
// 举例： socketTime('2020-03-05') ---> 返回的就是2020年3月5日的年月日数据
// socketTime() // 默认返回当天数据
export const socketTime = function (t = new Date()) {
  if(!isDate(t)) { t = t.replace(/[-]/g, "/") }
  const dt = new Date(t)
  const year = String(dt.getFullYear())
  const _month = String(dt.getMonth() + 1)
  const month = addZero(_month, 2)
  const day = addZero(dt.getDate(), 2)
  const _day = String(dt.getDate())
  const weekDay = String(dt.getDay())
  const _weekDay = '星期' + "日一二三四五六"[weekDay]
  const hour = addZero(dt.getHours(), 2)
  const minutes = addZero(dt.getMinutes(), 2)
  const seconds = addZero(dt.getSeconds(), 2)
  return { year, month, _month, day, _day, weekDay, _weekDay, hour, minutes, seconds }
}
/**
 * 生成格式化时间字符串
 * @举例 dateFormater('YYYY-MM-DD HH:mm') ==> 2019-06-26 18:30
 * @举例 dateFormater('YYYYMMDD-hh:mm:ss', '2020-08-12 09:13:54') ==> 20200812-09:13:54
*/
export const dateFormater = function (formater, t = new Date()){
  if(!isDate(t)) { t = t.replace(/[-]/g, "/") }
  const dt = new Date(t)
  const [Y, M, D, h, m, s] = [dt.getFullYear() + '', dt.getMonth() + 1, dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds()]
  return formater.replace(/YYYY|yyyy/g, Y)
    .replace(/YY/g, Y.substr(2,2))
    .replace(/MM/g, (M < 10 ? '0' : '') + M)
    .replace(/DD/g, (D < 10 ? '0' : '') + D)
    .replace(/hh/g, (h < 10 ? '0' : '') + h)
    .replace(/mm/g, (m < 10 ? '0' : '') + m)
    .replace(/ss/g, (s < 10 ? '0' : '') + s)
}
/**得到当前时间之后N秒的时间
 * @param {*} after 多少秒之后的时间
 * @举例 afterNsecond(20)  // 20s之后的时间
 */
export const afterNsecond = function (after = 60) {
  const dt = new Date()
  return new Date(dt.getTime() + after * 1000)
}

/*
**********************************************************************************************
******************************************业务函数*********************************************
**********************************************************************************************
*/
/**
 * 轻提示
 * @param str 提示的字符串内容
 * @param time 提示显示的时间
 * @param innerHTML 采用传入的html，不使用默认的样式
 * @举例 showToast('请输入手机号码')  // 弹出“请输入手机号码”这个提示，并且1500ms后自动消失
 */
export const showToast = function (str, time = 1500, innerHTML = '') {
  var pObj = document.createElement("div") // 创建，写内容
  pObj.innerHTML = innerHTML || `<div style="position:fixed;top:45%;left:50%;transform: translateX(-50%);font-size:0.30rem;padding:0.2rem 0.5rem;background:#555;color:#fff;border-radius:0.15rem;">${str}</div>`       //添加内容
  document.body.appendChild(pObj)
  setTimeout(() => document.body.removeChild(pObj), time);
}
/**
 * 往网页头部动态追加css
 * @param css 可以手动传入需要载入的样式
 * @param id 这个css的id，方便以后进行删除操作
 * @举例 addCss('@keyframes moveY {0%{transform: translateY(0%);}100%{transform: translateY(-100%);}}')  // 载入移动动画样式
 */
export const addCss = function (css = '', id = ""){
  const selectDom = document.getElementById(id)
  if(selectDom){ document.getElementsByTagName('head').item(0).removeChild(selectDom) } // 清除样式
  var styleObj = document.createElement('style')
  styleObj.id = id
  styleObj.innerHTML= css
  document.getElementsByTagName('head').item(0).appendChild(styleObj) // 添加样式到头部
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
 * 往网页头部动态追加Dom
 * @param dom 可以手动传入需要载入的Dom
 * @param id 这个css的id，方便以后进行删除操作
 * @举例 addDom('<div>234324</div>')  // 载入的dom
 */
 export const addDom = function (dom = '', id = ""){
  const selectDom = document.getElementById(id)
  if(selectDom){ document.body.removeChild(selectDom) } // 清除DOM
  var divObj = document.createElement("div")
  divObj.id = id
  divObj.innerHTML = dom
  document.body.appendChild(divObj) // 添加Dom节点到body中
}
/**
 * 删除DOM结点
 * @param id 需要删除的结点的id
 * @举例 removeDom('z-loading')  // 删除id为z-loading的dom
 */
export const removeDom = function (id = ''){
  const selectDom = document.getElementById(id)
  if(selectDom){ document.body.removeChild(selectDom) } // 清除DOM
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
 * @param id 需要删除的结点的id
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
export const setTitle = function  (title) {
  document.title = title
}
/**
 * 轻提示
 * @param href 链接地址
 * @举例 goUrl('https://www.baidu.com')  // 跳转到百度
 */
export const goUrl = function(href) {
  window.location.href = href
}
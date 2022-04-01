import router from './router'
/*
**********************************************************************************************
******************************************公共方法*********************************************
**********************************************************************************************
*/
export const isType = type => val => type === Object.prototype.toString.call(val).slice(8, -1)
export const isArray = isType('Array')
export const isObject = isType('Object')
export const isEmptyObj = val => isObject(val) && Object.keys(val).length // 是否是空对象
export const isReference = val => isArray(val) || isObject(val)
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
export const isWeChat = (UA && (/MicroMessenger/i).test(UA))
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
export const isPhantomJS = UA && /phantomjs/.test(UA)
export const isFF = UA && UA.match(/firefox\/(\d+)/)
export const isPhone = val => /^1[3456789]\d{9}$/.test(val) // 检测是否是手机号码
export const isIdentity = val => /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(val) // 身份证 321281155121152489
export const isEmail = val => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(val)
/**
 * 去某个页面
 * @param {*} options
 * @举例 go({name: 'lottie', query:{name:'tom'}}) // 这样就实现了跳转到/lottie页面并且页面传参为name=tom
 */
export const go = function(options = {}) {
  router.push({
    path: '', // 路由路径
    name: '', // 路由名称
    query: {}, // 通过this.$route.query.id获取。刷新没问题。因为数据是在url上的
    params: {}, // 通过this.$route.params.id。刷新，传入当前页面的数据会丢失
    ...options
  }) 
}
// 返回几层
export const goBack = (times = -1) => router.go(times) // 返回times页面
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
/*
**********************************************************************************************
******************************************字符串操作*********************************************
**********************************************************************************************
*/
/** 返回是否以某个字符串开头
 * @param {String} str 目标字符串
 * @param {String} keywords 需要搜索的开头的字符串
 * @returns {Boolean}
 */
export const startWith = (str, startWords) => str.slice(0, startWords.length) === startWords
/**
 * 去除字符串中的空格
 * @param {String} str 需要去除空格的字符串
 * @param {Number} type 去除空格的类型 ----> 1: 去除首尾空格   2：去除全部空格  3：去除头部空格  4：去除尾部空格
 * @returns {String}
 * @举例 trim(' ab c  ')  ---> 'ab c'
 * @举例 trim(' ab c  ', 2)  ---> 'abc'
 * @举例 trim(' ab c  ', 3)  ---> 'ab c  '
 * @举例 trim(' ab c  ', 4)  ---> ' ab c'
 */
export const trim =  (str = '', type = 1) => {
  str = String(str)
  const mapStr = {
    1: () => str.replace(/(^\s*)|(\s*$)/g, ""),
    2: () => str.replace(/\s+/g, ""),
    3: () => str.replace(/(^\s*)/g, ""),
    4: () => str.replace(/(\s*$)/g, "")
  }
  return (mapStr[type] && mapStr[type]()) || str
}
/**
 * 固定裁剪几个字符之后显示省略号
 * @param {String} str 需要进行裁剪的字符串
 * @param {Number} num 要裁剪几位数字
 * @returns 
 * @举例 sliceStr('张三李四王五', 2) ----> "张三..."
 */
export const sliceStr = function (str, num) {
  str = String(str)
  return str.length > num ? str.slice(0, num) + '...' : str.slice(0, num)
}
// 字符串前置补0。举例: addZero('1', 2) ==> '01'
export const addZero = (str = '', num = 2) => (Array(num+1).join('0') + str).slice(-num)
// 完美的统计字符串长度，能正确统计占四个字节的Unicode字符。举例：length('x\uD83D\uDE80y') ----> 3
export const length = str => [...str].length
// 字符串复制
export const copyLink = function (e){
  // if(!e) { return this.$Message.error('链接地址为空') }
  var input = document.createElement("input")   // js创建一个input输入框
  input.value = e  // 将需要复制的文本赋值到创建的input输入框中
  document.body.appendChild(input)    // 将输入框暂时创建到实例里面
  input.select()   // 选中输入框中的内容
  document.execCommand("Copy")   // 执行复制操作
  document.body.removeChild(input) // 最后删除实例中临时创建的input输入框，完成复制操作
  // return this.$Message.success('复制成功')
}
/**
 * 字符串首字母大写
 * @param {*} str 
 * @returns 经过转换后的首字母为大写的字符串
 */
export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
/*
**********************************************************************************************
******************************************数组方法*********************************************
**********************************************************************************************
*/
/**
 * 洗牌算法
 * @param {Array} arr 需要乱序的数组
 * @returns {Array} 打乱顺序后的数组
 * @举例 shuffle([1,2,3,4])  ---> 可能的结果：[2,4,1,3]
 */
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
 * 缓存函数计算结果
 * @举例 const cachedComputed = cached(function(val){ return val + 'ZZZ' })
 * @测试 cachedComputed('abc') ---> 'absZZZ' 第二次调用就不需要计算了直接取值 cachedComputed('abc') ---> 'absZZZ'
 * */ 
export const cached = function (fn) {
  const cache = {}
  return function (str) {
    return !cache[str] && (cache[str] = fn(str)), cache[str]
  }
}
/**
 * 扩展对象
 * @param {Object} to 需要扩展的目标对象
 * @param {Object} _from 从这个对象扩展
 * @returns 扩展之后的对象
 * @举例 extend({}, {name:1}) ----> {name: 1}
 */
export const extend = function(to, _from) {
  for (var key in _from) {
    to[key] = _from[key]
  }
  return to
}
/**
 * 对象数组转对象
 * @param {Array} arr 需要转换的数组
 * @returns {Object} 转换之后的对象
 * @举例 toObject([{name: 1}, {age:2}]) ----> { name:1, age:2 }
 */
export const toObject = function (arr) {
  var res = {}
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
}
/**
 * 数组求和
 * @param {Array} arr 需要求和的数组
 * @returns {Number}
 * @举例 sum([1,2,3,4,5]) ----> 15
 */
export const sum = arr => arr.reduce((prev, item) => prev + item, 0)
/**
 * 数组平均值
 * @param {Array} arr 需要求均值的数组
 * @returns {Number}
 * @举例 mean([1,2,3,4,5]) ----->  3
 */
export const mean = arr => arr.reduce((prev, item) => prev + item, 0) / arr.length
/**
 * 指定索引变换
 * @param {Array} arr 需要变换的数组
 * @returns {Number}
 * @举例 adjust([1,2,3,4,5], 2, item => 'zzz') ---> [1,2,'zzz',4,5]
 * @举例 adjust([1,2,3,4,5], -1, item => item + 'zzz') ---> [1,2,3,4,'5zzz']
 */
export const adjust = function (arr, num, fn) {
  return arr.map((item, index) => {
    if(num >= 0) { return index === num ? fn(item) : item } // 如果是正数，那么就正常的进行映射
    return num + arr.length === index ? fn(item) : item // 如果是负数，比如-1，则对应修改最后一个元素
  })
}
/**
 * 扁平数组转对象tree树形结构
 * https://juejin.cn/post/6983904373508145189#heading-8
 * @param {Array} arr 需要转换的数组
 * @returns {Array} 转换之后的数组
 * @举例 
 * let arr = [{id: 1, name: '部门1', pid: 0},{id: 2, name: '部门2', pid: 1},{id: 3, name: '部门3', pid: 1},{id: 4, name: '部门4', pid: 3},{id: 5, name: '部门5', pid: 4}]
 * arrayToTree(arr) ==> 
 * [{
    "id": 1,
    "name": "部门1",
    "pid": 0,
    "children": [ { "id": 2, "name": "部门2", "pid": 1, "children": [] }, { "id": 3, "name": "部门3", "pid": 1, "children": [{...},{...}] } ]
   }]
 */
export const array2Tree = function (arr) {
  const itemMap = arr.reduce((prev, item) => (prev[item.id] = { ...item, children: [] }, prev), {})
  return arr.reduce((prev, item) => {
    const { id, pid } = item
    const curItem = itemMap[id]
    itemMap[pid] = itemMap[pid] || { children: [] } // 防止有的pid不存在
    pid === 0 ? prev.push(curItem) : itemMap[pid].children.push(curItem)
    return prev
  }, [])
}
// 一次性函数。只执行一次。后面再调用,没有任何函数内代码执行
// 示例：const aa = once(function (a, b){console.log(a + b)})
// aa(1,2) ===> 3   ------>  aa(3, 4) ===> undefined
export const once = function(fn) {
  var called = false
  return function () {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}
/**
 * 校验某个字符串是否存在
 * @param {String} str 字符串
 * @param {Boolean} expectsLowerCase 期望小写
 * @returns 一个判断函数
 * @举例 const isTag = makeMap('div,span', true); isTag('div')
 */
export const makeMap = function(str, expectsLowerCase = false) {
  var map = Object.create(null)
  var list = isString(str) ? str.split(',') : str
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase ? val => map[val.toLowerCase()] : val => map[val]
}
/**
 * 删除数组中某一个元素
 * @param {*} arr 需要操作的数组
 * @param {*} item 要删除的条目
 * @param {*} type 删除类型  0: 代表只删除查到的第一个, 1代表删除查到的全部， -1代表删除查到的最后一个
 * @returns 删除后的新数组
 * @举例 remove([1,2,3,4,5,4], 4, 1) ----> [1,2,3,5]
 * @举例 remove([1,2,3,4,5,4], 4, 0) ----> [1,2,3,5,4]
 * @举例 remove([1,2,3,4,5,4], 4, -1) ----> [1,2,3,4,5]
 */
export const remove = function(arr, item, type = 1) {
  if(type == 0) {
    arr.splice(arr.indexOf(item), 1)
  } else if(type == -1) {
    arr.splice(arr.lastIndexOf(item), 1)
  } else {
    arr = arr.filter(v => v !== item)
  }
  return arr
}
/**
 * 数组、字符串元素复制N次 
 * @param {Object|Array} obj 
 * @param {Number} times 
 * @returns 复制之后的数据
 * @举例 重复生成数组元素：repeat([{age:1}], 2) ====>[{age:1, _id: 'asdasd2j2'}, {age:1, _id: '123123c'}]  // 备注增加_id是为了for循环的key值不重复
 * @举例 重复生成字符串：repeat('abc', 2) ====>  'abcabc'
 * @举例 字符串复制实现：Array(3).join(0) ====> '00'    "0".repeat(2) ===> '00'
 * @举例 引用类型复制实现：Array(2).fill([{name: '张三'}]) ====> [[{name: '张三'}], [{name: '张三'}]]
 */
export const repeat = function(obj = '', times = 1) {
  let res = isArray(obj) ? [] : ''
  if(isArray(obj)) {
    if(isObject(obj[0])) {
      for(let i =0; i < range(times, 1); i++) {
        const tmp = deepCopy(obj).map(v => ({...v, _id: guID()}))
        res = [...res, ...tmp]
      }
    } else {
      for(let i =0; i < range(times, 1); i++) { res = [...res, ...obj] }
    }
  } else {
    for(let j = 0; j < range(times, 1); j++) { res += obj }
  }
  return res
}
/**
 * 对象数组按照某个字段进行排序
 * @param {*} arr 需要排序的对象数组
 * @param {*} str 根据这个字段的值进行排序
 * @param {*} type 排序方式、递增还是递减 1: 递增   -1递减
 * @returns {Array} 排序后的数组
 * @举例 举例：sortByProp([{name:'ss', age:30}, {name:'dd', age:14}], 'age') ----> [{name:'dd', age:14}, {name:'ss', age:30}]
 */
export const sortByProp = function (arr, str, type = 1) {
  return arr.sort((a, b) => type === 1 ? a[str] - b[str] : b[str] - a[str])
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
  if(!isArray(arr)) { throw new Error('arr必须是数组类型') }
  size = Number(size)
  if(!isGt0(size)) { throw new Error('size必须为大于0的整数') }
  var targetArr = []
  for(var i = 0; i < arr.length; i += size) {
    targetArr.push(arr.slice(i, i + size));
  }
  return targetArr
}
/**
 * 数组分割
 * @param {Array} arr 需要进行分割的数组
 * @param {Array} num 分割的位置
 * @returns {Array} 
 * @举例  splitAt([1,2,3,4,5], 2) ---> [[1,2], [3,4,5]]
 */
export const splitAt = (arr, num) => [arr.slice(0, num), arr.slice(num)]
/**
 * 二维数组行列互换
 * @param {Array<Array>} arr 需要行列互换的二维数组
 * @returns {Array<Array>} 
 * @举例  transformArr([['a','b','c'], [0, 1, 2]]) ---> [['a', 0], ['b', 1], ['c', 2]]
 */
export const transformArr = arr => arr[0].map((col, i) => arr.map(row => row[i]))
/**
 * 数组条件分割
 * @param {Array} arr 需要进行分割的数组
 * @param {Array} num 分割的位置
 * @returns {Array} 
 * @举例  splitWhen([1,2,3,4,5], item => item === 3) ---> [[1,2], [3,4,5]]
 */
export const splitWhen = (arr, fn) => {
  return splitAt(arr, arr.findIndex(item => fn(item)))
} 
// 数组（a 相对于 b 的）交集
// 举例子: intersect([1,2,3], [1,2]) ====> [1, 2]
export const intersect = function (arr1, arr2){
  if(!isArray(arr1) || !isArray(arr2)) { throw new Error('参数必须是数组类型') }
  const tmp = new Set(arr2)
  return arr1.filter(x => tmp.has(x))
}
/**
 * 数组（a 相对于 b 的）差集
 * @param {*} arr1 数组1
 * @param {*} arr2 数组2
 * @returns 
 * @举例子 difference([1,2,3], [1,2,7]) ====> [3]
 */
export const difference = function (arr1, arr2){
  if(!isArray(arr1) || !isArray(arr2)) { throw new Error('参数必须是数组类型') }
  const b = new Set(arr2)
  return arr1.filter(x => !b.has(x))
}
/**
 * 找到数组中目标对象进行数据变更
 * @param {Array} arr 需要操作的数据
 * @param {Object} serchObj 需要查询的字段
 * @param {Function} callback 接受一个item，返回一个新的item
 * @returns {Array} 返回一个处理后的数组
 * @举例 searchCover([{id:1, age:1}, {id:2, age:2}], {id:2}, item => ({...item, age: item.age + 5})) ---> [{id: 1, age: 1}, {id: 2, age: 7}]
 */
export const searchCover = function (arr, serchObj = {}, callback) {
  return arr.map(item => {
    const isTargetItem = Object.keys(serchObj).reduce((prev, v) => (prev = prev && serchObj[v] == item[v], prev), true)
    if(isTargetItem) { item = callback(item) }
    return item
  })
}
/*
**********************************************************************************************
******************************************JSON操作*********************************************
**********************************************************************************************
*/
/**
 * 格式化JSON, 将null, undefined,转换为''，否则后端会认为undefined和null为字符串导致bug
 * @param {*} obj
 * @returns 
 * @举例子 formatJSON({name:null, age:undefined, school: '清华大学'}) ---> {name:'', age:'', school: '清华大学'}
 */
export const formatJSON = function (obj) {
  if(!isReference) { return obj }
  return isObject(obj) ? Object.keys(obj).reduce((prev, item) => ((prev[item] = isNull(obj[item]) || isUndefined(obj[item])  ? '' : obj[item]), prev), {}) : {}
}
// 格式化后端返回数据，将null转为undefined，后续写代码需要解构赋值的时候，赋默认值{}或者[]
export const formatRes = function (obj) {
  if(!isReference) { return obj }
  const filterNull = tmpObj =>  Object.keys(tmpObj).reduce((prev, item) => ((prev[item] = isNull(tmpObj[item]) ? undefined : tmpObj[item]), prev), {})
  return isArray(obj) ? obj.map(item => filterNull(item)) : filterNull(obj)
}
/**
 * 检查表单必填项是否为空，空则返回第一个为空的字段名。用于做一些必填校验检查
 * @param {*} obj 
 * @returns 
 * @举例 checkParams({name:'张三', age:'', school:''}) ----> 'age'
 */
export const checkJSON = function (obj) {
  return Object.keys(obj).find(item => !Boolean(obj[item])) || ''
}
/**
 * JSON转url（这个函数将数据进行了编码。将来再解码使用。可以规避一些特殊字符产生的bug）
 * 函数还兼容传入 {info: {name:'zz', age:18}, school: 'qinghua'} 这种复杂的数据。之后通过url2JSON可以完美解析
 * @param {String} url 跳转地址的域名。在小程序中那就是路径
 * @param {Object} params 跳转地址中药传递的参数的json格式
 * @param {String || Number} type  0不需要编码 1: 需要编码(默认值)
 * @returns {String} 返回拼接好的带有参数的链接地址
 * @举例子 JSON2url('../advise/index', { from: 'index', id_str:'1243' }) -----> '../advise/index?from=index&id_str=1243'
 */
 export const JSON2url = function (url = '', params = {}, type = 1){
  return Object.keys(formatJSON(params)).reduce((prev, item) => {
    let val = JSON.stringify(params[item])
    val = type == 1 ? encodeURIComponent(val) : val // 为了适配更多的场景，开发了自定义是否编码
    return prev + (prev.includes('?') ? '&' : '?') + `${item}=${val}`
  }, url) || ''
}
/**
 * url转JSON(函数内与解码操作，与JSON2url相对应)
 * @param {String} url 传入带有参数的url链接地址
 * @param {String || Number} type 0: 不需要解码  1需要解码(默认值)
 * @returns {Object} 返回参数拼接的json对象
 * @举例 url2JSON('http://www.baidu.com?name=asd&age=12') ----> {name: "asd", age: "12"}
 */
export const url2JSON = function (url = '', type = 1) {
  // url = url || window.location.href // 如果没传参，就使用浏览器当前url。暂时注释，因为这个不兼容小程序
  let paramsStr = url.includes('?') ? (url.split('?')[1] || '') : url
  paramsStr = paramsStr.split('#')[0] || '' // 防止一些url中混入#号放在?号之后，此处做一个适配
  return paramsStr.split('&').reduce((prev, item) => {
    let [key, val] = item.split('=')
    val = type == 1 ? decodeURIComponent(val) : val // 为了适配更多的场景，开发了自定义是否解码（如果传入的url是编码过的，那么必须解码，否则报错）
    return { ...prev, [key]: JSON.parse(val) } // 此处需要转码，否则中文和一些特殊字符就无法支持了
  }, {})
}
/**
 * 将数组中的数据进行分类，分类成JSON。键名为类别名称，键值为数组，存放数据集合
 * @param {Array} arr 需要分类的数组
 * @param {Function} callback 分类函数
 * @举例子 
 * const arr = [{name: 'asd', score: 100}, {name: '3dd', score: 60}, {name: 'dfg', score: 80}, {name: 'zrr', score: 90}]
 * groupBy(arr, item => {
 *   const { score } = item
 *   return score < 65 ? 'E' :
 *          score < 70 ? 'D' :
 *          score < 80 ? 'C' :  
 *          score < 90 ? 'B' : 'A';
 *   })
 * }
 * @result 根据分类函数分类好的结果：{A: [{...},{...}], B: [{...}], C: [{...}], D: [{...}]}
 */
export const groupBy = function (arr, callback){
  return arr.reduce((prev, item) => {
    const key = callback(item)
    ;(prev[key] || (prev[key] = [])).push(item)
    return prev
  }, {})
}
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
//base64数据导出文件，文件下载
/**
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

/*
**********************************************************************************************
******************************************金额操作*********************************************
**********************************************************************************************
*/
/**
 * 四舍五入返回N位有效数字（常用于金额计算）
 * @param num 要格式化的数字
 * @param type float->小数形式。  intFloat->当整数的时候不需要带两个小数0，带小数时，保留几位小数
 * @param prec 保留几位小数
 * @param sep 千分位符号
 * @举例 formatMoney(12322.1223, 'float') ====> "12,322.12" // 保留0位小数四舍五入得到 12
 * @举例 formatMoney(12322.1223, 'float', 1) ------> "12,322.1"  固定显示1位小数
 * @举例 formatMoney(12322, 'intFloat') ------> "12322"  当没有小数点就显示整数，否则显示整数
 */
export const formatMoney = function (num = 0, type = 'float', prec = 2, dec = '.', sep = ',') {
  num = String(num).replace(/[^0-9+-Ee.]/g, '') || '0'
  prec = Number(prec)
  if((type === 'intFloat' && !num.includes('.')) || num === '0') { return num }
  let [intStr = '', floatStr = ''] = round(num, prec).split(dec) // 分割出整数和小数部分
  let re = /(-?\d+)(\d{3})/ // 匹配整数部分每个三位数
  while (re.test(intStr)) {
    intStr = intStr.replace(re, "$1" + sep + "$2") // 整数部分三位数添加分隔符如','
  }
  floatStr += new Array(prec + 1).join('0')
  return `${intStr}${dec}${floatStr.slice(0, prec)}`
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
  return Math.round(Number(num) * k) / k
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
/**
 * 获取日期字符串。
 * @param AddDayCount 传0代表今天，传1代表明天
 * @param split 日期分割符
 * @举例 getDateStr(0) ---> 20200904    getDateStr(1) ---> 20200905
 * @举例 分割：getDateStr(1, '-')--->2020-09-05
 */
export const getDateStr = function (AddDayCount = 0, split = '') {
  const dt = new Date()
  dt.setDate(dt.getDate() + AddDayCount) // 获取AddDayCount天后的日期
  return `0000${dt.getFullYear()}`.slice(-4) + split + `00${(dt.getMonth() + 1)}`.slice(-2) + split + `00${dt.getDate()}`.slice(-2)
}
/**
 * 获取星期几， 不传默认是今天
 * @param t 时间格式字符串比如： '2021-10-01'   当然，也同时支持传入new date('2021-10-01')生成的对象
 * @举例 getDay('2020-03-05') ---> 返回的就是这个日期对应的星期几
 * @举例 getDay() // 默认返回当天星期几
 */
export const getDay = function (t = new Date()) {
  if(!isDate(t)) { t = t.replace(/[-]/g, "/") } // 为了兼容ios
  let day = t ? new Date(t).getDay() : new Date().getDay()
  return '星期' + "日一二三四五六"[day]
}
/**
 * 获取时间
 * @param t 时间格式字符串比如： '2021-10-01'   当然，也同时支持传入new date('2021-10-01')生成的对象
 * @举例 socketTime('2020-03-05') ---> 返回的就是2020年3月5日的年月日数据
 * @举例 socketTime() // 默认返回当天数据
 */
export const socketTime = function (t = new Date()) {
  if(!isDate(t) && isString(t)) { t = t.replace(/[-]/g, "/") }
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
 * @param {*} formater 时间格式
 * @param {*} t 传入的时间
 * @returns 处理之后的时间数据
 * @举例 dateFormater('YYYY-MM-DD hh:mm') ==> 2019-06-26 18:30
 * @举例 dateFormater('YYYYMMDD-hh:mm:ss', '2020-08-12 09:13:54') ==> 20200812-09:13:54
 */
export const dateFormater = function (formater = 'YYYY-MM-DD hh:mm:ss', t = new Date()){
  if(!isDate(t) && isString(t)) { t = t.replace(/[-]/g, "/") }
  const dt = new Date(t)
  const [Y, M, D, h, m, s] = [dt.getFullYear() + '', dt.getMonth() + 1, dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds()]
  return formater.replace(/YYYY|yyyy/g, Y)
    .replace(/YY/g, Y.slice(2, 4))
    .replace(/MM/g, addZero(M, 2))
    .replace(/DD/g, addZero(D, 2))
    .replace(/hh/g, addZero(h, 2))
    .replace(/mm/g, addZero(m, 2))
    .replace(/ss/g, addZero(s, 2))
}
/**得到当前时间之后N秒的时间
 * @param {*} after 多少秒之后的时间
 * @举例 afterNsecond(20)  // 20s之后的时间
 */
export const afterNsecond = function (after = 60) {
  const dt = new Date()
  return new Date(dt.getTime() + after * 1000)
}
/**
 * 将毫秒数转换成天、时、分、秒、毫秒
 * @param {Number} leftMs 剩余的时间，毫秒数
 * @param {String} formater 时间格式
 * @param {Number} strType 字符串的格式是否隐藏0。  0：隐藏0
 * @param {Number} timeType 时间类型是否补0。  1：补0     0：不需要补0
 * @returns 
 * @举例 ms2Dhs(62e3) ---> {formateStr: '01分钟02秒', d: 0, h: '00', m: '01', s: '02', ms: '500'}
 */
 export const ms2Dhs = function (formater = 'dd天hh小时mm分钟ss秒', leftMs, strType = 0) {
  let d = Math.floor(leftMs / 1000 / 60 / 60 / 24)
  let h = Math.floor(leftMs / 1000 / 60 / 60 % 24)
  let m = Math.floor(leftMs / 1000 / 60 % 60)
  let s = Math.floor(leftMs / 1000 % 60)
  let ms = Math.floor(leftMs % 1000)
  if(strType == 0) { // 字符串类型，如果0则不显示
    let regStr = ''
    if(d > 0) { regStr = 'dd' }
    else if(h > 0) { regStr = 'hh' }
    else if(m > 0) { regStr = 'mm' }
    else if(s > 0) { regStr = 'ss' }
    else if(ms > 0) { regStr = 'ms' }
    else { formater = '' }
    formater = formater.slice(formater.indexOf(regStr))
  }
  ;[h, m, s, ms] = [addZero(h, 2), addZero(m, 2), addZero(s, 2), addZero(ms, 3)]
  return formater.replace(/dd/g, d)
    .replace(/hh/g, h)
    .replace(/mm/g, m)
    .replace(/ss/g, s)
    .replace(/ms/g, ms)
}
/**
 * 根据年和月，得出该年月有多少天。（原理：计算出他的下个月， 用它的下个月生成毫秒数-当前月毫秒数再除以一天的毫秒数===天数）
 * @param {String} year 
 * @param {String} month 
 * @returns 
 * @举例子 getDays(2021, 11) ---> 30
 */
export const getDays = function(year, month) {
  let nextMoth = Number(month) + 1
  let nextYear = Number(year)
  if (nextMoth === 13) {
    nextMoth = 1
    nextYear++
  }
  let currentDate = year + '-' + month + '-1'
  let nextDate = nextYear + '-' + nextMoth + '-1'
  let yearObjOne = new Date(currentDate)
  let yearObjTwo = new Date(nextDate)
  let milliseconds = yearObjTwo.getTime() - yearObjOne.getTime()
  let daymilliseconds = 3600 * 24 * 1000
  return milliseconds / daymilliseconds
}
/**
 * 日期一和日期二之间的间隔的天数
 * @param {*} date1 日期一
 * @param {*} date2 日期二
 * @returns 
 * @举例 dayDif("2021-11-3", "2022-2-1") ----> 90
 */
export const dayDiff = (date1, date2) => Math.ceil(Math.abs(new Date(date1.replace(/[-]/g, "/")).getTime() - new Date(date2.replace(/[-]/g, "/")).getTime()) / 86400000) // 86400 === 24 * 60 * 60 秒
/**
 * 查出日期位于一年中的第多少天
 * @param {Date || String || Number} date 传入日期
 * @returns 传入的日期是一年中的第多少天
 * @举例 dayOfYear(new Date()) ----> 307
 */
export const dayOfYear = date => Math.floor((date - new Date(date.slice(0, 4), 0, 0)) / 1000 / 60 / 60 / 24)
/*
**********************************************************************************************
******************************************正则校验*********************************************
**********************************************************************************************
*/
/**正则校验返回true || false
 * @param {String} val 需要正则校验的值
 * @param {reg} reg 正则表达式
 * @returns {Boolean}
 */
export const regTest = (val, reg) => new RegExp(reg).test(val)
/*
**********************************************************************************************
******************************************温度转换*********************************************
**********************************************************************************************
*/
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
/*
**********************************************************************************************
******************************************网络安全*********************************************
**********************************************************************************************
*/
// https://juejin.cn/post/7033697067390205966
// https://juejin.cn/post/7013335205054251044
// npm install xss
// import filterXSS from "xss"
/*
**********************************************************************************************
******************************************函数处理（组合拆分）*********************************
**********************************************************************************************
*/
/**
 * 组合函数
 * @param  {...Function} funcs
 * @举例 传入多个函数参数
 * @举例 const newFunc = compose(trim, upperCase) // 先去除空格，在转大写（从左往右执行）。
 * @举例 newFunc(' asfd d ')
 * @returns 组合后的函数 
 */
export const compose = (...funcs) => x => funcs.reduce((prev, fn) => fn(prev), x) // 如果想反向可以reduceRight,反向遍历
/**
 * https://juejin.cn/post/6844903490771222542#heading-1
 * 柯里化函数
 * @param  {...Function} funcs 传入一个需要柯里化的函数
 * @举例1 var fn = curry(function(a, b, c) { console.log([a, b, c]) })
 *       var fn1 = fn('a') // 进行柯里化，传入的一个参数作为固定参数，返回新函数
 *       fn1('2', '3') // ['a', '2', '3']
 *       fn1('b', 'c') // ['a', 'b', 'c']
 * @举例2 var fn = curry(function(a, b, c) { console.log([a, b, c]);}, ['a']) // 也就是构建柯里化的时候也能顺便传入参数
 *        fn1('2', '3') // ['a', '2', '3']
 *        fn1('b', 'c') // ['a', 'b', 'c']
 * @returns 返回如果参数全了就返回计算后结果，否则产生柯里化之后的函数
 */
export const curry = function (fn, args = []) {
  return function() {
    var newArgs = [...args, ...arguments]
    return newArgs.length < fn.length ? curry.call(this, fn, newArgs) : fn.apply(this, newArgs)
  }
}
/*
**********************************************************************************************
******************************************数据结构*********************************************
**********************************************************************************************
*/
/**
 * Map
 * @属性方法 .size()   .set(key, value)   .get(key)   .has(key)   .delete(key)   .clear()
 * @遍历方法 .keys()   .values()   .entries()   .forEach((val, key, map) => {console.log(val, key, map)})
 * @举例 const map = new Map([[1, 'one'], [2, 'two']]) 转数组后可以使用数组方法
 * [...map.keys()] ===> [1, 2]
 * [...map.values()] ===> ['one', 'two']
 * [...map.entires()] ===> [[1, 'one'], [2, 'two']]
 * [...map] ===> [[1, 'one'], [2, 'two']]
 */
/**
 * 键值数组转对象
 * @param {Map} Map对象
 * @举例 map2Obj(new Map([[1, 'one'], [2, 'two']]))  // {1: 'one', 2: 'two'}
 */
export const map2Obj = function (map){
  let obj = Object.create(null)
  for(let [k, v] of map) { obj[k] = v }
  return obj
}
/**
 * JSON转键值数组
 * @param {Map} Map对象
 * @举例 obj2Map({1: 'one', 2: 'two'}) // [[1, 'one'], [2, 'two']]
 */
export const obj2Map = function (obj){
  let map = new Map()
  for(let k of Object.keys(obj)) { map.set(k, obj[k]) }
  return map
}
/**
 * 逆转对象。
 * @举例子 invert({ 'a': 1, 'b': 2, 'c': 1 }) -----> {1: 'c', 2: 'b'}
 * @param {*} obj 需要逆转的对象
 * @returns 
 */
 export const invert = obj => Object.keys(obj).reduce((prev, item) => ((prev[obj[item]] = item), prev), {})
 /**
  * 逆转对象。并且重复的键，将对应的值存在一起
  * @举例子 invertBy({ 'a': 1, 'b': 2, 'c': 1 }) -----> {1: ['a', 'c'], 2: ['b']}
  * @param {*} obj 需要逆转并且分类的对象
  * @returns 
  */
 export const invertBy = obj => Object.keys(obj).reduce((prev, item) => ((prev[obj[item]] || (prev[obj[item]] = [])).push(item), prev), {})
/**
 * 链表
 */

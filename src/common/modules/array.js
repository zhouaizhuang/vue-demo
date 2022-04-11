import { isArray, isObject, isGt0 } from "./check.js"
import { extend } from "./object.js"
import { guID, deepCopy } from "./business.js"
import { range } from "./number.js"
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
 */ 
export const cached = function (fn) {
  const cache = {}
  return function (str) {
    return !cache[str] && (cache[str] = fn(str)), cache[str]
  }
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
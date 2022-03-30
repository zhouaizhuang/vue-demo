import { isObject, isNull, isUndefined, isReference }  from "./check"
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
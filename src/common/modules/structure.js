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
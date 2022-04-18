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
/**
 * 函数防抖(一段时间内连续点击，最终只执行一次)
 * @param {*} fn 需要防抖的函数
 * @param {*} wait 防抖时间
 * @returns 
 * @举例 const fn = () => {console.log(1)}
 * @举例 const newFn = debounce(fn, 2e3) ----> 这样的话执行newFunc()就会有防抖效果
 */
 export const debounce = function (fn, wait=3e3) {
  if(!isFunction(fn)){throw new Error('传入的参数必须是个函数')}
  let timeout = null  // 使用闭包，让每次调用时点击定时器状态不丢失
  return function () { 
    clearTimeout(timeout) // 如果用户在定时器（上一次操作）执行前再次点击，那么上一次操作将被取消
    timeout = setTimeout(()=> fn(...arguments), wait)
  }
}
/**
 * 函数节流(一段时间内只执行一次)
 * @param {*} fn  需要做节流的函数
 * @param {*} wait 节流时间
 * @returns 
 * @举例 const fn = () => {console.log(1)}
 * @举例 const newFn = throttling(fn, 2e3) ----> 生成了节流函数
 */
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
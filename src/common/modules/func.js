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
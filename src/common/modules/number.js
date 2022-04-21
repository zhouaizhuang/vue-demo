import { addZero } from "./string" 
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
 * @举例 range(12.23, 14, 20)  ===> 14 // 下限为14 因此返回14
 */
export const range = function (num, min = null, max = null) {
  num = Number(num)
  if(min !== null) { num = Math.max(num, Number(min)) }
  if(max !== null) { num = Math.min(num, Number(max)) }
  return num
}
/**
 * 大数相加
 * @param {String | Number} num1 
 * @param {String | Number} num2 
 * @returns 相加后的大数
 * @举例 largeNumAdd('123000000000000000000000000010', '123000000000000000000000000009') ----> '246000000000000000000000000019'
 */
 export const largeNumAdd = function (num1, num2){
  let maxLen = Math.max(num1.length, num2.length)
  ;[num1, num2] = [addZero(String(num1), maxLen).split('').map(v => parseInt(v)), addZero(String(num2), maxLen).split('').map(v => parseInt(v))]
  const res = num1.reduceRight((prev, item, index) => {
    const figure = item + num2[index] + prev.carry
    return { sum: String(figure % 10) + prev.sum, carry: Math.floor(figure / 10) }
  }, {sum:'', carry: 0})
  return res.sum
}
/**
 * 0、1转换
 * @param {*} val 
 * @returns 
 * @举例子 toogle01(0) ---> 1
 * @举例子 toogle01(1) ---> 0
 */
 export const toogle01 = val => Number(val) ^ 1
/**正则校验返回true || false
 * @param {String} val 需要正则校验的值
 * @param {reg} reg 正则表达式
 * @returns {Boolean}
 * @举例 regTest(12, /[0-9]/) -----> true
 */
 export const regTest = (val, reg) => new RegExp(reg).test(val)
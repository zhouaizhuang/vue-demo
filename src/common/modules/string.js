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
 * @param {String} str 
 * @举例 capitalize('abcd')  ---->  'Abcd'
 * @returns 经过转换后的首字母为大写的字符串
 */
export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
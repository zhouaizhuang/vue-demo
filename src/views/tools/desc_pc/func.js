import CryptoJS from 'crypto-js'
// 加密解密封装
export const initDESC = function (){
  const utf8Key = CryptoJS.enc.Utf8.parse(this.secret) // 秘钥
  const options = { iv: CryptoJS.enc.Utf8.parse(this.iv), padding: CryptoJS.pad.Pkcs7, mode: CryptoJS.mode.CBC } // 生成配置项
  const encrypt = e => CryptoJS.TripleDES.encrypt(e, utf8Key, options).toString()
  const decrypt = e => CryptoJS.enc.Utf8.stringify(CryptoJS.TripleDES.decrypt(e, utf8Key, options))
  return { encrypt, decrypt }
}
// 数据转化
export const covertVal = function (type = 0) {
  this.oldVal = this.oldVal.replace(/\s/g,'')
  if(!this.oldVal) {  return this.newVal = '' }
  if(this.autoCapacity) { // 自动识别
    ;['"', ' ', '[', ']', '{', '}', ':', ','].some(v => this.oldVal.includes(v)) ? this.encode() : this.decode()
  } else if(type == 1) { // 解密
    this.decode()
  } else if(type == 2) { // 加密
    this.encode()
  }
}
// 解密
export const decode = function (val){
  const { decrypt } = this.initDESC()
  this.stateText = '正在解密'
  let res = decrypt(this.oldVal.replace(/\s/g,''))
  if(res) {
    this.stateText = '解密成功'
    try {
      res = JSON.stringify(JSON.parse(res), null, 2)
      this.newVal = syntaxHighlight(res)
    } catch(e) {
      this.newVal = res
    }
  } else {
    this.stateText = '解密失败'
  }
}
// 加密
export const encode = function () {
  const { encrypt } = this.initDESC()
  this.stateText = '正在加密'
  this.newVal = encrypt(this.oldVal)
  this.stateText = '加密成功'
}
// 进行语法高亮
export const syntaxHighlight = function (json) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\u[a-zA-Z0-9]{4}|\[^u]|[^\"])*"(s*:)?|b(true|false|null)b|-?d+(?:.d*)?(?:[eE][+-]?d+)?)/g, function (match) {
    var cls = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key';
      } else {
        cls = 'string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  })
}
// 失去焦点
export const blurInput = function () {
  this.isShowOpt = false
}
// 进入焦点
export const focusInput = function () {
  this.isShowOpt = true
}
// 选择当前条目
export const selectItem = function (item) {
  console.log(item)
  this.isShowOpt = false
  this.secret = item.secret
}
// 删除数据
export const delVal = async function (e) {
  this.secret = ''
}
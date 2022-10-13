import CryptoJS from 'crypto-js'
// 加密解密封装
export const initDESC = function (){
  const utf8Key = CryptoJS.enc.Utf8.parse(this.secret) // 秘钥
  const options = { iv: CryptoJS.enc.Utf8.parse('01234567'), padding: CryptoJS.pad.Pkcs7, mode: CryptoJS.mode.CBC } // 生成配置项
  const encrypt = e => CryptoJS.TripleDES.encrypt(e, utf8Key, options).toString()
  const decrypt = e => CryptoJS.enc.Utf8.stringify(CryptoJS.TripleDES.decrypt(e, utf8Key, options))
  return { encrypt, decrypt }
}
// 数据转化
export const covertVal = function (type = 0) {
  const { encrypt, decrypt } = this.initDESC()
  this.oldVal = this.oldVal.replace(/\s/g,'')
  if(!this.oldVal) { 
    this.newVal = ''
    return false
  }
  if(this.autoCapacity) { // 自动识别
    try {
      const res = decrypt(this.oldVal)
      if(res) {
        this.stateText = '正在解密'
        const str = JSON.stringify(JSON.parse(res), null, 2)
        this.newVal = syntaxHighlight(str)
        this.stateText = '解密成功'
      } else {
        this.stateText = '正在加密'
        this.newVal = encrypt(this.oldVal)
        this.stateText = '加密成功'
      }
    } catch(e) {
      this.stateText = '正在加密'
      this.newVal = encrypt(this.oldVal)
      this.stateText = '加密成功'
    }
  } else if(type == 1) { // 解密
    try {
      let res = decrypt(this.oldVal.replace(/\s/g,''))
      res = JSON.stringify(JSON.parse(res), null, 2)
      this.newVal = syntaxHighlight(res)
    } catch(e) {
      console.log(e)
      e = e || '解密失败'
      return this.$Message.error(e)
    }
  } else if(type == 2) { // 加密
    this.newVal = encrypt(this.oldVal)
  }
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
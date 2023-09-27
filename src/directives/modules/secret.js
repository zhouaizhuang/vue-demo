/**
 * 隐私保护指令
 * v-secret  手机号、身份证号、银行卡号增加星号
 * 举例： 
 *     <div v-secret>{{patientObj.idNumber}}</div>   // 会将这个身份证增加星号处理
 */
const processVal = (el, {value}, vnode) => {
  let text = el.innerText
  if(!text) { return }
  if(text.length > 11) {
    text = text.slice(0, 6) + '********' + text.slice(-4)
  } else {
    text = text.slice(0, 3) + '****' + text.slice(-4)
  }
  el.innerText = text
}
export const secret = {
  inserted: processVal,
  update: processVal
}

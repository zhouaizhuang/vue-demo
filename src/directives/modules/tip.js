import { guID, throttling } from "@/common.js"
/**
 * 鼠标移入给提示信息
 * @param {Function} 
 * 方式一直接使用：v-tip="value"  // 传入的值
 * 方式二传参使用：v-tip="[value, false]"  // [传入的值, 是否自动计算超出一行上移显示tip]
 * 直接使用： <div class="nowrap1" v-tip="value">{{value}}</div>
 */
let lastId = 'z' + guID()
const addTip = function (el, {value}, vnode){
  _.query(`#${lastId}`) && _.query(`#${lastId}`).remove()
  const {bottom, height, left, right, top, width } = _.getViewPos(el)
  const isReachBottom = _.get100vh() - bottom < 100 // 距离底部小于100px
  let divObj = document.createElement("div") // 创建，写内容
  divObj.id = lastId
  const divTop = `${top + height - window.getComputedStyle(el).paddingBottom.replace('px', '') + 5}`
  divObj.setAttribute("class", "fixed lba wrap pt10 pb10 gf rds5 pl10 pr10 op10 toolTip trans3 triangle fs12");
  divObj.setAttribute("style", `${isReachBottom ? `transform-origin:top center;transform:translateY(-${height}px) rotateX(180deg);` : ''}left:${left}px;top:${divTop}px;max-width:${Math.max(500, value.length)}px;min-width:100px;background:#464c5b;white-space:normal;z-index:1000000`);
  divObj.innerHTML = `
    <div class="abs h0 w0" style="border-top: 8px solid transparent;border-right: 8px solid transparent;border-left: 8px solid transparent;border-bottom: 8px solid #464c5b;left: 10%;top:-13px;"></div>
    <div style="${isReachBottom ? 'transform-origin:center center;transform: rotateX(180deg);' : ''}">${value}</div>
  `
  document.body.appendChild(divObj)
}
const fn = (e) => {
  const popDom = _.query(`#${lastId}`)
  if(_.query(`#el${lastId}`) || !popDom) {return false} // 如果鼠标在hover的dom范围内，或者尚未创建tip，则直接返回
  const { clientX, clientY } = e
  const {bottom, height, left, right, top, width} = _.getViewPos(popDom)
  if(clientX < left || clientX > right || clientY < top || clientY > bottom) {
    _.query(`#${lastId}`) && _.query(`#${lastId}`).remove()
  }
}
const throttlingFn = throttling(fn, 50)
// 绑定事件
const bindEvent = function (el, { value }, vnode){
  let [val, isAutoCalc] = ['', true]
  if(_.isArray(value)) {
    [val, isAutoCalc] = value
  } else {
    val = value
  }
  el.addEventListener("mouseover", () => {
    const {offsetWidth, scrollWidth} = el
    el.id = `el${lastId}`
    if(scrollWidth <= offsetWidth && isAutoCalc) { return false }
    addTip(el, {value: val}, vnode)
  })
  el.addEventListener("mouseout", () => {
    el.id = ''
  })
  document.removeEventListener("mousemove",throttlingFn)
  document.addEventListener("mousemove",throttlingFn)
}
export const tip = {
  bind: bindEvent,
  componentUpdated: bindEvent, // 当传进来的值更新的时候触发
  unbind: function (){
    document.removeEventListener("mousemove",throttlingFn) // 取消事件的注册
  }
}

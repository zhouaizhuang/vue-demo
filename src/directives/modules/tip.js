import { guID } from "@/common.js"
/**
 * 鼠标移入给提示信息
 * @param {Function} 
 * 直接使用： <Input v-tip="value">{{value}}</Input>
 */
let lastId = 'z' + guID()
const addTip = function (el, {value}, vnode){
  const {bottom, height, left, right, top, width } = _.getViewPos(el)
  let divObj = document.createElement("div") // 创建，写内容
  divObj.id = lastId
  divObj.innerHTML = `<div class="fixed zx100 lba wrap pt10 pb10 gf rds5 pl10 pr10 op10 toolTip trans3 triangle fs12" style="left:${left}px;top:${top + height}px;max-width:${width}px;min-width:100px;background:#464c5b;white-space:normal;">
    <div class="abs h0 w0" style="border-top: 8px solid transparent;border-right: 8px solid transparent;border-left: 8px solid transparent;border-bottom: 8px solid #464c5b;left: 10%;top:-13px;"></div>
    ${value}
  </div>`
  el.appendChild(divObj)
}
// 绑定事件
const bindEvent = function (el, { value }, vnode){
  el.addEventListener("mouseover", () => {
    _.query(`#${lastId}`) && el.removeChild(_.query(`#${lastId}`))
    const {offsetWidth, scrollWidth} = el
    if(scrollWidth <= offsetWidth) { return false }
    addTip(el, {value}, vnode)
  })
  el.addEventListener("mouseout", () => _.query(`#${lastId}`) && el.removeChild(_.query(`#${lastId}`)))
}
export const tip = {
  bind: bindEvent,
  componentUpdated: bindEvent, // 当传进来的值更新的时候触发
}

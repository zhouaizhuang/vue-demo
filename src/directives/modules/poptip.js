/* 
<div 
  class="f1 pt2 pb2 g3 poi rel hover1AADA7 trans3 tc pb10"
  v-poptip="{
    list: [ // 必填
      {label:'设置标签', click: () => openSetTags(item), width: 300 }, // 只有label和click字段是必须的。width：盒子宽度
      {label:'快速签约', click: () => speedSign(item), width: 300 },
      {label:'新增随访', click: () => addVisit(item), width: 300 }
    ],
    minWidth: 0, // 非必填
    maxWidth: 300, // 非必填
    background: '#1aada7', // 非必填
    color: '#fff', // 非必填
    arrowPos: '50%', // 箭头所在位置
  }"
>
  更多操作
</div> 
*/
import { guID, throttling } from "@/common.js"
let lastId = 'z' + guID()
const createPopTip = function (el, { value }, vnode){
  _.query(`#${lastId}`) && _.query(`#${lastId}`).remove()
  const {bottom, height, left, right, top, width } = _.getViewPos(el)
  const isReachBottom =  _.get100vh() - bottom < 40 * value.list.length // 40为list中每个条目所占高度，这样就能算出，是不是底部显示不下了
  const { list = [], minWidth, maxWidth, background = '#1aada7', color = '#fff', arrowPos = '50%' } = value
  let divObj = document.createElement("div") // 创建，写内容
  divObj.id = `${lastId}`
  divObj.setAttribute("class", "fixed l0 r0 tc rds2 bgf fs14 pt5 pb5 zx100");
  divObj.setAttribute("style", `${isReachBottom ? `transform-origin:top center;transform:translateY(-${height - window.getComputedStyle(el).paddingBottom.replace('px', '') + 10}px) rotateX(180deg);` : ''}min-width:${minWidth || 0}px;max-width:${maxWidth || 300}px;filter:drop-shadow(rgb(166,166,166) 0px 0px 2px);`);
  divObj.innerHTML = `<div class="abs h0 w0 tx-50" style="left:${arrowPos};border-top: 8px solid transparent;border-right: 8px solid transparent;border-left: 8px solid transparent;border-bottom: 8px solid #fff;top:-13px;"></div>`
  list.forEach((v, i) => {
    const divItem = document.createElement("div")
    divItem.setAttribute("class", "pl10 pr10 pt5 pb5 g0 bgf trans3 poi");
    divItem.setAttribute("style", `${isReachBottom ? 'transform-origin:center center;transform: rotateX(180deg);' : ''}`);
    divItem.id = `${v.id}${i}`
    divItem.innerText = `${v.label}`
    const click = (e) => {
      e.stopPropagation()
      e.preventDefault()
      v.click() // 其实此处还可以继续接收参数
    }
    const mouseover = () => {
      divItem.style.background = background
      divItem.style.color = color
      // el.style.color = background
    }
    const mouseout = () => {
      divItem.style.background= "#fff"
      divItem.style.color= "#333"
      // el.style.color = "#333"
    }
    divItem.removeEventListener('click', click)
    divItem.removeEventListener('mouseover', mouseover)
    divItem.removeEventListener('mouseout', mouseout)
    divItem.addEventListener("click", click)
    divItem.addEventListener("mouseover", mouseover)
    divItem.addEventListener("mouseout", mouseout)
    divObj.appendChild(divItem)
  })
  document.body.appendChild(divObj)
}
const fn = (e) => {
  // console.log(1)
  const popDom = _.query(`#${lastId}`)
  if(!popDom) { return }
  const { clientX, clientY } = e
  const {bottom, height, left, right, top, width} = _.getViewPos(popDom)
  if(clientX < left - 5 || clientX > right + 5 || clientY < top - 50 || clientY > bottom + 50) {
    _.query(`#${lastId}`) && _.query(`#${lastId}`).remove()
  }
}
const throttlingFn = throttling(fn, 50)
// document.addEventListener("mousemove",throttlingFn)
export const poptip = {
  bind: function (el, { value }, vnode){
    if(_.isArray(value)) {value = {list: value}} // 如果不需要任何其他的特殊设置，那么传入一个数组就默认是list
    value.list = value.list.map(v => ({...v, id: 'z' + guID()}))
    el.style.position = "relative"
    el.addEventListener("click", (e) => {
      e.stopPropagation()
      e.preventDefault()
    })
    lastId = 'z' + guID()
    el.addEventListener("mouseover", async () =>{
      createPopTip(el, { value }, vnode)
      const {bottom, height, left, right, top, width } = _.getViewPos(el)
      const popDom = _.query(`#${lastId}`)
      if(!popDom) {return false}
      popDom.style.left = `${left}px`
      popDom.style.top = `${top + height - window.getComputedStyle(el).paddingBottom.replace('px', '') + 5}px`
      popDom.style.width = `${width}px`
      // el.style.color = value.background || '#1aada7'
    })
    document.removeEventListener("mousemove",throttlingFn)
    document.addEventListener("mousemove",throttlingFn)
    el.addEventListener("mouseout", (e) => {
      // _.query(`#out${lastId}`) && _.query(`#out${lastId}`).remove()
      // el.style.color = '#333'
    })
  },
  unbind: function (){
    document.removeEventListener("mousemove",throttlingFn) // 取消事件的注册
  }
  // componentUpdated: bindEvent, // 当传进来的值更新的时候触发
}

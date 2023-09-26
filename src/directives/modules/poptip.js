import { guID } from "@/common.js"
const createPopTip = function (el, { value }, vnode, lastId){
  let divObj = document.createElement("div") // 创建，写内容
  divObj.innerHTML = `
    <div id="${lastId}" class="abs l0 r0 tc rds2 bgf fs14 pt5 pb5 zx10 dn" style="max-width:300px;top:27px;filter:drop-shadow(rgb(166,166,166) 0px 0px 2px);">
      <div class="abs h0 w0 l50 tx-50" style="border-top: 8px solid transparent;border-right: 8px solid transparent;border-left: 8px solid transparent;border-bottom: 8px solid #fff;top:-13px;"></div>
      ${value.map((v, i) => `<div class="pl10 pr10 pt5 pb5 g0 bgf trans3" id="${v.id}${i}">${v.label}</div>`).join('')}
    </div>
  `
  el.appendChild(divObj)
  window.requestAnimationFrame(() => {
    value.forEach((v, i) => {
      const listItem = _.query(`#${v.id}${i}`)
      if(!listItem) { return }
      listItem.addEventListener("click", (e) => {
        console.log(111)
        e.stopPropagation()
        e.preventDefault()
        v.click() // 其实此处还可以继续接收参数
      })
      listItem.addEventListener("mouseover", () => {
        // _.query(`#${lastId}`).style.display = "block"
        listItem.style.background="#1aada7"
        listItem.style.color="#fff"
      })
      listItem.addEventListener("mouseout", () => {
        // _.query(`#${lastId}`).style.display = "none"
        listItem.style.background="#fff"
        listItem.style.color="#000"
      })
    })
  })
}
export const poptip = {
  bind: function (el, { value }, vnode){
    value = value.map(v => ({...v, id: 'z' + guID()}))
    el.style.position = "relative"
    const lastId = 'z' + guID()
    createPopTip(el, { value }, vnode, lastId)
    el.addEventListener("click", (e) => {
      e.stopPropagation()
      e.preventDefault()
    })
    el.addEventListener("mouseover", () =>{
      _.query(`#${lastId}`).style.display = "block"
    })
    el.addEventListener("mouseout", () =>{
      _.query(`#${lastId}`).style.display = "none"
    })
  },
  // componentUpdated: bindEvent, // 当传进来的值更新的时候触发
}

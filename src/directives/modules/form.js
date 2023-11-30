import { Message } from 'view-design'
import { query, difference, guID } from "@/common.js"
// 处理提示信息--------> 原先的提示函数：Message.info(`小数自动保留${value}位`)
const processTip = (function (){
  let lastId = 'zz'
  return function (el, msg){
    if(query(`#${lastId}`)) { try{el.removeChild(query(`#${lastId}`))}catch(e){console.log('鼠标移开')} }
    // el.parentNode.parentNode.classList.remove('ivu-form-item-error') // 移除组件的rule规则校验错误信息
    // if(query(`.ivu-form-item-error-tip`)) { el.parentNode.removeChild(query(`.ivu-form-item-error-tip`)) } // 删除爷爷的错误校验样式
    if(msg) {
      const id = 'z' + guID()
      let divObj = document.createElement("div") // 创建，写内容
      divObj.id = id
      divObj.innerHTML = `<div class="abs nowrap bgf zx1 r0 l0 tl fs14" style="bottom:-20px;color:#ed4014;">${msg}</div>`
      el.appendChild(divObj)
      lastId = id
      setTimeout(() => {if(query(`#${id}`)) { el.removeChild(query(`#${id}`)) }}, 2000)
    }
  }
})()
/**
 * 处理中文输入的情况
 * @param {*} ref 处理后的dom句柄
 * @param {*} el 当前绑定的dom
 * @param {*} vnode dom
 * @param {*} fn 处理函数
 */
const resolveChar = function (el, vnode){
  el.handleCompositionstart = () => vnode.inputLocking = true
  el.handlecompositionend = () => {vnode.inputLocking = false;el.inputRef.dispatchEvent(new Event('input'))}
  el.inputRef.addEventListener('compositionstart', el.handleCompositionstart)
  el.inputRef.addEventListener('compositionend', el.handlecompositionend)
  el.inputRef.addEventListener('input', el.handleInput, true)
}
/**
 * 移除事件
 * @param {*} el 
 */
const removeEvents = function (el){
  el.inputRef.removeEventListener('compositionstart', el.handleCompositionstart)
  el.inputRef.removeEventListener('compositionend', el.handlecompositionend)
  el.inputRef.removeEventListener('input', el.handleInput)
}
/**
 * 限制整数
 * @param {Function} 
 * 直接使用： <Input v-int></Input>
 * 传入true，允许输入负值： <Input v-int="true"></Input>
 */
export const int = {
  inserted(el, {value}, vnode) {
    const inputRef = el.querySelector('input') || el
    el.inputRef = inputRef
    el.handleInput = e => window.requestAnimationFrame(() => {
      e.preventDefault()
      if (vnode.inputLocking) { return }
      let originVal = inputRef.value
      let tmp = inputRef.value.replace(eval(`/[^0-9${value ? '-' : ''}]/g`), '')
      const symbol = tmp.at(0) == '-' ? '-' : ''
      if(symbol === '-') { tmp = tmp.slice(1) }
      tmp = tmp.replace(/-/g, '')
      tmp = tmp == '' ? '' : (tmp.replace(/^0+/g, '') || '0')
      tmp = symbol + tmp
      if(tmp != originVal) { processTip(el, `不符合规范的字符【${difference(originVal.split(''), tmp.split('')).join(' ')}】，已经被过滤`) }
      inputRef.value = tmp
      if(originVal != tmp) { inputRef.dispatchEvent(new Event('input')) }
    })
    resolveChar(el, vnode)
  },
  unbind(el) {
    removeEvents(el)
  },
}
/**
 * 限制只能输入小数
 * @param {Function} 
 * 直接使用： <Input v-float></Input>
 * 传入true使用，允许输入负值： <Input v-float="true"></Input>
 */
export const float = {
  inserted(el, {value}, vnode) {
    // console.log(value)
    const inputRef = el.querySelector('input') || el
    el.inputRef = inputRef
    el.handleInput = e => window.requestAnimationFrame(() => {
      e.preventDefault()
      if (vnode.inputLocking) { return }
      let originVal = inputRef.value
      let tmp = inputRef.value
      // console.log(tmp)
      tmp = tmp.replace(eval(`/[^0-9.${value ? '-' : ''}]/g`), '') // 非数字、点、负号，替换为空
      if(tmp != originVal) { processTip(el, `不符合规范的字符【${difference(originVal.split(''), tmp.split('')).join(' ')}】，已经被过滤`) }
      const symbol = tmp.at(0) == '-' ? '-' : ''
      if(symbol === '-') { tmp = tmp.slice(1) }
      tmp = tmp.replace(/-/g, '')
      tmp = tmp.split('').reduce((prev, item) => {
        if(item === '.') {
          prev.tmp +=  prev.dotNum === 0 ? item : ''
          prev.dotNum++
        } else {
          prev.tmp += item
        }
        return prev
      }, {tmp:'', dotNum: 0})['tmp']
      if(tmp.includes('.') && /-?([0-9]*).([0-9]*)/.test(tmp)) {
        const [, left, right] = tmp.match(/-?([0-9]*).([0-9]*)/)
        tmp = symbol + (left.replace(/^[0]+/g, '') || '0') + '.' + right
      } else {
        tmp = symbol + (tmp == '' ? '' : (tmp.replace(/^[0]+/, '') || '0'))
      }
      // if(tmp && !['-', '.', '0', ''].includes(tmp.at(-1))) {
      //   if(round(tmp, value || 0) != tmp) { Message.info(`四舍五入，保留${value}位小数，多余的数据被过滤`) }
      //   tmp = round(tmp, value || 0)
      // }
      inputRef.value = tmp
      if(originVal != tmp) { 
       inputRef.dispatchEvent(new Event('input'))
      }
    })
    if(!inputRef) { inputRef = el }
    resolveChar(el, vnode)
  },
  unbind(el) {
    removeEvents(el)
  },
}
/**
 * 编码格式大小写字母、数字、中英文符号
 * @param {Function} 
 * 直接使用： <Input v-code></Input>
 */
export const code = {
  inserted(el, {value}, vnode) {
    const inputRef = el.querySelector('input') || el
    el.inputRef = inputRef
    el.handleInput = e => window.requestAnimationFrame(() => {
      e.preventDefault()
      if (vnode.inputLocking) { return }
      let originVal = inputRef.value
      let tmp = inputRef.value
      tmp = tmp.replace(/[^0-9A-Za-z!@#$%^&*()_+-{}?><|/.,`\uff08\uff09\u3008\u3009\u300a\u300b\u300c\u300d\u300e\u300f\ufe43\ufe44\u3014\u3015\u2026\u2014\uff5e\ufe4f\uffe5\u3001\u3010\u3011\uff0c\u3002\uff1f\uff01\uff1a\uff1b\u201c\u201d\u2018\u2019]/g, '')
      inputRef.value = tmp
      if(originVal != tmp) { inputRef.dispatchEvent(new Event('input')) }
    })
    resolveChar(el, vnode)
  },
  unbind(el) {
    removeEvents(el)
  },
}
/**
 * 字段名格式，只能由数字、字母、下划线构成，并且不能以数字开头
 * @param {Function} 
 * 直接使用： <Input v-field></Input>
 */
export const field = {
  inserted(el, {value}, vnode) {
    const inputRef = el.querySelector('input') || el
    el.inputRef = inputRef
    el.handleInput = e => window.requestAnimationFrame(() => {
      e.preventDefault()
      if (vnode.inputLocking) { return }
      let originVal = inputRef.value
      let tmp = inputRef.value
      tmp = tmp.replace(/[^0-9A-Za-z_]/g, '')
      let testTmp0 = tmp[0]
      while(/[0-9]/.test(tmp[0])){ tmp = tmp.slice(1) }
      inputRef.value = tmp
      if(originVal != tmp) { 
        if(/[0-9]/.test(testTmp0)) {
          processTip(el, `不能以数字开头，不合规范的字符【${difference(originVal.split(''), tmp.split('')).join(' ')}】，已经被过滤`)
        } else {
          processTip(el, `只能由数字、字母、下划线构成，不合规范的字符【${difference(originVal.split(''), tmp.split('')).join(' ')}】，已经被过滤`)
        }
        inputRef.dispatchEvent(new Event('input'))
      }
    })
    resolveChar(el, vnode)
  },
  unbind(el) {
    removeEvents(el)
  },
}
/**
 * 姓名，不可以输入空格和数字
 * @param {Function} 
 * 直接使用： <Input v-name></Input>
 */
export const name = {
  inserted(el, {value}, vnode) {
    const inputRef = el.querySelector('input') || el
    el.inputRef = inputRef
    el.handleInput = e => window.requestAnimationFrame(() => {
      e.preventDefault()
      if (vnode.inputLocking) { return }
      let originVal = inputRef.value
      let tmp = inputRef.value
      tmp = tmp.replace(/[0-9!@#$%^&*()_+-?><|/,`！，、？~\s]+/g, '')
      inputRef.value = tmp
      if(originVal != tmp) { processTip(el, `不符合规范的字符【${difference(originVal.split(''), tmp.split('')).join(' ')}】，已经被过滤`) }
      if(originVal != tmp) { inputRef.dispatchEvent(new Event('input')) }
    })
    resolveChar(el, vnode)
  },
  unbind(el) {
    removeEvents(el)
  },
}
/**
 * 去除空格
 * @param {Function} 
 * 直接使用，去除首尾空格： <Input v-trim></Input>
 * 传入0，去除首尾空格： <Input v-trim="0"></Input>
 * 传入1，去除全部空格： <Input v-trim="1"></Input>
 * 传入2，去除头部空格： <Input v-trim="2"></Input>
 * 传入3，去除尾部空格： <Input v-trim="3"></Input>
 */
export const trim = {
  inserted(el, {value}, vnode) {
    const inputRef = el.querySelector('input') || el
    el.inputRef = inputRef
    el.handleInput = e => window.requestAnimationFrame(() => {
      e.preventDefault()
      if (vnode.inputLocking) { return }
      let originVal = inputRef.value
      let tmp = inputRef.value
      const reg = [new RegExp(/(^\s*)|(\s*$)/g), new RegExp(/\s+/g), new RegExp(/(^\s*)/g), new RegExp(/(\s*$)/g)][value || 0] || ''
      tmp = tmp.replace(reg, '')
      inputRef.value = tmp
      if(originVal != tmp) { processTip(el, `空格已被过滤`) }
      if(originVal != tmp) { inputRef.dispatchEvent(new Event('input')) }
    })
    resolveChar(el, vnode)
  },
  unbind(el) {
    removeEvents(el)
  },
}
/**
 * 限制最多输入几个字符
 * @param {Function} 
 * 直接使用： <Input v-limit="[0,5]"></Input>
 */
export const limit = {
  inserted(el, {value}, vnode) {
    const inputRef = el.querySelector('input') || el
    el.inputRef = inputRef
    el.handleInput = e => window.requestAnimationFrame(() => {
      e.preventDefault()
      if (vnode.inputLocking) { return }
      let originVal = inputRef.value
      let tmp = inputRef.value
      const [min, max] = value
      tmp = tmp.slice(0, Number(max))
      inputRef.value = tmp
      if(originVal != tmp) { processTip(el, `最多输入${max}位字符`) }
      if(originVal.length < Number(min)) { processTip(el, `最少输入${min}位字符`) }
      if(originVal != tmp) { inputRef.dispatchEvent(new Event('input')) }
    })
    resolveChar(el, vnode)
  },
  unbind(el) {
    removeEvents(el)
  },
}
/**
 * 限制小数点后保留几位
 * @param {Function} 
 * 直接使用： <Input v-decimalLimit="2"></Input>
 */
export const decimalLimit = {
  inserted(el, {value}, vnode) {
    const inputRef = el.querySelector('input') || el
    el.inputRef = inputRef
    el.handleInput = e => window.requestAnimationFrame(() => {
      e.preventDefault()
      if (vnode.inputLocking) { return }
      let originVal = inputRef.value
      let tmp = inputRef.value
      if(tmp.includes('.') && /-?([0-9]*).([0-9]*)/.test(tmp)) {
        const [, left, right] = tmp.match(/-?([0-9]*).([0-9]*)/)
        if(right.length > value) {
          tmp = left ? (tmp.at(0) == '-' ? '-' : '') + left + '.' + right.slice(0, Number(value)) : ''
        }
        inputRef.value = tmp
      }
      if(originVal != tmp) { processTip(el, `小数自动保留${value}位`) }
      if(originVal != tmp) { inputRef.dispatchEvent(new Event('input')) }
    })
    resolveChar(el, vnode)
  },
  unbind(el) {
    removeEvents(el)
  },
}
/**
 * 限制最小值
 * @param {Function} 
 * 直接使用： <Input v-min="0"></Input>
 */
export const min = {
  inserted(el, {value}, vnode) {
    const inputRef = el.querySelector('input') || el
    el.inputRef = inputRef
    el.handleInput = e => window.requestAnimationFrame(() => {
      e.preventDefault()
      if (vnode.inputLocking) { return }
      let originVal = inputRef.value
      let tmp = inputRef.value
      if(tmp < value) { processTip(el, `最小值为${value}`)}
      // tmp = tmp === '' ? '' : Math.max(Number(tmp) || 0, Number(value))
      // tmp = String(tmp)
      inputRef.value = tmp
      if(originVal != tmp) { inputRef.dispatchEvent(new Event('input')) }
    })
    resolveChar(el, vnode)
  },
  unbind(el) {
    removeEvents(el)
  },
}
/**
 * 限制最大值
 * @param {Function} 
 * 直接使用： <Input v-max="100"></Input>
 */
export const max = {
  inserted(el, {value}, vnode) {
    const inputRef = el.querySelector('input') || el
    el.inputRef = inputRef
    el.handleInput = e => window.requestAnimationFrame(() => {
      e.preventDefault()
      if (vnode.inputLocking) { return }
      let originVal = inputRef.value
      let tmp = inputRef.value
      if(tmp > value) { processTip(el, `最大值为${value}`) }
      if(Number(tmp) > value) { tmp = value }
      inputRef.value = tmp
      if(originVal != tmp) { inputRef.dispatchEvent(new Event('input')) }
    })
    resolveChar(el, vnode)
  },
  unbind(el) {
    removeEvents(el)
  },
}
/**
 * input遮罩层，禁止选择
 * @param {Function} 
 * 直接使用： <Input v-model="accountObj._pwd" @on-change="inputPwd" type="text" v-mask placeholder="请输入登录密码"></Input>
 */
export const mask = {
  inserted(el, {value}, vnode) {
    const inputRef = el.querySelector('input') || el
    const fatherDom = inputRef.parentElement
    fatherDom.style.position = 'relative'
    const op10Mask = document.createElement("div")
    op10Mask.style.backgroundColor = 'transparent'
    op10Mask.style.position = 'absolute'
    op10Mask.style.top = '0'
    op10Mask.style.right = '0'
    op10Mask.style.bottom = '0'
    op10Mask.style.left = '0'
    el.handler = () => {
      inputRef.focus && inputRef.focus()
    }
    op10Mask.addEventListener('click', el.handler)
    fatherDom.appendChild(op10Mask)
  },
  unbind(el) {
    el.inputRef.removeEventListener('click', el.handler)
  },
}
/**
 * input自动聚焦指令
 * @param {Function} 
 * 直接使用： <Input v-focus></Input>
 */
export const focus = {
  inserted: function (el) {
    // 聚焦元素
    const inputRef = el.querySelector('input')
    inputRef ? inputRef.focus() : el.focus()
  }
}
/**
 * 处理中文输入的情况
 * @param {*} ref 处理后的dom句柄
 * @param {*} el 当前绑定的dom
 * @param {*} vnode dom
 * @param {*} fn 处理函数
 */
 const resolveChar = function (ref, vnode, fn){
  ref.addEventListener('compositionstart', () => {
    vnode.inputLocking = true
  })
  ref.addEventListener('compositionend', () => {
    vnode.inputLocking = false
    ref.dispatchEvent(new Event('input'))
  })
  ref.addEventListener('input', fn, true)
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
    const fn = e => window.requestAnimationFrame(() => {
      e.preventDefault()
      if (vnode.inputLocking) { return }
      let originVal = inputRef.value
      let tmp = inputRef.value.replace(eval(`/[^0-9${value ? '-' : ''}]/g`), '')
      const symbol = tmp.at(0) == '-' ? '-' : ''
      if(symbol === '-') { tmp = tmp.slice(1) }
      tmp = tmp.replace(/-/g, '')
      tmp = tmp == '' ? '' : (tmp.replace(/^0+/g, '') || '0')
      tmp = symbol + tmp
      inputRef.value = tmp
      if(originVal != tmp) { inputRef.dispatchEvent(new Event('input')) }
    })
    resolveChar(inputRef, vnode, fn)
  },
}
/**
 * 限制小数
 * @param {Function} 
 * 直接使用： <Input v-float></Input>
 * 传入true使用，允许输入负值： <Input v-float="true"></Input>
 */
export const float = {
  inserted(el, {value}, vnode) {
    const inputRef = el.querySelector('input') || el
    const fn = e => window.requestAnimationFrame(() => {
      e.preventDefault()
      if (vnode.inputLocking) { return }
      let originVal = inputRef.value
      let tmp = inputRef.value
      tmp = tmp.replace(eval(`/[^0-9.${value ? '-' : ''}]/g`), '')
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
      inputRef.value = tmp
      if(originVal != tmp) { inputRef.dispatchEvent(new Event('input')) }
    })
    if(!inputRef) { inputRef = el }
    resolveChar(inputRef, vnode, fn)
  }
}
/**
 * 编码格式大小写字母、数字、中英文符号
 * @param {Function} 
 * 直接使用： <Input v-code></Input>
 */
export const code = {
  inserted(el, {value}, vnode) {
    const inputRef = el.querySelector('input') || el
    const fn = e => window.requestAnimationFrame(() => {
      e.preventDefault()
      if (vnode.inputLocking) { return }
      let originVal = inputRef.value
      let tmp = inputRef.value
      tmp = tmp.replace(/[^0-9A-Za-z!@#$%^&*()_+{}?><|/.,`\uff08\uff09\u3008\u3009\u300a\u300b\u300c\u300d\u300e\u300f\ufe43\ufe44\u3014\u3015\u2026\u2014\uff5e\ufe4f\uffe5\u3001\u3010\u3011\uff0c\u3002\uff1f\uff01\uff1a\uff1b\u201c\u201d\u2018\u2019]/g, '')
      inputRef.value = tmp
      if(originVal != tmp) { inputRef.dispatchEvent(new Event('input')) }
    })
    resolveChar(inputRef, vnode, fn)
  }
}
/**
 * 限制最多输入几个字符
 * @param {Function} 
 * 直接使用： <Input v-limit="5"></Input>
 */
 export const limit = {
  inserted(el, {value}, vnode) {
    const inputRef = el.querySelector('input') || el
    const fn = e => window.requestAnimationFrame(() => {
      e.preventDefault()
      if (vnode.inputLocking) { return }
      let originVal = inputRef.value
      let tmp = inputRef.value
      tmp = tmp.slice(0, Number(value))
      inputRef.value = tmp
      if(originVal != tmp) { inputRef.dispatchEvent(new Event('input')) }
    })
    resolveChar(inputRef, vnode, fn)
  }
}
/**
 * 限制小数点后保留几位
 * @param {Function} 
 * 直接使用： <Input v-decimalLimit="2"></Input>
 */
 export const decimalLimit = {
  inserted(el, {value}, vnode) {
    const inputRef = el.querySelector('input') || el
    const fn = e => window.requestAnimationFrame(() => {
      e.preventDefault()
      if (vnode.inputLocking) { return }
      let originVal = inputRef.value
      let tmp = inputRef.value
      if(tmp.includes('.') && /-?([0-9]*).([0-9]*)/.test(tmp)) {
        const [, left, right] = tmp.match(/-?([0-9]*).([0-9]*)/)
        if(right.length > 2) {
          tmp = left ? (tmp.at(0) == '-' ? '-' : '') + left + '.' + right.slice(0, Number(value)) : ''
        }
        inputRef.value = tmp
      }
      if(originVal != tmp) { inputRef.dispatchEvent(new Event('input')) }
    })
    resolveChar(inputRef, vnode, fn)
  }
}
/**
 * 限制最小值
 * @param {Function} 
 * 直接使用： <Input v-min="0"></Input>
 */
export const min = {
  inserted(el, {value}, vnode) {
    const inputRef = el.querySelector('input') || el
    const fn = e => window.requestAnimationFrame(() => {
      e.preventDefault()
      if (vnode.inputLocking) { return }
      let originVal = inputRef.value
      let tmp = inputRef.value
      tmp = tmp === '' ? '' : Math.max(Number(tmp) || 0, Number(value))
      tmp = String(tmp)
      inputRef.value = tmp
      if(originVal != tmp) { inputRef.dispatchEvent(new Event('input')) }
    })
    resolveChar(inputRef, vnode, fn)
  }
}
/**
 * 限制最大值
 * @param {Function} 
 * 直接使用： <Input v-max="100"></Input>
 */
 export const max = {
  inserted(el, {value}, vnode) {
    const inputRef = el.querySelector('input') || el
    const fn = e => window.requestAnimationFrame(() => {
      e.preventDefault()
      if (vnode.inputLocking) { return }
      let originVal = inputRef.value
      let tmp = inputRef.value
      tmp = tmp === '' ? '' : Math.min(Number(tmp) || 0, Number(value))
      tmp = String(tmp)
      inputRef.value = tmp
      if(originVal != tmp) { inputRef.dispatchEvent(new Event('input')) }
    })
    resolveChar(inputRef, vnode, fn)
  }
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
    op10Mask.addEventListener('click', () => {
      inputRef.focus && inputRef.focus()
    })
    fatherDom.appendChild(op10Mask)
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
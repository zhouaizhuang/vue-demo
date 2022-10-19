/**
 * 限制整数
 * @param {Function} 
 * 直接使用： <Input v-gt0></Input>
 */
export const int = {
  inserted(el){
    const inputRef = el.querySelector('input')
    const fn = () => window.requestAnimationFrame(() => {
      let tmp = inputRef.value.replace(/[^0-9-]/g, '')
      const symbol = tmp.at(0) == '-' ? '-' : ''
      if(symbol === '-') { tmp = tmp.slice(1) }
      tmp = tmp.replace(/-/g, '')
      tmp = tmp == '' ? '' : (tmp.replace(/^0+/g, '') || '0')
      inputRef.value = symbol + tmp
    })
    if(inputRef) {
      inputRef.addEventListener('input', fn)
    } else {
      el.addEventListener('input', fn)
    }
  },
}
/**
 * 限制小数
 * @param {Function} 
 * 直接使用： <Input v-gtFloat0></Input>
 */
export const float = {
  inserted(el){
    const inputRef = el.querySelector('input')
    const fn = () => window.requestAnimationFrame(() => {
      let tmp = inputRef.value
      tmp = tmp.replace(/[^0-9.-]/g, '')
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
        inputRef.value = symbol + (left.replace(/^[0]+/g, '') || '0') + '.' + right
      } else {
        inputRef.value = symbol + (tmp == '' ? '' : (tmp.replace(/^[0]+/, '') || '0'))
      }
    })
    if(inputRef) {
      inputRef.addEventListener('input', fn)
    } else {
      el.addEventListener('input', fn)
    }
  }
}
/**
 * 保留小数点后几位
 * @param {Function} 
 * 直接使用： <Input v-limit="5"></Input>
 */
export const code = {
  inserted(el, { value }){
    const inputRef = el.querySelector('input')
    const fn = () => window.requestAnimationFrame(() => {
      let tmp = inputRef.value
      tmp = tmp.replace(/[^0-9A-Za-z!@#$%^&*()_+{}?><|/.,`\uff08\uff09\u3008\u3009\u300a\u300b\u300c\u300d\u300e\u300f\ufe43\ufe44\u3014\u3015\u2026\u2014\uff5e\ufe4f\uffe5\u3001\u3010\u3011\uff0c\u3002\uff1f\uff01\uff1a\uff1b\u201c\u201d\u2018\u2019]/g, '')
      inputRef.value = tmp
    })
    if(inputRef) {
      inputRef.addEventListener('input', fn)
    } else {
      el.addEventListener('input', fn)
    }
  }
}
/**
 * 限制最多输入几个字符
 * @param {Function} 
 * 直接使用： <Input v-limit="5"></Input>
 */
 export const limit = {
  inserted(el, { value }){
    const inputRef = el.querySelector('input')
    const fn = () => window.requestAnimationFrame(() => {
      let tmp = inputRef.value
      inputRef.value = tmp.slice(0, Number(value))
    })
    if(inputRef) {
      inputRef.addEventListener('input', fn)
    } else {
      el.addEventListener('input', fn)
    }
  }
}
/**
 * 限制小数点后保留几位
 * @param {Function} 
 * 直接使用： <Input v-decimalLimit="2"></Input>
 */
 export const decimalLimit = {
  inserted(el, { value }){
    const inputRef = el.querySelector('input')
    const fn = () => window.requestAnimationFrame(() => {
      let tmp = inputRef.value
      if(tmp.includes('.') && /-?([0-9]*).([0-9]*)/.test(tmp)) {
        const [, left, right] = tmp.match(/-?([0-9]*).([0-9]*)/)
        if(right.length > 2) {
          inputRef.value = left ? (tmp.at(0) == '-' ? '-' : '') + left + '.' + right.slice(0, Number(value)) : ''
        }
      }
    })
    if(inputRef) {
      inputRef.addEventListener('input', fn)
    } else {
      el.addEventListener('input', fn)
    }
  }
}
/**
 * 限制最小值
 * @param {Function} 
 * 直接使用： <Input v-min="0"></Input>
 */
export const min = {
  inserted(el, { value }) {
    const inputRef = el.querySelector('input')
    const fn = () => window.requestAnimationFrame(() => {
      let tmp = inputRef.value
      inputRef.value = tmp === '' ? '' : Math.max(Number(tmp) || 0, Number(value))
    })
    if(inputRef) {
      inputRef.addEventListener('input', fn)
    } else {
      el.addEventListener('input', fn)
    }
  }
}
/**
 * 限制最大值
 * @param {Function} 
 * 直接使用： <Input v-max="100"></Input>
 */
 export const max = {
  inserted(el, { value }) {
    const inputRef = el.querySelector('input')
    const fn = () => window.requestAnimationFrame(() => {
      let tmp = inputRef.value
      inputRef.value = tmp === '' ? '' : Math.min(Number(tmp) || 0, Number(value))
    })
    if(inputRef) {
      inputRef.addEventListener('input', fn)
    } else {
      el.addEventListener('input', fn)
    }
  }
}



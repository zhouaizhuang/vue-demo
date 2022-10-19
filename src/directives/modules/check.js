/**
 * 大于0的整数
 * @param {Function} 
 * 直接使用： <Input v-gt0></Input>
 */
export const int = {
  inserted(el){
    const inputRef = el.querySelector('input')
    const fn = () => window.requestAnimationFrame(() => {
      let tmp = inputRef.value.replace(/[^0-9-]/g, '').replace(/^0+/g, '')
      if(tmp.at(0) == '-') {
        tmp = '-' + tmp.slice(1).replace(/-/g, '').replace(/^0+/g, '')
      }
      inputRef.value = tmp
    })
    if(inputRef) {
      inputRef.addEventListener('input', fn)
    } else {
      el.addEventListener('input', fn)
    }
  },
}
/**
 * 大于0的小数
 * @param {Function} 
 * 直接使用： <Input v-gtFloat0></Input>
 */
 export const float = {
  inserted(el){
    const inputRef = el.querySelector('input')
    const fn = () => window.requestAnimationFrame(() => {
      let tmp = inputRef.value
      tmp = tmp.replace(/[^0-9.-]/g, '')
      if(tmp === '' || tmp === undefined) {
        tmp = ''
      } else if(tmp.length > 0) {
        tmp = tmp.at(0) + tmp.slice(1).replace(/^0+/g, '')
      }
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
        inputRef.value = left ? (tmp.at(0) == '-' ? '-' : '') + Number(left) + '.' + right : ''
      } else {
        inputRef.value = tmp
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
 * 保留小数点后几位
 * @param {Function} 
 * 直接使用： <Input v-decimalLimit="2"></Input>
 */
 export const decimalLimit = {
  inserted(el, { value }){
    const inputRef = el.querySelector('input')
    const fn = () => window.requestAnimationFrame(() => {
      let tmp = inputRef.value
      if(tmp.includes('.') && /([0-9]*).([0-9]*)/.test(tmp)) {
        const [, left, right] = tmp.match(/([0-9]*).([0-9]*)/)
        if(right.length > 2) {
          inputRef.value = left ? Number(left) + '.' + right.slice(0, Number(value)) : ''
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
      inputRef.value = Math.max(tmp, Number(value))
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
 * 直接使用： <Input v-max="100"></Input>
 */
 export const max = {
  inserted(el, { value }) {
    const inputRef = el.querySelector('input')
    const fn = () => window.requestAnimationFrame(() => {
      let tmp = inputRef.value
      inputRef.value = Math.min(tmp, Number(value))
    })
    if(inputRef) {
      inputRef.addEventListener('input', fn)
    } else {
      el.addEventListener('input', fn)
    }
  }
}



/**
 * 大于0的整数
 * @param {Function} 
 * 直接使用： <Input v-gt0="num"></Input>
 */
export const gtInt0 = {
  inserted(el){
    const inputRef = el.querySelector('input')
    const fn = () => window.requestAnimationFrame(() => inputRef.value = inputRef.value.replace(/[^0-9]/g, '').replace(/^0+/g, ''))
    if(inputRef) {
      inputRef.oninput = fn
    } else {
      el.oninput = fn
    }
  },
}
/**
 * 大于等于0的整数
 * @param {Function} 
 * 直接使用： <Input v-gtEq0="num"></Input>
 */
export const gtEqInt0 = {
  inserted(el){
    const inputRef = el.querySelector('input')
    const fn = () => {
      window.requestAnimationFrame(() => {
        let tmp = inputRef.value.replace(/[^0-9]/g, '')
        if(tmp === '' || tmp === undefined) {
          tmp = ''
        } else if(Number(tmp) > 0) {
          tmp = tmp.replace(/^0+/g, '') 
        } else {
          tmp = tmp.at(0) || '0'
        }
        console.log(tmp)
        inputRef.value = tmp
      })
    }
    if(inputRef) {
      inputRef.oninput = fn
    } else {
      el.oninput = fn
    }
  },
}
/**
 * 大于0的整数
 * @param {Function} 
 * 直接使用： <Input v-gt0="num"></Input>
 */
 export const gtFloat0 = {
  inserted(el){
    const inputRef = el.querySelector('input')
    const fn = () => window.requestAnimationFrame(() => {
      let tmp = inputRef.value
      tmp = tmp.replace(/[^0-9.]/g, '')
      if(tmp === '' || tmp === undefined) {
        tmp = ''
      } else if(tmp.length > 0) {
        tmp = tmp.replace(/^0+/g, '0') 
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
      if(tmp.includes('.') && /([0-9]*).([0-9]*)/.test(tmp)) {
        const [, left, right] = tmp.match(/([0-9]*).([0-9]*)/)
        inputRef.value = left ? Number(left) + '.' + right : ''
      } else {
        inputRef.value = tmp
      }
    })
    if(inputRef) {
      inputRef.oninput = fn
    } else {
      el.oninput = fn
    }
  }
}
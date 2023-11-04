import { Message } from 'view-design'
/**
 * 数据范围指令
 * v-range=""  手机号、身份证号、银行卡号增加星号
 * <div v-range="`[${min},${max})`">{{num}}</div>
 * 举例： 
 */
const processVal = (el, {value}, vnode) => {
  if(!value) { return false }
  if(!_.isString(value)) {
    return Message.error('您传入的范围格式不正确')
  }
  value = _.trim(value, 1)
  const [leftStr, rightStr] = value.split(',')
  const [leftLimit, left] = [leftStr.slice(0, 1), leftStr.slice(1)]
  const [right, rightLimit] = [rightStr.slice(0, -1), rightStr.slice(-1)]
  window.requestAnimationFrame(() => {
    const val = el.innerText.replace(/[^0-9.-]/g, '')
    if(!['', null, undefined].includes(val)) {
      const lessThenLeft = (leftLimit == '[' && Number(val) < Number(left)) || (leftLimit == '(' && Number(val) <= Number(left))
      const greateThenRight = (rightLimit == ']' && Number(val) > Number(right)) || (rightLimit == ')' && Number(val) >= Number(right))
      const inRange = (leftLimit == '[' && Number(val) >= Number(left)) || (leftLimit == '(' && Number(val) > Number(left)) && (leftLimit == ']' && Number(val) <= Number(right)) || (leftLimit == ')' && Number(val) < Number(right))
      if(lessThenLeft || greateThenRight) {
        el.style.color = 'red'
      } else if(inRange){
        el.style.color = 'inherit'
      } else {
        Message.error('您传入的范围格式不正确')
      }
    }
  })
}
export const range = {
  inserted: processVal,
  update: processVal
}

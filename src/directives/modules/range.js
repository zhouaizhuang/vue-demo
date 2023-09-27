import { Message } from 'view-design'
/**
 * 数据范围指令
 * v-range="{
 *  min: '',
 *  max: '',
 * 
 * }"  手机号、身份证号、银行卡号增加星号
 * 举例： 
 */
const processVal = (el, {value}, vnode) => {
  if(!_.isString(value)) {
    return Message.error('您传入的范围格式不正确')
  }
  value = _.trim(value, 1)
  const res = value.match(/(\[?\(?)(\d+)\,(\d+)(\]?\)?)/)
  const [originVal, leftLimit, left, right, rightLimit] = res
  const val = el.innerText
  if(!['', null, undefined].includes(val)) {
    const lessThenLeft = (leftLimit == '[' && Number(val) < Number(left)) || (leftLimit == '(' && Number(val) <= Number(left))
    const greateThenRight = (rightLimit == ']' && Number(val) > Number(right)) || (rightLimit == ')' && Number(val) >= Number(right))
    // console.log(rightLimit)
    console.log(el.innerText)
    console.log(Number(val))
    console.log(Number(right))
    console.log(greateThenRight)
    const inRange = (leftLimit == '[' && Number(val) >= Number(left)) || (leftLimit == '(' && Number(val) > Number(left)) && (leftLimit == ']' && Number(val) <= Number(right)) || (leftLimit == ')' && Number(val) < Number(right))
    if(lessThenLeft || greateThenRight) {
      el.style.color = 'red'
    } else if(inRange){
      el.style.color = 'inherit'
    } else {
      Message.error('您传入的范围格式不正确')
    }
  }
}
export const range = {
  inserted: processVal,
  update: processVal
}

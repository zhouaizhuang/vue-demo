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
/**
 * 长按指令 长按一定时间后触发事件。默认是1s
 * @param {Function} fn - 执行事件
 * @param {?Number|1000} time - 长按时间
 * @param {Array} binding.value - [fn, time]
 * 使用方法1、直接使用： <div v-longpress="longpress1">长按1s</div>
 * 使用方法2、配置事件，长按触发时间1s： <div v-longpress="[longpress1, 2000]">长按2s</div>
 */
export const longpress = {
  bind: function (el, binding, vNode) {
    let fn, time = 1000
    if (typeof binding.value == 'function') { // 值传入函数的话。那么监听事件就是默认值click，延迟事件就是默认的500ms
      fn = binding.value
    } else {
      [fn, time = 1000] = binding.value
    }
    // 定义变量
    let pressTimer = null
    // 创建计时器（ 2秒后执行函数 ）
    let start = () => {
      if (pressTimer === null) {
        pressTimer = setTimeout(() => fn(), time)
      }
    }
    // 取消计时器
    let cancel = () => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer)
        pressTimer = null
      }
    }
    // 添加事件监听器
    el.addEventListener('mousedown', start)
    el.addEventListener('touchstart', start)
    // 取消计时器
    el.addEventListener('click', cancel)
    el.addEventListener('mouseout', cancel)
    el.addEventListener('touchend', cancel)
    el.addEventListener('touchcancel', cancel)
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, { value }) {
    el.$value = value
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener('click', el.handler)
  },
}

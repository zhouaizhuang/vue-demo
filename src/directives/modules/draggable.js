/* <img v-draggable stc="https://xxxx.png" class="fixed t0 l0 zx30" /> */
export const draggable = {
  inserted: function (el) {
    el.style.cursor = 'move'
    el.style.position = 'fixed'
    const { top, left } = _.getViewPos(el)
    el.style.left = left
    el.style.left = top
    el.style.userSelect = 'none'
    el.style.zIndex = '30'
    el.onmousedown = function (e) {
      let disx = e.pageX - el.offsetLeft
      let disy = e.pageY - el.offsetTop
      el.isDragging = true
      document.onmousemove = function (e) {
        if(!el.isDragging) {return false}
        let x = e.pageX - disx
        let y = e.pageY - disy
        let maxX = document.body.clientWidth - parseInt(window.getComputedStyle(el).width)
        let maxY = document.body.clientHeight - parseInt(window.getComputedStyle(el).height)
        x = x < 0 ? 0 : x > maxX ? maxX : x
        y = y < 0 ? 0 : y > maxY ? maxY : y
        el.style.left = x + 'px'
        el.style.top = y + 'px'
        e.preventDefault();
      }
      document.onmouseup = function () {
        el.isDragging = false
        document.onmousemove = null
        document.onmouseup = null
        document.onmouseleave = null
      }
      document.onmouseleave = function (){
        el.isDragging = false
        document.onmousemove = null
        document.onmouseup = null
        document.onmouseleave = null
      }
    }
  },
}

<template>
  <div id="app" :style="{animation:isWeChat ? animation : ''}"> <!--转场动画-->
    <div v-if="$route.path === '/index'">
      <router-view/>
    </div>
    <div v-else style="max-width:8rem;" class="bgf5 auto">
      <router-view />
    </div>
  </div>
</template>
<script>
import { getField, isWeChat } from './common.js'
export default {
  data(){
    return  {
      isWeChat: false, // 是否在微信环境。微信H5下开启转场动画
      animation:'',
    }
  },
  watch: {
    $route(to, from) {
      const r = require.context('./router/modules', true, /\.js/)
      const pathStr = r.keys().reduce((prev, item) => {
        const routeItem = r(item).default
        prev += getField(routeItem, 'path') + ','
        return prev
      }, [])
      // console.log(pathStr)
      const routeDeep = ['/', '/index', pathStr] // 这里按照深度写路径。由于当前项目就index是第一层，后面都是同级目录
      const toDepth = routeDeep.reduce((prev, item, index) => item.includes(to.path) ? index : prev, 0)
      const fromDepth = routeDeep.reduce((prev, item, index) => item.includes(from.path) ? index : prev, 0)
      this.animation = toDepth > fromDepth ? 'pageTransGo 0.5s ease -0.2s 1 forwards' : 'pageTransBack 0.3s ease -0.2s 1 forwards'
      setTimeout(() => {this.animation=''}, 800)
    }
  },
  created(){
    this.isWeChat = isWeChat;
  }
}
</script>
<style>
@keyframes pageTransGo {
  0%{ transform: translateX(100%);opacity:0 }
  100%{ transform: translateX(0%);opacity: 1; }
}
@keyframes pageTransBack {
  0%{ transform: translateX(-100%);opacity:0 }
  100%{ transform: translateX(0%);opacity: 1; }
}
</style>

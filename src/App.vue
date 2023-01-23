<template>
  <div id="app" :style="{animation:isWeChat ? animation : ''}"> <!--转场动画-->
    <div v-if="['/index', '_pc', 'url'].some(v => $route.path.includes(v))">
      <router-view/>
    </div>
    <div v-else style="max-width:400px;" class="bgf5 auto">
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
      const isGo = toDepth > fromDepth
      this.animation = isGo ? 'pageTransGo .4s both' : 'pageTransBack 0.3s ease -0.2s both'
      setTimeout(() => { this.animation='' }, isGo ? 500 : 300)
    }
  },
  created(){
    this.isWeChat = isWeChat;
  }
}
</script>
<style>
@keyframes pageTransGo {
  from {
    opacity: 0;
    -webkit-transform: translate3d(80%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes pageTransBack {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>

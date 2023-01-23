<template>
  <div class="mh100vh h100vh">
    <div class="tc f xb pl50 pr50 h100 pb50 ae">
      <Button type="primary" @click="message('success')">成功提示</Button>
      <Button type="info" @click="message('info')">消息提示</Button>
    </div>
  </div>
</template>
<script>
import { $message } from "../../../components/Message/index.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      
    }
  },
  methods:{
    message(type) {
      $message({
        type,
        message: type === 'success' ? '恭喜你，这是一条成功消息' : '这是一条消息提示',
      })
    },
  },
  created(){
    
  },
  mounted(){
    
  },
}
</script>
<style scoped>
.container{
  user-select: none;
  text-align: center;
  line-height: 800px;
}
</style>
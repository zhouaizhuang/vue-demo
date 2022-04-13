
<template>
  <div class="auto fs20r mh100vh">
    <Zupload :max_size="500*1024" :width="750" :height="560" :limit="5" :imgArr="addAddrObj.images" @change="e => addAddrObj.images = e" />
    
    <div class="mt50 fs30r">switch实战技巧</div>
    <i-switch :value="!!addAddrObj.able_reserve" @on-change="changeAbleReserve(row)">
      <span slot="open">是</span>
      <span slot="close">否</span>
    </i-switch>
  </div>
</template>
<script>
import Zupload from "../../../components/Zupload/index.vue"
export default {
  name: 'phone',
  components:{
    Zupload
  },
  data(){
    return {
      addAddrObj:{
        images: [],
        able_reserve: 1, // 当后端返回的是0 | 1的时候
      }
    }
  },
  methods:{
    async changeAbleReserve(row){
      const {id, status} = row
      // const res = await post('/api/xxx/xxx', { id, status: status ^ 1 }) // 注意: ^ 1可以实现  数字的：  1转0  与   0转1
    },
  },
  created(){
  },
  mounted(){
  },
}
</script>
<style scoped>

</style>
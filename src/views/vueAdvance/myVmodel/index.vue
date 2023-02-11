<!--自定义组件的v-model使用方式-->
<template>
  <div class="auto fs14 h100vh fs18">
    <AdvVmodel v-model="text" />
  </div>
</template>
<script>
import AdvVmodel from "../../../components/AdvVmodel/index.vue"
export default {
  name: 'vmodel',
  components: {
    AdvVmodel
  },
  data(){
    return {
      text:''
    }
  },
  methods:{
  },
  created(){
  },
  mounted(){

  },
}
</script>
<style scoped>

</style>
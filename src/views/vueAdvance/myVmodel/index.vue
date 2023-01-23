<!--自定义组件的v-model使用方式-->
<template>
  <div class="auto fs14 h100vh fs25">
    <advVmodel v-model="text" />
  </div>
</template>
<script>
import advVmodel from "../../../components/advVmodel.vue"
export default {
  name: 'vmodel',
  components: {
    advVmodel
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
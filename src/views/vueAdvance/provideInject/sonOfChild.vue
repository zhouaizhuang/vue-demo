
<template>
  <div class="bdc fs20r mt30r ml30r mr30r mb30r pl30r pr30r pt30r pb30r">
    <div class="fs28r b">孙子组件</div>
    <div>{{name}}</div>
    <div>{{age}}</div>
  </div>
</template>
<script>
export default {
  name: 'sonOfChild',
  inject: ['name', 'age'],
  data(){
    return {
    }
  },
  methods:{
  },
  created(){
  },
  mounted(){
  }
}
</script>
<style scoped>

</style>
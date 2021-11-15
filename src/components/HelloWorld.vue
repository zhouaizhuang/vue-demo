<template>
  <div class="hello">
    <h1>{{ this.$attrs.msg + 1 }}</h1>
    <ChildC v-bind="$attrs" v-on="$listeners"></ChildC>
  </div>
</template>

<script>
import ChildC from './ChildC.vue'
export default {
  name: 'HelloWorld',
  components: { ChildC },
  // props: {
  //   msg: String
  // },
  created(){
    console.log(this.$attrs)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>

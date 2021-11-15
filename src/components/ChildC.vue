<template>
  <div class="">
    <h1 @click="say">{{ $attrs.msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ChildC',
  props: {
    text: String
  },
  methods:{
    say(){
      this.$emit('sayName', this.text)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>

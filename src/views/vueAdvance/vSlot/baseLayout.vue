
<template>
  <div>
    <header class="pb80r">
      <div class="fs40r b tc">上:</div>
      <slot name="header" :user="user"></slot>  <!--如果需要蒋组件内的数据传给使用这个组件的插槽对象使用的话。可以通过v-bind绑定数据-->
    </header>
    <main class="mb80r">
      <div class="fs40r b tc">中:</div>
      <slot></slot>  <!-- 相当于<slot name="default"></slot>-->
    </main>
    <footer class="mb80r">
      <div class="fs40r b tc">下:</div>
      <slot name="footer" :info="info"></slot> 
    </footer>
  </div>
</template>
<script>
export default {
  name: 'baseLayout',
  data(){
    return {
      user: {
        name: '张三',
        age: 18
      },
      info: {
        name: '小红',
        age: 16
      },
    }
  },
  methods:{
  },
  created(){
   
  }
}
</script>
<style scoped>

</style>
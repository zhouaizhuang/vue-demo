
<template>
  <div class="f xc ac h100vh">
    <img src="./free_contract.png" class="breath-btn" style="width:400px;height:58px;" />
    <!-- <HelloWorld :msg="'123'" @sayName="sayName"></HelloWorld> -->
  </div>
</template>
<script>
// import HelloWorld from '../../../components/HelloWorld.vue'
export default {
  // components: { HelloWorld },
  name: 'breath',
  data(){
    return {
    }
  },
  methods: {
    // sayName(){
    //   console.log('myName')
    // }
  },
  created(){
  
  },
}
</script>
<style>
.breath-btn{
  animation: breathing 0.6s ease-in-out 0s infinite alternate;
}
@keyframes breathing {
  0%{
    transform: scale(0.93);
  }
  100%{
    transform: scale(1);
  }
}
</style>
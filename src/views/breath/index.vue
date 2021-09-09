
<template>
  <div style="margin: 200px auto;width:300px;">
    <img src="./free_contract.png" class="breath-btn" style="width:600px;height:88px;" />
  </div>
</template>
<script>
import { random } from "../../common.js"
export default {
  name: 'breath',
  data(){
    return {
    }
  },
  methods: {
   
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
    transform: translateX(-50%) scale(0.93);
  }
  100%{
    transform: translateX(-50%)  scale(1);
  }
}
</style>
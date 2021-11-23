<template>
  <div style="max-width:400px;" class="w100 auto bg2 h100vh pt100">
    <div class="f rw gf">
      <div v-for="(item, index) in textArr" :key="index" class="landIn fs30 lt5 b" :style="{animationDelay: `${index * 0.05}s`  }">{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'textStaggered',
  data(){
    return {
      text:'Ano hi watashitachi mada shiranai no Fushigi no monogatari desu.',
      textArr: []
    }
  },
  methods: {
  },
  created(){
    this.textArr = this.text.split('')
  }
}
</script>
<style scoped>
@keyframes landIn {
  from {
    opacity: 0;
    transform: translateY(-20%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.landIn{
  animation: landIn 0.8s ease-out both;
  line-height: 1.5;
}
</style>
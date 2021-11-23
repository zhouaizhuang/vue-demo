<template>
  <div class="rel h100vh auto" style="width:375px;">
    <!--css动画实现-->
    <div class="mr10 fs24 b mb20 mt100 g1890ff">css动画实现</div>
    <h1 class="fs50">hello world!</h1>
    <!--js动画实现-->
    <div class="mr10 fs24 b mb20 mt50 g1890ff">js动画实现</div>
    <div class="fs30"><span>{{msg}}</span><span class="mark"></span></div>
  </div>
</template>
<script>
export default {
  name: 'guidePoint',
  components: {
  },
  data(){
    return {
      // text: ["你好", "欢迎来到一个前端的内心世界", "期待与你共同成长"],
      text: '欢迎来到有趣的前端世界！让我们一起学习CSS吧！',
      msg: '',
      timeId: null,
    }
  },
  methods: {
  },
  created(){
    this.timeId = setInterval(() => {
      let textArr = this.text.split('')
      this.msg += textArr.splice(0, 1)
      this.text = textArr.join('')
      if(this.text.length === 0) {
        clearInterval(this.timeId)
      }
    }, 100)
  }
}
</script>
<style scoped>
@keyframes typing {
  from {
    width: 0;
  }
}
@keyframes caret {
  from {
    border-color: transparent;
  }
}
h1 {
  font: bold 200% Consolas, Monaco, monospace;
  width: 12ch;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid;
  animation: typing 2s steps(12), caret 1s steps(2) infinite;
}

/*********高级打字机***** */
@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
}
.mark {
  border-right: 2px solid white;
  animation: blink 1s step-end infinite;
}
</style>

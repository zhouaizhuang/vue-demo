<template>
  <div class="mh100vh">
    <div class="f ac mb20">
      <div class="mr15 noCopy">基础用法：</div> <!--禁止复制-->
      <Button type="primary" @click="add">+1</Button>
      <div class="">--------</div>
      <Tag type="border" color="primary">{{num}}</Tag>
    </div>
    <div class="f ac mb20">
      <div class="mr15">深度监听：</div>
      <Button type="primary" @click="addAge">增加age</Button>
      <div class="">--------</div>
      <Tag type="border" color="primary">{{age}}</Tag>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components:{},
  data() {
    return {
      num: 1,
      age: 0,
      schoolObj: {
        name: '清华大学',
        studentObj: {
          name: '张三',
          age: 18
        }
      }
    }
  },
  methods:{
    add(){
      this.num++
    },
    addAge(){
      this.schoolObj.studentObj.age = 20
    }
  },
  watch: {
    "schoolObj": {
      immediate: true, // 立即执行-------> 如果不加的话，那么页面首次加载的时候。这里的handler处理函数就不会执行的
      deep: true, // 深度监听复杂类型内变化
      handler(newVal, oldVal){
        if(newVal.studentObj.age === 20) {
          this.age = 20
        }
      }
    }
  },
  created(){
    
  },
  mounted(){
    
  },
}
</script>
<style scoped>
</style>
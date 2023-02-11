export default {
  name: 'advVmodel',
  model:{
    prop: 'text', // 使用组件的时候：v-model="text"。就相当于，<advVmodel :text="text" @cc="cc">  组件内部触发事件的时候，调用cc事件就相当于外部组件v-model进行该值操作了
    event: 'cc'
  },
  props: {
    text: String
  },
  methods:{
    inputVal(e){
      this.$emit('cc', e.target.value)
    }
  }
}
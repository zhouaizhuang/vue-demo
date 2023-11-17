/**二次确认弹框
 * 使用方法
  this.$zConfirm({
    title: '温馨提示',
    name: '张三',
    content: `确定要重置吗？`,
    onOk: async () => {
      console.log('点击了确定')
    },
    onCancel: () => {
      console.log('点击了取消')
    }
  })
 */
import * as func from "./func.js"
export default {
  name: '',
  props: {
    
  },
  components:{},
  data(){
    return {
      isShow: false,
      title: "温馨提示",
      name: '',
      content: ``,
    }
  },
  methods:{
    ...func,
  },
  created(){
    
  },
  mounted(){
    
  },
}
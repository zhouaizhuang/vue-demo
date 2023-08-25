import yanzheng1 from "../../assets/yanzheng1.png"
import yanzheng2 from "../../assets/yanzheng2.png"
import yanzheng3 from "../../assets/yanzheng3.png"
export default {
  name: 'slider',
  props: {
    isShowSlider: {type: Boolean, default: false}
  },
  data(){
    return {
      msg: '',
      yanzheng1,
      yanzheng2,
      yanzheng3
    }
  },
  methods: {
    async onSuccess(){
      this.msg = '操作成功'
      await _.wait(600)
      this.$emit('success')
    },
    onFail(){
      this.msg = ''
    },
    onRefresh(){
      this.msg = ''
    },
    close(){
      this.$emit('closeSlider')
    }
  }
};
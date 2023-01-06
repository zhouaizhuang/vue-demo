import VueUeditorWrap from 'vue-ueditor-wrap'
export default {
  name: 'Editor',
  components: {
    VueUeditorWrap
  },
  props: {
    msg: {
      type: String,
      default: '',
    },
    config: {
      type: [Array, Object],
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      message: '',
      myConfig: {
        autoHeightEnabled: false,// 编辑器不自动被内容撑高
        initialFrameHeight: 240,  // 初始容器高度
        initialFrameWidth: '100%', // 初始容器宽度
       /** 仅仅需要这里后端提供接口请求地址
        * ueditor官网：http://fex.baidu.com/ueditor/#dev-request_specification
        * 注意：需要后端提供这个url相当于提供的config.json数据
        * java参考资料： https://www.freesion.com/article/8122633306/
        */
        serverUrl: 'http://hd.qianfanyun.com/php/controller.php?action=config', // 'http://192.168.10.41:8389/api/config'
        UEDITOR_HOME_URL: '/UEditor/', // 注意：此处是UEditor文件夹放在public文件夹中
        maximumWords:'100000000'
      }
    }
  },
  watch: {
    message: function (newQuestion, oldQuestion) {
      this.$emit('change', newQuestion)
    },
    msg: function(newVal, oldVal){
      this.message = newVal
    }
  },
  // created(){
  //   this.message = this.msg
  // },
  mounted () {
    this.myConfig = {
      ...this.myConfig,
      ...this.config
    }
  }
}
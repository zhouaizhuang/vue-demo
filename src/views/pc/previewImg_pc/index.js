import * as func from "./func.js"
import PreviewImg from "@/components/PreviewImg/index.vue"
export default {
  name: '',
  components:{
    PreviewImg
  },
  data(){
    return {
      isShow: false,
      curImg: 'https://file.iviewui.com/images/image-demo-1.jpg',
      imgArr: [
        'https://file.iviewui.com/images/image-demo-1.jpg',
        'https://file.iviewui.com/images/image-demo-2.jpg',
        'https://file.iviewui.com/images/image-demo-3.jpg',
        'https://file.iviewui.com/images/image-demo-4.jpg',
        'https://file.iviewui.com/images/image-demo-5.jpg',
        'https://file.iviewui.com/images/image-demo-6.jpg'
      ]
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
import * as func from "./func.js"
import UploadImgs from "@/components/UploadImgs/index.vue"
import { guID } from "@/common.js"
export default {
  name: '',
  components:{
    UploadImgs
  },
  data(){
    return {
      imgArr: [
        {
          url: "https://healthoss.health.gagctv.com/healthoss-test/upload/image/2023/01/13/b817e6e677d64112b632f45ab6188a89.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minio%2F20230115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230115T023915Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=4e86c24d4486430668a05572714c31499173b10c5ded8d584bb7bdb72f09b4de",
          id: guID(),
          pathName: "upload/image/2023/01/13/b817e6e677d64112b632f45ab6188a89.jpg"
        },
        {
          url: "https://healthoss.health.gagctv.com/healthoss-test/upload/image/2023/01/13/1e721a9489424267a58ef1812bcc2f80.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minio%2F20230115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230115T023915Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=21768d6e3ecec861509caf791c523d60ea4880a99e3fb21370e9108200c72d15",
          id: guID(),
          pathName: "upload/image/2023/01/13/1e721a9489424267a58ef1812bcc2f80.png"
        }
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
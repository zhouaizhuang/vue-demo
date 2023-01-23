<template>
  <div class="pt50 f xc">
    <QRcodeImg :content="content" width="200" height="200"></QRcodeImg>
  </div>
</template>
<script>
import { wait } from '../../../common'
import QRcodeImg from "../../../components/QrcodeImg/index.vue"
export default {
  name: 'qrcode',
  components:{
    QRcodeImg
  },
  data(){
    return {
      content: ""
    }
  },
  methods:{
  },
  async created(){
    await wait(1000)
    this.content = 'my test data'
  },
  mounted(){
    
  },
}
</script>
<style scoped>
</style>
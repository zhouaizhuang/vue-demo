<!--https://www.cnblogs.com/liupengfei13346950447/articles/10768310.html-->
<template>
  <div style="width:7.5rem" class="auto h100vh bgf">
    <div class="pl30r pr30r pt100r">
      <label for="upImg" class="upload db rds10r" @click="clickUpLoad" />
      <!-- <input type="file" accept="image/*" style="height:1.7rem" capture=“camera” @change="changeImg($event)" name="upload_file" id="upImg" /> -->
      <input type="file" accept="image/*" class="clip0" @change="changeImg($event)" name="upload_file" id="upImg" />
      <!--将上传的图片展示出来-->
      <div class="uploadsw" v-for="item in imgList" :key="item">
        <img :src="item"  class="tuimg"  alt />
      </div>
    </div>
  </div>
</template>
<script>
import { showToast } from '../../../common/index.js'
import { request } from "../../../utils/network.js"
export default {
  name: 'zInput',
  data(){
    return {
      imgList: [],
      formData: null,
    }
  },
  methods: {
    changeImg (e) {
      const { files } = e.target
      if (files.length > 4 || this.imgList.length > 3) {
        return this.$toast('最多上传4张图片') 
      }
      files.forEach(file => uploadFile(file)) // 拿到图片对象，然后用表单数据上传
    },
    // 图片上传接口
    async uploadFile (file) {
      /***
       * 备注： 当前项目，目前没有后端。因此这里都是伪代码
       */
      this.formData = new FormData()
      this.formData.append('file', file) // 添加文件流
      const res = await request({
        url: '/olympic/app/game/upload-complain',
        headers: {
          'Content-Type': 'multipart/form-data',  //之前说的以表单传数据的格式来传递fromdata
          "Authorization":getCookie('third_app_token')
        },
        data: this.formData
      })
      const {code, data, msg} = res.data
      if(code) {
        return showToast(msg)
      } else {
        this.imgList.push(process.env.VUE_APP_API_BASE_URL + data.file) // 将图片推进去
      }
    },
  },
  created(){
  }
}
</script>
<style scoped>
.upload{
  border: 0.03rem dashed #ccc;
  width: 1.2rem;
  height:1.2rem;
  position: relative;
}
.upload::before{
  content:'';
  width:90%;
  height:0;
  border-top: 0.03rem dashed #ccc;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
}
.upload::after{
  content:'';
  width:0;
  height:90%;
  border-right: 0.03rem dashed #ccc;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
}
</style>
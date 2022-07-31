import { getProvinceBySouHu, getLocationByIp } from "../../../h5.js"
export default {
  name: '',
  components:{},
  data(){
    return {
      souhuObj: {
        provinve: ''
      },
      gaodeIpObj: {
        province: '',
        city: '',
      }
    }
  },
  methods:{
  },
  created(){
    
  },
  async mounted(){
    // 搜狐定位精确到省
    this.souhuObj.provinve = await getProvinceBySouHu()
    // 高德Ip定位，精确到市
    this.gaodeIpObj = await getLocationByIp()
  },
}
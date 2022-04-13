
<template>
  <div class="auto fs20r mh100vh">
    <Form ref="createForm" :model="addAddrObj" :rules="addAddrObjRule" :label-width="80">
      <Zmap
        :location="addAddrObj.location"
        @changeLocation="e => addAddrObj.location = e"
        :lat="addAddrObj.lat"
        :lng="addAddrObj.lng"
        @changeLngLat="(lat, lng) => {addAddrObj.lng=Number(lng);addAddrObj.lat=Number(lat);}"
      >
      </Zmap>
    </Form>
  </div>
</template>
<script>
import Zmap from "../../../components/Zmap/index.vue"
export default {
  name: 'myMap',
  components:{
    Zmap
  },
  data(){
    return {
      addAddrObj:{
        location: '',
        lat: undefined, // 纬度
        lng: undefined, // 经度
      },
      addAddrObjRule:{
        lng: [{ required: true, type:'number', message: '请输入经度', trigger: 'blur' }],
        lat: [{ required: true, type:'number', message: '请输入纬度', trigger: 'blur' }],
      }
    }
  },
  methods:{
    async changeAbleReserve(row){
      const {id, status} = row
      // const res = await post('/api/xxx/xxx', { id, status: status ^ 1 }) // 注意: ^ 1可以实现  数字的：  1转0  与   0转1
    },
  },
  created(){
  },
  mounted(){
  },
}
</script>
<style scoped>

</style>
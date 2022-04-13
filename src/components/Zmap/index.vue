<template>
  <div>
    <div class="rel">
      <Form-item label="地址">
        <Input :value="location" @input="changeLocation" placeholder="请输入地址" style="width:65%;"></Input>
      </Form-item>
      <Button class="abs ml20 t0" @click="searchKeyword" style="left:70%" type="primary">搜索</Button>
    </div>
    <Form-item label="地图">
      <div id="container" class="mapbox" style="width: 90%;height:400px;"></div>
    </Form-item>
    <FormItem label="纬度" prop="lat">
      <Input :value="lat" readonly placeholder="请选择纬度" style="width:65%"></Input>
    </FormItem>
    <FormItem label="经度" prop="lng">
      <Input :value="lng" readonly placeholder="请选择经度" style="width:65%"></Input>
    </FormItem>
  </div>
</template>
<script>
// <Zmap
//   :isShow="isShowModal"    //是否显示Dom。用于监听DOM是否加载
//   :location="addVenueObj.location"  // 搜索地址
//   @changeLocation="e => addVenueObj.location = e" //变更搜索地址的函数
//   :lat="addVenueObj.lat" // 纬度
//   :lng="addVenueObj.lng" // 经度
//   @changeLngLat="changeLngLat" // 改变经度和纬度的函数
// ></Zmap>
export default {
  props: {
    location: {type: String, default: ''},
    lat: {type: Number, default: 31.83104490},
    lng: {type: Number, default: 119.95692193}
  },
  data () {
    return {
      geocoder:'',
      markersArray: [],
    }
  },
  methods: {
    changeLocation(e){
      this.$emit('changeLocation', e)
    },
    searchKeyword(){
      const keyword = this.location
      if(!keyword) { return this.$Message.error('请输入地址') }
      this.markersArray.forEach(item => item.setMap(null))
      this.geocoder.getLocation(keyword) //根据输入的关键字在搜索范围内检索
    },
    init() {
      let center = new qq.maps.LatLng(this.lat, this.lng)
      let map = new qq.maps.Map(document.getElementById("container"), { center, zoom: 13 });
      let marker = new qq.maps.Marker({ map, position: center })
      this.markersArray.push(marker);
      let latlngBounds = new qq.maps.LatLngBounds();
      qq.maps.event.addListener(map, "click", e => {
        const {lng, lat} = e.latLng
        this.$emit('changeLngLat', lat.toFixed(8), lng.toFixed(8))
        this.markersArray.forEach(item => item.setMap(null))
        this.markersArray.push(new qq.maps.Marker({ map, position: e.latLng }))
      })
      this.geocoder = new qq.maps.Geocoder({
        complete: res => {
          const {lng, lat} = res.detail.location
          this.$emit('changeLngLat', lat.toFixed(8), lng.toFixed(8))
          map.setCenter(res.detail.location)
          this.markersArray.push(new qq.maps.Marker({map, position: res.detail.location }))
        }
      })
    },
  },
  mounted(){
    this.init()
  },
}
</script>
<style scoped>
</style>
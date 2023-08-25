<template>
  <div style="height:400px;">
    <div id="container" class="w100 h80"></div>
    <div id="toolControl" @click="clickCtntrol" class="abs l0 r0">
      <div :class="['toolItem bgf',  active == 'polygon' ? 'active' : '']" @click="drawPath" id="polygon" title="多边形"></div>
      <div :class="['toolItem bgf', active == 'del' ? 'active' : '']" id="delete" @click="del" title="删除"></div>
      <div :class="['toolItem bgf fs14 f ac xc']" id="finish" @click="finish" title="">完成</div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components:{},
  data(){
    return {
      active: '',
      map: '',
      editor:'',
      id: '',
      path: [],
    }
  },
  methods:{
    drawPath(){
      this.active = 'polygon'
      this.editor.setActiveOverlay('polygon')
      this.editor.setActionMode(TMap.tools.constants.EDITOR_ACTION.DRAW)
    },
    del(){
      this.active = 'del'
      if (this.path.length == 0) {
        return this.$Message.error("还没有标记管辖范围");
      }
      console.log(this.path)
      this.editor.setActionMode(TMap.tools.constants.EDITOR_ACTION.INTERACT)
      this.editor.delete()
    },
    finish () {
      this.editor.setActionMode(TMap.tools.constants.EDITOR_ACTION.INTERACT)
      let zoom = this.map.getZoom()
      zoom = Math.round(zoom)
      const mapCenter = this.map.getCenter()
      const lat = mapCenter.getLat().toFixed(6)
      const lng = mapCenter.getLng().toFixed(6)
      console.log(this.path)
      console.log(lat)
      console.log(lng)
      console.log(zoom)
      // 这里进行
      // this.$emit('getpath', this.path, lat, lng, zoom)
    },
    initMap() {
      // 初始化地图
      this.map = new TMap.Map('container', {
        zoom: 12, // 设置地图缩放级别
        center: new TMap.LatLng(31.754286, 120.031471), // 设置地图中心点坐标
      });
      let that = this
      // 初始化几何图形及编辑器
      this.editor = new TMap.tools.GeometryEditor({
        // TMap.tools.GeometryEditor 文档地址：https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor
        map: this.map, // 编辑器绑定的地图对象
        overlayList: [
          // 可编辑图层 文档地址：https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#4
          {
            overlay: new TMap.MultiPolygon({
              map: this.map,
              geometries: [
                
              ]
            }),
            id: 'polygon',
          },
        ],
        id: 'polygon',
        // actionMode: TMap.tools.constants.EDITOR_ACTION.DRAW, // 编辑器的工作模式
        selectable: true, // 开启点选功能
        activeOverlayId: 'polygon', // 激活图层
        snappable: true, // 开启吸附
      });
      this.editor.on('delete_complete', evtResult => {
        console.log(evtResult);
        const delId = evtResult.map(v => v.id)
        this.path = this.path.filter(v => !delId.includes(v.id))
        console.log(this.path)
      });
      // 监听拆分失败事件，获取拆分失败原因
      this.editor.on('split_fail', (res) => {
        alert(res.message);
      });
      // 监听合并失败事件，获取合并失败原因
      this.editor.on('union_fail', (res) => {
        alert(res.message);
      });
      // 监听绘制结束事件，获取绘制几何图形
      this.editor.on('draw_complete', (geometry) => {
        console.log(geometry)
        this.path.push(geometry)
      });
    },
    clickCtntrol(e){
      var id = e.target.id;
      this.id = id
    }
  },
  created(){

  },
  async mounted(){
    // 切换激活图层
    await _.loadJs('https://map.qq.com/api/gljs?libraries=tools&v=1.exp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77')
    this.initMap()
  },
}
</script>
<style>
#toolControl {
  top: 10px;
  margin: auto;
  width: 252px;
  z-index: 1001;
}
.toolItem {
  width: 40px;
  height: 40px;
  float: left;
  margin-right: 10px;
  padding: 4px;
  border-radius: 3px;
  background-size: 30px 30px;
  background-position: 4px 4px;
  background-repeat: no-repeat;
  box-shadow: 0 1px 2px 0 #e4e7ef;
  border: 1px solid #ffffff;
  background-position: center;
}
#polygon{
  background-image: url('https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/polygon.png');
}
#delete {
  background-image: url('https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/delete.png');
}
.toolItem:hover {
  border-color: #789cff;
}
.active {
  border-color: #d5dff2;
  background-color: #d5dff2;
}
</style>
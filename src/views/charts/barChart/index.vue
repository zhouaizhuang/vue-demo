<template>
  <div style="width:350px;" class="auto">
    <div class="fs24 tc mt50">最普通的柱状图</div>
    <div id="demo1" style="width:350px;height:300px;"></div>
  </div>
</template>
<script>
import * as echarts from "echarts"
export default {
  name: 'barChart',
  data(){
    return {

    }
  },
  methods: {
    initDemo1(){
      var chartDom = document.querySelector('#demo1');
      var myChart = echarts.init(chartDom)
      var option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };
      option && myChart.setOption(option);
      // window.addEventListener("resize", function() {
      //   myChart.resize();  //页面大小变化后Echarts也更改大小
      // });
    },
  },
  created(){
    
  },
  mounted(){
    this.initDemo1()
  }
}
</script>
<style>

</style>
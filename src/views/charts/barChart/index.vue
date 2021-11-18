<template>
  <div style="width:350px;" class="auto">
    <div class="fs24 tc mt50">最普通的柱状图</div>
    <div id="demo1" style="width:350px;height:300px;"></div>
    <div class="fs24 tc mt50">象形柱图</div>
    <div id="demo2" style="width:350px;height:300px;"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  name: 'barChart',
  data(){
    return {

    }
  },
  methods: {
    initDemo1(){
      var chartDom = document.querySelector('#demo1');
      console.log(chartDom)
      var myChart = echarts.init(chartDom);
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
    initDemo2(){
      const chartDom = document.querySelector('#demo2');
      const myChart = echarts.init(chartDom);
      const xData = ['本年话务总量', '本年人工话务量', '每万客户呼入量'];
      const yData = [0, 1230, 425];
      const option = {
        backgroundColor: '#061326',
        grid: {
          top: '25%',
          left: '-5%',
          bottom: '5%',
          right: '5%',
          containLabel: true,
        },
        tooltip: {
          show: true,
        },
        animation: false,
        xAxis: [
          {
            type: 'category',
            data: ['本年话务总量', '本年人工话务量', '每万客户呼入量', '123', '123132'],
            axisTick: {
              alignWithLabel: true,
            },
            nameTextStyle: {
              color: '#82b0ec',
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#82b0ec',
              },
            },
            axisLabel: {
              textStyle: {
                color: '#fff',
              },
              margin: 30,
            },
          },
        ],
        yAxis: [
          {
            show: false,
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#fff',
              },
            },
            splitLine: {
              lineStyle: {
                color: '#0c2c5a',
              },
            },
            axisLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, -6], // 上部椭圆
            symbolPosition: 'end',
            z: 12,
            // "barWidth": "0",
            label: {
              normal: {
                  show: true,
                  position: 'top',
                  // "formatter": "{c}%"
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: '#34DCFF',
              },
            },
            color: '#2DB1EF',
            data: yData,
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, 7], // 下部椭圆
            // "barWidth": "20",
            z: 12,
            color: '#2DB1EF',
            data: yData,
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: function (d) {
                return d > 0 ? [50, 15] : [0, 0]
            },
            symbolOffset: [0, 12], // 下部内环
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#2EA9E5',
                borderType: 'solid',
                borderWidth: 1,
              },
            },
            data: yData,
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [70, 20],
            symbolOffset: [0, 18], // 下部外环
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#19465D',
                borderType: 'solid',
                borderWidth: 2,
              },
            },
            data: yData,
          },
          {
            type: 'bar',
            // silent: true,
            barWidth: '40',
            barGap: '10%', // Make series be overlap
            barCateGoryGap: '20%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                  {
                      offset: 0,
                      color: '#38B2E6',
                  },
                  {
                      offset: 1,
                      color: '#0B3147',
                  },
                ]),
                opacity: 0.8,
              },
            },
            data: yData,
          },
        ],
      };
      option && myChart.setOption(option);
    }
  },
  created(){
    
  },
  mounted(){
    this.initDemo1()
    this.initDemo2()
  }
}
</script>
<style>
</style>
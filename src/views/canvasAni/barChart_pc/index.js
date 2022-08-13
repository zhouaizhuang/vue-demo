import * as func from "./func.js"
export default {
  name: 'barChart',
  components:{},
  data(){
    return {
      statisticsArr: [
        {text: '1', value: 500}, {text: '2', value: 1200}, {text: '3', value: 2300}, {text: '4', value: 1100}, {text: '5', value: 2900},
        {text: '6', value: 2000}, {text: '7', value: 2500}, {text: '8', value: 2300}, {text: '9', value: 500}, {text: '10', value: 1650},
        {text: '11', value: 2900}, {text: '12', value: 2000}, {text: '13', value: 2500}, {text: '14', value: 2300}, {text: '15', value: 500},
        {text: '16', value: 1650}, {text: '17', value: 1650}, {text: '18', value: 2900}, {text: '19', value: 2000}, {text: '20', value: 2500},
        {text: '21', value: 2300}, {text: '22', value: 500}, {text: '23', value: 1650}, {text: '24', value: 1000}, {datextte: '25', value: 1700},
        {text: '26', value: 2300}, {text: '27', value: 1100}, {text: '28', value: 2900}, {text: '29', value: 2000}, {text: '30', value: 2600},
        {text: '31', value: 2500},
      ],
      timeIds: [],
    }
  },
  methods:{
    ...func,
  },
  created(){
  },
  mounted(){
    this.drawCanvasLeft()
    // 屏幕宽度调整的时候自动适配
    window.addEventListener('resize', () => {
      clearTimeout(this.timeIds[0])
      this.timeIds[0] = setTimeout(() => {
        this.timeIds[1] = setInterval(() => {
          const drawByDate = this.$refs.drawByDate
          if(drawByDate) {
            drawByDate.width = 50
            this.drawCanvasLeft()
            clearInterval(this.timeIds[1])
          }
        }, 100)
      }, 100)
    })
  },
}
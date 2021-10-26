
<template>
  <div class="a">
    <div class="b">
      <a href="#">张三</a>
      <h2>wx:ddd</h2>
      <span>我是一名前端开发攻城狮</span>
    </div>
    <div class="c">
      <div class="d" style="--i:1;--w:1.5"></div>
      <div class="d" style="--i:2;--w:1.6"></div>
      <div class="d" style="--i:3;--w:1.4"></div>
      <div class="d" style="--i:4;--w:1.7"></div>
      <div class="e" style="--i:1;"></div>
    </div>
    <div class="f"></div>
  </div>
</template>
<script>
export default {
  name: 'slide',
  data(){
    return {
    }
  },
  methods: {
    // 获取数据
   
  },
  created(){
  },
  beforeDestroy(){
  }
}
</script>
<style scoped>
.a{
  position: relative;
  width: 700px;
  height:400px;
  border: #fff 10px solid;
  background-color: rgb(120, 140,200);
  top: 120px;
  border-radius: 20px;
  overflow: hidden;
}
.b{
  position: absolute;
  width:200px;
  height:300px;
  left:0;
  margin: 75px 50px;
  transition: 1s;
}
.b a{
  text-decoration: none;
  color: #fff;
  font: 900 28px '';
}
.b h2{
  transition: .5s 1s;
  opacity: 0;
  color: rgb(30, 210, 200);
}
.b span{
  transition: .5s 1s;
  color: #fff;
  font: 500 15px '';
  position: absolute;
  top:70px;
}
.c{
  position: absolute;
  top: -130px;
  right: -240px;
}
.d, .e{
  position: absolute;
  right: calc(var(--i) * 100px);
  width: calc(var(--w) * 40px);
  height: 500px;
  overflow: hidden;
  border-radius: 100px;
  transform: rotateZ(220deg) translate(0, 0);
  background: rgb(240, 220, 150);
  transition: .5s .5s;
}
.d:nth-child(2) {
  background: rgb(240, 190, 230);
}
.e{
  left: -470px;
  top:-140px;
  width: 70px;
  background-color: rgb(90, 220, 150);
}
.a:hover .c div{
  transition: .5s calc(var(--i)*.1s);
  transform: rotateZ(220deg) translate(-200px, 400px);
}
.a:hover .b{
  transition: 1s .5s;
  left: 370px;
}
.a:hover .b span{
  transition: 1s .5s;
  top: 105px;
}
.a:hover .b h2{
  transition: 1s .5s;
  opacity: 1;
}
.f{
  width: 250px;
  height: 250px;
  position: absolute;
  background-image: url("qrcode.png");
  background-size: cover;
  margin: 70px;
  opacity: 0;
  transition: .5s;
}
.a:hover .f{
  transition: 1s 1.3s;
  opacity: 1;
}
</style>
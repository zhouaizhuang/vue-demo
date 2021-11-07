
<template>
  <div style="padding-bottom:300px;">
    <div class="f rw pb30">
      <div class="w50 f ac">
        <div class="fs24" style="width:150px;">绘制圆形</div>
        <div class="f1">
          <svg>
            <circle cx="65" cy="75" r="30" stroke="black" stroke-width="2" fill="red"></circle>
          </svg>
        </div>
      </div>
      <div class="w50 f ac">
        <div class="fs24" style="width:150px;">绘制矩形</div>
        <div class="f1">
          <svg  width="100%" height="100%" >
            <rect x="20" y="20" width="100" height="100" style="fill:blue;stroke:pink;stroke-width:5; fill-opacity:0.1;stroke-opacity:0.9"/>
          </svg>
        </div>
      </div>  
    </div>
    <div class="f rw pb30">
      <div class="w50 f ac">
        <div class="fs24" style="width:150px;">svg虚线</div>
        <div class="f1">
          <svg>
            <circle cx="80" cy="80" r="60" style="fill:none;stroke:deepskyblue;stroke-width:4px;stroke-dasharray:14px 4px 4px 4px;"></circle>
          </svg>
        </div>
      </div>
      <div class="w50 f ac">
        <div class="fs24" style="width:150px;">长弧</div>
        <div class="f1">
          <svg>
            <rect x="10" y="10" width="280" height="130" style="fill:none;stroke:deepskyblue;stroke-width:4px;stroke-dasharray:14px 4px 8px 4px;"></rect>
          </svg>
        </div>
      </div>  
    </div>
    <div class="f rw pb30">
      <div class="w50 f ac">
        <div class="fs24" style="width:150px;">绘制椭圆</div>
        <div class="f1">
          <svg>
            <ellipse cx="100" cy="100" rx="80" ry="40" style="fill:rgb(200,100,50); stroke:rgb(0,0,100);stroke-width:2"/>
          </svg>
        </div>
      </div>
      <div class="w50 f ac">
        <div class="fs24" style="width:150px;">绘制线条</div>
        <div class="f1">
          <svg  width="100%" height="100%" >
            <line x1="0" y1="0" x2="300" y2="300" style="stroke:rgb(99,99,99);stroke-width:2"/>
          </svg>
        </div>
      </div>  
    </div>
    <div class="f rw pb30">
      <div class="w50 f ac">
        <div class="fs24" style="width:150px;">嵌套g标签绘制</div>
        <div class="f1">
          <svg>
            <g transform="translate(100, 80)" stroke-width="2" stroke="pink" fill="transparent">
              <circle r="60" />
              <circle r="50"/>
              <circle r="40"/>
              <circle r="30"/>
            </g>
          </svg>
        </div>
      </div>
      <div class="w50 f ac">
        <div class="fs24" style="width:150px;">绘制文本</div>
        <div class="f1">
          <svg  width="100%" height="100%" >
            <text x="100" y="85" font-size="20" text-anchor="middle">我是文本</text>
          </svg>
        </div>
      </div>  
    </div>
    <div class="f rw pb30">
      <div class="w50 f ac">
        <div class="fs24" style="width:150px;">绘制image</div>
        <div class="f1">
          <svg>
            <image x="50" y="20" width="150" height="150" xlink:href="https://upload.qianfanyun.com/yjyn/ylyn_life_bg.png"></image>
          </svg>
        </div>
      </div>
      <div class="w50 f ac">
        <div class="fs24" style="width:150px;">绘制折线</div>
        <div class="f1">
          <svg  width="100%" height="100%" >
            <polyline points="50 50 200 10 230 90 102 80" stroke="black" stroke-width="5" fill="none"></polyline>
          </svg>
        </div>
      </div>  
    </div>
    <div class="f rw pb30">
      <div class="w50 f ac">
        <div class="fs24" style="width:150px;">多边形</div>
        <div class="f1">
          <svg>
            <polygon points="50,50,200,20,230,110,100,100" fill="none" stroke="black" stroke-width="5"></polygon>
          </svg>
        </div>
      </div>
      <div class="w50 f ac">
        <div class="fs24" style="width:150px;">路径绘制(path)</div>
        <div class="f1">
          <svg width="100%" height="100%" >
            <path d="M50,20L200,80L100,100Z" stroke="black" stroke-width="5" fill="none"></path>
          </svg>
        </div>
      </div>  
    </div>
    <div class="f rw pb30">
      <div class="w50 f ac">
        <div class="fs24" style="width:150px;">短弧</div>
        <div class="f1">
          <svg>
            <path d="M50,30A40,80,30,0,0,60,140" stroke="black" stroke-width="5" fill="none"></path>
          </svg>
        </div>
      </div>
      <div class="w50 f ac">
        <div class="fs24" style="width:150px;">长弧</div>
        <div class="f1">
          <svg>
            <path d="M50,30A40,80,30,1,1,60,140" stroke="black" stroke-width="5" fill="none"></path>
          </svg>
        </div>
      </div>  
    </div>
    <div class="f rw pb30">
      <div class="w50 f ac">
        <div class="fs24" style="width:150px;">折线转折点</div>
        <div class="f1">
          <svg width="0" height="0" style="position: absolute;">
            <defs>
              <marker id="markerCircle" markerWidth="8" markerHeight="8" refX="4" refY="4">
                <circle cx="4" cy="4" r="2.5" fill="#000" />
              </marker>
              <marker id="markerArrow" markerWidth="12" markerHeight="12" refX="2" refY="6" orient="auto">
                <path d="M2,3 L2,10 L8,6 L2,3" fill="#000" />
              </marker>
            </defs>
          </svg>
          <svg>
            <polyline fill="none" stroke="red" stroke-width="2px" marker-mid="url(#markerCircle)" points="20,100 50,60 80,80 110,20 140,60 170,40 200,90" />
          </svg>
        </div>
      </div>
      <div class="w50 f ac">
        <div class="fs24" style="width:150px;"></div>
        <div class="f1">
          <svg style="background-color: deepskyblue;fill: crimson;stroke: white;stroke-width: 6px;font-size: 36px; ">
            <text x="5" y="50">感谢您的正版支持</text>
            <text x="5" y="120" style="paint-order: stroke;">感谢您的正版支持</text>
          </svg>
        </div>
      </div>  
    </div>

    <div class="f rw pb30">
      <div class="w50 f ac">
        <div class="fs24" style="width:150px;">描边不会缩放</div> <!--《CSS新世界》P559-->
        <div class="f1">
          <svg style="display:none;">
            <symbol id="icon-plus" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="20" style="vector-effect: non-scaling-stroke;" /> <!--vector-effect: non-scaling-stroke;关键属性-->
              <path d="M25 15 L 25 35" style="vector-effect: non-scaling-stroke;"/>
              <path d="M15 25 L 35 25" style="vector-effect: non-scaling-stroke;"/>
            </symbol>
          </svg>              
          <h4 class="fill">原始图标</h4>
          <p><svg style="width: 50px; height: 50px;fill: none;stroke-width: 2px;stroke: #2486ff;stroke-linecap: round;"><use xlink:href="#icon-plus"></use></svg></p>
          <h4 class="fill">不设置vector-effect同时2倍放大</h4>
          <p><svg style="width:50px; height:50px;fill:none;stroke-width:2px;stroke:#2486ff;stroke-linecap:round;zoom:2;"><use xlink:href="#icon-plus"></use></svg></p>
          <h4 class="fill">设置vector-effect同时2倍放大</h4>
          <p><svg style="width: 100px; height: 100px;fill:none;stroke-width:2px;stroke:#2486ff;stroke-linecap:round;"><use xlink:href="#icon-plus"></use></svg></p>
        </div>
      </div>
      <div class="w50 f ac">
        <div class="fs24" style="width:150px;">长弧</div>
        <div class="f1">
          <svg>
            <path d="M50,30A40,80,30,1,1,60,140" stroke="black" stroke-width="5" fill="none"></path>
          </svg>
        </div>
      </div>  
    </div>

    
  </div>
</template>
<script>
export default {
  name: 'svgStudy',
  data(){
    return {
    }
  },
  methods:{
  },
  created(){
    
  }
}
</script>
<style>
/** 兼容firefox */
@supports not (zoom: 2) {
  .scale2 {
      transform-origin: 0 0;
      transform: scale(2);
      margin-bottom: 50px;
  }
}
</style>
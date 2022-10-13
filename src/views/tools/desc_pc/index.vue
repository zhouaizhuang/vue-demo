<template>
  <div>
    <div class="rel">
      <div class="fs28 g1890ff tc b pt10 mb15">在线加密解密工具</div>
      <div class="f abs r0 t30">
        <div class="f ac xc mr25">
          <div class="fs16 b mr15">自动识别:</div>
          <i-switch v-model="autoCapacity" />
        </div>
        <div class="f ac xc mr25">
          <div class="fs16 b mr15">自动格式化:</div>
          <i-switch v-model="autoFormate" />
        </div>
        <div class="f ac xc mr25">
          <div class="fs16 b mr15">点击复制:</div>
          <i-switch v-model="autoCopy" />
        </div>
      </div>
    </div>
    <div class="f ac xc pt10 mb20">
      <div class="f ac xc mr20">
        <div class="fs16 b mr15">请选择秘钥:</div>
        <div class="rel" style="width:280px;">
          <Input v-model="secret" placeholder="请输入或选择秘钥" @on-focus="() => isShowOpt = true" @on-blur="() => isShowOpt = false" @on-change="covertVal" /> 
          <Icon v-if="secret" @click="delVal" class="abs r2 t25" size="large" type="ios-close-circle" />
          <div :class="[isShowOpt ? 'op10 zx10' : 'op0 zx-1' , 'trans5 abs l0 r0 bgf rds5 pt10 pb10']" :style="{top:'110%', boxShadow: '0 1px 6px rgb(0 0 0 / 20%)', height: '150px', overflow:'auto'}">
            <div @click="selectItem(item)" v-for="item in keyOptions" :key="item.secret">
              <div :class="['poi hoverbg pl8 pr8 fs16 mb5']">{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="f ac xc mr20">
        <div class="fs16 b mr15">请选择偏移量:</div>
        <div class="rel" style="width:200px;">
          <Input v-model="iv" placeholder="请输入或选择偏移量" @on-focus="isShowIv = true" @on-blur="isShowIv = false" @on-change="covertVal" /> 
          <Icon v-if="iv" @click="delIv" class="abs r2 t25" size="large" type="ios-close-circle" />
          <div :class="[isShowIv ? 'op10 zx10' : 'op0 zx-1' , 'trans5 abs l0 r0 bgf rds5 pt10 pb10']" :style="{top:'110%', boxShadow: '0 1px 6px rgb(0 0 0 / 20%)', height: '150px', overflow:'auto'}">
            <div @click="selectIv(item)" v-for="item in ivOptions" :key="item.iv">
              <div :class="['poi hoverbg pl8 pr8 fs16 mb5']">{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div class="f mb5">
      <div class="f1 f xc">初始数据</div>
      <div class="f1 f xc">转换结果</div>
    </div>
    <div class="f pl15 pr15">
      <div class="f1 ">
        <Input v-model="oldVal" type="textarea" @on-change="covertVal" style="min-height:500px;" :autosize="{minRows: 25,maxRows: 100}" placeholder="请输入需要转换的值"></Input>
      </div>
      <div v-if="autoCapacity" :class="['fs18 f ac xc ml40 mr40', stateText.includes('成功') ? 'g1890ff' : stateText.includes('失败') ? 'gf10000' : 'g1890ff']" style="width:0;height:500px;">{{stateText}}</div>
      <div v-show="!autoCapacity" class="pt100" style="height:400px;width:80px;">
        <div class="mt30 f ac xc" @click="covertVal(1)"><Button type="success">解密</Button></div>
        <div class="mb30 mt100 f ac xc" @click="covertVal(2)"><Button type="info">加密</Button></div>
      </div>
      <div v-if="autoCopy" class="f1 ovh noCopy">
        <pre v-if="type == 1" class="hljs" v-copy="_newVal">
          <div v-if="autoFormate" v-html="newVal"></div>
          <div v-if="!autoFormate">{{_newVal}}</div>
        </pre>
        <div v-else class="pre wrap lba" v-copy="newVal">{{newVal}}</div>
      </div>
      <div v-else class="f1 ovh">
        <pre v-if="type == 1" class="hljs">
          <div v-if="autoFormate" v-html="newVal"></div>
          <div v-if="!autoFormate">{{_newVal}}</div>
        </pre>
        <div v-else class="pre wrap lba">{{newVal}}</div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style>
 pre {outline: 1px solid #ccc; padding: 5px; margin: 5px;border-radius:5px;min-height:530px;}
.pre {outline: 1px solid #ccc; padding: 5px; margin: 5px;border-radius:5px;min-height:530px;}
.string {color: #98C379;}
 .number {color: #D19A66;}
.boolean {color: #56B6C2;}
.null {color: #C586C0;}
.null { color: magenta; }
.key { color: #E06C61;}
.hoverbg:hover{
  background: #eee;
}
</style>
<template>
  <div>
    <div class="fs28 g1890ff tc b mb15">在线加密解密工具</div>
    <div class="f ac xc pt10 mb20">
      <div class="f ac xc mr20">
        <div class="fs16 b mr15">请选择秘钥:</div>
        <Select v-model="secret" style="width:240px;" @on-change="covertVal">
          <Option value="gagc#2017ABCDgagc#2017ABCD">测试环境(gagc**)</Option>
          <Option value="H5ZLBACzrQARj7FOtpwIpvnP">生产环境(H5Z**)</Option>
        </Select> 
      </div>
      <div class="f ac xc">
        <div class="fs16 b mr15">自动识别:</div>
        <i-switch v-model="autoCapacity" />
      </div>
    </div>
    <div class="f b mb5">
      <div class="f1 f xc">原始值</div>
      <div class="f1 f xc">转换后的值</div>
    </div>
    <div class="f pl15 pr15">
      <div class="f1 ovh">
        <Input v-model="oldVal" type="textarea" @on-change="covertVal" style="height:500px;" :autosize="{minRows: 25,maxRows: 100}" placeholder="请输入需要转换的值"></Input>
      </div>
      <div v-if="autoCapacity" :class="['fs18 f ac xc ml40 mr40', stateText.includes('成功') ? 'g1890ff' : stateText.includes('失败') ? 'gf10000' : 'g1890ff']" style="width:0;height:500px;">{{stateText}}</div>
      <div v-show="!autoCapacity" class="pt100" style="height:400px;width:80px;">
        <div class="mt30 f ac xc" @click="covertVal(1)"><Button type="success">解密</Button></div>
        <div class="mb30 mt100 f ac xc" @click="covertVal(2)"><Button type="info">加密</Button></div>
      </div>
      <div class="f1 ovh">
        <pre class="hljs">
          <div v-html="newVal"></div>
        </pre>
        <!-- <Input v-model="newVal" type="textarea" style="height:500px;" :autosize="{minRows: 25,maxRows: 100}" placeholder="这里是转换之后的值" readonly></Input> -->
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style>
 pre {outline: 1px solid #ccc; padding: 5px; margin: 5px;border-radius:5px;min-height:530px;}
.string {color: #98C379;}
 .number {color: #D19A66;}
.boolean {color: #56B6C2;}
.null {color: #C586C0;}
.null { color: magenta; }
.key { color: #E06C61;}
</style>
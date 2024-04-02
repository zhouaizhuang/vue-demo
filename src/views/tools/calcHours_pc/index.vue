<template>
  <div class="abs trbl0 pl30 pr30">
    <div class="fs30 tc b pt10 pb30">前端工时计算</div>
    <div class="f ac mb10">
      <div class="mr10 b">单页面估时：</div>
      <Input v-model="pageName" placeholder="请输入页面名称" style="width: 300px;margin-right:15px;" />
      <Button @click="addList" type="primary">新增数据</Button>
    </div>
    <div>
      <div class="f rw">
        <div v-for="item in checkList.filter(v => !v.type)" :key="item.id" class="f ac mr30 poi mb10">
          <div @click="checkedItem(item)" class="f ac">
            <div class="rds2 rel trans3 f ac xc mr5" :style="{width:'16px',height:'16px',background: item.isChecked ? '#1aada7' : '#fff', border: item.isChecked ? 'none' : '1px solid #dcdee2'}">
              <div v-show="item.isChecked" style="width:10px;height:5px;border-left:2px solid #fff;border-bottom:2px solid #fff;transform:translate(0, -1px) rotate(-45deg);"></div>
            </div>
            {{item.name}}
          </div> 
          <div :class="['ml5 mr10', item.isChecked ? '' : 'op0']">
            <InputNumber :min="0" v-model="item.hour" style="width:60px;"></InputNumber>
          </div>
        </div>
        <div v-for="(item, index) in checkList.filter(v => v.type == 'otherFunction')" :key="item.id" class="f ac mr30 poi mb10">
          <div @click="checkedItem(item)" class="f ac">
            <div class="rds2 rel trans3 f ac xc mr5" :style="{width:'16px',height:'16px',background: item.isChecked ? '#1aada7' : '#fff', border: item.isChecked ? 'none' : '1px solid #dcdee2'}">
              <div v-show="item.isChecked" style="width:10px;height:5px;border-left:2px solid #fff;border-bottom:2px solid #fff;transform:translate(0, -1px) rotate(-45deg);"></div>
            </div>
            <div class="mr5">其他功能{{ index + 1 }}</div>
          </div> 
          <div :class="['ml5 mr10', item.isChecked ? '' : 'op0']">
            <Input v-model="item.name" placeholder="请输入名称" style="width: 150px" />
            <InputNumber :min="0" v-model="item.hour" style="width:60px;"></InputNumber>
          </div>
        </div>
      </div>
    </div>
    <div class="b tc mt30 mb10">详细时间表</div>
    <div class="bdc tc auto" style="min-height:30vh;width:80vw">
      <div class="f bdbc b fs16">
        <div style="width:200px;" class="pt8 pb8 bdrc">页面名称</div>
        <div class="f1 f ac xc">具体功能</div>
        <div style="width:150px;" class="pt8 pb8 bdlc">页面耗时</div>
      </div>
      <div class="f bdbc fs14" v-for="item in selectList" :key="item.id">
        <div style="width:200px;" class="pt8 pb8 bdrc">{{item.name}}</div>
        <div class="f1 f ac rw pl10">
          <div class="mr30 f" v-for="v in item.checkList.filter(v => v.isChecked)">
            <div class="mr5">{{v.name}}:</div>
            <div class="mr10">{{v.hour}}h</div>
          </div>
        </div>
        <div style="width:150px;" class="pt8 pb8 bdlc">{{item.totalHour}}h</div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>
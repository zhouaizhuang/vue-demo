<template>
  <div class="pt50 pl20 pr20">
    <div class="mb20 f xe">
      <Button type="primary" class="mr10" style="height:31px;" @click="printManifest">打印出货单</Button>
    </div>
    <Table
      ref="deviceRef"
      border
      highlight-row
      height="550"
      :columns="deviceColumn"
      :data="deviceTableData"
      @on-row-click="deviceRowClick"
      @on-selection-change="changeSection"
    >
      <template slot-scope="{ row }" slot="code">
        <div v-if="row.isChecked" class="f">
          <Input class="f1 mr15" :value="row.code" @on-change="e => changeCode(e, row)" @on-enter="saveCode(row)" placeholder="请扫描或输入服务编码" style="width:150px;"></Input>
          <Button type="primary" size="small" @click="saveCode(row)">保存</Button>
        </div>
        <div v-else>{{row.code}}</div>
      </template>
      <template slot-scope="{ row }" slot="action">
        <Button type="primary" class="mr10" style="height:31px;" @click="editEquipment(row)" icon="md-create">编辑</Button>
      </template>
    </Table>
    <div class="f ac xe mt20">
      <Page :total="devicePageObj.totalCount" :page-size="10" show-total @on-change="e =>{ devicePageObj.page = e; getDeviceList() }" :current="devicePageObj.page" :pageSize="10"/>
    </div>
    <!--打印格式，不显示在页面上-->
    <div class="fixed trbl0 zx-1 dn">
      <div ref="printRef" class="bgf tc ml15 mr15">
        <div class="f b fs12 bgf5 bdbe">
          <div class="f1 pt20 pb20">服务编码</div>
          <div class="f1 pt20 pb20">设备名称</div>
          <div class="f1 pt20 pb20">设备类型</div>
          <div class="f1 pt20 pb20">设备品牌</div>
          <div class="f1 pt20 pb20">设备型号</div>
          <div class="pt20 pb20" style="width:180px;">保修截止日期</div>
        </div>
        <div class="f bdbe" v-for="item in printDeviceTableData" :key="item.id">
          <div class="f1 pt12 pb12">{{item.code}}</div>
          <div class="f1 pt12 pb12">{{item.name}}</div>
          <div class="f1 pt12 pb12">{{item.typeText}}</div>
          <div class="f1 pt12 pb12">{{item.brand}}</div>
          <div class="f1 pt12 pb12">{{item.model}}</div>
          <div class="pt12 pb12" style="width:180px;">{{item.guarantee_time}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
@media print {
  @page {margin: 0;}
  body {margin: 0;}
}
</style>
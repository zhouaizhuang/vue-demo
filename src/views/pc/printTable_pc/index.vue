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
    <div ref="printRef" :class="['fixed l0 t0 bgf bdc ovya h100vh borderBox p0']" :style="{width: 794 + 'px'}">
      <!--第一页-->
      <div ref="hainan1" class="w100 ovh bdc" :style="{height: 1120 + 'px'}">
        <div class="pl20 pr20 pt20 pb20">
          <div class="f ac xs fs12">
            <div class="f1">新北区三井人民医院</div>
            <div class="f1 f"><div class="mr2">体检号</div><div class="f1">2020042600007</div></div>
            <div class="f1 f"><div class="mr2">姓名</div><div class="f1">薛凤兰</div></div>
          </div>
          <div class="f ac fs12" style="border-bottom: 1px solid #ccc;">
            <div class="f1 f"><div class="mr2">性别</div><div class="f1">女</div></div>
            <div class="f1 f"><div class="mr2">年龄</div><div class="f1">69</div></div>
            <div class="f1 f"><div class="mr2">地址</div><div class="f1">世茂香槟湖17栋</div></div>
          </div>
          <div class="pt5 f ac xc fs20 b g0">
            <div class="mr2">第一人民医院</div>
            <div>超声医学影像报告单</div>
          </div>
        </div>
        <div class="pl20 pr20">
          <div class="bdc rds10 pt10 pb10 pl20" style="border:2px solid #000;border-radius: 10px 0 10px 0;">123</div>
          <div class="f ac xb pt20 pb20">
            <div class="w0 h0" style="transform:translateY(-20px);border-top:30px solid transparent;border-right:30px solid transparent;border-left:30px solid transparent;border-bottom:30px solid #000;"></div>
            <svg t="1685107083093" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2991" width="48" height="48"><path d="M0 0h1024v1024H0z" fill="#FFFFFF" p-id="2992"></path><path d="M228 80c-44.112 0-80 35.888-80 80v704c0 44.112 35.888 80 80 80h626c44.112 0 80-35.888 80-80V160c0-44.112-35.888-80-80-80H228m0-80h626c88.366 0 160 71.634 160 160v704c0 88.366-71.634 160-160 160H228c-88.366 0-160-71.634-160-160V160c0-88.366 71.634-160 160-160z" fill="#707070" p-id="2993"></path><path d="M310 432h464a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H310a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12zM310 626h464a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H310a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12zM310 238h464a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H310a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12zM22 250h178a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H22a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12zM22 694h178a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H22a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12z" fill="#707070" p-id="2994"></path></svg>
            <svg t="1685107103865" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4219" width="48" height="48"><path d="M993.534 77.766H30.466C13.64 77.766 0 91.406 0 108.232v652.166c0 16.826 13.64 30.466 30.466 30.466h335.126v94.438h-111.64c-16.826 0-30.466 13.64-30.466 30.466s13.64 30.466 30.466 30.466h516.112c16.826 0 30.466-13.64 30.466-30.466s-13.64-30.466-30.466-30.466h-111.64v-94.438h335.11c16.826 0 30.466-13.64 30.466-30.466V108.232c0-16.826-13.64-30.466-30.466-30.466zM597.488 885.302h-170.966v-94.438h170.966v94.438z m365.58-155.37H60.932v-51.89h902.134v51.89z m0-112.824H60.932V138.698h902.134v478.41z" p-id="4220"></path></svg>
          </div>
        </div>
        <div>
          <div class="capitalize mb20">hello, I am Tom.测试首字母大写</div>
          <div class="ti2 mb20">测试首航缩进2字符</div>
          <div class="b mb20 fs24">24px文字加粗</div>
          <div class="tl mb20">文字右对齐</div>
          <div class="tc mb20">文字居中</div>
          <div class="tr mb20">文字右对齐</div>
          <div class="tdu mb20">文字下划线</div>
          <div class="tdl mb20">文字删除线</div>
          <!-- <div class="mb20" style="box-shadow:2px 2px 2px 2px rgba(0,0,0,.2);">文字阴影</div> -->
          <!-- background-image -->
          <!-- transform -->
        </div>
      </div>
      <!--第二页-->
      <div ref="hainan2" class="w100 ovh bdc" :style="{height: 1120 + 'px'}">
        第二页
        <div class="pl20 pr20">
          <div class="bdc rds10 pt10 pb10 pl20" style="border:2px solid #000;border-radius: 10px 0 10px 0;">123</div>
          <div class="f ac xb pt20 pb20">
            <div class="w0 h0" style="transform:translateY(-20px);border-top:30px solid transparent;border-right:30px solid transparent;border-left:30px solid transparent;border-bottom:30px solid #000;"></div>
            <svg t="1685107083093" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2991" width="48" height="48"><path d="M0 0h1024v1024H0z" fill="#FFFFFF" p-id="2992"></path><path d="M228 80c-44.112 0-80 35.888-80 80v704c0 44.112 35.888 80 80 80h626c44.112 0 80-35.888 80-80V160c0-44.112-35.888-80-80-80H228m0-80h626c88.366 0 160 71.634 160 160v704c0 88.366-71.634 160-160 160H228c-88.366 0-160-71.634-160-160V160c0-88.366 71.634-160 160-160z" fill="#707070" p-id="2993"></path><path d="M310 432h464a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H310a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12zM310 626h464a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H310a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12zM310 238h464a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H310a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12zM22 250h178a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H22a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12zM22 694h178a12 12 0 0 1 12 12v56a12 12 0 0 1-12 12H22a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12z" fill="#707070" p-id="2994"></path></svg>
            <svg t="1685107103865" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4219" width="48" height="48"><path d="M993.534 77.766H30.466C13.64 77.766 0 91.406 0 108.232v652.166c0 16.826 13.64 30.466 30.466 30.466h335.126v94.438h-111.64c-16.826 0-30.466 13.64-30.466 30.466s13.64 30.466 30.466 30.466h516.112c16.826 0 30.466-13.64 30.466-30.466s-13.64-30.466-30.466-30.466h-111.64v-94.438h335.11c16.826 0 30.466-13.64 30.466-30.466V108.232c0-16.826-13.64-30.466-30.466-30.466zM597.488 885.302h-170.966v-94.438h170.966v94.438z m365.58-155.37H60.932v-51.89h902.134v51.89z m0-112.824H60.932V138.698h902.134v478.41z" p-id="4220"></path></svg>
          </div>
        </div>
      </div>
      <!--第三页-->
      <div ref="hainan3" class="w100 ovh bdc" :style="{height: 1120 + 'px'}">
        第三页
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
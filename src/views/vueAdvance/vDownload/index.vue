<template>
  <div class="mh100vh tc pt50">
    <div class="mb30">
      <div
        v-download="{
          type:'png',
          url: 'https://cimc.gagctv.com/admin-api/infra/file/4/get/e9165f9b73db20b1404532239c17c703fe9138c92867da755a0e4343ed6cabbb.png',
          name: '踝肱血压比值检测(ABI).png'
        }"
        class="g1890ff poi dib"
        style="border-bottom:1px solid #1890ff;"
      >
        下载图片报告
      </div>
    </div>
    <div class="mb30">
      <div
        v-download="{
          type:'png',
          url: 'https://cimc.gagctv.com/admin-api/infra/file/4/get/59830731406b592b46fa84da011c93bb5a1c50c35bac05a515ca66262f191519.pdf',
          name: '眼底检查.pdf'
        }"
        class="g1890ff poi dib"
        style="border-bottom:1px solid #1890ff;"
      >
        下载pdf报告
      </div>
    </div>
    <div class="mb30">
      <div
        v-download="{
          type:'blob',
          url: '/admin-api/diag/physicalIndicatorsData/downTemplate',
          name: '导入模板.xlsx'
        }"
        class="g1890ff poi dib"
        style="border-bottom:1px solid #1890ff;"
      >
        下载导入模板
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>
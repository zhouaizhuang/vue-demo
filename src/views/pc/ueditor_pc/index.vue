<template>
  <div>
    <div style="width:800px;" class="auto pt100">
      <Ueditor :msg="msg" @change="e => msg = e" class='w100'></Ueditor>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>
<template>
  <div class="trbl0 abs bg2" >
    <div class="pt100 f ac xc">
      <div class="mr30">
        <CardCount :num="hour" @setNum="e => hour = e"></CardCount>
      </div>
      <div class="mr30">
        <CardCount :num="minutes" @setNum="e => minutes = e"></CardCount>
      </div>
      <CardCount :num="seconds" @setNum="e => seconds = e"></CardCount>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>
<template>
  <div class="mh100vh pl20 pr20 pt20">
    <Calendar :date="date" @setDate="e => date = e"></Calendar>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>
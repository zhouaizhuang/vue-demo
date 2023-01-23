<template>
  <div class="mh100vh pl20 pr20 pt20">
    <List :list="list" @getMore="() => {page++;getList()}">
      <div
        v-for="(item, index) in list"
        :key="item.id"
        class="rds10 bgf mb20 pt30 pb30 pl15 pr15" 
        style="box-shadow:2px 2px 2px 2px rgba(0,0,0,.2);"
      >
        {{index + 1}}
      </div>
    </List>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>
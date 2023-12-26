<template>
  <div>
    <!-- max-height="1200" -->
    <Table
      :loading="loading"
      ref="table"
      :columns="columns"
      :data="tableData"
      border
      highlight-row
      :height="tableHeight"
      row-key
      :rowClassName="rowClassName"
      @on-select-all="e => $emit('selectAll', e.length == 0)"
      @on-selection-change="e => $emit('changeSelect', e)"
      @on-row-click="e => $emit('rowClick', e)"
      @on-sort-change="e => $emit('changeSort',e)"
    >
      <template
        v-for="item in columns"
        :slot="item.slot ? item.slot : ''"
        slot-scope="params"
      >
        <slot :name="item.slot ? item.slot : ''" v-bind="params"></slot>
      </template>
    </Table>
    <div class="f ac xe mt20">
      <Page 
        :total="totalCount" :page-size="10" :page-size-opts="[10, 20, 50, 100]"
        :current="page" :pageSize="pageSize" show-total show-elevator show-sizer
        @on-change="changePage" @on-page-size-change="changePageSize" 
        transfer
      />
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>
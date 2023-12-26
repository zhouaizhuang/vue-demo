<template>
  <div class="cusTable rel">
    <HighTable
      :columns="tableObj.head"
      :tableData="tableObj.list"
      @changePage="changePage"
      @changePageSize="changePageSize"
      @changeSelect="changeSelect"
      :rowClassName="(row, index)=>row.disabled ? 'gc' : ''"
      :totalCount="tableObj.totalCount"
      :page="tableObj.currentPage"
      class=""
      :loading="tableObj.loading"
    >
      <template
        v-for="item in tableObj.head"
        :slot="item.slot ? item.slot : ''"
        slot-scope="params"
      >
        <slot :name="item.slot ? item.slot : ''" v-bind="params"></slot>
      </template>
    </HighTable>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css'></style>
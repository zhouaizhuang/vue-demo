<template>
  <div class="customcss">
    <div class="bgf rds5 abs trbl0">
      <div class="bgf fs14 pl20 pr20 pt20 pb20 rds5 abs trbl0 ovya" style="overflow:scroll;margin:0 -20px -20px 0;">
        <div class="f as mb20">
          <div class="f1 fs16 b">
            <Button @click="add" style="margin-right: 5px;background:#1AADA7;color:#fff;">新增员工</Button>
          </div>
          <div>角色：</div>
          <Select v-model="searchObj.job" style="width: 150px;" class="mr30">
            <Option v-for="item in [{id:1, name:'医生'}]" :key="item.id" :value="item.id">{{item.name}}</Option>
          </Select>
          <div>状态：</div>
          <Select v-model="searchObj.status" style="width: 150px;" class="mr30">
            <Option value="">全部</Option>
            <Option value="0">正常</Option>
            <Option value="1">停用</Option>
          </Select>
          <div>医生：</div>
          <Input v-model="searchObj.doctor" style="width: 150px;" placeholder="姓名/手机号" class="mr30"></Input>
          <Button @click="search" icon="ios-search" class="mr15" style="background:#1AADA7;color:#fff;">查询</Button>
          <Button @click="resetSearch" icon="md-refresh" style="margin-right: 5px;background:#fff;color:#1AADA7;border-color: #1AADA7;">重置</Button>
        </div>
        <HighTable
          :columns="tableColumns"
          :tableData="tableData"
          :totalCount="pageObj.totalCount"
          :page="pageObj.page"
          @changePage="e => {pageObj.page = e;getList()}"
          @changePageSize="e => {pageObj.pageSize = e;getList()}"
        >
          <template slot-scope="{row}" slot="action">
            <div class="f ac xc">
              <div @click="resetPassword(row)" class="mr10 g1aada7 poi">重置密码</div>
              <div @click="changeStatus(row)" class="mr10 g1aada7 poi">{{row.state == 1 ? '停用' : '启用'}}</div>
              <div @click="edit(row)" class="g1aada7 poi">编辑</div>
            </div>
          </template>
        </HighTable>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.css"></style>
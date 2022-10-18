<template>
  <div class="w80 auto">
    <Form ref="accountRef" :model="accountObj" :rules="accountRule" :label-width="120" autocomplete="off">
      <FormItem label="登录账号:" prop="account">
        <Input v-model="accountObj.account" placeholder="请输入登录账号"></Input>
      </FormItem>
      <FormItem label="登录密码:" prop="pwd">
        <Input v-model="accountObj._pwd" @on-change="inputPwd" type="text" placeholder="请输入登录密码"></Input>
      </FormItem>
    </Form>
    <div class="tc">
      <Button type="primary" @click="submit">提交</Button>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>
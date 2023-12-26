<template>
  <div class="f rw xb">
    <template v-for="item in formList">
      <div v-if="item.isShow" :class="[item.type == 'blank' ? '' : 'mb20', 'borderBox', item.class]" :style="item.style" :key="item.id">
        <!--插槽-->
        <div v-if="item.slot">
          <slot :name="item.slot ? item.slot : ''" :row="item"></slot>
        </div>
        <!--非插槽-->
        <div v-else>
          <CusBlank v-if="item.type == 'blank'" :item="item" :formList="formList" @setFormList="e => $emit('setFormList', e)"></CusBlank>
          <CusText v-if="item.type == 'text'" :item="item" :formList="formList" @setFormList="e => $emit('setFormList', e)"></CusText>
          <CusInput v-if="item.type == 'input'" :item="item" :formList="formList" @setFormList="e => $emit('setFormList', e)"></CusInput>
          <CusDate v-if="item.type == 'date'" :item="item" :formList="formList" @setFormList="e => $emit('setFormList', e)"></CusDate>
          <CusSelect v-if="item.type == 'select'" :item="item" :formList="formList" @setFormList="e => $emit('setFormList', e)"></CusSelect>
          <TextArea v-if="item.type == 'textArea'" :item="item" :formList="formList" @setFormList="e => $emit('setFormList', e)"></TextArea>
          <CusDash v-if="item.type == 'dash'" :item="item" :formList="formList" @setFormList="e => $emit('setFormList', e)"></CusDash>
          <CusRadio v-if="item.type == 'radio'" :item="item" :formList="formList" @setFormList="e => $emit('setFormList', e)"></CusRadio>
          <CusIdCard v-if="item.type == 'idCard'" :item="item" :formList="formList" @setFormList="e => $emit('setFormList', e)"></CusIdCard>
          <CusAddress v-if="item.type == 'address'" :item="item" :formList="formList" @setFormList="e => $emit('setFormList', e)"></CusAddress>
          <CusTag v-if="item.type == 'tag'" :item="item" :formList="formList" @setFormList="e => $emit('setFormList', e)"></CusTag>
        </div>
      </div>
    </template>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>
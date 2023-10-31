<template>
  <div class="customcss">
    <div :class="['fixed trbl0 trans3', modalType > 0 ? 'op10 zx10' : 'op0 zx-1 dn']" style="background:rgba(55,55,55,.6)">
      <div :class="['fixed bgf tx-50 l50 t10 rds5 trans5', modalType > 0 ? 'op10 zx20 ani-large' : 'op0 zx-1 ani-small']" style="width:1000px;">
        <!--标题-->
        <div class="f ac pl10 rds5" style="background:#f5f7fa;">
          <div class="fs16 b f1 none pl20">新增菜单</div>
          <div @click.stop="$emit('setModalType', 0);" class="f ac xc poi" style="height:50px;width:50px;"><svg t="1671764723022" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2737" width="12" height="12"><path d="M1007.603202 929.818395L592.684241 514.699473 1007.603202 99.780512c10.797891-10.797891 16.196837-24.795157 16.196837-38.992385 0-13.997266-5.398946-28.194493-16.196837-38.992384-21.595782-21.595782-56.388987-21.595782-77.984768 0L514.699473 436.914665 99.780512 21.795743C78.18473 0.199961 43.391525 0.199961 21.795743 21.795743s-21.595782 56.388987 0 77.984769l415.118922 414.918961L21.795743 929.818395c-21.595782 21.595782-21.595782 56.388987 0 77.984768s56.388987 21.595782 77.984769 0l414.918961-415.118922L929.818395 1007.603202c10.797891 10.797891 24.795157 16.196837 38.992384 16.196837 13.997266 0 28.194493-5.398946 38.992384-16.196837 21.395821-21.395821 21.395821-56.388987-0.199961-77.784807z" fill="#999999" p-id="2738"></path></svg></div>
        </div>
        <!--内容-->
        <div style="min-height:500px;max-height:700px;" class="ovya pl30 pr30 pt30 pb30">
          <Form :ref="refId" :model="formData" :rules="formRule" label-position="right" :label-width="90">
            <div class="f">
              <div class="f1 mr20">
                <FormItem label="登录账号" prop="account">
                  <Input v-model="formData.account" style="width:100%;" placeholder="请输入"></Input>
                </FormItem>
              </div>
              <div class="f1">
                <FormItem label="登录密码" prop="password" :rules="modalType == 2 ?  [{ required: false }] : formRule.password">
                  <Input v-model="formData.password" type="password" style="width:100%;" placeholder="请输入" :disabled="modalType!=1"></Input>
                </FormItem>
              </div>
            </div>
            <FormItem label="在校时间" prop="inSchoolTime">
              <DatePicker :editable="false" type="daterange" v-model="formData.inSchoolTime" placeholder="请选择" style="width:100%"></DatePicker>
            </FormItem>
            <FormItem label="年龄" prop="age">
              <Select v-model="formData.age" transfer placeholder="请选择">
                <Option v-for="(item, index) in (new Array(100).fill(1).map((v, i) => String(i+1)))" :key="index" :value="item">{{item}}</Option>
              </Select>
            </FormItem>
            <FormItem label="家庭住址" prop="address">
              <SelectAddress
                :provinceCode="formData.provinceCode"
                :cityCode="formData.cityCode"
                :areaCode="formData.areaCode"
                :address="formData.address"
                @setProvinceCode="({id, name})=>{formData.provinceCode=id;formData.provinceName=name;}"
                @setCityCode="({id, name})=>{formData.cityCode=id;formData.cityName=name}"
                @setAreaCode="({id, name})=>{formData.areaCode=id;formData.areaName=name}"
                @setAddress="e=>{formData.address=e;}"
              >
              </SelectAddress>
            </FormItem>
            <FormItem label="个人头像" prop="avatar">
              <UploadImgs :max_size="2*1024*1024" :width="800" :height="800" :limit="1" :imgArr="formData.avatar" @setImgArr="e => formData.avatar = e" />
            </FormItem>
          </Form>
        </div>
        <!--底部按钮-->
        <div class="f ac xe pt10 pl10 pr15 pb10 rds5" style="background:#f5f7fa;">
          <div @click.stop="$emit('setModalType', 0);" class="g1aada7 poi mr20 rds4 f ac xc fs14" style="border:1px solid #1aada7;width:80px;height:32px;">取消</div>
          <div @click.stop="submit" class="gf poi mr10 rds4 f ac xc fs14" style="background:#1AADA7;border:1px solid #1aada7;width:80px;height:32px;">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.css"></style>
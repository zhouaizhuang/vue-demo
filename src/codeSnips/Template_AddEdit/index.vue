<template>
  <div class="customcss">
    <Modal label-position="top" :value="modalType != 0" :styles="{top:'60px'}" :width="1000" :mask-closable="false" :closable="false" class-name="formAddEditModal">
      <div slot="header" class="f">
        <div class="fs14 b f1">{{modalTitle}}</div>
        <svg t="1687312934309" class="poi" @click="closeModal" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2270" width="12" height="12"><path d="M632.117978 513.833356l361.805812 361.735298a85.462608 85.462608 0 1 1-121.001515 120.789974L511.116463 634.552816 146.913186 998.756094a86.026718 86.026718 0 0 1-121.706652-121.706652L389.480325 512.775651 27.674513 150.969839A85.392095 85.392095 0 0 1 148.393973 30.250379L510.199785 392.056191l366.671258-366.671258a86.026718 86.026718 0 0 1 121.706652 121.706652z" p-id="2271" fill="#999999"></path></svg>
      </div>
      <div style="min-height:500px;max-height:700px;" class="ovya pr20">
        <Form :ref="refId" :model="formData" :rules="formRule" label-position="right" :label-width="90">
          <!--第一行-->
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
          <!--第二行-->
          <FormItem label="在校时间" prop="inSchoolTime">
            <DatePicker type="daterange" v-model="formData.inSchoolTime" placeholder="请选择" style="width:100%"></DatePicker>
          </FormItem>
          <!--第三行-->
          <FormItem label="年龄" prop="age">
            <Select v-model="formData.age" transfer placeholder="请选择">
              <Option v-for="(item, index) in (new Array(100).fill(1).map((v, i) => String(i+1)))" :key="index" :value="item">{{item}}</Option>
            </Select>
          </FormItem>
          <!--第四行-->
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
          <!--第五行-->
          <FormItem label="收货住址" prop="address">
            <SelectAddressPlus
              :provinceCode="formData.provinceCode"
              :cityCode="formData.cityCode"
              :areaCode="formData.areaCode"
              :townCode="formData.townCode"
              :villageCode="formData.villageCode"
              :address="formData.address"
              @setProvinceCode="({id, name})=>{formData.provinceCode=id;formData.provinceName=name;}"
              @setCityCode="({id, name})=>{formData.cityCode=id;formData.cityName=name}"
              @setAreaCode="({id, name})=>{formData.areaCode=id;formData.areaName=name}"
              @setTownCode="({id, name})=>{formData.townCode=id;formData.townName=name}"
              @setVillageCode="({id, name})=>{formData.villageCode=id;formData.villageName=name}"
              @setAddress="e=>{formData.address=e;}"
            >
            </SelectAddressPlus>
          </FormItem>
          <!--第六行-->
          <FormItem label="个人头像" prop="avatar">
            <UploadImgs :max_size="2*1024*1024" :width="800" :height="800" :limit="1" :imgArr="formData.avatar" @setImgArr="e => formData.avatar = e" />
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <span @click="closeModal" class="fs14 mr20 poi">取消</span>
        <Button @click="submit" type="info" style="margin-right: 5px;background:#1AADA7;color:#fff;">确定</Button>
      </div>
    </Modal>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.css"></style>
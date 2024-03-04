<template>
  <div>
    <div class="f">
      <transition-group 
        name="drag"
        tag="ul"
        class="auto rel f xs"
      >
        <li
          @dragstart="e => dragstart(e, index)"
          @dragenter="e => dragenter(e, index)"
          @dragover="e => e.preventDefault()"
          draggable
          class="mr20 rel rds5 ovh" style="width:70px;height:70px;"
          v-for="(item, index) in imgList"
          :key="item.id"
        >
          <div class="h100 topBg" :style="{backgroundImage: 'url(' + item.url + ')' }">
            <div class="trbl0 abs topMask zx100" style="background: rgba(0, 0, 0, 0.6);">
              <div class="h100 f ac xb rw">
                <Icon type="ios-eye-outline" class="gf poi" size="28"  @click.stop="handleView(item.url)" />
                <Icon type="ios-trash-outline" class="gf poi" size="28" @click.stop="handleRemove(item.id)"></Icon>
                <Icon v-if="isShowEdit" type="ios-create-outline" class="gf poi" size="28" @click.stop="handleEdit(item)"></Icon>
                <!-- <Icon type="ios-trash-outline" class="gf poi" size="28" @click.stop="handleRemove(item.id)"></Icon> -->
              </div>
            </div>
          </div>
        </li>
      </transition-group>
      <label
        v-show="limit > imgList.length"
        :for="refId"
        :class="['rel picture', errmsg ? 'errBd' : 'commonBd']"
        @dragover="dropOver"
        @drop="drop"
      >
        <!--支持多选需要开始这个值，同时后端要支持多选才行 multiple="multiple" -->
        <input
          accept=".png,.jpg,.jpeg"
          type="file"
          :ref="refId"
          :id="refId"
          v-show="false"
          @change="changeFile"
        />
      </label>
      <div class="f1"></div>
      <!-- multiple="multiple" 是否支持一次上传多张图片 -->
    </div>
    <div class='gc fs12' v-if="maxSize > 1024 * 1024">大小 {{Math.round(maxSize/1024/1024)}}M 以下，建议尺寸 {{width}} x {{height}} px，(最多{{limit}}张)<span v-if="limit > 1">,可拖动排序</span></div>
    <div class='gc fs12' v-else>大小 {{Math.round(maxSize/1024)}}KB 以下，建议尺寸 {{width}} x {{height}} px，(最多{{limit}}张)<span v-if="limit > 1">,可拖动排序</span></div>
    <!--图片裁剪-->
    <ClipImg
      :isShow="isShowClip"
      @setIsShow="setIsShow"
      :item="curItem"
      @setItem="setItem"
      :width="width"
      :height="height"
    >
    </ClipImg>
    <!-- 初始效果
       <Modal title="预览图" v-model="isShowPreview">
        <img :src="curImg" v-if="isShowPreview" style="width: 100%">
      </Modal> -->
    <!--图片预览-->
    <PreviewImgs
      :isShow="isShowPreview"
      @setIsShow="e => isShowPreview = e"
      :curImg="curImg"
      @setCurImg="e => curImg = e"
      :imgArr="previewArr"
     >
     </PreviewImgs>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.css"></style>
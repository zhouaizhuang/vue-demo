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
              <div class="h100 f ac xc">
                <Icon type="ios-eye-outline" class="gf poi" size="28"  @click.native="handleView(item.url)" />
                <Icon type="ios-trash-outline" class="gf poi" size="28" @click.native="handleRemove(item.id)"></Icon>
              </div>
            </div>
          </div>
        </li>
      </transition-group>
      <div v-if="this.limit > this.imgList.length" class='picture rel' @click="selectFile"></div>
      <div class="f1"></div>
      <!-- multiple="multiple" 是否支持一次上传多张图片 -->
      <input
        accept=".png,.jpg,.jpeg"
        type="file"
        ref="uploadInput"
        v-show="false"
        @change="getAndFormatFile"
      />
      
    </div>
    <div class='gc fs12' v-if="max_size > 1024 * 1024">大小 {{Math.round(max_size/1024/1024)}}M 以下，建议尺寸 {{width}} x {{height}} px，(最多{{limit}}张),可拖动排序</div>
    <div class='gc fs12' v-else>大小 {{Math.round(max_size/1024)}}KB 以下，建议尺寸 {{width}} x {{height}} px，(最多{{limit}}张)， 可拖动排序</div>
    <!-- 初始效果
       <Modal title="预览图" v-model="isShowPreview">
        <img :src="curImg" v-if="isShowPreview" style="width: 100%">
      </Modal> -->
    <!--图片预览-->
    <PreviewImg
      :isShow="isShowPreview"
      @setIsShow="e => isShowPreview = e"
      :curImg="curImg"
      @setCurImg="e => curImg = e"
      :imgArr="previewArr"
     >
     </PreviewImg>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.css" scoped></style>
<template>
  <ModalRender :modalObj="modalObj" @setModalObj="e => modalObj = e" @changeModal="e => changeModal(e)">
    <div>
      <div class="f xe pt20 customcss">
        <div class="f1">
          <div class="w100" style="height: 300px;">
            <vue-cropper class="auto" style="width:400px;height: 300px;" ref="cropper" :img="option.img"
              :outputSize="option.outputSize" :outputType="option.outputType" :info="option.info" :canScale="option.canScale"
              :autoCrop="option.autoCrop" :autoCropWidth="option.autoCropWidth" :autoCropHeight="option.autoCropHeight"
              :fixed="option.fixed" :fixedNumber="option.fixedNumber" :full="option.full" :fixedBox="option.fixedBox"
              :canMove="option.canMove" :canMoveBox="option.canMoveBox" :original="option.original"
              :centerBox="option.centerBox" :height="option.height" :infoTrue="option.infoTrue"
              :maxImgSize="option.maxImgSize" :enlarge="option.enlarge" :mode="option.mode" @realTime="realTime"
              @imgLoad="imgLoad">
            </vue-cropper>
          </div>
          <!--底部操作工具按钮-->
          
        </div>
        <!--预览效果图-->
        <div class="f1 f cn ac">
          <div class="bdc f ac xc" style="min-width: 300px;min-height: 300px;">
            <div :style="previews.div" class="ovh">
              <img :src="previews.url" :style="previews.img">
            </div>
          </div>
          <div class="mt10">预览图</div>
        </div>
      </div>
      <div class="f xc mt30 footer-btn pb30">
        <div class="f xb">
          <!-- <label class="btn f ac mr10" for="uploads"><span>选择图片</span></label>
          <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/jpg, image/bmp" @change="selectImg($event)"> -->
          <div class="f xb">
            <Button class="mr10" type="info" :disabled="!option.img" plain icon="ios-add-circle-outline" @click="changeScale(0.5)">放大</Button>
            <Button class="mr10" type="info" :disabled="!option.img" plain icon="ios-remove-circle-outline" @click="changeScale(-0.5)">缩小</Button>
            <Button class="mr10" type="primary" :disabled="!option.img" plain @click="rotateLeft">↺ 左旋转</Button>
            <Button class="mr10" type="primary" :disabled="!option.img" plain @click="rotateRight">↻ 右旋转</Button>
            <!-- <Button class="mr10" type="error" :disabled="!option.img" plain @click="removeImg">关闭</Button> -->
            <Button class="mr10" type="error" :disabled="!option.img" plain @click="toOrigin">复原</Button>
            <!-- <Button class="mr10" type="success" :disabled="!option.img" @click="uploadImg">确认裁剪</Button> -->
            <!-- <Button type="success" :disabled="!option.img"  @click="downloadImg">下载</Button> -->
          </div>
        </div>
      </div>
    </div>
  </ModalRender>
  
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>
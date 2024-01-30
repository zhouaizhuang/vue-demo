<template>
  <div :class="['fixed trbl0 trans3', modalObj.isShow ? 'op10' : 'op0 dn']" :style="{background:'rgba(55,55,55,.6)', zIndex: zIndex}">
    <div :class="['fixed bgf tx-50 l50 t15 rds5 trans3 t3d0', modalObj.isShow ? 'op10 ani-large' : 'op0 ani-small',  modalObj.header && modalObj.header.isShow ? 'pt50' : '', modalObj.footer && modalObj.footer.isShow ? 'pb52' : '']" :style="`z-index:${modalObj.isShow ? zIndex + '1' : -1};${modalObj.style}`">
      <!--顶部标题-->
      <!-- <slot v-if="modalObj.headerSlot" name="header" :row="modalObj"></slot> -->
      <div v-if="modalObj.header && modalObj.header.isShow" class="f ac pl10 abs t0 l0 r0" style="height:50px;background:#f5f7fa;border-radius: 5px 5px 0 0;">
        <div class="fs16 b f1 none pl20">{{modalObj.header.title}}</div>
        <div v-if="modalObj.header && modalObj.header.isShowClose" @click.stop="closeModal" class="f ac xc poi" style="height:50px;width:50px;"><svg t="1671764723022" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2737" width="12" height="12"><path d="M1007.603202 929.818395L592.684241 514.699473 1007.603202 99.780512c10.797891-10.797891 16.196837-24.795157 16.196837-38.992385 0-13.997266-5.398946-28.194493-16.196837-38.992384-21.595782-21.595782-56.388987-21.595782-77.984768 0L514.699473 436.914665 99.780512 21.795743C78.18473 0.199961 43.391525 0.199961 21.795743 21.795743s-21.595782 56.388987 0 77.984769l415.118922 414.918961L21.795743 929.818395c-21.595782 21.595782-21.595782 56.388987 0 77.984768s56.388987 21.595782 77.984769 0l414.918961-415.118922L929.818395 1007.603202c10.797891 10.797891 24.795157 16.196837 38.992384 16.196837 13.997266 0 28.194493-5.398946 38.992384-16.196837 21.395821-21.395821 21.395821-56.388987-0.199961-77.784807z" fill="#999999" p-id="2738"></path></svg></div>
      </div>
      <div class="rel">
        <!--中间导入组件-->
        <ImportExcel v-if="modalObj.import && modalObj.import.isShow" :modalType="importModalType" @setModalType="e => importModalType = e" :modalObj="modalObj"></ImportExcel>
        <!--内容-->
        <slot></slot>
      </div>
      <!--底部按钮-->
      <!-- <slot v-if="modalObj.isShowFooter" name="footer" :row="modalObj"></slot> -->
      <div v-if="modalObj.footer && modalObj.footer.isShow" :class="['abs b0 l0 r0 f ac pt10 pl20 pr20 pb10 rds5 borderBox', modalObj.footer.textAlign == 'left' ? 'xs' : modalObj.footer.textAlign == 'center' ? 'xc' :'xe' ]" style="height:52px;background:#f5f7fa;border-radius:0 0 5px 5px;">
        <div v-if="modalObj.footer && modalObj.footer.isShowClose" @click.stop="handleClose" class="gf poi rds4 mr20 f ac xc fs14" style="background:#1AADA7;border:1px solid #1aada7;width:80px;height:32px;">{{modalObj.footer.closeText || '关闭'}}</div>
        <div v-if="modalObj.footer && modalObj.footer.isShowCancel" @click.stop="handleCancel" class="g1aada7 poi mr20 rds4 f ac xc fs14" style="border:1px solid #1aada7;width:80px;height:32px;">{{modalObj.footer.cancelText || '取消'}}</div>
        <div v-if="modalObj.footer && modalObj.footer.isShowConfirm" @click.stop="handleConfirm" class="gf poi rds4 f ac xc fs14" style="background:#1AADA7;border:1px solid #1aada7;width:80px;height:32px;">{{modalObj.footer.confirmText || '确定'}}</div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped></style>
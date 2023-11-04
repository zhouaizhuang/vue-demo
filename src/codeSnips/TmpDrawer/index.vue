<template>
  <div class="mh100vh ovh" @click="isShowModal=true">
    <!--drawer组件起始位置-->
    <div @click.stop="isShowModal=false" :class="['fixed trbl0 trans5', isShowModal ? 'op10 zx10' : 'op0 zx-1']" style="background:rgba(55,55,55,.6)">
      <div @click.stop :class="['fixed  bgf t0 b0 r0 trans3 f cn', isShowModal ? 'aniTxIn zx20 op10' : 'aniTxout zx-1 op0']" style="width:600px;">
        <div class="f ac pl10" style="border-bottom:1px solid #eee;">
          <div class="fs14 b f1 none">弹框标题</div>
          <div @click.stop="isShowModal=false" class="f ac xc poi" style="height:50px;width:50px;">
            <svg t="1671764723022" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2737" width="12" height="12"><path d="M1007.603202 929.818395L592.684241 514.699473 1007.603202 99.780512c10.797891-10.797891 16.196837-24.795157 16.196837-38.992385 0-13.997266-5.398946-28.194493-16.196837-38.992384-21.595782-21.595782-56.388987-21.595782-77.984768 0L514.699473 436.914665 99.780512 21.795743C78.18473 0.199961 43.391525 0.199961 21.795743 21.795743s-21.595782 56.388987 0 77.984769l415.118922 414.918961L21.795743 929.818395c-21.595782 21.595782-21.595782 56.388987 0 77.984768s56.388987 21.595782 77.984769 0l414.918961-415.118922L929.818395 1007.603202c10.797891 10.797891 24.795157 16.196837 38.992384 16.196837 13.997266 0 28.194493-5.398946 38.992384-16.196837 21.395821-21.395821 21.395821-56.388987-0.199961-77.784807z" fill="#999999" p-id="2738"></path></svg>
          </div>
        </div>
        <div class="f1 ovya pb50">
          <div class="pt30 pb30 tc">这里是内容</div>
          <div class="pt30 pb30 tc">这里是内容</div>
          <div class="pt30 pb30 tc">这里是内容</div>
          <div class="pt30 pb30 tc">这里是内容</div>
          <div class="pt30 pb30 tc">这里是内容</div>
          <div class="pt30 pb30 tc">这里是内容</div>
          <div class="pt30 pb30 tc">这里是内容</div>
          <div class="pt30 pb30 tc">这里是内容</div>
          <div class="pt30 pb30 tc">这里是内容</div>
          <div class="pt30 pb30 tc">这里是内容</div>
          <div class="pt30 pb30 tc">这里是内容</div>
          <div class="pt30 pb30 tc">这里是内容</div>
          <div class="pt30 pb30 tc">这里是内容</div>
          <div class="pt30 pb30 tc">这里是内容</div>
          <div class="pt30 pb30 tc">这里是内容</div>
        </div>
        <div class="abs zx10 bgf b0 l0 r0 f ac xe pr10" style="height:50px;border-top:1px solid #eee;">
          <Button @click.stop="isShowModal=false" class="mr15">取消</Button>
          <Button type="primary">确定</Button>
        </div>
      </div>
    </div>
    <!--drawer组件结束位置-->
  </div>
</template>
<script src='./index.js'></script>
<style scoped>

/**Modal组件起始位置 */
.aniTxIn{ animation: txIn .5s ease -.2s 1 both; }
@keyframes txIn {
  0%{ transform: translateX(110%); }
  100%{ transform: translateX(0%); }
}
.aniTxout{ animation: txOut .5s ease -.1s 1 both; }
@keyframes txOut {
  0%{ transform: translateX(0%); }
  100%{ transform: translateX(110%); }
}
/**Modal组件结束位置 */
</style>
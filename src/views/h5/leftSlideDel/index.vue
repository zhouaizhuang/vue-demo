<template>
  <div class="mh100vh bgf5 fs12">
    <div class="pt10 pl10 pr10">
      <div v-for="item in list" :key="item.id" class="mb10">
        <Slide :list="list" :item="item" @setList="v => list = v" :type="['left', 'right']">
          <div class="w100 bgf rds5 ovh pb10r">
            <div class="rel pl30 pr30r f ac" style="border-bottom: 1px solid #ccc;">
              <div class="abs l0 t0 fs12" style="width:0px;height:0px;border-left:20px solid #13bd87;border-top:20px solid #13bd87;border-right:20px solid transparent;border-bottom:20px solid transparent;">
                <div class="abs l0 t0 nowrap gf" style="transform: translate(-20px, -15px) rotate(-45deg);">今日</div>
              </div>
              <div class="f1 f ac pt12 pb12 fs12">
                <div class="">随访时间：</div>
                <div class="">2023-01-13 14:30</div>
              </div>
              <div class="fs12" style="color:#FC941A;">计划中</div>
            </div>
            <div class="mt17 pl30 pr30">
              <div class="f ac">
                <div>随访居民：</div>
                <div class="f1 f rw fs12">
                  <div class="rds5 pl8 pr8 mr10" style="border: 1px solid #13BD87;height:20px;">张三</div>
                  <div class="rds5 pl8 pr8 mr10" style="border: 1px solid #13BD87;height:20px;">张三</div>
                  <div class="rds5 pl8 pr8 mr10" style="border: 1px solid #13BD87;height:20px;">张三</div>
                  <div class="rds5 pl8 pr8 mr10" style="border: 1px solid #13BD87;height:20px;">张三</div>
                  <div class="rds5 pl8 pr8 mr10" style="border: 1px solid #13BD87;height:20px;">...</div>
                </div>
              </div>
            </div>
            <div class="mt17 pl30 pr30">
              <div class="f ac">
                <div>随访居民：</div>
                <div class="f1 nowrap" style="color:#c4c4c4;">
                  此处显示此次随访要完成的任务目标或备注
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style scoped>
</style>
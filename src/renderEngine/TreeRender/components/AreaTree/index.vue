<template>
  <div>
    <div v-for="firstItem in treeObj.list" :key="firstItem.id">
      <div :class="['poi f ac w100 pt2 pb2']">
        <div @click="clickfirstItem(firstItem)" class="w100 f ac b" :style="{color: selectName == firstItem.name ? '#1aada7' : '#666', background: selectName == firstItem.name ? '#e7f7f6' : ''}">
          <span class="pt2 pb2 pr5 pl5">
            <svg t="1689242110316" :class="['poi trans3', firstItem.isSpread ? '' : 'tr-90']" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2812" width="10" height="10"><path d="M65.582671 288.791335l446.417329 446.41733 446.417329-446.41733z" p-id="2813" :fill="selectName == firstItem.name? '#1aada7' : '#666'"></path></svg>
          </span>
          <div>{{firstItem.name}}</div>
        </div>
      </div>
      <div v-if="firstItem.isSpread">
        <div v-for="secondItem in firstItem.children" :key="secondItem.id" class="">
          <div class="pl30" :style="{color: selectName == secondItem.name ? '#1aada7' : '#666', background: selectName == secondItem.name ? '#e7f7f6' : ''}">
            <div @click="clickSecondItem(secondItem)" :class="['poi f ac w100 pt2 pb2 borderBox rel']"  >
              <span v-if="secondItem.children.length" style="left:-20px;" class="abs poi pt2 pb2 pr5 pl5">
                <svg t="1689242110316" :class="['trans3', secondItem.isSpread ? '' : 'tr-90']" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2812" width="10" height="10"><path d="M65.582671 288.791335l446.417329 446.41733 446.417329-446.41733z" p-id="2813" :fill="selectName == secondItem.name ? '#1aada7' : '#666'"></path></svg>
              </span>
              <div>{{secondItem.name}}</div>
            </div>
          </div>
          <div v-if="secondItem.isSpread">
            <div v-for="thirdItem in secondItem.children" :key="thirdItem.id">
              <div class="pl40" :style="{color: selectName == thirdItem.name ? '#1aada7' : '#666', background: selectName == thirdItem.name ? '#e7f7f6' : ''}">
                <div @click="clickthirdItem(thirdItem)" :class="['poi f ac w100 pt2 pb2 borderBox rel']">
                  <span v-if="thirdItem.children.length!=0" style="left:-20px;" class="abs poi pt2 pb2 pr5 pl5">
                    <svg t="1689242110316" :class="['trans3', thirdItem.isSpread ? '' : 'tr-90']" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2812" width="10" height="10"><path d="M65.582671 288.791335l446.417329 446.41733 446.417329-446.41733z" p-id="2813" :fill="selectName == thirdItem.name ? '#1aada7' : '#666'"></path></svg>
                  </span>
                  <div>{{thirdItem.name}}</div>
                </div>
              </div>
              <div v-if="thirdItem.isSpread" class="">
                <div v-for="forthItem in thirdItem.children" :key="forthItem.id">
                  <div class="pl50" :style="{color: selectName == forthItem.name ? '#1aada7' : '#666', background: selectName == forthItem.name ? '#e7f7f6' : ''}">
                    <div @click="clickforthItem(forthItem)" :class="['poi f ac w100 pt2 pb2 rel']">
                      <span v-if="forthItem.children.length!=0" style="left:-20px;" class="abs poi pt2 pb2 pr5 pl5">
                        <svg t="1689242110316" :class="['trans3', forthItem.isSpread ? '' : 'tr-90']" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2812" width="8" height="8"><path d="M65.582671 288.791335l446.417329 446.41733 446.417329-446.41733z" p-id="2813" :fill="selectName == forthItem.name ? '#1aada7' : '#666'"></path></svg>
                      </span>
                      <div>{{forthItem.name}}</div>
                    </div>
                  </div>
                  <div v-if="thirdItem.isSpread" class="pl15">
                    <div v-for="fifthItem in forthItem.children"  :key="fifthItem.id" >
                      <div class="pl60" :style="{color: selectName == fifthItem.name ? '#1aada7' : '#666', background: selectName == fifthItem.name ? '#e7f7f6' : ''}">
                        <div @click="clickFifthItem(fifthItem)" :class="['poi f ac w100 pt2 pb2 rel']" >
                          <span v-if="fifthItem.children.length!=0" style="left:-20px;" class="abs poi pt2 pb2 pr5 pl5">
                            <svg t="1689242110316" :class="['trans3', fifthItem.isSpread ? '' : 'tr-90']" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2812" width="8" height="8"><path d="M65.582671 288.791335l446.417329 446.41733 446.417329-446.41733z" p-id="2813" :fill="selectName == fifthItem.name ? '#1aada7' : '#666'"></path></svg>
                          </span>
                          <div>{{fifthItem.name}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>
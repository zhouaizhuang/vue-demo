<template>
  <div>
    <!--一级菜单-->
    <div v-for="firstItem in treeObj.list" :key="firstItem.id">
      <div :class="['poi f ac w100 pt2 pb2 ']">
        <div class="w100 f ac">
          <span @click="clickfirstItem(firstItem)" class="pt2 pb2 pr5 pl5">
            <svg t="1689242110316" :class="['poi trans3', firstItem.isSpread ? '' : 'tr-90']" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2812" width="10" height="10"><path d="M65.582671 288.791335l446.417329 446.41733 446.417329-446.41733z" p-id="2813" :fill="firstItem.isChecked? '#666' : '#666'"></path></svg>
          </span>
          <Checkbox v-if="firstItem.isShowCheckbox" :value="firstItem.isChecked" :indeterminate="firstItem.isIndeterminate" @on-change="e => selectCurItem(e, firstItem)" :disabled="firstItem.disabled">{{firstItem.name}}</Checkbox>
          <div v-else @click="clickCurItem(firstItem)">{{firstItem.name}}</div>
        </div>
      </div>
      <div v-if="firstItem.isSpread">
        <!--二级菜单-->
        <div v-for="secondItem in firstItem.children" :key="secondItem.id" class="pl40">
          <div :class="['poi f ac w100 pt2 pb2 borderBox rel']">
            <span v-if="secondItem.children.length" @click="clickSecondItem(secondItem)" style="left:-20px;" class="abs poi pt2 pb2 pr5 pl5">
              <svg t="1689242110316" :class="['trans3', secondItem.isSpread ? '' : 'tr-90']" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2812" width="10" height="10"><path d="M65.582671 288.791335l446.417329 446.41733 446.417329-446.41733z" p-id="2813" :fill="secondItem.isChecked ? '#666' : '#666'"></path></svg>
            </span>
            <Checkbox v-if="secondItem.isShowCheckbox" :value="secondItem.isChecked" :indeterminate="secondItem.isIndeterminate" @on-change="e => selectCurItem(e, secondItem)" :disabled="secondItem.disabled">{{secondItem.name}}</Checkbox>
            <div v-else @click="clickCurItem(secondItem)">{{secondItem.name}}</div>
          </div>
          <div v-if="secondItem.isSpread" class="pl20">
            <!--三级菜单-->
            <div v-for="thirdItem in secondItem.children" :key="thirdItem.id">
              <div :class="['poi f ac w100 pt2 pb2 borderBox rel']">
                <span v-if="thirdItem.children.length!=0" @click="clickthirdItem(thirdItem)" style="left:-20px;" class="abs poi pt2 pb2 pr5 pl5">
                  <svg t="1689242110316" :class="['trans3', thirdItem.isSpread ? '' : 'tr-90']" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2812" width="10" height="10"><path d="M65.582671 288.791335l446.417329 446.41733 446.417329-446.41733z" p-id="2813" :fill="thirdItem.isChecked ? '#666' : '#666'"></path></svg>
                </span>
                <Checkbox v-if="thirdItem.isShowCheckbox" :value="thirdItem.isChecked" :indeterminate="thirdItem.isIndeterminate" @on-change="e => selectCurItem(e, thirdItem)" :disabled="thirdItem.disabled">{{thirdItem.name}}</Checkbox>
                <div v-else @click="clickCurItem(thirdItem)">{{thirdItem.name}}</div>
              </div>
              <div v-if="thirdItem.isSpread" class="pl20">
                <!--四级菜单-->
                <div v-for="fifthItem in forthItem.children"  :key="fifthItem.id" >
                  <div :class="['poi f ac w100 pt2 pb2 rel']">
                    <span v-if="fifthItem.children.length!=0" style="left:-20px;" class="abs poi pt2 pb2 pr5 pl5">
                      <svg t="1689242110316" :class="['trans3', fifthItem.isSpread ? '' : 'tr-90']" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2812" width="8" height="8"><path d="M65.582671 288.791335l446.417329 446.41733 446.417329-446.41733z" p-id="2813" :fill="fifthItem.isChecked ? '#666' : '#666'"></path></svg>
                    </span>
                    <Checkbox v-if="fifthItem.isShowCheckbox" :value="fifthItem.isChecked" :indeterminate="fifthItem.isIndeterminate" @on-change="e => selectCurItem(e, fifthItem)" :disabled="fifthItem.disabled">{{fifthItem.name}}</Checkbox>
                    <div v-else @click="clickCurItem(fifthItem)">{{fifthItem.name}}</div>
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
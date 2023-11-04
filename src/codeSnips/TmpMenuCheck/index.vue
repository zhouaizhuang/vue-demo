<template>
  <div class="f fs15 mb15 rel zx10 bgf">
    <div class="pr10">菜单权限:</div>
    <div class="f1">
      <Card>
        <div class="f ac xs bdbe pb20">
          <div class="f mr30">
            <div class="">全选/全不选：</div>
            <i-switch v-model="selectAll" @on-change="e => getAllMenu(e, isSpread)" />
          </div>
          <div class="f">
            <div class="">全部展开/折叠：</div>
            <i-switch v-model="isSpread" @on-change="e => getAllMenu(selectAll, e)" />
          </div>
          <div class="f1 f ac xe" >
            <Button @click="edit" type="info" class="mr20">点我模拟编辑</Button>
            <Button @click="save" type="info">点我模拟保存</Button>
          </div>
        </div>
        <div class="ovya pt20 none" style="height:450px;">
          <div v-for="firstItem in allMenu" :key="firstItem.id" class="mb15">
            <div class="f ac mb5 rel ml20">
              <Icon @click="clickItem(firstItem)" type="md-arrow-dropdown" size="24" :class="['abs l0 t0 zx10 trans3 poi', firstItem.isSpread ? '' : 'tr-90']" style="left:-25px;" />
              <Checkbox v-model="firstItem.isChecked" :indeterminate="firstItem.isIndeterminate" @on-change="e => changeFirstItem(e, firstItem)">{{firstItem.name}}</Checkbox>
            </div>
            <div v-show="firstItem.isSpread">
              <div v-for="secondItem in firstItem.children" :key="secondItem.id">
                <div :class="['f ac rel ml50']">
                  <Icon @click="clickItem(secondItem)" v-show="secondItem.children.length" type="md-arrow-dropdown" size="24" :class="['abs l0 t0 zx10 trans3 poi', secondItem.isSpread ? '' : 'tr-90']" style="left:-25px;" />
                 <Checkbox v-model="secondItem.isChecked" :indeterminate="secondItem.isIndeterminate" @on-change="e => changeSecondItem(e, secondItem)">{{secondItem.name}}</Checkbox>
                </div>
                <div v-show="secondItem.isSpread">
                  <div v-for="thirdItem in secondItem.children" :key="thirdItem.id" class="ml80 f ac">
                    <Checkbox v-model="thirdItem.isChecked" @on-change="updateMenuState(allMenu)">{{thirdItem.name}}</Checkbox>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>
<script src='./index.js'></script>
<style src='./index.css' scoped>
</style>
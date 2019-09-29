<template>
  <div class="mui-numbox" data-numbox-min='1' style="height:23px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="cellCount" @change="countChanged" ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  mounted() {
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChanged() {
      // 每当数量改变，立即把最新的数量同步到购物出的store中，覆盖之前的值
      this.$store.commit('updateGoodsInfo',{id:this.goodsId,count:this.$refs.numbox.value})
    }
  },
  props:["cellCount","goodsId"]
};
</script>

<style lang="scss" scoped>

</style>

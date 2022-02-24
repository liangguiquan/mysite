<template>
  <div class="totop-container" v-show="show" @click="handleClick">
    <Icon type="totop" />
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(scrollDom) {
      if (!scrollDom) {
        this.show = false;
        return;
      }
      this.show = scrollDom.scrollTop >= 500; // 滚动区域滚动超过500像素时，show为true，显示totop组件
    },
    handleClick() {
      // 回到顶部
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.totop-container {
  background: @primary;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  z-index: 99;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  line-height: 50px;
  color: #fff;
  text-align: center;
  .iconfont {
    font-size: 20px;
  }
}
</style>
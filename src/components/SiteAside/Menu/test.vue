<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./index";
import "@/styles/global.less";
export default {
  components: {
    Menu,
  },
};
</script>


<style scoped lang="less">
.test-container {
  width: 400px;
  height: 600px;
  border: 1px solid #12d6bc;
  margin: 0 auto;
  background-color: #000;
}
</style>

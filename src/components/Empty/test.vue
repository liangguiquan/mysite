<template>
  <div class="test-container">
    <Empty :text="text" />
  </div>
</template>

<script>
import Empty from "./index";

export default {
  name: "Test",
  components: {
    Empty,
  },
  data() {
    return {
      text: "无数据",
    };
  },
  methods: {},
};
</script>

<style scoped lang="less">
.test-container {
  width: 600px;
  height: 350px;
  border: 1px solid #000;
  margin: 0 auto;
  position: relative;
}
</style>
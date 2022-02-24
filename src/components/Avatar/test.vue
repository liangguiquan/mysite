<template>
  <div id="app">
    <Avatar
      url="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2645058785,2214371962&fm=26&gp=0.jpg"
      :size="100"
    />
  </div>
</template>

<script>
import Avatar from "./index";

export default {
  name: "App",
  components: {
    Avatar,
  },
};
</script>

<style scoped lang="less">
// 添加了scoped后，父组件的style样式最多只能影响到子组件的根元素，所以在元素结构中，可以看到子组件的根元素带有父组件的属性'data-v-7ba5bd90'
.iconfont {
  font-size: 26px;
  color: red;
}
</style>

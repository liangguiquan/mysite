
<template>
  <h1>正在登录中</h1>
</template>

<script>
export default {
  created() {
    this.unWatch = this.$watch(
      // 返回一个取消监听的函数
      () => this.$store.getters["loginUser/status"], // 监听这个函数得返回值
      // 数据发生变化时执行的函数
      (status) => {
        // console.log("状态为：", status);
        if (status !== "loading") {
          this.$router
            .push(this.$route.query.returnUrl || "/home")
            .catch(() => {});
        }
      },
      {
        immediate: true,
      }
    );
  },
  // 取消监听
  beforeDestroy() {
    this.unWatch();
  },
};
</script>

<style lang="less" scoped>
</style>
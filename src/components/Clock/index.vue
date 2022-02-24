<template>
  <h1>当前时间：{{ current }}</h1>
</template>

<script>
export default {
  data() {
    return {
      current: this.getCurrent(),
      timer: null,
    };
  },
  methods: {
    getCurrent() {
      return new Date().toLocaleTimeString();
    },
  },
  created() {
    this.timer = setInterval(() => {
    //   console.log("时间更新了");
      this.current = this.getCurrent();
    }, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>
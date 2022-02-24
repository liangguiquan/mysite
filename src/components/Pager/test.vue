<template>
  <div id="app">
    <Pager :total="total" :current="current" @pageChange="changeCurrent($event)" />
  </div>
</template>

<script>
import Pager from "./index";

export default {
  name: "App",
  components: {
    Pager,
  },
  data() {
    return {
      current: 3,
      total: 50,
    };
  },
  methods: {
    changeCurrent(newPage) {
      // console.log(newPage);
      this.current = newPage;
    },
  },
};
</script>

<style scoped lang="less">
</style>
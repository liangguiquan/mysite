<template>
  <div id="app" class="app-container">
    <Layout>
      <template v-slot:left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <router-view />
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "./components/Layout/index.vue";
import SiteAside from "./components/SiteAside/index.vue";
import ToTop from './components/ToTop';

export default {
  name: "App",
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
  // background-color: lightpink;
  .aside {
    width: 250px;
    height: 100%;
  }
}
</style>




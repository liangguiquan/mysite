<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template v-slot:right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "../../mixins/fetchData";
import { getBlog } from "../../api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import BlogComment from "./components/BlogComment";
import { titleController } from '@/utils';

export default {
  mixins: [fetchData(null)],
  components: {
    Layout,
    BlogTOC,
    BlogDetail,
    BlogComment,
  },
  methods: {
    async fetchData() {
      const res =  await getBlog(this.$route.params.id);
      // 修改详情页的标题
      titleController.setRouteTitle(res.title);
      return res;
    },
    handleScroll() {
      this.$bus.$emit("mainScroll", this.$refs.mainContainer);
    },
    handleSetMainScroll(scrollTop) {
      this.$refs.mainContainer.scrollTop = scrollTop;
    },
  },
  created() {
    
  },
  mounted() {
    this.$bus.$on("setMainScroll", this.handleSetMainScroll);
    this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    this.$bus.$emit("mainScroll", undefined);  // 滚动的dom元素，如果是undefined，则表示dom元素已经不存在了
    this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
    this.$bus.$off("setMainScroll", this.handleSetMainScroll);
  },

  updated() {
    // 文章详情页加载时，不会自动跳到锚点位置，因为在加载时，dom还没有生成，所以跳不过去，等dom生成后，重新跳一次
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>
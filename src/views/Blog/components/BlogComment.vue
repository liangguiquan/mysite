<template>
  <div class="blog-comment-container">
    <MessageArea
      :list="data.rows"
      title="评论列表"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "../../../components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComments } from "@/api/blog.js";
import { postComment } from "../../../api/blog.js";

export default {
  components: {
    MessageArea,
  },
  mixins: [fetchData({ total: 0, rows: [] })],
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll); // 这个处理函数能拿到传递过来的参数
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },

  methods: {
    async handleScroll(scrollDom) {
      if (this.isLoading || !scrollDom) {
        return; // 如果正在加载中，则不需要再不断加载了
      }
      const range = 100; // 定一个可接受的范围，在这个范围内都算到达了底部
      const dec = Math.abs(scrollDom.scrollTop + scrollDom.clientHeight - scrollDom.scrollHeight);
      if (dec < range) {
        // console.log("加载更多");
        this.fetchMore();
      }
    },

    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    // 加载下一页
    async fetchMore() {
      if (!this.hasMore) {
        // 没有更多评论数据了
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },

    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功");
    },
  },
};
</script>

<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
}
</style>
<template>
  <div class="image-loader-container">
    <!-- 占位图 -->
    <img v-if="!allDone" class="placeholder" :src="placeholder" alt="" />
    <!-- 原图 -->
    <img
      class="origin"
      :src="src"
      alt=""
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
      @load="handleLoad"
    />
  </div>
</template>


<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originLoaded: false, //原图是否加载完成
      allDone: false, // 是否一切都尘埃落定了
    };
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },

  methods: {
    handleLoad() {
      console.log("原图加载完成");
      this.originLoaded = true;
      setTimeout(() => {
        this.allDone = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>
<template>
  <div class="test-container">
    <ImageLoader :src="url" :placeholder="placeholderUrl" :duration="2000"
    @load="handleLoad"
    />
  </div>
</template>

<script>
import ImageLoader from "./index";

export default {
  name: "Test",
  components: {
    ImageLoader,
  },
  data() {
    return {
        url: 'https://img95.699pic.com/photo/50172/5861.jpg_wh860.jpg!/both/590x400',
        placeholderUrl: 'https://img95.699pic.com/photo/50172/9023.jpg_wh860.jpg!/both/590x400',
    };
  },
  methods: {
      handleLoad(){
          console.log('Imageloader组件图片加载完成');
      }
  },
};
</script>

<style scoped lang="less">
.test-container {
    width: 600px;
    height: 400px;
    border: 1px solid #000;
}
</style>
<template>
  <div class="home-container" ref="container" @wheel="handleWheel" v-loading="isLoading">
    <!-- // 图片 -->
    <ul
      class="carousel-container"
      :style="{
        'margin-top': marginTop,
      }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in banners" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>

    <!-- // 上下箭头 -->
    <div class="icon icon-up" v-show="index >= 1" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon icon-down"
      v-show="index < banners.length - 1"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>

    <!-- // 索引指示器 -->
    <ul class="indicator">
      <li
        v-for="(item, i) in banners"
        :key="item.id"
        :class="{
          active: index === i,
        }"
        @click="switchTo(i)"
      ></li>
    </ul>

  </div>
</template>

<script>
// import { showMessage } from "../../utils/index";
import { getBanners } from "../../api/banner";
import CarouselItem from "./Carouselitem";
import Icon from "../../components/Icon";

export default {
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    return {
      banners: [],
      index: 0, // 当前显示的是第几张轮播图
      containerHeight: 0, // 容器的高度
      switching: false, // 是否正在翻页中
      isLoading: true, // 是否正在加载
    };
  },
  methods: {
    // 切换轮播图
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      // console.log(e);
      if (this.switching || (e.deltaY <= 5 && e.deltaY >= -5)) {
        return;
      }

      // 往上滚动
      if (e.deltaY < -5 && this.index > 0) {
        this.switching = true;
        this.switchTo(this.index - 1);
      } else if (e.deltaY > 5 && this.index < this.banners.length - 1) {       // 往下滚动
        this.switching = true;
        this.switchTo(this.index + 1);
      }
    },
    handleTransitionEnd() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },

  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },

  async created() {
    this.banners = await getBanners();
    this.isLoading = false;
  },

  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    // 移除事件
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

.home-container {
  // background-color: lightblue;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .icon {
    .self-center();
    font-size: 30px;
    color: @gray;
    cursor: pointer;
    transform: translateX(-50%);
    @gap: 25px;
    &.icon-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }
    &.icon-down {
      top: auto;
      animation: jump-down 2s infinite;
      bottom: @gap;
    }
    @keyframes jump-up {
      0% {
        transform: translate(-50%, 10px);
      }
      50% {
        transform: translate(-50%, -10px);
      }
      100% {
        transform: translate(-50%, 10px);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, -10px);
      }
      50% {
        transform: translate(-50%, 10px);
      }
      100% {
        transform: translate(-50%, -10px);
      }
    }
  }
  .indicator {
    .self-center();
    transform: translateY(-50%);
    left: auto;
    right: 25px;
    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: @words;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #fff;
      box-sizing: border-box;
      transition: 0.5s;
      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>
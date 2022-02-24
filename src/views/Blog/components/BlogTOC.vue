<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import { debounce } from "../../../utils";

export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  computed: {
    // 根据toc属性得到带有isSelect属性的toc数组
    tocWithSelect() {
      const getToc = (toc = []) => {
        return toc.map((item) => {
          return {
            ...item,
            isSelect: item.anchor === this.activeAnchor,
            children: getToc(item.children),
          };
        });
      };
      return getToc(this.toc);
    },

    // 根据toc的anchor属性，得到对应的元素数组
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length > 0) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },

  beforeDestroy() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },

  methods: {
    handleSelect(item) {
      location.hash = item.anchor; // 锚点
    },
    setSelect(scrollDom) {
      if(!scrollDom){
        return;
      }
      this.activeAnchor = "";
      const range = 150;
      for (const dom of this.doms) {
        // 看一下当前这个dom元素是不是应该被选中
        if (!dom) {
          continue;
        }
        // 得到dom元素离视口顶部的距离
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          // 在规定的范围内
          this.activeAnchor = dom.id;
        } else if (top > range) {
          // 在规定的范围下方
          return;
        } else {
          // 在规定的范围上方
          this.activeAnchor = dom.id; // 先假设自己是激活的，然后继续看后面的dom
        }
      }
    },
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  width: 100%;
  height: 100%;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>

// toc的结构如下:
// toc: [
//             { name: "概述", anchor: "article-md-title-1" },
//             {
//                 name: "简单请求",
//                 anchor: "article-md-title-2",
//                 children: [
//                     { name: "简单请求的判定", anchor: "article-md-title-3" },
//                     { name: "简单请求的交互规范", anchor: "article-md-title-4" },
//                 ],
//             },
//             {
//                 name: "需要预检的请求",
//                 anchor: "article-md-title-5",
//             },
//             {
//                 name: "附带身份凭证的请求",
//                 anchor: "article-md-title-6",
//             },
//             {
//                 name: "一个额外的补充",
//                 anchor: "article-md-title-7",
//             },
//         ],
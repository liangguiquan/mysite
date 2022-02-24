<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
  home: "iconhome",
  success: "iconsuccess",
  error: "iconerror",
  close: "iconclose",
  warn: "iconwarning",
  info: "iconinfo",
  blog: "iconblog",
  code: "iconcode",
  about: "iconabout",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconqq",
  arrowUp: "iconarrowUp",
  arrowDown: "iconarrowDown",
  empty: "iconempty",
  chat: "iconchat",
  totop: "icontotop",
};
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    // 图标类样式
    fontClass() {
      return classMap[this.type];
    },
  },
};
</script>

<style scoped>
@import '//at.alicdn.com/t/font_2424533_uc93925llr9.css';

.iconfont {
    color: inherit;
    font-size: inherit;
}

</style>
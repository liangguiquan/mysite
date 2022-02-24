<template>
  <nav class="menu-container">
    <a
      v-for="item in items"
      :key="item.link"
      :href="item.link"
      :class="{
        selected: isSelected(item),
      }"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span class="title">{{ item.title }}</span>
    </a>
  </nav>
</template>


<script>
import Icon from "@/components/Icon";
export default {
  name: "Menu",
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          link: "/",
          title: "首页",
          icon: "home",
        },
        {
          link: "/blog",
          title: "文章",
          icon: "blog",
          startWith: true, // 当前路径以blog开头，当前菜单就是选中的
        },
        {
          link: "/about",
          title: "关于我",
          icon: "about",
        },
        {
          link: "/project",
          title: "项目/效果",
          icon: "code",
        },
        {
          link: "/message",
          title: "留言板",
          icon: "chat",
        },
      ],
    };
  },
  methods: {
    isSelected(item) {
      var link = item.link.toLowerCase(); // 菜单的连接地址
      var currentPath = location.pathname.toLowerCase(); // 当前浏览器的访问路径
      if (item.startWith) {
        return currentPath.startsWith(link);
      } else {
        return currentPath === link;
      }
    },
  },
};
</script>



<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    display: flex;
    padding: 0 40px;
    height: 45px;
    align-items: center;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
    &.selected {
      // background-color: #2d2d2d;
      background-color: darken(@words, 3%);
    }
  }
}
</style>
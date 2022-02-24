<template>
  <div class="site-aside-container">
    <div class="avatar">
      <Avatar
        url="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2645058785,2214371962&fm=26&gp=0.jpg"
      />
    </div>
    <h1 class="title">疯子爱失眠</h1>
    <Menu />
    <Contact />
    <p class="footer">粤ICP备17001719号</p>
  </div>
</template>


<script>
import Avatar from "../Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import "../../styles/global.less";

export default {
  name: "SiteAside",
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>


<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background-color: @dark;
  padding: 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  .avatar-container {
      margin: 0 auto;
  }
  .footer {
      font-size: 12px;
      text-align: center;
      color: darken(@gray, 40%);
  }
  .title {
      font-size: 20px;
      color: rgb(194, 190, 190);
      text-align: center;
  }
}
</style>
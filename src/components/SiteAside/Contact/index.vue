<template>
  <ul class="contact-container">
    <li>
      <a href="">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>slyn</span>
      </a>
    </li>
    <li>
      <a href="mailto:969511847@qq.com">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>969511847@qq.com</span>
      </a>
    </li>
    <li>
      <a href="tencent://message/?Menu=yes&uin=969511847&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>969511847</span>
      </a>
      <div class="pop">
        <img src="@/assets/mycode2.jpg" alt="" />
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="weixin" />
        </div>
        <span>iamslyn</span>
      </a>
      <div class="pop">
        <img src="@/assets/mycode2.jpg" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "Contact",
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container {
  width: 100%;
  list-style: none;
  margin: 0;
  box-sizing: border-box;
  padding: 20px 0;
  color: @gray;
  //   background-color: lightcoral;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;
    position: relative;
    cursor: pointer;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
    a {
      display: flex;
      align-items: center;
      font-size: 14px;
    }
    .icon {
      font-size: 26px;
      width: 36px;
    }
    .pop {
      position: absolute;
      background-color: #fff;
      left: 0;
      bottom: @itemHeight + 5px;
      padding: 10px 10px;
      border-radius: 5px;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.2s;
      width: 150px;
      height: 150px;
      img {
        width: 150px;
        height: 150px;
      }
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -4px;
        transform: translate(-50%) rotate(45deg);
        width: 8px;
        height: 8px;
        background-color: #fff;
      }
    }
  }
}
</style>
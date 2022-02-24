<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span :class="{ active: item.isSelect }" @click="handleClick(item)">
        {{ item.name }}</span
      >
      <span
        v-if="item.aside"
        :class="{ active: item.isSelect }"
        class="aside"
        @click="handleClick(item)"
      >
        {{ item.aside }}
      </span>
      <!-- 递归显示当前组件 -->
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    // [ {name:"xxx", isSelect:true, children:[ {name:"yyy", isSelect: false} ] } ]
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
ul {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    .aside {
      font-size: 12px;
      margin-left: 1em;
      color: @gray;
    }
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
</style>
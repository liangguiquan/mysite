<template>
  <div class="message-area-container">
    <!-- <DataForm @submit="handleSubmit" /> -->
    <!-- <DataForm v-on="{ submit: handleSubmit }" />   -->
    <DataForm v-on="$listeners" />  

    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
        type: Boolean,
        default: false,
    }
  },
  components: {
      DataForm,
      DataList,
  },
//   methods: {
//     // 使用v-on="$listeners"，就不用写这个方法了，直接把父组件传递过来的方法 传递给子组件
//       handleSubmit(formData, callback){  
//           this.$emit("submit", formData, callback);
//       }
//   },
};
</script>

<style scoped lang="less">
.loading {
  position: relative;
  height: 100px;
}
</style>
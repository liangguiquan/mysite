<template>
  <div id="app">
    <Icon type="arrowDown" />
  </div>
</template>

<script>
import Icon from './index'

export default {
  name: 'App',
  components: {
    Icon,
  },
}
</script>

<style scoped lang="less">
.iconfont {
  font-size: 20px;
  color: #f00;
}
</style>

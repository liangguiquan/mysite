import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from './router'
import { showMessage } from './utils'
import './mock'  // 引入mock文件
import "./eventBus"
import store from "./store"

// 一些全局设置一开始就要获取
store.dispatch('setting/fetchSetting');

Vue.prototype.$showMessage = showMessage;  // 给原型添加方法，所有实例对象都能使用该方法

// 注册全局指令
import vLoading from './directives/loading'
Vue.directive('loading', vLoading);
import vLazy from './directives/lazy'
Vue.directive('lazy', vLazy);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

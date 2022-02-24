
import Vue from 'vue'

const app =  new Vue();
// 事件总线
/**
 * 事件一： mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动的dom元素，如果是undefined，则表示dom元素已经不存在了
 * 
 * 事件二： setMainScroll
 * 含义： 当需要设置主区域滚动条位置时触发
 * 参数：
 * - 滚动高度
 */
Vue.prototype.$bus = app;
 // new Vue()产生一个vue实例对象，这个实例对象跟普通的vue组件实例一样，有$on，$off，$emit方法
 // 把这个实例对象赋给原型的$bus，这样$bus这个对象也拥有这些方法，每个组件实例都能调用这些方法来监听、触发、取消事件。

 export default app;
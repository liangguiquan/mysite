import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from "../store"

Vue.use(VueRouter);  // 使用一个vue插件

import Home from '../views/Home'
import About from '../views/About'
import Blog from '../views/Blog'
import Project from '../views/Project'
import Message from '../views/Message'
import BlogDetail from '../views/Blog/Detail'
import NotFound from '../views/404'


import { titleController } from '@/utils'

const router = new VueRouter({
    // 配置    路由匹配规则
    routes: [
        {
            name: 'Home', path: '/',
            component: Home,
            meta: {
                title: '首页'
            }
        },
        {
            name: 'About', path: '/about', component: About,
            meta: {
                title: '关于我'
            }
        },
        {
            name: 'Blog', path: '/article', component: Blog,
            meta: {
                title: '博客文章'
            }
        },
        {
            name: 'CategoryBlog', path: '/article/cate/:categoryId', component: Blog,
            meta: {
                title: '分类文章'
            }
        },
        {
            name: 'BlogDetail', path: '/article/:id', component: BlogDetail,
            meta: {
                title: '文章详情'
            }
        },
        {
            name: 'Project', path: '/project', component: Project,
            meta: {
                title: '项目'
            }
        },
        {
            name: 'Message', path: '/message', component: Message,
            meta: {
                title: '留言'
            }
        },
        {
            name: 'NotFound',
            path: '*',
            component: NotFound
        },
    ],
    mode: 'history',  // 路由模式  
    // history模式下，为了避免刷新页面，vue-router实际上为router-link组件添加了点击事件，并阻止了默认行为，在事件内部使用history api (具体为history.pushState())更改路径，这样可以做到无刷新跳转。
    // history模式下，通过location.pathname获取路径。

    // mode: 'hash',  mode默认值为hash，hash模式下，通过location.hash获取路径。
    // mode: 'abstract', // 了解即可

    // 改变路径：location.href="/message"，这种改变路径的方式会刷新页面，但我们希望不刷新页面。要做到不刷新页面改变路径，就要使用history api，history.pushState()。


    // router-view组件

    // router-link组件
    // <router-link exact=true active-class="" ></router-link> router-link组件有三个属性：
    // 1. exact 表示是否要精确匹配，值为true/false
    // 2. active-class 用于修改匹配的类名，默认值：router-link-active
    // 3. exact-active-class 用于修改精确匹配的类名，默认值：router-link-exact-active
    // 补充： exact-path，只匹配path部分，不匹配hash，query

});


router.afterEach((to, from) => {
    // document.title = to.meta.title;
    if (to.meta.title) {
        titleController.setRouteTitle(to.meta.title);
    }
});

// router.beforeEach((to, from, next)=> {
//     // 每当导航切换时(包含刷新页面的第一次)， 该函数会运行
//     // from：之前的路由对象 (this.$route)
//     // to：即将进入的路由对象 (this.$route)
//     // next：确认导航的一个函数  调用该函数(无参)，就会直接进入to；调用该函数(传入参数，参数为新的路径)，就会根据传入参数进入新的to;
//     console.log(to, from);
//     if(to.meta.auth){
//         // 需要鉴权
//         const status = store.getters["loginUser/status"];
//         if(status === "loading"){
//             next({
//                 path: "/loading",
//                 query: {
//                     returnUrl: to.fullPath
//                 }
//             });
//         }else if(status === "login"){  // 已经登录了
//             next();
//         }else {
//             // 未登录
//             alert("该页面需要登录后才能访问，你还没登录，请先登录")
//             next({
//                 path: "/login",
//                 query: {
//                     returnUrl: to.fullPath
//                 }
//             });
//         }
//     }
//     else {
//         next();  // 调用才能跳转到新的地址
//     }
// });


export default router;
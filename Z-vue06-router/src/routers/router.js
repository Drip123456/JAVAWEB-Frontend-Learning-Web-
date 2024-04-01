import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Add from '../components/Add.vue';
import Update from '../components/Update.vue';
import ShowDetail from '../components/ShowDetail.vue';
import ShowDetail2 from '../components/ShowDetail2.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/home",
            component: Home
        },
        {
            path: "/showDetail/:id/:lang",
            component: ShowDetail
        },
        {
            path: "/showDetail2",
            component: ShowDetail2
        },
        {
            path: "/",
            component: Home
        },
        {
            path: "/add",
            component: Add
        },
        {
            path: "/list",
            component: List
        },
        {
            path: "/update",
            component: Update
        }
    ]
})
//全局前置路由守卫
router.beforeEach((to, from, next) => {
    //to 是目标地包装对象  .path属性可以获取地址
    //from 是来源地包装对象 .path属性可以获取地址
    //next是方法，不调用默认拦截！ next() 放行,直接到达目标组件
    //next('/地址')可以转发到其他地址,到达目标组件前会再次经过前置路由守卫
    next()
    console.log(to.path, from.path)

    //需要判断，注意避免无限重定向
    /* if (to.path == '/index') {
        next()
    } else {
        next('/index')
    } */

})

//全局后置路由守卫
router.afterEach((to, from) => {
    console.log(`Navigate from ${from.path} to ${to.path}`);
});
export default router
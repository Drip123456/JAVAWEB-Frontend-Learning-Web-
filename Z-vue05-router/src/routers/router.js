// 导入路由创建的相关方法
import { createRouter, createWebHashHistory } from 'vue-router'
// 导入vue组件
import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Add from '../components/Add.vue';
import Update from '../components/Update.vue';


// 创建一个路由对象
const router = createRouter({
    //通常使用该方法来创建路由的历史记录对象。
    history: createWebHashHistory(),
    // 用于定义多个不同的路径和组件的对应关系
    routes: [
        {
            path: "/home",
            components: {
                default: Home,
                homeView: Home
            }
        },
        {
            path: '/list',
            components: {
                listView: List
            }
        },
        {
            path: '/add',
            components: {
                addView: Add
            }
        },
        {
            path: '/update',
            components: {
                updateView: Update
            }
        },
        {
            path: '/',
            component: Home
        },
        {
            path: '/showAll',
            // 重定向
            redirect: '/list'
        }
    ]
})

// 向外暴露

export default router



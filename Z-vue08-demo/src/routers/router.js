import { createRouter, createWebHashHistory } from 'vue-router'


import Login from '../components/Login.vue'
import Regist from '../components/Regist.vue'
import ShowScedule from '../components/ShowSchedule.vue'

let router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Login
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/showSchedule",
            component: ShowScedule
        },
        {
            path: "/regist",
            component: Regist
        }


    ]
})

export default router   
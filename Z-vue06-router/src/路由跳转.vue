<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
//创建动态路由对象
let router = useRouter()

let routePath = ref('')
let showList = () => {
    // 编程式路由
    // 直接push一个路径
    //router.push('/list')
    // push一个带有path属性的对象
    router.push({ path: '/list' })
}
</script>

<template>
    <div>
        <router-link to="/">home页</router-link> <br>
        <router-link to="/list">list页</router-link> <br>
        <router-link to="/showAll">showAll页</router-link> <br>
        <router-link to="/add">add页</router-link> <br>
        <router-link to="/update">update页</router-link> <br>
        <button @click="showList()">showList</button> <br>
        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>

<script setup>
import {useRouter} from 'vue-router';
const router=useRouter()
function showDetail(id,lang){
    router.push(`/showDetail/${id}/${lang}`)
}
function showDetail2(id,lang){
    router.push(`/showDetail2?id=${id}&lang=${lang}`)
}
</script>

<template>
    <div>

        <router-link to="/showDetail/1/java">声明式路由路径传参</router-link> <br>
        <button @click="showDetail(2,'php')">编程式路由路径传参</button>
        <hr>

        <router-link to="/showDetail2?id=2&lang=retty">声明式路由键值对传参</router-link> <br>
        <button @click="showDetail2(3, 'python')">编程式路由键值对传参</button>
        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>

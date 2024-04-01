<script setup>
import { useRoute } from 'vue-router'
import { ref,onUpdated } from 'vue'
/* 
 route.params接受路径参数
  route.query接受键值对参数
 */
let route = useRoute()
let langId = ref(0)
let langName = ref('')
langId.value = route.query.id
langName.value = route.query.lang
onUpdated(() => {
    langId.value = route.query.id
    langName.value = route.query.lang
})
</script>


<template>
    <div>
       <h1>ShowDetail2接受键值对参数</h1>
       <h2>{{langId}}{{langName}}是语言</h2>
    </div>
</template>


<style lang="scss" scoped></style>
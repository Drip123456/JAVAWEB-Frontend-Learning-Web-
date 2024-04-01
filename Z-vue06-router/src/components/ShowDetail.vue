<script setup>
import { useRoute } from 'vue-router'
import { ref,onUpdated } from 'vue'

let route = useRoute()
let langId = ref(0)
let langName = ref('')
langId.value = route.params.id
langName.value = route.params.lang
onUpdated(() => {
    langId.value = route.params.id
    langName.value = route.params.lang
})
</script>


<template>
    <div>
       <h1>ShowDetail接受路径参数</h1>
       <h2>{{langId}}{{langName}}是语言</h2>
    </div>
</template>


<style lang="scss" scoped></style>
<script setup>
import { ref, onBeforeMount, onMounted, onUpdated, onBeforeUpdate } from "vue";
//挂载之前
onBeforeMount(() => {
  console.log("=======onBeforeMount=======")
})
//挂载完成
onMounted(() => {
  console.log("=======onMounted=======")

})
//更新之前(更新响应书数据到dom树)
onBeforeUpdate(() => [
  console.log("=======onBeforeUpdate=======")

])
//更新之后(更新响应书数据到dom树)
onUpdated(() => {
  console.log("=======onUpdated=======")

})
let Msg = ref(1)
</script>

<template>
  <div>
    <span>{{ Msg }}</span>
    <button @click="Msg++"> Change Msg</button>
  </div>

</template>

<style scoped></style>

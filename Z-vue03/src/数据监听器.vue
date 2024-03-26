<script setup>
import { ref, reactive, watch, computed, watchEffect } from 'vue';
let fullname = ref('')
let firstname = ref('')
let lastname = reactive({
  name: ''
})
// watch(firstname, (newValue, oldValue) => {
//   console.log(`${oldValue}变为${newValue}`)
//   fullname.value = firstname.value + lastname.name
// })
// watch(() => lastname.name, (newValue, oldValue) => {
//   console.log(`${oldValue}变为${newValue}`)
//   fullname.value = firstname.value + lastname.name
// })
// watch(() => lastname, (newValue, oldValue) => {
//   // 此时的newValue和oldValue一样,都是lastname
//   console.log(newValue)
//   console.log(oldValue)
//   fullname.value = firstname.value + lastname.name
// }, { deep: true, immediate: true })
// let fullname = computed(() => {
//   return `${firstname.value}${lastname.name}`
// })

// watchEffect默认监听所有的响应式数据
//监听所有响应式数据
watchEffect(() => {
  //直接在内部使用监听属性即可！不用外部声明
  //也不需要，即时回调设置！默认初始化就加载！
  console.log(firstname.value)
  console.log(lastname.name)
  fullname.value = `${firstname.value}${lastname.name}`
})
</script>

<template>
  <div>
    姓氏：<input type="text" v-model="firstname"><br>
    名字：<input type="text" v-model="lastname.name"><br>
    全名：{{ fullname }}
  </div>

</template>

<style scoped></style>

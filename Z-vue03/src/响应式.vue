<script setup>
  import {ref,reactive} from 'vue';
// 将普通数据变成响应式数据
    // 1.ref函数  适合单个变量
    // 2.reactive函数 适合对象
    // /* 函数中要操作reactive处理过的数据,需要通过 对象名.属性名的方式 */
    let count=ref(1);
    let incr=()=>{
      count.value++;
    }
    let decr=()=>{
      count.value--;
    }
    let person=reactive({
      name:"",
      age:10
    })
    let PersonIncr=()=>{
      person.age++;
    }

</script>

<template>
  <div>
    
  <button @click="incr()">+</button>
  <button @click="count++">+</button>
  {{ count }}
  <button @click="decr()">-</button>
  <button @click="count--">-</button>
  </div>
  <hr>
  <button @click="PersonIncr()">'+'</button>
  <button @click="person.age++">'+'</button>
  {{ person.age }}

</template>

<style scoped>

</style>

<script setup>
import {ref} from 'vue';
/* 
我们可以使用 `v-on` 来监听 DOM 事件，并在事件触发时执行对应的 Vue的JavaScript代码。
用法：`v-on:click="handler"` 或简写为 `@click="handler"`
vue中的事件名=原生事件名去掉`on` 前缀   如:`onClick --> click`
handler的值可以是方法事件处理器,也可以是内联事件处理器
绑定事件时,可以通过一些绑定的修饰符,常见的事件修饰符如下
  .once：只触发一次事件。[重点]`
  .prevent：阻止默认事件。[重点]`
  .stop：阻止事件冒泡。
  .capture：使用事件捕获模式而不是冒泡模式。
  .self：只在事件发送者自身触发时才触发事件。
 */
let counter=ref(0)

let fun1=()=>{
  counter.value++
}
let fun2=()=>{
  counter.value--
}
let fun3=()=>{
  alert("超链接被点击了")
}

let fun4=(event)=>{
   let flag=confirm("确认要访问吗")
    if(!flag){
    event.preventDefault()
  }
}
</script>

<template>
  <div>
  <button @click="fun1">+</button>
  {{ counter }}
  <button @click="fun2">-</button>
  </div> 
   <div>
  <button @click.once="fun1">+</button>
  {{ counter }}
  <button @click="fun2">-</button>
  </div> 

  <div>
       <!-- 原生js方式阻止组件默认行为 (推荐) -->
    <a href="https://www.bilibili.com" @click="fun4($event)">询问跳转</a>
    <br>
    <a href="https://www.bilibili.com" @click.prevent="fun3()">prevent</a>  
  </div>
   <a href="http://www.atguigu.com" target="_blank" @click="incrCount($event)">prevent333</a> <br>

</template>

<style scoped>

</style>

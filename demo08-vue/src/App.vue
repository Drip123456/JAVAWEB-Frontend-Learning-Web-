<script setup>
// import HelloWorld from './components/HelloWorld.vue'
//css样式的导入方式
  /*  1. 在.vue文件的style标签中
      2. 将css独立保存文件中，vue哪里需要哪里导入
          全局引入main.js import './style/reset.css' //书写引入的资源的相对路径即可！
          vue文件script代码引入 import './style/reset.css'
          Vue文件style代码引入 @import './style/reset.css'
   */
  import    './style/test.css';
</script>

<template>
 <div>
  <span class="s1">你好</span>
 </div>
</template>

<style scoped>
/* @import './style.css/test.css' */
</style>

<script setup>
  // Attribute属性渲染
  /* 
   想要渲染一个元素的 attribute，应该使用 `v-bind`指令
 由于插值表达式不能直接放在标签的属性中,所有要渲染元素的属性就应该使用v-bind
 v-bind可以用于渲染任何元素的属性,语法为 `v-bind:属性名='数据名'`, 可以简写为 `:属性名='数据名'` */


 const data={
    logo:'https://s21.ax1x.com/2024/03/17/pF2xWWV.png',
    name: '斋藤飞鸟',
    url:"https://www.bilibili.com"
    
 }
</script>

<template>
  <div>
    <a v-bind:href=data.url>
   <img v-bind:src="data.logo" width="300px" height="300px" v-bind:title="data.name"/>
     <img 
        :src="data.logo" 
        :title="data.name">
   </a>
  </div>

</template>

<style scoped>

</style>

<script setup>
/* 
  为了渲染双标中的文本,我们也可以选择使用`v-text`和`v-html`命令
  v-*** 这种写法的方式使用的是vue的命令
  v-***的命令必须依赖元素,并且要写在元素的开始标签中
  v-***指令支持ES6中的字符串模板
  插值表达式中支持javascript的运算表达式
  插值表达式中也支持函数的调用
  v-text可以将数据渲染成双标签中间的文本,但是不识别html元素结构的文本
  v-html可以将数据渲染成双标签中间的文本,识别html元素结构的文本 */
  let msg='Hello Vue'
  let test='Vue3'
  let msg2=`Hello ${test}`
  let age = 19
  let bee = '蜜 蜂'
  let getMsg=()=>{
    return 'hello'
  }
  let redMsg ="<font color='red'>msg</font>"
  let greenMsg =`<font color=\'green\'>${msg}</font>`
</script>

<template>
  <div>
  <h1 v-text="msg"> </h1>
  <h1 v-text="msg2"></h1>
  <h1 v-text="`你好 ${test}`"></h1>
  <h1 v-text="bee.split(' ').reverse().join('-')"></h1>
  <h1 v-text="age>18?'成年':'未成年'" ></h1>
  <h1 v-text="getMsg()"></h1>
  <h1 v-text="redMsg"></h1>
  <h1 v-html="redMsg"></h1>
  <h1 v-html="greenMsg"></h1>

  </div>

</template>

<style scoped>

</style>

<script setup>
/* 
  插值表达式:最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 ,即双大括号`{{}}`
 */
// 定义一些常见类型的数据
let msg='Hello Vue3'
let getMsg=()=>{
  return "Hello Vue3 Msg"
}
let age=20
let bee="蜜 蜂"
let carts=[{name:'可乐',price:13,number:10},{name:'苹果',price:20,number:5}]
function compute(){
  let count=0
  for(let index in carts){
    count+=carts[index].price*carts[index].number
  }
  return count
}
</script>

<template>
  <!-- 将数据绑定到下面的元素上 -->
 
    <div>
    <h1>{{ msg }}</h1>
    msg的值为: {{ msg }} <br>
    getMsg返回的值为:{{ getMsg() }}  <br>
    是否成年: {{ age>=18?'true':'false' }} <br>
    反转: {{ bee.split(' ').reverse().join('-') }} <br>
    购物车总金额: {{ compute() }} <br/>
    购物车总金额: {{carts[0].price*carts[0].number + carts[1].price*carts[1].number}} <br>
  </div>

 
</template>

<style scoped>
</style>

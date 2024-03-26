<script setup>
import {ref,reactive} from 'vue'

    //定义一些要展示到html的数据   变量、对象


     //非响应式数据: 修改后VUE不会更新DOM
            //响应式数据:   修改后VUE会更新DOM
            //VUE2中数据默认是响应式的
            //VUE3中数据要经过ref或者reactive处理后才是响应式的
            //ref是VUE3框架提供的一个函数,需要导入
            //let counter = 1
            //ref处理的响应式数据在js编码修改的时候需要通过.value操作
            //ref响应式数据在绑定到html/template上时不需要.value
    let counter = ref(10)
    function counterIncr(){
      counter.value++;
    }
    function counterDecr(){
      counter.value--;
    }
    let showCounter=()=>{
      alert(counter.value)
    }
    
</script>

<template>
  <div>
  <button @click="counterIncr">+</button>
  <span v-text="counter"></span>
  <button @click="counterDecr">-</button>
  <button @click="showCounter"></button>

  </div>
</template>

<style scoped>

</style>

<script setup>
// 向父组件发送参数（组件之间传递数据）
// defineEmits用于向父组件App.vue提交数据的事件以及正式提交数据

import { defineEmits } from "vue";
// 定义一个想组件提交数据的事件 名称自定义
// defineEmits(["a", "b", "c"])//定义多个事件
const emits = defineEmits(["sendMenu"])

function send(data) {
  emits("sendMenu", data)
}
</script>

<template>
  <div>
    <ul>
      <li @click="send('学员管理')">学员管理</li>
      <li @click="send('图书管理')">图书管理</li>
      <li @click="send('请假管理')">请假管理</li>
      <li @click="send('考试管理')">考试管理</li>
      <li @click="send('班级管理')">班级管理</li>
      <li @click="send('教师管理')">教师管理</li>
    </ul>
  </div>
</template>

<style scoped></style>

<script setup>
/* 单向绑定: 响应式数据的变化会更新dom树,
但是dom树上用户的操作造成的数据改变不会同步更新到响应式数据

双向绑定: 响应式数据的变化会更新dom树,
但是dom树上用户的操作造成的数据改变会同步更新到响应式数据 
用户通过表单标签才能够输入数据,所以双向绑定都是应用到表单标签上的,其他标签不行*/

/**
 *  v-model专门用于双向绑定表单标签的value属性,语法为 `v-model:value=''`,可以简写为 `v-model=''`
 * v-model还可以用于各种不同类型的输入，`<textarea>`、`<select>` 元素。
 */
import { reactive, ref } from 'vue'
let hbs = ref([]); //装爱好的值
let user = reactive({
  username: null,
  password: null,
  introduce: null,
  pro: null
})
function login() {
  alert(hbs.value);
  alert(JSON.stringify(user));
}
function clearx() {
  // user = {};// 这中写法会将数据变成非响应的,应该是user.username=""
  user.username = ''
  user.password = ''
  user.introduce = ''
  user.pro = ''
  hbs.value.splice(0, hbs.value.length);
}

</script>

<template>
  账号： <input type="text" placeholder="请输入账号！" v-model="user.username"> <br>
  密码： <input type="text" placeholder="请输入密码！" v-model="user.password"> <br>
  爱好：
  吃 <input type="checkbox" name="hbs" v-model="hbs" value="吃">
  喝 <input type="checkbox" name="hbs" v-model="hbs" value="喝">
  玩 <input type="checkbox" name="hbs" v-model="hbs" value="玩">
  乐 <input type="checkbox" name="hbs" v-model="hbs" value="乐">
  <br>
  简介 <textarea name="introduce" v-model="user.introduce" cols="30" rows="10"></textarea>
  <br>
  籍贯<select v-model="user.pro">
    <option value="京">京</option>
    <option value="津">津</option>
    <option value="冀">冀</option>
  </select>
  {{ user }}
  <br>
  {{ hbs }}
  <br>
  <button @click="login()">登录</button>
  <button @click="clearx()">重置</button>

</template>

<style scoped></style>

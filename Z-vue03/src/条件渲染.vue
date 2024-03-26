<script setup>
import {ref,reactive} from 'vue';
/* 
条件渲染
  v-if 条件渲染

  v-if=表达式只会在指令的表达式返回真值时才被渲染
  也可以使用 v-else 为 v-if 添加一个“else 区块”。
  一个 v-else 元素必须跟在一个 v-if 元素后面，否则它将不会被识别。
 */

 /* 
v-if vs v-show
v-if 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。
v-if 也是**惰性**的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。
v-show  简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS `display` 属性会被切换。
总的来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 `v-show` 较好；如果在运行时绑定条件很少改变，则 `v-if` 会更合适。 */
let flag=ref(false)
</script>

<template>
  <div>
  <h1 id="ha" v-if="flag">Vue is awesome</h1>
  <h1 id="hc"  v-else>Oh no 😢</h1>
<h1 id="hc" v-show="flag">Hahaha</h1>
  <!-- 实现点击展现 -->
  <button @click="flag = !flag">Toggle</button>
  </div>

</template>

<style scoped>

</style>

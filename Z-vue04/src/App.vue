<script setup>
import { ref, reactive } from 'vue';
// 引入多个 .vue组件，之后打包到一个vue文件，挂载到div上
import Header from './components/Header.vue'
import Navigator from "./components/Navigator.vue";
import Content from "./components/Content.vue";

let msg = ref('')
function receiver(data) {
  msg.value = data
}
</script>

<template>
  <div>
    {{ msg }}
    <hr>
    <Header class="header"></Header>
    <Navigator @send-menu="receiver" class="navigator"></Navigator>
    <Content :message="msg" class="content"></Content>
  </div>
</template>

<style scoped>
.header {
  border: 1px solid red;
  height: 80px;
}

.navigator {
  border: 1px solid green;
  width: 20%;
  height: 500px;
  float: left;
}

.content {
  border: 1px solid blue;
  width: 79%;
  height: 500px;
  float: right;
}
</style>

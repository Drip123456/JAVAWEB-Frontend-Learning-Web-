<script setup>
import { ref, reactive } from 'vue';

let items = reactive([
  {
    id: "item1",
    message: "薯片"
  },
  {
    id: "item2",
    message: "可乐"
  },
  {
    id: "item3",
    message: "炸鸡"
  }])
let carts = reactive([
  {
    name: '可乐',
    price: 12,
    number: 2
  },
  {
    name: '薯片',
    price: 8,
    number: 3
  },
  {
    name: '炸鸡',
    price: 30,
    number: 5
  }
])
function compute() {
  let count = 0;
  for (let index in carts) {
    count += carts[index].price * carts[index].number;
  }
  return count;
}
//删除购物项方法
function removeCart(index) {
  carts.splice(index, 1);
}
function clearCarts() {
  carts.splice(0, carts.length)
}

</script>

<template>
  <div>
    <!--  <ul>
      <li v-for="(item, index) in items">
        {{ index + 1 }} {{ item.message }}
      </li>
    </ul> -->

    <h1>你的购物车如下</h1>
    <table border="1px">
      <thead>
        <tr>
          <td>序号</td>
          <td>名称</td>
          <td>价格</td>
          <td>数量</td>
          <td>小计</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody v-if="carts.length > 0">
        <tr v-for="(cart, index) in carts">
          <td>{{ index + 1 }}</td>
          <td>{{ cart.name }}</td>
          <td>{{ cart.price }}</td>
          <td>{{ cart.number }}</td>
          <td>{{ cart.price * cart.number }}</td>
          <td><button @click="removeCart()">删除</button></td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="6">购物车空了</td>
        </tr>
      </tbody>
    </table>
    <button @click="clearCarts()">一键清空购物车</button>

  </div>
  购物车总结{{ compute() }}元
</template>

<style scoped></style>

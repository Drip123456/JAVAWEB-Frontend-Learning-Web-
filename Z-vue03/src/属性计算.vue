<script setup>
// 属性计算
import { reactive, computed } from 'vue'
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
// 调用方法,每个标签都会调用一次
function hasBooks() {
  console.log("hasBooks?")
  return author.books.length > 0 ? '是' : '否'
}
//属性计算,属性值不变时,多个个标签只会调用一次 
// 通过计算属性获得数据，每次使用，如果和上一次使用时，数据没有变化，则直接使用上一次的结果
let bookMessage = computed(() => {
  console.log('bookmessage')
  return author.books.length > 0 ? '是' : '否'
})
</script>

<template>
  <div>
    作者：{{ author.name }} <br>
    是否出版过图书： {{ hasBooks() }} <br>
    是否出版过图书： {{ hasBooks() }} <br>
    是否出版过图书： {{ hasBooks() }} <br>
    是否出版过图书： {{ bookMessage }} <br>
    是否出版过图书： {{ bookMessage }} <br>
    是否出版过图书： {{ bookMessage }} <br>
    是否出版过图书： {{ bookMessage }} <br>

  </div>

</template>

<style scoped></style>

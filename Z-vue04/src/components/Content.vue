<script setup>
// 接受父组件
import { ref, reactive, defineProps } from 'vue';
defineProps({
    // 默认响应式
    message: String
})

</script>

<template>
    <div>
        <!-- 这里是主要展示主要内容 -->
        {{ message }}
    </div>
</template>

<style scoped></style>

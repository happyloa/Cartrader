<template>
  <!-- 單一車輛頁面的容器 -->
  <CarSinglePage />
</template>

<script setup>
// 獲取當前路由資訊
const route = useRoute();
// 引入 toTitleCase function
const { toTitleCase } = useUtilities();

// 設定網頁標題，標題會根據路由參數的名稱轉換為標題格式
useHead({
  title: toTitleCase(route.params.name),
});

// 使用 custom.vue 作為 layout
definePageMeta({
  layout: 'custom',
});
</script>

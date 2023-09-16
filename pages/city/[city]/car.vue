<template>
  <!-- 包含車輛列表和內容的容器區域 -->
  <div class="mt-32 flex">
    <!-- 車輛列表頁面的側邊欄 -->
    <CarsSideBar />
    <!-- Nuxt頁面，用於顯示車輛資訊 -->
    <NuxtPage />
  </div>
</template>

<script setup>
// 獲取當前路由資訊
const route = useRoute();
// 引入 toTitleCase function
const { toTitleCase } = useUtilities();

// 設定網頁標題，標題會包含城市和製造商（如果有的話）
useHead({
  title: `${
    route.params.make ? toTitleCase(route.params.make) : 'Cars'
  } in ${toTitleCase(route.params.city)}`,
});

// 使用 custom.vue 作為 layout
definePageMeta({
  layout: 'custom',
});
</script>

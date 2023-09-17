<template>
  <!-- 主要容器，包含車輛列表和內容 -->
  <div class="mt-32 flex">
    <!-- 左側的側邊欄，用於顯示車輛篩選選項 -->
    <CarsSideBar />
    <!-- 中央的主內容區，用於顯示車輛資訊。這是一個 NuxtPage 元件，會根據路由動態變化。 -->
    <NuxtPage />
  </div>
</template>

<script setup>
// 使用 Vue Router 的 useRoute 函數獲取當前路由的資訊。
const route = useRoute();

// 從 useUtilities 自定義 Hook 中引入 toTitleCase 函數。
const { toTitleCase } = useUtilities();

// 使用 useHead 函數設定網頁的標題。
// 如果路由參數中有 'make'（車的製造商），則將其轉換為標題格式。
// 'city'（城市名稱）也會被轉換為標題格式並顯示在標題中。
useHead({
  title: `${
    route.params.make ? toTitleCase(route.params.make) : 'Cars'
  } in ${toTitleCase(route.params.city)}`,
});

// 使用 definePageMeta 函數設定頁面的 layout 屬性為 'custom'。
// 這意味著這個頁面將使用名為 'custom.vue' 的 layout。
definePageMeta({
  layout: 'custom',
});
</script>

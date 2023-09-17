<template>
  <!-- 如果 car 存在，則顯示 CarSinglePage 元件 -->
  <div v-if="car">
    <!-- CarSinglePage 是一個用於展示單一車輛資訊的子元件 -->
    <!-- 使用 :car="car" 將 car 對象作為 prop 傳遞給 CarSinglePage 元件 -->
    <CarSinglePage :car="car" />
  </div>
</template>

<script setup>
// 引入需要的 Composition API 函數和自定義的函數
// useRoute 用於獲取當前的 Vue 路由對象
const route = useRoute();
// useCars 是一個自定義 hook，用於提供車輛數據
const { cars } = useCars();
// useUtilities 是一個自定義 hook，其中包含了 toTitleCase 函數
const { toTitleCase } = useUtilities();

// 使用 useHead 設定當前頁面的網頁標題
// 標題會根據路由參數中的 'name' 進行轉換，使用 toTitleCase 函數轉換為標題格式
useHead({
  title: toTitleCase(route.params.name),
});

// 使用 computed 函數找到與路由參數匹配的 car 對象
const car = computed(() => {
  // 在 cars 數組中尋找一個車輛，其 id 與當前路由參數的 id 匹配
  return cars.find((c) => {
    return c.id === parseInt(route.params.id);
  });
});

// 使用 definePageMeta 函數設定頁面的 meta 數據
// 在這裡，將 layout 設置為 'custom'，這是一個自定義的佈局
definePageMeta({
  layout: 'custom',
});
</script>

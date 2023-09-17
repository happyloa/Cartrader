<template>
  <div v-if="car">
    <!-- 單一車輛頁面的容器 -->
    <CarSinglePage :car="car" />
  </div>
</template>

<script setup>
// 獲取當前路由資訊
const route = useRoute();
const { cars } = useCars();
// 引入 toTitleCase function
const { toTitleCase } = useUtilities();

// 設定網頁標題，標題會根據路由參數的名稱轉換為標題格式
useHead({
  title: toTitleCase(route.params.name),
});

const car = computed(() => {
  return cars.find((c) => {
    return c.id === parseInt(route.params.id);
  });
});

// 使用 custom.vue 作為 layout
definePageMeta({
  layout: 'custom',
});
</script>

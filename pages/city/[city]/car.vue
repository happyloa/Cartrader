<template>
  <!-- 主要容器，包含車輛列表和內容 -->
  <div class="mt-32 flex">
    <!-- Nuxt.js 的自定義錯誤邊界組件 -->
    <NuxtErrorBoundary>
      <!-- 側邊欄組件，用於篩選車輛 -->
      <CarsListSideBar />
      <!-- Nuxt.js 的內容區域 -->
      <NuxtPage />
      <!-- 自定義錯誤模板，用於顯示錯誤訊息 -->
      <template #error="{ error }">
        <div class="text-center mx-auto">
          <h1 class="text-6xl text-red-600 mb-10">
            Sorry, something went wrong
          </h1>
          <p class="text-4xl mb-10">{{ error }}</p>
          <!-- 點擊此按鈕將清除錯誤並返回 -->
          <button
            class="
              border
              rounded-full
              text-2xl
              bg-blue-400
              px-7
              py-3
              text-white
            "
            @click="error.value = null"
          >
            Go back
          </button>
        </div>
      </template>
    </NuxtErrorBoundary>
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

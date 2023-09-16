<template>
  <!-- 搜尋列 -->
  <div
    class="
      font-serif
      w-[1000px]
      text-2xl
      rounded-full
      bg-white
      flex
      justify-between
      overflow-hidden
      drop-shadow-2xl
    "
  >
    <!-- 搜尋輸入框 -->
    <input
      type="text"
      class="py-3 px-5 w-full text-2xl rounded-l-full focus:outline-none"
      :class="cityError ? 'border-2 border-red-500' : ''"
      placeholder="Search by city..."
      v-model="city"
    />
    <!-- 搜尋按鈕 -->
    <button
      class="bg-sky-500 px-10 text-white hover:bg-blue-500"
      @click="handleSearch"
    >
      Search
    </button>
  </div>
</template>

<script setup>
// 使用 Vue 3 Composition API，設定狀態和事件處理器

// 建立名為 "city" 的反應性狀態，用來存放使用者輸入的城市名稱
const city = ref('');
// 建立名為 "cityError" 的反應性狀態，用來表示是否有城市輸入錯誤
const cityError = ref(false);

// 定義名為 "handleSearch" 的函式，用於處理搜尋按鈕的點擊事件
const handleSearch = () => {
  // 檢查城市名稱是否為空
  if (!city.value) {
    // 若城市名稱為空，設定 "cityError" 為 true，用來標示輸入錯誤
    return (cityError.value = true);
  }
  // 若城市名稱不為空，導航到特定城市的車輛資訊頁面
  navigateTo(`/city/${city.value}/car`);
};
</script>

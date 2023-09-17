<template>
  <!-- 主容器，全屏高度並將所有項目置於中央 -->
  <main class="h-screen flex flex-col justify-center items-center">
    <!-- 顯示錯誤狀態碼，字體大小為 9xl -->
    <h1 class="text-9xl">{{ error.statusCode }}</h1>
    <!-- 顯示錯誤消息，字體大小為 4xl 並在上方有一個間隔（margin-top） -->
    <p class="mt-7 text-4xl">{{ error.message }}</p>
    <!-- "Go back" 按鈕，點擊後會返回首頁 -->
    <button
      @click="handleError"
      class="border rounded-full mt-7 text-2xl bg-blue-400 px-7 py-3 text-white"
    >
      Go back
    </button>
  </main>
</template>

<script setup>
// 使用 useError 鉤子獲取錯誤資訊
const error = useError();

// handleError 函式，用於處理錯誤，清除錯誤狀態並重定向到首頁
const handleError = () => {
  clearError({
    redirect: '/',
  });
};
</script>

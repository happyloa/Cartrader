<template>
  <!-- 主要容器，用於顯示首頁的橫幅（Banner） -->
  <div><HomeBanner /></div>
</template>

<script setup>
// 使用 useHead 函數設定網頁的標題為 "Car Trader"。
useHead({
  title: 'Car Trader',
});
</script>

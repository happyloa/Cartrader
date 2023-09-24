<template>
  <!-- 這是一個簡單的標題組件。它將使用從外部傳入的 'Heading' 屬性作為其內容。 -->
  <!-- 樣式被設置為 text-8xl, font-serif, mb-10, 和 text-white。 -->
  <h1 class="text-8xl font-serif mb-10 text-white">{{ Heading }}</h1>
</template>

<script setup>
// 這裡定義了組件的 props。
// 我們期望從外部接收一個名為 'Heading' 的屬性，其類型為 String。
defineProps({
  Heading: String,
});
</script>

<template>
  <!-- 網站底部 (footer) 區塊 -->
  <footer class="bg-black py-4 text-center text-white">
    <!-- 使用插值 (interpolation) 來顯示當前年份 -->
    <!-- 使用 &copy; 來呈現版權符號 -->
    <p>
      &copy;{{ currentYear }} - Cartrader By
      <!-- 連結到謝宗佑的個人網站，並在新標籤中打開 -->
      <a
        href="https://wolfpackportfolio.com"
        target="_blank"
        class="hover:text-yellow-500"
        >謝宗佑</a
      >
    </p>
  </footer>
</template>

<script>
export default {
  // 定義組件的 data 函數
  data() {
    return {
      currentYear: new Date().getFullYear(), // 使用 JavaScript 獲取當前年份
    };
  },
};
</script>

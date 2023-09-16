<template>
  <footer class="bg-black py-4 text-center text-white">
    <!-- 使用插值方式顯示當前年份 -->
    <p>
      &copy;{{ currentYear }} - Cartrader By
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
  data() {
    return {
      currentYear: new Date().getFullYear(), // 獲取當前年份
    };
  },
};
</script>

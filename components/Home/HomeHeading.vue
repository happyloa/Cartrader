<template>
  <!-- 使用props來顯示標題文字 -->
  <h1 class="text-8xl font-serif mb-10 text-white">{{ Heading }}</h1>
</template>

<script>
export default {
  props: {
    Heading: String, // 定義一個名為 Heading 的 props，類型為 String
  },
};
</script>

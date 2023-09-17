<template>
  <!-- 頂部導航條 (header) -->
  <!-- sticky: 固定在頂部 -->
  <!-- top-0: 距離頂部距離為0 -->
  <!-- z-50: z-index設為50，確保在其他元素之上 -->
  <!-- flex, justify-between, items-center: 使用 Flexbox 布局，水平兩端對齊，垂直居中對齊 -->
  <!-- space-x-1: 子元素間的水平間距 -->
  <!-- border-b: 底部加上邊框 -->
  <!-- bg-white, p-4, shadow-md: 背景為白色，內間距為4，陰影中等 -->
  <header
    class="
      sticky
      top-0
      z-50
      flex
      justify-between
      items-center
      space-x-1
      border-b
      bg-white
      p-4
      shadow-md
    "
  >
    <!-- NuxtLink 用於內部導航，點擊後將導航到根路徑 "/" -->
    <!-- text-3xl: 文本大小為3xl -->
    <!-- font-mono: 使用等寬字體 -->
    <NuxtLink to="/" class="text-3xl font-mono">Cartrader</NuxtLink>
  </header>
</template>

<template>
  <!-- 覆蓋在 Banner 上的半透明 div，用於增加背景深度和提高可讀性 -->
  <div class="z-1 absolute w-full h-full bg-black opacity-50"></div>

  <!-- 主要內容區域，具有較高的 z-index 以覆蓋半透明背景 -->
  <main class="z-10 absolute text-center w-1/2">
    <!-- 標題文字，使用 HomeHeading 組件來顯示 -->
    <HomeHeading Heading="Find Your Drive" />

    <!-- 搜尋列，使用 HomeSearch 組件來實現 -->
    <HomeSearch />
  </main>
</template>

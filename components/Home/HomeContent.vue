<template>
  <!-- 覆蓋在 Banner 上的半透明 div -->
  <div class="z-1 absolute w-full h-full bg-black opacity-50"></div>
  <main class="z-10 absolute text-center w-1/2">
    <!-- 標題文字 -->
    <HomeHeading HomeBannerHeading="Find Your Drive" />>
    <!-- 搜尋列 -->
    <HomeSearch />
  </main>
</template>

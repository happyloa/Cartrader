<template>
  <!-- Hero 區域 -->
  <section
    class="
      relative
      h-screen
      w-100
      bg-no-repeat bg-cover bg-center bg-[url('@/assets/home-hero-banner.webp')]
      flex
      justify-center
      items-center
    "
  >
    <!-- Hero 區域的內容，來自另一個 Vue 組件 -->
    <HomeContent />
  </section>
</template>

<template>
  <Navbar />
  <section
    class="
      mx-auto
      mt-4
      max-w-7xl
      space-y-4
      px-4
      xs:px-8
      sm:px-10
      lg:px-16
      pb-16
      w-3/5
    "
  >
    <div class="mt-32 flex">
      <!-- 列表頁面側邊攔 -->
      <CarsSideBar />
      <NuxtPage />
    </div>
  </section>
</template>

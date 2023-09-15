<template>
  <section
    class="
      relative
      h-screen
      w-100
      bg-no-repeat bg-cover bg-center
      bg-[url('https://raw.githubusercontent.com/happyloa/Cartrader/main/assets/home-hero-banner.webp')]
    "
  >
    <div class="relative h-full flex justify-center items-center">
      <!-- 覆蓋在 Banner 上的半透明 div -->
      <div class="z-1 absolute w-full h-full bg-black opacity-50"></div>
      <div class="z-10 absolute text-center w-1/2">
        <!-- 標題文字 -->
        <h1 class="text-8xl font-serif mb-10 text-white">Find Your Drive</h1>
        <!-- 搜尋列 -->
        <div
          class="
            font-serif
            w-[1000px]
            text-2xl
            rounded-full
            bg-white
            flex
            justify-between
            overflow-hidden
            drop-shadow-2xl
            mx-auto
          "
        >
          <input
            type="text"
            class="py-3 px-5 w-full text-2xl focus:outline-none"
            placeholder="Search by city..."
          />
          <button class="bg-sky-500 px-10 text-white hover:bg-blue-500">
            Search
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

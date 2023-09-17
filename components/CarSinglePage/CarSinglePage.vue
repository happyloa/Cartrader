<template>
  <!-- 整個模板是用於展示單一汽車的詳細資訊 -->

  <!-- Hero 區塊：主要用於展示汽車圖片和基本資料 -->
  <div class="mt-10">
    <!-- 圖片區：使用綁定的 car.url 作為圖片來源 -->
    <NuxtImg :src="car.url" alt="" class="w-full" />
    <!-- 汽車名稱 -->
    <h1 class="mt-10 text-4xl">{{ car.name }}</h1>
    <!-- 汽車屬性（座位數、里程數、價格） -->
    <div class="text-slate-500 text-lg flex justify-between py-5 border-b">
      <div>
        <!-- 座位數量 -->
        <span class="mr-2">{{ car.seats }} Seats</span>
        <!-- 分隔符 -->
        <span class="mr-2">|</span>
        <!-- 里程數 -->
        <span class="mr-2">{{ car.miles }} Miles</span>
      </div>
      <!-- 汽車價格 -->
      <div>
        <p class="font-bold text-2xl">${{ car.price }}</p>
      </div>
    </div>
  </div>

  <!-- Features 區塊：用於展示汽車的各種特性 -->
  <main class="py-5 border-b">
    <!-- 利用 v-for 迴圈遍歷 car.features 陣列，展示每個特性 -->
    <div class="text-lg mb-3" v-for="feature in car.features" :key="feature">
      <!-- ✔ 符號作為特性的圖示 -->
      <span class="text-lime-800 mr-3">✔</span>
      <!-- 特性描述 -->
      <span>{{ feature }}</span>
    </div>
  </main>

  <!-- Description 區塊：用於展示汽車的詳細描述 -->
  <p class="mt-5 mb-10">{{ car.description }}</p>

  <!-- Contact Form 區塊：一個用於聯絡或查詢的表單 -->
  <CarSinglePageForm />
</template>

<script setup>
// 定義接收的 props
// car 是一個 Object，包含了所有的汽車資料
const props = defineProps({
  car: Object,
});
</script>

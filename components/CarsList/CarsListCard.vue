<template>
  <!-- 汽車卡片列表 -->
  <main class="w-full">
    <!-- 迭代顯示每輛汽車的卡片 -->
    <section
      class="shadow border overflow-hidden mb-5 cursor-pointer h-[200px]"
      v-for="car in cars"
      :key="car.id"
      :car="car"
      @click="navigateTo(`/car/${car.name}-${car.id}`)"
    >
      <article class="flex h-full">
        <!-- 顯示汽車圖片 -->
        <img :src="car.url" alt="" class="w-[300px] h-full" />
        <div class="p-4 flex flex-col">
          <!-- 顯示汽車名稱 -->
          <h2 class="text-2xl text-blue-700">{{ car.name }}</h2>
          <!-- 顯示汽車描述 -->
          <p class="text-gray-700">
            {{ car.description }}
          </p>
          <!-- 顯示汽車價格 -->
          <h2 class="mt-auto text-xl">${{ car.price }}</h2>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup>
// 從 useCars() 鉤子中獲取汽車數據
const { cars } = useCars();

// 定義 props，接收一個 car 物件作為參數
const props = defineProps({
  car: Object,
});
</script>

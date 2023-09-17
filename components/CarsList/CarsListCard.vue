<template>
  <!-- 主容器：用於展示汽車卡片列表 -->
  <main class="w-full">
    <!-- 使用 v-for 迴圈遍歷 cars 陣列，為每輛汽車生成一個卡片 -->
    <section
      class="shadow border overflow-hidden mb-5 cursor-pointer h-[200px]"
      v-for="car in cars"
      :key="car.id"
      :car="car"
      @click="navigateTo(`/car/${car.name}-${car.id}`)"
    >
      <!-- 單一汽車卡片容器 -->
      <article class="flex h-full">
        <!-- 汽車圖片區塊：使用綁定的 car.url 作為圖片來源 -->
        <NuxtImg :src="car.url" alt="" class="w-[300px] h-full" />

        <!-- 汽車資訊區塊：包括名稱、描述和價格 -->
        <div class="p-4 flex flex-col">
          <!-- 汽車名稱 -->
          <h2 class="text-2xl text-blue-700">{{ car.name }}</h2>
          <!-- 汽車描述 -->
          <p class="text-gray-700">
            {{ car.description }}
          </p>
          <!-- 汽車價格：自動貼齊到底部 (mt-auto) -->
          <h2 class="mt-auto text-xl">${{ car.price }}</h2>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup>
// 從 useCars() 自定義鉤子中獲取所有的汽車數據
const { cars } = useCars();
</script>

<script setup>
import Filled from '@/assets/heartFilled.webp';
import Outline from '@/assets/heartOutline.webp';

const props = defineProps({
  car: Object,
});

const favored = useState(`favored-${props.car.id}`, () => {
  return false;
});
</script>

<template>
  <section
    class="relative shadow border overflow-hidden mb-7 cursor-pointer h-[200px]"
  >
    <!-- 使用 v-for 迴圈遍歷 cars 陣列，為每輛汽車生成一個卡片 -->
    <img
      :src="favored ? Filled : Outline"
      alt="蒐藏圖示"
      class="absolute w-7 right-5 top-4 z-20"
      @click="favored = !favored"
    />
    <!-- 單一汽車卡片容器 -->
    <article
      class="flex h-full"
      @click="navigateTo(`/car/${car.name}-${car.id}`)"
    >
      <!-- 汽車圖片區塊：使用綁定的 car.url 作為圖片來源 -->
      <NuxtImg :src="car.url" alt="" class="w-[300px]" />

      <!-- 汽車資訊區塊：包括名稱、描述和價格 -->
      <div class="p-4 pr-9 flex flex-col">
        <!-- 汽車名稱 -->
        <h2 class="text-2xl text-blue-700">{{ car.name }}</h2>
        <!-- 汽車描述 -->
        <p class="text-gray-700">
          {{ car.description }}
        </p>
        <!-- 汽車價格：自動貼齊到底部 (mt-auto) -->
        <span class="mt-auto text-xl">${{ car.price }}</span>
      </div>
    </article>
  </section>
</template>

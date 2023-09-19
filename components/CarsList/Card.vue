<script setup>
// 引入兩種不同的心形圖標：一個填充（已收藏），一個空心（未收藏）
import Filled from '@/assets/heartFilled.webp';
import Outline from '@/assets/heartOutline.webp';

// 定義元件屬性。這個元件預期接收一個名為 "car" 的 Object。
const props = defineProps({
  car: Object,
});

// 使用 useState 創建一個反應性的狀態變量 "favored" 用來記錄是否已經收藏了這輛車。
// 我們使用車輛的 ID 來創建一個獨一無二的狀態鍵。
// 初始值設為 false，表示未收藏。
const favored = useState(`favored-${props.car.id}`, () => {
  return false;
});
</script>

<template>
  <!-- 整個卡片的容器，設定了一些風格和高度 -->
  <section
    class="relative shadow border overflow-hidden mb-7 cursor-pointer h-[200px]"
  >
    <!-- 收藏按鈕，使用心形圖標 -->
    <!-- 根據 "favored" 狀態變量顯示不同的圖標 -->
    <!-- @click 事件更改 "favored" 的狀態 -->
    <img
      :src="favored ? Filled : Outline"
      alt="收藏圖示"
      class="absolute w-7 right-5 top-4 z-20"
      @click="favored = !favored"
    />

    <!-- 單一汽車的主要信息區塊 -->
    <article
      class="flex h-full"
      @click="navigateTo(`/car/${car.name}-${car.id}`)"
    >
      <!-- 汽車圖片，使用 NuxtImg 元件來優化圖片加載 -->
      <!-- :src 綁定到車輛數據的 url 屬性 -->
      <NuxtImg :src="car.url" alt="" class="w-[300px]" />

      <!-- 汽車的主要資訊區塊 -->
      <div class="p-4 pr-9 flex flex-col">
        <!-- 汽車名稱 -->
        <h2 class="text-2xl text-blue-700">{{ car.name }}</h2>
        <!-- 汽車描述 -->
        <p class="text-gray-700">
          {{ car.description }}
        </p>
        <!-- 汽車價格 -->
        <!-- 使用 mt-auto 來將價格自動貼齊到底部 -->
        <span class="mt-auto text-xl">${{ car.price }}</span>
      </div>
    </article>
  </section>
</template>

<script setup>
  // 引入兩種不同的心形圖標：一個填充（已收藏），一個空心（未收藏）。
  import Filled from '@/assets/heartFilled.webp';
  import Outline from '@/assets/heartOutline.webp';

  // 定義元件的接收屬性：車輛數據（car）和是否已收藏（favored）。
  const props = defineProps({
    car: Object,
    favored: Boolean,
  });

  // 定義可以發出的自定義事件列表，這裡只有一個 "favor" 事件。
  const emit = defineEmits(['favor']);
</script>

<template>
  <!-- 整個卡片的容器。包括一些樣式和高度 -->
  <section
    class="relative shadow border overflow-hidden mb-7 cursor-pointer h-[200px]"
  >
    <!-- 收藏按鈕，使用心形圖標 -->
    <!-- :src 根據 "favored" 的值來選擇填充或空心的圖標 -->
    <!-- 當點擊這個按鈕時，會發出 "favor" 事件並帶上 car.id -->
    <img
      :src="favored ? Filled : Outline"
      alt="收藏圖示"
      class="absolute w-7 right-5 top-4 z-20"
      @click="emit('favor', car.id)"
    />

    <!-- 單一汽車的主要信息區塊 -->
    <article
      class="flex h-full"
      @click="navigateTo(`/car/${car.name}-${car.id}`)"
    >
      <!-- 汽車圖片 -->
      <!-- 使用 NuxtImg 元件來優化圖片加載。:src 綁定到 car 對象的 url 屬性 -->
      <NuxtImg :src="car.url" alt="" class="w-[300px]" />

      <!-- 汽車的主要資訊區塊 -->
      <div class="p-4 pr-9 flex flex-col">
        <!-- 顯示汽車名稱 -->
        <h2 class="text-2xl text-blue-700">{{ car.name }}</h2>
        <!-- 顯示汽車描述 -->
        <p class="text-gray-700">
          {{ car.description }}
        </p>
        <!-- 顯示汽車價格 -->
        <!-- 使用 mt-auto 將價格信息推到區塊的底部 -->
        <span class="mt-auto text-xl">${{ car.price }}</span>
      </div>
    </article>
  </section>
</template>

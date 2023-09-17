<template>
  <!-- 汽車卡片列表 -->
  <main class="w-full">
    <div
      class="shadow border overflow-hidden mb-5 cursor-pointer h-[200px]"
      v-for="car in cars"
      :key="car.id"
      :car="car"
      @click="navigateTo(`/car/${car.name.replace(/\s/g, '')}-${car.id}`)"
    >
      <div class="flex h-full">
        <img :src="car.url" alt="" class="w-[300px] h-full" />
        <div class="p-4 flex flex-col">
          <h2 class="text-2xl text-blue-700">{{ car.name }}</h2>
          <p class="text-gray-700">
            {{ car.description }}
          </p>
          <h2 class="mt-auto text-xl">${{ car.price }}</h2>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const { cars } = useCars();

const props = defineProps({
  car: Object,
});
</script>

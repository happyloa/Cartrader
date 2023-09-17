<template>
  <!-- 汽車單頁介紹 -->
  <!-- 汽車單頁 Hero -->
  <div class="mt-10">
    <img :src="car.url" class="w-full" alt="" />
    <h1 class="mt-10 text-4xl">{{ car.name }}</h1>
    <div class="text-slate-500 text-lg flex justify-between mt-3 pb-5 border-b">
      <div class="flex">
        <p class="mr-2">{{ car.seats }}</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ car.miles }} Miles</p>
      </div>
      <div>
        <p class="font-bold text-2xl">${{ car.price }}</p>
      </div>
    </div>
  </div>
  <!-- 汽車單頁屬性 -->
  <main class="mr-10 mt-5 pb-5 border-b">
    <div
      class="flex text-lg mb-3"
      v-for="feature in car.features"
      :key="feature"
    >
      <span class="rounded text-lime-800 mr-3">✔</span>
      <p>{{ feature }}</p>
    </div>
  </main>
  <!-- 汽車單頁描述 -->
  <p class="mt-5 mb-10">{{ car.description }}</p>
  <!-- 汽車單頁聯絡表單 -->
  <CarSinglePageForm />
</template>

<script setup>
const props = defineProps({
  car: Object,
});
</script>

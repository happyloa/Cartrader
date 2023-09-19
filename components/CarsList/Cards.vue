<script setup>
// 從 useCars() 自定義鉤子中獲取所有的汽車數據
const { cars } = useCars();
</script>

<template>
  <main>
    <CarsListCard v-for="car in cars" :key="car.id" :car="car" />
  </main>
</template>

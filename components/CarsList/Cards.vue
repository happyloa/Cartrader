<script setup>
// 引入 useCars 自定義鉤子。這個鉤子專門用來獲取車輛相關數據。
const { cars } = useCars();
// `cars` 是一個反應性的數據，它會包含所有的汽車數據。

const favorite = useLocalStorage('favorite', {});

const handleFavorite = (id) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};
</script>

<template>
  <!-- 主要的 HTML 結構，包含一個 <main> 標籤，用來封裝車輛列表 -->
  <main>
    <!-- 使用 v-for 循環遍歷 cars 數據，為每一輛車創建一個 CarsListCard 元件 -->
    <!-- :key 是為了提高 Vue 的性能，每個元件都應該有一個唯一的 key -->
    <!-- :car="car" 將當前循環中的車輛數據傳遞給 CarsListCard 元件 -->
    <CarsListCard
      v-for="car in cars"
      :key="car.id"
      :car="car"
      @favor="handleFavorite"
      :favored="car.id in favorite"
    />
  </main>
</template>

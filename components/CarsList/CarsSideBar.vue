<template>
  <!-- 列表頁面側邊攔 -->
  <aside class="shadow border w-64 mr-10 z-30 h-[190px]">
    <!-- 地點過濾區塊 -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <!-- 地點過濾標題 -->
      <h3>Location</h3>
      <!-- 當前選擇的地點 -->
      <h3 class="text-blue-400 capitalize" @click="updateModal('location')">
        {{ route.params.city }}
      </h3>
      <!-- 注釋掉的部分是彈出搜尋窗，用於選擇其他地點 -->

      <div
        class="absolute border shadow left-48 top-1 p-5 -m-1 bg-white"
        v-if="modal.location"
      >
        <input type="text" class="border p-1 rounded" v-model="city" />
        <button
          class="
            bg-sky-400
            w-full
            mt-2
            rounded
            text-white
            p-1
            hover:bg-blue-400
          "
          @click="onChangeLocation"
        >
          Apply
        </button>
      </div>
    </div>

    <!-- 製造商過濾區塊 -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <!-- 製造商過濾標題 -->
      <h3>Make</h3>
      <!-- 當前選擇的製造商 -->
      <h3 class="text-blue-400 capitalize">Toyota</h3>
    </div>

    <!-- 價格過濾區塊 -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <!-- 價格過濾標題 -->
      <h3>Price</h3>
      <!-- 當前選擇的價格範圍 -->
      <h3 class="text-blue-400 capitalize">Any</h3>
    </div>
  </aside>
</template>

<script setup>
const city = ref('');
const route = useRoute();

const modal = ref({
  location: false,
  make: false,
  price: false,
});

const updateModal = (key) => {
  modal.value[key] = !modal.value[key];
};

const onChangeLocation = () => {
  if (!city.value) return;
  updateModal('location');
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
  city.value = '';
};
</script>

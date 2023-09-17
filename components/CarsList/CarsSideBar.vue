<template>
  <!-- 列表頁面側邊攔 -->
  <aside class="shadow border w-64 mr-10 z-30 h-[190px]">
    <!-- 地點過濾區塊 -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <!-- 地點過濾標題 -->
      <h3>Location</h3>
      <!-- 當前選擇的地點 -->
      <!-- @click 處理器用於顯示/隱藏地點選擇的模態窗口 -->
      <h3 class="text-blue-400 capitalize" @click="updateModal('location')">
        {{ route.params.city }}
      </h3>
      <!-- 彈出搜尋窗，用於選擇其他地點 -->
      <!-- v-if="modal.location" 控制模態窗口的顯示和隱藏 -->
      <div
        class="absolute border shadow left-48 top-1 p-5 -m-1 bg-white"
        v-if="modal.location"
      >
        <!-- 地點輸入框 -->
        <input type="text" class="border p-1 rounded" v-model="city" />
        <!-- 申請按鈕 -->
        <!-- @click 處理器用於應用選擇的地點並導航到新的URL -->
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
// 初始化城市名稱為空字串
const city = ref('');
// 使用 useRoute 鉤子獲取當前路由信息
const route = useRoute();

// 初始化模態窗口狀態為關閉
const modal = ref({
  location: false,
  make: false,
  price: false,
});

// 更新模態窗口的狀態
// 接受一個 key 參數，該參數表示要更新的模態窗口類型（地點、製造商或價格）
const updateModal = (key) => {
  modal.value[key] = !modal.value[key];
};

// 更改當前選擇的地點
// 這將更新 URL 並導航到相應的頁面
const onChangeLocation = () => {
  if (!city.value) return;

  // 檢查輸入的城市名稱是否為數字
  // 如果是，則拋出一個 400 狀態碼的錯誤，並提示 "Invalid city format"
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: 'Invalid city format',
    });
  }

  // 隱藏地點選擇模態窗口
  updateModal('location');
  // 更新路由以顯示新選擇的城市和車輛製造商
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
  // 清空輸入的城市名稱
  city.value = '';
};
</script>

<template>
  <!-- 列表頁面側邊攔 -->
  <aside class="shadow border w-64 mr-10 z-30 h-[190px]">
    <!-- 地點過濾區塊 -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <!-- 地點過濾標題 -->
      <h3>Location</h3>
      <!-- 當前選擇的地點 -->
      <h3 class="text-blue-400 capitalize">Toronto</h3>
      <!-- 注釋掉的部分是彈出搜尋窗，用於選擇其他地點 -->
      <!-- 
      <div class="absolute border shadow left-56 top-1 p-5 -m-1 bg-white">
        <input type="text" class="border p-1 rounded" />
        <button class="bg-sky-400 w-full mt-2 rounded text-white p-1 hover:bg-blue-400">
          Apply
        </button>
      </div>
      -->
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

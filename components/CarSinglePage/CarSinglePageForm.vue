<template>
  <!-- 這是一個用於單頁汽車詳情的聯絡表單 -->

  <!-- Input Fields 區塊：主要包含名稱、電子郵件和電話的輸入框 -->
  <div class="mt-10 flex justify-between w-[600px]">
    <!-- 名稱輸入框 -->
    <!-- class="border p-1" 為其添加邊框和內間距 -->
    <!-- placeholder="Name" 顯示當輸入框為空時的占位文本 -->
    <input type="text" class="border p-1" placeholder="Name" />

    <!-- 電子郵件輸入框 -->
    <!-- type="email" 表示這是一個電子郵件類型的輸入，會有瀏覽器預設的郵件格式驗證 -->
    <input type="email" class="border p-1" placeholder="Email" />

    <!-- 電話輸入框 -->
    <!-- type="tel" 表示這是一個電話號碼類型的輸入，一些裝置會提供特定的鍵盤布局 -->
    <input type="tel" class="border p-1" placeholder="Phone" />
  </div>

  <!-- Message Field 區塊：用於輸入使用者的訊息 -->
  <div class="flex mt-4 w-[600px]">
    <!-- 文本區域用於輸入較長的文本 -->
    <!-- class="border p-1 w-full" 為其添加邊框、內間距和將寬度設為滿寬 -->
    <!-- placeholder="Message" 顯示當文本區域為空時的占位文本 -->
    <textarea class="border p-1 w-full" placeholder="Message"></textarea>
  </div>

  <!-- Submit Button 區塊：用戶填寫完畢後，點擊以提交表單 -->
  <!-- class="bg-blue-400 text-white px-10 py-3 rounded mt-4" 為按鈕添加背景顏色、文本顏色、內間距和圓角 -->
  <button class="bg-blue-400 text-white px-10 py-3 rounded mt-4">Submit</button>
</template>

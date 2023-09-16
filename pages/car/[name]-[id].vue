<template>
  <!-- 單一車輛頁面的容器 -->
  <div><CarSinglePage /></div>
</template>

<script setup>
// 獲取當前路由資訊
const route = useRoute();

// 設定網頁標題，標題會根據路由參數的名稱轉換為標題格式
useHead({
  title: toTitleCase(route.params.name),
});

// 函式：將字串轉換為標題格式（首字母大寫，其餘小寫）
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
</script>

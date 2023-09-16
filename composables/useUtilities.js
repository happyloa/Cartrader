export const useUtilities = () => {
  // 函式：將字串轉換為標題格式（首字母大寫，其餘小寫）
  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  return { toTitleCase };
};

// 定義一個名為 useUtilities 的自定義 Hook
export const useUtilities = () => ({
  // 使用箭頭函式和模板字串進行簡化
  toTitleCase: (str) =>
    str.replace(
      /\w\S*/g,
      (txt) => `${txt.charAt(0).toUpperCase()}${txt.slice(1).toLowerCase()}`
    ),
});

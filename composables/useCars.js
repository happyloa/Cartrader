// 引入汽車數據，假設它們存儲在 '@/data/cars.json'
import cars from '@/data/cars.json';

// 定義一個自定義 hook，用於獲取汽車數據
export const useCars = () => {
  // 返回包含汽車數據的物件
  return {
    cars, // 返回汽車數據
  };
};

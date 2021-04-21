import { useEffect, useState } from "react";

/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-21 16:52:17
 * @LastEditTime: 2021-04-21 17:06:23
 */
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [delay, value]);

  return debouncedValue;
};

/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-21 16:30:07
 * @LastEditTime: 2021-04-21 16:45:30
 */
export const isFalsy = (value) => (value === 0 ? false : !value);
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = object[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

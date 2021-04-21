/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-21 16:30:07
 * @LastEditTime: 2021-04-21 18:23:06
 */
export const isFalsy = (value: any) => (value === 0 ? false : !value);
export const cleanObject = <T>(object: T) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = object[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

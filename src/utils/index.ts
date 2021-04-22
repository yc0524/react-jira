/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-21 16:30:07
 * @LastEditTime: 2021-04-22 09:21:17
 */
export const isFalsy = (value: any) => (value === 0 ? false : !value);
export const cleanObject = <T>(object: T) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = object[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

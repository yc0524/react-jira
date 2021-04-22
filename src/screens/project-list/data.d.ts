/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-21 17:48:36
 * @LastEditTime: 2021-04-22 14:43:46
 */
export interface User {
  id: number;
  name: string;
  token?: string;
}

export interface Project {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
}

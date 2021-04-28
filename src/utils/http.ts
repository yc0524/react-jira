/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-28 16:19:13
 * @LastEditTime: 2021-04-28 16:45:09
 */
import qs from "qs";
import * as auth from "../auth.provider";
const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  token?: string;
  data?: object;
}

export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };
  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ msg: "请重新登录" });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      }
      return Promise.reject(data);
    });
};

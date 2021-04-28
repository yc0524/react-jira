/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-28 09:24:11
 * @LastEditTime: 2021-04-28 09:28:37
 */
import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";

export const RegisterScreen = () => {
  const { register } = useAuth();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    register({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={"password"} />
      </div>
      <button type="submit">注册</button>
    </form>
  );
};

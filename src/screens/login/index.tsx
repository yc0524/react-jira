/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-22 10:50:26
 * @LastEditTime: 2021-04-22 18:42:58
 */
import React, { FormEvent } from "react";
import { useAuth } from "../../context/auth-context";

export const LoginScreen = () => {
  const { user, login } = useAuth();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      {user ? <div>登录成功，用户名是{user.name}</div> : null}
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

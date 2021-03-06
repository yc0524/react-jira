/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-28 09:24:03
 * @LastEditTime: 2021-05-17 18:32:22
 */
import React from "react";
import { useAuth } from "../context/auth-context";
import { Form, Input } from "antd";
import { LongButton } from "./index";

export const LoginScreen = () => {
  const { login } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        label="密码"
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input type="password" id={"password"} />
      </Form.Item>
      <LongButton type="primary" htmlType="submit">
        登录
      </LongButton>
    </Form>
  );
};

/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-28 09:24:11
 * @LastEditTime: 2021-05-17 18:32:44
 */
import React from "react";
import { useAuth } from "../context/auth-context";
import { Form, Input } from "antd";
import { LongButton } from "./index";

export const RegisterScreen = () => {
  const { register } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
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
        name="password"
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input type="password" id={"password"} />
      </Form.Item>
      <LongButton type="primary" htmlType="submit">
        注册
      </LongButton>
    </Form>
  );
};

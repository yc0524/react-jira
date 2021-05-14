/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-28 09:24:11
 * @LastEditTime: 2021-05-14 15:22:53
 */
import React from "react";
import { useAuth } from "../context/auth-context";
import { Form, Input, Button } from "antd";

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
      <Button type="primary" htmlType="submit">
        注册
      </Button>
    </Form>
  );
};

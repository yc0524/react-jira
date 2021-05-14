/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-22 10:50:26
 * @LastEditTime: 2021-05-13 17:49:07
 */
import React from "react";
import { useAuth } from "../../context/auth-context";
import { Form, Input, Button } from "antd";

export const LoginScreen = () => {
  const { user, login } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      {user ? <div>登录成功，用户名是{user.name}</div> : null}
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <label htmlFor="username">用户名</label>
        <Input placeholder={"用户名"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <label htmlFor="password">密码</label>
        <Input placeholder={"密码"} type="password" id={"password"} />
      </Form.Item>
      <Form.Item>
        <Button htmlType={"submit"} type={"primary"}>
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

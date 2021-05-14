/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-28 09:23:47
 * @LastEditTime: 2021-05-14 15:29:49
 */
import React, { useState } from "react";
import { RegisterScreen } from "./register";
import { LoginScreen } from "./login";
import { Card, Button } from "antd";
export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        {isRegister ? <RegisterScreen /> : <LoginScreen />}
        <Button onClick={() => setIsRegister(!isRegister)}>
          切换到{isRegister ? "登录" : "注册"}
        </Button>
      </Card>
    </div>
  );
};

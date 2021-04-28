/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-28 09:23:47
 * @LastEditTime: 2021-04-28 09:39:37
 */
import React, { useState } from "react";
import { RegisterScreen } from "./register";
import { LoginScreen } from "./login";
export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div>
      {isRegister ? <RegisterScreen /> : <LoginScreen />}
      <button onClick={() => setIsRegister(!isRegister)}>
        切换到{isRegister ? "登录" : "注册"}
      </button>
    </div>
  );
};

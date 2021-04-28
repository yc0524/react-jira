/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-21 14:21:38
 * @LastEditTime: 2021-04-28 10:08:24
 */
import React from "react";
import { useAuth } from "./context/auth-context";
import { UnauthenticatedApp } from "./unauthenticated-app";
import { AuthenticatedApp } from "./authenticated-app";
function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;

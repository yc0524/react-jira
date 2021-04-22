/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-22 14:54:21
 * @LastEditTime: 2021-04-22 18:36:40
 */
import React, { ReactNode, useContext, useState } from "react";
import * as auth from "../auth.provider";
import { User } from "../screens/project-list/data";

interface AuthForm {
  username: string;
  password: string;
}

const AuthContext = React.createContext<
  | {
      user: User | null;
      register: (form: AuthForm) => Promise<void>;
      login: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (form: AuthForm) =>
    auth.login(form).then((user) => {
      setUser(user);
    });
  const register = (form: AuthForm) =>
    auth.register(form).then((user) => {
      setUser(user);
    });
  const logout = () => auth.logout().then(() => setUser(null));

  return (
    <AuthContext.Provider
      children={children}
      value={{
        user,
        login,
        register,
        logout,
      }}
    />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth 必须在authProvider中使用");
  }
  return context;
};

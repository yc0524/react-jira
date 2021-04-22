/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-22 18:27:02
 * @LastEditTime: 2021-04-22 18:35:30
 */

import React, { ReactNode } from "react";
import { AuthProvider } from "./auth-context";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

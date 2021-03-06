/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-21 14:21:38
 * @LastEditTime: 2021-05-13 17:22:27
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { loadDevTools } from "jira-dev-tool";
import "antd/dist/antd.less";
import { AuthProvider } from "./context/auth-context";

loadDevTools(() =>
  ReactDOM.render(
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>,
    document.getElementById("root")
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 즉 index.html이 비어있고,
// 그 비어있는 html을 받아서 root안에 우리가 짠 컴포넌트들을 동적으로 꽂아주는 파일
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // id가 root인 요소 안으로 들어간다고하면 딱 맞음.
  // 즉, 일단 javascript로 App컴포넌트를 띄워줘.
  // 리엑트가 내부적으로 App에 들어가서 jsx확인 후 만든다.
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

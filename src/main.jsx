import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { ConfigProvider } from "antd";
// import enUS from "antd/locale/en_US.js";
// import { LocaleProvider } from "antd";
// import enUS from "antd/lib/locale/en_US.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ConfigProvider locale={enUS}> */}
    <App />
    {/* </ConfigProvider> */}
  </React.StrictMode>
);

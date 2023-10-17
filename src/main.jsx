import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { ConfigProvider } from "antd";
// import enUS from "antd/locale/en_US.js";
// import { LocaleProvider } from "antd";
// import enUS from "antd/lib/locale/en_US.js";
import { apiSlice } from "./reduxtoolkit/feature/api/apiSlice.js";
import { Provider } from "react-redux";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { store } from "./reduxtoolkit/store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ConfigProvider locale={enUS}> */}
    {/* <Provider store={store}> */}

    <App />
    {/* </Provider> */}
    {/* </ConfigProvider> */}
  </React.StrictMode>
);

import { useState } from "react";
import "./App.css";
import { DatePicker } from "antd";
import AntLoginForm from "./ant login/antLoginForm";
import CounterOne from "./reducer/counterOne";
import TodoList from "./reduxtoolkit/todolist/todoList";
import DayDark from "./day dark theme/dayDark";

import { ConfigProvider, theme, Button, Card } from "antd";
import DropDownCompo from "./drop_down";

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <DayDark setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <DropDownCompo />
      {/* <AntLoginForm /> */}
      {/* <CounterOne />*/}
      {/* <TodoList /> */}
    </ConfigProvider>
  );
}

export default App;

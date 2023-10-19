import { useState } from "react";
import "./App.css";
import { DatePicker } from "antd";
import AntLoginForm from "./ant login/antLoginForm";
import CounterOne from "./reducer/counterOne";
import TodoList from "./reduxtoolkit/todolist/todoList";
import DayDark from "./day dark theme/dayDark";

import { ConfigProvider, theme, Button, Card } from "antd";
import CommonSelect from "./select/commonSelect";
import { select_data } from "./for_variable/constant_data";
import DropDownCompo from "./drop_down";
import Admin from "./reduxtoolkithook/views/admin";
import Login from "./login/login";

function App() {
  // const { defaultAlgorithm, darkAlgorithm } = theme;
  // const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      {/* <Login /> */}
      <DropDownCompo />
    </>
    // <Admin />
    // <ConfigProvider
    //  theme={{
    //    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    //  }}
    // >
  );
  {
    /* <DayDark setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} /> */
  }
  {
    /* <br />
      <br /> <hr /> <br /> */
  }
  {
    /* <CommonSelect data={select_data} /> */
  }
  {
  }
  {
    /* <AntLoginForm /> */
  }
  {
    /* <CounterOne />*/
  }
  {
    /* <TodoList /> */
  }
  // </ConfigProvider>
}

export default App;

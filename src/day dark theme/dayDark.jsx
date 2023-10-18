import { Button, Card, Tooltip } from "antd";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const DayDark = ({ setIsDarkMode, isDarkMode }) => {
  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };
  return (
    // <Card style={{ width: "max-content" }}>
    <Button
      shape="circle"
      onClick={handleClick}
      icon={
        isDarkMode ? (
          <Tooltip title="Change Light Mode">
            <FontAwesomeIcon icon={faSun} />
          </Tooltip>
        ) : (
          <Tooltip title="Change Dark Mode">
            <FontAwesomeIcon icon={faMoon} />
          </Tooltip>
        )
      }
    ></Button>
    // </Card>
  );
};

export default DayDark;

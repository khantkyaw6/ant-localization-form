import { Select } from "antd";
import React from "react";

const CommonSelect = ({ data }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <Select
        defaultValue="lucy"
        style={{
          width: 100,
        }}
        allowClear
        onChange={handleChange}
        options={data}
      />
    </>
  );
};

export default CommonSelect;

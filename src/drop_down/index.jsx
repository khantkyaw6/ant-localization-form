import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Typography } from "antd";
import { items } from "../data_for_compo/data";
const { Text, Link } = Typography;

const DropDownCompo = () => {
  const drop_label = ["English", "Myanmar", "Chinese"];
  const [labelPointer, setLabelPointer] = useState(0);
  const clickhandler = (val) => {
    console.log(val.key);
    val.key === "en"
      ? setLabelPointer(0)
      : val.key === "mm"
      ? setLabelPointer(1)
      : setLabelPointer(2);
  };

  console.log(drop_label);
  console.log(drop_label[labelPointer]);
  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        onClick: clickhandler,
        defaultSelectedKeys: ["1"],
      }}
    >
      <Typography.Link>
        <Space>
          <Text type="secondary">{drop_label[labelPointer]}</Text>
          <DownOutlined type="secondary" />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
};

export default DropDownCompo;

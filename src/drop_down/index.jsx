import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Typography } from "antd";
// import { items } from "../data_for_compo/data";
const { Text, Link } = Typography;
import enFlag from "../icons/uk.png";
import cnFlag from "../icons/china.png";
import mmFlag from "../icons/myanmar.png";

const iconStyle = {
  width: "16px",
};

export const items = [
  {
    key: "en",
    label: "English",
    icon: <img src={enFlag} style={iconStyle} alt="english sub" />,
  },
  {
    key: "mm",
    label: "Myanmar",
    icon: <img src={mmFlag} style={iconStyle} alt="myanmar sub" />,
  },
  {
    key: "cn",
    label: "Chinese",
    icon: <img src={cnFlag} style={iconStyle} alt="chinese sub" />,
  },
];

// const CustomMenu = () => (
//   <Menu>
//     {items.map((item) => (
//       <Menu.Item key={item.key}>
//         <img src={item.icon} alt={item.label} style={{ marginRight: 8 }} />
//         {item.label}
//       </Menu.Item>
//     ))}
//   </Menu>
// );

const DropDownCompo = () => {
  const drop_label = ["English", "Myanmar", "Chinese"];
  const icon_lael = [enFlag, mmFlag, cnFlag];
  const [labelPointer, setLabelPointer] = useState(0);
  const clickhandler = (val) => {
    console.log(val.key);
    val.key === "en"
      ? setLabelPointer(0)
      : val.key === "mm"
      ? setLabelPointer(1)
      : setLabelPointer(2);
  };

  return (
    <Dropdown
      // overlayClassName={CustomMenu}
      // overlayStyle={CustomMenu}
      menu={{
        items,
        // selectable: true,
        onClick: clickhandler,
        // defaultSelectedKeys: ["1"],
      }}
    >
      {/* <Dropdown placement="bottomLeft"> */}

      <Typography.Link>
        <Space>
          <Text type="secondary">{drop_label[labelPointer]}</Text>
          <img
            src={icon_lael[labelPointer]}
            style={{
              width: "16px",
            }}
          />

          <DownOutlined type="secondary" />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
};

export default DropDownCompo;

import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Typography } from "antd";
import { items } from "../data_for_compo/data";

const menu = () => {
  return (
    <>
      <Menu onSelect={(e) => console.log(e)}>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer">
            Recommended
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer">
            Newest
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer">
            Lowest Price
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer">
            Highest Price
          </a>
        </Menu.Item>
      </Menu>
    </>
  );
};

const DropDownCompo = () => {
  const openHandler = (val) => {
    console.log(val);
  };
  return (
    <Dropdown
      //   onVisibleChange={openHandler}
      overlayStyle={menu}
      onOpenChange={openHandler}
      //   menu={{
      //     items,
      //     selectable: true,
      //     defaultSelectedKeys: ["3"],
      //   }}
    >
      <Typography.Link>
        <Space>
          Selectable
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
};

export default DropDownCompo;

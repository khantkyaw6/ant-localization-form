import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Radio, Select } from "antd";
import Title from "antd/es/typography/Title";
import enUS from "antd/locale/en_US";
import zhCN from "antd/locale/zh_CN";
import myMM from "antd/locale/my_MM";
import en from "../locale/en/login_transition.json";
import cn from "../locale/cn/login_transition.json";
import mm from "../locale/mm/login_transition.json";
import { ConfigProvider } from "antd";

// const placeholders = {
//   en: {
//     username: "Username",
//     password: "Password",
//     phone: "Phone Number",
//   },
//   cn: {
//     username: "用户名",
//     password: "密码",
//     phone: "手机号码",
//   },
//   my: {
//     username: "အသုံးပြုသူအမည်",
//     password: "စကားဝှက်",
//     phone: "ဖုန်းနံပါတ်",
//   },
// };

const placeholders = [en, cn, mm];

const AntLoginForm = () => {
  const [locale, setLocal] = useState(enUS);

  const changeLocale = (e) => {
    const localeValue = e.target.value;
    console.log(localeValue);
    setLocal(localeValue);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle initialValue="959">
      <Select
        style={{
          width: 80,
        }}
      >
        <Option value="959">+959</Option>
      </Select>
    </Form.Item>
  );

  const onFinish = (values) => {
    values.phone = values.prefix + values.phone;
    console.log("Received values of form: ", values);
  };

  const onFinishFailed = (err) => {
    console.log("Error", err);
  };

  console.log(locale?.locale);
  console.log(placeholders[0]);

  return (
    <>
      <Radio.Group value={locale} onChange={changeLocale}>
        <Radio.Button key="en" value={enUS}>
          English
        </Radio.Button>
        <Radio.Button key="cn" value={zhCN}>
          中文
        </Radio.Button>
        <Radio.Button key="mm" value={myMM}>
          မြန်မာ
        </Radio.Button>
      </Radio.Group>
      <ConfigProvider locale={locale}>
        <Form
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "32px 16px 16px 16px",
            width: "400px",
            background: "rgba(255,255,255,0.2)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <UserOutlined
            style={{ color: "#66D7D1", fontSize: "50px", padding: "10px" }}
          />
          <Title level={3}>Admin Login</Title>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder={
                locale?.locale === "en"
                  ? placeholders[0]["app.username"]
                  : locale?.locale === "zh-cn"
                  ? placeholders[1]["app.username"]
                  : placeholders[2]["app.username"]
              }
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder={
                locale?.locale === "en"
                  ? placeholders[0]["app.password"]
                  : locale?.locale === "zh-cn"
                  ? placeholders[1]["app.password"]
                  : placeholders[2]["app.password"]
              }
            />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your Phone number",
              },
              {
                validator: (rule, value) => {
                  console.log(value);

                  if (!value) {
                    return Promise.reject();
                  } else if (
                    value &&
                    /^\d+$/.test(value) &&
                    (value.length === 7 || value.length === 9)
                  ) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject(
                      "Phone number must be 7 or 9 digits long and number only"
                    );
                  }
                },
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              placeholder={
                locale?.locale === "en"
                  ? placeholders[0]["app.phone"]
                  : locale?.locale === "zh-cn"
                  ? placeholders[1]["app.phone"]
                  : placeholders[2]["app.phone"]
              }
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </>
  );
};
export default AntLoginForm;

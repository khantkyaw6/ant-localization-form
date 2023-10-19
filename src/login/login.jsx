import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const gradientIconStyle = {
  color: "linear-gradient(45deg, #fed0c5, #8b47b5)",
  WebkitTextFillColor: "transparent",
};

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -60%)",
        width: "300px",
        margin: "0 auto",
        padding: "32px",
        backgroundColor: "rgba(255, 255, 255, 0.32)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5.1px)",
        WebkitBackdropFilter: "blur(5.1px)",
        border: "1px solid rgba(255, 255, 255, 0.26)",
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <FontAwesomeIcon
          icon={faLock}
          style={{
            fontSize: "40px", // Adjust the size as needed
            backgroundImage: "linear-gradient(45deg, #fed0c5, #8b47b5)",
            color: "#8b47b5",
            WebkitBackgroundClip: "text",
            padding: "20px",
            WebkitTextFillColor: "transparent",
          }}
        />
        <Form.Item
          name="email_or_phone"
          rules={[
            {
              required: true,
              message: "Please input your Email or Phone!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email or Phone"
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
            placeholder="Password"
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
          <span
            style={{
              padding: "0 5px",
            }}
          >
            Or
          </span>
          <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;

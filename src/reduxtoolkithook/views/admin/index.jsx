import React from "react";
import {
  useAdminAddMutation,
  useAdminDeleteMutation,
  useAdminListQuery,
  useAdminUpdateMutation,
} from "../../feature/adminApi";
import { Button, Checkbox, Form, Input, Typography, Space } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Title from "antd/es/skeleton/Title";
import { useForm } from "antd/lib/form/Form";

const { Text } = Typography;

const formStyle = {
  display: "inline-block",
  width: "45%", // Adjust the width as needed
  margin: "0 2.5%", // Adjust the margin for spacing
};

const Admin = () => {
  const { data: admins, isLoading, isError, error } = useAdminListQuery();
  const [adminAdd, { isLoading: addLoading }] = useAdminAddMutation();
  const [adminUpdate, { isLoading: updateLoading }] = useAdminUpdateMutation();
  const [adminDelete, { isLoading: deleteLoading }] = useAdminDeleteMutation();
  const [form] = useForm();

  const onFinish = (values) => {
    console.log(values);
    adminAdd({ data: values })
      .unwrap()
      .then((res) => {
        console.log(res);
        form.resetFields();
        console.log("Created");
      });
  };
  const onFinishFailed = (err) => {
    console.log("Error", err);
  };

  const onFinishUpdate = (values) => {
    console.log(values);
    console.log(typeof values.id);
    const { id, ...data } = values;

    adminUpdate({ id, data })
      .unwrap()
      .then((res) => {
        console.log(res);
        console.log("Updated");
        form.resetFields();
      });
  };

  const onFinishUpdateFailed = (err) => {
    console.log("Error", err);
  };

  const deleteHandler = (id) => {
    console.log(id);
    adminDelete({ id })
      .unwrap()
      .then((res) => console.log(res));
  };

  console.log(admins);
  return (
    <>
      Admin CRUD with redux toolkit query
      {admins?.data.map((admin) => (
        <div key={admin._id}>
          <Text>Id: </Text>
          <Text strong>{admin._id}</Text> <br />
          <Text>Name: </Text>
          <Text strong>{admin.name}</Text> <br />
          <Text>Email: </Text>
          <Text strong>{admin.email}</Text>
          <Button onClick={() => deleteHandler(admin._id)}>Delete</Button>
        </div>
      ))}
      <br />
      {isLoading ? <>Loading...</> : <></>}
      <br />
      <hr />
      <div>
        <Form
          style={{
            ...formStyle,
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
          <Text>Admin Create Form</Text>
          <br />
          <UserOutlined
            style={{ color: "#66D7D1", fontSize: "50px", padding: "10px" }}
          />

          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
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
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email",
              },
            ]}
          ></Form.Item>
          <Form.Item>
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
              Create
            </Button>
          </Form.Item>
        </Form>

        <Form
          style={{
            ...formStyle,
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
          onFinish={onFinishUpdate}
          onFinishFailed={onFinishUpdateFailed}
        >
          <Text>Admin Update Form</Text>
          <br />
          <UserOutlined
            style={{ color: "#66D7D1", fontSize: "50px", padding: "10px" }}
          />

          <Form.Item
            name="id"
            label="Id"
            rules={[{ required: true, message: "Please enter admin id" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
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
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email",
              },
            ]}
          ></Form.Item>
          <Form.Item>
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
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Admin;

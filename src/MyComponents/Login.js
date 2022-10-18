import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined, LoadingOutlined } from "@ant-design/icons";

export default function Login({ checkLogin }) {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
    checkLogin(values);
  };

  return (
    <div className="loginPage">
      <h1>Login</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          {loading ? (
            <Button typr="primary" className="login-form-button">
              <LoadingOutlined style={{ fontSize: "16px", color: "primary" }} />
            </Button>
          ) : (
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {" "}
              Log in
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
}

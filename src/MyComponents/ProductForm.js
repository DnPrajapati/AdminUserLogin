import React from "react";
import { Button, Form, Input, InputNumber, message, Space } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

export default function ProductForm({ addProduct, currentUser, handleLogout }) {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    form.resetFields();
    addProduct(values);
    message.success("Product is Succesfully added");
  };

  return (
    <div className="productForm">
      <div className="productHeader">
        <h1>Product Details</h1>
        <span>
          {currentUser}
          <Button onClick={handleLogout}>Logout</Button>
        </span>
      </div>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item label="Product Name" name="productName">
          <Input placeholder="Product Name" />
        </Form.Item>
        <Form.Item label="Product Description" name="productDescription">
          <Input placeholder="Product Description" />
        </Form.Item>
        <Form.Item label="Variants">
          <Form.List name="variants">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name }) => (
                  <Space
                    key={key}
                    style={{
                      display: "flex",
                      width: "100%",
                      margin: "10px 0px",
                    }}
                    align="start"
                  >
                    <Form.Item
                      name={[name, "variantName"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing Name",
                        },
                      ]}
                      style={{ width: "32vw", margin: 0 }}
                    >
                      <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                      name={[name, "variantAmount"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing last name",
                        },
                      ]}
                      style={{ width: "16vw", margin: 0 }}
                    >
                      <InputNumber
                        min={1}
                        max={1000000}
                        placeholder="Amount"
                        addonAfter="&#8377;"
                      />
                    </Form.Item>
                    <MinusCircleOutlined
                      style={{ fontSize: 16, color: "#f00", marginTop: 8 }}
                      onClick={() => remove(name)}
                    />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="link"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                  >
                    Add Variant
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>
        <Form.Item style={{ textAlign: "center" }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: 200,
              padding: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

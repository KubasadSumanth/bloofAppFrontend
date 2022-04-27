import React from "react";
import { Form, Input, Button, Checkbox,Card } from "antd";
import "antd/dist/antd.css";
import auth from "./auth";
import { Link } from "react-router-dom";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const onFinish = (values) => {
      console.log("Success:", values);
      auth.login(()=>{
        console.log(this.authenticated)
      });
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    return (
      <div>
        <div className="site-card-border-less-wrapper">
          <Card
            title={<pre>              Login</pre>}
            bordered={true}
            style={{ width: 400, marginTop: "6%", marginLeft: "33%" }}
          >
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Log In
                </Button>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 5,
                  span: 16,
                }}>
                <Link to="/dashboard" >Dashboard</Link>
              Don't have an account?<Button type="link"> Sign Up</Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

export default Login;

import { Layout, Menu } from "antd";
import {Link} from 'react-router-dom';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import React from "react";
import "./Dashboard.css";
import auth from "./auth";



const { Header, Content, Footer, Sider } = Layout;

class Dashboard extends React.Component {
  render() {

    console.log(this.props.history);
    return (
      <div>
        <Layout hasSider>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1" icon={<VideoCameraOutlined />}>
                
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                User Profile
              </Menu.Item>

              <Menu.Item key="3" icon={<UploadOutlined />}>
                Search
              </Menu.Item>
              <Menu.Item key="4" icon={<BarChartOutlined />}>
                Donate
              </Menu.Item>
              <Menu.Item key="5" icon={<CloudOutlined />}>
                nav 5
              </Menu.Item>
              <Menu.Item key="6" icon={<AppstoreOutlined />}>
                nav 6
              </Menu.Item>
              <Menu.Item key="7" icon={<TeamOutlined />}>
                nav 7
              </Menu.Item>
              <Menu.Item key="8" icon={<ShopOutlined />}
                onClick={()=>{
                    auth.logout(()=>{console.log("Sidebar logout")})
                }}
              ><Link to="/login">Logout</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, textAlign: "center", height: "470px" }}
              >
                Components content
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Dashboard;

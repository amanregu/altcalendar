
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {
  Layout, Menu, Icon,
} from 'antd';

const { Sider } = Layout;

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
    };
  }


  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="calendar" />
              <span>Appointments</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="clock-circle" />
              <span>Setup Time Slots</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="container" />
              <span>Log</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="api" />
              <span>Integration</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="user" />
              <span>Profile</span>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    );
  }
}

export default Sidebar;

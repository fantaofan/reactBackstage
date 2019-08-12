import { Layout, Menu, Icon } from "antd";
import "./index.scss";
import React from "react";
const { Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout>
        <Sider
          width={"100%"}
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            className="ul"
          >
            <Menu.Item
              key="1"
              className="li"
              onClick={() => this.props.setRouter("shouye")}
            >
              <Icon type="pie-chart" />
              <span>首页</span>
            </Menu.Item>

            <SubMenu
              key="sub1"
              title={
                <span className="li">
                  <Icon type="user" />
                  <span>组件</span>
                </span>
              }
            >
              <Menu.Item
                key="2"
                className="li"
                onClick={() => this.props.setRouter("jingtai")}
              >
                静态组件/ui布局
              </Menu.Item>
              <Menu.Item
                key="3"
                className="li"
                onClick={() => this.props.setRouter("rongqi")}
              >
                class组件/静态布局
              </Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>API文档</span>
                </span>
              }
            >
              <Menu.Item
                key="4"
                className="li"
                onClick={() => this.props.setRouter("com")}
              >
                React.Component
              </Menu.Item>
              <Menu.Item
                key="8"
                className="li"
                onClick={() => this.props.setRouter("sheng")}
              >
                State && 生命周期
              </Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub3"
              title={
                <span className="li">
                  <Icon type="file" />
                  <span>作业</span>
                </span>
              }
            >
              <Menu.Item
                key="5"
                className="li"
                onClick={() => this.props.setRouter("7-8")}
              >
                百度
              </Menu.Item>
              <Menu.Item
                key="6"
                className="li"
                onClick={() => this.props.setRouter("7-10")}
              >
                获取信息
              </Menu.Item>
              <Menu.Item
                key="7"
                className="li"
                onClick={() => this.props.setRouter("7-12")}
              >
                问卷调查
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </Layout>
    );
  }
}

export default SiderDemo;

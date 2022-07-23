import React from "react";
import { Layout, Menu } from 'antd';
// import {Content, Header, Footer} from "antd/lib/layout/layout";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {menuType} from "./utils/type";
import {AppstoreOutlined, SettingOutlined} from "@ant-design/icons";
import routes from './route/route'
import ReactDOM from "react-dom";
import Home from "./pages/home";
import UserList from "./pages/list/UserList";
import "antd/dist/antd.css";
import Login from "./pages/user/login";
import Register from "./pages/user/register";
import WorkList from "./pages/list/WorkList";
import TableList from "./pages/list/tableList";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Index: React.FC = (props) => {
    // 递归生成菜单
    const generateMenu = (menus: menuType[]) => {
        return menus.map((item) => {
            if (Array.isArray(item.routes) && item.routes.length > 0) {
                return (
                    <SubMenu key={item.path} icon={<SettingOutlined />} title={item.name}>
                        {generateMenu(item.routes)}
                    </SubMenu>
                );
            }
            return (
                <Menu.Item key={item.path} icon={<AppstoreOutlined />}>
                    <Link to={item.path}>{item.name}</Link>
                </Menu.Item>
            );
        });
    };

    // 从routes配置中提取出 “/home” 下的子路由， 来进行菜单渲染
    const renderMenu = (datas: menuType[]) => {
        if (
            Array.isArray(datas) &&
            datas.length > 0 &&
            Array.isArray(datas[0].routes) &&
            datas[0].routes.length > 0
        ) {
            const homeMenus = datas[0].routes.filter((item) => item.path === "/home");
            if (
                Array.isArray(homeMenus) &&
                homeMenus.length > 0 &&
                Array.isArray(homeMenus[0].routes) &&
                homeMenus[0].routes.length > 0
            ) {
                const realHomeMenus = homeMenus[0].routes;
                return generateMenu(realHomeMenus);
            }
        }
        return null;
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider collapsible collapsed={false}>
                <div className="logo" />
                <Menu  mode="inline" theme="dark">
                    {/*<Menu.Item key="/home/list" icon={<AppstoreOutlined />}>*/}
                    {/*    <Link to="/home/list">homeList</Link>*/}
                    {/*</Menu.Item>*/}
                    {renderMenu(routes)}
                </Menu>
            </Sider>

            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: "16px 0 0 16px" }}>
                    {/*<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>*/}
                    {/*    /!*{props.children}*!/*/}
                    {/*</div>*/}
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/user/login" element={<Login/>} />
                      <Route path="/user/register" element={<Register/>} />
                      <Route path="/home/list" element={<Home />} />
                      <Route path="/home/list" element={<Home />} />
                      <Route path="/home/list/UserList" element={<UserList />} />
                      <Route path="/home/list/WorkList" element={<WorkList />} />
                        <Route path="/home/list/TableList" element={<TableList />} />
                    </Routes>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Index/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);


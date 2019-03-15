import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Input, Icon, Badge } from 'antd';
import Logo from "../img/logo.jpg"

const { Sider, } = Layout,
    Search = Input.Search;

class Sidebar extends Component {
    
    getActive = () => {
        const pathname = window.location.pathname
        const active = pathname === "/data" ? "7"
            : pathname === "/forms/recieved-forms" ? "6"
                : pathname === "/forms/sent-forms" ? "5"
                    : pathname === "/forms/fillable-forms" ? "4"
                        : pathname === "/forms/new-form" ? "3"
                            : pathname === "/forms/inqueries" ? "2"
                                : "1";
        return active
    }

    render() {
        return (
                <Sider
                    trigger={null}
                    breakpoint="lg"
                    collapsedWidth="0"
                    collapsed={this.props.collapsed}
                    onBreakpoint={() => { this.props.changeMargin()}}
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                    width={200}
                    style={{ zIndex: 1, overflowX: 'hidden', overflowY: 'auto', height: '100vh', position: 'fixed', left: 0, background: '#fff', borderRight: "1px rgba(0,0,0,0.14) solid" }}>
                    <div className="logo" style={{ textAlign: "center", paddingTop: "10px", borderBottom: "1px rgba(0,0,0,0.14) solid" }}>
                        <img alt="Website logo. A paper box made from forms filled with popcorn." src={Logo} style={{ width: "80px", height: "auto" }} />
                        <h2 style={{ marginBottom: "0px" }}>Popform</h2>
                        <p >A higher form of forms.</p>
                    </div>
                    <Search
                        placeholder="search"
                        onSearch={value => console.log(value)}
                        style={{ width: 190, margin: "8px 5px" }}
                    />
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[this.getActive()]}
                        defaultOpenKeys={['sub1']}
                        style={{ borderRight: 0 }}
                    >
                        <Menu.Item key="1"><Link style={{ fontSize: "16px" }} to="/"><Icon style={{ fontSize: "20px" }} type="user" />Account</Link></Menu.Item>
                        <Menu.Item key="2"><Link style={{ fontSize: "16px" }} to="/forms/inqueries"><Badge style={{ marginRight: "40px" }} count={5}><Icon style={{ fontSize: "20px" }} type="mail" /></Badge>Inqueries</Link></Menu.Item>
                        <Menu.Item key="3"><Link style={{ fontSize: "16px" }} to="/forms/new-form"><Icon style={{ fontSize: "20px" }} type="file-add" />New Form</Link></Menu.Item>
                        <Menu.Item key="4"><Link style={{ fontSize: "16px" }} to="/forms/fillable-forms"><Icon style={{ fontSize: "20px" }} type="file" />Fillable Forms</Link></Menu.Item>
                        <Menu.Item key="5"><Link style={{ fontSize: "16px" }} to="/forms/sent-forms"><Icon style={{ fontSize: "20px" }} type="right" />Sent Forms</Link></Menu.Item>
                        <Menu.Item key="6"><Link style={{ fontSize: "16px" }} to="/forms/recieved-forms"><Icon style={{ fontSize: "20px" }} type="left" />Recieved Forms</Link></Menu.Item>
                        <Menu.Item key="7"><Link style={{ fontSize: "16px" }} to="/data"><Icon style={{ fontSize: "20px" }} type="database" />Data</Link></Menu.Item>
                    </Menu>
                </Sider>
        )
    }
}

export default Sidebar
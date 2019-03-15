import React from "react";
import { Layout, Icon } from 'antd';

const { Header } = Layout;

const MyHeader = props => (
    <Header style={{ background: 'none', padding: 0, display: props.display, position: 'fixed', zIndex: 1, top: "5px", right: "20px" }}>
        <Icon
            className="trigger"
            type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={props.toggle}
            style={{ fontSize: "20px", background: "rgba(0,0,0,.2)" }}
        />
    </Header>
);

export default MyHeader
import React, { Component } from 'react';
import { Layout, BackTop } from 'antd';

const { Content } = Layout;

class Account extends Component {

  render() {
    return (
      <Content style={{ background: "white", height: "200vh" }}><BackTop/>Content</Content>);
  }
}


export default Account;

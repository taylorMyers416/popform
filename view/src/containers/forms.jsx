import React, { Component } from 'react';
import { FormList } from "../components"
import { Layout, Icon } from 'antd';

const { Content } = Layout;

const data = [{
  type: "mail",
  name: 'Good Form',
  owner: 'Taylor',
  respondant: 'Sasha',
}, {
  type: "mail",
  name: 'Good Form',
  owner: 'Taylor',
  respondant: 'Sasha',
}, {
  type: "mail",
  name: 'Good Form',
  owner: 'Taylor',
  respondant: 'Sasha',
}, {
  type: "mail",
  name: 'Good Form',
  owner: 'Taylor',
  respondant: 'Sasha',
}, {
  type: "mail",
  name: 'Good Form',
  owner: 'Taylor',
  respondant: 'Sasha',
}, {
  type: "mail",
  name: 'Good Form',
  owner: 'Taylor',
  respondant: 'Sasha',
}, {
  type: "mail",
  name: 'Good Form',
  owner: 'Taylor',
  respondant: 'Sasha',
}, {
  type: "mail",
  name: 'Good Form',
  owner: 'Taylor',
  respondant: 'Sasha',
}, {
  type: "mail",
  name: 'Good Form',
  owner: 'Taylor',
  respondant: 'Sasha',
}, {
  type: "mail",
  name: 'Good Form',
  owner: 'Taylor',
  respondant: 'Sasha',
}, {
  type: "mail",
  name: 'Good Form',
  owner: 'Taylor',
  respondant: 'Sasha',
}, {
  type: "mail",
  name: 'Good Form',
  owner: 'Taylor',
  respondant: 'Sasha',
}]


class Form extends Component {
  render() {
    return (
      <Content style={{ background: "white", height: "calc(100vh - 91px)", overflowY: "auto" }} >
          <FormList 
            data = {data}
          />        
      </Content>
    );
  }
}
export default Form;
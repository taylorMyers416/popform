import React, { Component } from 'react';
import { FormList } from "../components"
import { Layout, Icon, Card, Menu, Dropdown, Button, Input, BackTop } from 'antd';
import data from '../utils/dummyData.js'

const { Content } = Layout,
  Search = Input.Search;

class Form extends Component {
  state = {
    data: data,
    display: data
  }
  componentWillMount(){
    this.filterByUrl(this.props.location.state.type)
  }
  componentWillReceiveProps(nextProps) {
    this.props.location.state !== nextProps.location.state && this.filterByUrl(nextProps.location.state.type) 
  }
  sortData = (value, order) => {
    const sorted = data;
    order === "ascending"
      ? sorted.sort((a, b) => { let num = a[value] > b[value] ? 1 : -1; return num })
      : sorted.sort((a, b) => { let num = b[value] > a[value] ? 1 : -1; return num })
    this.setState({ data: sorted })
  }

  filterByUrl = (arg) => {
    const newArray = data.filter(function(form){
      return form.type.includes(arg)
    })
    this.setState({display: newArray})
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item onClick={() => this.sortData("name", "ascending")}>Form Name (A to Z)</Menu.Item>
        <Menu.Item onClick={() => this.sortData("name", "descending")}>Form Name (Z to A)</Menu.Item>
        <Menu.Item onClick={() => this.sortData("date", "descending")}>Date (Newest First)</Menu.Item>
        <Menu.Item onClick={() => this.sortData("date", "ascending")}>Date (Oldest First)</Menu.Item>
        <Menu.Item onClick={() => this.sortData("owner", "ascending")}> Owner Name (A to Z)</Menu.Item>
        <Menu.Item onClick={() => this.sortData("owner", "descending")}>Owner Name (Z to A)</Menu.Item>
        <Menu.Item onClick={() => this.sortData("respondant", "ascending")}>Respondant Name (A to Z)</Menu.Item>
        <Menu.Item onClick={() => this.sortData("respondant", "descending")}>Respondant Name (Z to A)</Menu.Item>
      </Menu>
    )
    return (
      <Content style={{ background: "white", }} >
        <BackTop />
        <Card style={{ width: "100%", zIndex: 1, top: 0, position: "fixed" }}>
          <Dropdown overlay={menu} placement="bottomCenter">
            <Button>Sort<Icon type="down" /></Button>
          </Dropdown>
          <Search
            size="large"
            placeholder="search"
            onSearch={value => console.log(value)}
            style={{ width: "50%", margin: "8px 5px" }}
          />
        </Card>
        <FormList data={this.state.display} />
      </Content>
    );
  }
}
export default Form;
import React, { Component } from 'react';
import { FormList } from "../components"
import { Layout, Icon, Card, Menu, Dropdown, Button, Input, BackTop } from 'antd';
import data from '../utils/dummyData.js'

const { Content } = Layout,
  Search = Input.Search;

class Form extends Component {

  componentWillMount() {
    const pathname = this.props.location.pathname
    const filter = pathname === "/" ? "all"
      : pathname === "/forms/inqueries" ? "inquiry"
      : pathname === "/forms/recieved-forms" ? "recieved"
      : pathname === "/forms/sent-forms" ? "sent"
      : "fillable"

    this.setState({ data }, () => this.filterByUrl(filter))
  }

  componentWillReceiveProps(nextProps) {
    this.props.location.state !== nextProps.location.state && this.filterByUrl(nextProps.location.state.type)
  }

  sortData = (value, order) => {
    const sorted = data;
    order === "ascending"
      ? sorted.sort((a, b) => { let num = a[value] > b[value] ? 1 : -1; return num })
      : sorted.sort((a, b) => { let num = b[value] > a[value] ? 1 : -1; return num })
    this.setState({ display: sorted })
  }

  filterByUrl = (arg) => {
    const data = this.state.data
    const newArray = arg === "all" ? data : data.filter(form => form.type === arg)
    this.setState({ display: newArray })
  }

  searchFilter = search => {
    const preSearch = this.state.preSearch ? this.state.data : this.state.display
    const newArray = preSearch.filter(form =>
      form.name.includes(search) || form.owner.includes(search) || form.respondant.includes(search))
    this.setState({ display: newArray, preSearch, searchValue: search })
  }

  clearSearch = () => this.setState({ display: this.state.preSearch, preSearch: false, searchValue: null }, () => console.log(this.state))

  handleChange = event => this.setState({ searchValue: event.target.value })


  render() {
    const display = this.state.preSearch ? "inline-block" : "none"
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
            enterButton
            placeholder="search"
            onChange={this.handleChange}
            value={this.state.searchValue}
            onSearch={value => this.searchFilter(value)}
            style={{ width: "50%", margin: "0px 5px" }}
          />
          <Button onClick={this.clearSearch} style={{ display }}>Clear Search</Button>
        </Card>
        <FormList data={this.state.display} />
      </Content>
    );
  }
}
export default Form;
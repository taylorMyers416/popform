import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from 'antd';
import { Footer, Sidebar, Header } from "./components"
import { ViewForm, EditForm, Forms, Account, Data, NoMatch } from "./containers"

class App extends Component {

  componentWillMount() {
    this.changeMargin()
  }

  toggle = () => { this.setState({ collapsed: !this.state.collapsed }) }

  minimize = () => { if (!this.state.collapsed && this.state.contentMargin === "0px") this.toggle() }

  changeMargin = () => {
    window.innerWidth > 992
      ? this.setState({ headerDisplay: 'none', contentMargin: "200px", collapsed: false })
      : this.setState({ headerDisplay: 'block', contentMargin: "0px", collapsed: true })
  }

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar
            changeMargin={this.changeMargin.bind(this)}
            toggle={this.toggle.bind(this)}
            collapsed={this.state.collapsed}
          />
          <Layout style={{ marginLeft: this.state.contentMargin}} onClick={this.minimize}>
            <Header
              toggle={this.toggle.bind(this)}
              collapsed={this.state.collapsed}
              display={this.state.headerDisplay}
            />
            <Switch>
              <Route exact path="/" component={Account} />
              <Route exact path="/view-form/:id" component={ViewForm} />
              <Route exact path="/edit-form/:id" component={EditForm} />
              <Route exact path="/forms/:type" component={Forms} />
              <Route exact path="/data" component={Data} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </Layout>
        </Layout>
      </Router>
    );
  }
}


export default App;

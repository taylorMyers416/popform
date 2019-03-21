import React, { Component } from 'react';
import { Layout, Button, Card, Modal } from 'antd';
import {ImportSearch, Checkbox, Input} from "../components/questions"
const { Content } = Layout;

class EditForm extends Component {

  state = {
    visible: false,
    display: "none"
  }

  toggleModal = () => this.setState({ visible: !this.state.visible })

  importQuestion = () => {
    console.log("question")
    this.toggleModal()
  }

  render() {
    return (
      <Content style={{ background: "white" }}>
        <Card style={{ width: "100%", zIndex: 1, top: 0, position: "fixed" }}>
          <Button icon="plus">Add Question</Button>{" "}
          <Button onClick={this.toggleModal} icon="download">Import Question</Button>
        </Card>

        <Modal
          title="Import Question"
          visible={this.state.visible}
          onOk={this.importQuestion}
          onCancel={this.toggleModal}
        >
          <ImportSearch handleChange = {() => this.setState({display: "block"})}/>
          <h3>Preview</h3>
          <div style = {{display: this.state.display}} >
          <Checkbox checkText = "checkText" />
          </div>
          <br />
          <Button style = {{display: this.state.display}}>Add to From</Button> 
        </Modal>

        <Card style = {{maxWidth: "770px", width: "90%", margin: "0 auto", marginTop: "100px"}}>
          <Input />
          <Checkbox checkText = "checktext"/>
        </Card>

      </Content>);
  }
}

export default EditForm;
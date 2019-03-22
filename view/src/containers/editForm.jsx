import React, { Component } from 'react';
import { DragDropContext, Droppable, } from 'react-beautiful-dnd';
import { Layout, Button, Card, Modal, Typography } from 'antd';
import { ImportSearch, Checkbox, Input, Date, MultipleChoice, Select, TextArea, Time } from "../components/questions"
const { Content } = Layout,
  { Title } = Typography


class EditForm extends Component {

  state = {
    visible: false,
    display: "none",
    questionsArray: [
      {
        name: "Input",
        props: {
          title: "inputQuestion?"
        }
      },
      {
        name: "CheckBox",
        props: {
          checkText: "checktext",
          title: "checkQuestion"
        }
      }, {
        name: "Input",
        props: {
          title: "inputQuestion?2"
        }
      },
      {
        name: "CheckBox",
        props: {
          checkText: "checktext2",
          title: "checkQuestion"
        }
      }
    ]
  }



  toggleModal = () => this.setState({ visible: !this.state.visible })

  importQuestion = () => {
    console.log("question")
    this.toggleModal()
  }

  onDragEnd = result => {
    if (result.destination) {
      let questionsArray = [...this.state.questionsArray]
      const drugItem = questionsArray.splice(result.draggableId, 1)
      questionsArray.splice(result.destination.index, 0, drugItem[0])
      this.setState({ questionsArray })
    }
  }

  createComponent = (question, index) => {
    const componets = {
      "Input": Input,
      "CheckBox": Checkbox
    }
    const props = { index, ...question.props }
    const compoent = React.createElement(componets[question.name], props)
    return compoent;
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
          <ImportSearch handleChange={() => this.setState({ display: "block" })} />
          <h3>Preview</h3>
          <div style={{ display: this.state.display }} >
            <Checkbox checkText="checkText" />
          </div>
          <br />
          <Button style={{ display: this.state.display }}>Add to From</Button>
        </Modal>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Card style={{ maxWidth: "770px", width: "90%", margin: "100px auto", padding: "60px 0" }}>
            <Title style={{ textAlign: "center" }} level={1}>Form Title</Title>
            <Droppable id="dropId" droppableId="droppableId">
              {provided => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {this.state.questionsArray.map((question, index) => this.createComponent(question, index))}
                  {provided.placeholder}
                </div>

              )}
            </Droppable>
          </Card>

        </DragDropContext>
      </Content>

    );
  }
}

export default EditForm;
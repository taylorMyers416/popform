import React, { Component } from 'react';
import { Layout, Button, Card, Typography } from 'antd';
import { Checkbox, Input, DatePicker, MultipleChoice, Select, TextArea, TimePicker } from "../components/questions"
import {NotDroppable, Droppable} from '../components';
const { Content } = Layout,
  { Title } = Typography


class EditForm extends Component {

  state = {
    questionsArray: [],
    visible: false,
    permission: "edit",
    display: "none",
    editBar: "inputKey",
    answer: [
      {
        key: "dateKey",
        value: "2017-06-01"
      },
      {
        key: "inputKey",
        value: "Bobster"
      }, {
        key: 'checkKey',
        value: true
      }, {
        key: 'textAreaKey',
        value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sunt possimus blanditiis facilis similique nisi nobis tempora recusandae magnam alias cumque impedit doloremque voluptate, error molestiae corrupti facere distinctio eveniet."
      }, {
        key: 'timeKey',
        value: '01:01:01'
      }, {
        key: 'selectKey',
        value: 'c'
      },
      // {
      //   key: 'multipleChoice',
      //   value: 'd'
      // }
    ],
    questionsArray: [
      {
        name: "Input",
        key: "inputKey",
        options: null,
        title: "inputQuestion"
      },
      {
        key: "dateKey",
        name: "DatePicker",
        options: null,
        title: "dateQuestion"
      },
      {
        key: "checkKey",
        name: "CheckBox",
        options: ['checkText'],
        title: "checkQuestion"
      },
      {
        key: "timeKey",
        name: "TimePicker",
        options: null,
        title: "timeQuestion"
      },
      {
        key: "textAreaKey",
        name: "TextArea",
        options: null,
        title: "textareaQuestion"
      },
      {
        key: "selectKey",
        name: "Select",
        options: ['a', 'b', 'c', 'd'],
        title: "selectQuestion"
      },
      {
        key: "multipleChoice",
        name: "MultipleChoice",
        options: ['a', 'b', 'c', 'd'],
        title: "multipleChoice"
      }
    ]
  }

  componentDidMount() {
    const question = this.state.questionsArray
    const answers = this.state.answer
    if (question.length > 0) question.forEach((val, index) => {
      const answer = answers.filter(answer => val.key === answer.key)
      if (answer.length > 0)
        this.setState({ [question[index].key]: answer[0].value })
    })
  }

  setEditBar = key => this.setState({ editBar: key })

  editQuestion = (index, action, value) => {
    let questions = [...this.state.questionsArray]
    questions = action === "delete" ? questions.splice(index, 1)
      : questions[index][action] = value
    this.setState({ questionsArray: questions })
  }

  onDragEnd = result => {
    if (result.destination) {
      let questionsArray = [...this.state.questionsArray]
      const drugItem = questionsArray.splice(result.draggableId, 1)
      questionsArray.splice(result.destination.index, 0, drugItem[0])
      this.setState({ questionsArray })
    }
  }

  onChange = (e, key, type, f) => {
    const value = type === "value" ? e.target.value
      : type === "dateTime" ? f
        : type === "check" ? e.target.checked
          : type === "event" ? e
            : console.log("No matching key")
    this.setState({ [key]: value })
  }

  createComponent = (question, index) => {

    const componets = {
      "Input": Input,
      "CheckBox": Checkbox,
      "DatePicker": DatePicker,
      "TimePicker": TimePicker,
      "MultipleChoice": MultipleChoice,
      "Select": Select,
      "TextArea": TextArea
    }

    const key = question.key
    const permission = this.state.permission
    console.log(key)
    const props = {
      key,
      index,
      title: question.title,
      value: this.state[key],
      drag: permission === "edit",
      onChange: permission === "write" ? this.onChange : () => { },
      dataKey: key,
      options: question.options,
      highlight: !this.state[key] && permission === "write",
      editBar: permission === "edit" && this.state.editBar === key,
    }

    const compoent = React.createElement(componets[question.name], props)
    return compoent;
  }

  render() {
    const container = this.state.permission === "edit"
      ? <Droppable title="Form Title" questions={this.state.questionsArray} createComponent = {this.createComponent.bind(this)} onDragEnd = {this.onDragEnd.bind(this)}/>
      : <NotDroppable title="Form Title" questions={this.state.questionsArray} createComponent = {this.createComponent.bind(this)}/>
    return (
      <Content style={{ background: "white" }}>
        <Card style={{ width: "100%", zIndex: 1, top: 0, position: "fixed" }}>
          <Button icon="right">Send</Button>
        </Card>
        {container}
      </Content>
    );
  }
}

export default EditForm;
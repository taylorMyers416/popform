import React, { Component } from 'react';
import { Layout, Button, Card, Typography } from 'antd';
import { Checkbox, Input, DatePicker, MultipleChoice, Select, TextArea, TimePicker } from "../components/questions"
const { Content } = Layout,
  { Title } = Typography


class EditForm extends Component {

  state = {
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
      }, {
        key: 'multipleChoice',
        value: 'd'
      }
    ],
    visible: false,
    permission: "write",
    display: "none",
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
        options: ['a','b','c','d'],
        title: "selectQuestion"
      },
      {
        key: "multipleChoice",
        name: "MultipleChoice",
        options: ['a','b','c','d'],
        title: "multipleChoice"
      }
    ]
  }
  componentDidMount() {
    const question = this.state.questionsArray
    const answers = this.state.answer
    question.forEach((val, index) => {
      const answer = answers.filter(answer => val.key === answer.key)
      if (answer.length > -1)
        this.setState({ [question[index].key]: answer[0].value })
    })
  }

  onChange = (e,key,type,f) => {
    const value = type === "value" ? e.target.value
      : type === "dateTime" ? f
      : type === "check" ? e.target.checked
      : type === "event" ? e
      : console.log("No matching key")
    this.setState({[key]: value})
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
    const permission = this.state.permission === "write" ? this.onChange : () => {}
    const props = {
      index,
      title: question.title,
      value: this.state[key],
      drag: false,
      onChange: permission,
      key,
      dataKey: key,
      options: question.options
    }
    const compoent = React.createElement(componets[question.name], props)
    return compoent;
  }

  render() {
    return (
      <Content style={{ background: "white" }}>
        <Card style={{ width: "100%", zIndex: 1, top: 0, position: "fixed" }}>
          <Button icon="right">Send</Button>
        </Card>
        <Card style={{ maxWidth: "770px", width: "90%", margin: "100px auto", padding: "60px 0" }}>
          <Title style={{ textAlign: "center" }} level={1}>Form Title</Title>
          {this.state.questionsArray.map((question, index) => this.createComponent(question, index))}
        </Card>
      </Content>
    );
  }
}

export default EditForm;
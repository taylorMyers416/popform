const answer = [
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
  ]

  const questionsArray = [
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
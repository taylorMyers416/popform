import React from "react";
import { Draggable } from "react-beautiful-dnd"
import { Typography, Input, Button, Card, Select } from 'antd';

const { Title } = Typography,
    { Option } = Select

const QuestionHolder = props => {
    let display = props.editBar ? "block" : "none"

    const draggable =
        <div style={{ display: "block", fontSize: "16px" }}>
            <Draggable draggableId={`${props.index}`} index={props.index} >
                {(provided => (
                    <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <div style = {{padding: "25px", border: "1px solid #e8e8e8"}}>
                            <Input size="large" style={{ background: "white", width: "200px", marginBottom: "20px" }} value={props.title} />
                            <br />
                            {props.children}
                        </div>
                        <Card style={{ textAlign: "center", display: display}}>
                            <Select defaultValue="Input" style={{ width: 120 }}>
                                <Option value="Input">Input</Option>
                                <Option value="TextArea">Paragraph</Option>
                                <Option value="DatePicker">Date</Option>
                                <Option value="TimePicker">Time</Option>
                                <Option value="Select">Select</Option>
                                <Option value="MultipleChoice">Multiple Choice</Option>
                                <Option value="CheckBox">Check box</Option>
                            </Select>
                            <span style={{ marginLeft: "20px" }}> </span>
                            <Button icon="delete" />
                        </Card>
                    </div>

                ))}
            </Draggable>
        </div>

    const noDrag =
        <div>
            <div style={{ display: "block", fontSize: "16px", padding: "25px", }}>
                <Title style={{ background: "white" }} level={4}>{props.title}</Title>
                {props.children}
            </div>
        </div>

    let holder = props.drag ? holder = draggable : holder = noDrag
    let divStyle = props.editBar ? { boxShadow: "3px 3px 3px 3px #ccc" } : {}

    return (
        <div style={divStyle}>
            {holder}
        </div>
    )
}

export default QuestionHolder
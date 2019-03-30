import React from "react";
import { Radio } from 'antd';
import QuestionHolder from "./questionHolder.jsx"

const RadioGroup = Radio.Group;

const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
};

const MultiChoice = props =>
    <QuestionHolder
        title={props.title}
        index={props.index}
        drag={props.drag}
        editBar={props.editBar}
        children={
            <RadioGroup onChange={(e) => props.onChange(e, props.dataKey, "value")}
                value={props.value}
                children={props.options.map((option, index) => (
                    <Radio key={`radio${index}`} style={radioStyle} value={option}>{option}</Radio>
                ))}>
            </RadioGroup>
        }
    />

export default MultiChoice
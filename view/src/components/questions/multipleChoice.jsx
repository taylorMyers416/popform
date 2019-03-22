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
        children={
            <RadioGroup onChange={props.onChange} value={props.value}
                children={props.options.map((option, index) => (
                    <Radio style={radioStyle} value={index}>{option}</Radio>
                ))}>
            </RadioGroup>
        }
    />

export default MultiChoice
import React from "react";
import { Input } from 'antd';
import QuestionHolder from "./questionHolder.jsx"

const { TextArea } = Input;

const MyTextArea = props =>

    <QuestionHolder
        index={props.index}
        title={props.title}
        drag={props.drag}
        children={
            <TextArea
                style={{ maxWidth: "300px" }}
                placeholder={props.placeholder}
                onChange={(e) => props.onChange(e,props.dataKey,"value")}
                value={props.value}
            />
        }
    />
export default MyTextArea
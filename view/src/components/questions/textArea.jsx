import React from "react";
import { Input } from 'antd';
import QuestionHolder from "./questionHolder.jsx"

const { TextArea } = Input;

const MyTextArea = props =>

    <QuestionHolder
        index={props.index}
        title={props.title}
        children={
            <TextArea
                style={{ maxWidth: "300px" }}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            />
        }
    />
export default MyTextArea
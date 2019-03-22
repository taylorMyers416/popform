import React from "react";
import { Select } from 'antd';
import QuestionHolder from "./questionHolder.jsx"

const Option = Select.Option;

const MySelect = props =>

    <QuestionHolder
        index={props.index}
        title={props.title}
        children={
            <Select defaultValue="lucy" style={{ maxWidth: "300px" }} onChange={props.onChange}
                children={props.options.map((choice, index) => (
                    <Option value={choice}>{choice}</Option>
                ))}>
            </Select>
        }
    />
export default MySelect
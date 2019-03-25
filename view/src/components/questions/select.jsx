import React from "react";
import { Select } from 'antd';
import QuestionHolder from "./questionHolder.jsx"

const Option = Select.Option;

const MySelect = props =>

    <QuestionHolder
        index={props.index}
        title={props.title}
        drag={props.drag}
        children={
            <Select value={props.value} style={{ maxWidth: "300px" }}
                onChange={(e) => props.onChange(e, props.dataKey, "event")}
                children={props.options.map((choice, index) => (
                    <Option value={choice}>{choice}</Option>
                ))}>
            </Select>
        }
    />
export default MySelect
import React from "react";
import { Input } from 'antd';
import QuestionHolder from "./questionHolder.jsx"

const MyInput = props =>
    <QuestionHolder
        index={props.index}
        title={props.title}
        drag={props.drag}
        editBar={props.editBar}
        children={
            <div>
                <Input
                    style={{ maxWidth: "300px" }}
                    placeholder={props.placeholder}
                    onChange={(e) => props.onChange(e,props.dataKey,"value")}
                    value={props.value}
                    size="small"
                />
            </div>
        }
    />


export default MyInput
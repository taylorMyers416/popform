import React from "react";
import { Input } from 'antd';
import QuestionHolder from "./questionHolder.jsx"

const MyInput = props =>
    <QuestionHolder
        index={props.index}
        title={props.title}
        children={
            <div>
                Fist Name: {" "}
                <Input
                    style={{ maxWidth: "300px" }}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    value={props.value}
                    size="small"
                />
            </div>
        }
    />


export default MyInput
import React from "react";
import { Input } from 'antd';

const MyInput = props =>
    <div style = {{fontSize: "16px"}}>
        Fist Name: {" "}
        <Input
            style={{ maxWidth: "300px" }}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            size="small"
        />
    </div>
export default MyInput
import React from "react";
import { Checkbox } from 'antd';

const MyCheckbox = props =>

    <Checkbox style={{ fontSize: "16px" }} onChange={props.onChange}>
        {props.checkText}
    </Checkbox>

export default MyCheckbox
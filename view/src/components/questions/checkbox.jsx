import React from "react";
import { Checkbox } from 'antd';
import QuestionHolder from "./questionHolder.jsx"
const MyCheckbox = props => {

    return <QuestionHolder
        index={props.index}
        title={props.title}
        drag={props.drag}
        children={
            <Checkbox style={{ fontSize: "16px" }} onChange={(e) => props.onChange(e, props.dataKey, "check")}
                checked={props.value}>
                {props.options[0]}
            </Checkbox>
        }
    />
}



export default MyCheckbox
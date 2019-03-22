import React from "react";
import { Checkbox } from 'antd';
import QuestionHolder from "./questionHolder.jsx"
const MyCheckbox = props => {

return <QuestionHolder
        index={props.index}
        title={props.title}
        children={
            <Checkbox style={{ fontSize: "16px" }} onChange={props.onChange}>
                {props.checkText}
            </Checkbox>
        }
    />
        console.log(props)
    }



export default MyCheckbox
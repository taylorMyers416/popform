import React from 'react'
import { TimePicker } from 'antd';
import QuestionHolder from "./questionHolder.jsx"
import moment from 'moment';

const MyTimePicker = props =>
    <QuestionHolder
        index={props.index}
        title={props.title}
        drag={props.drag}
        editBar={props.editBar}
        children={
            <TimePicker onChange={(e,f) => props.onChange(e,props.dataKey,"dateTime",f)} value={moment(props.value, 'HH:mm:ss')} />
        }
    />
export default MyTimePicker
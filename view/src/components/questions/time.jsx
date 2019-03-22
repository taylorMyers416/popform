import React from 'react'
import { TimePicker } from 'antd';
import QuestionHolder from "./questionHolder.jsx"
import moment from 'moment';

const Time = props =>
    <QuestionHolder
        index={props.index}
        title={props.title}
        children={
            <TimePicker onChange={props.onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
        }
    />
export default Time
import React from "react";
import { DatePicker } from 'antd';
import QuestionHolder from "./questionHolder.jsx"
import moment from 'moment';

const Date = props =>
    <QuestionHolder
        index={props.index}
        title={props.title}
        children={
            <DatePicker defaultValue={moment(moment.unix(props.timestamp), 'YYYY-MM-DD')} />
        }
    />

export default Date
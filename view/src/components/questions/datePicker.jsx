import React from "react";
import { DatePicker } from 'antd';
import QuestionHolder from "./questionHolder.jsx"
import moment from 'moment';

const MyDatePicker = props =>
    <QuestionHolder
        index={props.index}
        title={props.title}
        drag={props.drag}
        children={
            <DatePicker onChange={(e, f) => props.onChange(e, props.dataKey, "dateTime", f)}
                value={moment(props.value, 'YYYY-MM-DD')} />
        }
    />

export default MyDatePicker
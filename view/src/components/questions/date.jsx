import React from "react";
import { DatePicker } from 'antd';
import moment from 'moment';

const Date = props =>
    <DatePicker defaultValue={moment(moment.unix(props.timestamp), 'YYYY-MM-DD')} />
export default Date
import React from "react";
import { Card, Typography } from 'antd';

const { Title } = Typography;

const NotDroppable = props => (
    <Card style={{ maxWidth: "770px", width: "90%", margin: "100px auto", padding: "60px 0" }}>
        <Title style={{ textAlign: "center" }} level={1}>{props.title}</Title>
        {props.questions.map((question, index) => props.createComponent(question, index))}
    </Card>
);

export default NotDroppable
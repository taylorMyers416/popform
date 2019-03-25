import React from "react";
import { Draggable } from "react-beautiful-dnd"
import { Typography } from 'antd';

const { Title } = Typography;

const QuestionHolder = props => {
    let holder;
    const draggable =
        <div style={{ display: "block", fontSize: "16px", padding: "25px", }}>
            <Draggable draggableId={`${props.index}`} index={props.index} >
                {(provided => (
                    <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <Title style={{ background: "white" }} level={4}>{props.title}</Title>
                        {props.children}
                    </div>
                ))}
            </Draggable>
        </div>
    const noDrag =
        <div style={{ display: "block", fontSize: "16px", padding: "25px", }}>
            <Title style={{ background: "white" }} level={4}>{props.title}</Title>
            {props.children}
        </div>
    props.drag ? holder = draggable : holder = noDrag

    return (
        <div>
            {holder}
        </div>
    )
}

export default QuestionHolder
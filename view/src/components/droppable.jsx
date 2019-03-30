import React from "react";
import { DragDropContext, Droppable, } from 'react-beautiful-dnd';
import { Card, Typography } from 'antd';

const { Title } = Typography;

const MyDroppable = props => (
    <DragDropContext onDragEnd={props.onDragEnd}>
        <Card style={{ maxWidth: "770px", width: "90%", margin: "100px auto", padding: "60px 0" }}>
            <Title style={{ textAlign: "center" }} level={1}>{props.title}</Title>
            <Droppable id="dropId" droppableId="droppableId">
                {provided => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {props.questions.map((question, index) => props.createComponent(question, index))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </Card>
    </DragDropContext>
);

export default MyDroppable
import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd"
import { Typography } from 'antd';

const { Title } = Typography;

class QuestionHolder extends Component {

    render() {
        return (
            <div style={{ display: "block", fontSize: "16px", padding: "25px",  }}
            >
                <Draggable draggableId={`${this.props.index}`} index={this.props.index} >
                    {(provided => (
                        <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                        >
                            <Title style = {{background: "white"}} level={4}>{this.props.title}</Title>
                            {this.props.children}
                        </div>
                    ))}

                </Draggable>
            </div>
        )
    }
}
export default QuestionHolder
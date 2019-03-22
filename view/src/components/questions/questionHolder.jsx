import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd"
import { Typography } from 'antd';

const { Title } = Typography;

class QuestionHolder extends Component {
    state = {
        marginLeft: "0px"
    }
    mediaQuery = () => this.setState({ marginLeft: window.innerWidth > 992 ? "100px" : "0px" })

    componentDidMount() {
        this.mediaQuery();
        window.addEventListener("resize", this.mediaQuery.bind(this));
    }

    componentWillUnmount() { window.removeEventListener("resize", this.mediaQuery.bind(this)); }

    render() {
        return (
            <div style={{ display: "block", fontSize: "16px", marginTop: "50px", marginLeft: this.state.marginLeft }}
            >
                <Draggable draggableId={`${this.props.index}`} index={this.props.index} >
                    {(provided => (
                        <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                        >
                            <Title level={4}>{this.props.title}</Title>
                            {this.props.children}
                        </div>
                    ))}

                </Draggable>
            </div>
        )
    }
}
export default QuestionHolder
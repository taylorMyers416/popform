import React, { Component } from 'react';
import { Button, Input, Layout, Typography } from 'antd';
import { Link } from "react-router-dom";

const { Content } = Layout,
    { Title } = Typography

const boxStyle = {
    position: "absolute", transform: "translate(-50%, -50%",
    textAlign: "center", marginTop: "-70px", top: "50%", left: "50%"
}

class NewForm extends Component {

    state = {
        createForm: "block",
        formCreated: "none",
        errorText: "",
        formId: "12345"
    }

    mediaQuery = () => this.setState({ marginLeft: window.innerWidth > 992 ? "100px" : "0px" })

    componentDidMount() {
        this.mediaQuery();
        window.addEventListener("resize", this.mediaQuery.bind(this));
    }

    componentWillUnmount() { window.removeEventListener("resize", this.mediaQuery.bind(this)); }

    handleChange = event => this.setState({ formName: event.target.value })

    submitForm = () => this.switchDiv("none", "block")

    switchDiv = (createForm, formCreated) => this.setState({ createForm, formCreated, formName: "" })

    render() {

        return (
            <Content style={{ positon: "relative" }}>
                <div style={{ display: this.state.createForm, marginLeft: this.state.marginLeft, ...boxStyle }}>
                    <Title level={3}> Create New Form</Title>
                    <Input
                        style={{ maxWidth: "500px" }}
                        placeholder="Form Name"
                        onChange={this.handleChange}
                        value={this.state.formName}
                    />
                    <br />
                    <br />
                    <Button onClick={this.submitForm}>Create Form</Button>
                    <p style={{ color: "red" }}>{this.state.errorText}</p>
                </div>
                <div style={{ display: this.state.formCreated, marginLeft: this.state.marginLeft, ...boxStyle }}>
                    <Title level={3}>Form Created!</Title>
                    <Button><Link to = {`/edit-form/${this.state.formId}`}>Open form in editor</Link></Button>
                    <p>or</p>
                    <Button onClick={() => this.switchDiv("block", "none")}>Create another form.</Button>
                </div>
            </Content>
        );
    }
}

export default NewForm;
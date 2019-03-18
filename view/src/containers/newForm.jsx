import React, { Component } from 'react';
import { Steps, Button, message } from 'antd';

const Step = Steps.Step;

const steps = [{
    title: 'Choose starting point',
    content: <div>div</div>,
}, {
    title: 'Form Settings',
    content: 'Second-content',
}, {
    title: 'Success',
    content: 'Last-content',
}];

class NewForm extends React.Component {

state = {
        current: 0,
    };

changeStep(num) {
    const current = this.state.current + num;
    this.setState({ current });
}

render() {
    const { current } = this.state;
    return (
        <div>
            <Steps current={current}>
                {steps.map(item => <Step key={item.title} title={item.title} />)}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {
                    current < steps.length - 1
                    && <Button type="primary" onClick={() => this.changeStep(1)}>Next</Button>
                }
                {
                    current === steps.length - 1
                    && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                }
                {
                    current > 0
                    && (
                        <Button style={{ marginLeft: 8 }} onClick={() => this.changeStep(-1)}>
                            Previous
            </Button>
                    )
                }
            </div>
        </div>
    );
}
}

export default NewForm;
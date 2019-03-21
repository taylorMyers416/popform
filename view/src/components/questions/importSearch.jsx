import React, { Component } from 'react';
import { Select, Tag, Icon } from 'antd';

const Option = Select.Option


class ImportSearch extends Component {

    state = {
        checked: false
    }

    render() {
        return (

            <Select
                showSearch
                showArrow={false}
                style={{ width: 300 ,marginBottom: "20px" }}
                placeholder="Import Question"
                optionFilterProp="children"
                onChange={this.props.handleChange}
            >
                <Option value="address">address
            <span style={{ position: "absolute", right: "0" }}>
                        <Tag color="blue" >12k+ <Icon type="user" /></Tag>
                        <Tag color="green">1k+ <Icon type="form" /></Tag>
                    </span></Option>
                <Option value="address">address
            <span style={{ position: "absolute", right: "0" }}>
                        <Tag color="blue" >12k+ <Icon type="user" /></Tag>
                        <Tag color="green">1k+ <Icon type="form" /></Tag>
                    </span></Option>
                <Option value="address">address
            <span style={{ position: "absolute", right: "0" }}>
                        <Tag color="blue" >12k+ <Icon type="user" /></Tag>
                        <Tag color="green">1k+ <Icon type="form" /></Tag>
                    </span></Option>
                <Option value="address">address
            <span style={{ position: "absolute", right: "0" }}>
                        <Tag color="blue" >12k+ <Icon type="user" /></Tag>
                        <Tag color="green">1k+ <Icon type="form" /></Tag>
                    </span></Option>
                <Option value="address">address
            <span style={{ position: "absolute", right: "0" }}>
                        <Tag color="blue" >12k+ <Icon type="user" /></Tag>
                        <Tag color="green">1k+ <Icon type="form" /></Tag>
                    </span></Option>
            </Select>
        );
    }
}

export default ImportSearch;
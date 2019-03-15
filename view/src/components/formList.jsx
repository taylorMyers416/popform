import React from "react";
import { Icon, List } from 'antd';

const formList = props => (
    <List dataSource={props.data} itemLayout="horizontal" style={{ maxWidth: "90%", margin: "0 auto" }}
        renderItem={item => (
            <List.Item actions={[<a><Icon type="right" />Send</a>,<a><Icon type="edit" /> Edit</a>, <a><Icon type="eye" /> View</a>, <a><Icon type="delete" /> Delete</a>]}>
                <List.Item.Meta
                    title={<span>
                        <Icon type={`${item.type}`} /> {item.name}
                    </span>}
                    description={
                        <span>
                            <span>Owner:{'\u00A0'}{item.owner}</span><br />
                            <span>Respondant:{'\u00A0'}{item.respondant}</span>
                        </span>}
                    />
            </List.Item>
        )}
        
            />
        
        );
        
export default formList
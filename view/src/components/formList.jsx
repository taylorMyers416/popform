import React from "react";
import { Icon, List } from 'antd';

// Declare Icons
const sendIcon = <span><Icon type="right" />Send</span>,
    editIcon = <span><Icon type="edit" /> Edit</span>,
    viewIcon = <span><Icon type="eye" />View</span>,
    deleteIcon = <span><Icon type="delete" />Delete</span>,
    fillableIcon = <Icon type="file" />,
    sentIcon = <Icon type="right" />,
    recievedIcon = <Icon type="left" />,
    inquerieIcon = <Icon type="mail" />

const getActions = type => {
    const readWrite = [sendIcon,editIcon,viewIcon,deleteIcon]
    const readOnly = [viewIcon,deleteIcon]
    return type === "fillable" || type === "inquerie" ? readWrite : readOnly
}

const getIconType = type => {
    return type === "fillable" ? fillableIcon
    : type === "sent" ? sentIcon
        : type === "recieved" ? recievedIcon
            : inquerieIcon
}

const getDateText = (type,itemDate) => {
    const date = new Date(itemDate * 1000);
    const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    return type === "fillable" ? `Last Opened: ${formattedDate}`
    : type === "sent" ? `Sent On: ${formattedDate}`
        : type === "recieved" ? `Recieved On: ${formattedDate}`
            : `Inqueried On: ${formattedDate}`
}

const formList = props => (
    <List dataSource={props.data} itemLayout="vertical" style={{ maxWidth: "90%", margin: "0 auto", marginTop: "128px"}}
        renderItem={item => (
            <List.Item actions={getActions(item.type)}>
                <List.Item.Meta
                    title={<span>{getIconType(item.type)}{item.name}</span>}
                    description={
                        <span>
                            <span>{getIconType(item.type)}{item.type}</span><br />
                            <span>Owner:{'\u00A0'}{item.owner}</span><br />
                            <span>Respondant:{'\u00A0'}{item.respondant}</span><br />
                            <span>{getDateText(item.type,item.date)}</span>
                        </span>}
                />
            </List.Item>
        )} />
);

export default formList
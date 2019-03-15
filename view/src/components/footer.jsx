import React from "react";
import { Layout} from 'antd';

const { Footer } = Layout;

const MyFooter = () => (
    <Footer style={{ textAlign: 'center', bottom: 0, left: 0, borderTop: "1px rgba(0,0,0,0.14) solid"}}>
          Popform ©2019 Created by Taylor Myers
      </Footer>
);

export default MyFooter
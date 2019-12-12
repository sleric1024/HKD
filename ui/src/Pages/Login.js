import { NavBar, Icon, WhiteSpace, List} from 'antd-mobile';
import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import logo1 from '../logo/1.svg';
import logo2 from '../logo/2.svg';
import logo3 from '../logo/3.svg';
import logo4 from '../logo/4.svg';
import '../static/css/Login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="login-page">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          style={{background: '#fff'}}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="right" />,
          ]}
        >思爱普上海分公司</NavBar>
        <WhiteSpace size="xs" />

        <List>
          <List.Item thumb={logo1}>SAP Digital Lunch</List.Item>
          <List.Item thumb={logo2}>企业小助手</List.Item>
          <List.Item thumb={logo3}>SAP Digital Parking</List.Item>
          <List.Item thumb={logo4}>SAP Digital Employee Center</List.Item>
        </List>
      </div>
    );
  }
}

export default Login;
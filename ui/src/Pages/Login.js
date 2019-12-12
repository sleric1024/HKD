import { NavBar, WhiteSpace, List, SearchBar} from 'antd-mobile';
import React, { Component} from 'react';
import {Icon} from 'antd';
import 'antd-mobile/dist/antd-mobile.css';
import logo1 from '../logo/1.svg';
import logo2 from '../logo/2.svg';
import logo3 from '../logo/3.svg';
import logo4 from '../logo/4.svg';
import '../static/css/Login.css'
import { Link } from 'react-router-dom';

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
          style={{background: '#fff', color: '#7f7878'}}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="plus-circle" />,
          ]}
        >思爱普上海分公司</NavBar>
        <WhiteSpace size="xs" />

        <SearchBar placeholder="搜索应用" />

        <WhiteSpace size="xs" />
        <List>
          <List.Item thumb={logo1} extra='2019/12/13'>SAP Digital Lunch
            <List.Item.Brief>下周菜单</List.Item.Brief>
          </List.Item>
          <List.Item thumb={logo2} extra='2019/12/13'>企业小助手
            <List.Item.Brief>2.8.7版本新功能介绍</List.Item.Brief>
          </List.Item>
          <List.Item thumb={logo3} extra='2019/12/13'>SAP Digital Parking
            <List.Item.Brief>暂无新消息</List.Item.Brief>
          </List.Item>
          <Link to="/welcome">
            <List.Item thumb={logo4} extra='2019/12/13'>SAP Digital Employee Center
              <List.Item.Brief>Welcome to SAP Digital Employee Center</List.Item.Brief>
            </List.Item>
          </Link>
        </List>
      </div>
    );
  }
}

export default Login;
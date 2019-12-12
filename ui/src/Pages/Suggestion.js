import React, { Component } from 'react';
import { NavBar, WhiteSpace, Flex, List, WingBlank} from 'antd-mobile';
import { Avatar, Icon, Tag, Rate} from 'antd';
import 'antd-mobile/dist/antd-mobile.css';
import logo1 from '../logo/1.svg';
import logo2 from '../logo/2.svg';
import logo3 from '../logo/3.svg';
import logo4 from '../logo/4.svg';
import img1 from '../logo/img1.jpeg';
import img2 from '../logo/img2.png';
import img4 from '../logo/img4.jpeg';
import '../static/css/Suggestion.css';

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="suggestion-selection">
        <NavBar
          className="navbar-style"
          leftContent="Back"
          onLeftClick={() => console.log('onLeftClick')}
          rightContent="Next">
            <Icon type="heart" style={{ color: 'rgb(255, 219, 2)', fontSize: '2rem'}}></Icon>
        </NavBar>

        <List renderHeader={() => "Suggestion List"}>
          <WingBlank size="sm">
            <Flex align="start">
            <Avatar src={img1} size={30}></Avatar>
            <List.Item >
              Victoria Banks
              <List.Item.Brief>
                <Rate disabled defaultValue={5} />
                5/5</List.Item.Brief>
              <List.Item.Brief >
                <Tag color="blue">瑜伽</Tag>
                <Tag color="red">跳舞</Tag>
                <Tag color="green">不养宠物</Tag>
                <br />
                <Tag color="gold">程序员</Tag>
                <Tag color="purple">单身</Tag>
              </List.Item.Brief>
            </List.Item>
            <Flex justify="end">
              <Tag color="#108ee9" className="inumber">I209324</Tag>
              <Icon type="mail" theme="twoTone" className="ant-icon"></Icon>
              <Icon type="phone" theme="twoTone" className="ant-icon"></Icon>
            </Flex>
          </Flex>
          </WingBlank>

          <WingBlank size="sm">
            <Flex align="start">
            <Avatar src={img2} size={30}></Avatar>
            <List.Item>Kathy Tucker
              <List.Item.Brief>
                <Rate disabled defaultValue={4} />
                4/5</List.Item.Brief>
              <List.Item.Brief>
                <Tag color="green">不养宠物</Tag>
                <Tag color="gold">程序员</Tag>
                <br />
                <Tag color="purple">单身</Tag>
              </List.Item.Brief>
            </List.Item>
            <Flex justify="end">
              <Tag color="#108ee9" className="inumber">I814029</Tag>
              <Icon type="mail" theme="twoTone" className="ant-icon"></Icon>
              <Icon type="phone" theme="twoTone" className="ant-icon"></Icon>
            </Flex>
          </Flex>
          </WingBlank>

          <WingBlank size="sm">
            <Flex align="start">
            <Avatar icon="user" style={{ backgroundColor: '#87d068' }} size={40}></Avatar>
            <List.Item>Marco del Toro
              <List.Item.Brief>
                <Rate disabled defaultValue={4} />
                4/5</List.Item.Brief>
              <List.Item.Brief >
                <Tag color="gold" >程序员</Tag>
                <Tag color="purple">单身</Tag>
              </List.Item.Brief>
            </List.Item>
            <Flex justify="end">
              <Tag color="#108ee9" className="inumber">I419321</Tag>
              <Icon type="mail" theme="twoTone" className="ant-icon"></Icon>
              <Icon type="phone" theme="twoTone" className="ant-icon"></Icon>
            </Flex>
          </Flex>
          </WingBlank>

          <WingBlank size="sm">
            <Flex align="start">
            <Avatar src={img4} size={30}></Avatar>
            <List.Item>Howard Domingo
              <List.Item.Brief>
                <Rate disabled defaultValue={2} style={{color: '#ffa500e6'}}/>
                2/5</List.Item.Brief>
              <List.Item.Brief >
                <Tag color="gold">程序员</Tag>
                <Tag color="cyan">养猫</Tag>
              </List.Item.Brief>
            </List.Item>
            <Flex justify="end">
              <Tag color="#108ee9" className="inumber">I733362</Tag>
              <Icon type="mail" theme="twoTone" className="ant-icon"></Icon>
              <Icon type="phone" theme="twoTone" className="ant-icon"></Icon>
            </Flex>
          </Flex>
          </WingBlank>
        </List>
      </div>
    );
  }
}

export default Entry;
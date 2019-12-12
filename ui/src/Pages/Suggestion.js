import React, { Component } from 'react';
import { NavBar, WhiteSpace, Flex, List, WingBlank} from 'antd-mobile';
import { Avatar, Icon, Tag, Rate} from 'antd';
import 'antd-mobile/dist/antd-mobile.css';
import logo1 from '../logo/1.svg';
import logo2 from '../logo/2.svg';
import logo3 from '../logo/3.svg';
import logo4 from '../logo/4.svg';
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
          className="nav"
          mode="light"
          leftContent="Back"
          onLeftClick={() => console.log('onLeftClick')}
        >租</NavBar>
        <WhiteSpace size="xs" />

        <List renderHeader={() => "Suggestion List"}>
          <WingBlank size="md">
            <Flex align="start">
            <Avatar src="https://ca.slack-edge.com/T95TT7UDT-W8TJZQ8SV-7768a3157639-512" size={40}></Avatar>
            <List.Item >
              Victoria Banks
              <List.Item.Brief>
                <Rate disabled defaultValue={5} />
                5/5</List.Item.Brief>
              <List.Item.Brief >
                <Tag color="magenta">Guitar</Tag>
                <Tag color="blue">Yoga</Tag>
                <Tag color="red">Dance</Tag>
                <Tag color="green">No Pet</Tag>
                <br />
                <Tag color="gold">Computer Science</Tag>
                <Tag color="purple">Single</Tag>
              </List.Item.Brief>
            </List.Item>
            <Flex justify="end">
              <Tag color="#108ee9" className="inumber">I209324</Tag>
              <Icon type="mail" theme="twoTone" className="ant-icon"></Icon>
              <Icon type="phone" theme="twoTone" className="ant-icon"></Icon>
            </Flex>
          </Flex>
          </WingBlank>

          <WingBlank size="md">
            <Flex align="start">
            <Avatar src="https://ca.slack-edge.com/T95TT7UDT-W8VB7U91U-0ed2bc407f16-512" size={40}></Avatar>
            <List.Item>Kathy Tucker
              <List.Item.Brief>
                <Rate disabled defaultValue={4} />
                4/5</List.Item.Brief>
              <List.Item.Brief>
                <Tag color="green">No Pet</Tag>
                <Tag color="gold">Computer Science</Tag>
                <Tag color="purple">Single</Tag>
              </List.Item.Brief>
            </List.Item>
            <Flex justify="end">
              <Tag color="#108ee9" className="inumber">I814029</Tag>
              <Icon type="mail" theme="twoTone" className="ant-icon"></Icon>
              <Icon type="phone" theme="twoTone" className="ant-icon"></Icon>
            </Flex>
          </Flex>
          </WingBlank>

          <WingBlank size="md">
            <Flex align="start">
            <Avatar icon="user" style={{ backgroundColor: '#87d068' }} size={40}></Avatar>
            <List.Item>Marco del Toro
              <List.Item.Brief>
                <Rate disabled defaultValue={4} />
                4/5</List.Item.Brief>
              <List.Item.Brief >
                <Tag color="gold" >Computer Science</Tag>
                <Tag color="purple">Single</Tag>
              </List.Item.Brief>
            </List.Item>
            <Flex justify="end">
              <Tag color="#108ee9" className="inumber">I419321</Tag>
              <Icon type="mail" theme="twoTone" className="ant-icon"></Icon>
              <Icon type="phone" theme="twoTone" className="ant-icon"></Icon>
            </Flex>
          </Flex>
          </WingBlank>

          <WingBlank size="md">
            <Flex align="start">
            <Avatar src="https://ca.slack-edge.com/T95TT7UDT-W8U9HS2UV-deae1e944f00-512" size={40}></Avatar>
            <List.Item>Howard Domingo
              <List.Item.Brief>
                <Rate disabled defaultValue={2} style={{color: '#ffa500e6'}}/>
                2/5</List.Item.Brief>
              <List.Item.Brief >
                <Tag color="gold">Computer Science</Tag>
                <Tag color="cyan">Love Pet</Tag>
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
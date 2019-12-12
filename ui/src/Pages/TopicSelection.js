import React, { Component, useState } from 'react';
import { NavBar, WhiteSpace, WingBlank, Flex, Grid } from 'antd-mobile';
import { Avatar, Icon } from 'antd';
import 'antd-mobile/dist/antd-mobile.css';
import 'antd/dist/antd.css';
import '../static/css/TopicSelection.css';

function TopicSelection(props) {

  const dataList = [
    {icon: 'home', text: '租房', selected: false},
    {icon: 'car', text: '拼车', selected: false},
    {icon: 'heart', text: '单身', selected: false},
    {icon: 'skin', text: '置换', selected: false},
    {icon: 'camera', text: '摄影', selected: false},
    {icon: 'zhihu', text: '知乎', selected: false},
    {icon: 'taobao', text: '淘宝', selected: false},
    {icon: 'slack', text: '交友', selected: false},
    {icon: 'reddit', text: '育儿', selected: false},
    {icon: 'read', text: '图书', selected: false},
    {icon: 'customer-service', text: '音乐', selected: false},
    {icon: 'tag', text: '其他', selected: false}
  ];

  const data = dataList.map(item => ({
    icon: (<Icon size="lg"  type={item.icon} />),
    text: item.text,
    selected: item.selected
  }));

  const onTopicClicked = (el, index) => {
    setTimeout(() => {
      props.history.push('/info');
    }, 1500);
  };

  return (
    <div className="topic-selection">
      <NavBar
        className="navbar-style"
        leftContent="Cancel"
        onLeftClick={() => console.log('onLeftClick')}
        rightContent="Next">
          <Icon type="heart" style={{ color: 'rgb(255, 219, 2)', fontSize: '2rem'}}></Icon>
      </NavBar>

        <WingBlank>
        <WhiteSpace size="lg" />

        <Flex align="end">
          <Flex.Item className="avatar">
            <Avatar src="https://ca.slack-edge.com/T95TT7UDT-WKYHKLS1H-a03025123594-512" size={80}>
            </Avatar>
          </Flex.Item>
          <Flex.Item><h3>Hello Vera!</h3></Flex.Item>
        </Flex>

        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />

        <h3 style={{color: '#999898', fontSize: '1.25rem'}}>What's your interested topic?</h3>
        <Grid className="topic-grid" onClick={onTopicClicked} data={data} columnNum={3} hasLine={false} itemStyle={{color: '#fff'}} />

      </WingBlank>
    </div>
  );
};

export default TopicSelection;

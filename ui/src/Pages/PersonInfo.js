import React, { Component, useState, useEffect } from 'react';
import { NavBar, WhiteSpace, WingBlank,
    Flex, InputItem, Button, Radio, List } from 'antd-mobile';
import { Tag, Icon, Divider, Spin} from 'antd';
import 'antd-mobile/dist/antd-mobile.css';
import 'antd/dist/antd.css';
import '../static/css/PersonInfo.css';
import { Link } from 'react-router-dom';

function PersonInfo (props) {

  const [interestTag, setInterestTag] = useState('');
  const [gender, setGender] = useState('male');
  const [currentOthrTag, setCurrentOthrTag] = useState('');
  const colors = ['magenta', 'red', 'volcano', 'orange', 'gold',
  'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];
  const [defaultTags, setDefaultTags] = useState(['吉他', '瑜伽', '跳舞', '代码', '运动', '单身', '美食', '旅行', '摄影', '文艺', '程序员']);
  const [otherTags, setOtherTags] = useState([]);
  const getTagColor = (index) => {
    return colors[index % 11];
  };

  const onAddInterest = () => {
    setDefaultTags(defaultTags.concat([interestTag]));
    setInterestTag("");
  };

  const onAddOtherTag = () => {
    setOtherTags(otherTags.concat([currentOthrTag]));
    setCurrentOthrTag("");
  }

  const RadioItem = Radio.RadioItem;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  },[]);

  return (
    <Spin spinning={isLoading} >
      <div className="person-info">
      <NavBar
        className="navbar-style"
        leftContent="Cancel"
        onLeftClick={() => console.log('onLeftClick')}
        onRightClick={() => {props.history.push('/welcome')}}
        rightContent={
          <Link to="/matching">Next</Link>
        }>
          <Icon type="heart" style={{ color: 'rgb(255, 219, 2)', fontSize: '2rem'}}></Icon>
      </NavBar>

      <WingBlank style={{marginTop: '50px'}}>
        <WhiteSpace size="lg" />

        <Flex align="center">
          <Flex.Item>
            <div className="topic">
              <Icon type="home"></Icon>
              <p>租房</p>
            </div>
          </Flex.Item>
        </Flex>

        <Divider />

        <h3 style={{color: '#999898', fontSize: '1.25rem'}}>What's your interest?</h3>
        <Flex align="center">
          <Flex.Item>
              <InputItem
              clear
              placeholder="输入标签"
              value={interestTag}
              onChange={(value) => {setInterestTag(value)}}
            ></InputItem>
          </Flex.Item>
          <Flex.Item>
            <Button className="add-button" onClick={onAddInterest}>+</Button>
          </Flex.Item>
        </Flex>

        <WhiteSpace size="lg" />
        <div>
          {
            defaultTags.map(function(item, index) {
              return <Tag closable="true" key={index} color={getTagColor(index)}>{item}</Tag>;
            })
          }
        </div>

        <Divider />

        <h3 style={{color: '#999898', fontSize: '1.25rem'}}>Gender for your roomate:</h3>
        <List>
          <RadioItem key="male" className={'male' === gender ? 'genderSelected' : ''} checked={'male' === gender} onChange={() => setGender('male')}>
            Male (男)
          </RadioItem>
          <RadioItem key="female" className={'female' === gender ? 'genderSelected' : ''} checked={'female' === gender} onChange={() => setGender('female')}>
           Female (女)
          </RadioItem>
        </List>

        <Divider />

        <h3 style={{color: '#999898', fontSize: '1.25rem'}}>Other requirements:</h3>
        <Flex align="center">
          <Flex.Item>
              <InputItem
              clear
              placeholder="输入标签"
              value={currentOthrTag}
              onChange={(value) => {setCurrentOthrTag(value)}}
            ></InputItem>
          </Flex.Item>
          <Flex.Item>
            <Button className="add-button" onClick={onAddOtherTag}>+</Button>
          </Flex.Item>
        </Flex>

        <WhiteSpace size="lg" />
        <div>
          {
            otherTags.map(function(item, index) {
              return <Tag closable="true" key={index} color={getTagColor(index)}>{item}</Tag>;
            })
          }
        </div>
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />

      </WingBlank>
    </div>
    </Spin>
  );
}

export default PersonInfo;

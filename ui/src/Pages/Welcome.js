import React, { Component } from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
import { Button } from 'antd-mobile';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import '../static/css/Welcome.css'

const styles = {
  large: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  small: {
    opacity: 0.7,
    fontSize: 16
  }
};

class WelcomeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.forceUpdate();
    }, 0);

    setInterval(() => {
      this.forceUpdate();
    }, 2500);

  }

  render() {
    return (
      <div className='app-outer'>
        <div className='app-inner'>
          <TagCloud
            className='tag-cloud'
            style={{
              fontFamily: 'sans-serif',
              //fontSize: () => Math.round(Math.random() * 50) + 16,
              fontSize: 30,
              color: () => randomColor({
                hue: 'red'
              }),
              padding: 5,
            }}>
            <div
              style={{
                fontFamily: 'serif',
                fontSize: 40,
                fontWeight: 'bold',
                color: randomColor()
              }}>博士</div>
            <div style={styles.large}>租房</div>
            <div style={styles.large}>拼车</div>
            <div style={styles.large}>图书共享</div>
            <div style={styles.large}>旅游达人</div>
            <div style={{fontFamily: 'courier'}}>运动</div>
            <div style={{fontSize: 30}}>健身</div>
            <div style={{fontStyle: 'italic'}}>滑雪</div>
            <div style={{fontWeight: 200}}>跑步</div>
            <div style={{color: 'green'}}>吉他</div>
            <div style={{color: randomColor()}}>撸猫</div>
            <div style={{color: randomColor()}}>汽车</div>
            <div style={{color: randomColor()}}>英雄联盟</div>
            <div style={{color: randomColor()}}>狼人杀</div>
            <div style={{color: randomColor()}}>唱歌</div>
            <div style={{color: randomColor()}}>大数据</div>
            <div style={{color: randomColor()}}>程序员</div>
            <div style={{color: randomColor()}}>设计师</div>
            <div style={{color: randomColor()}}>项目经理</div>
            <div style={{color: randomColor()}}>摄影</div>
            <div style={{color: randomColor()}}>书法</div>
            <div style={{color: randomColor()}}>国画</div>
            <div style={{color: randomColor()}}>拉丁舞</div>
            <div style={{color: randomColor()}}>跳舞</div>
            <div style={{color: randomColor()}}>粤语</div>
            <div style={{color: randomColor()}}>北方人</div>
            <div style={{color: randomColor()}}>江浙沪</div>
            <div style={{color: randomColor()}}>我很帅</div>
            <div style={{color: randomColor()}}>吃鸡</div>
            <div style={{color: randomColor()}}>逛街</div>
            <div style={{color: randomColor()}}>日韩游</div>
            <div style={{color: randomColor()}}>欧洲旅行</div>
            <div style={{color: randomColor()}}>母婴</div>
            <div style={{color: randomColor()}}>股票</div>
            <div style={styles.small}>摇滚音乐</div>
            <div style={styles.small}>美食</div>
            <div style={styles.small}>幽默</div>
            <div style={styles.small}>日语</div>
            <div style={styles.small}>学英语</div>
            <div style={styles.small}>单身</div>
            <div style={styles.small}>羽毛球</div>
          </TagCloud>

          <Link to="/topic" style={{width: '80%', margin: '0 auto'}}>
            <Button
              icon={<Icon type="heart" style={{ color: 'rgb(255, 219, 2)' }}></Icon>}
              style={
              {
                background: '#3c808e',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#FFF'
              }} className='tag-title'>Digital Employee Center</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default WelcomeApp;

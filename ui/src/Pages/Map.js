import React from "react";
import ReactDOM from "react-dom";
import { NavBar, WhiteSpace, WingBlank,
  Flex, InputItem, Button, Radio, List } from 'antd-mobile';

let address = "";

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      result: ""
    };
  }

  handleConform = e => {
    //鼠标点击下拉列表后的事件
    let _value = e.item.value;
    let myValue =
      _value.province +
      _value.city +
      _value.district +
      _value.street +
      _value.business;

    this.setState({
      result: (
        <div>
          onconfirm index = {e.item.index} myValue = {myValue}
        </div>
      )
    });

    this.setPlace(myValue);

    address = myValue;
  };

  myFun = result => {
    console.log("ddddd");
    var pp = result.getPoi(0).point; //获取第一个智能搜索的结果
    this.map.centerAndZoom(pp, 18);
    //eslint-disable-next-line
    this.map.addOverlay(new BMap.Marker(pp)); //添加标注
  };

  setPlace(myValue) {
    this.map.clearOverlays(); //清除地图上所有覆盖物
//eslint-disable-next-line
    let local = new BMap.LocalSearch(this.map, {
      //智能搜索
      onSearchComplete: this.myFun
    });
    local.search(myValue);
  }

  handleHighlight = e => {
    //鼠标放在下拉列表上的事件
    var str = [];
    var _value = e.fromitem.value;
    var value = "";
    if (e.fromitem.index > -1) {
      value =
        _value.province +
        _value.city +
        _value.district +
        _value.street +
        _value.business;
    }
    str.push(
      <div>
        FromItem index = {e.fromitem.index} value = {value}
      </div>
    );

    value = "";
    if (e.toitem.index > -1) {
      _value = e.toitem.value;
      value =
        _value.province +
        _value.city +
        _value.district +
        _value.street +
        _value.business;
    }
    str.push(
      <div>
        ToItem index = {e.toitem.index} value = {value}
      </div>
    );

    this.setState({ result: str });
  };

  componentDidMount() {
    //eslint-disable-next-line
    this.map = new BMap.Map("mapContainer"); // 创建Map实例
    //eslint-disable-next-line
    this.map.centerAndZoom(new BMap.Point(121.607769,31.207432), 15); // 初始化地图,设置中心点坐标和地图级别
    this.map.setCurrentCity("上海"); // 设置地图显示的城市 此项是必须设置的
//eslint-disable-next-line
    var ac = new BMap.Autocomplete({ input: "suggestId", location: this.map }); //建立一个自动完成的对象

    ac.addEventListener("onhighlight", this.handleHighlight);

    ac.addEventListener("onconfirm", this.handleConform);
  }

  render() {
    return (
      <div>
        <div id="r-result">
          <InputItem
              id="suggestId"
              clear
              placeholder="输入位置"
            ></InputItem>
        </div>
        {/* <h4>{address}</h4> */}
        {/* <div
          id="searchResultPanel"
          style={{
            border: "1px solid #C0C0C0",
            height: "100px",
            marginBottom: " 20px"
          }}
        >
          {this.state.result}
        </div> */}
        <div
          className="mapContainer"
          id="mapContainer"
          style={{ height: "500px", width: "100%" }}
        />
      </div>
    );
  }
}

export default Map;

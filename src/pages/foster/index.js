import { List } from "antd-mobile";
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Item = List.Item;

export default class Foster extends React.Component {
  state = {
    disabled: false
  };

  render() {
    return (
      <div className="container">
        <div className="foster">
          <div className="foster-img">
            <img src={require("../../assets/img/tree.jpg")} />
            <span>九华山金钱松</span>
          </div>
          <List className="my-list">
            <Item
              extra="99.00/棵"
              className="list-1"
              arrow="horizontal"
              onClick={() => {}}
            >
              单价
            </Item>
            <Item extra="1棵" arrow="horizontal" onClick={() => {}}>
              数量
            </Item>
            <Item extra="1年" arrow="horizontal" onClick={() => {}}>
              期限
            </Item>
            <Item extra="微信" arrow="horizontal" onClick={() => {}}>
              支付方式
            </Item>
          </List>
          <div className="foster-btn">
            <Link to="../certificate">确认支付</Link>
          </div>
        </div>
      </div>
    );
  }
}

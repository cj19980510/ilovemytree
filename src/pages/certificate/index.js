import React, { Component } from "react";
import "./index.scss";

export default class Certificate extends Component {
  render() {
    return (
      <div className="container certificate-box">
        <div className="certificate">
          <div className="title">
            <h4>特色树木认养证书</h4>
            <img
              className="star"
              src={require("../../assets/img/star.jpg")}
              alt=""
            />
            <span>证书编号：322456614</span>
          </div>
          <h3>亲爱的用户</h3>
          <div className="text">
            <p>
              您已成功认养位于<span>安徽省</span>的<span>金钱松</span>
              ，该树为国家
              <span>一级</span>保护树木，拥有<span>1400余年</span>历史。
            </p>
            <p>衷心感谢您为保护树木、传播生态文明作出的卓越贡献。</p>
          </div>
          <div className="coordinates">
            <span>
              <b>经度：</b>110.57880E
            </span>
            <span>
              <b>纬度：</b>40.967902N
            </span>
            <span>
              <b>认养周期：</b>1年
            </span>
            <span className="time">2019年12月12日</span>
          </div>
          <div className="divide">
            <div className="line"></div>
            <div className="divide-text">心系在树上，绿留在心中！</div>
            <div className="line"></div>
          </div>
          <div className="public">
            <div className="weixin">
              <img
                className="code"
                alt=""
                src={require("../../assets/img/code.jpg")}
              />
              <span>长按识别二维码</span>
            </div>
            <img
              className="logo"
              alt=""
              src={require("../../assets/img/logo.jpg")}
            />
          </div>
        </div>
      </div>
    );
  }
}

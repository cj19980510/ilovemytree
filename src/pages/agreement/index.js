import React, { Component } from "react";
import "./index.scss";
import BScroll from "better-scroll";
export default class Agreement extends Component {
  componentDidMount() {
    const bs = new BScroll(".container", {
      pullUpLoad: {
        threshold: 30
      }
    });
    bs.finishPullUp();
  }
  render() {
    return (
      <div className="container">
        <div className="agreement">
          <h1>池州市绿化委员会文件</h1>
          <h3>池绿委（2019）2号</h3>
          <div className="hr"></div>
          <h2>
            <span>
              关于印发《池州市古树名木与生态公益林 认养活动方案(试行)》的通知
            </span>
          </h2>
          <p className="agr-p1">
            江南产业集中区、九华山风景区、开发区、
            平天湖风景区管委会,各县(区)绿化委,市
            直各单位、驻池各单位,各新闻媒体:
          </p>
          <p className="agr-p2">
            为充分发挥我市生态资源优势,大胆探
            索“绿水青山就是金山银山“实现途径,推
            深做实林长制改革,破解生态保护与经济发
            展矛盾,推动绿色发展,促进生态保护,市
            绿化委研究决定开展池州市古树名木与生
            态公益林认养活动。现将《池州市古树名木
            与生态公益林认养活动方案(试行)》(以下
            简称《方案》)印发给你们,请认真贯彻执 行。
          </p>
          <p className="agr-p3">
            <span>一、统一思想认识。</span>开展古树名木与生
            态公益林认养活动,是深入贯彻习近平总书
            记“绿水青山就是金山银山“绿色发展理念
            的生动实践,是推深做实林长制改革的大胆。
          </p>
          <p className="agr-p3">
            <span>二、统一思想认识。</span>开展古树名木与生
            态公益林认养活动,是深入贯彻习近平总书
            记“绿水青山就是金山银山“绿色发展理念
            的生动实践,是推深做实林长制改革的大胆。
          </p>
        </div>
      </div>
    );
  }
}

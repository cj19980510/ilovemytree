import React, { Component } from "react";
import "./index.scss";
import Nav from "./Nav";
import { Route, Redirect } from "react-router-dom";
import Red from "./Red";
import Culture from "./Culture";

export default class AdoptTree extends Component {
  render() {
    return (
      <div className="container">
        {/* 导航 */}
        <Nav />
        {/* 路由展示区域 */}
        <Redirect from="/adopttree" to="/adopttree/Culture" exact />
        <Route path="/adopttree/Red" component={Red} />
        <Route path="/adopttree/Culture" component={Culture} />
      </div>
    );
  }
}

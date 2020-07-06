import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./footer.scss";
export default class Tabbar extends Component {
    render() {
        return (
            <footer>
                <ul>
                    <li><NavLink to="/home"><b className="fas fa-home" ></b><i>首页</i></NavLink></li>
                    <li><NavLink to="/oldtree"><b className="fas fa-seedling"></b><i>古树</i></NavLink></li>
                    <li><NavLink to="/adopttree/Culture"><b className="fas fa-praying-hands"></b><i>领养</i></NavLink></li>
                    <li><NavLink to="/mine"><b className="fas fa-user"></b><i>我的</i></NavLink></li>
                </ul>
            </footer>
        );
    }
}

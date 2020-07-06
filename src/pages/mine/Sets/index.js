import React, { Component } from 'react'
import './index.scss'
import { Route, Link } from 'react-router-dom'
export default class Sets extends Component {

    render () {
        return (
            <ul className="sets_box">
                <li>
                    <Link to="/mine/safety">
                        <b>账号与安全</b>
                        <i className="fas fa-angle-right"></i>
                    </Link>
                </li>
                <li>
                    <a>
                        <b>提现资料</b>
                        <i className="fas fa-angle-right"></i>
                    </a>
                </li>
                <li>
                    <a>
                        <b>交易密码</b>
                        <i className="fas fa-angle-right"></i>
                    </a>
                </li>
                <li>
                    <a>
                        <b>关于我们</b>
                        <i className="fas fa-angle-right"></i>
                    </a>
                </li>
                <li>
                    <a>
                        <b>平台协议</b>
                        <i className="fas fa-angle-right"></i>
                    </a>
                </li>
                <li>
                    <a>
                        <b>意见反馈</b>
                        <i className="fas fa-angle-right"></i>
                    </a>
                </li>
            </ul>
        )
    }
}

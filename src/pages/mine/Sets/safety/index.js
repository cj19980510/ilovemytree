import React, { Component } from 'react'
import './index.scss'
export default class Safety extends Component {
    render () {
        // const { user } = this.props
        return (
            <div className="safety_box">
                <div>
                    <p>当前登录方式</p>
                    <div>
                        <img src={[require('../../../../assets/images/phone.jpg')]} />
                        <p>
                            <b>手机号</b>
                            <span>18932437</span>
                        </p>
                    </div>
                </div>
                <p>其他登录方式</p>
                <ul>
                    <li>
                        <div>
                            <img src={[require('../../../../assets/images/weixin.jpg')]} />
                            <p>
                                <b>微信</b>
                            </p>
                        </div>
                        <span>
                            <b>
                                绑定
                            </b>
                            <i className="fas fa-angle-right"></i>
                        </span>
                    </li>
                    <li>
                        <div>
                            <img src={[require('../../../../assets/images/qq.jpg')]} />
                            <p>
                                <b>QQ</b>
                            </p>
                        </div>
                        <span>
                            <b>
                                绑定
                            </b>
                            <i className="fas fa-angle-right"></i>
                        </span>
                    </li>
                    <li>
                        <div>
                            <img src={[require('../../../../assets/images/weibo.jpg')]} />
                            <p>
                                <b>新浪</b>
                            </p>
                        </div>
                        <span>
                            <b>
                                绑定
                            </b>
                            <i className="fas fa-angle-right"></i>
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
}

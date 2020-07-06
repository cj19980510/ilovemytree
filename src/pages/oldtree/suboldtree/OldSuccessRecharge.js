import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class OldSuccessRecharge extends Component {
    render() {
        return (
            <div className="old-success-recharge-box">
                <div className="main">
                    <p><i className="fas fa-check-circle"></i></p>
                    <h5>充值成功</h5>
                    <h3>心系在树中，绿留在心中</h3>
                    {/* <h4>此次认养获得积分奖励</h4> */}
                </div>
                <div className="btn">
                    <Link to="/oldtree/suboldtree/myoldtree">返回我的古树名木主页</Link>
                    <p>您的支付就是我们最大的动力。</p>
                </div>
            </div>
        )
    }
}
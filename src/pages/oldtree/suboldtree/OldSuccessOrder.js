import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class OldSuccessOrder extends Component {
    render() {
        return (
            <div className="old-success-order-box">
                <div className="main">
                    <p><i className="fas fa-check-circle"></i></p>
                    <h5>支付成功</h5>
                    <h3>心系在树中，绿留在心中</h3>
                    <h4>此次认养获得积分奖励</h4>
                </div>
                <div className="btn">
                    <Link to="/oldtree/suboldtree/myoldtree">查看我的古树名木</Link>
                    <p>您领养的每一棵树都有唯一编号，可查看我的古树名木导航至树木所在地。</p>
                </div>
            </div>
        )
    }
}
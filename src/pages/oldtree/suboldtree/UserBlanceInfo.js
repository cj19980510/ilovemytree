import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserBlanceInfo, getUserBlance } from 'action'
import BScroll from 'better-scroll'


class UserBlanceInfo extends Component {
    componentDidMount() {
        const userId = localStorage.getItem('userId')
        const { getUserBlanceInfo, getUserBlance } = this.props

        getUserBlance(userId)
        getUserBlanceInfo(userId)

        const bs = new BScroll('.balance-info-box', {
            pullUpLoad: {
                threshold: 30
            }
        })

    }

    renderItem = () => {
        // console.log(userBlance)
        const { userBlanceInfo } = this.props
        let rmb = 0
        return userBlanceInfo.map(item => {
            // console.log(item.balanceMoney)
            if (item.balanceType == 2) {
                item.balanceMoney = -item.balanceMoney
            }
            return (
                <li key={item.balanceId}>
                    <div className="balance-left">
                        <h3>{item.balanceType == 1 && '平台充值' || '在线支付'}</h3>
                        <h4>余额：{(rmb += item.balanceMoney).toFixed(1)}</h4>
                    </div>
                    <div className="balance-right">
                        <h5>{item.balanceTime}</h5>
                        <p className={item.balanceType == 1 && 'recharge' || 'normal'}>{item.balanceType == 1 && '+' + item.balanceMoney || item.balanceMoney}</p>
                    </div>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="balance-info-box">
                <ul>
                    {this.renderItem()}
                    {/* <li>
                        <div className="balance-left">
                            <h3>平台充值</h3>
                            <h4>余额：580.00</h4>
                        </div>
                        <div className="balance-right">
                            <h5>2019-11-22</h5>
                            <p className="recharge">+100.00</p>
                        </div>
                    </li>
                    <li>
                        <div className="balance-left">
                            <h3>平台充值</h3>
                            <h4>余额：580.00</h4>
                        </div>
                        <div className="balance-right">
                            <h5>2019-11-22</h5>
                            <p className="normal">+100.00</p>
                        </div>
                    </li> */}
                </ul>
            </div>
        )
    }
}

export default connect(state => {
    return {
        userBlanceInfo: state.oldtreeReducer.userBlanceInfo,
        userBlance: state.oldtreeReducer.userBlance
    }
}, dispatch => bindActionCreators({ getUserBlanceInfo, getUserBlance }, dispatch)
)(UserBlanceInfo)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserEnergyInfo } from 'action'
import BScroll from 'better-scroll'
import { Toast } from 'antd-mobile'

class OldEnergyInfo extends Component {

    componentDidMount() {
        const { getUserEnergyInfo } = this.props
        getUserEnergyInfo(+localStorage.getItem('userId'))
        const bs = new BScroll('.old-energyinfo-box', {
            pullUpLoad: {
                threshold: 30
            }
        })

        // bs.on("pullingUp", () => {
        //     Toast.offline('我是有底线的 !!!', 1)
        //     bs.finishPullUp();

        // })
    }

    renderItem = () => {
        const { userEnergyInfo } = this.props
        return userEnergyInfo.map((item, index) => {
            let type_info = ''
            switch (item.type) {
                case 1:
                    type_info = '签到'
                    break;
                case 2:
                    type_info = '购买树'
                    break;
                case 3:
                    type_info = '别人查看心愿'
                    break;
                case -1:
                    type_info = '查看心愿'
                    break;
                case -2:
                    type_info = '许愿'
                    break;

                default:
                    break;
            }
            return (
                < li key={index}>
                    <div>
                        <h3> {type_info}</h3>
                        <h4>{item.createTime}</h4>
                    </div>
                    <p>{item.type > 0 && '+' + item.energyNum || '-' + item.energyNum}</p>
                </li >
            )
        })

    }

    render() {
        return (
            <div className="old-energyinfo-box">
                <ul>
                    {this.renderItem()}
                    {/* <li>
                        <div>
                            <h3>购买古树名木奖励</h3>
                            <h4>2019-06-11</h4>
                        </div>
                        <p>+5</p>
                    </li> */}
                </ul>
            </div>
        )
    }
}
export default connect(state => {
    return {
        userEnergyInfo: state.oldtreeReducer.userEnergyInfo,
        // oldtreeIds: state.oldtreeReducer.oldtreeIds
    }
}, dispatch => bindActionCreators({ getUserEnergyInfo }, dispatch)
)(OldEnergyInfo)

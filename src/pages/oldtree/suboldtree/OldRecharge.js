import React, { Component } from 'react'

import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRecharge } from 'action'

import { Modal } from 'antd-mobile';
const alert = Modal.alert;

// 通过自定义 moneyKeyboardWrapProps 修复虚拟键盘滚动穿透问题
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

class OldRecharge extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            type: 'money',
            rechargeNum: 0
        }
    }
    changeNum = (v) => {
        this.setState({
            rechargeNum: v
        })
        console.log(this.state.rechargeNum)
    }

    sureRecharge = () => {
        const { rechargeNum } = this.state
        const userId = localStorage.getItem('userId')
        if (rechargeNum) {
            const { getRecharge } = this.props
            // console.log(Number(userId), rechargeNum)
            getRecharge(Number(userId), rechargeNum)
            this.props.history.push('/oldtree/suboldtree/usersuccessrecharge')
        } else {
            const showAlert = () => {
                const alertInstance = alert('操作失败', '您没输入金额充值', [
                    { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
                    { text: '确定', onPress: () => console.log('ok') },
                ]);
                setTimeout(() => {
                    // 可以调用close方法以在外部close
                    console.log('auto close');
                    alertInstance.close();
                }, 500000);
            };
            showAlert()
        }
    }


    render() {
        const { type } = this.state;
        return (
            <div className="old-recharge-box">
                <div className="title">欢迎来到我爱我树充值</div>
                <List>
                    <InputItem
                        type={type}
                        placeholder="请输入想要充值的金额"
                        clear
                        onChange={(v) => { console.log('onChange', v); }}
                        onBlur={(v) => { this.changeNum(+v) }}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >充值 /元</InputItem>
                </List>
                <div className="btn"><button onClick={this.sureRecharge}>确认充值</button></div>
            </div>
        );
    }
}

const OldRechargeWrapper = createForm()(OldRecharge);
// export default OldRechargeWrapper

export default connect(state => {
    return {
        userRecharge: state.oldtreeReducer.userRecharge,
        // oldtreeIds: state.oldtreeReducer.oldtreeIds
    }
}, dispatch => bindActionCreators({ getRecharge }, dispatch)
)(OldRechargeWrapper)
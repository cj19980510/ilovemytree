import { List } from 'antd-mobile';
import React from 'react'
import 'style/foster.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { payTrees } from '../../../action'

import { Modal, Toast } from 'antd-mobile';

const alert = Modal.alert;
const Item = List.Item;
// const Brief = Item.Brief;
class Foster extends React.Component {
  state = {
    disabled: false,
  }
  // 下订单
  payTree = () => {
    const { treeId, userId, treeName, treeTypeId, orderAccount, orderTreenum } = this.props.location.state

    this.props.payTrees(
      treeId,
      userId,
      treeName,
      treeTypeId,
      orderAccount,
      orderTreenum
    )
  }
  // 提示框
  payResult = () =>
    alert('提示', (this.props.payTree && this.props.payTree == '余额不足，不可购买')
      && '余额不足，是否前往充值' || '购买成功，是否前往订单列表',
      [
        {
          text: '取消', onPress: () => {

          }
        },
        {
          text: '确定', onPress: () => {
            if (this.props.payTree == '余额不足，不可购买') {
              this.props.history.push('/oldtree/suboldtree/userrecharge')
            }
            if (this.props.payTree == '响应成功') {
              this.props.history.push('/home/subhome/orderForm')
            }
          }
        },
      ])
  // 提交订单
  pay = () => {
    this.payTree()
    Toast.loading('正在支付', 0, false)
    setTimeout(() => {
      this.payResult()
      Toast.hide()
    }, 1000);

  }
  render() {

    const { treeName, img, orderAccount } = this.props.location.state
    return (
      <div className="container">
        <div className="foster">
          <div className="foster-img"><img src={"http://116.62.38.0:8888/" + img} /><span>{treeName}</span></div>
          <List className="my-list">
            <Item extra={orderAccount + "/棵"} className="list-1" arrow="horizontal" onClick={() => { }}>单价</Item>
            <Item extra="1棵" arrow="horizontal" onClick={() => { }}>数量</Item>
            <Item extra="1年" arrow="horizontal" onClick={() => { }}>期限</Item>
            <Item extra="微信" arrow="horizontal" onClick={() => { }}>支付方式</Item>
          </List>

          <div className="foster-btn">

            <button onClick={this.pay}>确认支付</button>

          </div>
        </div>

      </div>
    );
  }
}

export default connect(
  state => state.homeReducer,
  dispatch => bindActionCreators({ payTrees }, dispatch)
)(Foster)
import { List } from 'antd-mobile';
import React from 'react'
import { Link } from 'react-router-dom'
import { Picker } from 'antd-mobile';
import { Modal, Button, WingBlank, WhiteSpace, Toast } from 'antd-mobile';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { oldSureFoster } from 'action'
const prompt = Modal.prompt;
const Item = List.Item;


const alert = Modal.alert;

class OldSureFoster extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            treeNum: 1
        }
    }

    changeTreeNum = (val) => {
        this.setState({
            treeNum: val
        })
    }

    surePay = () => {
        const { oldSureFoster } = this.props
        const { treeId, userId, treeName, treeTypeId, treePrice } = this.props.location.state
        const { treeNum } = this.state
        let orderAccount = treeNum * treePrice
        oldSureFoster(treeId, Number(userId), treeName, treeTypeId, orderAccount, treeNum)
        Toast.loading('正在加载')
        setTimeout(() => {
            Toast.hide()
            const { treeSureOrderData } = this.props
            if (treeSureOrderData == "余额不足，不可购买") {
                const showAlert = () => {
                    const alertInstance = alert('操作失败', '余额不足，是否前往充值', [
                        { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
                        { text: '确定', onPress: () => this.props.history.push('/oldtree/suboldtree/userrecharge') },
                    ]);
                    setTimeout(() => {
                        console.log('auto close');
                        alertInstance.close();
                    }, 500000);
                };
                showAlert()
            } else {
                this.props.history.push('/oldtree/suboldtree/oldsuccessorder')
            }
        }, 500);

    }



    render() {
        const { treeDetailImg, treeName, treeAge, treePublisher, treePrice } = this.props.location.state
        return (
            <div className="old-surefoster">
                <div className="old-surefoster-main">
                    <div className="foster-img">
                        <img src={treeDetailImg} />
                        <div>
                            <div className="info">
                                <h3>{treeName}</h3>
                                <h4>{treeAge}年</h4>
                                <h4>{treePublisher}</h4>
                            </div>
                            <p>{treePrice}元/年</p>
                        </div>

                    </div>
                    <List className="my-list">
                        <Item extra={treePrice + '/棵'} className="list-1" arrow="horizontal" onClick={() => { }}>单价</Item>
                        <Item arrow="horizontal" >
                            <Button onClick={() => prompt('欢迎收养古树名木', '请输入你想收养的数量', [
                                { text: 'Cancel' },
                                { text: 'Submit', onPress: value => this.changeTreeNum(value) },
                            ], 'default', this.state.treeNum)}
                            >数量</Button>
                            <span className="num">{this.state.treeNum}棵</span>
                        </Item>

                        <Item extra="1年" arrow="horizontal" onClick={() => { }}>期限</Item>
                        <Item extra="微信" arrow="horizontal" className="list-4" onClick={() => { }}>支付方式</Item>
                    </List>
                </div>
                {/* to="/oldtree/suboldtree/oldsuccessorder"  */}
                <div className="foster-btn"><button onClick={this.surePay}>确认支付</button></div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        treeSureOrderData: state.oldtreeReducer.treeSureOrderData,
    }
}, dispatch => bindActionCreators({ oldSureFoster }, dispatch)
)(OldSureFoster)


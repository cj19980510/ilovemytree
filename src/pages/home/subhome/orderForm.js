import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userTreesForm } from '../../../action'
import 'style/orderForm.scss'
import { Tabs, Badge } from 'antd-mobile';
const tabs = [
    { title: <Badge>我的树木</Badge> },
    { title: <Badge >认养记录</Badge> },

];
class OrderForm extends Component {

    componentDidMount() {
        const userId = 50
        const treeTypeId = 3
        this.props.userTreesForm(userId, treeTypeId)
    }
    gotoMap = () => {
        this.props.history.push('/home/subhome/map')
    }
    renderItem = () => {
        return this.props.userTreesOrder.map(item => {
            return <li key={item.orderId}>
                <p className="p1">{item.treeName}</p>
                <p className="p2">{item.orderCode}</p>
                <p className="p2">{item.orderEndtime}</p>
                <p className="p3"><span onClick={this.gotoMap}>导航</span></p>
            </li>
        })
    }
    render() {
        const userId = localStorage.getItem('userId');
        const userimg = JSON.parse(localStorage.getItem('user')).userImage;
        console.log(userimg)
        console.log('http://116.62.38.0:8888/' + userimg)
        return (
            <div className="order-content">
                <div className="form-title">
                    <img src={'http://116.62.38.0:8888/' + userimg} style={{ width: '0.5rem', height: '0.5rem' }} />
                    <div >
                        <p>{userId}</p>
                        <p>已累计认养{this.props.userTreesOrder.length}棵，消耗碳{20 * this.props.userTreesOrder.length}吨</p>
                    </div>
                </div>

                <Tabs tabs={tabs}

                    initialPage={'t1'}
                    activeKey={this.defaultActiveKey}


                // onChange={(tab, index) => { console.log('onChange', index, tab); }}
                // onTabClick={(tab, index) => {console.log(this); }}
                >
                    <div aria-selected="true">
                        <ul style={{
                            height: '4rem',
                            overflow: 'auto'
                        }}>
                            <li className="first-li">
                                <p>树名</p>
                                <p>编号</p>

                                <p>到期日期</p>
                                <p>导航</p>
                            </li>
                            {/* 渲染订单列表*/}
                            {this.props.userTreesOrder && this.renderItem()}
                        </ul>
                    </div>
                    <div style={{
                        height: '4rem',
                        overflow: 'auto'
                    }}>

                    </div>
                    {/* 选项卡组件 */}
                </Tabs>

            </div>
        )
    }
}
export default connect(
    state => state.homeReducer,
    dispatch => bindActionCreators({ userTreesForm }, dispatch)
)(OrderForm)

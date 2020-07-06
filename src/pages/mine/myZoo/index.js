import React, { Component, Fragment } from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMyZoo } from '../../../action/mine/index'
import { Route, NavLink } from 'react-router-dom'
let num = null;
class MyZoo extends Component {
    componentWillReceiveProps () {

    }
    componentDidMount () {
        this.props.getMyZoo(localStorage.getItem('userId'), 1)
    }
    renderItemss = () => {
        const { tree } = this.props
        return tree.myTreeList.map((item) => {
            return (
                <tr key={item.orderId}>
                    <td>{item.treeName}</td>
                    <td>{item.orderCode}</td>
                    <td>{item.orderEndtime}</td>
                    <td><a>导航</a></td>
                </tr>
            )
        })
    }
    renderItem = () => {
        const users = JSON.parse(localStorage.getItem('user'))
        const { tree } = this.props
        if (tree) {
            const num = tree.myTreeList.length
            return (
                <div className="zoo_box">
                    <div>
                        <img src={'http://116.62.38.0:8888/' + users.userImage} />
                        <div>
                            <b>我爱我树</b>
                            <p>已累计认养
                                <i>{num}</i>
                                棵，消耗碳
                                    <span>{num * 7}</span>
                                吨
                                </p>
                        </div>
                    </div>
                    <p className="p1">
                        <a href="" className="active">我的树木</a>
                        <a href="">认样记录</a>
                    </p>
                    <table className="table">
                        <thead>
                            <tr>
                                <td>树名</td>
                                <td>编号</td>
                                <td>到期日期</td>
                                <td>导航</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderItemss()}
                        </tbody>
                    </table>
                </div>
            )


        }
        else {
            return;
        }
        return (
            <div className="zoo_box">
                <div>
                    <img src={'http://116.62.38.0:8888/' + users.userImage} />
                    <div>
                        <b>我爱我树</b>
                        <p>已累计认养
        <i></i>
                            棵，消耗
                            <span></span>
                            吨
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    render () {
        return (
            <Fragment>
                {this.renderItem()}
            </Fragment>
        )
    }
}
export default connect(
    state => state.mineReducer,
    dispatch => bindActionCreators({ getMyZoo }, dispatch)
)(MyZoo)
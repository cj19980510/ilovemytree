import React, { Component } from 'react'
import './index.scss'
import { Route, Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { getUserMsg } from '../../../action/index'
class MyList extends Component {

    renderItem = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        // console.log(users)
        // const { user } = this.props
        if (user) {
            return (
                <div className="myList_top">
                    <Link to="/mine/user" onClick={this.getUser}>
                        <b>
                            <img src={'http://116.62.38.0:8888/' + user.userImage} />
                            <span>{user.userName}</span>
                        </b>
                        <i className="fas fa-angle-right"></i>
                    </Link>
                </div>
            )
        } else {
            return;
        }

    }
    render() {
        const { user } = this.props
        return (
            <div className="myList">
                {this.renderItem()}
                <ul className="myList_body">
                    <li>
                        <Link to="/home/subhome/orderForm">
                            <b>
                                <i className="fas fa-tree"></i>
                                <span>我的生态公益林</span>
                            </b>
                            <i className="fas fa-angle-right"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/oldtree/suboldtree/myoldtree">
                            <b>
                                <i className="fas fa-tree"></i>
                                <span>我的古树名木</span>
                            </b>
                            <i className="fas fa-angle-right"></i>
                        </Link>
                    </li><li>
                        <Link to="/oldtree/suboldtree/userbalance">
                            <b>
                                <i className="fas fa-donate"></i>
                                <span>余额</span>
                            </b>
                            <i className="fas fa-angle-right"></i>
                        </Link>
                    </li><li>
                        <Link to="/oldtree/suboldtree/energy">
                            <b>
                                <i className="fas fa-coins"></i>
                                <span>能量</span>
                            </b>
                            <i className="fas fa-angle-right"></i>
                        </Link>
                    </li><li>
                        <Link to="/mine/sets">
                            <b>
                                <i className="fas fa-cog"></i>
                                <span>设置</span>
                            </b>
                            <i className="fas fa-angle-right"></i>
                        </Link>
                    </li><li>
                        <Link to="/mine/service">
                            <b>
                                <i className="fas fa-headset"></i>
                                <span>在线客服</span>
                            </b>
                            <i className="fas fa-angle-right"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
// export default connect(
//     state => {
//         return {
//             user: state.getIn(['mineReducer', 'user']),
//         }
//     },
//     dispatch => bindActionCreators({ getUserMsg }, dispatch)
// )(MyList)
export default MyList

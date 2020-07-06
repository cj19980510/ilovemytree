import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { DatePicker, List } from 'antd-mobile';
import axios from 'axios';
import './index.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserImg } from '../../../action/mine/index'
const path = require('path')
class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // filePhoto: this.props.baby.photo_url || null,
        }
    }

    outLogin = () => {
        const btn = document.querySelector('.out_login')
        console.log(btn)
        localStorage.removeItem('token')
        window.location.reload()
    }
    changeImg = () => {
        const { getUserImg } = this.props
        const file = document.querySelector('.file').files[0]
        console.log(file)
        getUserImg(file)
        // if (window.FileReader) {
        //     var reader = new FileReader();
        //     reader.readAsDataURL(file);
        //     //监听文件读取结束后事件    
        //     reader.onloadend = function (e) {
        //         // getUserImg(e.target)
        //         // document.querySelector('.img').src = e.target.result    //e.target.result就是最后的路径地址
        //     };
        // }

    }
    renderItem = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        var sex = null
        if (user) {
            if (user.userSex == '1') {
                sex = "男"
            }
            else if (user.userSex == '2') {
                sex = "女"
            } else {
                sex = "保密"
            }
            const now = new Date(user.userCreatetime);
            return (
                <Fragment>
                    <div className="mine_message">
                        <div>
                            <span>头像</span>
                            <b>
                                <form>
                                    <input type="file" className="file" onChange={this.changeImg} />
                                </form>
                                <img src={'http://116.62.38.0:8888/' + user.userImage} className="img" />
                                <i className="fas fa-angle-right"></i>
                            </b>
                        </div>
                        <ul>
                            <li>
                                <span>ID</span>
                                <b>
                                    <b>{user.userId}</b>
                                </b>
                            </li>
                            <li>
                                <span>昵称</span>
                                <b>
                                    <b>{user.userName}</b>
                                    <i className="fas fa-angle-right"></i>
                                </b>
                            </li>
                            <li>
                                <span>手机号</span>
                                <b>
                                    <b>{user.userPhone}</b>
                                    <i className="fas fa-angle-right"></i>
                                </b>
                            </li>
                            <li>
                                <span>实名认证</span>
                                <b>
                                    <b>去认证</b>
                                    <i className="fas fa-angle-right"></i>
                                </b>
                            </li>
                            <li>
                                <span>性别</span>
                                <b>
                                    <b>{sex}</b>
                                    <i className="fas fa-angle-right"></i>
                                </b>
                            </li>
                        </ul>
                    </div >

                    <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
                        <DatePicker
                            mode="date"
                            title="Select Date"
                            extra="Optional"
                            value={now}
                            onChange={date => this.setState({ date })}
                        >
                            <List.Item arrow="horizontal">生日</List.Item>
                        </DatePicker>
                    </List>
                    <div className="mine_sex">
                        <span>收货地址</span>
                        <i className="fas fa-angle-right"></i>
                    </div>
                    <button className="out_login" onClick={this.outLogin}>退出登录</button>
                </Fragment>
            )
        }
        else {
            return;
        }
    }
    render () {
        return (
            <div>
                {this.renderItem()}
            </div>
        )
    }
}
export default connect(
    state => state.mineReducer,

    dispatch => bindActionCreators({ getUserImg }, dispatch)
)(User)

import React, { Component } from 'react'
import './index.scss'
import { Toast } from 'antd-mobile';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMineMsg, getMineLogin } from '../../../action/mine/index'

var timer = null;
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobile: null,
            data: null
        }
    }
    getMsg = () => {
        var num = 60;
        const mobile = document.querySelector('.mobile').value
        if ((/^1[3456789]\d{9}$/.test(mobile))) {
            this.setState({
                mobile: mobile
            })
            Toast.info('验证码已发送，请在手机查看！', 2);
            this.props.getMineMsg(mobile);
            timer = setInterval(function () {
                num--;
                document.querySelector('.login_msg').innerHTML = num + 's'
                document.querySelector('.login_msg').style.pointerEvents = 'none'
                if (num == 0) {
                    clearInterval(timer);
                    document.querySelector('.login_msg').innerHTML = '获得验证码'
                    document.querySelector('.login_msg').style.pointerEvents = 'auto'
                }
            }, 1000)
        } else {
            Toast.info('请输入正确的手机号码', 2);
        }
    }
    getLogin = () => {
        // const mobiles = 15702436905
        // const msgs = 7617
        // this.props.getMineLogin(mobiles, msgs)

        const { mobile } = this.state
        const msg = document.querySelector('.msg').value
        if ((/^\d{4}$/.test(msg))) {
            this.props.getMineLogin(mobile, msg)
            setTimeout(() => {
                if (this.props.data.success) {
                    // setTimeout(() => {
                        this.props.history.push('/mine/mylist')
                    // }, 1000);
                }
                else {
                    Toast.info('用户名或验证码错误', 2);
                }
            }, 1000);
        } else {
            Toast.info('请输入正确的验证码', 2);
        }
        clearInterval(timer);
    }

    render () {
        return (
            <div className="content">
                <h3>登录/注册</h3>
                <p>欢迎来到我爱我树</p>
                <form>
                    <p>
                        <i className="fas fa-mobile-alt"></i>
                        <input type="number" placeholder="输入手机号" className="mobile" />
                    </p>
                    <p>
                        <i className="fas fa-unlock-alt"></i>
                        <input className="msg" type="number" placeholder="输入验证码" />
                        <button onClick={this.getMsg} className="login_msg" type="button">获取验证码</button>
                    </p>
                    <div>
                        <i className="fas fa-check-circle"></i>
                        <span>确定即代表您同意<a href="">《用户注册协议》</a></span>
                    </div>
                    <div><button onClick={this.getLogin} className='login_btn' type="button">确定</button></div>
                </form>
                <div>
                    <p>第三方登录</p>
                    <ul>
                        <li>
                            <a href="">
                                <img src={[require('../../../assets/images/weixin.jpg')]} />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={[require('../../../assets/images/qq.jpg')]} />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={[require('../../../assets/images/weibo.jpg')]} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(
    state=>state.mineReducer,
    dispatch => bindActionCreators({ getMineMsg, getMineLogin }, dispatch)
)(Login)

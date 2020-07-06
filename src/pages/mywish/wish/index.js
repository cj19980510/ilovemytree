import React, { Component } from 'react'
import './wish.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { toWish } from '../../../action/wish/towish'
import { bindActionCreators } from 'redux'
class Wish extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nengliang: 4,
            ablewish: true,
            wishbgGround: {
                display: 'block',
                height: '100%',
                width: '100%',
                background: `url(${require("../img/wishbg.png")}) no-repeat`,
                backgroundSize: `3.75rem 3.11rem`
            },
            savewish: false
        }
    }
    componentDidMount() {
        // const { search } = this.props.location.search
        // console.log(typeof )
        if (this.props.location.search === '?f=true') {
            this.setState({
                savewish: true
            })
        }
    }
    componentWillReceiveProps(nextProps) {

    }

    wish = () => {
        if (this.state.nengliang / 2 >= 1) {
            if (this.state.nengliang / 2 == 1)
                this.setState({
                    ablewish: false
                })
            this.setState({
                nengliang: this.state.nengliang - 2
            })
        }
        else
            this.setState({
                ablewish: false
            })
        let userId = localStorage.getItem('userId')
        this.props.toWish(userId)
    }
    closesavemask = () => {
        this.setState({
            savewish: false
        })
    }

    goback = () => {
        // this.props.history
        // console.log(this.props.history)
        this.props.history.goBack()
    }
    render() {
        return (
            <div className="wish-page">
                <div className="xuyuanimg" style={this.state.wishbgGround}>
                    <div className="wish-head">
                        <h2>
                            <span className="fas fa-angle-left" onClick={this.goback}></span>
                            <b>许愿</b>
                            <Link to="/mywishes">我的心愿</Link>
                        </h2>
                    </div>
                </div>
                <div>
                    {this.state.ablewish && <Link className="wish-btn" onClick={this.wish} to="/wishdetail"><img src={require('../img/wishbutton.png')} /></Link> || <div className="wish-btn"><img src={require('../img/cantwishbtn.png')} /></div>}
                </div>
                <div className="xuyuantimes" ><span>剩下许愿次数</span><b>{this.state.nengliang / 2}</b></div>
                <div className="wihs-rgl">
                    <h2>许愿规则</h2>
                    <p>1.用户注册享有1次免费许愿的机会。</p>
                    <p>2.每次许愿消耗2能量，每日最多许愿3次。</p>
                    <p>3.愿望可设置公开，赠送能量、赠送金额可见，院量与金额将放于个人账户。</p>
                    <p>4账户余鹭可以提现至支付室与银行卡，平台收取2%的手续费。</p>
                </div>
                {this.state.savewish && <div className="savemask">
                    <div className="closesavemask">
                        <div className="close-btn" onClick={this.closesavemask} >确定</div>
                    </div>
                </div>}
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    return {
        state: state.towishReducer
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ toWish }, dispatch)




export default connect(mapStateToProps, mapDispatchToProps)(Wish)


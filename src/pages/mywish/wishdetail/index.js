import React, { Component } from 'react'
import './wishdetail.scss'
import { connect } from 'react-redux'
import { detailWish } from '../../../action/wish/postwish'
import { bindActionCreators } from 'redux'
class Wishdetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bgGround: {
                display: 'block',
                height: '100%',
                width: '100%',
                background: `url(${require("../img/wishbackground.png")})`
            },
            mywishbg: {
                backgroundImage: `url(${require("../img/mywish.png")})`,
                height: '50%',
                width: '50%',
                backgroundSize: `3.2rem 2rem`
            },
            wordnums: 0,
            wishtype: { 0: { ischeck: true }, 1: { ischeck: false }, 2: { ischeck: false } },
            wishContent: '',
            price: '',
            // userId: '',
            type: 0,
            savewish: null
        }
    }
    ccltprice = (e) => {


        this.setState({
            price: e.target.value,
        })
    }
    changtp = (type) => {
        this.setState({
            price: ""
        })
        type = +type
        let wishtypes = this.state.wishtype
        for (var i in wishtypes) {
            if (i == type)
                wishtypes[i].ischeck = true
            else
                wishtypes[i].ischeck = false
        }
        this.setState({
            wishtype: wishtypes,
            type: type
        })

    }
    ccltwordnum = (e) => {
        let count = e.target.value.length
        if (count <= 90 && e.keyCode != 13) {
            // console.log(e.keyCode)
            this.setState({
                wordnums: e.target.value.length
            })
        }
        else {
            e.target.value = e.target.value.slice(0, 90)
        }
        this.setState({
            wishContent: e.target.value
        })

    }
    subwish = () => {
        const { price, type, wishContent } = this.state
        let params = {
            wishContent: wishContent,
            type: type,
            userId: +localStorage.getItem('userId')
        };
        if (type == 0) {
            if (wishContent != "") {
                // console.log('可以提交', params)
            }
            else {
                // console.log("内容为空")
                return
            }
        }
        else {
            if (price != "" && wishContent != "") {
                params.price = price
                // console.log(params)
            }
            else {
                // console.log('内容和价格不能为空')
                return
            }
        }
        // this.setState({
        //     savewish: true
        // })
        this.props.detailWish(params)
        // console.log(this.props)
        this.props.history.push({
            pathname: '/wish',
            search: 'f=true'
        })

    }

    goback = () => {
        // this.props.history
        // console.log(this.props.history)
        this.props.history.goBack()
    }
    render() {

        return (
            <div className="wishdetail" style={this.state.bgGround}>
                <div className="willdtltop">
                    <h2>
                        <span className="fas fa-angle-left" onClick={this.goback}></span>
                        <b>许愿</b>
                    </h2>
                </div>
                <div className="mywishtitle">
                    <img src={require('../img/label.png')} />
                    <b>许下我的愿望</b>
                </div>
                <div className="mywishdetail" style={this.state.mywishbg}>
                    <textarea className="wish-content" onKeyUp={this.ccltwordnum} >
                    </textarea>
                    <p>{this.state.wordnums}/90</p>
                </div>
                <div className="mywishtitle pwset">
                    <img src={require('../img/label.png')} />
                    <b>权限设置</b>
                </div>
                <div className="wish-type-select">
                    {this.state.wishtype[0].ischeck && <span className="checkedtype"><i className="fas fa-check"></i></span> || <b className="unchecked" onClick={() => { this.changtp(0) }}></b>}<i>公开</i>
                    {this.state.wishtype[1].ischeck && <span className="checkedtype"><i className="fas fa-check"></i></span> || <b className="unchecked" onClick={() => { this.changtp(1) }}></b>}<i>付费可见</i>
                    {this.state.wishtype[2].ischeck && <span className="checkedtype"><i className="fas fa-check"></i></span> || <b className="unchecked" onClick={() => { this.changtp(2) }}></b>}<i>送能量可见</i>
                </div>
                <div className="wishtype-dec">
                    {this.state.wishtype[0].ischeck && <span>完成后所有人都能看到愿望</span>}
                    {this.state.wishtype[1].ischeck && (<div>
                        <span>分享后好友需要付费才能看到愿望,支付的金额会返还到你的余额</span>
                        <div className="pay money">
                            <label>￥:</label><input type="text" placeholder="请输入金额" onKeyUp={this.ccltprice} />
                        </div>
                    </div>)}
                    {this.state.wishtype[2].ischeck && (<div>
                        <span>好友支付设置的能量后才能查看你的愿望</span>
                        <div className="pay nl">
                            <label>能量数额:</label><input type="text" placeholder="" onKeyUp={this.ccltprice} />
                        </div>
                    </div>)}
                </div>
                <div className="wishdetailsfoot">
                    <div className="sub-btn">
                        <img src={require('../img/confirm.png')} onClick={this.subwish} />
                    </div>
                </div>

            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        state: state.detailwishReducer
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ detailWish }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Wishdetail)

import React, { Component } from 'react'
import 'style/renyang.scss'
import Radio from '../framework/radio'
import { Toast } from 'antd-mobile';

import qs from 'querystring'
import BScroll from 'better-scroll'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getHomeTreesDetail } from '../../../action'
class Renyang extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checkFlag: ''
        }
    }
    componentWillMount() {
        Toast.loading('loading', 1, false)
    }
    componentDidMount() {
        const bs = new BScroll('.container', {
            pullUpLoad: {
                threshold: 30
            }
        })
        bs.finishPullUp()
        const { search } = this.props.location
        const { id } = qs.parse(search.slice(1))
        // 请求树的详情页
        this.props.getHomeTreesDetail(id)

    }

    toFoster = () => {
        const arr0 = this.props.treesDetail[0]
        if (this.state.checkFlag) {
            this.props.history.push(
                '/home/subhome/foster',
                {
                    treeId: arr0.treeId,
                    treeName: arr0.treeName,
                    img: arr0.treeThumbnail,
                    orderAccount: arr0.treePrice,
                    treeTypeId: arr0.treeTypeId,
                    orderTreenum: 1,
                    userId: localStorage.getItem('userId'),
                }
            )
        }
    }
    toAgreement() {
        this.props.history.push('/home/subhome/agreement')
    }
    checkFlag = (val) => {
        this.setState({
            checkFlag: val
        })
    }
    render() {
        const arr0 = this.props.treesDetail[0]
        const arr1 = this.props.treesDetail[1]

        return (
            <div className="ry">
                <div className="ry-img">
                    <div className="ry-pic"><img src={"http://116.62.38.0:8888/" + arr0.treeThumbnail} /></div>
                    <div className="ry-name"><span>{arr0.treeName}</span><span>8888/年</span></div>
                </div>
                <div className="ry-title">
                    <h2>树木简介</h2>
                    <p style={{ textAlign: 'justify', textJustify: 'inter-ideograph' }}>{arr1.treeDetailDesc}</p>

                    <div style={{ padding: '0.2rem' }}>---树木详情---</div>
                    <img src={"http://116.62.38.0:8888/" + arr1.treeDetailImg} style={{ width: '3.35rem' }} />
                </div>
                <p className="ry-read">
                    <Radio checkFlag={this.checkFlag} />
                    {/* 跳转到协议页 */}
                    <button onClick={this.toAgreement.bind(this)} className="read">《生态认养协议》</button>
                </p>
                <div className="ry-foot">
                    <div><i class="fa fa-headset" aria-hidden="true"></i><span>客服</span></div>
                    {/* 跳转到支付订单页 */}
                    <button onClick={this.toFoster.bind(this)} className="ry-btn">我要认养</button>
                </div>
            </div>
        )
    }
}
export default connect(
    state => state.homeReducer,
    dispatch => bindActionCreators({ getHomeTreesDetail }, dispatch)
)(Renyang)
import React, { Component } from 'react'
import OldRadio from './OldRadio'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getOldDetail } from 'action'
const qs = require('querystring')

class OldFoster extends Component {
    constructor(props) {
        super(props)

        this.state = {
            radioFlag: false
        }
    }
    componentDidMount() {
        const { getOldDetail } = this.props
        const { search } = this.props.location
        const { treeId } = qs.parse(search.slice(1))
        getOldDetail(treeId)
    }

    changeRadioFlag = val => {
        this.setState({
            radioFlag: val
        })
    }

    shouldFoster = () => {
        const { radioFlag } = this.state
        const { oldDetail } = this.props
        if (radioFlag) {
            this.props.history.push({
                pathname: '/oldtree/suboldtree/oldsurefoster',
                state: {
                    treeId: oldDetail[0]["treeId"],
                    userId: localStorage.getItem('userId'),
                    treeName: oldDetail[0]["treeName"],
                    treeTypeId: oldDetail[0]["treeTypeId"],
                    treePrice: oldDetail[0]['treePrice'],
                    treeAge: oldDetail[0]['treeAge'],
                    treeDetailImg: "http://116.62.38.0:8888/" + oldDetail[1]['treeDetailImg'],
                    treePublisher: oldDetail[0]['treePublisher']
                }
            })

        } else {

        }
    }

    render() {
        const { oldDetail } = this.props
        return (
            <div className="old-foster-box">
                <div className="old-foster-top" >
                    <img src={"http://116.62.38.0:8888/" + oldDetail[1]['treeDetailImg']} />
                    <div className="ry-info">
                        <div>
                            <span>{oldDetail[0]['treeName']}</span>
                            <b>{oldDetail[0]['treePrice']} 元/年</b>
                        </div>
                        <h4>树龄：{oldDetail[0]['treeAge']}余年</h4>
                        <h5>{oldDetail[0]['treePublisher']}</h5>
                    </div>
                </div>
                <div className="ry-title">
                    <h2>树木简介</h2>
                    <p >{oldDetail[1]['treeDetailDesc']} </p>
                </div>
                <h3>----树木详情----</h3>
                <div className="old-foster-bot">
                    <p className="ry-read"><OldRadio changeRadioFlag={this.changeRadioFlag} /><Link to="/oldtree/suboldtree/oldagreement" className="read">《生态认养协议》</Link></p>
                    <div className="ry-foot">
                        <div>
                            {/* <a href="http://wpa.qq.com/msgrd?v=3&uin=364543777&site=qq&menu=yes">客服</a> */}
                            {/* <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=364543777&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:364543777:41" alt="点击这里给我发消息" title="点击这里给我发消息" /></a> */}
                            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=364543777&site=qq&menu=yes"><i class="fa fa-headset" aria-hidden="true"></i><span>客服</span></a>
                        </div>
                        <button className="ry-btn" onClick={this.shouldFoster}>我要认养</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default connect(state => {
    return {
        oldDetail: state.oldtreeReducer.oldDetail,
    }
}, dispatch => bindActionCreators({ getOldDetail }, dispatch)
)(OldFoster)

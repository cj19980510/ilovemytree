import React, { Component } from 'react'
import HomeSlider from './framework/homeSlider'
import AreaComp from './framework/areaComp'
import 'style/home.scss'
import { Link } from 'react-router-dom'
import BScroll from 'better-scroll'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getHomeTrees } from '../../action'
class FirstHome extends Component {

    componentDidMount() {
        const bs = new BScroll('.homeMain1', {
            pullUpLoad: {
                threshold: 30
            }
        })
        // bs.on('pullingUp',()=>{
        //     console.log('1')
        // })
        bs.finishPullUp()
        this.props.getHomeTrees()

    }
    renderItem = () => {
        return this.props.trees.map(item => {
            return <li key={item.treeId}>
                <Link to={{
                    pathname: `/home/subhome/renyang`,
                    search: `id=${item.treeId}`

                }}>
                    <img src={"http://116.62.38.0:8888/" + item.treeThumbnail} alt="" />
                    <div className="list-right">
                        <div className="list-title">
                            <p>{item.treeName}</p>
                        </div>
                        <div className="list-info">
                            <div className="list-text">
                                <p>树的年龄{item.treeAge}</p>
                                <p>{item.treePrice}元/棵</p>
                            </div>
                            <div className="btn-foster"><button className="btn"> 我要认养</button></div>
                        </div>
                    </div>
                </Link>
            </li>
        })
    }
    render() {
        return (
            <div className="home-box">
                <HomeSlider />

                <div className="old-main">
                    <div className="old-title">
                        <h3>生态林认养</h3>
                        <p><Link to="/home/subhome/introduce">项目介绍 ></Link></p>
                    </div>
                    <div className="menu-btn-area">
                        {/* 区域组件 */}
                        <p><AreaComp /></p>
                    </div>
                    <div className="home-hr"></div>
                    <div className="homeMain1">
                        <ul className="homeMain">

                            {this.props.trees && this.renderItem()}
                        </ul>
                    </div>
                </div>
                <ul className="homeAside">
                    <li><a href="javaScript:"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i><span>转赠</span></a></li>
                    <li><a href="javaScript:"><Link class="fa fa-leaf" aria-hidden="true" to="/mywish"></Link><span>许愿树</span></a></li>
                </ul>

            </div>
        )
    }
}
export default connect(
    state => state.homeReducer,
    dispatch => bindActionCreators({ getHomeTrees }, dispatch)
)(FirstHome)
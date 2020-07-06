import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import OldBanner from './OldBanner'
import OldArea from './OldArea'
import './index.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getOldTree } from 'action'
import BScroll from 'better-scroll'
import { Toast } from 'antd-mobile'
import _ from 'loadsh'
class Oldtree extends Component {
    constructor(props) {
        super(props)

        this.state = {
            oldtree: 0
        }
    }

    componentDidMount() {
        console.log(this.props)
        const { getOldTree } = this.props
        getOldTree()
        const bs = new BScroll(".oldtreeList", {
            pullUpLoad: {
                threshold: 30
            }
        });

        // function loadingToast() {  //loding
        //     Toast.loading('Loading...', 1, () => {
        //         // console.log('Load complete !!!');
        //     });
        // }

        // function offline() {
        //     Toast.offline('我是有底线的 !!!', 1);
        // }

        // setTimeout(() => {
        //     const { oldtreeIds } = this.props
        //     const bs = new BScroll(".oldtreeList", {
        //         pullUpLoad: {
        //             threshold: 30
        //         }
        //     });
        //     let count = 0;
        //     bs.on("pullingUp", () => {
        //         const oldtreeId = oldtreeIds.slice(5);
        //         const ids = _.chunk(oldtreeId, 5);
        //         if (count == ids.length) {
        //             offline()
        //             bs.finishPullUp();
        //             return;
        //         }
        //         if (count < ids.length) {
        //             this.setState({ oldtree: 1 })//使状态改变从而使得render再次渲染
        //             loadingToast()
        //             getMoreOldTree(ids[count].join(","));
        //         }
        //         bs.finishPullUp();
        //         count++;
        //     });
        // }, 1000)
    }
    renderItem = () => {
        const { oldtree } = this.props
        return oldtree.map((item, index) => {
            return (
                <li key={index}>
                    <Link to={{
                        pathname: '/oldtree/suboldtree/oldfoster',
                        search: `treeId=${item.treeId}`
                    }}>
                        <img src={"http://116.62.38.0:8888/" + item.treeThumbnail} />
                        <div className="list-right">
                            <div className="list-title">
                                <p>{item.treeName}
                                    {/* {(item.star != 0) && <span><i className="fas fa-star"></i><b>LV{item.star}</b></span>} */}
                                </p>
                                <span>{item.treePrice}元/件</span>
                            </div>
                            <div className="list-info">
                                <div className="list-text">
                                    <p>{item.treeAge}余年</p>
                                    <p>{item.treePublisher}</p>
                                </div>
                                <div className="btn-foster"><button className={item.fosterFlag && 'btn disable' || 'btn'}>我要认养</button></div>
                            </div>
                        </div>
                    </Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="old-box">
                <OldBanner />
                <div className="old-main">
                    <div>
                        <div className="old-title">
                            <h3>古树名木认养</h3>
                            <Link to="/oldtree/suboldtree/oldintro">项目介绍 ></Link>
                        </div>
                        <div className="menu-btn-area">
                            <p><OldArea /></p>
                            {/* <p>综合排序 <i className="fas fa-angle-down"></i></p> */}
                            {/* <p><Link to="/oldtree/suboldtree/userbalanceinfo">余额明细</Link></p>
                            <p><Link to="/oldtree/suboldtree/userbalance">余额</Link></p> */}
                            <p><Link to="/oldtree/suboldtree/userrecharge">充值</Link></p>
                            {/* <p><Link to="/oldtree/suboldtree/energy">能量</Link></p>
                            <p><Link to="/oldtree/suboldtree/energyinfo">能量明细</Link></p> */}

                        </div>
                        {/* <p><Link to="/oldtree/suboldtree/myoldtree">古树名木证书</Link></p>
                        <p><Link to="/oldtree/suboldtree/picupload">图片上传</Link></p> */}
                    </div>
                    <div className="oldtreeList">
                        <ul>
                            {this.renderItem()}
                            {/* <li>
                                <Link to="/oldtree/suboldtree/oldfoster">
                                    <img src={[require('../../assets/img/oldtree/tree-list.gif')]} />
                                    <div className="list-right">
                                        <div className="list-title">
                                            <p>凤凰松</p><span>8888元/件</span>
                                        </div>
                                        <div className="list-info">
                                            <div className="list-text">
                                                <p>1400余年</p>
                                                <p>安徽省九华镇人民政府</p>
                                            </div>
                                            <div className="btn-foster"><button className="btn">我要认养</button></div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/oldtree/suboldtree/oldfoster">
                                    <img src={[require('../../assets/img/oldtree/tree-list.gif')]} />
                                    <div className="list-right">
                                        <div className="list-title">
                                            <p>凤凰松<img src={[require('../../assets/img/oldtree/jb.gif')]} /></p><span>8888元/件</span>
                                        </div>
                                        <div className="list-info">
                                            <div className="list-text">
                                                <p>1400余年</p>
                                                <p>安徽省九华镇人民政府</p>
                                            </div>
                                            <div className="btn-foster"><button className="btn disable">我要认养</button></div>
                                        </div>
                                    </div>
                                </Link>
                            </li> */}
                        </ul>
                    </div>

                </div>
            </div>

        )
    }
}
// export default Oldtree
export default connect(state => {
    return {
        oldtree: state.oldtreeReducer.oldtree,
        // oldtreeIds: state.oldtreeReducer.oldtreeIds
    }
}, dispatch => bindActionCreators({ getOldTree }, dispatch)
)(Oldtree)

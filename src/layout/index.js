import React, { Component } from 'react'
import Tab from '../component/tab'
import Tabbar from '../component/tabbar'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Home from '../pages/home/index'
import Oldtree from '../pages/oldtree/index'
import Mine from '../pages/mine/index'
import Adopttree from '../pages/adopttree/index'
import NotFound from '../pages/notfound/index'
import '../assets/style/common.scss'
import '../assets/style/reset.scss'
import { tabShow } from '../action/index'
import { connect, } from 'react-redux'
import { bindActionCreators } from 'redux'

import Mywish from '../pages/mywish/index'
import Wish from '../pages/mywish/wish/index'
import Wishdetail from '../pages/mywish/wishdetail/index'
import Diary from '../pages/mywish/diary/index'
import Findfriend from '../pages/mywish/findfriend/index'
import Mywishes from '../pages/mywish/mywishes/index'
import Friendwish from '../pages/mywish/friendwish/index.js'
import Wishcontent from '../pages/mywish/wishcontent/index'

import Certificate from "../pages/certificate/index";
import Foster from "../pages/foster/index";
import DiaryList from "../pages/diary/index";
import Diarydetail from "../pages/diaryDetail/index";
import Detail from "../pages/detail/index";
import Agreement from "../pages/agreement/index";
class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabbarf: true,
            tabf: true,
            backf: false,
            title: "",
            titles: {
                '/home/firsthome': '生态林',
                '/oldtree/oldtree': '古树名木',
                '/adopttree/Culture': '特色领养',
                '/mine': '我的',
                '/mine/mylist': '我的',
                '/mine/user': '个人信息',
                '/mine/myzoo': '我的生态公益林',
                '/mine/mytree': '我的古树名木',
                '/mine/balance': '余额',
                '/mine/integral': '积分',
                '/mine/sets': '设置',
                '/mine/service': '在线客服',
                '/mine/safety': '账号与安全',
                '/oldtree/suboldtree/myoldtree/oldtreecer': '我的古树名木',
                '/oldtree/suboldtree/myoldtree/oldtreerecord': '我的古树名木',
                '/adopttree/Red': '特色领养',
                '/oldtree/suboldtree/userbalance': '我的余额',
                '/oldtree/suboldtree/userbalanceinfo': '我的余额明细',
                '/oldtree/suboldtree/energy': '我的能量',
                '/oldtree/suboldtree/energyinfo': '我的能量明细',
                '/oldtree/suboldtree/userrecharge': '充值',
                '/home/subhome/introduce': '项目介绍',
                '/home/subhome/renyang': '认养',
                '/home/subhome/foster': '我的订单',
                '/home/subhome/orderform': '订单列表',
                '/home/subhome/map': '导航',
                '/oldtree/suboldtree/oldintro': '项目简介',
                '/detail': '认养详情',
                '/oldtree/suboldtree/oldfoster': '我要认养',
                '/oldtree/suboldtree/oldsurefoster': '支付',
                '/oldtree/suboldtree/oldsuccessorder': '支付成功',
                '/certificate': '我的认养证书',
                '/home/subhome/orderForm': '我的树木',
                '/foster': '我的订单'
            },
            arr: [

                '/mine',
                '/mywish',
                '/wish',
                '/mywishes',
                '/diary',
                '/findfriend',
                '/wishcontent',
                '/diarylist',
                '/wishdetail',
                '/friendwish',
                '/wishcontent',
                '/diaryDetail',
                '/detail'

            ],
            tab_bar_arr: [
                '/mine/user',
                '/mine/myzoo',
                '/mine/balance',
                '/mine/integral',
                '/mine/sets',
                '/mine/service',
                '/mine/mytree',
                '/mine/safety',
                '/mywish',
                '/wish',
                '/mywishes',
                '/diary',
                '/findfriend',
                '/wishcontent',
                '/diarylist',
                '/wishdetail',
                '/oldtree/suboldtree/myoldtree/oldtreecer',
                '/oldtree/suboldtree/myoldtree/oldtreerecord',
                '/oldtree/suboldtree/energy',
                '/oldtree/suboldtree/energyinfo',
                '/detail',
                '/friendwish',
                '/wishcontent',
                '/diaryDetail',
                '/detail'
            ],
            tabBarFlag: false,
            tabFlag: false
        };
    }
    componentDidMount() {
        // console.log(this.props.location.pathname)
        this.checkTabFlag()
        this.checkTabBarFlag()
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.location.pathname)
        this.checkTabFlag(nextProps)
        this.checkTabBarFlag(nextProps)
    }
    checkTabBarFlag = nextProps => {
        const { pathname } = nextProps && nextProps.location || this.props.location
        let f = this.state.tab_bar_arr.some(item => item == pathname)
        // console.log(this.props.location.pathname.split('/')[1])
        // if (this.props.location.pathname.split('/')[1]=='')
        // f = true
        // console.log(f)
        if (f) {
            this.setState({
                tabBarFlag: false
            })
        } else {
            this.setState({
                tabBarFlag: true
            })
        }
    }
    checkTabFlag = nextProps => {
        const { pathname } = nextProps && nextProps.location || this.props.location
        let f = this.state.arr.some(item => item == pathname)

        if (f) {
            this.setState({
                tabFlag: false
            })
        } else {
            this.setState({
                tabFlag: true
            })
        }
    }



    render() {
        const { tabFlag, titles, tabBarFlag } = this.state
        // console.log(titles)
        return (
            <div className="layout">
                {/* {this.state.backf && <Tab title={this.state.title} />} */}
                {tabFlag && <Tab titles={titles} tabFlag={tabFlag} {...this.props} />}
                {/* <Tab title={this.state.title} /> */}
                <Switch>
                    <Redirect to="/home" from="/" exact />
                    <Route path="/home" component={Home} />
                    <Route path="/oldtree" component={Oldtree} />
                    <Route path="/adopttree" component={Adopttree} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/wish" component={Wish} />
                    <Route path="/wishdetail" component={Wishdetail} />
                    <Route path="/diary" component={Diary} />
                    <Route path="/findfriend" component={Findfriend} />
                    <Route path="/mywishes" component={Mywishes} />
                    <Route path="/friendwish" component={Friendwish} />
                    <Route path="/wishcontent" component={Wishcontent} />
                    <Route path="/mywish" component={Mywish} />
                    <Route path="/detail" component={Detail} />
                    <Route path="/certificate" component={Certificate} />
                    <Route path="/agreement" component={Agreement} />
                    <Route path="/foster" component={Foster} />
                    <Route path="/diarylist" component={DiaryList} />
                    <Route path="/diaryDetail" component={Diarydetail} />
                    <Route component={NotFound} />
                </Switch>
                {tabBarFlag && <Tabbar />}
            </div>
        )
    }
}

// export default connect(state => state.tabShowReducer, dispatch => bindActionCreators({ tabShow }, dispatch))(Layout)
export default withRouter(Layout)
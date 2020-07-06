import React, { Component } from 'react'
import './mywish.scss'
import { Link } from 'react-router-dom'
import { signIn } from '../../action/wish/postqd'
import { wishIndex } from '../../action/wish/indexwish'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class Mywish extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // dk: true,
            dk: false,
            defaultnl: null,
            nengliang: null,
            ableqiandao: true,
            userdata: null,
            userId: ''
        }
    }
    componentDidMount() {
        let userId = localStorage.getItem('userId')
        this.setState({
            userId: localStorage.getItem('userId')
        })
        this.props.wishIndex(userId)
    }
    componentWillReceiveProps(nextProps) {

        if (nextProps.state.wishindexReducer.data) {
            this.props.state.wishindexReducer.data = nextProps.state.wishindexReducer.data
            this.setState({
                userdata: nextProps.state.wishindexReducer.data,
                defaultnl: nextProps.state.wishindexReducer.data.userEnergy,
                ableqiandao: nextProps.state.signFlag
            })

        }
    }
    dknl = () => {
        let timer;
        clearTimeout(timer)
        this.setState({
            dk: true,
            nengliang: ++this.state.defaultnl
        })
        timer = setTimeout(() => {
            this.setState({
                dk: false
            })
        }, 1000);
        this.props.signIn(+this.state.userId)
        this.setState({
            ableqiandao: false
        })
    }
    mine = () => {
        const { userdata } = this.state
        if (userdata) {
            return <Link to="/mine" className="mine">
                <div className="userimg">
                    <img src={'http://116.62.38.0:8888/' + userdata.userImage} />
                    <i>{userdata.userName}</i>
                </div>
                <div className="usersc">
                    <img src={require('./img/wish.png')} />
                    {/* <span>{}</span> */}
                    {this.state.nengliang && <span>{this.state.nengliang}</span> || <span>{userdata.userEnergy}</span>}
                    {/* <span>{this.state.nengliang && userdata.userEnergy}</span> */}
                    {this.state.dk && <b>+1</b>}
                </div>
            </Link>
        }
    }
    wishcontent = (wish) => {
        console.log(wish)
    }
    mywish = () => {
        const { userdata, userId } = this.state
        if (userdata) {
            // console.log(userdata)
            return <ul>
                {
                    userdata.dreamList.map((v, i) => <li className={'wish' + i} key={i} onClick={() => { this.wishcontent(v) }}>
                        <Link to={{
                            pathname: `/wishcontent`,
                            search: `userId=${userId}&dreamId=${v.dreamId}`
                        }

                        }></Link>
                    </li>)
                }
            </ul>
        }
    }
    render() {
        return (
            <div className="container">
                <div className="wishtree">

                    <div className="tr-wish">
                        {/* 渲染心愿 */}
                        {this.mywish()}
                        {/* <ul>
                            
                            <li className="second-wish">
                            </li>
                            <li className="third-wish">
                            </li>
                        </ul> */}
                    </div>
                    <Link to="/home/firsthome" className="treezoo">
                        <img src="https://ftp.bmp.ovh/imgs/2019/10/6d5e154339239cb4.png" />
                    </Link>
                    {this.mine()}
                    {/* <Link to="" className="mine">
                        <div className="userimg">
                            <img src="https://ftp.bmp.ovh/imgs/2019/10/6d5e154339239cb4.png" />
                            <i>我爱我树</i>
                        </div>
                        <div className="usersc">
                            <img src={require('./img/wish.png')} />
                            <span>{this.state.nengliang}</span>
                            {this.state.dk && <b>+1</b>}
                        </div>

                    </Link> */}
                    <div className="footlink">
                        <a className="daka">{this.state.ableqiandao && <img onClick={this.dknl} src="https://ftp.bmp.ovh/imgs/2019/10/7f545226741374fb.png" /> || <img src={require('./img/sign.gif')} className="haveqd" />}</a>
                        <Link to="/wish" className=""><img src="https://ftp.bmp.ovh/imgs/2019/10/1c3c3fb6f9976c9c.png" /></Link>
                        <Link to="/diary" className=""><img src="https://ftp.bmp.ovh/imgs/2019/10/58815ec5b3483cc6.png" /></Link>
                    </div>
                    <div className="findfriend"><Link to='/findfriend'><img src={require('./img/search.png')} /><span>好友查找</span></Link></div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        state: { ...state }
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ signIn, wishIndex }, dispatch)




export default connect(mapStateToProps, mapDispatchToProps)(Mywish)


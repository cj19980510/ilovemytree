import React, { Component } from 'react'
import './findfriend.scss'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { connect } from 'react-redux'
import { getfriend } from '../../../action/wish/getfriend'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
class Findfriend extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '搜索好友',
            fdjbg: {
                background: `url(${require("../img/fdj.png")}) no-repeat`,
                backgroundSize: `.25rem .25rem`
            },
            search: false
        }
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps)
    }
    getfriend = (e) => {
        let info = e.target.value
        // console.log('get', e.target.value)
        if (info != '' && e.keyCode == 13) {
            this.props.getfriend(info)
            this.setState({
                search: true,
            })

        }
    }
    fdlist = () => {
        const { changtabtabbar } = this.props
        if (this.state.search)
            if (this.props.state.data) {
                console.log(this.props.state.data)
                return <ul>{this.props.state.data.map((v, i) =>
                    <li key={i}>
                        <img src={'http://116.62.38.0:8888/' + v.userImage} />
                        <p>name:</p><b>{v.userName}</b>
                        <Link className="fas fa-angle-right" to={{
                            pathname: `/friendwish`,
                            search: `userId=${v.userId}`
                        }}></Link>
                    </li>)}
                </ul>
            }

            else
                return null
    }
    goback = () => {
        console.log(this.props.location.pathname)
        this.props.history.goBack()
    }
    render() {

        return (
            <div className="findfriendpage">
                <div className="findfriendtop">
                    <h2>
                        <span className="fas fa-angle-left" onClick={this.goback} ></span>
                        <b>好友查找</b>
                    </h2>
                </div>
                <div className="findfriendmain">
                    <div className="searchtab">
                        <input type="search" onKeyUp={this.getfriend} />
                        <span className="fdj" style={this.state.fdjbg}></span>
                    </div>
                    {this.fdlist()}
                    {/* <ul>

                        <li><img src={require('../img/writewish.png')} /><p>name</p><b>15879089799</b>
                            <Link className="fas fa-angle-right" to={{
                                pathname: `/friendwish`,
                                search: `userId=50`
                            }}></Link></li>
                    </ul> */}
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        state: state.findfriendReducer
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ getfriend }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Findfriend)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { wishList } from '../../../action/wish/getwishdetails'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'
class Haswish extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mywishbg: {
                display: 'block',
                height: '100%',
                width: '100%',
                background: `url(${require("../img/wishbackground.png")})`,
                backgroundSize: `3.75rem 6.67rem `
            },
            listbg: {
                background: `url(${require("../img/writewish.png")})`,
                backgroundSize: `3.15rem 1.2rem `
            },
            data: null
        }
    }
    componentDidMount() {
        console.log(this.props)
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps.state.data) {
            this.setState({
                data: nextProps.state.data
            })
        }
    }

    getWishList = () => {
        const { data } = this.state
        if (this.state.data)
            return (<ul className="wishlist">
                {data.map((item, index) =>
                    <li style={this.state.listbg} key={index}>
                        <Link to={{
                            pathname: '/wishcontent',
                            search: `userId=${item.userId}&dreamId=${item.dreamId}`
                        }
                        }>
                            <div>
                                <div className="wishinfo">
                                    <p>{item.dreamContent}......</p>
                                </div>
                                <p>{11}人查看了我的愿望</p>
                            </div>

                            <div className="wishtypebox">
                                <span className="wishtype">{}公开</span>
                            </div>
                        </Link>
                    </li>)}


            </ul>)
    }

    goback = () => {

        console.log(this.props.history)
        this.props.history.goBack()
    }
    render() {
        let d = this.props.state.data
        if (d)
            return (
                <div className="mywishbox" style={this.state.mywishbg} >
                    <div className="mywishestop">
                        <h2>
                            <span className="fas fa-angle-left" onClick={this.goback} ></span>
                            <b>我的心愿</b>
                        </h2>
                    </div>
                    <div className="wishcontentlist">
                        {this.getWishList()}
                    </div>

                </div >
            )
        else
            return (<div className="mywishbox" style={this.state.mywishbg} >
                <div className="mywishestop">
                    <h2>
                        <span className="fas fa-angle-left" onClick={this.goback}></span>
                        <b>我的心愿</b>
                    </h2>
                </div>
            </div >)
    }
}
const mapStateToProps = (state) => {
    return {
        state: state.wishlistReducer
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ wishList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Haswish)

import React, { Component } from 'react'
import './wishcontent.scss'
import qs from 'querystring'
import { connect } from 'react-redux'
import { getwishcontent } from '../../../action/wish/wishcontent'
import { bindActionCreators } from 'redux'
class Wishcontent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dreamId: null,
            rankList: null,
            dreamList: null,
            dreaminfo: null
        }
    }


    componentWillReceiveProps(nextProps) {

    }
    componentDidMount() {
        const { search } = this.props.location
        const wishdetails = qs.parse(search.slice(1))

        this.setState({
            dreamId: wishdetails.dreamId
        })
        const obj = {
            dreamId: +wishdetails.dreamId,
            userId: +wishdetails.userId
        }
        // console.log(obj);
        this.props.getwishcontent(obj)
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps)
        if (nextProps.state.data) {
            this.setState({
                rankList: nextProps.state.data.rankList,
                dreamList: nextProps.state.data.dreamList,
                dreaminfo: nextProps.state.data
            })
            // console.log(nextProps.state.data)
        }

    }
    getcontent = () => {
        //
        const { dreaminfo } = this.state
        // console.log(dreaminfo)
        if (dreaminfo) {
            // console.log(dreaminfo.dreamContent)

            return dreaminfo.dreamContent
        }

    }
    watcher = () => {
        const { rankList } = this.state
        if (rankList) {
            console.log(rankList)
            return <ul>
                {rankList.map((v, i) => <li key={i}>
                    <div className="otheruserimg"><img src={'http://116.62.38.0:8888/' + v.userImage} /></div>
                    <div className="wtinfo"><p>{v.userPhone}</p><p>查看了你的心愿</p></div>
                    <div className="wtdata"><p>{v.userCreatetime}</p></div>
                </li>)}
            </ul>
        }


    }
    goback = () => {
        this.props.history.goBack()
    }
    render() {
        return (
            <div className="qywish">
                <div className="qywishtop">
                    <h2>
                        <span className="fas fa-angle-left" onClick={this.goback}></span>
                        <b>愿望</b>
                    </h2>
                </div>
                <div className="qywishcontent">{this.getcontent()}</div>
                <div className="qywishwatch">
                    <h2>谁查看了我的心愿</h2>
                    {this.watcher()}
                    {/* <ul>
                        <li>
                          
                        </li>
                    </ul> */}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        state: state.wishcontentReducer
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ getwishcontent }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Wishcontent)

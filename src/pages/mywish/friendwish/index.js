import React, { Component } from 'react'
import './friendwish.scss'
import { connect } from 'react-redux'
// import { getfriendwish } from '../../../action/wish/getfriendwish'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { wishIndex } from '../../../action/wish/indexwish'
class Friendwish extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }
    componentDidMount() {

        let userId = this.props.location.search.split('=')[1]

        this.props.wishIndex(userId)

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.state.data) {
            if (nextProps.state.data.dreamList.length != 0)

                this.setState({
                    data: nextProps.state.data.dreamList
                })
        }
        console.log(this.state.data)
    }
    getType = (info) => {
        // console.log(info)

        this.props.history.push({
            pathname: `/wishcontent`,
            // ?userId=${info.userId}&othersId=${info.userId}&dreamId=${info.dreamId}
            search: `userId=${info.userId}&dreamId=${info.dreamId}`
        })

    }
    getwish = () => {
        const { data } = this.state;
        if (data) {
            // console.log(data)
            return <ul>
                {data.map((v, i) =>
                    <li key={i} className={'wish' + i} onClick={() => { this.getType(v) }}>

                    </li >)
                }

            </ul >
        }
        else
            return null
    }
    goback = () => {
        this.props.history.goBack()
    }
    render() {
        return (
            <div className="container">
                <div className="wishtree">
                    <div className="friendwishtop">
                        <h2>
                            <span className="fas fa-angle-left" onClick={this.goback} ></span>
                            <b>他的心愿</b>
                        </h2>
                    </div>
                    <div className="tr-wish">
                        {this.getwish()}

                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        state: state.wishindexReducer
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ wishIndex }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Friendwish)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserBlance } from 'action'

class UserBlance extends Component {

    componentDidMount() {
        const { getUserBlance } = this.props
        getUserBlance(localStorage.getItem('userId'))
    }
    toBlanceInfo = () => {
        this.props.history.push({
            pathname: '/oldtree/suboldtree/userbalanceinfo'
        })
    }
    render() {
        return (
            <div className="old-blance-box">
                <div className="main">
                    <h3>账户余额 （元）</h3>
                    <h4>{this.props.userBlance.myMoney.toFixed(2)}</h4>
                </div>
                <div className="btn"><button onClick={this.toBlanceInfo}>点击查看我的余额明细</button></div>
            </div>
        )
    }
}
export default connect(state => {
    return {
        userBlance: state.oldtreeReducer.userBlance
    }
}, dispatch => bindActionCreators({ getUserBlance }, dispatch)
)(UserBlance)

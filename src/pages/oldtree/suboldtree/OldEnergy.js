import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserEnergy } from 'action'

class OldEnergy extends Component {
    componentDidMount() {
        const { getUserEnergy } = this.props
        getUserEnergy(+localStorage.getItem('userId'))
    }
    render() {
        const { userEnergy } = this.props
        return (
            <div className="old-energy-box">
                <div>
                    <h3>{userEnergy}</h3>
                    <p>
                        <Link to="/oldtree/suboldtree/energyinfo">能量明细</Link>
                        <b>兑换记录</b>
                    </p>
                </div>
            </div>
        )
    }
}
export default connect(state => {
    return {
        userEnergy: state.oldtreeReducer.userEnergy,
        // oldtreeIds: state.oldtreeReducer.oldtreeIds
    }
}, dispatch => bindActionCreators({ getUserEnergy }, dispatch)
)(OldEnergy)

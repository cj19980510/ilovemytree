import React, { Component } from 'react'
import Login from './login'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMineMsg, getMineLogin, getUserMsg } from '../../action/mine/index'
import { Route, Redirect, Link } from 'react-router-dom'
import MyList from './myList'
import User from './user'
import MyZoo from './myZoo'
import MyTree from './myTree'
import Balance from './Balance'
import Integral from './Integral'
import Sets from './Sets/index'
import Service from './Service'
import Safety from './Sets/safety/index'

class Mine extends Component {
    componentDidMount () {
        var userId = localStorage.getItem('userId');
        this.props.getUserMsg(userId);
        if (localStorage.getItem('token') == 'true') {
            this.props.history.push('/mine/mylist')
        } else {
            this.props.history.push('/mine/login')
        }
    }

    render () {
        const { user } = this.props
        return (
            <div className="container">
                <Redirect from="/mine" to='/mine/mylist' exact />
                {/* <Route path="/mine/mylist" component={MyList}  /> */}
                <Route path="/mine/mylist" render={() => <MyList user={user} />} />
                <Route path='/mine/login' component={Login} />
                <Route path="/mine/user" render={() => <User user={user} />} />
                <Route path="/mine/myzoo" render={() => <MyZoo user={user} />} />
                <Route path="/mine/mytree" component={MyTree} />
                <Route path="/mine/balance" component={Balance} />
                <Route path="/mine/integral" component={Integral} />
                <Route path="/mine/sets" component={Sets} />
                <Route path="/mine/service" component={Service} />
                <Route path="/mine/safety" render={() => <Safety user={user} />} />
            </div>
        )
    }
}
export default connect(
    state => state.mineReducer,
    dispatch => bindActionCreators({ getUserMsg }, dispatch)
)(Mine)
// export default Mine
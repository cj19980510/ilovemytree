import React, { Component } from 'react'
import { Redirect, Route, NavLink } from 'react-router-dom'
import OldTreeCertificate from './OldTreeCertificate'
import OldTreeRecord from './OldTreeRecord'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMyOldtree, getUserEnergy } from 'action'

class MyOldtree extends Component {

    componentDidMount() {
        const { getMyOldtree, getUserEnergy } = this.props
        const userId = localStorage.getItem('userId')
        console.log(userId)
        getMyOldtree(+userId, 4)
        // const { myTreeList } = this.props
        getUserEnergy(+userId)



    }

    render() {
        const { myTreeList, userInfo } = this.props
        let treeidsArr = []
        myTreeList.forEach(item => {
            treeidsArr.push(item.treeId)
        })
        let treeidArr = [...new Set(treeidsArr)]
        let Arr = []
        treeidArr.forEach(val => {
            let num = 0
            myTreeList.forEach(item => {
                if (val == item.treeId) {
                    num += item.orderTreenum

                }
            })
            Arr.push({ treeId: val, treeNum: num })
        })
        let totalNum = 0
        Arr.forEach(item => {
            totalNum += item.treeNum
        })

        return (
            <div className="my-oldtree-box">
                <div className="user-info">
                    <img src={"http://116.62.38.0:8888/" + userInfo.userImage} />
                    <div>
                        <h3>{userInfo.userName}</h3>
                        <p>已累计认养{totalNum}棵</p>
                    </div>
                </div>
                <div className="tree-list">
                    <p>
                        <NavLink to="/oldtree/suboldtree/myoldtree/oldtreecer" activeClassName="active">认养证书</NavLink>
                        <NavLink to="/oldtree/suboldtree/myoldtree/oldtreerecord" activeClassName="active">认养记录</NavLink>
                    </p>
                    <Redirect to="/oldtree/suboldtree/myoldtree/oldtreecer" from="/oldtree/suboldtree/myoldtree" exact />
                    <Route path="/oldtree/suboldtree/myoldtree/oldtreecer" render={() => <OldTreeCertificate Arr={Arr} myTreeList={myTreeList} />} />
                    <Route path="/oldtree/suboldtree/myoldtree/oldtreerecord" render={() => <OldTreeRecord myTreeList={myTreeList} />} />
                </div>
            </div>
        )
    }
}
export default connect(state => {
    return {
        myTreeList: state.oldtreeReducer.myTreeList,
        userInfo: state.oldtreeReducer.userInfo
    }
}, dispatch => bindActionCreators({ getMyOldtree, getUserEnergy }, dispatch)
)(MyOldtree)
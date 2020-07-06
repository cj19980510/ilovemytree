import React, { Component } from 'react'
import BScroll from 'better-scroll'

export default class OldTreeRecord extends Component {
    componentDidMount() {
        const bs = new BScroll(".oldtree-record-box", {
            pullUpLoad: {
                threshold: 30
            }
        });
    }
    renderItem = () => {
        const { myTreeList } = this.props
        return myTreeList.map(item => {
            return (
                <li>
                    <div className="record-left">
                        <h3>认养{item.treeName}</h3>
                        <h4>编号为：{item.orderCode}</h4>
                    </div>
                    <div className="record-rigth">
                        <h5>x {item.orderTreenum}棵</h5>
                        <p>{item.orderEndtime}</p>
                    </div>
                </li>
            )
        })
    }
    render() {
        return (
            <div className="oldtree-record-box">
                <ul>
                    {this.renderItem()}
                    {/* <li>
                        <div className="record-left">
                            <h3>认养细叶青冈</h3>
                            <h4>编号为：20191122201050</h4>
                        </div>
                        <div className="record-rigth">
                            <h5>x 10棵</h5>
                            <p>2019-11-22</p>
                        </div>
                    </li>
                    <li>
                        <div className="record-left">
                            <h3>认养细叶青冈</h3>
                            <h4>编号为：20191122201050</h4>
                        </div>
                        <div className="record-rigth">
                            <h5>x 10棵</h5>
                            <p>2019-11-22</p>
                        </div>
                    </li>
                    <li>
                        <div className="record-left">
                            <h3>认养细叶青冈</h3>
                            <h4>编号为：20191122201050</h4>
                        </div>
                        <div className="record-rigth">
                            <h5>x 10棵</h5>
                            <p>2019-11-22</p>
                        </div>
                    </li>
                    <li>
                        <div className="record-left">
                            <h3>认养细叶青冈</h3>
                            <h4>编号为：20191122201050</h4>
                        </div>
                        <div className="record-rigth">
                            <h5>x 10棵</h5>
                            <p>2019-11-22</p>
                        </div>
                    </li> */}
                </ul>
            </div>
        )
    }
}

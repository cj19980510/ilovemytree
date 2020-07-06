import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class OldTreeCertificate extends Component {
    renderItem = () => {
        const { Arr, myTreeList } = this.props

        return Arr.map(item => {
            var name = ''
            myTreeList.some((val) => {
                if (val.treeId == item.treeId) {
                    name = val.treeName
                }
            })

            return (
                <li>
                    <Link>
                        <div>
                            <img src={[require('../../../assets/img/oldtree/tree' + item.treeId + '.png')]} />
                            <span>x{item.treeNum}</span>
                        </div>
                        <p>{name}</p>
                    </Link>
                </li>
            )
        })


    }
    render() {
        return (
            <div className="oldtree-cer-box">
                <ul>
                    {this.renderItem()}
                    {/* <li>
                        <Link>
                            <div>
                                <img src={[require('../../../assets/img/oldtree/tree5.png')]} />
                                <span>x3</span>
                            </div>
                            <p>细叶青柑</p>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div>
                                <img src={[require('../../../assets/img/oldtree/tree6.png')]} />
                                <span>x3</span>
                            </div>
                            <p>细叶青柑</p>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div>
                                <img src={[require('../../../assets/img/oldtree/tree7.png')]} />
                                <span>x3</span>
                            </div>
                            <p>细叶青柑</p>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div>
                                <img src={[require('../../../assets/img/oldtree/tree8.png')]} />
                                <span>x3</span>
                            </div>
                            <p>细叶青柑</p>
                        </Link>
                    </li> */}
                </ul>
            </div>
        )
    }
}

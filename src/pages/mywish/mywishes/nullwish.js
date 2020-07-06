import React, { Component } from 'react'

export default class Nullwish extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nullwishbg: {
                display: 'block',
                height: '100%',
                width: '100%',
                background: `url(${require("../img/nullwish.png")})`,
                backgroundSize: `3.75rem 6.67rem `
            },
        }
    }

    render() {
        return (
            <div style={this.state.nullwishbg} className="mywishbox">
                <div className="mywishestop">
                    <h2>
                        <span className="fas fa-angle-left" ></span>
                        <b>我的心愿</b>
                    </h2>
                </div>
                <div className="content">
                    <p>还没有许愿哦</p>
                </div>
            </div>
        )
    }
}

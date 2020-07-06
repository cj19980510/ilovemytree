import React, { Component } from 'react'
import './tab.scss'
export default class Tab extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            bkf: true
        }
    }



    componentDidMount() {

        const { pathname } = this.props.location

        this.setTitle(pathname)
    }
    componentWillReceiveProps(nextProps) {
        const { pathname } = nextProps.location || this.props.location;


        this.setTitle(pathname)
    }
    setTitle = pn => {
        const { titles } = this.props;
        this.setState({
            title: titles[pn]
        })
        if (pn == '/home/firsthome' || pn == '/oldtree/oldtree' || pn == '/adopttree/Culture' || pn == '/mine/mylist' || pn == '/adopttree/Red') {
            this.setState({
                bkf: false
            })
        }
        else {
            this.setState({
                bkf: true
            })
        }
    }
    goback = () => {
        this.props.history.goBack();
    }
    render() {
        const { bavkf, titles } = this.props
        const { title, bkf } = this.state
        // console.log(titles)
        return (
            <header>
                <h2>
                    {bkf && <span className="fas fa-angle-left" onClick={this.goback}></span>}
                    <b>{title}</b>
                </h2>
            </header>
        )
    }
}

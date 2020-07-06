import React, { Component } from 'react'
import './mywishes.scss'
import Haswish from './haswish'
import Nullwish from './nullwish'
import { connect } from 'react-redux'
import { wishList } from '../../../action/wish/getwishdetails'
import { bindActionCreators } from 'redux'
class Mywishes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            haswish: true,
            data: ''
        }
    }
    componentDidMount() {
        const userId = localStorage.getItem('userId')
        this.props.wishList(userId)
        // console.log(this.props)
    }
    t = setTimeout(() => {
        const d = this.props.state.data
        if (d) {
            this.setState({
                haswish: true,
            })
        }

    }, 1000);
    render() {
        return (
            <div className="mywishespage">
                {this.state.haswish && <Haswish {...this.props} /> || <Nullwish {...this.props} />}
            </div>
        )
    }
}
const mapStateToProps = (state) => {

    return {
        state: state.wishlistReducer
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ wishList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Mywishes)

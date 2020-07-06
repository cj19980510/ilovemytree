import React, { Component } from 'react'
import './diary.scss'
import { connect } from 'react-redux'
import { postDiary } from '../../../action/wish/postdiary'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
class Diary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bgGround: {
                display: 'block',
                height: '100%',
                width: '100%',
                background: `url(${require("../img/background.png")})`
            },
            diarynum: 0,
            diaryContext: ''
        }
    }
    diaryword = (e) => {
        console.log(e.target.value)
        let content = e.target.value
        let count = e.target.value.length
        if (count <= 300) {
            count > 0 ? this.setState({ ablesub: true }) : this.setState({ ablesub: false })
            this.setState({
                diarynum: count,
                diaryContext: content
            })
        }
        else {
            count = 300;
            this.setState({
                diaryContext: content.slice(0, 301)
            })
            e.target.value = this.state.diaryContext
        }
    }
    subwish = () => {
        const params = {
            userId: +localStorage.getItem('userId'),
            diaryContext: this.state.diaryContext
        }

        if (this.state.diaryContext != '') {
            this.props.postDiary(params)
            this.props.history.push('/diarylist')
        }
        else
            console.log('内容不能为空')
        console.log(this.props)
    }
    goback = () => {
        // this.props.history
        // console.log(this.props.history)
        this.props.history.goBack()
    }
    render() {
        return (
            <div className="diary" style={this.state.bgGround}>
                <div className="diarytop">
                    <h2>
                        <span className="fas fa-angle-left" onClick={this.goback}></span>
                        <b>写日记</b>
                        <Link to="/diarylist">我的日记</Link>
                    </h2>
                </div>
                <div className="diary-t">人生的酸甜苦辣都在你的笔下</div>
                <div className="diary-main">
                    <textarea className="diary-content" onKeyUp={this.diaryword}>
                    </textarea>
                    <p>{this.state.diarynum} / 300</p>
                </div>

                <div className="diaryfoot">
                    <div className="sub-btn">
                        <img src={require('../img/confirm.png')} onClick={this.subwish} />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        state: state.diaryReducer
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ postDiary }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Diary)

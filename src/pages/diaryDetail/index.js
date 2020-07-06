import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { diarydetail } from "../../action";
import qs from "querystring";
import "./index.scss";

class Diarydetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      diarycon: null,
      diaryCreatetime: null
    }
  }

  componentDidMount() {
    const { search } = this.props.location;
    const { userId } = qs.parse(search.slice(1));
    const { diaryId } = qs.parse(search.slice(1));
    this.props.diarydetail(userId, diaryId);
  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
    if (nextProps.diarydetaildata) {
      // console.log(nextProps.diarydetaildata.diaryContent)
      this.setState({
        diarycon: nextProps.diarydetaildata.diaryContent,
        diaryCreatetime: nextProps.diarydetaildata.diaryCreatetime
      })
    }
  }
  diaryText = () => {
    if (this.state.diarycon)
      // console.log(this.state.diarycon)
      return <p>{this.state.diarycon}
        <span className="cre-date">{this.state.diaryCreatetime.split(' ')[0]}</span>
      </p>
  };
  goback = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <div className="diaryDetail">
        <div className="header">
          <i className="fas fa-angle-left" onClick={this.goback}></i>
          <span>我的记忆</span>
        </div>
        <div className="diary-content">
          {this.diaryText()}
        </div>

      </div>
    );
  }
}

export default connect(
  state => state.diaryDetailReducer,
  dispatch => bindActionCreators({ diarydetail }, dispatch)
)(Diarydetail);

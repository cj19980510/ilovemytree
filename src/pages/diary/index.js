import React, { Component } from "react";
import "./index.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { diaryList } from "../../action";
import { Link } from "react-router-dom";

class DiaryItem extends Component {
  componentDidMount() {
    const userId = +localStorage.getItem('userId');
    this.props.diaryList(userId);
  }

  renderDiary = () => {
    if (this.props.diarydata != null) {
      // console.log(
      //   this.props.diarydata[0].diaryCreatetime.split(" ")[0].split("-")
      // );
      return this.props.diarydata.map((item, index) => (
        <Link
          to={{
            pathname: `/diaryDetail`,
            search: `diaryId=${item.diaryId}&userId=${item.userId}`
          }}
          className="diarylist"
          key={index}
        >
          <div className="dateTime">
            <h4>
              {item.diaryCreatetime
                .split(" ")[0]
                .split("-")
                .slice(1)
                .join(".")}
            </h4>
            <span>{item.diaryCreatetime.split("-")[0]}</span>
          </div>
          <div className="diarycontent">{item.diaryContent}</div>
        </Link>
      ));
    }
  };
  goback = () => {
    this.props.history.goBack()
  }
  render() {
    // console.log("111", this.props.diarydata);
    return (
      <div className="diary-list">
        <div className="header">
          <i className="fas fa-angle-left" onClick={this.goback}></i>
          <span>我的记忆</span>
        </div>
        <div className="diary-box">{this.renderDiary()}</div>
      </div>
    );
  }
}

export default connect(
  state => state.diaryListReducer,
  dispatch => bindActionCreators({ diaryList }, dispatch)
)(DiaryItem);

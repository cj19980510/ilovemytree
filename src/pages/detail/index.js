import React, { Component } from "react";
import { treeDetail } from "../../action";
import qs from "querystring";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Checkbox, Flex, Toast } from "antd-mobile";
import { Link } from "react-router-dom";
import "./index.scss";
// import { Toast} from 'antd-mobile';

const AgreeItem = Checkbox.AgreeItem;
class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      protocolFlag: false
    };
  }

  chose = () => {
    this.setState({
      protocolFlag: !this.state.protocolFlag
    });
  };

  showToast = () => {
    Toast.info("请勾选协议", 1);
  };

  componentDidMount() {
    const { search } = this.props.location;
    const { id } = qs.parse(search.slice(1));
    this.props.treeDetail(id);
  }

  renderDetail = () => {
    if (this.props.treeDetails != null) {
      return (
        <div className="detail-box">
          <div className="header">
            <i
              className="fas fa-angle-left"
              onClick={this.props.history.goBack}
            ></i>
            <span>{this.props.treeDetails.data.data[0].treeName}</span>
          </div>
          <img
            className="pine_tree"
            src={
              "http://116.62.38.0:8888/" +
              this.props.treeDetails.data.data[0].treeThumbnail
            }
            alt=""
          />
          <div className="tree-intro">
            <div className="intro-left">
              <div className="treename">
                {this.props.treeDetails.data.data[0].treeName}
              </div>
              <div className="treeprice">
                {this.props.treeDetails.data.data[0].treePrice}元/年
              </div>
            </div>
            <div className="intro-right">
              {this.props.treeDetails.data.data[0].treePublisher}发布
            </div>
          </div>
          <div className="tree-history">
            <h4>历史典故</h4>
            <div className="history-text">
              {this.props.treeDetails.data.data[1].treeDetailDesc}
            </div>
          </div>
          <div className="middle">
            <div className="line"></div>
            <div className="tree-detail">树木详情</div>
            <div className="line"></div>
          </div>
          <img
            className="pro-pic"
            src={
              "http://116.62.38.0:8888/" +
              this.props.treeDetails.data.data[1].treeDetailImg
            }
            alt=""
          />
        </div>
      );
    } else {
      return <div></div>;
    }
  };
  render() {
    const { protocolFlag } = this.state;
    const { search } = this.props.location;
    const { id } = qs.parse(search.slice(1));

    return (
      <div className="container">
        {this.renderDetail()}
        <div className="agreement">
          <div className="agree-top">
            <Flex>
              <Flex.Item>
                <AgreeItem data-seed="logId" onChange={this.chose}>
                  您已阅读
                </AgreeItem>
              </Flex.Item>
            </Flex>
            <Link to="../agreement">《特色认养协议》</Link>
          </div>

          <div className="detailadopt">
            <div className="service">
              <i className="fas fa-headset"></i>
              <p>客服</p>
            </div>
            {(protocolFlag && (
              <Link
                to={{
                  pathname: `/foster`,
                  search: `id=${id}`
                }}
              >
                我要认养
              </Link>
            )) || <a onClick={this.showToast}>我要认养</a>}
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  state => state.treeDetailReducer,
  dispatch => bindActionCreators({ treeDetail }, dispatch)
)(Detail);

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Area from "./Area";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { espTree } from "../../action";

class Red extends Component {
  constructor(props) {
    super(props);

    this.state = {
      f: true
    };
  }

  componentDidMount() {
    this.props.espTree();
  }

  token = () => {
    return localStorage.getItem("token");
  };

  changeArea = () => {
    this.setState({
      f: !this.state.f
    });
  };

  renderTree = () => {
    if (this.props.treeType != null) {
      const { token } = this.props;
      return this.props.treeType.data.data.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-pic">
            <img
              className="tree"
              src={"http://116.62.38.0:8888/" + item.treeThumbnail}
              alt=""
            />
          </div>
          <div className="card-text">
            <h4>{item.treeName}</h4>
            <span>{item.treePublisher}提供</span>
            <p>{item.treePrice}元/年</p>
          </div>
          {/* {(token && ( */}
          <NavLink
            to={{
              pathname: `/detail`,
              search: `id=${item.treeId}`
            }}
          >
            我要认养
          </NavLink>
          {/* )) || <NavLink to="../login">我要认养</NavLink>} */}
        </div>
      ));
    }
  };
  render() {
    const { f } = this.state;
    return (
      <div className="red-box">
        <img className="bg" src={require("../../assets/img/bg.jpg")} alt="" />
        <a className="area" onClick={this.changeArea}>
          区域 <i className="fas fa-angle-down"></i>
          {f || <Area />}
        </a>

        {this.renderTree()}
      </div>
    );
  }
}

export default connect(
  state => state.espTreeReducer,
  dispatch => bindActionCreators({ espTree }, dispatch)
)(Red);

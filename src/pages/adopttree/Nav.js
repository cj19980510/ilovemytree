import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => {
  return (
    <div className="nav">
      <NavLink to="/adopttree/Culture" activeClassName="active">
        文化认养
      </NavLink>
      <NavLink to="/adopttree/Red" activeClassName="active">
        红色认养
      </NavLink>
    </div>
  );
};

export default Nav;

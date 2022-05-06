import React from "react";
import { Link } from "react-router-dom";
import "./style.less";

const HeadNav = () => {
  return (
    <div id="home-header" className="clear-fix">
      <div className="home-header-left">
        <Link to='/city'>
          <span>北京</span>
        </Link>

        <i className="icon-angle-down"></i>
      </div>
      <div className="home-header-middle">
        <div className="search-container">
          <i className="icon-search"></i>
          <input />
        </div>
      </div>
      <div className="home-header-right">
        <i className="iconfont icon-car"></i>
      </div>
    </div>
  );
};

export default HeadNav;

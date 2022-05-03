import React from "react";
import './style.less'

const HeadNav = () => {
    return (
        <div id="home-header" className="clear-fix">
            <div className="home-header-left">
                <span>北京</span>
                <i className="icon-angle-down"></i>
            </div>
            <div className="home-header-middle">
                <div className="search-container">
                    <i className="icon-search"></i>
                    <input/>
                </div>
            </div>
            <div className="home-header-right">
                <i className="iconfont icon-car"></i>
            </div> 
        </div>
    )
}

export default HeadNav;
import React from "react";
import { withRouter } from "react-router-dom";
import "./style.less";

const PubHeader = (props) => {
  const handleBack = () => {
    props.history.goBack();
    // 使用window自带的方法
    // window.history.back();
  };
  return (
    <div className="commonHeader">
      <span className="choose-icon" onClick={handleBack}>
        <i className="icon-chevron-left"></i>
      </span>
      <h1>{props.title}</h1>
    </div>
  );
};

//withRouter ：使一般组件具有路由组件的API,例如操作history
export default withRouter(PubHeader);

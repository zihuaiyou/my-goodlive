import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import './style.less'

const UserInfo = (props) => {

  useEffect(() => {
    if (!props.user.token) props.history.push("/login");
  }, []);
  return (
    <div className="userInfo-container">
      <p>
        <i className="icon-user">
          <span>{props.user.username}</span>
        </i>
      </p>
      <p>
        <i className="icon-map-marker">
          <span>{props.cityName}</span>
        </i>
      </p>
    </div>
  );
};

export default withRouter(UserInfo);

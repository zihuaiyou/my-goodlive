import React, { useState } from "react";
import api from "../../../api";
import "./style.less";
import validator from "../../../utils/validator";
import classNames from "classnames";

const LoginView = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  //登录按钮的回调
  const handleClick = (event) => {
    event.preventDefault();
    // 验证输入框信息
    if (validator({ username, password }).isValid) {
      // 输入信息有效
      console.log('输入信息有效');
      setError({});
      api.postLoginData({ username, password }).then((res) => {
        if (res.data.status === 200) {
          console.log("登录成功", res.data);
          props.onLoad(res.data);
          window.history.back();
        } else console.log("登录失败");
      });
      console.log(username, password);
    } else {
      // 输入信息无效
      console.log(validator({ username, password }).error);
      setError(validator({ username, password }).error);
    }
  };
  // 获取输入框信息的回调
  const handleChange = (event) => {
    if (event.target.name === "username") setUsername(event.target.value);
    if (event.target.name === "password") setPassword(event.target.value);
  };
  return (
    <div id="login-container">
      <form>
        <div
          className={classNames("input-container", "phone-container", {
            "error-container": error.username,
          })}
        >
          <i className="icon-tablet"></i>
          <input
            type="text"
            placeholder="用户名/手机号"
            value={username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div
          className={classNames("input-container", "password-container", {
            "error-container": error.password,
          })}
        >
          <i className="icon-key"></i>
          <button>发送验证码</button>
          <input
            type="password"
            placeholder="请输入验证码"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <button className="btn-login" onClick={handleClick}>
          登 录
        </button>
      </form>
    </div>
  );
};

export default LoginView;

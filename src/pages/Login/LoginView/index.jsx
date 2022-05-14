import React, { useState } from "react";
import api from "../../../api";
import "./style.less";

const LoginView = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = (event) => {
    event.preventDefault();
    api.postLoginData({ username, password }).then((res) => {
      if (res.data.status === 200) {
        console.log("登录成功", res.data);
        props.onLoad(res.data);
      } else console.log("登录失败");
    });
    console.log(username, password);
  };
  const handleChange = (event) => {
    if (event.target.name === "username") setUsername(event.target.value);
    if (event.target.name === "password") setPassword(event.target.value);
  };
  return (
    <div id="login-container">
      <form>
        <div className="input-container phone-container">
          <i className="icon-tablet"></i>
          <input
            type="text"
            placeholder="用户名/手机号"
            value={username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="input-container password-container">
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

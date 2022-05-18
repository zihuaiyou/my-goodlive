import React from "react";
import { useDispatch } from "react-redux";
import LoginView from "./LoginView";
import { setLoginAction } from "../../redux/actions";

const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = (user) => {
    // 将登录状态存入redux
    dispatch(setLoginAction(user));
    // 将登录状态存入localStorage
    localStorage.setItem("my-goodlive",JSON.stringify(user))
  };
  return (
    <div>
      <LoginView onLoad={handleLogin} />
    </div>
  );
};

export default Login;

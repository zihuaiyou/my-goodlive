import React from "react";
import { useDispatch } from "react-redux";
import LoginView from "./LoginView";
import { setLoginAction } from "../../redux/actions";

const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = (user) => {
    dispatch(setLoginAction(user));
  };
  return (
    <div>
      <LoginView onLoad={handleLogin} />
    </div>
  );
};

export default Login;

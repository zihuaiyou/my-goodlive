import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Main/Home";
import LiveSevice from "../pages/Main/LiveSevice";
import Shop from "../pages/Main/Shop";
import User from "../pages/Main/User";
import BottomNav from "../components/BottomNav";
import City from "../pages/City";
import Layout from "../pages/Main/Layout";
import Search from "../pages/Search";

const AppRouter = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/city" component={City} />
        {/* react v18 Switch被淘汰，更新为Routes */}
        {/* 向路由传参应提前注册参数 */}
        <Route path="/search/:keywords" component={Search} />
        <Layout>
          {/* 设置二级路由，共享BottomNav组件 */}
          <BottomNav />
          <Switch>
            {/* react v18 component 更新为element */}
            {/* react v18 {Home} 写法更新为{<Home/>} */}
            <Route exact path="/" component={Home} />
            <Route path="/live" component={LiveSevice} />
            <Route path="/shop" component={Shop} />
            <Route path="/user" component={User} />
          </Switch>
        </Layout>
      </Switch>
    </HashRouter>
  );
};

export default AppRouter;

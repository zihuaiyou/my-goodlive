import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import LiveSevice from "../pages/LiveSevice";
import Shop from "../pages/Shop";
import User from "../pages/User";
import BottomNav from "../components/BottomNav";

const AppRouter = () => {
  return (
    <Router>
      {/* react v18 Switch被淘汰，更新为Routes */}
      <BottomNav />
      <Switch>
        {/* react v18 component 更新为element */}
        {/* react v18 {Home} 写法更新为{<Home/>} */}
        <Route exact  path="/" component={Home} />
        <Route path="/live" component={LiveSevice} />
        <Route path="/shop" component={Shop} />
        <Route path="/user" component={User} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

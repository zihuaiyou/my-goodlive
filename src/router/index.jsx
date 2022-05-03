import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
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
      <Routes>
        {/* react v18 component 更新为element */}
        {/* react v18 {Home} 写法更新为{<Home/>} */}
        <Route exact = "true" path="/" element={<Home />} />
        <Route path="/live" element={<LiveSevice />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

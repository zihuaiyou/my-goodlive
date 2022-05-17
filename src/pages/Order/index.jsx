import React from "react";
import OrderHeader from "../../components/PubHeader";
import UserInfo from "./UserInfo";
import OrderList from "./OrderList";
import { useSelector } from "react-redux";

const Order = () => {
  const user = useSelector((state) => state.login.user);
  const cityName = useSelector((state) => state.city.cityName);
  return (
    <div>
      <OrderHeader title="订单评价" />
      <UserInfo user={user} cityName={cityName} />
      <OrderList user={user}/>
    </div>
  );
};

export default Order;

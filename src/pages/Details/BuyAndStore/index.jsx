import React from "react";
import { useSelector } from "react-redux";
import BuyAndStoreView from "../BuyAndStoreView";
const BuyAndStore = (props) => {
  const storeIdList = useSelector((state) => state.collect);
  const isLogin = useSelector((state) => state.login.user);

  return (
    <div>
      <BuyAndStoreView
        storeIdList={storeIdList}
        id={props.id}
        isLogin={isLogin}
      />
    </div>
  );
};
export default BuyAndStore;

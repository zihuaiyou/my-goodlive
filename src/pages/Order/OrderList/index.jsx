import React, { useEffect, useState } from "react";
import api from "../../../api";
import OrderView from "../OrderView";

const OrderList = (props) => {
  const [orderCommentData, setOrderCommentData] = useState([]);
  useEffect(() => {
    api
      .getOrderData({ username: props.user.username })
      .then((res) => {
        if (res.data.status === 200) {
          //   console.log(res.data);
          setOrderCommentData(res.data.result);
        }
      })
      .catch((err) => console.log(err));
      return () => setOrderCommentData([])
      
  }, []);
  return (
    <div>
      {orderCommentData.length > 0 ? (
        <OrderView data={orderCommentData} />
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default OrderList;

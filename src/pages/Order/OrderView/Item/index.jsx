import React from "react";
import "./style.less";

const Item = (props) => {
//   console.log(props.data);
  return (
    <div className="order-item-container clear-fix">
      <div className="order-item-img float-left">
        <img src={props.data.img} alt="" />
      </div>
      <div className="order-item-content">
        <span>商户：{props.data.title}</span>
        <span>类型：{props.data.houseType}</span>
        <span>价格: {props.data.price} 元</span>
      </div>
    </div>
  );
};

export default Item;

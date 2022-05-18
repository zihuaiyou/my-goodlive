import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../../../api";
import "./style.less";

const Item = (props) => {
  // console.log(props.data);
  const username = useSelector((state) => state.login.user.username);
  const [commentState, setCommentState] = useState(0);
  const [commentDataFlag, setCommentDataFlag] = useState(false);
  const comment = useRef();
  useEffect(() => {
    setCommentState(props.data.commentState);
  }, []);

  const handleComment = () => {
    setCommentState(1);
  };
  const handleCancle = () => {
    setCommentState(0);
  };
  const handleSubmit = () => {
    const commentData = comment.current.value;
    if (!commentData) setCommentDataFlag(true);
    else {
      // 发送post请求
      api
        .postOrderComment({
          username,
          id: props.data.id,
          comment: commentData,
        })
        .then((res) => {
          if (res.data.status === 200) setCommentState(2); //已评价
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="order-item-container clear-fix">
      <div className="order-item-img float-left">
        <img src={props.data.img} alt="" />
      </div>
      <div className="order-item-comment float-right">
        {commentState === 2 ? (
          <button className="unselected-comment-btn comment-btn" disabled>
            已评价
          </button>
        ) : commentState === 0 ? (
          <button className="comment-btn" onClick={handleComment}>
            评价
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="order-item-content">
        <span>商户：{props.data.title}</span>
        <span>类型：{props.data.houseType}</span>
        <span>价格: {props.data.price} 元</span>
      </div>
      {/* commentState === 1评价中 */}
      {commentState === 1 ? (
        <div className="comment-text-container">
          <textarea
            ref={comment}
            // 不评价直接点击按钮会显示红框
            className={classNames("comment-text", { warn: commentDataFlag })}
          ></textarea>
          <button className="comment-btn" onClick={handleSubmit}>
            评价
          </button>
          <button
            className="comment-btn"
            id="text-button"
            onClick={handleCancle}
          >
            取消
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Item;

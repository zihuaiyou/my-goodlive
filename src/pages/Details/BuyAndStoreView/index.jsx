import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { setCollectAction, unCollectAction } from "../../../redux/actions";
import "./style.less";
const BuyAndStoreView = (props) => {
  const dispatch = useDispatch();
  // 处理收藏和取消收藏的回调
  const handleStore = () => {
    //   如果没有登录，则跳转到登录页面
    if (!props.isLogin.token) props.history.push("/login");
    else {
      if (isStore()) {
        //已收藏
        dispatch(unCollectAction(props.id));
        console.log("已取消收藏");
      } else {
        // 未收藏
        dispatch(setCollectAction(props.id));
        console.log("已成功收藏");
      }
    }
  };
  // 判断是否已被收藏
  const isStore = () => {
    return props.storeIdList.some((item) => item === props.id);
  };
  return (
    <div>
      {isStore() ? (
        <button className="btn sc btn-o" onClick={handleStore}>
          已收藏{" "}
        </button>
      ) : (
        <button className="btn sc" onClick={handleStore}>
          收藏{" "}
        </button>
      )}
      <button className="btn buy">购买</button>
    </div>
  );
};
export default withRouter(BuyAndStoreView);

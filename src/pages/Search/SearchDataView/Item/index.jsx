import React, { useEffect, useState } from "react";
import "./style.less";
import DefaultImag from "../../../../assets/images/defaultImag.png";
import { asyncLoadImag } from "../../../../utils/loadImag";

const Item = (props) => {
  const [imagUrl, setImagUrl] = useState("");
  useEffect(() => {
    //设置标记，判断组件是否卸载
    let isMounted = true;
    asyncLoadImag(props.data.img)
      .then((res) => {
        //组件卸载后不再更新state
        if (isMounted) setImagUrl(res);
      })
      .catch((error) => console.log(error));
    return () => {
      // 更新标记，表示组件已经卸载
      isMounted = false; 
    };
  }, [props.data.img]);

  return (
    <div className="list-item">
      {imagUrl ? (
        <img src={props.data.img} alt="" />
      ) : (
        <img src={DefaultImag} alt="" />
      )}
      <div className="mask">
        <div className="left">
          <p>{props.data.title}</p>
          <p>{props.data.houseType}</p>
        </div>
        <div className="right">
          <div className="btn">{props.data.rentType}</div>
          <p
            dangerouslySetInnerHTML={{ __html: props.data.price + "元/月" }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Item;

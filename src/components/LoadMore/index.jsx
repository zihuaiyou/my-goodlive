import React, { useRef, useEffect, useState } from "react";
import "./style.less";

const LoadMore = (props) => {
  const [Height, setHeight] = useState(10000);
  const more = useRef();
  useEffect(() => {
    // 获取视口高度
    const winHeight = document.documentElement.clientHeight;
    let timeId = null;
    window.addEventListener("scroll", () => {
      if (more.current) {
        // 获取指定组件距离视口顶部高度
        setHeight(more.current.getBoundingClientRect().top);
        if (Height < winHeight) {
          if (timeId) {
            clearTimeout(timeId);
          } else {
            timeId = setTimeout(() => {
              // console.log("加载更多");
              props.onLoad();
            }, 500);
          }
        }
      }

      // console.log(more.current.getBoundingClientRect().top > winHeight);
    });
  }, [Height]);
  return (
    <div ref={more} className="load-more">
      加载更多
    </div>
  );
};

export default LoadMore;

import React, { useRef, useEffect, useState } from "react";
import "./style.less";

const LoadMore = (props) => {
  const [Height, setHeight] = useState(10000);
  const more = useRef();
  useEffect(() => {
    // 获取视口高度
    const winHeight = document.documentElement.clientHeight;
    let timeId = null;
    const scrollHandle = () => {
      if (more.current) {
        // 获取指定组件距离视口顶部高度
        setHeight(more.current.getBoundingClientRect().top);
        if (Height < winHeight) {
          if (timeId) clearTimeout(timeId);
          else timeId = setTimeout(() => props.onLoad(), 500);
        }
      }
    };
    window.addEventListener("scroll", scrollHandle);
  }, [Height,props]);
  return (
    <div ref={more} className="load-more">
      加载更多
    </div>
  );
};

export default LoadMore;

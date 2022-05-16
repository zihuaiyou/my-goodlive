import React, { useState } from "react";
import "./style.less";
import { nanoid } from "nanoid";
import classNames from "classnames";

const Tabs = (props) => {
    // 存储被点击的li标签的index
  const [currentIndex, setCurrentIndex] = useState(0);
  const hadleTabsClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div>
      <ul className="tab_title_wrap">
        {React.Children.map(props.children, (element, index) => {
          return (
            <li
              key={nanoid()}
              className={classNames("tab_title", {
                active: index === currentIndex,
              })}
              onClick={() => hadleTabsClick(index)}
            >
              {element.props.lable}
            </li>
          );
        })}
      </ul>
      <div>
        {React.Children.map(props.children, (element, index) => {
          return index === currentIndex ? element.props.children : "";
        })}
      </div>
    </div>
  );
};

export default Tabs;

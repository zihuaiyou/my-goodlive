import React from "react";
import "./style.less";

const HomeHotView = (props) => {
  return (
    <div className="hotproduct">
          <h3>{props.title}</h3>
      <div className="hot-container">
        <ul>
          {props.data.map((elem, index) => {
            return (
              <li key={elem.id}>
                <a href={elem.link}>
                  <img src={elem.img} alt="图片..." />
                  <span>{elem.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default HomeHotView;

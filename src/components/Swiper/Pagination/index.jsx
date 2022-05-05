import React from "react";
import "./style.less";
import classnames from "classnames";
import { nanoid } from "nanoid";

const Pagination = (props) => {
  return (
    <div className="swiper-pagination">
      <ul>
        {Array(props.pageLens)
          .fill(0)
          .map((elem, index) => {
            return (
              <li
                key={nanoid()}
                className={classnames({ selected: index === props.index })}
              ></li>
            );
          })}
      </ul>
    </div>
  );
};

export default Pagination;

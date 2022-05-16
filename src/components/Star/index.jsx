import classNames from "classnames";
import React from "react";
import "./style.less";
import { nanoid } from "nanoid";

const Star = (props) => {
  const handleStars = () => {
    let stars = 0;
    if (props.starNum > 5) stars = 5;
    else if (props.starNum < 1) stars = 1;
    else stars = props.starNum;
    return stars;
  };

  return (
    <div>
      {Array(5)
        .fill(0)
        .map((elem, index) => {
          return (
            <i
              key={nanoid()}
              className={classNames(
                { "icon-star-o": index >= handleStars() },
                {
                  "icon-star": index < handleStars(),
                }
              )}
            ></i>
          );
        })}
    </div>
  );
};

export default Star;

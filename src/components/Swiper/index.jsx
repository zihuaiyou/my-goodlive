import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import {nanoid} from 'nanoid';
import Pagination from './Pagination'


import "./style.less";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Swiper = (props) => {
  const [index, setIndex] = useState(0);
  const handleChangeIndex = (index) => {
    setIndex(index);
  };
  return (
    <div className="swiper">
      <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        {props.banners.map((elem, index) => {
          return (
            <div key={nanoid()} className="swiper-view">
              <img src={elem} alt="图片1" />
            </div>
          );
        })}
      </AutoPlaySwipeableViews>
      <Pagination index = {index} onChangeIndex = {handleChangeIndex} pageLens = {props.banners.length}/>
    </div>
  );
};

export default Swiper;

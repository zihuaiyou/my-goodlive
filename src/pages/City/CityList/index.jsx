import React, { useEffect, useState } from "react";
import "./style.less";
import api from "../../../api";
import { nanoid } from "nanoid";
import { withRouter } from "react-router-dom";

const CityList = (props) => {
  const [hotCityList, setHotCityList] = useState([]);

  //向后台请求热门城市列表
  useEffect(() => {
    api.getHotCityList().then((res) => {
      setHotCityList(res.data.result);
      
    });
  }, []);
  //  const handleChangeCity  = (city) => {
  //     console.log(city);
  //  }
  return (
    <div className="city-list">
      <h3>热门城市</h3>
      <ul>
        {hotCityList.map((elem, index) => {
          return (
            <li key={nanoid()}>
              <span onClick={() =>{ 
                  props.onEvent(elem);
                  }}>{elem}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default withRouter(CityList);

import React, { useState, useEffect } from "react";
import CitySelect from "react-city-select";
import api from "../../../api";
import cityLists from "../../../assets/cityTemplate";
import './style.less'

const CityLists = (props) => {
  const handleSelectCity = (cityData) => {
    console.log("选中数据项:",cityData.name);
    props.onEvent(cityData.name)
  };
  const [cityData, setCityData] = useState(cityLists);
  useEffect(
    () =>
      api.getCityData().then((res) => {
        if (res.status === 200) setCityData(res.data.result.indexCitys);
        // console.log(res.data.result.indexCitys);
      }),
    []
  );

  return (
    <div className="city-lists">
        <h3>城市列表</h3>
      <CitySelect
        // 传入数据
        data={cityData}
        // 传入回调
        onSelectItem={handleSelectCity}
      ></CitySelect>
    </div>
  );
};

export default CityLists;

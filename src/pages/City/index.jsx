import React, { useState } from "react";
import PubHeader from "../../components/PubHeader";
import CurrentCity from "./CurrentCity";
import CityList from "./CityList";

const City = () => {
  const [currentCityName,setCurrentCityName] = useState('北京');
  const changeCity = (city) => {
    setCurrentCityName(city);
    console.log(city);
    
  }
  return (
    <div>
      <PubHeader title="城市选择" />
      <CurrentCity cityName = {currentCityName}/>
      <CityList onEvent = {changeCity}/>
    </div>
  );
};
export default City;

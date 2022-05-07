import React from "react";
import PubHeader from "../../components/PubHeader";
import CurrentCity from "./CurrentCity";
import CityList from "./CityList";
import { useSelector, useDispatch } from "react-redux";
import { changeCityAction } from "../../redux/actions";

const City = () => {
  // const [currentCityName, setCurrentCityName] = useState("北京");

  //useDispatch: 映射操作状态的方法(设置redux中的state)
  //useSelector:映射状态(读取存储在redux中的state)
  const dispatch = useDispatch();
  const handleChangeCity = (city) => {
    // setCurrentCityName(city);
    dispatch(changeCityAction(city));
  };
  const city = useSelector((state) => state.city);
  return (
    <div>
      <PubHeader title="城市选择" />
      <CurrentCity cityName={city.cityName} />
      <CityList onEvent={handleChangeCity} />
    </div>
  );
};
export default City;

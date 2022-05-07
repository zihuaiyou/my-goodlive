import React from "react";
import HeadNav from "../../../components/HeadNav";
import Swiper from "../../../components/Swiper";
import Banner1 from "../../../assets/images/banner1.png";
import Banner2 from "../../../assets/images/banner2.png";
import Banner3 from "../../../assets/images/banner3.png";
import HomeHotList from "./HomeHotLists";
import { useSelector } from "react-redux";

const Home = () => {
  const cityName = useSelector((state) => state.city.cityName);
  return (
    <div>
      <HeadNav cityName={cityName} />
      <Swiper banners={[Banner1, Banner2, Banner3]} />
      <HomeHotList cityName = {cityName}/>
    </div>
  );
};
export default Home;

import React from "react";
import HeadNav from "../../../components/HeadNav"; 
import Swiper from "../../../components/Swiper";
import Banner1 from '../../../assets/images/banner1.png'
import Banner2 from '../../../assets/images/banner2.png'
import Banner3 from '../../../assets/images/banner3.png'
import HomeHotList from "./HomeHotLists";

const Home = () => {
    return (
        <div>
            <HeadNav/>
            <Swiper banners ={[Banner1,Banner2,Banner3]}/>
            <HomeHotList/>
        </div>
    )
}
export default Home;
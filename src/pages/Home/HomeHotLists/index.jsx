import React, { useEffect, useState } from "react";
import api from "../../../api";
import HomeHotView from "../HomeHotView";

const HomeHotList = () => {
  const [homeHotList1, setHomeHotList1] = useState([]);
  const [homeHotList2, setHomeHotList2] = useState([]);
  useEffect(() => {
    api.getHomeHot1().then((res) => {
      if (res.status === 200) setHomeHotList1(res.data.result);
    });
  }, []);
  useEffect(() => {
    api.getHomeHot2().then((res) => {
      if (res.status === 200) setHomeHotList2(res.data.result);
    });
  }, []);
  return <div>
      {
          homeHotList1.length>0?<HomeHotView data = {homeHotList1} title = {'热门商品'}/>:
          <div>Loading</div>
      }
      {
          homeHotList2.length>0?<HomeHotView data = {homeHotList2} title = {'新品推荐'}/>:
          <div>Loading</div>
      }
  </div>;
};
export default HomeHotList;

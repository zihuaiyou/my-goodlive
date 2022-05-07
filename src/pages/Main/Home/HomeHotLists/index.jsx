import React, { useEffect, useState } from "react";
import api from "../../../../api";
import HomeHotView from "../HomeHotView";

const HomeHotList = (props) => {
  const [homeHotList1, setHomeHotList1] = useState([]);
  const [homeHotList2, setHomeHotList2] = useState([]);
  useEffect(() => {
    api.getHomeHot1({ cityName: props.cityName }).then((res) => {
      if (res.status === 200) setHomeHotList1(res.data.result);
    });
  }, [props.cityName]);
  useEffect(() => {
    api.getHomeHot2({ cityName: props.cityName }).then((res) => {
      if (res.status === 200) setHomeHotList2(res.data.result);
    });
  }, [props.cityName]);
  return (
    <div>
      {homeHotList1.length > 0 ? (
        <HomeHotView
          data={homeHotList1}
          title={"热门商品"}
          cityName={props.cityName}
        />
      ) : (
        <div>Loading</div>
      )}
      {homeHotList2.length > 0 ? (
        <HomeHotView
          data={homeHotList2}
          title={"新品推荐"}
          cityName={props.cityName}
        />
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
export default HomeHotList;

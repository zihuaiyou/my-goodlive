import React from "react";
import "./style.less";
//引入公共头部组件
import DetailHeader from "../../../components/PubHeader";
import Swiper from "../../../components/Swiper";
import Tabs from "../../../components/Tabs";

const DetailView = (props) => {
  const detailsData = props.data;
  return (
    <div>
      <DetailHeader title="搜索详情" />
      <Swiper banners={props.data.imgs} />
      <Tabs>
        <div lable = '详情'>
          <div className="detail-info">
            <h3>{detailsData.title}</h3>
            <div className="box">
              <ul>
                <li>
                  <span>{detailsData.price} /月</span>
                  <p>租金</p>
                </li>
                <li>
                  <span>{detailsData.info.type}</span>
                  <p>房屋类型</p>
                </li>
                <li>
                  <span>{detailsData.houseType}</span>
                  <p>面积</p>
                </li>
              </ul>
            </div>
            <div className="info">
              <div className="info-list">
                <p>类型：{detailsData.info.type}</p>
                <p>朝向：{detailsData.info.orientation}</p>
              </div>
              <div className="info-list">
                <p>楼层：{detailsData.info.level}</p>
                <p>装修：{detailsData.info.style}</p>
              </div>
              <div className="info-list">
                <p>年代：{detailsData.info.years}</p>
              </div>
            </div>
          </div>
        </div>

        <div lable = '评价'>
          我是评价
        </div>
      </Tabs>
    </div>
  );
};
export default DetailView;

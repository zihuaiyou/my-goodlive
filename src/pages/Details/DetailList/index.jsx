import React, { useEffect, useState } from "react";
import DetailView from "../DetailView";
import api from "../../../api";

const DetailList = (props) => {
  const [detailData, setDetailsData] = useState({});
  useEffect(
    () =>
      api
        .getDetailData({ id: props.detailsId })
        .then((res) => {
          if (res.status === 200) {
            setDetailsData(res.data.result);
          }
        })
        .catch((error) => console.log(error)),
    [props.detailsId]
  );
  return (
    <div>
      {detailData.imgs ? <DetailView data={detailData}  id={props.detailsId}/> : <div>
        loading</div>}
    </div>
  );
};
export default DetailList;

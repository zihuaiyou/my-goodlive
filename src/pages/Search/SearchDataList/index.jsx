import React, { useEffect, useState } from "react";
import SearchDataView from "../SearchDataView";
import api from "../../../api";

const SearchDataList = (props) => {
  const [searchData, setSearchData] = useState({});
  useEffect(
    () =>
      api
        .getSearchData({
          search: props.keywords,
        })
        .then((res) => {
          if (res.status === 200) setSearchData(res.data.result.data);
        })
        .catch((error) => {
          console.log(error);
        }),
    [props.keywords]
  );
  return (
    <div>
      {searchData.length > 0 ? (
        <SearchDataView searchData={searchData} />
      ) : (
        <div>"Loading"</div>
      )}
    </div>
  );
};

export default SearchDataList;

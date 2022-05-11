import React, { useEffect, useState } from "react";
import SearchDataView from "../SearchDataView";
import api from "../../../api";
import LoadMore from "../../../components/LoadMore";

const SearchDataList = (props) => {
  const [searchData, setSearchData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const handleLoadMore = () => {
    http();
  };
  const http = () => {
    // console.log(props.keywords);
    api
      .getSearchData({
        search: props.keywords,
      })
      .then((res) => {
        if (res.status === 200) {
          setSearchData(searchData.concat(res.data.result.data));
          setHasMore(res.data.result.hasMore);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    http();
    return () => {
      setSearchData([]);
      setHasMore(false);
    };
  }, [props.keywords]);
  return (
    <div>
      {searchData.length > 0 ? (
        <SearchDataView searchData={searchData} />
      ) : (
        <div>"Loading"</div>
      )}
      {hasMore ? <LoadMore onLoad={handleLoadMore} /> : <div>看到底了</div>}
    </div>
  );
};

export default SearchDataList;

import React from "react";
import { useParams } from "react-router-dom";
import SearchDataList from "./SearchDataList";
import SearchHeader from './SearchHeader'

const Search = () => {
  // useParams:获取路由传递的参数
  const params = useParams();
  return (
    <div>
      <SearchHeader/>
      <SearchDataList keywords = {params.keywords}/>
    </div>
  );
};

export default Search;

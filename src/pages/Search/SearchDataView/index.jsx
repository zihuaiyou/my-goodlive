import React from "react";
import Item from "./Item";
import { nanoid } from "nanoid";

const SearchDataView = (props) => {
  return (
    <div>
      {props.searchData.map((elem, index) => {
        return <Item data={elem} key={nanoid()} />;
      })}
    </div>
  );
};

export default SearchDataView;

import React, { useEffect, useState } from "react";
import "./style.less";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchAction } from "../../redux/actions";
import { useParams } from "react-router-dom";

const SearchInput = (props) => {
  const [keywords, setKeywords] = useState("");
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const params = useParams();

  const handleChange = (event) => {
    setKeywords(event.target.value);
  };

  const handleKeyUp = (event) => {
    if (keywords.length > 0) {
      if (event.keyCode === 13) {
        props.history.push("/search/" + keywords);
        dispatch(updateSearchAction(keywords));
      }
    }
  };

  useEffect(() => {
    if (params.keywords) {
      dispatch(updateSearchAction(params.keywords));
    } else dispatch(updateSearchAction(""));
    setKeywords(searchTerm);
  }, [searchTerm, params.keywords]);

  return (
    <input
      type="text"
      className="search-input"
      onKeyUp={handleKeyUp}
      value={keywords}
      onChange={handleChange}
    />
  );
};

export default withRouter(SearchInput);

import React, { useState } from "react";
import "./style.less";
import { withRouter } from "react-router-dom";

const SearchInput = (props) => {
  const [keywords, setKeywords] = useState("");

  const handleChange = (event) => {
    setKeywords(event.target.value);
  };
  const handleKeyUp = (event) => {
    if (keywords.length > 0) {
      // console.log(keywords);
      if (event.keyCode === 13) props.history.push("/search/" + keywords);
    }
  };
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

import React, { useEffect, useState } from "react";
import api from "../../../api";
import LoadMore from "../../../components/LoadMore";
import CommentView from "../CommentView";

const Comment = (props) => {
  const [commentData, setCommentData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const http = () => {
    api
      .getCommentData({ id: props.id })
      .then((res) => {
        if (res.data.status === 200) {
          setCommentData(res.data.result.data.concat(commentData));
          setHasMore(res.data.result.hasMore);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleHasMore = () => {
    http();
  };
  useEffect(() => {
    http();
  }, []);
  return (
    <div>
      <CommentView data={commentData} />
      {hasMore ? <LoadMore onLoad={handleHasMore} /> : <div>已经加载完毕</div>}
    </div>
  );
};

export default Comment;

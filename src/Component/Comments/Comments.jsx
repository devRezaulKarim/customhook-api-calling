import { useState } from "react";
import useFetchData from "../../Hooks/useFetchData";
import commentsStyle from "./Comments.module.css";
import Comment from "../Comment/Comment";

export default function Comments() {
  const { data: comments } = useFetchData(
    "https://jsonplaceholder.typicode.com/comments"
  );
  const [showAll, setShowAll] = useState(false);
  const showComment = showAll ? comments : comments.slice(0, 12);
  return (
    <div className={commentsStyle.commentsWrapper}>
      <div className={commentsStyle.heading}>
        <h1>Comments</h1>
      </div>
      <div className={commentsStyle.comments}>
        {showComment.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      {comments.length > 0 && (
        <div className={commentsStyle.showBtn}>
          <button onClick={() => setShowAll(!showAll)}>
            {!showAll ? "Show All" : "Show Less"}
          </button>
        </div>
      )}
    </div>
  );
}
